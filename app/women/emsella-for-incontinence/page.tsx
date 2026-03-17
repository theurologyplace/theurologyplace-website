import { ContactFormTemplate } from "@/app/components/contact-form-template";

export default function EmsellaForIncontinencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Emsella for Incontinence
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Placeholder content for Emsella treatment for urinary incontinence,
          including how it works and what to expect from therapy sessions.
        </p>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            title="Contact Us For Emsella for Incontinence"
            serviceName="Emsella for Incontinence"
            category="Women"
            sourcePath="/women/emsella-for-incontinence"
            idPrefix="women-emsella"
          />
        </div>
      </section>
    </main>
  );
}

