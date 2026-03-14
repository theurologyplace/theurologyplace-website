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

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
      <blockquote className="text-center">
        <span className="text-4xl font-serif leading-none text-slate-400 md:text-5xl">
          &ldquo;
        </span>
        <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-800 md:text-xl">
          {review.quote}
        </p>
        <footer className="mt-6 font-semibold text-slate-900">
          — {review.name}
        </footer>
      </blockquote>
    </div>
  );
}
