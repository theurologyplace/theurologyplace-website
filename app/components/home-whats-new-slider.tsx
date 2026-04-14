"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BTN_ICON_SECONDARY, BTN_PRIMARY } from "@/app/lib/button-styles";

export type HomeAnnouncementCard = {
  _id: string;
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  linkLabel: string;
};

const AUTO_ADVANCE_MS = 10_000;
const PAUSE_AFTER_MANUAL_MS = 30_000;

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function CardCta({ href, label }: { href: string; label: string }) {
  const className = `inline-block ${BTN_PRIMARY}`;
  if (isExternalUrl(href)) {
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

export function HomeWhatsNewSlider({
  cards,
}: {
  cards: HomeAnnouncementCard[];
}) {
  const n = cards.length;
  const [index, setIndex] = useState(0);
  /** Keeps the visible slide in range if `cards` length changes without remounting. */
  const activeIndex =
    n === 0 ? 0 : index < 0 || index >= n ? 0 : index;

  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Latest auto-advance chain starter (avoids recursive useCallback). */
  const scheduleNextAutoRef = useRef<() => void>(() => {});

  function clearAutoTimer() {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }

  useEffect(() => {
    const scheduleNext = () => {
      if (n <= 1) return;
      clearAutoTimer();
      autoTimerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % n);
        scheduleNextAutoRef.current();
      }, AUTO_ADVANCE_MS);
    };
    scheduleNextAutoRef.current = scheduleNext;

    clearAutoTimer();
    if (n > 1) {
      scheduleNext();
    }

    return () => {
      clearAutoTimer();
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    };
  }, [n]);

  function armResumeAutoChain() {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      scheduleNextAutoRef.current();
    }, PAUSE_AFTER_MANUAL_MS);
  }

  function onManualInteraction(nextIndex: number) {
    if (n === 0) return;
    clearAutoTimer();
    armResumeAutoChain();
    setIndex(((nextIndex % n) + n) % n);
  }

  function goDelta(delta: number) {
    if (n === 0) return;
    clearAutoTimer();
    armResumeAutoChain();
    setIndex((i) => (i + delta + n) % n);
  }

  if (n === 0) {
    return (
      <p className="text-center text-slate-600">
        New updates will appear here soon.
      </p>
    );
  }

  const current = cards[activeIndex];

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="What&apos;s new at The Urology Place"
    >
      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {n}: {current.title}
      </p>

      <div className="flex items-stretch gap-3 md:gap-5">
        {n > 1 ? (
          <button
            type="button"
            onClick={() => goDelta(-1)}
            className={BTN_ICON_SECONDARY}
            aria-label="Previous announcement"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : (
          <span className="w-10 shrink-0 md:w-11" aria-hidden />
        )}

        <div className="min-w-0 flex-1 overflow-hidden rounded-2xl pb-1">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cards.map((card) => (
              <article
                key={card._id}
                className="w-full shrink-0 basis-full px-0.5"
                aria-hidden={card._id !== current._id}
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80 md:flex md:min-h-[260px]">
                  <div className="relative aspect-[16/10] w-full bg-slate-100 md:aspect-auto md:h-auto md:w-[42%] md:min-h-[220px] md:max-w-md md:self-stretch">
                    <Image
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 100vw"
                      unoptimized
                      priority={card._id === cards[0]._id}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                    <h3 className="text-xl font-bold tracking-tight text-blue-700 md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 whitespace-pre-line text-slate-700 leading-relaxed">
                      {card.body}
                    </p>
                    <div className="mt-6">
                      <CardCta href={card.linkUrl} label={card.linkLabel} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {n > 1 ? (
          <button
            type="button"
            onClick={() => goDelta(1)}
            className={BTN_ICON_SECONDARY}
            aria-label="Next announcement"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ) : (
          <span className="w-10 shrink-0 md:w-11" aria-hidden />
        )}
      </div>

      {n > 1 ? (
        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Announcement slides"
        >
          {cards.map((card, i) => (
            <button
              key={card._id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to announcement ${i + 1}: ${card.title}`}
              onClick={() => onManualInteraction(i)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                i === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
