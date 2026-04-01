"use client";

import { useEffect, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BTN_PRIMARY_LARGE } from "@/app/lib/button-styles";
import {
  APPOINTMENT_REASON_OPTIONS,
  BEST_TIME_TO_REACH_OPTIONS,
  BEST_WAY_TO_REACH_OPTIONS,
  type AppointmentReasonOption,
} from "@/app/lib/contact-form-defaults";
import {
  CONTACT_FIELD_LIMITS,
  type ClientValidatedField,
  collapseWhitespace,
  normalizeEmail,
  validateContactForClient,
  type RawContactBody,
} from "@/app/lib/contact-validation";

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

const inputErrorRing =
  "border-red-400 bg-red-50/40 ring-1 ring-red-400/90 focus:border-red-500 focus:ring-red-500";

const PHONE = "210-617-3670";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export type ContactFormFieldsProps = {
  idPrefix?: string;
  /** Display page/service name for Trello (e.g. "Kidney Stones", "Men's Wellness"). */
  pageName: string;
  defaultAppointmentReason: AppointmentReasonOption;
  serviceName: string;
  category: string;
  sourcePath: string;
};

type FieldErrors = Partial<Record<ClientValidatedField, string>>;

/** Strip characters that are never valid in person names (digits, symbols). */
function sanitizeNameInput(raw: string): string {
  return raw.replace(/[^\p{L}\s'\-]/gu, "");
}

/** Allow typical US phone formatting characters only. */
function sanitizePhoneInput(raw: string): string {
  return raw.replace(/[^\d\s\-+().]/g, "");
}

/** Inline error text below a field — kept compact and readable (no native tooltips). */
function InlineFieldError({
  message,
  id: errorId,
}: {
  message: string;
  id: string;
}) {
  return (
    <p
      id={errorId}
      role="alert"
      className="mt-2 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/90 px-3 py-2 text-sm leading-snug text-red-800 shadow-sm"
    >
      <span
        className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white"
        aria-hidden
      >
        !
      </span>
      <span>{message}</span>
    </p>
  );
}

export function ContactFormFields({
  idPrefix,
  pageName,
  defaultAppointmentReason,
  serviceName,
  category,
  sourcePath,
}: ContactFormFieldsProps) {
  const id = (suffix: string) => (idPrefix ? `${idPrefix}-${suffix}` : suffix);

  const [appointmentReason, setAppointmentReason] = useState<string>(
    defaultAppointmentReason,
  );
  const [bestTimeToReach, setBestTimeToReach] = useState<string>(
    BEST_TIME_TO_REACH_OPTIONS[0],
  );
  const [bestWayToReach, setBestWayToReach] = useState<string>(
    BEST_WAY_TO_REACH_OPTIONS[0],
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const reasonIsOther = appointmentReason === "Other";
  const timeIsOther = bestTimeToReach === "Other";
  const isLoading = submitStatus === "loading";
  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  useEffect(() => {
    setAppointmentReason(defaultAppointmentReason);
  }, [defaultAppointmentReason]);

  function clearFieldError(name: ClientValidatedField) {
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setSubmitStatus("idle");
    setErrorMessage(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);

    const firstName = sanitizeNameInput(String(fd.get("firstName") ?? "")).slice(
      0,
      CONTACT_FIELD_LIMITS.firstName,
    );
    const lastName = sanitizeNameInput(String(fd.get("lastName") ?? "")).slice(
      0,
      CONTACT_FIELD_LIMITS.lastName,
    );
    const phone = sanitizePhoneInput(String(fd.get("phone") ?? "")).slice(
      0,
      CONTACT_FIELD_LIMITS.phone,
    );
    const emailRaw = String(fd.get("email") ?? "");
    const email = normalizeEmail(emailRaw).slice(0, CONTACT_FIELD_LIMITS.email);
    const appointmentReasonVal = String(
      fd.get("appointmentReason") ?? "",
    ).trim();
    const otherAppointmentReason = collapseWhitespace(
      String(fd.get("otherAppointmentReason") ?? ""),
    ).slice(0, CONTACT_FIELD_LIMITS.otherAppointmentReason);
    const bestWayToReachMe = String(fd.get("bestWayToReachMe") ?? "").trim();
    const bestTimeToReachMe = String(fd.get("bestTimeToReachMe") ?? "").trim();
    const otherBestTimeToReachMe = collapseWhitespace(
      String(fd.get("otherBestTimeToReachMe") ?? ""),
    ).slice(0, CONTACT_FIELD_LIMITS.otherBestTimeToReachMe);
    const message = collapseWhitespace(String(fd.get("message") ?? "")).slice(
      0,
      CONTACT_FIELD_LIMITS.message,
    );

    const rawPayload: RawContactBody = {
      firstName,
      lastName,
      phone,
      email,
      appointmentReason: appointmentReasonVal,
      otherAppointmentReason,
      bestWayToReachMe,
      bestTimeToReachMe,
      otherBestTimeToReachMe,
      message,
      pageName,
      sourcePath,
      serviceName,
      category,
    };

    const validation = validateContactForClient(rawPayload);

    if (Object.keys(validation).length > 0) {
      setFieldErrors(validation);
      const scrollOrder: ClientValidatedField[] = [
        "firstName",
        "lastName",
        "phone",
        "email",
        "appointmentReason",
        "otherAppointmentReason",
        "bestWayToReachMe",
        "bestTimeToReachMe",
        "otherBestTimeToReachMe",
        "message",
      ];
      const scrollElId: Record<ClientValidatedField, string> = {
        firstName: id("contact-first-name"),
        lastName: id("contact-last-name"),
        phone: id("contact-phone"),
        email: id("contact-email"),
        appointmentReason: id("contact-appointment-reason"),
        otherAppointmentReason: id("contact-other-appointment-reason"),
        bestWayToReachMe: id("contact-reach"),
        bestTimeToReachMe: id("contact-best-time"),
        otherBestTimeToReachMe: id("contact-other-best-time"),
        message: id("contact-message"),
      };
      for (const key of scrollOrder) {
        if (validation[key]) {
          const el = document.getElementById(scrollElId[key]);
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
          el?.focus({ preventScroll: true });
          break;
        }
      }
      return;
    }

    setSubmitStatus("loading");

    const payload = {
      firstName,
      lastName,
      phone,
      email,
      appointmentReason: appointmentReasonVal,
      otherAppointmentReason,
      bestWayToReachMe,
      bestTimeToReachMe,
      otherBestTimeToReachMe,
      message,
      pageName,
      sourcePath,
      serviceName,
      category,
      gRecaptchaResponse: String(fd.get("g-recaptcha-response") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        details?: string[];
      };

      if (!res.ok || !data.ok) {
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFieldErrors({});
      form.reset();
      setAppointmentReason(defaultAppointmentReason);
      setBestTimeToReach(BEST_TIME_TO_REACH_OPTIONS[0]);
      setBestWayToReach(BEST_WAY_TO_REACH_OPTIONS[0]);
      setCaptchaToken(null);
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
      {submitStatus === "success" ? (
        <div
          className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
          role="status"
        >
          <p className="text-sm font-semibold">Thank you — your request was sent.</p>
          <p className="mt-1 text-sm text-emerald-800">
            Our team will reach out shortly. If your inquiry is urgent, please call
            us at{" "}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="font-semibold text-emerald-900 underline"
            >
              {PHONE}
            </a>
            .
          </p>
        </div>
      ) : null}

      {submitStatus === "error" && errorMessage ? (
        <div
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900"
          role="alert"
        >
          <p className="text-sm font-semibold">We couldn&apos;t send your request.</p>
          <p className="mt-1 text-sm">{errorMessage}</p>
        </div>
      ) : null}

      {hasFieldErrors ? (
        <div
          className="mb-6 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-amber-950"
          role="status"
        >
          <p className="text-sm font-semibold">
            Please complete the highlighted fields below.
          </p>
          <p className="mt-1 text-sm text-amber-900/90">
            All issues are listed next to each field so you can fix them at once.
          </p>
        </div>
      ) : null}

      <form
        className="grid gap-6 sm:grid-cols-2"
        onSubmit={handleSubmit}
        aria-busy={isLoading}
        noValidate
      >
        <input type="hidden" name="serviceName" value={serviceName} />
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="sourcePath" value={sourcePath} />
        <input
          type="hidden"
          name="g-recaptcha-response"
          value={captchaToken ?? ""}
        />

        <div className="sm:col-span-2 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor={id("contact-first-name")}
              className="block text-sm font-medium text-slate-700"
            >
              First Name
            </label>
            <input
              id={id("contact-first-name")}
              name="firstName"
              type="text"
              autoComplete="given-name"
              maxLength={CONTACT_FIELD_LIMITS.firstName}
              className={`${inputClass} ${fieldErrors.firstName ? inputErrorRing : ""}`}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.firstName}
              aria-describedby={
                fieldErrors.firstName ? id("err-firstName") : undefined
              }
              onChange={(e) => {
                clearFieldError("firstName");
                const v = sanitizeNameInput(e.target.value).slice(
                  0,
                  CONTACT_FIELD_LIMITS.firstName,
                );
                if (v !== e.target.value) e.target.value = v;
              }}
            />
            {fieldErrors.firstName ? (
              <InlineFieldError
                id={id("err-firstName")}
                message={fieldErrors.firstName}
              />
            ) : null}
          </div>
          <div>
            <label
              htmlFor={id("contact-last-name")}
              className="block text-sm font-medium text-slate-700"
            >
              Last Name
            </label>
            <input
              id={id("contact-last-name")}
              name="lastName"
              type="text"
              autoComplete="family-name"
              maxLength={CONTACT_FIELD_LIMITS.lastName}
              className={`${inputClass} ${fieldErrors.lastName ? inputErrorRing : ""}`}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.lastName}
              aria-describedby={
                fieldErrors.lastName ? id("err-lastName") : undefined
              }
              onChange={(e) => {
                clearFieldError("lastName");
                const v = sanitizeNameInput(e.target.value).slice(
                  0,
                  CONTACT_FIELD_LIMITS.lastName,
                );
                if (v !== e.target.value) e.target.value = v;
              }}
            />
            {fieldErrors.lastName ? (
              <InlineFieldError
                id={id("err-lastName")}
                message={fieldErrors.lastName}
              />
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor={id("contact-phone")}
            className="block text-sm font-medium text-slate-700"
          >
            Phone Number
          </label>
          <input
            id={id("contact-phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={CONTACT_FIELD_LIMITS.phone}
            className={`${inputClass} ${fieldErrors.phone ? inputErrorRing : ""}`}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? id("err-phone") : undefined}
            onChange={(e) => {
              clearFieldError("phone");
              const v = sanitizePhoneInput(e.target.value).slice(
                0,
                CONTACT_FIELD_LIMITS.phone,
              );
              if (v !== e.target.value) e.target.value = v;
            }}
          />
          {fieldErrors.phone ? (
            <InlineFieldError id={id("err-phone")} message={fieldErrors.phone} />
          ) : null}
        </div>

        <div>
          <label
            htmlFor={id("contact-email")}
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id={id("contact-email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={CONTACT_FIELD_LIMITS.email}
            className={`${inputClass} ${fieldErrors.email ? inputErrorRing : ""}`}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? id("err-email") : undefined}
            onChange={() => clearFieldError("email")}
          />
          {fieldErrors.email ? (
            <InlineFieldError id={id("err-email")} message={fieldErrors.email} />
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={id("contact-appointment-reason")}
            className="block text-sm font-medium text-slate-700"
          >
            Appointment Reason
          </label>
          <select
            id={id("contact-appointment-reason")}
            name="appointmentReason"
            className={`${inputClass} ${fieldErrors.appointmentReason ? inputErrorRing : ""}`}
            value={appointmentReason}
            onChange={(e) => {
              setAppointmentReason(e.target.value);
              clearFieldError("otherAppointmentReason");
              clearFieldError("appointmentReason");
            }}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.appointmentReason}
            aria-describedby={
              fieldErrors.appointmentReason
                ? id("err-appointmentReason")
                : undefined
            }
          >
            {APPOINTMENT_REASON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.appointmentReason ? (
            <InlineFieldError
              id={id("err-appointmentReason")}
              message={fieldErrors.appointmentReason}
            />
          ) : null}
        </div>

        {reasonIsOther ? (
          <div className="sm:col-span-2">
            <label
              htmlFor={id("contact-other-appointment-reason")}
              className="block text-sm font-medium text-slate-700"
            >
              Other Appointment Reason
            </label>
            <input
              id={id("contact-other-appointment-reason")}
              name="otherAppointmentReason"
              type="text"
              maxLength={CONTACT_FIELD_LIMITS.otherAppointmentReason}
              className={`${inputClass} ${fieldErrors.otherAppointmentReason ? inputErrorRing : ""}`}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.otherAppointmentReason}
              aria-describedby={
                fieldErrors.otherAppointmentReason
                  ? id("err-otherAppointmentReason")
                  : undefined
              }
              onChange={() => clearFieldError("otherAppointmentReason")}
            />
            {fieldErrors.otherAppointmentReason ? (
              <InlineFieldError
                id={id("err-otherAppointmentReason")}
                message={fieldErrors.otherAppointmentReason}
              />
            ) : null}
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <label
            htmlFor={id("contact-reach")}
            className="block text-sm font-medium text-slate-700"
          >
            Best Way to Reach Me
          </label>
          <select
            id={id("contact-reach")}
            name="bestWayToReachMe"
            className={`${inputClass} ${fieldErrors.bestWayToReachMe ? inputErrorRing : ""}`}
            value={bestWayToReach}
            onChange={(e) => {
              setBestWayToReach(e.target.value);
              clearFieldError("bestWayToReachMe");
            }}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.bestWayToReachMe}
            aria-describedby={
              fieldErrors.bestWayToReachMe
                ? id("err-bestWayToReachMe")
                : undefined
            }
          >
            {BEST_WAY_TO_REACH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.bestWayToReachMe ? (
            <InlineFieldError
              id={id("err-bestWayToReachMe")}
              message={fieldErrors.bestWayToReachMe}
            />
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={id("contact-best-time")}
            className="block text-sm font-medium text-slate-700"
          >
            Best Time to Reach Me
          </label>
          <select
            id={id("contact-best-time")}
            name="bestTimeToReachMe"
            className={`${inputClass} ${fieldErrors.bestTimeToReachMe ? inputErrorRing : ""}`}
            value={bestTimeToReach}
            onChange={(e) => {
              setBestTimeToReach(e.target.value);
              clearFieldError("otherBestTimeToReachMe");
              clearFieldError("bestTimeToReachMe");
            }}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.bestTimeToReachMe}
            aria-describedby={
              fieldErrors.bestTimeToReachMe
                ? id("err-bestTimeToReachMe")
                : undefined
            }
          >
            {BEST_TIME_TO_REACH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.bestTimeToReachMe ? (
            <InlineFieldError
              id={id("err-bestTimeToReachMe")}
              message={fieldErrors.bestTimeToReachMe}
            />
          ) : null}
        </div>

        {timeIsOther ? (
          <div className="sm:col-span-2">
            <label
              htmlFor={id("contact-other-best-time")}
              className="block text-sm font-medium text-slate-700"
            >
              Other Best Time to Reach Me
            </label>
            <input
              id={id("contact-other-best-time")}
              name="otherBestTimeToReachMe"
              type="text"
              maxLength={CONTACT_FIELD_LIMITS.otherBestTimeToReachMe}
              className={`${inputClass} ${fieldErrors.otherBestTimeToReachMe ? inputErrorRing : ""}`}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.otherBestTimeToReachMe}
              aria-describedby={
                fieldErrors.otherBestTimeToReachMe
                  ? id("err-otherBestTimeToReachMe")
                  : undefined
              }
              onChange={() => clearFieldError("otherBestTimeToReachMe")}
            />
            {fieldErrors.otherBestTimeToReachMe ? (
              <InlineFieldError
                id={id("err-otherBestTimeToReachMe")}
                message={fieldErrors.otherBestTimeToReachMe}
              />
            ) : null}
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <label
            htmlFor={id("contact-message")}
            className="block text-sm font-medium text-slate-700"
          >
            Message
          </label>
          <textarea
            id={id("contact-message")}
            name="message"
            rows={6}
            maxLength={CONTACT_FIELD_LIMITS.message}
            className={`${inputClass} resize-y min-h-[140px] ${fieldErrors.message ? inputErrorRing : ""}`}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={
              fieldErrors.message ? id("err-message") : undefined
            }
            onChange={() => clearFieldError("message")}
          />
          {fieldErrors.message ? (
            <InlineFieldError
              id={id("err-message")}
              message={fieldErrors.message}
            />
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <p className="text-sm font-medium text-slate-700">Verification</p>
          {recaptchaSiteKey ? (
            <div className="mt-2">
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
          ) : (
            <div
              className="mt-2 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 px-4 py-6 text-center"
              role="status"
              aria-label="CAPTCHA not configured"
            >
              <p className="text-sm text-slate-600">
                Add{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                </code>{" "}
                to enable Google reCAPTCHA on this form.
              </p>
            </div>
          )}
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className={`${BTN_PRIMARY_LARGE} disabled:pointer-events-none disabled:opacity-60`}
            disabled={isLoading}
          >
            {isLoading ? "Sending…" : "SUBMIT"}
          </button>
          <p className="mt-3 text-sm text-slate-600">
            This form is for non-emergency questions only. If you are
            experiencing a medical emergency, call 911. For urgent matters, you
            can also reach us at{" "}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              {PHONE}
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
