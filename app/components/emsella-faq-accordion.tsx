"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "workout",
    question: "I leak when I workout. Am I a good candidate?",
    answer: (
      <p>
        We have treated moms who do crossfit or gym workouts who leak as they
        progress through their workouts. These women are in good shape. With
        Emsella, they were able to achieve supramaximal contractions that
        significantly improved or cured their leakage. No matter how hard you
        work out, you cannot get the same sort of muscle contraction that
        Emsella can achieve.
      </p>
    ),
  },
  {
    id: "kids",
    question: "I have had kids and now leak. Is Emsella a good choice for me?",
    answer: (
      <p>
        We cannot guarantee Emsella will work for everyone. We cannot guarantee
        surgery will work for everyone. However, after a vaginal delivery, the
        pelvic floor undergoes significant stress and leakage can result.
        Emsella provides the high intensity supramaximal contractions that can
        revert your pelvic floor back to normal.
      </p>
    ),
  },
  {
    id: "menopause",
    question:
      "I have noticed worsening urgency and incontinence since menopause. Can Emsella help?",
    answer: (
      <p>
        Options for leakage with urgency include dietary changes (less coffee
        and teas!) as well as medication. Most of our patients are frustrated
        with the thought of life long medication. The medications can be
        expensive, have side-effects, and are a band-aid for the underlying
        condition. Studies have shown that the muscles in post-menopausal women
        can be debilitated. With a full work up, Emsella could be an option.
      </p>
    ),
  },
  {
    id: "men",
    question: "Does Emsella help incontinence in men?",
    answer: (
      <>
        <p className="mb-4">
          Emsella is now FDA approved for men. In our experience, we have seen
          encouraging results. Some men require a liner or small pad for small
          amounts of leakage after radical prostatectomy. These men may leak
          during a heavy work out or towards the end of the day. Emsella has
          helped the majority of these men return to continence. Men who have
          had radiation and surgery have not seen much improvement, but numbers
          are limited.
        </p>
        <p>
          Some men have not had surgery but they have significant urges to
          always go urinate. The prostate is not a problem for these men. These
          men have seen good results with Emsella.
        </p>
      </>
    ),
  },
  {
    id: "frequency",
    question: "How often do I need to go in for treatment?",
    answer: (
      <p>
        Studies have shown improvement with 6 treatment packages. We offer this
        therapy protocol. However, we have seen results even with a few
        treatments. Once the muscles are conditioned, the goal is to stay
        active and do kegels to keep your gains achieved with Emsella.
      </p>
    ),
  },
  {
    id: "maintenance",
    question: "Do I need a maintenance Emsella treatment?",
    answer: (
      <p>
        Studies have shown good results with up to 60% improvement in symptoms.
        However, we have patients who have been very happy with a monthly
        plan. One session every month can fit in almost anyone&apos;s busy
        schedule. Consult with our urologists to see if this might work for you.
      </p>
    ),
  },
] as const;

export function EmsellaFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-stone-50/90 px-5 py-10 shadow-sm ring-1 ring-stone-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold italic tracking-tight text-slate-900 md:text-3xl">
        Frequently Asked Questions
      </h2>
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
                  aria-controls={`emsella-faq-${item.id}`}
                  id={`emsella-faq-trigger-${item.id}`}
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
                  id={`emsella-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`emsella-faq-trigger-${item.id}`}
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
