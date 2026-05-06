import type { Metadata } from "next";
import Image from "next/image";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = "/images/brachytherapy/hipxray.jpg";
const BRACHYTHERAPY_DIAGRAM_IMG = "/images/brachytherapy/brachtherapy.png";
const SEED_PLACEMENT_IMG = "/images/brachytherapy/prostate_seed.jpg";

export const metadata: Metadata = {
  title: "Brachytherapy",
  description:
    "LDR brachytherapy information for prostate cancer patients at The Urology Place in San Antonio.",
};

export default function BrachytherapyPage() {
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
            <h1 className={HERO_TITLE_ON_IMAGE}>Brachytherapy</h1>
            <p className={`mt-4 ${HERO_SUBTITLE_ON_IMAGE}`}>
              LDR Brachytherapy for Prostate Cancer at The Urology Place
            </p>
            <div className="mt-8">
              <a href="#men-brachytherapy-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} bg-white`}>
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              LDR Brachytherapy: Precision Healing for Prostate Cancer
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                When it comes to treating prostate cancer, the goal is simple:{" "}
                <strong>eliminate the cancer while preserving your quality of life</strong>. Our
                practice is proud to offer Low-Dose Rate (LDR) Brachytherapy, a highly
                specialized, internal radiation treatment that offers a &quot;one-and-done&quot;
                solution for many men.
              </p>
              <p>
                By partnering with the nation&apos;s most experienced Radiation Oncology group
                (with over 3,000 successful cases), we provide a level of expertise and
                precision that is second to none.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-[#e8edf5]">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  What is LDR Brachytherapy?
                </h2>
                <div className="mt-5 space-y-6">
                  <p className="text-[15px] leading-relaxed text-slate-800 md:text-base">
                    Unlike traditional radiation that travels from a machine outside the body through
                    healthy tissue, Brachytherapy involves placing tiny, radioactive &quot;seeds&quot;
                    directly into the prostate.
                  </p>
                  <ul className="space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                    <li className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span>
                        <strong>Targeted Power:</strong> The radiation travels only a few millimeters,
                        concentrating the treatment exactly where it&apos;s needed.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span>
                        <strong>Convenience:</strong> The procedure is performed in an outpatient
                        setting and typically takes only 30 minutes.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span>
                        <strong>Fast Recovery:</strong> Most patients return home the same day and
                        resume normal activities within 24 to 48 hours{" "}
                        <strong>(without the need for a urinary catheter)</strong>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center md:justify-end md:self-start">
                <div className="flex w-full max-w-64 flex-col gap-4 sm:max-w-72 md:max-w-xs">
                  <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/10">
                    <Image
                      src={BRACHYTHERAPY_DIAGRAM_IMG}
                      alt="Diagram of brachytherapy seeds placed throughout the prostate to treat the tumor"
                      width={640}
                      height={360}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 768px) 320px, 100vw"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/10">
                    <Image
                      src={SEED_PLACEMENT_IMG}
                      alt="Pelvic X-ray showing radioactive brachytherapy seeds implanted in the prostate"
                      width={286}
                      height={176}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 768px) 320px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Choose LDR Brachytherapy?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Recent clinical literature and long-term studies highlight several key advantages
              that make LDR Brachytherapy a preferred choice for localized prostate cancer:
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Superior Cancer Control:</strong> Clinical data show that LDR
                  brachytherapy provides excellent long-term cure rates, often outperforming
                  external beam radiation for many patients because it allows for a higher, more
                  concentrated dose of radiation directly to the tumor.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Preserving What Matters:</strong> Because the radiation is so localized,
                  there is a significantly lower risk of the urinary and sexual side effects often
                  associated with surgery or external radiation.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Avoiding Hormone Therapy:</strong> For many intermediate-risk patients,
                  LDR brachytherapy can be used as a standalone treatment. This allows many men to{" "}
                  <strong>avoid Androgen Deprivation Therapy (ADT)</strong> - the hormone-blocking
                  treatment often required with external radiation that can cause fatigue, weight
                  gain, and mood changes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>The &quot;One-and-Done&quot; Advantage:</strong> While external radiation
                  can require daily trips to the clinic for 5 to 9 weeks, LDR brachytherapy is a
                  single, permanent implant.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-[#e8edf5]">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Is LDR Brachytherapy Right for You?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              LDR brachytherapy is an ideal option for men with localized prostate cancer who are
              looking for a curative treatment that minimizes disruption to their lives.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Summary of Benefits
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>30-minute</strong> outpatient procedure.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>No urinary catheter</strong> required post-op.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Highly effective</strong> long-term cancer control.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Lower risk</strong> of sexual and urinary side effects.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>
                  <strong>Potential to avoid</strong> hormone therapy (ADT).
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="men-brachytherapy-contact"
          className="relative scroll-mt-28 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName="Brachytherapy"
              serviceName="Brachytherapy"
              category="Men > Prostate Cancer"
              sourcePath="/men/prostate-cancer/radiation-treatments/brachytherapy"
              idPrefix="men-brachytherapy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
