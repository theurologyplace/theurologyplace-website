import Link from "next/link";

const APPOINTMENT_REASONS = [
  "General Urology",
  "Prostate Cancer",
  "Erectile Dysfunction Treatment",
  "Peyronie's Disease",
  "GAINSWave",
  "CaverStem",
  "Enlarged Prostate",
  "Circumcision",
  "Vasectomy",
  "Urinary Incontinence",
  "Hormone Replacement Therapy",
  "Kidney Stone",
  "Ultrafemme",
  "Vaginal Mesh Removal",
  "Weight Loss",
] as const;

const REACH_OPTIONS = ["Phone", "Email", "Text"] as const;

const PHONE = "210-617-3670";
const EMAIL = "messages@theUIP.com";
const ADDRESS = "9618 Huebner Road, Suite 120 San Antonio, TX 78240";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=9618+Huebner+Road+Suite+120+San+Antonio+TX+78240&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function HomeContactSection() {
  return (
    <section
      className="border-t border-slate-200 bg-slate-50/50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          id="contact-heading"
          className="sr-only"
        >
          Request an appointment and contact information
        </h2>

        {/* Request An Appointment — full width card */}
        <div className="mb-16 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <h3 className="text-2xl font-bold tracking-tight text-blue-700 md:text-3xl">
            Request An Appointment
          </h3>
          <form
            className="mt-6 grid gap-6 sm:grid-cols-2"
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="appt-first-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  First Name
                </label>
                <input
                  id="appt-first-name"
                  name="firstName"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="appt-last-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Last Name
                </label>
                <input
                  id="appt-last-name"
                  name="lastName"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="appt-phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="appt-email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="appt-email"
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="appt-reason"
                  className="block text-sm font-medium text-slate-700"
                >
                  Appointment Reason
                </label>
                <select
                  id="appt-reason"
                  name="appointmentReason"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {APPOINTMENT_REASONS.map((reason) => (
                    <option
                      key={reason}
                      value={reason}
                    >
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="appt-reach"
                  className="block text-sm font-medium text-slate-700"
                >
                  Best Way to Reach Me
                </label>
                <select
                  id="appt-reach"
                  name="bestWayToReach"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {REACH_OPTIONS.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="appt-best-time"
                className="block text-sm font-medium text-slate-700"
              >
                Best Time to Contact
              </label>
              <textarea
                id="appt-best-time"
                name="bestTimeToContact"
                rows={4}
                className="mt-1 block w-full resize-y min-h-[100px] rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                aria-describedby="resize-hint"
              />
              <p
                id="resize-hint"
                className="sr-only"
              >
                You can drag the bottom-right corner to resize this field.
              </p>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                SUBMIT
              </button>
              <p className="mt-4 text-sm text-slate-600">
                Please do not use this form for EMERGENCIES. If your inquiry is
                urgent please call us{" "}
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

        {/* Contact grid: map + contact cards + sidebar (links, social, newsletter, hours) */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: map + address + fax */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {EMAIL}
              </a>
            </div>
            <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Urology Place location map"
                className="block"
              />
            </div>
            <p className="text-slate-700">
              {ADDRESS}
            </p>
            <div className="text-sm text-slate-600">
              <p>New Patient Referral Fax: (210) 761-8851</p>
              <p>Office Fax: (888) 316-9464</p>
            </div>
          </div>

          {/* Right: site links, social, newsletter, hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Site Links
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/patient-resources/contact-us"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/patient-resources/patient-portal"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Patient Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Follow Us
              </h4>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://www.facebook.com/UrologyPlace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCB2d_EhaltoTvQeVTKibmJQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://x.com/theurologyplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/theurologyplace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Join Our Newsletter
              </h4>
              <form
                className="mt-3 space-y-3"
                action="#"
                method="post"
              >
                <input
                  type="text"
                  name="newsletterFirstName"
                  placeholder="First Name"
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="newsletterLastName"
                  placeholder="Last Name"
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="newsletterEmail"
                  placeholder="Email"
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Business Hours
              </h4>
              <dl className="mt-3 space-y-1 text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt>Mon – Fri</dt>
                  <dd>8:00 am – 5:00 pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sat – Sun</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
