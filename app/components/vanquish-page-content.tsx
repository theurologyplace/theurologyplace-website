import { ContactFormTemplate } from "@/app/components/contact-form-template";
import { BTN_MAKE_APPOINTMENT_HERO } from "@/app/lib/button-styles";
import {
  HERO_AFTER_SLIDE_BASE,
  HERO_FIXED_BACKDROP,
  HERO_IMAGE_SECTION,
  HERO_TITLE_ON_IMAGE,
} from "@/app/lib/hero";

const HERO_BG = encodeURI("/images/vanquish/1765481756241.jpg");

const PHONE_DISPLAY = "210-617-3670";
const PHONE_TEL = "2106173670";
const EMAIL_SCHEDULING = "messages@theupi.com";

const SECTION_INNER = "mx-auto max-w-3xl px-6 py-14 md:py-16";
const H2 = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const PROSE = "mt-5 space-y-4 text-[15px] leading-relaxed text-slate-800 md:text-base";
const LIST = "mt-5 space-y-3 text-[15px] leading-relaxed text-slate-800 md:text-base";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className={LIST}>
      {items.map((line) => (
        <li key={line} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

export function VanquishPageContent() {
  return (
    <div className="relative isolate min-h-screen text-slate-900">
      <div
        className={HERO_FIXED_BACKDROP}
        aria-hidden
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <section className={HERO_IMAGE_SECTION}>
          <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className={HERO_TITLE_ON_IMAGE}>Vanquish Water Vapor Therapy in San Antonio, TX</h1>
            <div className="mt-8">
              <a href="#vanquish-contact" className={BTN_MAKE_APPOINTMENT_HERO}>
                Make Appointment
              </a>
            </div>
          </div>
        </section>

        <section className={`${HERO_AFTER_SLIDE_BASE} bg-white`}>
          <div className={SECTION_INNER}>
            <h2 className={H2}>Innovative, Minimally Invasive Treatment for Prostate Tissue Ablation</h2>
            <div className={PROSE}>
              <p>
                Vanquish Water Vapor Therapy is an advanced, minimally invasive treatment designed to target
                and ablate prostate tissue using the natural energy of water vapor. This approach offers a
                precise, effective option for patients seeking alternatives to traditional surgical treatments.
              </p>
              <p>
                At The Urology Place, we are proud to be at the forefront of this technology and were the
                first site to treat a patient in the VAPOR-2 pivotal clinical trial, highlighting our
                commitment to innovation and cutting-edge patient care.{" "}
                <a
                  href="https://www.francismedical.com/press-release-francis-medical-announces-first-patient-treated-in-vapor2-pivotal-trial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 underline decoration-blue-600/80 underline-offset-2 hover:text-blue-700"
                >
                  Read the Francis Medical press release
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-slate-50/80">
          <div className={SECTION_INNER}>
            <h2 className={H2}>What is Vanquish Water Vapor Therapy?</h2>
            <div className={PROSE}>
              <p>
                Vanquish is a minimally invasive treatment that uses sterile water vapor (steam) to ablate
                targeted prostate tissue.
              </p>
              <p className="font-semibold text-slate-900">The therapy works by:</p>
            </div>
            <BulletList
              items={[
                "Delivering controlled doses of water vapor into prostate tissue",
                "Releasing thermal energy that destroys targeted cells",
                "Allowing the body to naturally reabsorb the treated tissue over time",
              ]}
            />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-800 md:text-base">
              This process helps relieve urinary symptoms caused by prostate enlargement while preserving
              surrounding structures.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Who is a Candidate?</h2>
            <div className={PROSE}>
              <p>
                You may be a candidate for Vanquish Water Vapor Therapy if you have been diagnosed with
                prostate cancer and are exploring minimally invasive treatment options. This therapy may be
                appropriate for patients with localized disease who are seeking a targeted approach to
                treating prostate tissue while minimizing impact on surrounding structures. It can be a
                consideration for individuals who are not ideal candidates for more invasive surgical
                procedures or who are looking for an alternative to traditional treatments such as surgery
                or radiation. Vanquish is designed to precisely ablate prostate tissue using water vapor
                energy, offering a focused treatment option to preserve quality of life. A thorough
                evaluation, including imaging, pathology review, and discussion of treatment goals, is
                necessary to determine if this approach is appropriate based on your specific diagnosis and
                overall health.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-slate-50/80">
          <div className={SECTION_INNER}>
            <h2 className={H2}>How the Procedure Works</h2>
            <div className={PROSE}>
              <p>
                Vanquish Water Vapor Therapy is performed using a specialized delivery system that targets
                prostate tissue with precision. Water vapor is introduced into the prostate, where it
                releases energy that ablates excess tissue. Over time, the body naturally clears the treated
                tissue, improving urinary flow and symptoms. The procedure is minimally invasive and typically
                performed in an outpatient setting.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Recovery and Results</h2>
            <div className={PROSE}>
              <p>Most patients are able to return home the same day.</p>
              <p className="font-semibold text-slate-900">What to expect:</p>
            </div>
            <BulletList
              items={[
                "Temporary urinary symptoms during the healing process",
                "Mild discomfort or irritation for a short period",
                "Gradual improvement in urinary function over time",
              ]}
            />
            <p className={`mt-6 text-[15px] leading-relaxed text-slate-800 md:text-base`}>
              Symptom relief typically develops over several weeks as the body reabsorbs treated tissue.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-slate-50/80">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Benefits of Vanquish Therapy</h2>
            <BulletList
              items={[
                "Minimally invasive treatment option",
                "No major incisions or extensive surgery",
                "Targeted tissue ablation",
                "Designed to preserve surrounding structures",
                "Backed by ongoing clinical research and innovation",
              ]}
            />
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Why The Urology Place?</h2>
            <BulletList
              items={[
                "First site to treat a patient in the VAPOR-2 pivotal clinical trial",
                "Early adopters of advanced prostate therapies",
                "Experienced urology team",
                "Commitment to innovative, patient-centered care",
              ]}
            />
            <p className={`mt-6 text-[15px] leading-relaxed text-slate-800 md:text-base`}>
              We are dedicated to offering the latest treatment options backed by clinical research and
              real-world experience.
            </p>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-slate-50/80">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Insurance and Coverage</h2>
            <div className={PROSE}>
              <p>
                Vanquish Water Vapor Therapy is not currently fully covered by insurance and may be
                considered on a case-by-case basis. Our team can help review your specific situation and
                discuss available options.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-slate-200/80 bg-white">
          <div className={SECTION_INNER}>
            <h2 className={H2}>Schedule a Consultation</h2>
            <div className={PROSE}>
              <p>To schedule a consultation for Vanquish Water Vapor Therapy:</p>
              <p>
                Please call{" "}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-semibold text-blue-600 underline decoration-blue-600/80 underline-offset-2 hover:text-blue-700"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                and ask to speak with the Vanquish scheduling team, or select the surgery line when
                prompted. If the department is unavailable, please leave a voicemail. You may also email us
                at{" "}
                <a
                  href={`mailto:${EMAIL_SCHEDULING}?subject=Vanquish%20scheduling`}
                  className="font-semibold text-blue-600 underline decoration-blue-600/80 underline-offset-2 hover:text-blue-700"
                >
                  {EMAIL_SCHEDULING}
                </a>{" "}
                and request to speak with Patsy or Raji regarding scheduling.
              </p>
            </div>
          </div>
        </section>

        <section
          id="vanquish-contact"
          className="relative scroll-mt-28 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <ContactFormTemplate
              variant="embedded"
              pageName="Vanquish"
              serviceName="Vanquish (Water Vapor Ablation)"
              category="Men > Prostate Cancer"
              sourcePath="/men/prostate-cancer/vanquish"
              idPrefix="men-vanquish"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
