"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "cystoscopy",
    question: "What is a Cystoscopy?",
    answer: (
      <p>
        A simple procedure where a doctor uses a thin, flexible tube with a
        camera (called a cystoscope) to look inside your bladder and urethra.
        It helps find problems like tumors, bleeding, or infections
      </p>
    ),
  },
  {
    id: "tests",
    question: "What Tests Are Involved?",
    answer: (
      <ul className="list-none space-y-3 pl-0">
        <li>
          <span className="font-semibold text-slate-900">Urinalysis</span>
          {" – "}
          Checks your urine for blood or signs of infection.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Urine Cytology</span>
          {" – "}
          A lab looks at your urine under a microscope to find cancer cells.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Cystoscopy</span>
          {" – "}
          A thin tube with a camera is used to look inside your bladder.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Biopsy</span>
          {" – "}
          During a cystoscopy, the doctor may take a small tissue sample to
          check for cancer.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Imaging Tests</span>
          {" – "}
          CT scan, MRI, or ultrasound helps show the bladder and nearby organs
          to see if cancer has spread.
        </li>
      </ul>
    ),
  },
  {
    id: "after-diagnosis",
    question: "What Happens After Diagnosis?",
    answer: (
      <div className="space-y-5">
        <div>
          <p className="font-semibold text-slate-900">Staging and Grading</p>
          <p className="mt-1">
            Doctors find out how far the cancer has spread (stage) and how
            aggressive it is (grade). This helps decide the best treatment.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">
            Discussing Treatment Options
          </p>
          <p className="mt-1">
            You&apos;ll meet with your care team to talk about treatments.
            These may include surgery, chemotherapy, immunotherapy, or a mix.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">
            Creating a Treatment Plan
          </p>
          <p className="mt-1">
            A personalized plan is made based on your health, cancer stage, and
            preferences.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Second Opinions</p>
          <p className="mt-1">
            You can ask another specialist to review your diagnosis and plan if
            you want reassurance.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Support and Planning</p>
          <p className="mt-1">
            Our team may offer support for nutrition, quitting smoking, mental
            health, and practical help like scheduling and finances.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Regular Monitoring</p>
          <p className="mt-1">
            Even after treatment starts, you&apos;ll have regular check-ups and
            tests to watch your progress.
          </p>
        </div>
      </div>
    ),
  },
] as const;

export function BladderCancerDiagnosisAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-stone-50/90 px-5 py-10 shadow-sm ring-1 ring-stone-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold italic tracking-tight text-slate-900 md:text-3xl">
        Understanding Bladder Cancer Diagnosis
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-slate-700 md:text-base">
      Diagnosing bladder cancer involves a series of steps to ensure accuracy. Initially, your doctor will review your 
      medical history and conduct a physical examination. If bladder cancer is suspected, they may recommend tests such as 
      urine tests to check for blood or cancer cells, imaging tests like CT scans or ultrasounds to visualize the bladder, 
      and a cystoscopy, where a thin tube with a camera is inserted into the bladder for a closer look. Each of these steps 
      is crucial in forming a complete picture of your health and determining the best course of action.
      </p>
      <ul className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id}>
              <div className="overflow-hidden rounded-xl bg-white/90 shadow-sm ring-1 ring-slate-200/80">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-50/90 md:px-5 md:py-4"
                  aria-expanded={isOpen}
                  aria-controls={`bladder-faq-${item.id}`}
                  id={`bladder-faq-trigger-${item.id}`}
                >
                  <span className="text-[15px] font-normal leading-snug text-slate-900 md:text-base">
                    {item.question}
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm"
                    aria-hidden
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`bladder-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`bladder-faq-trigger-${item.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-4 pb-4 pt-0 text-[15px] leading-relaxed text-slate-700 md:px-5 md:text-base">
                      <div className="pt-4">{item.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
