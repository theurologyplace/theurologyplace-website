import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { YouTubeEmbed } from "@/app/components/youtube-embed";
import { BTN_MAKE_APPOINTMENT_HERO, BTN_PRIMARY_LARGE } from "@/app/lib/button-styles";
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

const BULLET =
  "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600";

export const metadata: Metadata = {
  title: "Brachytherapy",
  description:
    "Interventional radiotherapy and LDR brachytherapy for prostate cancer at The Urology Place in San Antonio.",
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
              Interventional Radiotherapy: Low-Dose-Rate (LDR) Brachytherapy for Prostate Cancer
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
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
              <div className="min-w-0">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  What is Modern LDR Brachytherapy?
                </h2>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
                  <p>
                    Low-Dose-Rate (LDR) brachytherapy often referred to as &quot;seed
                    implantation&quot; is a highly precise form of internal radiation therapy.
                    Unlike traditional external radiation, which must travel through healthy skin
                    and tissue to reach the target, modern brachytherapy places tiny, radioactive
                    seeds (each about the size of a grain of rice) directly inside the prostate
                    gland.
                  </p>
                  <p>
                    Using advanced, live-ultrasound guidance and state-of-the-art computer
                    mapping, our radiation oncology team precisely distributes these seeds to match
                    the exact shape and size of your prostate.
                  </p>
                  <p>
                    Just like surgery, experience is KEY for good outcomes. Dr Kella has performed
                    thousands of robotic prostate surgeries, putting him in the top 1% for surgical
                    experience. He has partnered with Western Radiation Oncology after years of
                    planning. The group has done thousands of brachytherapy cases and is the busiest
                    active group in the world. No one in the Southwest comes close to their
                    experience.
                  </p>
                  <p>
                    Over several weeks and months, the seeds continuously deliver a localized,
                    cancer-killing dose of radiation. Eventually, the radiation safely fades away,
                    leaving the harmless, microscopic seeds permanently in place.
                  </p>
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

        <section className="relative border-t border-slate-200/80 bg-[#e8edf5]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
              <YouTubeEmbed
                videoId="xrTYoYcwN1I"
                title="LDR brachytherapy for prostate cancer"
                className="rounded-none shadow-none ring-0"
              />
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Pursue Brachytherapy?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              When confronting prostate cancer, choosing a treatment is a balance between long-term
              cure rates and quality of life. Brachytherapy is widely pursued for several compelling
              reasons:
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Maximum Impact, Minimum Side Effects:</strong> Because the radiation source
                  is inside the tumor, it delivers an incredibly high dose to the cancer cells while
                  dramatically sparing the surrounding healthy organs (like the bladder and rectum).
                  Most patients do NOT need a urinary catheter afterwards. Many patients will be
                  offered a temporary{" "}
                  <Link
                    href="/men/prostate-cancer/radiation-treatments/rectal-spacer"
                    className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:text-blue-900"
                  >
                    rectal spacer
                  </Link>
                  , 1-3 weeks prior to the procedure. This moves the rectum away from the prostate,
                  reducing any future rectal damage from the radiation to about 1% risk. In addition,
                  there is less erectile dysfunction risk with the spacer. This procedure is quick
                  and done in the office.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Superb Preservation of Quality of Life:</strong> Compared to radical
                  surgical removal of the prostate, modern brachytherapy carries a significantly
                  lower risk of urinary incontinence and offers a more favorable profile for
                  preserving long-term sexual function.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Unmatched Convenience:</strong> While standard external beam radiation
                  requires daily trips to a facility for up to several weeks, LDR brachytherapy is a
                  one-time, outpatient procedure. You walk in and walk out the same day.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-[#e8edf5]">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Proven Outcomes Across Risk Groups
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Prostate cancer is typically categorized into risk groups based on your PSA level,
              Gleason score, and clinical stage. LDR brachytherapy has an exceptional track record,
              heavily supported by decades of clinical data:
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Low-Risk Prostate Cancer:</strong> For localized, early-stage cancer,
                  brachytherapy is highly effective as a standalone &quot;monotherapy.&quot; Long-term
                  data shows disease-free cure rates as high as 95% at 15 years, rivaling radical
                  prostatectomy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Intermediate-Risk Prostate Cancer:</strong> For men with intermediate
                  features, brachytherapy remains a premiere option. It can be used alone or
                  combined with a short course of external beam radiation/hormone therapy,
                  consistently achieving excellent 10-year biochemical control rates (often between
                  85% to 94%).
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>High-Risk Prostate Cancer:</strong> For advanced or aggressive cases,
                  modern brachytherapy is used as a powerful &quot;boost&quot; alongside external
                  beam radiation therapy (EBRT). Large-scale clinical trials (such as the landmark
                  ASCENDE-RT trial) have proven that adding a brachytherapy boost provides
                  significantly higher cure rates and superior recurrence-free survival compared to
                  external radiation alone.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              The Patient Experience: What to Expect
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              At The Urology Place, we ensure your journey is smooth, clear, and focused on your
              comfort.
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>The Pre-Planning Phase:</strong> A few weeks prior to the procedure, you
                  will have a mapping session. Imaging can build a 3D computerized template of your
                  prostate to order your exact number of seeds. If you have a large prostate or
                  significant urinary symptoms, Dr Kella will discuss possible options to make you
                  an optimal candidate for brachytherapy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Rectal Spacing Day:</strong> 1-3 weeks prior to your procedure, you will
                  have a rectal spacer placed. This is done in the office with Dr Kella and usually
                  takes 15-30 minutes. This will give extra protection to your rectum and nerves.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>The Procedure Day:</strong> The implant is performed in an outpatient
                  surgical environment. You will meet your surgeons, the radiation oncologist and
                  Dr Kella. You will receive anesthesia so you are completely asleep and feel no
                  pain. Using the 3D map as a blueprint, seeds are placed through thin needles
                  guided by live ultrasound. The procedure usually takes about an hour.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>Immediate Recovery:</strong> After a brief stay in the recovery room, you
                  return home the same day. Most men report only mild soreness or a &quot;heavy&quot;
                  sensation in the pelvic area, which is easily managed with mild over-the-counter
                  pain relievers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className={BULLET} aria-hidden />
                <span>
                  <strong>The Weeks Following:</strong> As the seeds actively emit radiation over the
                  first few weeks, you may experience temporary urinary symptoms like a stronger
                  urgency to go, a slower stream, or mild burning. These side effects peak around 4
                  to 6 weeks and steadily resolve as the seeds lose their energy. Most men return to
                  regular, everyday activities within just a few days of the procedure.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-[#e8edf5]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Take the Next Step
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Are you a candidate for LDR Brachytherapy? Schedule a consultation with our specialized
              team at The Urology Place to explore your options and build a treatment plan tailored
              to your life.
            </p>
            <div className="mt-8">
              <a href="#men-brachytherapy-contact" className={BTN_PRIMARY_LARGE}>
                Schedule a Consultation
              </a>
            </div>
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
