/**
 * Server-side parsing, validation, and Trello payload helpers for the contact form.
 */

export type RawContactBody = {
  firstName?: unknown;
  lastName?: unknown;
  phone?: unknown;
  email?: unknown;
  appointmentReason?: unknown;
  otherAppointmentReason?: unknown;
  bestWayToReachMe?: unknown;
  bestTimeToReachMe?: unknown;
  otherBestTimeToReachMe?: unknown;
  message?: unknown;
  pageName?: unknown;
  sourcePath?: unknown;
  serviceName?: unknown;
  category?: unknown;
};

export type NormalizedContact = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  /** Final appointment reason after "Other" resolution */
  appointmentReasonFinal: string;
  bestWayToReachMe: string;
  /** Final best time after "Other" resolution */
  bestTimeToReachMeFinal: string;
  message: string;
  pageName: string;
  sourcePath: string;
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Resolve conditional "Other" fields into final strings for Trello / storage. */
export function normalizeContactFields(input: RawContactBody): {
  normalized: NormalizedContact;
  fieldErrors: string[];
} {
  const fieldErrors: string[] = [];

  const firstName = str(input.firstName);
  const lastName = str(input.lastName);
  const phone = str(input.phone);
  const email = str(input.email);
  const appointmentReason = str(input.appointmentReason);
  const otherAppointmentReason = str(input.otherAppointmentReason);
  const bestWayToReachMe = str(input.bestWayToReachMe);
  const bestTimeToReachMe = str(input.bestTimeToReachMe);
  const otherBestTimeToReachMe = str(input.otherBestTimeToReachMe);
  const message = str(input.message);
  const pageName = str(input.pageName) || "(not provided)";
  const sourcePath = str(input.sourcePath) || "(not provided)";

  if (!firstName) fieldErrors.push("firstName is required");
  if (!lastName) fieldErrors.push("lastName is required");
  if (!phone) fieldErrors.push("phone is required");
  if (!email) fieldErrors.push("email is required");
  else if (!EMAIL_RE.test(email)) fieldErrors.push("email is invalid");
  if (!appointmentReason) fieldErrors.push("appointmentReason is required");
  if (!bestWayToReachMe) fieldErrors.push("bestWayToReachMe is required");

  let appointmentReasonFinal = appointmentReason;
  if (appointmentReason === "Other") {
    if (!otherAppointmentReason) {
      fieldErrors.push("otherAppointmentReason is required when appointmentReason is Other");
    } else {
      appointmentReasonFinal = otherAppointmentReason;
    }
  }

  let bestTimeToReachMeFinal: string;
  if (bestTimeToReachMe === "Other") {
    if (!otherBestTimeToReachMe) {
      fieldErrors.push("otherBestTimeToReachMe is required when bestTimeToReachMe is Other");
      bestTimeToReachMeFinal = "";
    } else {
      bestTimeToReachMeFinal = otherBestTimeToReachMe;
    }
  } else if (bestTimeToReachMe) {
    bestTimeToReachMeFinal = bestTimeToReachMe;
  } else {
    bestTimeToReachMeFinal = "(not specified)";
  }

  const normalized: NormalizedContact = {
    firstName,
    lastName,
    phone,
    email,
    appointmentReasonFinal,
    bestWayToReachMe,
    bestTimeToReachMeFinal,
    message,
    pageName,
    sourcePath,
  };

  return { normalized, fieldErrors };
}

/** Build Trello card description (plain text; Trello renders basic formatting). */
export function buildTrelloCardDescription(data: NormalizedContact): string {
  const lines = [
    `Name: ${data.firstName} ${data.lastName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Appointment Reason: ${data.appointmentReasonFinal}`,
    `Best Way to Reach Me: ${data.bestWayToReachMe}`,
    `Best Time to Reach Me: ${data.bestTimeToReachMeFinal}`,
    "",
    "Message:",
    data.message || "(none)",
    "",
    `Page Name: ${data.pageName}`,
    `Source Path: ${data.sourcePath}`,
  ];
  return lines.join("\n");
}

/** Card title: New Request - First Last */
export function buildTrelloCardName(data: NormalizedContact): string {
  return `New Request - ${data.firstName} ${data.lastName}`;
}
