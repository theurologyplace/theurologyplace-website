/** Main clinic line (display format). */
export const CLINIC_PHONE = "210-617-3670";

export function clinicPhoneTelHref(): string {
  return `tel:${CLINIC_PHONE.replace(/\D/g, "")}`;
}

/** Business hours shown in the footer and on the Contact Us page. */
export const CLINIC_BUSINESS_HOURS_ROWS = [
  { days: "Mon - Fri", hours: "8:00 am - 5:00 pm" },
  { days: "Saturday", hours: "Appointment Only" },
  { days: "Sunday", hours: "Closed" },
] as const;
