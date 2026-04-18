import { Resend } from "resend";
import {
  buildTrelloCardDescription,
  buildTrelloCardName,
  type NormalizedContact,
} from "@/app/lib/contact-submission";

type SendContactNotificationEmailArgs = {
  contact: NormalizedContact;
  trelloCardUrl?: string;
};

function buildContactNotificationEmailText(
  contact: NormalizedContact,
  trelloCardUrl?: string,
): string {
  const lines = [
    "A new contact form submission was received.",
    "",
    buildTrelloCardDescription(contact),
  ];

  if (trelloCardUrl) {
    lines.push("", `Trello Card: ${trelloCardUrl}`);
  }

  return lines.join("\n");
}

export async function sendContactNotificationEmail({
  contact,
  trelloCardUrl,
}: SendContactNotificationEmailArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const to = process.env.CONTACT_NOTIFICATION_TO?.trim() ?? "";
  const from = process.env.CONTACT_NOTIFICATION_FROM?.trim() ?? "";

  if (!apiKey || !to || !from) {
    console.error("[contact] Resend env not configured");
    return;
  }

  const resend = new Resend(apiKey);
  const subject = `New Contact Request: ${buildTrelloCardName(contact)}`;
  const text = buildContactNotificationEmailText(contact, trelloCardUrl);

  const result = await resend.emails.send({
    from,
    to,
    replyTo: contact.email,
    subject,
    text,
  });

  if (result.error) {
    throw new Error(result.error.message || "Resend email send failed");
  }
}
