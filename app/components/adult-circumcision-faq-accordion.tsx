"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "why-consider",
    question: "Why Might You Consider a Circumcision?",
    answer: (
      <div className="space-y-4">
        <p>
          There are many reasons why you might consider getting a circumcision. This includes but is
          not limited to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Phimosis—inability to retract the foreskin</li>
          <li>Paraphimosis—when the foreskin gets stuck behind the glans</li>
          <li>
            Balanitis, balanoposthitis or lichen sclerosis—infection and inflammation of the
            foreskin and glans
          </li>
          <li>Frenulum breve—a short frenulum that restricts movement</li>
          <li>Diseases of the foreskin—such as cancer</li>
          <li>Aesthetic appearance</li>
        </ul>
      </div>
    ),
  },
  {
    id: "cost",
    question: "What is the cost of a Circumcision at The Urology Place?",
    answer: (
      <p>
        The procedure can typically be done comfortably and safely in our office for $1895. This
        includes the in-person consult, all supplies, and a post-operative visit. Because we perform
        the Circumcision procedure in our office rather than in an OR and without facility fees or
        anesthesia fees we are able to offer our patient a much cheaper circumcision procedure
        including nitrous gas.
      </p>
    ),
  },
  {
    id: "insurance",
    question: "Does Insurance Cover a Circumcision?",
    answer: (
      <p>
        If you have a medical problem with your foreskin, insurance may cover the cost of
        circumcision surgery. Call today for a consultation. Our doctors will work with you to help
        determine if you have a medical condition that may qualify for insurance-covered
        circumcision surgery. Our team of experts can help you determine your insurance benefit for
        this procedure. If the procedure is deemed as medically necessary, we will need to do the
        procedure in a surgical facility.
      </p>
    ),
  },
  {
    id: "during",
    question: "What Can I Expect During The Procedure?",
    answer: (
      <div className="space-y-4">
        <p>
          The circumcision procedure can take 30 minutes to an hour depending on the patient. If the
          procedure is performed in the operating room, the patient can be asleep. An operating
          room procedure is more expensive than an office procedure and is done when insurance covers
          the procedure. Either way, the procedure is typically done using the same sleeve removal
          technique. A scalpel is used on the outer and mucosal foreskin to create the sleeve. The
          frenulum can be removed if needed as well.
        </p>
        <p>
          When the frenulum, the band of tissue under the glans that connects to the foreskin, is
          removed, it is called a frenulectomy.
        </p>
        <p>
          We offer a cost effective in-office circumcision procedure to patients without an
          insurance-covered benefit. Our facility in San Antonio is designed to accommodate adult
          circumcision surgeries. Instead of general anesthesia we use a lidocaine block, which makes
          the procedure essentially painless. Patients usually listen to music during the procedure.
          We can prescribe nitrous gas for patients who are anxious or nervous as well. Nitrous is
          safe and reduces pain and anxiety. You can still drive home after nitrous gas.
        </p>
        <p>
          Patients have questions about whether the circumcision will be &quot;high and tight&quot;
          or how we handle other issues. We can discuss these issues during your consultation.
        </p>
        <p className="font-semibold text-slate-900">Closing Your Incision</p>
        <p>
          Fine suture is used to close the circumcision. As a result, the sutures are absorbable and
          usually disappear within 3 weeks. The needle is specially made for closing skin, leaving
          less chance of bleeding and scar.
        </p>
        <p>
          Afterwards, you will leave the clinic and possibly return later in the day if the doctor
          decides. Patients experience minimal pain after their circumcision, and typically only take
          Tylenol and an anti-inflammatory during recovery. The doctor is available after hours for
          any concerns.
        </p>
        <p className="font-semibold text-slate-900">Risks</p>
        <p>
          Any surgical procedure has risks. Circumcision&apos;s major risks are penis injury,
          infection, and significant bleeding. These risks are very rare in our experience.
          Scarring along the suture line is possible. We use advanced plastic surgery fine suture
          techniques during skin closure to avoid tension along the suture line, minimizing the
          appearance of any scars.
        </p>
      </div>
    ),
  },
  {
    id: "post-care",
    question: "Post Procedure Activity and Care",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-900">FIRST 72 HOURS</p>
        <p>
          The penis will normally have swelling after the procedure. You should have no problem
          urinating. Tylenol or Advil is usually all that is needed for discomfort. We recommend ice
          packs and compressive shorts to minimize jostling. Keep the penis upright. Use the ice
          pack for 10 to 15 minutes on and off for the first day. Try to do this 2-3 times. You can
          return to desk work in 24-48 hours.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You can eat whatever you normally eat.</li>
          <li>
            You can resume blood thinners in 48 hours unless you are noting any spotting or
            bleeding.
          </li>
          <li>You can shower after 24 hours.</li>
          <li>
            Remove any dressing after 24 hours. If there is any spotting, you can replace the
            dressing.
          </li>
        </ul>
        <p className="font-semibold text-slate-900">EXERCISE AFTER CIRCUMCISION</p>
        <p>
          You should be able to walk and take stairs slowly after the procedure. However, you should
          avoid exercise for a week.
        </p>
        <p className="font-semibold text-slate-900">SEX AFTER CIRCUMCISION</p>
        <p>
          Usually 3 weeks. Wait for the sutures to dissolve. Do not stimulate the penis because the
          stretching can potentially disrupt the suture line.
        </p>
      </div>
    ),
  },
  {
    id: "nitrous",
    question: "What is Nitrous Gas?",
    answer: (
      <div className="space-y-4">
        <p>
          Nitrous gas relieves any discomfort or anxiety that the patient may experience during the
          procedure. It is the laughing gas you find in the dentist office. We invested in a system
          that is safe.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Patient administered</li>
          <li>Safe to drive home afterwards</li>
          <li>Cannot overdose</li>
          <li>Well tolerated</li>
        </ul>
      </div>
    ),
  },
  {
    id: "frenulum",
    question: "How do you handle the frenulum?",
    answer: (
      <p>
        Everyone has a slightly different anatomy, so we typically discuss the frenulum option that
        may be best for you during your initial consultation. The frenulum is the elastic band of
        tissue that connects your glans to your foreskin. Sometimes this tissue is kept intact
        during circumcision surgery, and at other times it is removed.
      </p>
    ),
  },
  {
    id: "foreskin-pain",
    question: "Why does my Foreskin hurt after sex?",
    answer: (
      <div className="space-y-4">
        <p>
          The foreskin can hurt after sexual activity. Usually, this happens in men who may have had
          an infection known as balanitis, prior trauma, or diabetes. The foreskin has a tongue of
          tissue at the bottom known as the frenulum. The frenulum can hurt after sex as well.
        </p>
        <p>
          Men may complain about this after rough sex or a prolonged period of sex. The foreskin is
          pulled back automatically during intercourse. This can cause swelling because the folding
          over of the foreskin causes self constriction. Blood flows in, but cannot flow out. After a
          while, the patient can develop paraphimosis. This can be an emergency if the foreskin
          cannot be brought back to its normal position.
        </p>
        <p className="font-semibold text-slate-900">Treatment options include:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Resting from sexual activity for a few days. Unfortunately, this provides short term
            relief. The underlying problem is still there. Most men who start having foreskin
            irritation and pain after sex will have it again once they resume activities.
          </li>
          <li>
            Steroid cream. This can reduce irritation and inflammation. If the foreskin is able to
            heal, patients can recover. If the patient has other risk factors causing poor blood flow
            to the foreskin like diabetes, this is also usually temporary.
          </li>
          <li>
            Antifungal medication. Patients may sometimes develop an infection because of the
            moisture generated under the foreskin. Mixture with urine and semen can compound the
            problem. Cleaning under the foreskin with water can help reduce the chance of these
            infections.
          </li>
          <li>
            Removal of the frenulum. This procedure can be done in the office. It is called a
            frenulectomy and it is useful if the tongue of the foreskin is mostly causing the pain. We
            can do a frenulectomy with or without the circumcision.
          </li>
          <li>
            Circumcision. If you notice repeated issues with foreskin pain that prevents you from
            enjoying sex or causes your partner anxiety, you should consider circumcision. Patients
            do better the sooner the procedure is done. Waiting too long can lead to skin that is
            very tough and difficult to circumcise. We can perform circumcision comfortably in the
            office for many patients, sparing the expensive hospital or surgery center fees. We do
            these office cases when patients are not using insurance to help save costs.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "erection-drugs",
    question: "Is an erection made through drugs before doing a circumcision?",
    answer: (
      <div className="space-y-4">
        <p>
          It is important to ensure that a circumcision is comfortable in its flaccid and erect
          state while also meeting aesthetic preferences. To make this possible, it is important that
          the proper amount of skin is removed. With an ink marker, I mark the incision lines on the
          inner mucosal and outside portions of the foreskin while ensuring both points meet each
          other comfortably. I choose this method over using drugs to induce an erection due to
          several reasons:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            When the penis is erect, the veins are dilated which causes more blood flow during the
            procedure.
          </li>
          <li>
            When an erection is made through the drugs, I am unable to alternate between the flaccid
            and erect positions to determine the most optimal incision lines.
          </li>
          <li>
            If incision lines are made through an erect penis, there runs the risk of removing an
            improper amount of skin.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "adult-vs-neonatal",
    question: "How does an adult circumcision differ from a neonatal circumcision?",
    answer: (
      <div className="space-y-4">
        <p>
          The most common difference between a neonatal circumcision and an adult circumcision is
          the use of clamps. Clamps are used during neonatal circs to stop bleeding by pinching them,
          eliminating the use of sutures. The clamps are able to pinch the skin together tight
          enough so stitches are not needed. This technique is not an option for adults as an
          erection would be too forceful and tear apart the pressed edges from the clamp. Therefore,
          adults require sutures to keep the wound closed. Stitches allow for customized scar lines
          through fine line suturing that can be hidden and leave minimal scarring.
        </p>
        <p>
          Another notable difference is that neonatal circumcisions only use local anesthesia if any
          at all as it is usually a very quick procedure. Adult circumcisions are lengthier and
          require more anesthesia than a newborn. When a circumcision is done in our office, we
          provide local anesthesia as well as nitrous gas (laughing gas) to ease any anxiety and pain
          from the treatment. When the procedure is booked in a surgical facility which is required
          through insurance, you would be given general anesthesia through an anesthesiologist.
        </p>
      </div>
    ),
  },
] as const;

export function AdultCircumcisionFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-stone-50/90 px-5 py-10 shadow-sm ring-1 ring-stone-200/60 md:px-10 md:py-14">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Frequently Asked Questions
      </h2>
      <ul className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id}>
              <div className="overflow-hidden rounded-xl bg-slate-100/90 shadow-sm ring-1 ring-slate-200/80">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-200/50 md:px-5 md:py-4"
                  aria-expanded={isOpen}
                  aria-controls={`ac-faq-${item.id}`}
                  id={`ac-faq-trigger-${item.id}`}
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
                  id={`ac-faq-${item.id}`}
                  role="region"
                  aria-labelledby={`ac-faq-trigger-${item.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/80 bg-white/60 px-4 pb-4 pt-0 text-[15px] font-normal leading-relaxed text-slate-700 md:px-5 md:text-base">
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
