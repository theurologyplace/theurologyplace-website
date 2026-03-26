import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
} from "@portabletext/types";
import { BTN_PRIMARY } from "@/app/lib/button-styles";
import { client, urlFor } from "@/lib/sanity";

/** Fetches published post fields. Editors must Publish in Studio for changes to appear on the site; production static pages update on the next deploy unless revalidation is configured. */
const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  body,
  ctaText,
  ctaLink,
  relatedPosts[]->{
    _id,
    title,
    slug,
    excerpt,
    mainImage
  },
  author->{
    _id,
    name
  }
}`;

const allSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

function PostCta({ href, label }: { href: string; label: string }) {
  const external =
    href.startsWith("http://") || href.startsWith("https://");
  const className = `inline-flex ${BTN_PRIMARY}`;
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

type Author = {
  _id: string;
  name: string | null;
};

/** Dereferenced related post from GROQ (may include nulls from broken refs) */
type RelatedPostProjection = {
  _id: string;
  title: string | null;
  slug: { current?: string } | null;
  excerpt: string | null;
  mainImage: Parameters<typeof urlFor>[0] | null;
};

type BlogPost = {
  _id: string;
  title: string | null;
  slug: { current?: string } | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: Parameters<typeof urlFor>[0] | null;
  /** Portable Text blocks + image objects from Sanity */
  body: Array<PortableTextBlock | ArbitraryTypedObject> | null;
  ctaText: string | null;
  ctaLink: string | null;
  relatedPosts: (RelatedPostProjection | null)[] | null;
  author: Author | null;
};

function normalizeRelatedPosts(
  currentId: string,
  raw: BlogPost["relatedPosts"],
): RelatedPostProjection[] {
  if (!raw?.length) return [];
  return raw.filter(
    (r): r is RelatedPostProjection =>
      r != null &&
      typeof r._id === "string" &&
      r._id !== currentId &&
      Boolean(r.slug?.current),
  );
}

const portableTextComponents: PortableTextComponents = {
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

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Pick<BlogPost, "title" | "excerpt"> | null>(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt }`,
    { slug },
  );
  if (!post?.title) {
    return { title: "Blog" };
  }
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<BlogPost | null>(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const dateLabel = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const imageUrl =
    post.mainImage != null
      ? urlFor(post.mainImage).width(1200).height(675).url()
      : null;

  const relatedPosts = normalizeRelatedPosts(post._id, post.relatedPosts);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-sm">
          <Link
            href="/patient-resources/blog"
            className="font-medium text-blue-600 transition hover:text-blue-700"
          >
            ← Blog
          </Link>
        </p>

        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {post.title ?? "Untitled"}
          </h1>
          {(dateLabel || post.author?.name) && (
            <p className="mt-4 text-sm font-medium text-slate-500">
              {dateLabel ? (
                <time dateTime={post.publishedAt ?? undefined}>{dateLabel}</time>
              ) : null}
              {dateLabel && post.author?.name ? (
                <span className="mx-1.5 text-slate-400" aria-hidden>
                  ·
                </span>
              ) : null}
              {post.author?.name ? (
                <span className="text-slate-600">{post.author.name}</span>
              ) : null}
            </p>
          )}
        </header>

        {imageUrl ? (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/80">
            <Image
              src={imageUrl}
              alt={post.title ?? "Blog post"}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
              unoptimized
            />
          </div>
        ) : null}

        {post.excerpt ? (
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
        ) : null}

        {post.body && post.body.length > 0 ? (
          <div className="mt-10 border-t border-slate-200 pt-10">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section
            className="mt-12 border-t border-slate-200 pt-10"
            aria-labelledby="related-posts-heading"
          >
            <h2
              id="related-posts-heading"
              className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl"
            >
              Related posts
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {relatedPosts.map((related) => {
                const href = `/patient-resources/blog/${related.slug?.current ?? ""}`;
                const thumbUrl =
                  related.mainImage != null
                    ? urlFor(related.mainImage).width(400).height(300).url()
                    : null;
                return (
                  <li key={related._id}>
                    <Link
                      href={href}
                      className="group flex gap-4 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:shadow-md"
                    >
                      <div className="relative aspect-[4/3] w-28 shrink-0 bg-slate-100 sm:w-36">
                        {thumbUrl ? (
                          <Image
                            src={thumbUrl}
                            alt={related.title ?? ""}
                            fill
                            className="object-cover transition group-hover:opacity-95"
                            sizes="144px"
                            unoptimized
                          />
                        ) : null}
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-center py-3 pr-4">
                        <span className="font-bold leading-snug text-slate-900 group-hover:text-blue-700">
                          {related.title ?? "Untitled"}
                        </span>
                        {related.excerpt ? (
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">
                            {related.excerpt}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {post.ctaLink?.trim() ? (
          <div className="mt-12 flex justify-center border-t border-slate-200 pt-10">
            <PostCta
              href={post.ctaLink.trim()}
              label={post.ctaText?.trim() || "Learn more"}
            />
          </div>
        ) : null}
      </article>
    </main>
  );
}
