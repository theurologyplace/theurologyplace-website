import Image from "next/image";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/pae/What-is-Prostate-Artery-Embolization-PAE.webp");
const IMG_LIFESTYLE = encodeURI("/images/enlarged prostate/photo-1491484925566-336b202157a5-2880w.jpg");

const PANEL = "bg-[#e8edf5]";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const HIGHLIGHTS = [
  "Catheter-based procedure that reduces blood flow to enlarged prostate tissue",
  "Often considered for men who want to avoid traditional prostate surgery",
  "Typically performed with conscious sedation or light anesthesia in a procedural setting",
  "Symptom improvement may build over weeks as the prostate softens and shrinks",
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
            <h1 className={HERO_TITLE_ON_IMAGE}>Prostatic Artery Embolization (PAE)</h1>
            <p className={`mt-6 max-w-3xl mx-auto ${HERO_SUBTITLE_ON_IMAGE}`}>
              A minimally invasive approach for benign prostatic hyperplasia (BPH) that targets the
              arteries supplying the prostate. Learn how PAE may fit your symptoms and anatomy at The
              Urology Place in San Antonio.
            </p>
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
              How PAE works
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                During <strong>prostatic artery embolization</strong>, an interventional specialist
                guides a thin catheter through the blood vessels and places tiny particles to slow blood
                flow to the enlarged areas of the prostate. Over time, that tissue may shrink, relieving
                pressure on the urethra and improving urinary symptoms for many men.
              </p>
              <p>
                PAE does not remove the prostate. It is one of several options for men with bothersome
                BPH who are not ideal candidates for—or prefer to defer—transurethral or open surgery.
                Our team coordinates evaluation, imaging requirements, and follow-up so you understand
                benefits, limitations, and recovery.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  What to know
                </h2>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  {HIGHLIGHTS.map((line) => (
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
          <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Is PAE right for you?</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Candidates are generally men with moderate to severe LUTS from BPH who have reviewed risks
              and benefits with their urology team. We help you compare PAE with medications, in-office
              therapies, and surgery so the choice aligns with your health and preferences.
            </p>
            <div className="mt-8">
              <a href="#men-pae-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
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
