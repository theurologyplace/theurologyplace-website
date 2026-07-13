"use client";

import { useState } from "react";

type StudyTabId = "study-1" | "study-2" | "study-3" | "study-4";

type StudyTab = {
  id: StudyTabId;
  label: string;
  title: string;
  study: string;
  method: string | null;
  findings: readonly string[];
  nestedFindings?: readonly string[];
  takeaway: string;
};

const STUDIES: StudyTab[] = [
  {
    id: "study-1",
    label: "Study 1 - Placebo Trial",
    title: "Does PAE Really Work, or Is It Just a Placebo Effect?",
    study:
      "A randomized, placebo-controlled trial published in European Urology (2020) — one of the world’s top urology journals.",
    method:
      "80 men with severe BPH symptoms that had not improved with medication were randomly assigned to receive either a real PAE procedure or a “sham” (fake) procedure. Neither the patients nor the evaluators knew which procedure each patient received.",
    findings: [
      "Men who received PAE had dramatically better symptom improvement than those who received the sham procedure.",
      "Quality of life scores were also significantly better in the PAE group.",
      "When the sham group later received the real PAE procedure, they experienced the same level of improvement.",
      "Side effects were similar between both groups, and no serious complications occurred.",
    ],
    takeaway:
      "This study proves that the benefits of PAE are real — not just a placebo effect. This is considered the gold standard type of clinical trial.",
  },
  {
    id: "study-2",
    label: "Study 2 - Long-Term Results",
    title: "How Well Does PAE Work Over the Long Term?",
    study:
      "The largest single-center PAE study ever published, including 1,075 patients, published in the Journal of Vascular and Interventional Radiology (2025).",
    method:
      "Researchers tracked patients for up to 5 years after PAE, measuring symptom scores, quality of life, medication use, and complications.",
    findings: [
      "Symptom scores dropped significantly within the first few months and remained improved for up to 5 years.",
      "Quality of life improved substantially and was maintained long-term.",
      "94% of patients who needed a urinary catheter before the procedure were catheter-free within 3 months.",
      "65.5% of patients were able to stop their BPH medications within 1 year.",
      "Only 16% of patients needed a second prostate procedure over 5 years.",
      "Serious side effects were very rare (less than 1%), and all resolved completely.",
    ],
    takeaway:
      "PAE provides lasting symptom relief for the vast majority of patients, with a very favorable safety profile.",
  },
  {
    id: "study-3",
    label: "Study 3 - Medication Comparison",
    title: "Is PAE Better Than Taking Medication?",
    study: "The P-EASY ADVANCE randomized controlled trial, published in BJU International (2024).",
    method:
      "39 men who had never been treated for BPH were randomly assigned to receive either PAE or combination medication therapy (tamsulosin + dutasteride — two of the most commonly prescribed BPH drugs).",
    findings: [
      "PAE was more effective than medication at relieving urinary obstruction: 63% of PAE patients were unobstructed vs. only 28% on medication.",
      "PAE patients had greater reductions in prostate size, symptom scores, and better quality of life.",
      "Medication side effects — including altered ejaculation, erectile dysfunction, and nausea — were more common in the medication group.",
    ],
    takeaway:
      "For men just starting treatment for BPH, PAE may be a more effective option than medication, with fewer sexual side effects.",
  },
  {
    id: "study-4",
    label: "Study 4 - TURP Comparison",
    title: "How Does PAE Compare to Traditional Prostate Surgery (TURP)?",
    study:
      "The UK-ROPE study, a large multicenter registry published in BJU International (2018), comparing 216 PAE patients to 89 TURP patients across 17 UK medical centers.",
    method: null,
    findings: [
      "PAE produced a clinically meaningful 10-point improvement in symptom scores at 12 months.",
      "TURP produced a slightly larger improvement (15 points), but PAE offered important practical advantages:",
    ],
    nestedFindings: [
      "71% of PAE patients went home the same day, compared to only 20% of TURP patients.",
      "PAE had a lower complication rate.",
      "PAE patients returned to normal activities faster.",
      "PAE does not carry the risk of retrograde ejaculation (a common side effect of TURP).",
    ],
    takeaway:
      "While traditional surgery (TURP) may produce slightly greater symptom improvement, PAE offers a less invasive alternative with fewer complications, a faster recovery, and the ability to go home the same day.",
  },
];

const BULLET = (
  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
);

function StudyPanelBody({ study }: { study: StudyTab }) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{study.title}</h3>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <p>
          <span className="font-semibold text-slate-900">The Study: </span>
          {study.study}
        </p>
        {study.method ? (
          <p>
            <span className="font-semibold text-slate-900">What They Did: </span>
            {study.method}
          </p>
        ) : null}
        <div>
          <p className="font-semibold text-slate-900">Key Findings:</p>
          <ul className="mt-3 space-y-3">
            {study.findings.map((line) => (
              <li key={line} className="flex gap-3">
                {BULLET}
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {study.nestedFindings ? (
            <ul className="mt-3 space-y-3 pl-5">
              {study.nestedFindings.map((line) => (
                <li key={line} className="flex gap-3">
                  {BULLET}
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <p>
          <span className="font-semibold text-slate-900">What This Means for You: </span>
          {study.takeaway}
        </p>
      </div>
    </>
  );
}

export function PaeResearchTabs() {
  const [activeId, setActiveId] = useState<StudyTabId>("study-1");

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        What Does the Research Say?
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-[15px] leading-relaxed text-slate-700 md:text-base">
        Below is a summary of four major studies that have evaluated PAE. Together, they include over
        1,400 patients and provide strong evidence that PAE is safe and effective.
      </p>

      <div
        className="mt-8 flex flex-nowrap justify-center gap-1 overflow-x-auto border-b border-slate-200 pb-4"
        role="tablist"
        aria-label="PAE research studies"
      >
        {STUDIES.map((study) => (
          <button
            key={study.id}
            type="button"
            role="tab"
            aria-selected={activeId === study.id}
            aria-controls={`pae-research-panel-${study.id}`}
            id={`pae-research-tab-${study.id}`}
            onClick={() => setActiveId(study.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              activeId === study.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {study.label}
          </button>
        ))}
      </div>

      {/* Stack all panels in one grid cell so height stays fixed to the tallest (Study 2). */}
      <div className="mt-8 grid">
        {STUDIES.map((study) => {
          const isActive = activeId === study.id;
          return (
            <div
              key={study.id}
              id={`pae-research-panel-${study.id}`}
              role="tabpanel"
              aria-labelledby={`pae-research-tab-${study.id}`}
              aria-hidden={!isActive}
              className={`col-start-1 row-start-1 ${
                isActive ? "z-10" : "invisible pointer-events-none"
              }`}
            >
              <StudyPanelBody study={study} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
