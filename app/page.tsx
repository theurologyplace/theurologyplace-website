import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero: fixed building background + grey overlay; text and button scroll with page */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24"
        style={{
          backgroundImage: "url(/images/branding/TheUrologyPlaceBuilding.png)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Grey opacity overlay */}
        <div
          className="absolute inset-0 bg-slate-900/50"
          aria-hidden
        />

        {/* Scrolling content (not part of background) */}
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Experience Matters
          </h1>
          <p className="mt-4 text-lg text-white/95 md:text-xl">
            Get the care you need from providers who are experts in their fields.
          </p>
          <div className="mt-8">
            <Link
              href="/patient-resources/contact-us"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Make Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
