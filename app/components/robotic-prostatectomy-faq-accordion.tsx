"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "robotic-vs-open",
    question: "How does Robotic Surgery Compare to Open Surgery?",
    answer: (
      <>
        <p>
          Cure rates for robotic and traditional prostatectomy are best when performed by an
          experienced surgeon. A prospective multicenter comparison between open and robotic
          surgery showed robotic surgery subjects had less pain, less blood transfusions, less
          urethra scarring and less blood clots.
        </p>
        <p className="mt-4">
          The robot eliminates much of the variability in open surgery, greatly reducing risks
          as compared to traditional open surgery, even when performed by an experienced surgeon.
        </p>
        <p className="mt-4">
          During his extensive training and fellowship, Dr. Kella performed dozens of open and
          robotic surgeries. &ldquo;In open cases, there are many instances in which the view of a
          patient&apos;s anatomy is obstructed, especially during prostate surgeries because the
          area is so small,&rdquo; states Dr. Kella. &ldquo;For example, if a patient has a large
          pelvic bone, sometimes there&apos;s just no way you can see the prostate around that
          bone during a traditional open-technique surgery. Before robots were available, we were
          trained to just remove the prostate by feel because that was our only option. When you
          can&apos;t see what you&apos;re operating on, it greatly increases the likelihood and
          frequency of bleeding, which is very risky to the patient. So risky, in fact, that if
          patients begin bleeding, our primary goal as a surgeon actually changes. We have to stop
          the patient from bleeding at that point, which can force a case to be completed in haste
          – compromising both muscle preservation and nerve sensation.&rdquo;
        </p>
        <p className="mt-4">
          &ldquo;Having a robot with tiny little fingers that can now gently and easily travel right
          around that pelvic bone and give me a 3-dimensional view of the prostate is simply
          incredible. The precision it affords you is actually just amazing to watch – that&apos;s
          one reason I recorded so many of my surgeries. Initially, I recorded them so that I could
          re-watch them and perfect my technique. Now I use the videos a lot to teach newer
          surgeons the techniques I have learned and developed over the years for different
          situations. It does take a really long time to become an expert at using the robot, but
          once you and your surgical team do, the outcomes really are priceless.&rdquo;
        </p>
      </>
    ),
  },
  {
    id: "surgeon-experience-leakage",
    question: "Does surgeon experience help me with leakage outcomes?",
    answer: (
      <>
        <p>
          Urinary leakage is one of the most common side effects of prostate cancer surgery. As a
          result, many patients have to wear a pad for a period of time following their surgery.
        </p>
        <p className="mt-4">
          In the following study, the extent of post-surgical urinary leakage was measured among
          prostate surgery patients. The other surgeons in the study have performed robotic
          prostatectomies, but were not as experienced as Dr. Kella. The study was a subset
          analysis, but sheds light on surgeon differences.
        </p>
        <p className="mt-4 font-semibold text-slate-900">Results Summary:</p>
        <p className="mt-2">
          One month after surgery, 67% of Dr. Kella&apos;s patients report no urinary leakage or
          such slight leakage that it only requires use of 1 pad per day. Alternatively, the
          majority of patients (64%) who underwent surgery with a less experienced surgeon were
          experiencing excessive urinary leakage requiring 2 or more pads per day.
        </p>
        <p className="mt-4">
          By six months after surgery, fewer than 6% of Dr. Kella&apos;s patients report concerns
          with urinary leakage. 15% of other surgeons&apos; patients were still reporting excessive
          leakage requiring 2 or more pads per day.
        </p>
      </>
    ),
  },
  {
    id: "where-surgery",
    question: "Where does Dr. Kella perform his robotic surgery?",
    answer: (
      <p>
        St Lukes Baptist is in San Antonio&apos;s medical center. Patients have been impressed with
        the hospital and its well appointed private rooms.
      </p>
    ),
  },
  {
    id: "follow-up",
    question: "Will Dr. Kella see me for prostate cancer follow up?",
    answer: (
      <>
        <p>
          Yes. We would be thrilled to see you for prostate cancer follow up. If your urologist
          referred you to see us, you can continue your follow up with him or her.
        </p>
        <p className="mt-4">
          However, if you need a urologist, we can see you personally or via telemedicine if your
          insurance allows it.
        </p>
      </>
    ),
  },
  {
    id: "without-insurance",
    question: "Can I have surgery for my prostate cancer with Dr. Kella without insurance?",
    answer: (
      <p>
        Yes. We have an all inclusive rate, which is extremely competitive. Our charge (as of
        January 2019) is $25,000. This covers the surgeon, assistant, anesthesia, pathologist, and
        hospital for up to a 3 day stay. Your preoperative visit and post operative visit are also
        covered. You should not see any other surprise charges.
      </p>
    ),
  },
  {
    id: "out-of-state",
    question:
      "I am from out of state or out of the country. Are you set up to see me for surgery with Dr. Kella?",
    answer: (
      <p>
        Of course. We see patients routinely from outside South Texas. We have discounted rates
        with Staybridge Suites close to the medical center. You can go home if you like the day
        after surgery by plane or automobile. We can even manage post operative care with your
        local doctor and telemedicine if needed.
      </p>
    ),
  },
  {
    id: "foley",
    question: "I'm nervous about the foley catheter!",
    answer: (
      <p>
        The foley is removed after one week. Removing it sooner increases the rate of being unable
        to urinate. It takes about a week for the healing and swelling to resolve. Nearly all
        patients don&apos;t need any pain pills for the catheter!
      </p>
    ),
  },
  {
    id: "prepare",
    question: "How do I prepare for this procedure?",
    answer: (
      <p>
        You will be provided with surgery instructions from the front desk during scheduling. The
        day before the surgery you must begin a liquid diet. This includes smoothies, milk, tea with
        lemon and sugar, fat free broth, clear carbonated beverages such as 7-UP, Sprite, gelatin,
        clear apple juice, strained fruit juices and water. You will be required to drink 3 (8oz)
        glasses of water. No eating or drinking past midnight except for high blood pressure
        medication.
      </p>
    ),
  },
] as const;

export function RoboticProstatectomyFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-10 shadow-sm ring-1 ring-slate-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Frequently Asked Questions
      </h2>
      <ul className="mx-auto mt-10 max-w-4xl space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id}>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-50/90 md:px-5"
                  aria-expanded={isOpen}
                  aria-controls={`rp-faq-${item.id}`}
                  id={`rp-faq-trigger-${item.id}`}
                >
                  <span className="text-[15px] font-bold leading-snug text-slate-900 md:text-base">
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
                  id={`rp-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`rp-faq-trigger-${item.id}`}
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
