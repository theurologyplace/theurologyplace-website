import Link from "next/link";
import { AdultCircumcisionFaqAccordion } from "@/app/components/adult-circumcision-faq-accordion";
import { AdultCircumcisionPhotosCta } from "@/app/components/adult-circumcision-photos-cta";
import { AdultCircumcisionTabs } from "@/app/components/adult-circumcision-tabs";
import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { YouTubeEmbed } from "@/app/components/youtube-embed";
import { BTN_MAKE_APPOINTMENT_HERO, BTN_PRIMARY } from "@/app/lib/button-styles";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_IMAGE_SECTION_ALIGN_CONTENT,
  HERO_SUBTITLE_ON_IMAGE,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const AC_IMG = (name: string) =>
  `/images/${encodeURIComponent("adult circumcision")}/${encodeURIComponent(name)}`;

const HERO_BG = AC_IMG("couple_smiling-2880w.jpg");

/** Official channel: "The Urology Place San Antonio - Adult Circumcision" */
const VIDEO_DR_KELLA_ID = "rv_rWE8Pn2M";
/** Patient testimonial on the clinic channel */
const VIDEO_TESTIMONIAL_ID = "CC7n977yrHU";

const FEATURES = [
  {
    text: "Circumcisions can be done for medical reasons or personal reasons",
    icon: "pill",
  },
  {
    text: "No referral needed for patients electing a cosmetic circumcision",
    icon: "sync",
  },
  {
    text: "Relatively painless procedure with local anesthetic. Nitrous gas is included with every procedure at no cost to you",
    icon: "lightbulb",
  },
  {
    text: "Out of town patients welcome! We have telemedicine for initial consultations and follow ups",
    icon: "travel",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof FEATURES)[number]["icon"] }) {
  const stroke = "currentColor";
  const common = { className: "h-8 w-8", fill: "none" as const, stroke, strokeWidth: 1.5 };
  switch (name) {
    case "pill":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 11 11 5.5a3.5 3.5 0 0 1 5 5L10.5 16a3.5 3.5 0 0 1-5-5Z" />
          <path strokeLinecap="round" d="M8 12h3M9.5 10.5v3" />
        </svg>
      );
    case "sync":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a7 7 0 0 1 5-6.5M20 15a7 7 0 0 1-5 6.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4v2.5h2.5M19 20v-2.5h-2.5" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M12 3a4 4 0 0 0-2 7.5V14h4v-3.5A4 4 0 0 0 12 3Z" />
        </svg>
      );
    case "travel":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <circle cx="8" cy="7" r="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-1.5a3.5 3.5 0 0 1 3.5-3.5H11" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 8h6l3 3v6h-3M14 17h6v-4" />
        </svg>
      );
    default:
      return null;
  }
}

export function AdultCircumcisionPageContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Hero — fixed background (PROJECT_RULES.md) */}
      <section
        className={HERO_IMAGE_SECTION_ALIGN_CONTENT}
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <h1 className={`${HERO_TITLE_ON_IMAGE} uppercase`}>
            San Antonio Adult Circumcision
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl leading-relaxed ${HERO_SUBTITLE_ON_IMAGE}`}>
            Our Board-Certified Urologists perform in-office Circumcisions and make them as
            painless as possible
          </p>
          <div className="mt-8">
            <a href="#men-adult-circumcision-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
              Make Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Feature bar — marble-inspired (same pattern as vasectomy) */}
      <section
        className={`${HERO_AFTER_SLIDE_BASE} border-b border-slate-200/80 px-6 py-14 md:py-16`}
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f4f4f4 45%, #ececec 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-4 text-center text-slate-800"
            >
              <span className="flex h-12 w-12 items-center justify-center text-slate-700">
                <FeatureIcon name={item.icon} />
              </span>
              <p className="text-sm font-bold leading-snug md:text-[15px]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why consider + video */}
      <section className="border-t border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why should I consider a Circumcision?
          </h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            The world&apos;s first planned surgical procedure was a circumcision. Over 1/3 of men
            worldwide are circumcised. This procedure is very common in the United States.
            Circumcisions are associated with a lower risk of penile cancer, urine infections, and
            HIV.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Whether for medical or personal reasons, a circumcision could be the right choice for
            you. No matter what reason you choose to undergo this procedure, The Urology Place
            strives to ensure your procedure is as quick and painless as possible.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl px-6">
          <YouTubeEmbed
            videoId={VIDEO_DR_KELLA_ID}
            title="The Urology Place San Antonio — Adult Circumcision"
            className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200"
          />
        </div>
      </section>

      {/* Dr. Kella — circular portrait + copy (matches marketing layout) */}
      <section className="border-t border-slate-200 bg-slate-500 px-6 py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 text-center md:gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 lg:text-left">
          <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full bg-slate-400 shadow-xl ring-4 ring-white/25 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <img
              src={AC_IMG("drkellaheadshot.jpg")}
              alt="Dr. Naveen Kella"
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="w-full max-w-xl lg:min-w-0 lg:flex-1">
            <div className="mx-auto h-1 w-12 rounded-full bg-white/90 lg:mx-0" aria-hidden />
            <h2 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">Dr. Naveen Kella</h2>
            <p className="mt-2 text-lg font-semibold text-white/95">
              Founder and Experienced Circumcision Doctor
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-white/90 md:text-base">
              Dr. Naveen Kella is board certified in urology, with a fellowship in urologic oncology
              and robotic surgery. He is known for his experience in treating prostate cancer. As a
              urologist, he has done hundreds of circumcisions. Many patients desiring circumcision
              appreciate the lower cost of getting a circumcision done in the office. Dr. Kella has
              trained on doing in-office circumcision. The office procedure is safe and painless as
              possible and we have the necessary equipment to perform the procedure in the office.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed content — background image */}
      <section
        className="relative border-t border-slate-200 bg-slate-900 py-16 md:py-24"
        style={{
          backgroundImage: `url(${AC_IMG("photo-1530645298377-82c8416d3f90-1920w.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <AdultCircumcisionTabs />
        </div>
      </section>

      {/* Before & after CTA */}
      <section className="border-t border-slate-200 bg-slate-500 px-6 py-16 text-center text-white md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Before and After Photographs</h2>
        <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-white/80" aria-hidden />
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/95 md:text-base">
          Click the button below to view before and after photos of adult circumcisions performed at
          The Urology Place in San Antonio by Dr. Naveen Kella.
        </p>
        <div className="mt-8">
          <AdultCircumcisionPhotosCta />
        </div>
      </section>

      {/* Out of town — travel photo left, copy right */}
      <section className="border-t border-slate-200 bg-white">
        <div className="grid min-h-[480px] grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={AC_IMG("lowangleshot.jpg")}
              alt="City skyline and airplane — travel for medical care"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:py-20 lg:pl-12 lg:pr-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Coming in from out of town?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>
                Many of our patients come from out of town to have their procedure performed with
                us. Patients can have a telemedicine conference with the doctor prior to the visit.
                Pictures of the penis are necessary to give us an idea of your condition. The
                photographs and video conference can help make your visit and procedure go as
                smoothly as possibly. If everything works out, we can schedule a procedure at our
                office.
              </p>
              <p>
                You can drive or fly yourself to our office on the same day of the procedure. Pain
                medications are not usually needed, but we can prescribe some medication and send it
                to a pharmacy close to our office. Plan on wearing comfortable clothes, but bring an
                extra pair of snug or elastic underwear. You should use clippers to cut away any
                pubic hair (not razors—they can cause skin infections). If we are doing the procedure
                in the office, you can eat as you normally would, but do not eat heavy or right
                before the procedure. You should be OFF any blood thinners or supplements (vitamin E,
                for example) for a week. Feel free to bring your phone to watch videos or listen to
                music.
              </p>
              <p>
                After the procedure is done, we will have you use antibiotic ointment to minimize
                irritation from the suture. You will have some gauze wrapped around the penis for
                some expected, minimal oozing. A shower is okay after 24 hours. However, no baths until
                the sutures are gone. You can drive yourself home after about 3 hours from the
                procedure. This is to make sure there is no bleeding. If you decided to take any
                medication prior to the procedure (xanax), then you should have someone who can drive
                you home.
              </p>
              <p>
                Before scheduling your circumcision, we&apos;ll arrange a virtual consultation with
                Dr. Naveen Kella to ensure you&apos;re a good candidate for the procedure. To help
                with the evaluation, we&apos;ll ask for clear photos of the area. If you&apos;re
                unable to provide photos, we&apos;re happy to see you in person instead.
              </p>
              <p>
                After your procedure, we&apos;ll schedule a follow-up visit—either in person or
                virtually—about 1 to 2 weeks later to ensure everything is healing well.
              </p>
              <p>
                We advise no sexual activity until the sutures are gone, which is usually within 2-3
                weeks.
              </p>
              <p>Your urination should not be affected.</p>
              <p>
                You can get back to desk work right away, but physical activity should be curtailed if
                it is not comfortable.
              </p>
              <p>
                With proper planning, you can have a relatively painless, in-office procedure with an
                experienced urologist and return home the same day.
              </p>
            </div>
            <div className="mt-10 flex justify-start lg:justify-end">
              <Link href="/patient-resources/out-of-town-patients" className={`inline-block ${BTN_PRIMARY}`}>
                Learn More Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + FAQ */}
      <section className="border-t border-slate-200 bg-slate-100/80">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Patient Testimonial
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700 md:text-base">
                If you or a loved one are looking into getting an adult circumcision, check out this
                video from one of our patients explaining his personal experience at our clinic.
              </p>
              <p className="mt-6 text-[15px] font-semibold text-slate-900 md:text-base">
                Call our office at{" "}
                <a className="text-blue-700 underline hover:text-blue-800" href="tel:+12106173670">
                  (210) 617-3670
                </a>{" "}
                to get scheduled for your same-day consultation and procedure.
              </p>
            </div>
            <YouTubeEmbed
              videoId={VIDEO_TESTIMONIAL_ID}
              title="Adult circumcision patient experience at The Urology Place"
              className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <AdultCircumcisionFaqAccordion />
        </div>
      </section>

      <section
        id="men-adult-circumcision-contact"
        className="scroll-mt-28 border-t border-slate-200 bg-slate-50/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ContactFormTemplate
            variant="embedded"
            pageName="Adult Circumcision"
            serviceName="Adult Circumcision"
            category="Men"
            sourcePath="/men/adult-circumcision"
            idPrefix="men-adult-circumcision"
          />
        </div>
      </section>
    </main>
  );
}
