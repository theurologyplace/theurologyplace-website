import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG =
  "url(/images/new%20patient%20forms/content-img-patient-forms.jpg)";

export default function NewPatientFormsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className={HERO_IMAGE_SECTION}
        style={{
          backgroundImage: HERO_BG,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <h1 className={HERO_TITLE_ON_IMAGE}>NEW PATIENT FORMS</h1>
          <p className={`mt-4 max-w-3xl mx-auto ${HERO_SUBTITLE_ON_IMAGE}`}>
            If you are interested in scheduling an appointment, please fill out
            this copy of our New Patient Forms and one of our staff members will
            contact you for scheduling.
          </p>
        </div>
      </section>

      <section className={`${HERO_AFTER_SLIDE_BASE} bg-white`}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            pageName="New Patient Forms"
            headingOverride="Contact Us"
            serviceName="New Patient Forms"
            category="Patient Resources"
            sourcePath="/patient-resources/new-patient-forms"
            idPrefix="new-patient-forms"
          />
        </div>
      </section>
    </main>
  );
}
