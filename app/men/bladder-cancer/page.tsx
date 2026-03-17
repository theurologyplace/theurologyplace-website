import { ContactFormTemplate } from "@/app/components/contact-form-template";

export default function BladderCancerMenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Bladder Cancer
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Placeholder content for bladder cancer evaluation, staging, treatment
          options, and ongoing surveillance.
        </p>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            title="Contact Us For Bladder Cancer"
            serviceName="Bladder Cancer"
            category="Men"
            sourcePath="/men/bladder-cancer"
            idPrefix="men-bladder-cancer"
          />
        </div>
      </section>
    </main>
  );
}

