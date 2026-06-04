"use client";

import { useState } from "react";

const SECTIONS = [
  {
    id: "education",
    title: "Education & Training",
    content: (
      <ul className="space-y-3 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <li>
          <span className="font-semibold text-slate-900">Medical Degree:</span> Texas Tech University
          Health Sciences Center
        </li>
        <li>
          <span className="font-semibold text-slate-900">Radiology Residency:</span> Ohio State
          University
        </li>
        <li>
          <span className="font-semibold text-slate-900">
            Vascular &amp; Interventional Radiology Fellowship:
          </span>{" "}
          Johns Hopkins Hospital
        </li>
        <li>
          <span className="font-semibold text-slate-900">General Surgery Residency:</span> Harvard
          Medical School (Beth Israel Deaconess Medical Center)
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Board Certifications",
    content: (
      <ul className="space-y-3 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <li>American Board of Radiology – Diagnostic Radiology</li>
        <li>American Board of Radiology – Vascular &amp; Interventional Radiology</li>
        <li>American Board of Wound Management – Certified Wound Specialist Physician</li>
      </ul>
    ),
  },
  {
    id: "expertise",
    title: "Clinical Expertise",
    content: (
      <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <p>Dr. Rao performs a wide range of advanced procedures, including:</p>
        <ul className="space-y-2">
          <li>Prostate Artery Embolization (PAE)</li>
          <li>Genicular Artery Embolization (GAE) for knee pain</li>
          <li>Plantar Fascia Embolization</li>
          <li>Hemorrhoid Embolization</li>
          <li>Varicocele Embolization</li>
          <li>Peripheral artery disease treatments</li>
          <li>Venous disease treatments</li>
        </ul>
        <p>
          He completes hundreds of embolization procedures each year and regularly presents at
          national interventional radiology conferences.
        </p>
      </div>
    ),
  },
] as const;

export function PaeRaoCredentialsAccordion() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(["education"]));

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <ul className="mt-8 space-y-3">
      {SECTIONS.map((section) => {
        const isOpen = openIds.has(section.id);
        return (
          <li key={section.id} className="overflow-hidden rounded-xl ring-1 ring-slate-200/80">
            <button
              type="button"
              onClick={() => toggle(section.id)}
              className="flex w-full items-center gap-3 bg-blue-600 px-4 py-3.5 text-left text-white transition-colors hover:bg-blue-700 md:px-5"
              aria-expanded={isOpen}
              aria-controls={`pae-rao-${section.id}`}
              id={`pae-rao-trigger-${section.id}`}
            >
              <span className="text-lg font-light leading-none" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
              <span className="text-[15px] font-semibold md:text-base">{section.title}</span>
            </button>
            <div
              id={`pae-rao-${section.id}`}
              role="region"
              aria-labelledby={`pae-rao-trigger-${section.id}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="bg-slate-50 px-4 py-4 md:px-5 md:py-5">{section.content}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
