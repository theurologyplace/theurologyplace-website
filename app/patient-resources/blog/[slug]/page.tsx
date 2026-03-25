import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "@portabletext/types";
import { client, urlFor } from "@/lib/sanity";

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  body
}`;

const allSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

type BlogPost = {
  _id: string;
  title: string | null;
  slug: { current?: string } | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: Parameters<typeof urlFor>[0] | null;
  body: PortableTextBlock[] | null;
};

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
          {dateLabel ? (
            <time
              className="mt-4 block text-sm font-medium text-slate-500"
              dateTime={post.publishedAt ?? undefined}
            >
              {dateLabel}
            </time>
          ) : null}
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
      </article>
    </main>
  );
}
