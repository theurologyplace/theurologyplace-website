import Link from "next/link";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

type CancerTreatmentDetailPageProps = {
  category: string;
  heroBg: string;
  highlights: readonly string[];
  highlightsTitle: string;
  idPrefix: string;
  introParagraphs: readonly string[];
  introTitle: string;
  pageName: string;
  relatedPages?: readonly {
    href: string;
    title: string;
    body: string;
  }[];
  scheduleBody: string;
  sourcePath: string;
  subtitle: string;
  title: string;
  whenToAsk: readonly string[];
  whenToAskTitle: string;
};

const PANEL = "bg-[#e8edf5]";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
      {items.map((line) => (
        <li key={line} className="flex gap-3">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"
            aria-hidden
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

export function CancerTreatmentDetailPage({
  category,
  heroBg,
  highlights,
  highlightsTitle,
  idPrefix,
  introParagraphs,
  introTitle,
  pageName,
  relatedPages,
  scheduleBody,
  sourcePath,
  subtitle,
  title,
  whenToAsk,
  whenToAskTitle,
}: CancerTreatmentDetailPageProps) {
  return (
    <div className="relative isolate min-h-screen text-slate-900">
      <div
        className={HERO_FIXED_BACKDROP}
        aria-hidden
        style={{
          backgroundImage: `url('${heroBg}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <section className={HERO_IMAGE_SECTION}>
          <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className={HERO_TITLE_ON_IMAGE}>{title}</h1>
            <p className={`mt-4 ${HERO_SUBTITLE_ON_IMAGE}`}>{subtitle}</p>
            <div className="mt-8">
              <a href={`#${idPrefix}-contact`} className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} bg-white`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {introTitle}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {highlightsTitle}
            </h2>
            <BulletList items={highlights} />
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {whenToAskTitle}
            </h2>
            <BulletList items={whenToAsk} />
          </div>
        </section>

        {relatedPages?.length ? (
          <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
              <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Learn More About These Related Options
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {page.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                      {page.body}
                    </p>
                    <p className="mt-5 font-semibold text-blue-700">Learn more</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className={`relative border-t border-slate-200/80 ${PANEL}`}>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Scheduling Information
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-800 md:text-base">
              {scheduleBody}{" "}
              <a
                href="tel:2106173670"
                className="font-semibold text-blue-700 underline underline-offset-2"
              >
                210-617-3670
              </a>
              .
            </p>
          </div>
        </section>

        <section
          id={`${idPrefix}-contact`}
          className="relative scroll-mt-28 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName={pageName}
              serviceName={pageName}
              category={category}
              sourcePath={sourcePath}
              idPrefix={idPrefix}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
