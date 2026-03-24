import Image from "next/image";
import Link from "next/link";
import { BTN_PRIMARY_LARGE } from "@/app/lib/button-styles";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import {
  MoreInformationCardGrid,
  type MoreInformationItem,
} from "@/app/components/more-information-card-grid";
import { RoboticProstatectomyFaqAccordion } from "@/app/components/robotic-prostatectomy-faq-accordion";
import { YouTubeEmbed } from "@/app/components/youtube-embed";

const IMG_BASE = "/images/robotic%20prostatectomy";

function SeeThroughWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <div className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-md md:p-10">
        {children}
      </div>
    </div>
  );
}

function VideoCard({ videoId, title, caption }: { videoId: string; title: string; caption: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-200/80">
      <YouTubeEmbed videoId={videoId} title={title} />
      <p className="mt-4 text-center text-sm font-bold leading-snug text-slate-900 md:text-base">
        {caption}
      </p>
    </div>
  );
}

const FEATURES = [
  {
    title: "Experienced.",
    body: "One of the Nation's Most Experienced Robotic Prostate Surgeons",
  },
  {
    title: "Consistent.",
    body: "Uses the same team and first assistant since 2004",
  },
  {
    title: "State of the Art.",
    body: "Uses technologies to improve sexual function and continence outcomes",
  },
  {
    title: "Respected.",
    body: 'Video "how-to" step-by-step on YouTube with over 220,000 views',
  },
] as const;

const MORE_INFORMATION_ITEMS: MoreInformationItem[] = [
  {
    imageSrc: `${IMG_BASE}/image1.png`,
    imageAlt: "PSA, MRI and Gleason Score",
    label: "PSA, MRI and Gleason Score",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image2.png`,
    imageAlt: "Prostate Cancer Outcomes",
    label: "Prostate Cancer Outcomes",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image3.png`,
    imageAlt: "Airseal and Robotic Prostatectomy",
    label: "Airseal and Robotic Prostatectomy",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image4.png`,
    imageAlt: "Neuromonitoring with ProPep",
    label: "Neuromonitoring with ProPep",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image5.png`,
    imageAlt: "Patient Testimonial",
    label: "Patient Testimonial",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image6.png`,
    imageAlt: "GAINSWave for Sexual Function Recovery",
    label: "GAINSWave for Sexual Function Recovery",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image7.png`,
    imageAlt: "High Intensity Emsella Chair for Continence",
    label: "High Intensity Emsella Chair for Continence",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image8.png`,
    imageAlt: "Dr. Kella's Thoughts on Choosing Your Prostate Cancer Surgeon",
    label: "Dr. Kella's Thoughts on Choosing Your Prostate Cancer Surgeon",
    href: "#",
  },
];

export function RoboticProstatectomyPageContent() {
  return (
    <main className="relative min-h-screen text-slate-900">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
        style={{
          backgroundImage: `url('${IMG_BASE}/incrediblemarketing18edited-2880w.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[48vh] flex-col items-center justify-center px-6 py-20 md:min-h-[52vh] md:py-28">
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            ROBOTIC PROSTATECTOMY
          </h1>
          <p className="mt-5 text-base text-white/95 md:text-lg lg:text-xl">
            Naveen Kella M.D., Fellowship Trained, Nationally Recognized Leader in Robotic
            Prostate Surgery
          </p>
        </div>
      </section>

      {/* Window 1 */}
      <section className="relative">
        <SeeThroughWindow>
          <h2 className="text-center text-xl font-semibold text-sky-600 md:text-2xl">
            Why Choose your Robotic Prostatectomy with Dr. Naveen Kella?
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600"
                  aria-hidden
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="mt-4 text-sm text-slate-800 md:text-[15px]">
                  <span className="font-bold">{f.title}</span> {f.body}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 text-center text-lg font-bold text-slate-900 md:text-xl">
            Check Out Our Recent RALP Patient Testimonial
          </h3>
          <div className="mx-auto mt-8 max-w-3xl">
            <YouTubeEmbed videoId="5dRzub5nYlw" title="Recent RALP patient testimonial" />
          </div>
        </SeeThroughWindow>
      </section>

      {/* Intro + CTA */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">
            If you have been diagnosed with prostate cancer, you may have heard about robotic
            prostate surgery. In robotic prostatectomy, many patients naturally feel overwhelmed with
            a prostate cancer diagnosis. At The Urology Place, we specialize in the treatment of
            prostate cancer and work with our patients to help them make informed, appropriate
            decisions for their unique case. After treating thousands of prostate cancer patients,
            we have become known for our prostate cancer outcomes. Dr. Naveen Kella performs 100% of
            the robotic prostatectomies at The Urology Place. Dr. Kella and his expert surgical team
            have been working together for over 10 years, making it one of the most specialized teams
            in the nation for prostate cancer removal. We employ specialized procedures to avoid heat
            from cautery and minimize tension, two key factors in recovery. Patients across the
            world have seen Dr. Kella&apos;s team for their expertise.
          </p>
          <Link
            href="/men/prostate-cancer/robotic-prostatectomy/contact-us"
            className={`${BTN_PRIMARY_LARGE} mt-10 inline-block`}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Window 2 — three videos */}
      <section className="relative">
        <SeeThroughWindow>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            <VideoCard
              videoId="DG6JpKL14OM"
              title="Why choose The Urology Place for your prostate surgery"
              caption="Why choose The Urology Place for your Prostate Surgery?"
            />
            <VideoCard
              videoId="gaIjFU4y4ms"
              title="Patient testimonial English and Spanish"
              caption="Patient Testimonial (English and Spanish)"
            />
            <VideoCard
              videoId="jCWRfzSOGaw"
              title="Dr. Kella explains robotic prostatectomy surgery and recovery"
              caption="Dr. Kella explains the surgery and recovery procedure for Robotic Prostatectomy."
            />
          </div>
        </SeeThroughWindow>
      </section>

      {/* Experience & credentials */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Why is Dr. Kella one of the most Experienced Robotic Prostate Surgeons in South Texas?
          </h2>
          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-xl bg-slate-100 md:aspect-[2/1]">
            <Image
              src={`${IMG_BASE}/kella+directing+baptist+OR-1920w.png`}
              alt="Dr. Kella directing surgery in the operating room at Baptist"
              fill
              className="object-cover object-center"
              sizes="(min-width: 896px) 896px, 100vw"
              priority
            />
          </div>
          <ul className="mt-10 list-disc space-y-2 pl-5 text-slate-700 leading-relaxed">
            <li>Fellowship trained at Baylor College of Medicine in Robotic Oncology</li>
            <li>Performed first robotic prostatectomy in South Texas</li>
            <li>Performed first robotic cystectomy in Texas</li>
            <li>One of the most experienced robotic prostate surgeons in the country</li>
            <li>Has trained over 100 surgeons to perform robotic surgery</li>
            <li>Regularly performs robotic prostatectomy</li>
            <li>Adjunct Assistant Professor for UT Health Science Center</li>
          </ul>

          <h3 className="mt-12 text-lg font-semibold text-sky-600">Personal Statistics</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 leading-relaxed">
            <li>Less than 1% blood transfusion rate</li>
            <li>92% of patients go home the next day</li>
            <li>
              90% of patients do not complain of urinary leakage at 3 months follow-up. Dr. Kella
              participated in a multi-site study looking at urinary continence. One of the secondary
              analyses looked at surgeon&apos;s continence rates.
            </li>
            <li>
              Most nerve sparing patients typically have returning erect function by 3 months or
              sooner.
            </li>
          </ul>

          <h3 className="mt-12 text-lg font-semibold text-sky-600">
            Dr. Kella pursues the latest technologies
          </h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700 leading-relaxed">
            <li>
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                DaVinci Xi surgical system
              </a>
              : the latest system. Dr. Kella believes the vision, movement and energy-delivery
              systems are better with the Xi.
            </li>
            <li>
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                AirSeal technology
              </a>
              . This machine provides gas to keep the belly space open and can make surgeries
              faster. With his surgical technique, Dr. Kella is able to set the Airseal at a low
              pressure for most of his cases. As a result, your bowels &ldquo;wake up&rdquo;
              quickly, bowel discomfort is less than the past 5 years, 90% of his patients go home
              the following day.
            </li>
            <li>
              Nerve monitoring technology in select cases to help with nerve sparing. Dr. Kella is
              a pioneer with{" "}
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                ProPep
              </a>
              . He was the first surgeon to start using ProPep after the founder developed the
              system.
            </li>
            <li>
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                Dehydrated human amnion chorion membrane
              </a>{" "}
              to help speed tissue healing around the neurovascular bundles.
            </li>
          </ul>

          <h3 className="mt-12 text-lg font-semibold text-sky-600">
            How Dr. Kella stresses rehabilitation
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 leading-relaxed">
            <li>Preoperative preparation</li>
            <li>Onsite visit with fellowship-trained cardiologist available</li>
            <li>
              Post-operative package with Dr. Kella and staff to restore urinary and sexual function
            </li>
            <li>Telemedicine for patients coming from a distance</li>
            <li>
              FDA approved{" "}
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                penile pump
              </a>{" "}
              for patients wanting a fast return of continence.
            </li>
            <li>
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                Injectable medications (Alprostadil)
              </a>{" "}
              available to enhance sexual function recovery.
            </li>
            <li>
              <a href="#" className="font-medium text-sky-600 underline hover:text-sky-700">
                Genomic testing
              </a>{" "}
              after surgery to help stratify your risk of cancer recurrence.
            </li>
          </ul>
        </div>
      </section>

      {/* Window 3 — three videos */}
      <section className="relative">
        <SeeThroughWindow>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            <VideoCard
              videoId="Mcjwm2yq8bI"
              title="Patient testimonial"
              caption="Patient Testimonial"
            />
            <VideoCard
              videoId="ZchNF25kALw"
              title="Full robotic prostatectomy case step by step"
              caption="Full Robotic Surgery, over 220,000 views"
            />
            <VideoCard
              videoId="jPerxA1TR54"
              title="Dr. Kella featured on The Resident"
              caption="Dr. Kella featured on The Resident"
            />
          </div>
        </SeeThroughWindow>
      </section>

      {/* Out of town */}
      <section className="relative bg-sky-800/95 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Coming from Out of Town?</h2>
          <p className="mt-6 text-base leading-relaxed text-white/95 md:text-lg">
            Dr. Naveen Kella is a top prostate cancer surgeon who attracts patients from across the
            country. We offer virtual consultations and coordinated care for out-of-state patients
            traveling to San Antonio for surgery.
          </p>
          <Link
            href="/patient-resources/out-of-town-patients"
            className="mt-8 inline-block rounded-full border-2 border-white bg-white px-5 py-2 text-sm font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <RoboticProstatectomyFaqAccordion />
        </div>
      </section>

      <MoreInformationCardGrid items={MORE_INFORMATION_ITEMS} />

      <section className="relative border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            title="Contact Us For Robotic Prostatectomy"
            serviceName="Robotic Prostatectomy"
            category="Men > Prostate Cancer"
            sourcePath="/men/prostate-cancer/robotic-prostatectomy"
            idPrefix="men-robotic-prostatectomy"
          />
        </div>
      </section>
    </main>
  );
}
