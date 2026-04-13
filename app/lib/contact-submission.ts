/**
 * Trello card builders for the contact form.
 * Validation lives in contact-validation.ts — import from there for API routes.
 */

import type { NormalizedContact } from "@/app/lib/contact-validation";
import { stripControlChars } from "@/app/lib/contact-validation";

export type { NormalizedContact, RawContactBody } from "@/app/lib/contact-validation";
export {
  validateAndNormalizeContact,
  CONTACT_FIELD_LIMITS,
} from "@/app/lib/contact-validation";

function safeLine(s: string): string {
  return stripControlChars(s).replace(/\r\n/g, "\n");
}

/** Build Trello card description (plain text). All values sanitized for safe embedding. */
export function buildTrelloCardDescription(data: NormalizedContact): string {
  const lines = [
    `Name: ${safeLine(data.firstName)} ${safeLine(data.lastName)}`,
    `Phone: ${safeLine(data.phone)}`,
    `Email: ${safeLine(data.email)}`,
    `Appointment Reason: ${safeLine(data.appointmentReasonFinal)}`,
    `Best Way to Reach Me: ${safeLine(data.bestWayToReachMe)}`,
    `Best Time to Reach Me: ${safeLine(data.bestTimeToReachMeFinal)}`,
    `SMS communications consent: ${data.smsConsent === "yes" ? "Yes" : "No"}`,
    "",
    "Message:",
    data.message ? safeLine(data.message) : "(none)",
    "",
    `Page Name: ${safeLine(data.pageName)}`,
    `Source Path: ${safeLine(data.sourcePath)}`,
  ];
  return lines.join("\n");
}

/** Card title: New Request - First Last */
export function buildTrelloCardName(data: NormalizedContact): string {
  return `New Request - ${safeLine(data.firstName)} ${safeLine(data.lastName)}`;
}
