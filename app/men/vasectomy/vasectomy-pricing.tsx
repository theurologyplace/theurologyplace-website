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

export function VasectomyPricing() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <PriceCard
          price="$875"
          title="In-office vasectomy"
          description="Includes follow-up semen check, which is run on our in-office microscope."
          featured
        />
        <PriceCard
          price="$1,275"
          title="Vasectomy with in-office IV anesthesia"
          description="Administered by a CRNA—you will be asleep and won't remember a thing!"
        />
      </div>

      <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            $149 deposit
          </p>
          <p className="text-sm font-medium text-amber-900/80">Required when scheduling</p>
        </div>
      </div>
    </div>
  );
}
