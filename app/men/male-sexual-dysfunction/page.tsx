export default function MaleSexualDysfunctionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Male Sexual Dysfunction
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Placeholder content for evaluation and treatment of male sexual
          dysfunction, including erectile dysfunction and related concerns.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="#peyronies"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50/70"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Peyronie's Disease
            </h2>
            <p className="mt-2 text-slate-700">
              Evaluation and treatment options for penile curvature.
            </p>
          </a>
          <a
            href="#gainswave"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50/70"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              GAINSWave
            </h2>
            <p className="mt-2 text-slate-700">
              Non-invasive therapy options to support sexual health.
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="space-y-12">
            <div id="peyronies" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Peyronie's Disease
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Details coming soon.
              </p>
            </div>

            <div id="gainswave" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                GAINSWave
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Details coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

