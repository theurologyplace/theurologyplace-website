import Image from "next/image";
import type { Metadata } from "next";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_IMAGE_SECTION,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const IMG_DIR = "/images/privacy policy hippa";

const HERO_BG = `url(${encodeURI(`${IMG_DIR}/Doctor-with-Patient-scaled.jpg`)})`;
const DIALPAD_SRC = encodeURI(`${IMG_DIR}/DialPad-1920w.jpg`);

export const metadata: Metadata = {
  title: "Privacy Policy HIPAA | Patient Resources | The Urology Place",
  description:
    "Privacy Policy for The Urology Place website and services. Contact us with questions about how we handle your information.",
};

export default function PrivacyPolicyHipaaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
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
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className={HERO_TITLE_ON_IMAGE}>
            Privacy Policy HIPAA
          </h1>
        </div>
      </section>

      <section
        className={`${HERO_AFTER_SLIDE_BASE} bg-gradient-to-b from-slate-50 via-white to-slate-50/90`}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="space-y-10">
            <figure className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70">
                <Image
                  src={DIALPAD_SRC}
                  alt="HIPAA consent and communication preferences"
                  width={1408}
                  height={1616}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 768px, 100vw"
                  priority
                />
              </div>
            </figure>

            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm md:p-10">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <span className="font-semibold text-slate-900">
                  Effective Date:
                </span>{" "}
                This Privacy Policy has been in place for our website and
                services and is periodically updated to reflect changes in our
                practices and applicable regulations.
              </p>
              <p className="mt-6 text-sm font-medium text-slate-600 md:text-base">
                Last Updated: 24 March 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
