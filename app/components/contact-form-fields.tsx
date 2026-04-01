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

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const reasonIsOther = appointmentReason === "Other";
  const timeIsOther = bestTimeToReach === "Other";
  const isLoading = submitStatus === "loading";

  useEffect(() => {
    setAppointmentReason(defaultAppointmentReason);
  }, [defaultAppointmentReason]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setErrorMessage(null);
    setSubmitStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      appointmentReason: String(fd.get("appointmentReason") ?? "").trim(),
      otherAppointmentReason: String(
        fd.get("otherAppointmentReason") ?? "",
      ).trim(),
      bestWayToReachMe: String(fd.get("bestWayToReachMe") ?? "").trim(),
      bestTimeToReachMe: String(fd.get("bestTimeToReachMe") ?? "").trim(),
      otherBestTimeToReachMe: String(
        fd.get("otherBestTimeToReachMe") ?? "",
      ).trim(),
      message: String(fd.get("message") ?? "").trim(),
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
        const detail =
          Array.isArray(data.details) && data.details.length > 0
            ? data.details.join(" ")
            : data.error ?? "Something went wrong. Please try again.";
        setErrorMessage(detail);
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      form.reset();
      setAppointmentReason(defaultAppointmentReason);
      setBestTimeToReach(BEST_TIME_TO_REACH_OPTIONS[0]);
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

      <form
        className="grid gap-6 sm:grid-cols-2"
        onSubmit={handleSubmit}
        aria-busy={isLoading}
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
              className={inputClass}
              required
              disabled={isLoading}
            />
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
              className={inputClass}
              required
              disabled={isLoading}
            />
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
            autoComplete="tel"
            className={inputClass}
            required
            disabled={isLoading}
          />
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
            autoComplete="email"
            className={inputClass}
            required
            disabled={isLoading}
          />
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
            className={inputClass}
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
            required
            disabled={isLoading}
          >
            {APPOINTMENT_REASON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
              className={inputClass}
              required={reasonIsOther}
              disabled={isLoading}
            />
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
            className={inputClass}
            defaultValue={BEST_WAY_TO_REACH_OPTIONS[0]}
            required
            disabled={isLoading}
          >
            {BEST_WAY_TO_REACH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
            className={inputClass}
            value={bestTimeToReach}
            onChange={(e) => setBestTimeToReach(e.target.value)}
            disabled={isLoading}
          >
            {BEST_TIME_TO_REACH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
              className={inputClass}
              required={timeIsOther}
              disabled={isLoading}
            />
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
            className={`${inputClass} resize-y min-h-[140px]`}
            disabled={isLoading}
          />
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
