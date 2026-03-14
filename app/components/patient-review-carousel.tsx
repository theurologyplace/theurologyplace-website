"use client";

import { useEffect, useState } from "react";
import { PATIENT_REVIEWS } from "@/app/data/patient-reviews";

const ROTATION_INTERVAL_MS = 8000;
const FADE_DURATION_MS = 450;

export function PatientReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((i) => (i + 1) % PATIENT_REVIEWS.length);
        setVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATION_INTERVAL_MS);
    return () => {
      clearInterval(id);
      clearTimeout(timeoutId);
    };
  }, []);

  const review = PATIENT_REVIEWS[index];
  const goPrev = () => {
    setVisible(false);
    setTimeout(() => {
      setIndex((i) => (i - 1 + PATIENT_REVIEWS.length) % PATIENT_REVIEWS.length);
      setVisible(true);
    }, FADE_DURATION_MS);
  };
  const goNext = () => {
    setVisible(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % PATIENT_REVIEWS.length);
      setVisible(true);
    }, FADE_DURATION_MS);
  };

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <button
        type="button"
        onClick={goPrev}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-blue-600 bg-white text-blue-600 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Previous review"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div
        className={`min-h-[120px] flex-1 transition-opacity duration-300 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
      >
        <blockquote className="text-center">
          <p className="mx-auto max-w-3xl text-lg text-slate-800 md:text-xl">
            {review.quote}
          </p>
          <footer className="mt-6 font-semibold text-slate-900">
            — {review.name}
          </footer>
        </blockquote>
      </div>
      <button
        type="button"
        onClick={goNext}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-blue-600 bg-white text-blue-600 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Next review"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
