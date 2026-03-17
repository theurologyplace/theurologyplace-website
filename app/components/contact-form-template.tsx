import { BTN_PRIMARY_LARGE } from "@/app/lib/button-styles";

export type ContactFormTemplateProps = {
  /** Visible heading, e.g. "Contact Us For Kidney Stones" */
  title: string;
  /** Hidden metadata */
  serviceName: string;
  /** Hidden metadata (e.g. "Men", "Women", "Men > Prostate Cancer") */
  category: string;
  /** Hidden metadata (path or page identifier) */
  sourcePath: string;
  /**
   * Render mode:
   * - "page": full page with h1 (used by dedicated contact-us routes)
   * - "embedded": section content only (used when embedding at bottom of a page)
   */
  variant?: "page" | "embedded";
  /** Optional prefix for form control IDs to avoid duplicates. */
  idPrefix?: string;
};

export function ContactFormTemplate({
  title,
  serviceName,
  category,
  sourcePath,
  variant = "page",
  idPrefix,
}: ContactFormTemplateProps) {
  const id = (suffix: string) => (idPrefix ? `${idPrefix}-${suffix}` : suffix);

  const content = (
    <div>
      {variant === "page" ? (
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      ) : (
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
      )}
      <p className="mt-4 max-w-2xl text-slate-700 leading-relaxed">
        Tell us a bit about what you’re looking for and our team will reach out
        shortly.
      </p>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
        <form className="grid gap-6 sm:grid-cols-2" action="#" method="post">
          <input type="hidden" name="serviceName" value={serviceName} />
          <input type="hidden" name="category" value={category} />
          <input type="hidden" name="sourcePath" value={sourcePath} />

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
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

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
              className="mt-1 block w-full resize-y min-h-[140px] rounded-lg border border-slate-300 bg-slate-50/80 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <button type="submit" className={BTN_PRIMARY_LARGE}>
              SUBMIT
            </button>
            <p className="mt-3 text-sm text-slate-600">
              This form is for non-emergency questions only. If you are
              experiencing a medical emergency, call 911.
            </p>
          </div>
        </form>
      </div>
    </div>
  );

  if (variant === "embedded") return content;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-24">{content}</section>
    </main>
  );
}

