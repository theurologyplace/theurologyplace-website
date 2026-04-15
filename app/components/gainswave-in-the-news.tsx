import type { GainswaveNewsItem } from "@/app/data/gainswave-in-the-news";
import { GAINSWAVE_IN_THE_NEWS } from "@/app/data/gainswave-in-the-news";
import { BTN_SECONDARY } from "@/app/lib/button-styles";
import Image from "next/image";

/** Shared shell: fixed height so every card matches in the grid (tall content scrolls inside). */
const CARD_SHELL =
  "flex h-[22rem] w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-100";

type ArticleLogoVariant = NonNullable<Extract<GainswaveNewsItem, { kind: "article" }>["logoVariant"]>;

const LOGO_BAND: Record<ArticleLogoVariant, string> = {
  neutral: "bg-slate-800 text-white",
  "mens-health": "bg-[#e31937] text-white",
  maxim: "bg-black text-white",
  researchgate: "bg-[#00ccb1] text-white",
  journal: "bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-amber-50",
};

function ArticleNewsCard({
  source,
  tagline,
  badge,
  href,
  logoVariant = "neutral",
  image,
}: Extract<GainswaveNewsItem, { kind: "article" }>) {
  const bandClass = LOGO_BAND[logoVariant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${CARD_SHELL} p-0 text-left transition hover:border-blue-200/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
    >
      <div className={`relative h-24 w-full shrink-0 ${image ? "bg-slate-100" : bandClass}`}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center">
            <span className="text-sm font-bold leading-tight tracking-tight sm:text-base">{source}</span>
          </div>
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-6">
        {badge ? (
          <span className="mb-2 inline-flex w-fit shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {badge}
          </span>
        ) : null}
        {image ? (
          <h3 className="shrink-0 text-base font-semibold tracking-tight text-slate-900">{source}</h3>
        ) : null}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {tagline ? (
            <p className={`text-sm leading-relaxed text-slate-600 ${image ? "mt-2" : "mt-1"}`}>{tagline}</p>
          ) : null}
        </div>
        <span
          className={`${BTN_SECONDARY} mt-4 inline-flex w-fit shrink-0 text-xs sm:text-sm`}
        >
          Read more
        </span>
      </div>
    </a>
  );
}

function QuoteNewsCard({ quote, attribution }: Extract<GainswaveNewsItem, { kind: "quote" }>) {
  return (
    <div
      className={`${CARD_SHELL} cursor-default p-6`}
      role="figure"
      aria-label={attribution ? `Patient quote, ${attribution}` : "Patient quote"}
    >
      <div className="flex min-h-0 flex-1 flex-col border-l-4 border-teal-600/80 pl-4">
        <blockquote className="min-h-0 flex-1 overflow-y-auto text-sm leading-relaxed text-slate-800 md:text-[15px]">
          <span className="font-serif text-2xl leading-none text-teal-700/90" aria-hidden>
            &ldquo;
          </span>
          <span className="italic">{quote}</span>
          <span className="font-serif text-2xl leading-none text-teal-700/90" aria-hidden>
            &rdquo;
          </span>
        </blockquote>
        {attribution ? (
          <footer className="mt-4 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
            — {attribution}
          </footer>
        ) : null}
      </div>
    </div>
  );
}

function StatNewsCard({ value, description }: Extract<GainswaveNewsItem, { kind: "stat" }>) {
  return (
    <div
      className={`${CARD_SHELL} cursor-default bg-gradient-to-b from-slate-50 to-white p-6`}
      role="group"
      aria-label={`${value} ${description}`}
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-[2.75rem]">{value}</p>
        <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function GainswaveNewsCard({ item }: { item: GainswaveNewsItem }) {
  switch (item.kind) {
    case "article":
      return <ArticleNewsCard {...item} />;
    case "quote":
      return <QuoteNewsCard {...item} />;
    case "stat":
      return <StatNewsCard {...item} />;
    default: {
      const _exhaustive: never = item;
      return _exhaustive;
    }
  }
}

export function GainswaveInTheNewsSection() {
  return (
    <section className="relative border-t border-slate-200 bg-slate-50/90">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-blue-700 md:text-3xl">In the news</h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Press coverage, research context, and highlights — plus perspectives from men who&apos;ve explored care.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-slate-500">
          Outlet cards open in a new tab. Quotes and statistics are for reading on this page only.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GAINSWAVE_IN_THE_NEWS.map((item, index) => (
            <li key={index} className="min-w-0">
              <GainswaveNewsCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
