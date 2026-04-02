import { HERO_SUBTITLE_ON_LIGHT, HERO_TITLE_ON_LIGHT } from "@/app/lib/hero";

export default function WomenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className={HERO_TITLE_ON_LIGHT}>
          Women&apos;s Urologic Care
        </h1>
        <p className={`mt-6 max-w-2xl ${HERO_SUBTITLE_ON_LIGHT}`}>
          Placeholder for the overview of women&apos;s urologic and pelvic
          health services offered at the clinic.
        </p>
      </section>
    </main>
  );
}

