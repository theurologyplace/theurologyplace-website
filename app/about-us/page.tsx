import { YouTubeEmbed } from "@/app/components/youtube-embed";
import {
  AboutUsTeamFromSanity,
  type TeamMember,
} from "@/app/components/about-us-team";
import { HERO_IMAGE_SECTION, HERO_TITLE_ON_IMAGE } from "@/app/lib/hero";
import { client, teamMembersQuery } from "@/lib/sanity";

/** Refresh team content periodically without a full redeploy. */
export const revalidate = 300;

export default async function AboutUsPage() {
  const teamMembers = await client.fetch<TeamMember[]>(teamMembersQuery);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero: fixed lobby background; content scrolls on top; smaller vertical window */}
      <section
        className={HERO_IMAGE_SECTION}
        style={{
          backgroundImage: "url(/images/branding/TheUrologyPlaceLobby.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className={HERO_TITLE_ON_IMAGE}>About Us</h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Who We Are
          </h2>
          <p className="mt-6 text-left text-slate-700 leading-relaxed">
            We love what we do and it shows. With more than 20 years of
            experience in the field, we know urology and are relentless in our
            pursuit of new technologies and techniques that provide our patients
            with the best possible outcomes. Whether a patient has prostate
            cancer, desires a vasectomy, has a sexual health concern, or needs a
            second opinion, we can help. There&apos;s no challenge too big or too
            small, and we dedicate ourselves to every patient we see, and every
            procedure we take on.
          </p>
        </div>
      </section>

      <AboutUsTeamFromSanity
        members={teamMembers}
        betweenFeaturedAndProfiles={
          <section className="border-t border-slate-200 bg-slate-50/50">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="w-full max-w-md shrink-0 overflow-hidden rounded-xl bg-slate-200">
                  <YouTubeEmbed
                    videoId="H0iedrP-aLI"
                    title="Dr. Kella making a half court shot at a Dallas Mavericks game"
                    className="rounded-xl"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    Dr. Kella making a half court shot at a Dallas Mavericks
                    game!
                  </h2>
                  <div
                    className="mt-3 h-1 w-16 rounded bg-blue-600"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </section>
        }
      />
    </main>
  );
}
