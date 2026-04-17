import Image from "next/image";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/pae/What-is-Prostate-Artery-Embolization-PAE.webp");
const IMG_LIFESTYLE = encodeURI("/images/enlarged prostate/photo-1491484925566-336b202157a5-2880w.jpg");

const PANEL = "bg-[#e8edf5]";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const BULLET = (
  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
);

const WHAT_IS_PAE = [
  "Reduces blood flow to the prostate",
  "Causes the prostate to shrink naturally",
  "Improves urinary symptoms over time",
] as const;

const WHY_CHOOSE = [
  "Minimally invasive alternative to surgery",
  "Faster recovery (days instead of weeks)",
  "Lower risk of sexual side effects",
  "Effective for larger prostates",
  "Performed with advanced imaging precision",
] as const;

const CANDIDATE_IF = [
  "Have moderate to severe urinary symptoms",
  "Are exploring alternatives to surgery such as TURP",
  "Have not had success with medications",
  "Prefer a minimally invasive option",
  "Have a larger prostate",
] as const;

const COMMON_SYMPTOMS = [
  "Frequent urination, especially at night",
  "Weak or slow urine stream",
  "Difficulty starting urination",
  "Feeling like your bladder is not fully empty",
] as const;

export function ProstaticArteryEmbolizationPageContent() {
  return (
    <div className="relative isolate min-h-screen text-slate-900">
      <div
        className={HERO_FIXED_BACKDROP}
        aria-hidden
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <section className={HERO_IMAGE_SECTION}>
          <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className={HERO_TITLE_ON_IMAGE}>
              Prostate Artery Embolization (PAE) in San Antonio, TX
            </h1>
            <div className="mt-8">
              <a href="#men-pae-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Advanced, Minimally Invasive Treatment for Enlarged Prostate
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                If you&apos;re dealing with frequent urination, a weak stream, or waking up multiple times
                at night, you may be experiencing symptoms of benign prostatic hyperplasia (BPH), a common
                condition as men age.
              </p>
              <p>
                At The Urology Place, we offer Prostate Artery Embolization (PAE), a non-surgical,
                outpatient treatment designed to shrink the prostate and relieve symptoms without the risks
                of traditional surgery.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  What is PAE?
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  PAE is a minimally invasive procedure performed using advanced imaging. Instead of
                  removing prostate tissue, PAE:
                </p>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  {WHAT_IS_PAE.map((line) => (
                    <li key={line} className="flex gap-3">
                      {BULLET}
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-medium text-slate-900 md:text-[17px]">
                  No incisions. No hospital stay. No general anesthesia.
                </p>
              </div>
              <div className={ROUND_IMG}>
                <Image
                  src={IMG_LIFESTYLE}
                  alt="Peaceful outdoor setting suggesting recovery and quality of life"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Patients Choose PAE at The Urology Place
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {WHY_CHOOSE.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Am I a Candidate for PAE?
            </h2>
            <p className="mt-5 text-[15px] font-medium text-slate-900 md:text-base">
              You may be a good candidate if you:
            </p>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {CANDIDATE_IF.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] font-medium text-slate-900 md:text-base">
              Common symptoms include:
            </p>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {COMMON_SYMPTOMS.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How the Procedure Works
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              A small catheter is inserted through the wrist or groin and guided to the prostate arteries
              using advanced imaging. Tiny particles are then injected to reduce blood flow, allowing the
              prostate to gradually shrink. The procedure typically takes 1 to 2 hours, is performed in an
              outpatient setting, and uses local anesthesia with light sedation.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Recovery and Results
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Most patients go home the same day. You may experience mild pelvic discomfort for a few days
              along with temporary urinary urgency or frequency. Most individuals are able to return to
              normal activities within 1 to 3 days. Symptom improvement typically begins within a few weeks
              and continues to improve over the course of 2 to 3 months.
            </p>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              PAE Compared to Surgical Options
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Both PAE and surgical procedures, such as TURP, are effective treatment options for BPH, each
              offering unique benefits depending on the patient&apos;s individual condition. The most
              appropriate approach will depend on several factors, including the severity of your symptoms,
              prostate size, medical history, and overall health. To determine whether PAE is the right
              option for you, we recommend scheduling a consultation with Dr. Kella, who can provide a
              thorough evaluation and guide you toward the treatment plan that best fits your needs.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Scheduling Information
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              To schedule your consultation with Dr. Kella: Please call{" "}
              <a href="tel:2106173670" className="font-semibold text-blue-700 underline underline-offset-2">
                210-617-3670
              </a>{" "}
              and ask to speak with the PAE scheduling team, or select the surgery line when prompted. If
              the department is unavailable, please dial extension 107, 103, or leave a voicemail.
            </p>
          </div>
        </section>

        <section id="men-pae-contact" className="relative scroll-mt-28 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName="Prostatic Artery Embolization (PAE)"
              serviceName="Prostatic Artery Embolization (PAE)"
              category="Men > Enlarged Prostate"
              sourcePath="/men/enlarged-prostate/prostatic-artery-embolization"
              idPrefix="men-pae"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
