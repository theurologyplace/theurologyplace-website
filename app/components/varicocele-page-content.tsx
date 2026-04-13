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

const HERO_BG = encodeURI("/images/varicocele/1764649591_2734094-1.jpg");
const IMG_SECONDARY = encodeURI("/images/peyronies disease/photo-1522308300961-fdb949cac8aa-2880w.jpg");

const PANEL = "bg-[#e8edf5]";
const CONTENT_CARD =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8";
const ROUND_IMG =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const SYMPTOMS = [
  "Dull ache or heaviness in the scrotum, often worse with prolonged standing",
  "Visible or palpable “bag of worms” veins on examination",
  "Concerns about fertility or abnormal semen parameters",
  "Asymmetric testicular discomfort that improves when lying down",
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
            <h1 className={HERO_TITLE_ON_IMAGE}>Varicocele</h1>
            <p className={`mt-6 max-w-3xl mx-auto ${HERO_SUBTITLE_ON_IMAGE}`}>
              Enlarged veins around the testicle are common and treatable. At The Urology Place in San
              Antonio, we evaluate varicoceles that cause pain, fertility concerns, or testicular
              asymmetry and discuss evidence-based options.
            </p>
            <Link
              href="/men/male-sexual-dysfunction/varicocele/contact-us"
              className={`${BTN_PRIMARY} mt-8 inline-block`}
            >
              Request a consultation
            </Link>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Understanding varicocele
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              <p>
                A <strong>varicocele</strong> is a cluster of dilated veins in the scrotum, similar to
                varicose veins in the leg. It occurs when valves in the veins do not keep blood flowing
                efficiently, raising pressure and temperature around the testicle. Many men have small
                varicoceles without symptoms; others notice pain, a dragging sensation, or fertility
                testing that prompts evaluation.
              </p>
              <p>
                Diagnosis usually combines physical exam and, when needed, ultrasound.{" "}
                <strong>The Urology Place</strong> explains when observation is reasonable and when repair
                or referral for embolization may improve symptoms or fertility outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className={ROUND_IMG}>
                <Image
                  src={IMG_SECONDARY}
                  alt="Man in a calm setting"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
              <div className={CONTENT_CARD}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Signs that prompt a visit
                </h2>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  {SYMPTOMS.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700 md:text-base">
                  Treatment options can include microscopic surgical repair, laparoscopic approaches, or
                  interventional embolization, depending on your anatomy and goals. We outline recovery,
                  success rates, and what follow-up testing may be useful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Talk with our team</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              Whether you need reassurance, imaging, or a plan for treatment, we are here to help you
              move forward with clear information and coordinated care.
            </p>
            <Link
              href="/men/male-sexual-dysfunction/varicocele/contact-us"
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
