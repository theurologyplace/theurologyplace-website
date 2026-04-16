import Image from "next/image";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/varicocele/1764649591_2734094-1.jpg");
const IMG_SECONDARY = encodeURI("/images/peyronies disease/photo-1522308300961-fdb949cac8aa-2880w.jpg");

const PANEL = "bg-[#e8edf5]";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const BULLET = (
  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
);

const COMMON_SYMPTOMS = [
  "Dull or aching pain in the scrotum",
  "A feeling of heaviness or discomfort",
  "Visible or enlarged veins in the scrotum",
  "Testicular shrinkage (atrophy)",
  "Fertility concerns",
] as const;

const WHEN_TREATMENT = [
  "Have persistent pain or discomfort",
  "Are experiencing fertility concerns",
  "Have abnormal semen analysis results",
  "Have testicular atrophy",
  "Are concerned about long-term reproductive health",
] as const;

const EMBOLIZATION_POINTS = [
  "Blocks abnormal veins causing the varicocele",
  "Redirects blood flow to healthy veins",
  "Relieves pressure and improves circulation",
] as const;

const WHY_EMBOLIZATION = [
  "Minimally invasive alternative to surgery",
  "Faster recovery time",
  "No incisions or stitches",
  "Lower risk of complications",
  "Effective for symptom relief and fertility support",
] as const;

const WHY_UROLOGY_PLACE = [
  "Experienced urology team working alongside interventional specialists",
  "Advanced minimally invasive treatment options",
  "Patient-centered care",
  "Focus on both symptom relief and long-term reproductive health",
] as const;

export function VaricocelePageContent() {
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
            <h1 className={HERO_TITLE_ON_IMAGE}>Varicocele Treatment in San Antonio, TX</h1>
            <div className="mt-8">
              <a href="#men-varicocele-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Minimally Invasive Embolization for Pain Relief and Fertility Support
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                A varicocele is an enlargement of the veins within the scrotum, similar to varicose veins
                in the legs. It is a common condition that can affect testicular function and is one of the
                leading causes of male infertility. At The Urology Place, we offer varicocele embolization,
                a minimally invasive, image-guided treatment designed to relieve symptoms and improve
                reproductive health without surgery.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  What is a Varicocele?
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  A varicocele occurs when the veins that drain blood from the testicles become enlarged due
                  to poor blood flow. This can lead to increased temperature in the scrotum, which may impact
                  sperm production and function. Varicoceles most commonly develop on the left side and may
                  worsen over time if left untreated.
                </p>
              </div>
              <div className={ROUND_IMG}>
                <Image
                  src={IMG_SECONDARY}
                  alt="Man in a calm setting"
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
              Common Symptoms
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Some patients may not experience symptoms, but when present, they can include:
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {COMMON_SYMPTOMS.map((line) => (
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
              When is Treatment Recommended?
            </h2>
            <p className="mt-5 text-[15px] font-medium text-slate-900 md:text-base">
              Treatment may be recommended if you:
            </p>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {WHEN_TREATMENT.map((line) => (
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
              What is Varicocele Embolization?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Varicocele embolization is a minimally invasive procedure performed by an interventional
              radiologist. Instead of surgery, embolization:
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {EMBOLIZATION_POINTS.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-medium text-slate-900 md:text-[17px]">
              No incisions. No stitches. Outpatient procedure.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How the Procedure Works
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              A small catheter is inserted through a vein, typically in the groin or neck, and guided to the
              affected veins using advanced imaging. Tiny coils or particles are then placed to block the
              abnormal blood flow, allowing healthy circulation to return. The procedure is performed in an
              outpatient setting using local anesthesia with light sedation.
            </p>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Recovery and Results
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Most patients go home the same day. You may experience mild soreness or discomfort for a few
              days, but most individuals are able to return to normal activities within a short period of
              time. Symptom relief may begin within a few weeks, while improvements in fertility parameters
              can take several months.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Choose Embolization?
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {WHY_EMBOLIZATION.map((line) => (
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
              Why The Urology Place?
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {WHY_UROLOGY_PLACE.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-800 md:text-base">
              We work closely with specialists to ensure you receive the most appropriate and effective
              treatment.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Schedule a Consultation
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              To schedule your initial consultation with Dr. Kella&apos;s team: Please call{" "}
              <a href="tel:2106173670" className="font-semibold text-blue-700 underline underline-offset-2">
                210-617-3670
              </a>{" "}
              and ask to speak with the varicocele scheduling team, or select the surgery line when prompted.
              If the department is unavailable, please dial extension 107, 103, or leave a voicemail.
            </p>

            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Procedure Location
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              To schedule the varicocele treatment with Dr. Rao: Please contact Monica at{" "}
              <a href="tel:2106602010" className="font-semibold text-blue-700 underline underline-offset-2">
                210-660-2010
              </a>
              .
            </p>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-slate-800 md:text-base">
              I-Vascular Center
              <br />
              19234 Stonehue
              <br />
              San Antonio, TX 78258
            </address>
          </div>
        </section>

        <section id="men-varicocele-contact" className="relative scroll-mt-28 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName="Varicocele"
              serviceName="Varicocele"
              category="Men > Male Sexual Dysfunction"
              sourcePath="/men/male-sexual-dysfunction/varicocele"
              idPrefix="men-varicocele"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
