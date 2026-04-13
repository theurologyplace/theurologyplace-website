import Image from "next/image";
import Link from "next/link";
import { BTN_PRIMARY } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/vanquish/1765481756241.jpg");
const IMG_CONSULT = encodeURI("/images/rezum/photo-1533025782032-634283c7c7ad-1920w.jpg");

const PANEL = "bg-[#e8edf5]";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const BENEFITS = [
  "Minimally invasive procedure performed without abdominal incisions",
  "Designed to reduce obstructive urinary symptoms from enlarged prostate tissue",
  "Often completed as an outpatient or in-office treatment with a defined recovery plan",
  "Treatment planning tailored to your anatomy, symptoms, and goals",
] as const;

export function VanquishPageContent() {
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
            <h1 className={HERO_TITLE_ON_IMAGE}>Vanquish (Water Vapor Ablation)</h1>
            <p className={`mt-6 max-w-3xl mx-auto ${HERO_SUBTITLE_ON_IMAGE}`}>
              A minimally invasive option for men with urinary symptoms related to benign prostatic
              hyperplasia (BPH). The Urology Place in San Antonio helps you understand whether Vanquish™
              water vapor therapy fits your goals and anatomy.
            </p>
            <Link
              href="/men/prostate-cancer/vanquish/contact-us"
              className={`${BTN_PRIMARY} mt-8 inline-block`}
            >
              Request a consultation
            </Link>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What is Vanquish water vapor ablation?
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                <strong>Vanquish</strong> uses controlled water vapor energy to treat excess prostate
                tissue that contributes to blockage and lower urinary tract symptoms. The therapy is
                delivered through the urethra, so there are no abdominal incisions. Many men consider
                this category of treatment when they want symptom relief while limiting the impact of
                traditional surgery on recovery and quality of life.
              </p>
              <p>
                At <strong>The Urology Place</strong>, we review your symptoms, medications, prior
                procedures, and imaging to confirm whether you are a candidate. We explain what to
                expect before, during, and after treatment, including catheter use and activity
                restrictions, so you can plan with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={ROUND_IMG}>
                <Image
                  src={IMG_CONSULT}
                  alt="Physician consulting with a patient in the office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Why patients explore Vanquish
                </h2>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  {BENEFITS.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Next steps</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              If urinary frequency, weak stream, nighttime urination, or incomplete emptying are affecting
              your day, schedule an evaluation. We will discuss Vanquish alongside other proven options
              for BPH so you can choose a path that matches your lifestyle.
            </p>
            <Link
              href="/men/prostate-cancer/vanquish/contact-us"
              className={`${BTN_PRIMARY} mt-8 inline-block`}
            >
              Contact us
            </Link>
          </div>
        </section>

        <section className="relative border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName="Vanquish"
              serviceName="Vanquish (Water Vapor Ablation)"
              category="Men > Prostate Cancer"
              sourcePath="/men/prostate-cancer/vanquish"
              idPrefix="men-vanquish"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
