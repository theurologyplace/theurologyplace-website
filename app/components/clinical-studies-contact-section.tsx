import Link from "next/link";
import { CLINIC_PHONE, clinicPhoneTelHref } from "@/app/lib/clinic-info";

const RESEARCH_EMAIL = "research@theupi.com";

export function ClinicalStudiesContactSection() {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 shadow-sm ring-1 ring-slate-200/60 md:p-8">
      <p className="text-base leading-relaxed text-slate-700 md:text-lg">
        Eligibility criteria vary depending on the study. Patients may qualify
        for one or more clinical trials if they meet certain study-specific
        requirements. For additional study requirements and eligibility
        information, please contact our Research Department by emailing{" "}
        <Link
          href={`mailto:${RESEARCH_EMAIL}`}
          className="font-semibold text-blue-700 underline decoration-blue-400 underline-offset-2 transition hover:text-blue-800"
        >
          {RESEARCH_EMAIL}
        </Link>{" "}
        or calling{" "}
        <Link
          href={clinicPhoneTelHref()}
          className="font-semibold text-blue-700 underline decoration-blue-400 underline-offset-2 transition hover:text-blue-800"
        >
          {CLINIC_PHONE}
        </Link>{" "}
        and selecting the Research option. A member of our team will be happy
        to answer your questions and discuss available study opportunities.
      </p>
    </div>
  );
}
