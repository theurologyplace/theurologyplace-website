import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
} from "@portabletext/types";
import { urlFor } from "@/lib/sanity";

export type PrivacyPolicySanityData = {
  _id: string;
  _updatedAt: string;
  internalTitle: string | null;
  leadImage: Parameters<typeof urlFor>[0] | null;
  effectiveDate: Array<PortableTextBlock | ArbitraryTypedObject> | null;
  body: Array<PortableTextBlock | ArbitraryTypedObject> | null;
};

/** Matches prior hardcoded line: "24 March 2026" */
export function formatPrivacyPolicyLastUpdated(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const effectiveDateCaptionComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-3 font-normal leading-relaxed first:mt-0">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <span className="font-normal">{children}</span>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external =
        href.startsWith("http://") || href.startsWith("https://");
      const className =
        "font-normal text-blue-600 underline decoration-blue-600/35 underline-offset-2 hover:text-blue-700";
      if (external) {
        return (
          <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
};

const policyBodyComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-900 first:mt-0">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-900 first:mt-0">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mt-8 text-xl font-bold text-slate-900 first:mt-0">
        {children}
      </h4>
    ),
    h4: ({ children }) => (
      <h5 className="mt-6 text-lg font-semibold text-slate-900 first:mt-0">
        {children}
      </h5>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-blue-600 pl-4 text-slate-700 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-base leading-relaxed text-slate-700 last:mb-0">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-slate-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-700 marker:text-slate-500">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external =
        href.startsWith("http://") || href.startsWith("https://");
      const className =
        "font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition hover:text-blue-700 hover:decoration-blue-700";
      if (external) {
        return (
          <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1200).url();
      const alt =
        typeof value.alt === "string" && value.alt.trim() !== ""
          ? value.alt
          : "";
      const caption =
        typeof value.caption === "string" && value.caption.trim() !== ""
          ? value.caption
          : null;
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
              unoptimized
            />
          </div>
          {caption ? (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PrivacyPolicySanityContent({
  data,
}: {
  data: PrivacyPolicySanityData;
}) {
  const leadUrl =
    data.leadImage != null
      ? urlFor(data.leadImage).width(1600).quality(90).url()
      : null;
  const leadAlt =
    (data.leadImage as { alt?: string } | null)?.alt?.trim() ?? "";

  const hasEffective =
    data.effectiveDate != null && data.effectiveDate.length > 0;
  const hasBody = data.body != null && data.body.length > 0;

  return (
    <div className="space-y-10">
      <div className="policy-last-updated rounded-2xl border border-slate-200/85 bg-gradient-to-br from-slate-50/95 via-white to-blue-50/25 px-6 py-5 shadow-md ring-1 ring-slate-200/55 md:px-9 md:py-7">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
          Last updated
        </p>
        <p className="mt-2 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
          {formatPrivacyPolicyLastUpdated(data._updatedAt)}
        </p>
        {!leadUrl && hasEffective ? (
          <div className="policy-effective-date mt-5 border-t border-slate-200/70 pt-5 text-sm font-normal leading-relaxed text-slate-600">
            <PortableText
              value={data.effectiveDate!}
              components={effectiveDateCaptionComponents}
            />
          </div>
        ) : null}
      </div>

      {leadUrl ? (
        <figure className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70">
            <Image
              src={leadUrl}
              alt={leadAlt || "Privacy policy illustration"}
              width={1408}
              height={1616}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
              unoptimized
            />
          </div>
          {hasEffective ? (
            <figcaption className="policy-effective-date mt-4 text-center text-sm font-normal text-slate-600">
              <PortableText
                value={data.effectiveDate!}
                components={effectiveDateCaptionComponents}
              />
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {hasBody ? (
        <div className="prose-policy max-w-none border-t border-slate-200/80 pt-10">
          <PortableText value={data.body!} components={policyBodyComponents} />
        </div>
      ) : null}
    </div>
  );
}
