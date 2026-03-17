import { ContactFormTemplate } from "@/app/components/contact-form-template";

export default function LowTestosteronePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Low Testosterone
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Placeholder content for evaluation and management of low testosterone
          and related men&apos;s health concerns.
        </p>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            title="Contact Us For Low Testosterone"
            serviceName="Low Testosterone"
            category="Men"
            sourcePath="/men/low-testosterone"
            idPrefix="men-low-testosterone"
          />
        </div>
      </section>
    </main>
  );
}

