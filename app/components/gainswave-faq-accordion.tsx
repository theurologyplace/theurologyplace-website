"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "what-is",
    question: "What is Low Intensity Shockwave Therapy or GAINSWave?",
    answer: (
      <p>
        LI-SWT or GAINSWave is a protocol for men to improve sexual performance, treats ED and keeps the penis
        healthy. The protocol will benefit men seeking to enhance sexual pleasure and performance.
      </p>
    ),
  },
  {
    id: "how-works",
    question: "How does LI-SWT or GAINSWave work?",
    answer: (
      <p>
        LI-SWT or GAINSWave works by using high-frequency acoustic waves to open existing blood vessels in the
        penis, stimulate the growth of new blood vessels, and eliminate micro-plaque. The result is increased
        blood flow in the penis resulting in stronger, harder and more sustainable erections.
      </p>
    ),
  },
  {
    id: "expect",
    question: "What to expect with GAINSWave?",
    answer: (
      <p>
        Acoustic therapy has been through many clinical trials. We utilize an FDA cleared device for improved
        blood flow. The GAINSWave protocol can be completed in as little as 3 weeks. Severe cases of poor erectile
        function may require more treatments. Each treatment takes 15 to 30 minutes. The treatments are done in
        the office. Our physicians will initiate the treatment protocol and one of our male medical staff may help
        with the ongoing treatments. The sessions are extremely well-tolerated. Risks are very low. As
        Board-Certified Urologists, we can address any issues and help establish expectations.
      </p>
    ),
  },
  {
    id: "how-many",
    question: "How many treatments are needed with LI-SWT or GAINSWave?",
    answer: (
      <p>
        This depends on your goals. Typically 6 – 12 treatments are needed. Some patients may benefit from
        combination treatment. Platelet rich plasma (PRP) is an option. You can learn more about PRP for ED at our
        sister website. We also have expertise with other biological growth factors such as Amniotic fluid. You can
        discuss this in detail with our Urologists.
      </p>
    ),
  },
  {
    id: "benefits",
    question: "What are the benefits of GAINSWave?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Enhanced erections</li>
        <li>Improved sexual performance</li>
        <li>More spontaneous erections</li>
        <li>Better orgasms</li>
      </ul>
    ),
  },
  {
    id: "advantages",
    question: "What are the advantages of LI-SWT or GAINSWave over other ED medications and treatments?",
    answer: (
      <div className="space-y-3">
        <p>LI-SWT or GAINSWave is:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Drug and surgery free</li>
          <li>Completely non-invasive</li>
          <li>Without known side-effects</li>
          <li>Simple, practically painless in-office procedure lasting 20–30 minutes</li>
          <li>No downtime</li>
          <li>Helps address the root cause of ED, which is typically poor blood flow</li>
        </ul>
      </div>
    ),
  },
  {
    id: "research",
    question: "Is there clinical research?",
    answer: (
      <p>
        Yes. At The Urology Place, we have researched LI-SWT in depth and have a wealth of experience from the
        patients we have treated.
      </p>
    ),
  },
  {
    id: "insurance",
    question: "Is GAINSWave covered by insurance?",
    answer: (
      <p>
        No. Please discuss treatment packages and pricing with the office. Specifics cannot be given out over the
        phone because every patient may have a different prescribed protocol.
      </p>
    ),
  },
  {
    id: "why-uip",
    question: "Why The Urology Place?",
    answer: (
      <div className="space-y-4">
        <p>We believe The Urology Place is the best for GAINSWave or LI-SWT.</p>
        <p>
          We are board certified Urologists with a passion for wellness. Dr Kella has treated male and female
          sexual dysfunction for years and will personally oversee your treatment. GAINSWave may be just one part
          of your treatment plan. We are San Antonio&apos;s most experienced provider for GAINSWave.
        </p>
      </div>
    ),
  },
  {
    id: "where",
    question: "Where can I get GAINSWave therapy?",
    answer: (
      <div className="space-y-4">
        <p>
          We offer GAINSWave in our San Antonio and Austin offices. Visit us at The Urology Place at 9618 Huebner
          Rd Suite 120 or in Austin at 3810 Medical Parkway, Suite 219 Austin Texas 78756
        </p>
        <p>
          <a
            href="https://www.theurologyplace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 underline decoration-blue-600/80 underline-offset-2 hover:text-blue-700"
          >
            Visit our Austin website to learn more
          </a>
          .
        </p>
      </div>
    ),
  },
] as const;

export function GainswaveFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("what-is");

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-100/90 px-5 py-10 shadow-sm ring-1 ring-slate-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Frequently asked questions about GAINSWave
      </h2>
      <ul className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id}>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-50/80 md:px-5 md:py-4"
                  aria-expanded={isOpen}
                  aria-controls={`gainswave-faq-${item.id}`}
                  id={`gainswave-faq-trigger-${item.id}`}
                >
                  <span className="text-[15px] font-bold leading-snug text-slate-900 md:text-base">
                    {item.question}
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm"
                    aria-hidden
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                  id={`gainswave-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`gainswave-faq-trigger-${item.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 bg-slate-50/80 px-4 pb-4 pt-0 text-[15px] font-normal leading-relaxed text-slate-700 md:px-5 md:text-base">
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
