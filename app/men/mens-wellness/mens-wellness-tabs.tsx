"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BTN_PRIMARY } from "@/app/lib/button-styles";

export type WellnessTabId =
  | "erectile-dysfunction"
  | "peyronies"
  | "low-testosterone"
  | "prostate-health";

type TabConfig = {
  id: WellnessTabId;
  label: string;
  title: string;
  body: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  learnMoreHref: string;
};

const TABS: TabConfig[] = [
  {
    id: "erectile-dysfunction",
    label: "Erectile Dysfunction",
    title: "Male Sexual Dysfunction",
    imageSrc: "/images/men/Canva+-+Silhouette+of+Two+Man+Running-1920w.png",
    imageAlt: "Two men running at sunrise or sunset",
    learnMoreHref: "/men/male-sexual-dysfunction",
    body: (
      <p>
        As a board-certified urologist, the practice is well-versed in male sexual anatomy and offers comprehensive care for all aspects of sexual function. Erectile Dysfunction affects 30 million men in the U.S. alone. The practice utilizes advanced technologies like GAINSWave and CaverStem, which have proven to deliver high success rates in helping patients regain their confidence.
      </p>
    ),
  },
  {
    id: "peyronies",
    label: "Peyronie's Disease",
    title: "Penile Curvature",
    imageSrc: "/images/men/DDA986CD67FD4D35B428361B4B1EAC6E-c9f0660b-1920w.png",
    imageAlt: "Men in a natural setting",
    learnMoreHref: "/men/male-sexual-dysfunction",
    body: (
      <p>
        Though a mild curve is quite natural for men to experience, there are various factors as to why men experience a more dramatic curvature. In fact, Peyronie&apos;s Disease can affect 1 in 10 men. Upon a consultation with our board certified urologist, we would set up a customized treatment plan which can include GAINSWave and prescriptions to help straighten the curvature.
      </p>
    ),
  },
  {
    id: "low-testosterone",
    label: "Low Testosterone",
    title: "Hormone Replacement Therapy (HRT)",
    imageSrc: "/images/men/photo-1464746133101-a2c3f88e0dd9-1920w.jpg",
    imageAlt: "Man on mountain at sunrise or sunset",
    learnMoreHref: "/men/low-testosterone",
    body: (
      <p>
        If you are experiencing constant fatigue, mood changes, or have noticed a lack in libido, it might be a good time to consider HRT. Here at The Urology Place we are experts in hormonal wellness. We have been able to offer our patients various treatments to fit within their needs such as injections or bioidentical pellets to improve their quality of life.
      </p>
    ),
  },
  {
    id: "prostate-health",
    label: "Prostate Health",
    title: "Prostate Care",
    imageSrc: "/images/men/Prostate_Slice1-1920w.jpg",
    imageAlt: "Prostate anatomy illustration",
    learnMoreHref: "/men/prostate-cancer",
    body: (
      <p>
        Dr. Naveen Kella is a leading expert in managing and treating prostate cancer, enlarged prostate (BPH) and prostatitis. He has performed over 3000 robotic prostatectomy cases in their entirety, making him one of the most experienced prostate cancer surgeons in the nation.
      </p>
    ),
  },
];

export function MensWellnessTabs() {
  const [activeId, setActiveId] = useState<WellnessTabId>("erectile-dysfunction");
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
      {/* Tab list */}
      <div
        className="flex flex-wrap justify-center gap-1 border-b border-slate-200 pb-4"
        role="tablist"
        aria-label="Men's wellness topics"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              activeId === tab.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="mt-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {active.title}
            </h3>
            <div className="mt-4 text-slate-700 leading-relaxed">{active.body}</div>
            <div className="mt-6">
              <Link href={active.learnMoreHref} className={`inline-block ${BTN_PRIMARY}`}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 lg:aspect-auto lg:min-h-[280px]">
            <Image
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
