import Image from "next/image";
import Link from "next/link";
import { BTN_PRIMARY } from "@/app/lib/button-styles";
import { client, postsQuery, urlFor } from "@/lib/sanity";

type BlogPost = {
  _id: string;
  title: string | null;
  slug: { current?: string } | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: Parameters<typeof urlFor>[0] | null;
};

export default async function BlogPage() {
  const posts = await client.fetch<BlogPost[]>(postsQuery);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Educational articles and practice updates from our clinic.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-slate-600">
            No posts yet. Check back soon.
          </p>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const href = `/patient-resources/blog/${post.slug?.current ?? ""}`;
              const dateLabel = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : null;
              const imageUrl =
                post.mainImage != null
                  ? urlFor(post.mainImage).width(800).height(600).url()
                  : null;

              return (
                <li key={post._id}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:shadow-md">
                    <div className="relative aspect-[4/3] w-full bg-slate-100">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title ?? "Blog post"}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col border-t border-slate-200 px-4 py-5">
                      {dateLabel ? (
                        <time
                          className="text-xs font-medium text-slate-500"
                          dateTime={post.publishedAt ?? undefined}
                        >
                          {dateLabel}
                        </time>
                      ) : null}
                      <h2 className="mt-2 text-lg font-bold leading-snug text-slate-900 md:text-xl">
                        {post.title ?? "Untitled"}
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-600">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <div className="mt-4">
                        <Link
                          href={href}
                          className={`inline-flex ${BTN_PRIMARY}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
