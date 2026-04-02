import Image from "next/image";
import {
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const STUDY_SECTIONS = [
  {
    title: "Comparison of TULSA Procedure vs. Radical Prostatectomy",
    status: "No Longer Enrolling",
    description:
      "An evaluation of the TULSA procedure versus radical prostate removal in men with locally advanced prostate cancer. Patients will be randomized into proceeding with either the Robotic Assisted Laparoscopic Proctectomy or TULSA surgery. The purpose of this study is to determine the quality of life the patient receives after treatment and if the TULSA is more safe and as effective as the RALP which is the current standard of care.",
    requirements: [
      "Male",
      "Age 40 to 80 years, with >10 years life expectancy",
      "Biopsy-confirmed",
      "PSA <=20ng/mL within last 3 months",
      "No prior treatment for Prostate Cancer",
    ],
    nct: "NCT05027477",
    image:
      "/images/prostate cancer studies/124937-prostate-cancer-2-2880w.jpg",
    alt: "Medical illustration representing a prostate cancer clinical trial",
  },
  {
    title: "Customized TULSA-PRO Ablation Registry",
    description:
      "Data from patients who have undergone or are currently undergoing the transurethral ultrasound ablation (TULSA) procedure as part of their regular clinical care will be entered into this patient registry. The registry will shed light on actual outcomes of procedure safety and effectiveness and help researchers determine how a patient's quality of life changes over the course of their lifespan and follow-up visits.",
    requirements: [
      "Male",
      ">18 years old",
      "Candidate for TULSA-PRO treatment",
      "Willing and able to sign the Informed Consent form",
    ],
    nct: "NCT05001477",
    image: "/images/prostate cancer studies/Tulsa-Pro-diagram--2880w.png",
    alt: "Diagram of the TULSA-PRO ablation procedure",
  },
  {
    title: "ExoDx Prostate Evaluation in Active Surveillance Patient Population",
    description:
      "This observational study aims to investigate whether patients with prostate cancer undergoing active monitoring can benefit from the ExoDx Prostate test when deciding whether to undergo a biopsy.",
    requirements: [
      "Male, 45+ years of age diagnosed with low-grade prostate cancer and currently monitoring with a urologist/provider. If you do not have a provider at the moment you can be seen with Dr Kella.",
    ],
    nct: "NCT05572099",
    image:
      "/images/prostate cancer studies/cellular-microscopic-dna-2880w.jpg",
    alt: "Microscopic DNA image representing ExoDx prostate evaluation research",
  },
  {
    title:
      "A Multi-Center, Prospective, Observational Study of Patients Being Treated With ORGOVYX",
    description:
      "The patients in this multi-center, prospective, observational trial who are receiving ORGOVYX treatment. The objective of this study is to produce practical evidence regarding the safety and efficacy of ORGOVYX in patients with prostate cancer receiving standard clinical care, as well as the clinical course both during and after therapy with ORGOVYX.",
    requirements: [
      "Patients who are diagnosed with prostate cancer and initiating treatment with ORGOVYX at the time of enrollment or within 1 month prior to enrollment and who remain on treatment at enrollment",
      "Patients who are willing and able to complete PRO assessments during the study",
      "Patients who have reviewed and signed the informed consent form (ICF)",
    ],
    nct: "NCT05467176",
    image:
      "/images/prostate cancer studies/photo-1628771065518-0d82f1938462-506666c8-2880w.jpg",
    alt: "Medication bottle representing the ORGOVYX observational study",
  },
  {
    title:
      "Positron Emission Tomography Using 64Cu-SAR-bisPSMA in Participants With High-risk Prostate Cancer Prior to Radical Prostatectomy (CLARIFY)",
    description:
      "The goal of this study is to evaluate how effectively 64Cu-SAR-bisPSMA PET imaging can identify regional nodal metastases (cancer spread to nearby lymph nodes). Specifically, the researchers aim to determine how accurate this imaging technique is in detecting lymph node metastases, which is crucial for diagnosis, treatment planning, and assessing the progression of cancer.",
    requirements: [
      "At least 18 years of age.",
      "Signed informed consent.",
      "Untreated, histologically confirmed adenocarcinoma of the prostate.",
      "High-risk or greater PC defined by National Comprehensive Cancer Network Guidelines Version 1.202327 (clinical stage >=T3a, or Grade Group >=4, or PSA >20 ng/mL).",
      "Patients electing to undergo Radical Prostatectomy.",
    ],
    nct: "NCT06056830",
    image:
      "/images/prostate cancer studies/bisPSMA-e1717050832574-2880w.png",
    alt: "Scientific illustration representing the CLARIFY PET imaging study",
  },
  {
    title:
      "Copper Cu 64 PSMA I&T PET Imaging in Men With Newly Diagnosed Prostate Cancer (Solar-Stage)",
    description:
      "This is a prospective, open-label Phase 3 study designed to evaluate the use of copper Cu-64 PSMA I&T injection for PET/CT imaging in patients with newly diagnosed prostate cancer. Specifically, the study focuses on patients categorized as having unfavorable intermediate high-risk, high-risk, or very high-risk prostate cancer.",
    requirements: [
      "At least 18 years of age.",
      "Signed informed consent.",
      "Untreated, histologically confirmed adenocarcinoma of the prostate.",
      "High-risk or greater PC defined by National Comprehensive Cancer Network Guidelines Version 1.202327 (clinical stage >=T3a, or Grade Group >=4, or PSA >20 ng/mL).",
      "Patients electing to undergo Radical Prostatectomy.",
    ],
    nct: "NCT06235151",
    image:
      "/images/prostate cancer studies/8ff1b012d447be34eddd86d50fa966a276126c0e-1200x1200-2880w.webp",
    alt: "Scientific illustration representing the Solar-Stage PSMA PET imaging study",
  },
  {
    title:
      "An Observational Registry Assessing the Impact of PYLARIFY (Piflufolastat F18) PET in Patients With Prostate Cancer",
    description:
      "The goal of this observational research is to evaluate the real-world clinical utility of PYLARIFY PET imaging in prostate cancer patients. Specifically, the study aims to assess the long-term outcomes for patients who are eligible for a PSMA/PET scan.",
    requirements: [
      "Biological male at birth >= 21 years of age",
      "Histopathological confirmed prostate adenocarcinoma",
      "Patients meeting the enrollment criteria for either Cohort 1 or Cohort 2:",
      "Cohort 1: Patients who are newly diagnosed with prostate cancer (and have suspected metastases per the physician's discretion per standard of care assessment) and have not yet initiated any prostate cancer treatment and are referred to undergo PYLARIFY PET for identification of suspected metastases.",
      "OR",
      "Cohort 2: Patients who have previously received treatment for prostate cancer and are referred to undergo PYLARIFY PET or have received PYLARIFY PET for suspected recurrence of prostate cancer (based on an elevated PSA) within 60 days of consent to enroll in the registry",
      "Life expectancy >= 6 months as determined by the investigator",
      "Able and willing to provide informed consent and comply with the protocol requirements.",
    ],
    nct: "NCT05712473",
    image:
      "/images/prostate cancer studies/05-27-Lantheus-PYLARIFY-PET-2880w.png",
    alt: "PYLARIFY PET image representing the Piflufolastat F18 prostate cancer registry study",
  },
] as const;

export default function ProstateCancerStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className={HERO_IMAGE_SECTION}
        style={{
          backgroundImage:
            "url('/images/prostate%20cancer%20studies/photo-1522308300961-fdb949cac8aa-58602788-2880w.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className={HERO_TITLE_ON_IMAGE}>
            Prostate Cancer Clinical Trials
          </h1>
          <p className={`mx-auto mt-6 max-w-3xl leading-relaxed ${HERO_SUBTITLE_ON_IMAGE}`}>
            Join us and participate in the new developments in medicine
          </p>
        </div>
      </section>

      <section className="rounded-t-3xl border-t border-slate-200 bg-white">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.42fr)_1fr] lg:gap-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Prostate Cancer
              </h2>
              <div className="border-l-2 border-slate-300 pl-8 text-slate-700 md:pl-10">
                <p className="leading-relaxed">
                  In relation to the therapy of prostate cancer, there are
                  numerous studies.
                </p>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Closed-loop Feedback
                </h3>
                <p className="mt-4 leading-relaxed">
                  We value your opinions and healing in order to support the
                  further development of these treatments or procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {STUDY_SECTIONS.map((section, index) => {
          const reverse = index % 2 === 1;

          return (
            <section
              key={section.title}
              className={
                index % 2 === 0
                  ? "border-b border-slate-200 bg-slate-50/50"
                  : "border-b border-slate-200 bg-white"
              }
            >
              <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:gap-16 ${
                    reverse ? "lg:grid-cols-[1fr_minmax(0,520px)]" : "lg:grid-cols-[minmax(0,520px)_1fr]"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-200 ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[5/4] w-full">
                      <Image
                        src={section.image}
                        alt={section.alt}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                      {section.title}
                    </h2>
                    {"status" in section && section.status ? (
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {section.status}
                      </p>
                    ) : null}
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                      {section.description}
                    </p>
                    {"requirements" in section && section.requirements ? (
                      <div className="mt-6 max-w-2xl">
                        <h3 className="text-lg font-bold tracking-tight text-slate-900">
                          General Requirements
                        </h3>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
                          {section.requirements.map((requirement) => (
                            <li key={requirement}>{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {"nct" in section && section.nct ? (
                      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                        {section.nct}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

