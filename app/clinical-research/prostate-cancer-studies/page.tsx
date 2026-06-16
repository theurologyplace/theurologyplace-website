import {
  HERO_IMAGE_SECTION,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const STUDIES = [
  {
    name: "CAPTAIN",
    status: "Active, Not Enrolling",
    description:
      "The CAPTAIN study is evaluating novel treatment approaches for patients with prostate cancer. Researchers are investigating whether these therapies can improve disease control and expand treatment options while maintaining quality of life.",
    nct: "NCT05027477",
  },
  {
    name: "CARE",
    status: "Active and Enrolling",
    description:
      "The CARE study is investigating new approaches for the treatment and management of prostate cancer. The goal of this research is to improve patient outcomes and provide additional therapeutic options for men with prostate cancer.",
    nct: "NCT05001477",
  },
  {
    name: "Curium",
    status: "Active and Enrolling",
    description:
      "The Curium study is evaluating advanced PET imaging technology designed to improve the detection and staging of prostate cancer. This research may help physicians make more informed treatment decisions and better understand disease progression.",
    nct: "NCT06235151",
  },
  {
    name: "CLARIFY",
    status: "Active and Enrolling",
    description:
      "The CLARIFY study is evaluating the use of Copper-64 SAR-bisPSMA PET imaging in men with high-risk prostate cancer. Researchers hope this imaging technology will improve the detection of lymph node involvement and assist in treatment planning.",
    nct: "NCT06056830",
  },
  {
    name: "PYLARIFY Registry",
    status: "Active, Not Enrolling",
    description:
      "The PYLARIFY Registry is evaluating the real-world clinical utility of PYLARIFY PET imaging in patients with prostate cancer. Researchers aim to better understand how PSMA PET imaging influences treatment decisions and long-term outcomes.",
    nct: "NCT05712473",
  },
  {
    name: "Amplify",
    status: "Active, Not Enrolling",
    description:
      "The Amplify study is evaluating new treatment combinations for prostate cancer with the aim of improving disease control and patient outcomes. Researchers are studying the safety and effectiveness of these therapies in appropriate patients.",
    nct: "NCT06970847",
  },
  {
    name: "Vapor",
    status: "Active, Not Enrolling",
    description:
      "The Vapor study is investigating innovative treatment strategies for prostate cancer. Researchers are studying the safety and effectiveness of these approaches with the goal of improving outcomes for patients.",
    nct: "NCT05683691",
  },
  {
    name: "Vanquish",
    status: "Active and Enrolling",
    description:
      "The Vanquish study is evaluating novel therapies for prostate cancer. Researchers aim to determine whether these treatments can provide additional options and improve outcomes for patients.",
  },
  {
    name: "Artera",
    status: "Coming Soon",
    description:
      "The Artera study will evaluate precision medicine tools designed to help personalize treatment decisions for men with prostate cancer. Researchers hope this approach will allow therapies to be tailored more effectively to each patient.",
  },
] as const;

function statusColor(status: string) {
  if (status === "Active and Enrolling") return "text-emerald-700";
  if (status === "Coming Soon") return "text-amber-700";
  return "text-slate-600";
}

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
          <h1 className={HERO_TITLE_ON_IMAGE}>Prostate Cancer Studies</h1>
          <p className={`mx-auto mt-6 max-w-3xl leading-relaxed ${HERO_SUBTITLE_ON_IMAGE}`}>
            Join us and participate in the new developments in medicine
          </p>
        </div>
      </section>

      <section className="rounded-t-3xl border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="space-y-8">
            {STUDIES.map((study) => (
              <article
                key={study.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {study.name}
                </h2>
                <p
                  className={`mt-3 text-sm font-semibold uppercase tracking-[0.14em] ${statusColor(study.status)}`}
                >
                  Status: {study.status}
                </p>
                <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                  {study.description}
                </p>
                {"nct" in study && study.nct ? (
                  <p className="mt-6 border-t border-slate-100 pt-6">
                    <a
                      href={`https://clinicaltrials.gov/study/${study.nct}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold tracking-wide text-blue-700 underline decoration-blue-400 underline-offset-2 transition hover:text-blue-800"
                    >
                      {study.nct}
                    </a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
