/**
 * Server-side Google reCAPTCHA (v2 checkbox) verification.
 * Never log tokens or the secret.
 */

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

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

  try {
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export function isRecaptchaConfigured(): boolean {
  return (
    Boolean(process.env.RECAPTCHA_SECRET_KEY?.trim()) &&
    Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim())
  );
}
