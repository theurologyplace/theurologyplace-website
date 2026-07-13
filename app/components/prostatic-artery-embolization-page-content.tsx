import Image from "next/image";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { PaeRaoCredentialsAccordion } from "@/app/components/pae-rao-credentials-accordion";
import { PaeResearchTabs } from "@/app/components/pae-research-tabs";
import { YouTubeEmbed } from "@/app/components/youtube-embed";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/pae/What-is-Prostate-Artery-Embolization-PAE.webp");
const IMG_LIFESTYLE = encodeURI("/images/enlarged prostate/photo-1491484925566-336b202157a5-2880w.jpg");
const IMG_PROCEDURE = encodeURI("/images/pae/PAE.jpeg");
const IMG_DR_RAO = encodeURI("/images/enlarged prostate/sandeep-1-e1750158588460.jpg");

const PANEL = "bg-slate-50";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const BULLET = (
  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
);

const CANDIDATE_IF = [
  "Have moderate to severe urinary symptoms from an enlarged prostate",
  "Have not found adequate relief from medications",
  "Want to avoid traditional surgery",
  "Are concerned about sexual side effects",
  "Prefer a same-day, minimally invasive procedure",
] as const;

const COMPARISON_ROWS = [
  {
    label: "Procedure",
    pae: "Minimally invasive (tiny wrist/groin puncture)",
    medication: "Daily pills",
    turp: "Surgery under anesthesia",
  },
  {
    label: "Recovery",
    pae: "Same day; return to activities in days",
    medication: "No recovery needed",
    turp: "1–2 nights in hospital; weeks to recover",
  },
  {
    label: "Effectiveness",
    pae: "Significant and lasting",
    medication: "Moderate",
    turp: "Greatest improvement",
  },
  {
    label: "Risks / Side Effects",
    pae: "Very low risk",
    medication: "Common (erectile dysfunction, ejaculation changes)",
    turp: "Common (retrograde ejaculation)",
  },
  {
    label: "Catheter",
    pae: "Usually not",
    medication: "N/A",
    turp: "Typically yes, for days",
  },
  {
    label: "Retreatment",
    pae: "~16% over 5 years",
    medication: "Ongoing daily use",
    turp: "~10–15% over time",
  },
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

        <section className={`${HERO_AFTER_SLIDE_BASE} bg-white`}>
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
                  What Is PAE?
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  <p>
                    Prostate Artery Embolization (PAE) is a minimally invasive procedure used to treat
                    symptoms of an enlarged prostate (also called benign prostatic hyperplasia, or BPH).
                    During the procedure, a specially trained doctor threads a tiny catheter through a
                    small puncture in the wrist or groin and uses X-ray guidance to reach the blood
                    vessels feeding the prostate. Tiny particles are then injected to reduce blood flow
                    to the prostate, causing it to shrink over time. This relieves urinary symptoms
                    without traditional surgery.
                  </p>
                  <p>
                    PAE is typically performed as an outpatient procedure, meaning most patients go home
                    the same day.
                  </p>
                </div>
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
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <PaeResearchTabs />
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Is PAE Recommended by Medical Societies?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Yes. The American Urological Association (AUA) — the leading professional organization for
              urologists in the United States — includes PAE as a recommended treatment option for men
              with prostates 50 cc or larger in their 2026 clinical guidelines.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Quick Comparison
            </h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-200/60">
              <table className="min-w-[40rem] w-full border-collapse text-left text-[14px] leading-snug md:text-[15px]">
                <caption className="sr-only">
                  Comparison of PAE, medication, and TURP surgery for BPH
                </caption>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th scope="col" className="px-4 py-4 font-semibold md:px-5">
                      <span className="sr-only">Category</span>
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold md:px-5">
                      PAE
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold md:px-5">
                      Medication
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold md:px-5">
                      TURP (Surgery)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, index) => (
                    <tr
                      key={row.label}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-4 py-4 font-semibold text-slate-900 md:px-5"
                      >
                        {row.label}
                      </th>
                      <td className="px-4 py-4 text-slate-700 md:px-5">{row.pae}</td>
                      <td className="px-4 py-4 text-slate-700 md:px-5">{row.medication}</td>
                      <td className="px-4 py-4 text-slate-700 md:px-5">{row.turp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Is PAE Right for You?
            </h2>
            <p className="mt-5 text-[15px] font-medium text-slate-900 md:text-base">
              PAE may be a good option if you:
            </p>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {CANDIDATE_IF.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-800 md:text-base">
              The best way to find out if PAE is right for you is to schedule a consultation. We will
              review your symptoms, medical history, and imaging to determine whether you are a good
              candidate.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How the Procedure Works
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-800 md:text-base">
                  <p>
                    A small catheter is inserted through the wrist or groin and guided to the prostate
                    arteries using advanced imaging.
                  </p>
                  <p>
                    Tiny particles are then injected to reduce blood flow, allowing the prostate to
                    gradually shrink. The procedure typically takes 1 to 2 hours, is performed in an
                    outpatient setting, and uses local anesthesia with light sedation.
                  </p>
                  <p>
                    This illustration shows the PAE procedure itself and helps visualize how targeted
                    treatment is delivered to the prostate.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80">
                <Image
                  src={IMG_PROCEDURE}
                  alt="Illustration of the prostate artery embolization procedure"
                  width={1024}
                  height={362}
                  className="block h-auto w-full"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
              <YouTubeEmbed
                videoId="nRFKRDHyHfI"
                title="Prostate Artery Embolization (PAE) discussion with Dr. Kella and Dr. Rao"
                className="rounded-none shadow-none ring-0"
              />
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Your PAE Care Team
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
                At The Urology Place, Dr. Naveen Kella evaluates your symptoms, confirms whether PAE
                is appropriate, and coordinates your overall BPH care. The embolization procedure is
                performed by Dr. Sandeep Rao, a board-certified interventional radiologist who works
                closely with Dr. Kella to deliver image-guided, minimally invasive treatment.
              </p>
            </div>

            <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
              <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80">
                  <Image
                    src={IMG_DR_RAO}
                    alt="Dr. Sandeep Rao, interventional radiologist"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 320px, 288px"
                  />
                </div>
              </div>

              <div className={CONTENT_CARD}>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Dr. Sandeep Rao, MD, MBA, CWSP
                </h3>
                <p className="mt-2 text-[15px] font-semibold text-blue-700 md:text-base">
                  Board-Certified Interventional Radiologist
                </p>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  <p>
                    With more than two decades in practice, Dr. Rao focuses on minimally invasive,
                    image-guided treatments for vascular disease, chronic pain, and other complex
                    conditions.
                  </p>
                  <p>
                    His expertise includes prostate artery embolization for enlarged prostate, along
                    with genicular artery embolization for knee pain and plantar fascia embolization.
                    He is known for adopting newer endovascular techniques early in their clinical use.
                  </p>
                  <p>
                    Dr. Rao performs hundreds of embolization procedures each year and partners with
                    Dr. Kella so patients receive thorough urologic evaluation before and coordinated
                    follow-up after PAE.
                  </p>
                </div>
                <PaeRaoCredentialsAccordion />
              </div>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Recovery and Results
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
                  Most patients go home the same day. You may experience mild pelvic discomfort for a few
                  days along with temporary urinary urgency or frequency. Most individuals are able to
                  return to normal activities within 1 to 3 days. Symptom improvement typically begins
                  within a few weeks and continues to improve over the course of 2 to 3 months.
                </p>
              </div>
              <YouTubeEmbed
                videoId="uAwHDmbrZcw"
                title="Prostate Artery Embolization (PAE) at The Urology Place"
                className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200"
              />
            </div>
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

            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Procedure Location
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              To schedule the PAE procedure with Dr. Rao: Please contact Monica at{" "}
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
