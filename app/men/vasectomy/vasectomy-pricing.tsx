import type { ReactNode } from "react";
import Link from "next/link";

function PriceCard({
  price,
  title,
  description,
  featured,
}: {
  price: string;
  title: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        featured
          ? "border-blue-200 bg-blue-50/70 shadow-sm ring-1 ring-blue-100"
          : "border-slate-200 bg-white"
      }`}
    >
      <p
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          featured ? "text-blue-700" : "text-slate-900"
        }`}
      >
        {price}
      </p>
      <p className="mt-2 text-base font-semibold text-slate-900">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <div className="mt-3 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export function VasectomyPricing() {
  return (
    <div className="space-y-8">
      <p className="text-slate-700 leading-relaxed">
        Most patients choose an in-office vasectomy for convenience and value. Below are
        self-pay options, insurance guidance, and details on scheduling your procedure.
      </p>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          Self-pay options
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <PriceCard
            price="$875"
            title="In-office vasectomy"
            description="Includes follow-up semen check, performed on our in-office microscope."
            featured
          />
          <PriceCard
            price="$1,275"
            title="Vasectomy with in-office IV anesthesia"
            description="Administered by a CRNA—you will be asleep and won't remember a thing."
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          USA
        </p>
        <div className="mt-4 space-y-4">
          <InfoBlock title="With insurance">
            <p>
              The majority of health insurances cover an in-office vasectomy. To find out if
              yours does, call the 800 number on your insurance card, or{" "}
              <Link
                href="/patient-resources/contact-us"
                className="font-semibold text-blue-700 underline hover:text-blue-800"
              >
                contact our insurance and billing department
              </Link>
              . Be sure to provide your policy number and group ID.
            </p>
            <p className="mt-3">
              <Link
                href="/patient-resources/insurance"
                className="font-semibold text-blue-700 underline hover:text-blue-800"
              >
                View accepted insurance plans
              </Link>
            </p>
          </InfoBlock>

          <InfoBlock title="Without insurance">
            <p>
              If you don&apos;t have insurance, the vasectomy cost at The Urology Place is{" "}
              <span className="font-semibold text-slate-900">$1,049</span>. That includes the
              vasectomy and the follow-up semen check.
            </p>
          </InfoBlock>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            $249 deposit
          </p>
          <p className="text-sm font-medium text-amber-900/80">Required when scheduling</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          A $249 deposit is required when you call to schedule your vasectomy. This fee covers
          the pre-vasectomy consultation and semen analysis. The $249 is applied to your total
          procedure cost. Payment is typically taken over the phone by credit or debit card.
        </p>
      </div>

      <InfoBlock title="Vasectomy with anesthesia (surgery center)">
        <p>
          Most patients prefer the cost and speed of an in-office vasectomy. For patients who
          prefer anesthesia, vasectomy procedures are completed at the Pasteur Plaza Surgery
          Center.
        </p>
        <p className="mt-4">
          The vasectomy with anesthesia package is{" "}
          <span className="text-lg font-bold text-slate-900">$2,200</span> and includes the
          surgery center (including pathology), the physician, and anesthesia.
        </p>
      </InfoBlock>
    </div>
  );
}
