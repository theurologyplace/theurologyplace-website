import { NextResponse } from "next/server";
import {
  buildTrelloCardDescription,
  buildTrelloCardName,
  validateAndNormalizeContact,
  type RawContactBody,
} from "@/app/lib/contact-submission";

/** Generic copy for clients — avoids leaking validation internals. */
const GENERIC_VALIDATION_ERROR =
  "Invalid or incomplete submission. Please check your information and try again.";

/**
 * POST /api/contact
 * Creates a Trello card in the configured list (e.g. "New Requests").
 * Auth: TRELLO_KEY, TRELLO_TOKEN, TRELLO_LIST_ID
 *
 * TODO: Rate limit by IP / token bucket.
 * TODO: Verify g-recaptcha-response with Google secret (RECAPTCHA_SECRET_KEY).
 */
export async function POST(request: Request) {
  let body: RawContactBody;
  try {
    body = (await request.json()) as RawContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
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
    return NextResponse.json(
      {
        ok: false,
        error:
          "Server is missing Trello configuration (TRELLO_KEY, TRELLO_TOKEN, TRELLO_LIST_ID)",
      },
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
  } catch (e) {
    console.error("[contact] Trello fetch failed:", e instanceof Error ? e.message : "unknown");
    return NextResponse.json(
      { ok: false, error: "Failed to reach Trello" },
      { status: 502 },
    );
  }

  if (!trelloResponse.ok) {
    /* Do not log full Trello body — may contain operational noise; status is enough. */
    console.error("[contact] Trello error status:", trelloResponse.status);
    return NextResponse.json(
      {
        ok: false,
        error: "Trello rejected the request",
        status: trelloResponse.status,
      },
      { status: 502 },
    );
  }

  const card = (await trelloResponse.json()) as { id?: string; shortUrl?: string };
  return NextResponse.json({
    ok: true,
    cardId: card.id,
    shortUrl: card.shortUrl,
  });
}
