"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "what-is",
    question: "What is hormone pellet therapy?",
    answer: (
      <p>
        Pellets are made under strict guidelines by a compounding pharmacy.
        These pellets are the size of a grain of rice. 3-4 mm in diameter. The
        pellets are placed in the fatty layer under the skin of the buttock.
        Pellets release steady amounts of hormones. This avoids the up and down
        problems associated with injection treatment. Pellets can last anywhere
        from 4-6 months, usually.
      </p>
    ),
  },
  {
    id: "bioidentical",
    question: "What are bioidentical hormones?",
    answer: (
      <p>
        Bioidentical hormone replacement therapy (BHRT) or natural hormone
        therapy basically means that hormones are molecularly identical to your
        own natural hormones. The pellets are made from wild yams and soy.
        There are no known allergens associated with wild yams and soy. (Once
        the hormone is made, it is no longer yam or soy.) Bioidentical hormones
        have similar risks to conventional hormones. We use a national
        compounding pharmacy to provide the safest hormones possible. The
        pharmacy&apos;s quality standards already surpassed what was required by
        USP 797. They meet the gold standard in the industry for pellets:
        compliance with the FDA&apos;s standards for CGMP (current good
        manufacturing practices), the same as large commercial drug
        manufacturers.
      </p>
    ),
  },
  {
    id: "pellets-vs-other",
    question:
      "How are pellets different than other types of hormone replacement?",
    answer: (
      <>
        <p className="mb-4">
          Hormone pellets have advantages compared to other means of
          replacement. There is no risk of transference, which can happen with
          gels and creams. Unlike shots, pellets maintain a steady level of
          hormone levels in the body. Having peaks and valleys with shots create
          some risk for side-effects.
        </p>
        <p className="mb-4">
          Peaks can cause the red blood cell counts to go up. Increased blood
          counts can increase your blood thickness and lead to more cardiac
          risk. The increase in blood count may require blood donations. Without
          the high spikes, pellets may reduce the risk of this problem.
        </p>
        <p className="mb-4">
          Valleys can cause people to feel the problems that led them to
          hormones in the first place. We do not want your testosterone levels to
          look like a roller coaster ride.
        </p>
        <p>
          Finally, with injections, there is need to repeatedly inject. A big
          advantage of pellets is that they can last for months, which means
          less trips to the doctor&apos;s office.
        </p>
      </>
    ),
  },
  {
    id: "placement",
    question: "Where are the hormone pellets placed?",
    answer: (
      <p>
        The pellets are placed in the fat under the skin of the hip. A tiny
        opening is made in the skin and the pellets are inserted. No stitch is
        required. The procedure can be done in the office. We use numbing
        medication to make the procedure as comfortable as possible.
      </p>
    ),
  },
  {
    id: "how-help",
    question: "How can bioidentical hormones help me?",
    answer: (
      <>
        <p className="mb-3">Pellets can:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Increase energy</li>
          <li>Improve sexual drive</li>
          <li>Reduce depression or stabilize your mood</li>
          <li>Help you exercise</li>
          <li>Improve mental fog</li>
          <li>Reduce body fat</li>
        </ul>
      </>
    ),
  },
  {
    id: "frequency",
    question: "How often do I need pellet treatment?",
    answer: (
      <p>
        This depends. We estimate every 4 to 6 months. We check labs and your
        symptoms quarterly.
      </p>
    ),
  },
  {
    id: "risks",
    question: "What are risks or side effects of hormone pellet treatment?",
    answer: (
      <>
        <p className="mb-4">
          Pellets must be implanted. There is a very low risk of infection.
          Dosing cannot be decreased once the pellets are implanted. We usually
          start with a lower dose to avoid issues and calculate future dosing.
        </p>
        <p className="mb-4">
          For men, testosterone pellets have some of the same risks as other
          means of testosterone supplementation. External testosterone reduces
          your own body&apos;s ability to make testosterone. Men who are
          considering children should not take external testosterone. The risk
          of increasing your red blood cell count should be decreased.
        </p>
        <p>
          For women, hormone pellets are not yet FDA-approved. Women have been
          treated with hormones for years. Reports have shown improvements in
          sexual desire and satisfaction. There is improvement in bone density,
          mental sharpness and performance. Risks include lack of longterm
          studies. There can be some unwanted hair growth and acne with hormone
          replacement.
        </p>
      </>
    ),
  },
  {
    id: "women-pellets",
    question: "Do you do pellets for women?",
    answer: (
      <p>
        Pellets have been shown to be effective for relief of menopause
        symptoms. They can help decrease loss of bone density. Sexual desire and
        satisfaction can improve in women with hormone pellets. Similar to men,
        women can have decreased depression, increased energy and performance
        with pellet hormone therapy. Vaginal dryness, urinary urgency and
        frequency can improve with pellet hormone therapy. Studies with cancer
        risk are ongoing and encouraging. Pellets for women are not FDA
        approved. However, we can help you understand if your clinical symptoms
        may benefit from hormonal pellet therapy. Call us or fill in the form
        for a consultation.
      </p>
    ),
  },
  {
    id: "dr-hlavinka",
    question:
      "Dr Hlavinka has special training for women hormonal needs?",
    answer: (
      <p>
        Yes. Dr. Hlavinka has dedicated experience in women&apos;s hormonal
        health. We&apos;re happy to discuss your goals and whether pellet
        therapy is a fit—call us or use the contact form to schedule a
        consultation.
      </p>
    ),
  },
] as const;

export function HormoneReplacementFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-stone-50/90 px-5 py-10 shadow-sm ring-1 ring-stone-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold italic tracking-tight text-slate-900 md:text-3xl">
        Frequently asked Questions about Hormone Pellet Therapy
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
                  aria-controls={`hrt-faq-${item.id}`}
                  id={`hrt-faq-trigger-${item.id}`}
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
                  id={`hrt-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`hrt-faq-trigger-${item.id}`}
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
