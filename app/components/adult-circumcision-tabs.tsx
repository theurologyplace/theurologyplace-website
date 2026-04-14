"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";

type TabId = "why" | "appointment" | "method" | "requirements";

type TabConfig = {
  id: TabId;
  label: string;
  title: string;
  body: ReactNode;
  /** When omitted, the tab is text-only (no side image). */
  imageSrc?: string;
  imageAlt?: string;
};

const AC_IMG = (name: string) =>
  `/images/${encodeURIComponent("adult circumcision")}/${encodeURIComponent(name)}`;

const TABS: TabConfig[] = [
  {
    id: "why",
    label: "Why choose The Urology Place?",
    title: "Choosing an Experienced Urologist Matters",
    imageSrc: AC_IMG("photo-1530645298377-82c8416d3f90-1920w.jpg"),
    imageAlt: "Professional portrait representing confident care",
    body: (
      <p>
        Experience is very important, even for a circumcision. We are board-certified urologists.
        Dr. Kella started performing in-office circumcision many years ago. Our urologists have
        performed hundreds of pediatric and adult circumcisions through residency and practice.
        Urologists are routinely called for trauma and unexpected issues for the penis.
      </p>
    ),
  },
  {
    id: "appointment",
    label: "How Can I Set Up an Appointment?",
    title: "Scheduling Your Consultation",
    imageSrc: AC_IMG("photo-1511314023197-79bcd4a1bfc4-1920w.jpg"),
    imageAlt: "Consultation and medical paperwork on a desk",
    body: (
      <>
        <p>
          Call{" "}
          <a className="font-semibold text-blue-700 underline hover:text-blue-800" href="tel:+12106173670">
            (210) 617-3670
          </a>{" "}
          or use our contact form. For cosmetic circumcision, no referral is required. We will
          review your goals, medical history, and whether an in-office procedure is appropriate.
          Out-of-town patients can often start with a telemedicine visit.
        </p>
        <p className="mt-4">
          If you are using insurance, your plan may require a separate consultation before the
          procedure; self-pay patients may be able to combine consultation and procedure depending
          on scheduling and medical suitability.
        </p>
      </>
    ),
  },
  {
    id: "method",
    label: "Method",
    title: "Safety, Comfort and Quality are Our Priorities",
    body: (
      <>
        <p>
          Here at The Urology Place, we practice the sleeve resection technique. 
          The sleeve resection technique is ideal as it removes the foreskin in a single ring of tissue. 
          Through this method, we are able to complete the circumcision with as smooth and refined scar 
          line as possible. We work with our patients and their requests of how much of the inner 
          foreskin they wish to preserve. This is sometimes referred to as a “high” or “low” circumcision. 
          When a majority of the shaft’s skin is removed and the scar line is closer to the center of the 
          penile shaft, it is described as a “high” circumcision. However, a “low” circumcision is when the 
          majority of the foreskin is removed and less of the shaft skin which results in the scar line being 
          closer to the head of the penis. 
        </p>
        <p className="mt-4">
          When the procedure is done in our office, we use a local numbing medication. We offer nitrous gas, 
          also known as laughing gas, to our patients to reduce any anxiety and pain. 
          This gas is safe to use and does not restrict your ability to drive home after the procedure. 
          Before the procedure begins, I mark the incision lines with a marker and take measurements to 
          ensure the correct modifications are made to meet the patients aesthetic preferences with the 
          functionality of comfortable erections in mind. The purpose of marking the penis before making 
          incisions is to visualize and match the incision lines together without causing uncomfortable 
          tension when erect. When the incision lines have been determined with a marker, I begin the procedure 
          by making the outer incision first, then retract the foreskin and make the inner incision and remove 
          the foreskin in a single ring. I then cauterize any bleeding points with an electrocautery to stop the bleeding. 
          In terms of customization, the distance between the inner and outer incisions from the tip of the foreskin 
          can be modified. However, this is not to be confused with altering the tightness of the skin. 
          The issue of tightness is correlated with the length of foreskin that is removed. 
        </p>
        <p className="mt-4">
          If the patient desires a frenulectomy, the removal of the frenulum, we do this after the
          circumcision has been done. To close the wound, I use dissolvable sutures that typically
          disappear within three weeks. The needle I use is specifically made for closing skin,
          resulting in minimal scarring and bleeding.
        </p>
      </>
    ),
  },
  {
    id: "requirements",
    label: "Medical Requirements",
    title: "Before Your Procedure",
    imageSrc: AC_IMG("photo-1526288926180-808e4003905e-1920w.jpg"),
    imageAlt: "Dr. Naveen Kella",
    body: (
      <>
        <p>
          You should be off blood thinners and supplements that increase bleeding risk (such as
          aspirin or vitamin E) for the timeframe your urologist specifies—often about one week
          unless your prescribing doctor directs otherwise. Trim hair with clippers only (not
          razors) to reduce infection risk.
        </p>
        <p className="mt-4">
          For telemedicine or out-of-town planning, clear photographs may be requested so we can
          assess your anatomy and candidacy before you travel. Follow all pre-procedure fasting or
          eating instructions given for your specific appointment.
        </p>
      </>
    ),
  },
];

export function AdultCircumcisionTabs() {
  const [activeId, setActiveId] = useState<TabId>("why");
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <div className="relative overflow-hidden rounded-none shadow-xl ring-1 ring-slate-200/60 md:rounded-sm">
      <div
        className="flex flex-wrap gap-0 border-b border-slate-200 bg-slate-50"
        role="tablist"
        aria-label="Adult circumcision topics"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            aria-controls={`ac-panel-${tab.id}`}
            id={`ac-tab-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
            className={`min-h-[3rem] flex-1 border-b-2 px-3 py-3 text-center text-xs font-semibold leading-tight transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm ${
              activeId === tab.id
                ? "border-blue-600 bg-white text-slate-900"
                : "border-transparent bg-slate-100/80 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`ac-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`ac-tab-${active.id}`}
        className="bg-white p-6 md:p-10"
      >
        <div
          className={`grid grid-cols-1 gap-8 lg:items-start lg:gap-12 ${
            active.imageSrc ? "lg:grid-cols-2" : ""
          }`}
        >
          <div className={active.imageSrc ? "" : "max-w-4xl"}>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              {active.title}
            </h3>
            <div className="mt-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {active.body}
            </div>
          </div>
          {active.imageSrc ? (
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={active.imageSrc}
                alt={active.imageAlt ?? ""}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
