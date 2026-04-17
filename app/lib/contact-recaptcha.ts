/**
 * Server-side Google reCAPTCHA v3 verification (score + action).
 * Never log tokens or the secret.
 */

import { CONTACT_RECAPTCHA_ACTION } from "@/app/lib/contact-recaptcha-constants";

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

function isRecaptchaTemporarilyDisabled(): boolean {
  return process.env.NEXT_PUBLIC_DISABLE_CONTACT_RECAPTCHA?.trim() === "true";
}

/** Minimum score (0–1). Override with RECAPTCHA_SCORE_THRESHOLD (e.g. 0.5). */
function getRecaptchaScoreThreshold(): number {
  const raw = process.env.RECAPTCHA_SCORE_THRESHOLD?.trim();
  if (!raw) return 0.5;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0 || n > 1) return 0.5;
  return n;
}

type SiteVerifyJson =
  | {
      success: true;
      score: number;
      action: string;
      challenge_ts?: string;
      hostname?: string;
    }
  | {
      success: false;
      "error-codes"?: string[];
    };

export async function verifyRecaptchaResponse(
  secret: string,
  token: string,
): Promise<boolean> {
  const trimmed = token.trim();
  if (!trimmed) return false;

  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", trimmed);

  let res: Response;
  try {
    res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch {
    return false;
  }

  if (!res.ok) return false;

  let data: SiteVerifyJson;
  try {
    data = (await res.json()) as SiteVerifyJson;
  } catch {
    return false;
  }

  if (!data.success) return false;

  if (data.action !== CONTACT_RECAPTCHA_ACTION) return false;

  const threshold = getRecaptchaScoreThreshold();
  if (typeof data.score !== "number" || data.score < threshold) return false;

  return true;
}

export function isRecaptchaConfigured(): boolean {
  if (isRecaptchaTemporarilyDisabled()) return false;

  return (
    Boolean(process.env.RECAPTCHA_SECRET_KEY?.trim()) &&
    Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim())
  );
}
