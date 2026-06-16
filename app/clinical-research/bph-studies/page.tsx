import Image from "next/image";
import { YouTubeEmbed } from "@/app/components/youtube-embed";
import { BPH_STAGE_ILLUSTRATIONS } from "@/app/data/bph-stage-illustrations";
import { HERO_IMAGE_SECTION, HERO_TITLE_BPH_TRIALS } from "@/app/lib/hero";

const HERO_BG =
  "/images/bph%20studies/pexels-photo-4194857-2880w.jpeg";

const YOUTUBE_VIDEO_ID = "XcDnlQSicfA";
const YOUTUBE_TITLE =
  "Dr. Naveen Kella discusses the MT-08 clinical trial comparing iTind and UroLift";

const STUDIES = [
  {
    name: "OLYMPUS",
    status: "Active and Enrolling",
    description:
      "The OLYMPUS study is evaluating innovative therapies for benign prostatic hyperplasia (BPH). Researchers aim to determine whether these approaches can improve urinary symptoms and quality of life for men with enlarged prostates.",
    nct: "NCT04757116",
  },
  {
    name: "ALPFA",
    status: "Coming Soon",
    description:
      "The ALPFA study will investigate emerging therapies for men with enlarged prostates and lower urinary tract symptoms. The goal is to expand treatment options and improve quality of life for patients with BPH.",
  },
] as const;

function bphStageImageSrc(path: string) {
  return encodeURI(path).replace(/\+/g, "%2B");
}

function statusColor(status: string) {
  if (status === "Active and Enrolling") return "text-emerald-700";
  if (status === "Coming Soon") return "text-amber-700";
  return "text-slate-600";
}

export default function BphStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className={HERO_IMAGE_SECTION}
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className={HERO_TITLE_BPH_TRIALS}>
            Benign Prostatic Hyperplasia (BPH) Studies
          </h1>
        </div>
      </section>

      <section className="rounded-t-3xl border-t border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {BPH_STAGE_ILLUSTRATIONS.map((stage) => (
                <figure
                  key={stage.label}
                  className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm"
                >
                  <div className="relative aspect-[3/5] w-full bg-slate-900">
                    <Image
                      src={bphStageImageSrc(stage.src)}
                      alt={stage.alt}
                      fill
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="border-t border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-900">
                    {stage.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

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

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
            <YouTubeEmbed
              videoId={YOUTUBE_VIDEO_ID}
              title={YOUTUBE_TITLE}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
