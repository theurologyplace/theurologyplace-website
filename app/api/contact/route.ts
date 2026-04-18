import { NextResponse } from "next/server";
import { sendContactNotificationEmail } from "@/app/lib/contact-email";
import {
  buildTrelloCardDescription,
  buildTrelloCardName,
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

/** POST /api/contact — creates a Trello card (TRELLO_KEY, TRELLO_TOKEN, TRELLO_LIST_ID). */
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

  const key = process.env.TRELLO_KEY;
  const token = process.env.TRELLO_TOKEN;
  const idList = process.env.TRELLO_LIST_ID;

  if (!key || !token || !idList) {
    console.error("[contact] Trello env not configured");
    return NextResponse.json(
      { ok: false, error: "The server could not process your request." },
      { status: 500 },
    );
  }

  const name = buildTrelloCardName(normalized);
  const desc = buildTrelloCardDescription(normalized);

  const trelloUrl = new URL("https://api.trello.com/1/cards");
  trelloUrl.searchParams.set("key", key);
  trelloUrl.searchParams.set("token", token);
  trelloUrl.searchParams.set("idList", idList);
  trelloUrl.searchParams.set("name", name);
  trelloUrl.searchParams.set("desc", desc);

  let trelloResponse: Response;
  try {
    trelloResponse = await fetch(trelloUrl.toString(), { method: "POST" });
  } catch {
    console.error("[contact] Trello fetch failed");
    return NextResponse.json(
      { ok: false, error: "Failed to reach Trello" },
      { status: 502 },
    );
  }

  if (!trelloResponse.ok) {
    console.error("[contact] Trello error status:", trelloResponse.status);
    return NextResponse.json(
      { ok: false, error: "The request could not be completed. Please try again later." },
      { status: 502 },
    );
  }

  const card = (await trelloResponse.json()) as { id?: string; shortUrl?: string };
  try {
    await sendContactNotificationEmail({
      contact: normalized,
      trelloCardUrl: card.shortUrl,
    });
  } catch (error) {
    console.error("[contact] Resend email failed", error);
  }

  return NextResponse.json({
    ok: true,
    cardId: card.id,
    shortUrl: card.shortUrl,
  });
}
