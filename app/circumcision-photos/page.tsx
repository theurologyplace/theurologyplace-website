import type { Metadata } from "next";
import { HERO_TITLE_ON_LIGHT } from "@/app/lib/hero";

export const metadata: Metadata = {
  title: "Circumcision Photos",
  description:
    "Before and after photographs of adult circumcisions performed at The Urology Place in San Antonio.",
};

export default function CircumcisionPhotosPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 antialiased md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className={HERO_TITLE_ON_LIGHT}>Circumcision Photos</h1>
      </div>
    </main>
  );
}
