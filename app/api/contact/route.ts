import { NextResponse } from "next/server";
import {
  sendContactNotificationEmail,
  sendTrelloBoardEmail,
} from "@/app/lib/contact-email";
import {
  validateAndNormalizeContact,
  type RawContactBody,
} from "@/app/lib/contact-submission";
import {
  checkContactRateLimit,
  getClientIp,
} from "@/app/lib/contact-rate-limit";
import {
  isRecaptchaConfigured,
  verifyRecaptchaResponse,
} from "@/app/lib/contact-recaptcha";

/** Generic copy for clients — avoids leaking validation internals. */
const GENERIC_VALIDATION_ERROR =
  "Invalid or incomplete submission. Please check your information and try again.";

const RATE_LIMIT_MESSAGE =
  "Too many submissions from this connection. Please wait and try again later.";

/** POST /api/contact — validates the submission and creates a Trello card via email-to-board. */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkContactRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: RATE_LIMIT_MESSAGE },
      { status: 429 },
    );
  }

  let body: RawContactBody;
  try {
    body = (await request.json()) as RawContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const honeypot =
    typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot.length > 0) {
    return NextResponse.json(
      { ok: false, error: GENERIC_VALIDATION_ERROR },
      { status: 400 },
    );
  }

  if (isRecaptchaConfigured()) {
    const secret = process.env.RECAPTCHA_SECRET_KEY?.trim() ?? "";
    const token =
      typeof body.gRecaptchaResponse === "string"
        ? body.gRecaptchaResponse
        : "";
    const ok =
      secret.length > 0 && (await verifyRecaptchaResponse(secret, token));
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: GENERIC_VALIDATION_ERROR },
        { status: 400 },
      );
    }
  }

  const validated = validateAndNormalizeContact(body);
  if (!validated.success) {
    return NextResponse.json(
      { ok: false, error: GENERIC_VALIDATION_ERROR },
      { status: 400 },
    );
  }

  const normalized = validated.data;

  try {
    await sendTrelloBoardEmail({ contact: normalized });
  } catch (error) {
    console.error("[contact] Trello board email failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "The request could not be completed. Please try again later.",
      },
      { status: 502 },
    );
  }

  try {
    await sendContactNotificationEmail({ contact: normalized });
  } catch (error) {
    console.error("[contact] Resend email failed", error);
  }

  return NextResponse.json({
    ok: true,
  });
}
