"use client";

import Image from "next/image";
import { useState } from "react";
import { BTN_PRIMARY } from "@/app/lib/button-styles";
import { HERO_IMAGE_SECTION, HERO_TITLE_ON_IMAGE } from "@/app/lib/hero";

type TabId = "procedure" | "treatments" | "expectations";

const TABS: {
  id: TabId;
  label: string;
  title: string;
  body: string;
}[] = [
  {
    id: "procedure",
    label: "Procedure",
    title: "Where Is The Implantation Done?",
    body: "The procedure is completed in the operational room under anesthesia. The device will be implanted slightly above the ankle area as shown in the image above. The device is permanent and MRI-friendly. The implant does not create any risk or deviation to your daily life.",
  },
  {
    id: "treatments",
    label: "Treatments",
    title: "How Are Treatments Administered?",
    body: "The treatment will be activated in the office however continuous treatments will be done at home. The device comes with a wearable cuff that will be placed around the ankle to administer treatment. The treatments are customizable and will be changed based on the provider's discretion at follow-up visits. Treatments are performed daily for about 30 minutes.",
  },
  {
    id: "expectations",
    label: "Expectations",
    title: "What Should I Expect?",
    body: "Subjects will be asked to fill out questionnaires throughout the study and follow protocol procedures such as follow up appointments.",
  },
];

export default function OveractiveBladderStudiesPage() {
  const [activeTab, setActiveTab] = useState<TabId>("procedure");
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className={HERO_IMAGE_SECTION}
        style={{
          backgroundImage:
            "url('/images/overactive%20bladder%20studies/pexels-photo-1705093-2880w.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/55" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className={HERO_TITLE_ON_IMAGE}>
            OVERACTIVE BLADDER STUDY
          </h1>
        </div>
      </section>

      <section className="rounded-t-3xl border-t border-slate-200 bg-white">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
              <div>
                <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-sm ring-1 ring-slate-200">
                  <video
                    className="aspect-video w-full"
                    controls
                    preload="metadata"
                  >
                    <source
                      src="/images/overactive%20bladder%20studies/San%20Antonio%20Urology%20Board%20Certified%20Experienced%20Doctors.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  BlueWind Medical Restore
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Explore a New Option for Urgent Bladder Leaks.
                </h2>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-blue-600 md:text-3xl">
                  Customizable Revi System
                </h3>
                <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                  BlueWind Revi was crafted with the patient and the physicians
                  who treat UUI in mind. This advanced implant design allows for
                  the device to be miniature in size without the need for
                  replacement surgeries for battery change, lead migration, or
                  lead fracture. The innovative external wearable technology
                  powers the implant for a patient-centric approach to therapy
                  allowing for increases in energy and stimulation sessions
                  based on your needs to ensure the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Single Procedure, Proven Process.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/images/overactive bladder studies/revi-app-800h.png"
                  alt="Mobile app experience for the Revi overactive bladder study system"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/images/overactive bladder studies/revi-implant-placement-800h.png"
                  alt="Illustration of implant placement above the ankle"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/images/overactive bladder studies/revi-device-800h.png"
                  alt="Revi implant device dimensions"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
              <div
                className="flex flex-wrap gap-2 border-b border-slate-200 pb-4"
                role="tablist"
                aria-label="Overactive bladder study information"
              >
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${active.id}`}
                className="mt-8 rounded-2xl bg-slate-50 p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
                  {active.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Interested in this Clinical Trial?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                Email us at{" "}
                <a
                  href="mailto:research@theupi.com"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  research@theupi.com
                </a>{" "}
                for more information.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:research@theupi.com"
                  className={`inline-block ${BTN_PRIMARY}`}
                >
                  Email research@theupi.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

