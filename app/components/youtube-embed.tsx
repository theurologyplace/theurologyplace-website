"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  /**
   * Query string for the embed URL (without leading `?`).
   * Default `rel=0&modestbranding=1` matches prior site embeds. Pass `""` for no extra params.
   */
  embedSearchParams?: string;
  posterImageSrc?: string;
  posterLinkHref?: string;
};

const DEFAULT_EMBED_PARAMS = "rel=0&modestbranding=1";

export function YouTubeEmbed({
  videoId,
  title,
  className,
  embedSearchParams = DEFAULT_EMBED_PARAMS,
  posterImageSrc,
  posterLinkHref,
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const query = useMemo(() => {
    const params = new URLSearchParams(embedSearchParams);

    if (posterImageSrc && isLoaded) {
      params.set("autoplay", "1");
    }

    const search = params.toString();
    return search.length > 0 ? `?${search}` : "";
  }, [embedSearchParams, isLoaded, posterImageSrc]);

  if (posterImageSrc && posterLinkHref) {
    return (
      <a
        href={posterLinkHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block aspect-video w-full overflow-hidden rounded-lg bg-slate-900 ${className ?? ""}`}
        aria-label={title}
      >
        <Image src={posterImageSrc} alt={title} fill className="object-cover" sizes="100vw" />
      </a>
    );
  }

  if (posterImageSrc && !isLoaded) {
    return (
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className={`group relative block aspect-video w-full overflow-hidden rounded-lg bg-slate-900 text-left ${className ?? ""}`}
        aria-label={`Play ${title}`}
      >
        <Image src={posterImageSrc} alt={title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-slate-900/20 transition group-hover:bg-slate-900/30" />
        <div className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.25rem] bg-red-600 shadow-lg transition group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-8 w-8 fill-white"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-lg bg-slate-900 ${className ?? ""}`}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}${query}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
