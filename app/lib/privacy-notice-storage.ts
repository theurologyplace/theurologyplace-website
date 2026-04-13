/** Persisted when the user acknowledges the home privacy notice (link click or visiting the policy page). */
export const PRIVACY_NOTICE_ACKNOWLEDGED_KEY =
  "theurologyplace_privacy_notice_acknowledged";

export function persistPrivacyNoticeAcknowledged(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PRIVACY_NOTICE_ACKNOWLEDGED_KEY, "1");
  } catch {
    /* ignore quota / private mode */
  }
}

export function isPrivacyNoticeAcknowledged(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(PRIVACY_NOTICE_ACKNOWLEDGED_KEY) === "1";
  } catch {
    return false;
  }
}
