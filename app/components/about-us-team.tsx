import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import type { ReactNode } from "react";
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
} from "@portabletext/types";
import { urlFor } from "@/lib/sanity";

export type TeamMemberLayout = "featured" | "profile" | "grid";

export type TeamCategory = {
  _id: string;
  title: string | null;
  sortOrder: number | null;
};

export type TeamMember = {
  _id: string;
  name: string | null;
  role: string | null;
  shortSummary: string | null;
  bio: Array<PortableTextBlock | ArbitraryTypedObject> | null;
  profileImage: Parameters<typeof urlFor>[0] | null;
  credentialImages: Parameters<typeof urlFor>[0][] | null;
  layoutVariant: TeamMemberLayout | null;
  sortOrder: number | null;
  category: TeamCategory | null;
};

const bioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-slate-700 leading-relaxed first:mt-4">{children}</p>
    ),
  },
};

function sortByOrder(a: TeamMember, b: TeamMember) {
  return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
}

export function partitionTeamMembers(members: TeamMember[]) {
  const featured = members
    .filter((m) => m.layoutVariant === "featured")
    .sort(sortByOrder);
  const profiles = members
    .filter((m) => m.layoutVariant === "profile")
    .sort(sortByOrder);
  const grid = members
    .filter((m) => m.layoutVariant === "grid")
    .sort(sortByOrder);
  return { featured, profiles, grid };
}

export function groupMembersByCategory(members: TeamMember[]) {
  const byCategory = new Map<
    string,
    { category: TeamCategory; members: TeamMember[] }
  >();
  const uncategorized: TeamMember[] = [];

  for (const member of members) {
    const category = member.category;
    if (category?._id) {
      const existing = byCategory.get(category._id);
      if (existing) {
        existing.members.push(member);
      } else {
        byCategory.set(category._id, { category, members: [member] });
      }
    } else {
      uncategorized.push(member);
    }
  }

  const groups = [...byCategory.values()].sort(
    (a, b) => (a.category.sortOrder ?? 0) - (b.category.sortOrder ?? 0),
  );
  for (const group of groups) {
    group.members.sort(sortByOrder);
  }
  uncategorized.sort(sortByOrder);

  return { groups, uncategorized };
}

/** @deprecated Use groupMembersByCategory */
export const groupGridMembersByCategory = groupMembersByCategory;

function profileImageUrl(
  image: Parameters<typeof urlFor>[0] | null,
  width: number,
) {
  if (!image) return null;
  return urlFor(image).width(width).quality(85).url();
}

function FeaturedDoctorSection({
  member,
  imagePriority,
  embedded = false,
}: {
  member: TeamMember;
  imagePriority?: boolean;
  embedded?: boolean;
}) {
  const mainUrl = profileImageUrl(member.profileImage, 960);
  const name = member.name ?? "Team member";
  const alt =
    (member.profileImage as { alt?: string } | null)?.alt?.trim() || name;

  const content = (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex shrink-0 flex-col gap-6 lg:w-[480px]">
          <div className="relative h-[28rem] w-full overflow-hidden rounded-xl bg-slate-100 md:h-[32rem]">
            {mainUrl ? (
              <Image
                src={mainUrl}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority={imagePriority}
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                Add a profile image in Sanity
              </div>
            )}
          </div>
          {member.credentialImages && member.credentialImages.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {member.credentialImages.map((img, i) => {
                const url = profileImageUrl(img, 256);
                const credAlt =
                  (img as { alt?: string })?.alt?.trim() ||
                  `Credential ${i + 1}`;
                return url ? (
                  <div
                    key={`${member._id}-cred-${i}`}
                    className="relative h-28 w-28 shrink-0 md:h-32 md:w-32"
                  >
                    <Image
                      src={url}
                      alt={credAlt}
                      fill
                      className="object-contain"
                      sizes="128px"
                      unoptimized
                    />
                  </div>
                ) : null;
              })}
            </div>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {name}
          </h2>
          {member.role ? (
            <p className="mt-1 font-bold text-slate-600">{member.role}</p>
          ) : null}
          {member.bio && member.bio.length > 0 ? (
            <div className="bio">
              <PortableText value={member.bio} components={bioComponents} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div className="border-t border-slate-200 bg-white">{content}</div>
    );
  }

  return (
    <section className="border-t border-slate-200 bg-white">{content}</section>
  );
}

function ProfileSection({
  member,
  embedded = false,
}: {
  member: TeamMember;
  embedded?: boolean;
}) {
  const mainUrl = profileImageUrl(member.profileImage, 800);
  const name = member.name ?? "Team member";
  const alt =
    (member.profileImage as { alt?: string } | null)?.alt?.trim() || name;

  const content = (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="relative h-80 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-96 lg:w-[380px]">
          {mainUrl ? (
            <Image
              src={mainUrl}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 380px, 100vw"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Add a profile image in Sanity
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {name}
          </h2>
          {member.role ? (
            <p className="mt-1 font-bold text-slate-600">{member.role}</p>
          ) : null}
          {member.bio && member.bio.length > 0 ? (
            <PortableText value={member.bio} components={bioComponents} />
          ) : null}
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div className="border-t border-slate-200 bg-white">{content}</div>
    );
  }

  return (
    <section className="border-t border-slate-200 bg-white">{content}</section>
  );
}

function TeamMemberGridCards({
  members,
  embedded = false,
  nested = false,
}: {
  members: TeamMember[];
  embedded?: boolean;
  nested?: boolean;
}) {
  if (members.length === 0) return null;

  const cards = members.map((member) => {
    const imgUrl = profileImageUrl(member.profileImage, 768);
    const name = member.name ?? "Team member";
    const alt =
      (member.profileImage as { alt?: string } | null)?.alt?.trim() || name;
    return (
      <div
        key={member._id}
        className="flex flex-col items-center text-center"
      >
        <div className="relative h-80 w-80 overflow-hidden rounded-xl bg-slate-200 md:h-96 md:w-96">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 384px, 320px"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-sm text-slate-500">
              Add a profile image in Sanity
            </div>
          )}
        </div>
        <p className="mt-4 text-lg font-semibold text-slate-900">{name}</p>
        {member.role ? <p className="text-slate-600">{member.role}</p> : null}
        {member.shortSummary ? (
          <p className="mt-2 max-w-sm text-sm text-slate-600 leading-relaxed">
            {member.shortSummary}
          </p>
        ) : null}
      </div>
    );
  });

  const gridInner = (
    <div
      className={
        nested
          ? "mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12"
          : "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12"
      }
    >
      {cards}
    </div>
  );

  if (nested) {
    return gridInner;
  }

  const grid = (
    <div
      className={
        embedded
          ? "mx-auto max-w-6xl px-6 pb-16 md:pb-20"
          : "mx-auto max-w-6xl px-6 py-16 md:py-20"
      }
    >
      {gridInner}
    </div>
  );

  if (embedded) {
    return <div className="border-t border-slate-200">{grid}</div>;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50/50">
      {grid}
    </section>
  );
}

function CategoryTeamSection({
  category,
  members,
  betweenFeaturedAndProfiles,
  youtubeInsertedRef,
  imagePriorityRef,
}: {
  category: TeamCategory;
  members: TeamMember[];
  betweenFeaturedAndProfiles: ReactNode;
  youtubeInsertedRef: { current: boolean };
  imagePriorityRef: { current: boolean };
}) {
  const blocks: ReactNode[] = [];
  let gridBatch: TeamMember[] = [];

  const flushGridBatch = () => {
    if (gridBatch.length === 0) return;
    blocks.push(
      <TeamMemberGridCards
        key={`${category._id}-grid-${blocks.length}`}
        members={gridBatch}
        embedded
      />,
    );
    gridBatch = [];
  };

  for (const member of members) {
    const layout = member.layoutVariant ?? "grid";

    if (layout === "grid") {
      gridBatch.push(member);
      continue;
    }

    flushGridBatch();

    if (layout === "featured") {
      const priority = imagePriorityRef.current;
      if (imagePriorityRef.current) imagePriorityRef.current = false;
      blocks.push(
        <FeaturedDoctorSection
          key={member._id}
          member={member}
          imagePriority={priority}
          embedded
        />,
      );
      if (!youtubeInsertedRef.current && betweenFeaturedAndProfiles) {
        youtubeInsertedRef.current = true;
        blocks.push(
          <div key={`${category._id}-youtube-after-featured`}>
            {betweenFeaturedAndProfiles}
          </div>,
        );
      }
    } else if (layout === "profile") {
      blocks.push(
        <ProfileSection key={member._id} member={member} embedded />,
      );
    }
  }

  flushGridBatch();

  return (
    <section className="border-t border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-slate-900 md:text-4xl">
          {category.title ?? "Team"}
        </h2>
      </div>
      {blocks}
    </section>
  );
}

function UncategorizedTeamSections({
  members,
  betweenFeaturedAndProfiles,
  youtubeInsertedRef,
  imagePriorityRef,
}: {
  members: TeamMember[];
  betweenFeaturedAndProfiles: ReactNode;
  youtubeInsertedRef: { current: boolean };
  imagePriorityRef: { current: boolean };
}) {
  if (members.length === 0) return null;

  const { featured, profiles, grid } = partitionTeamMembers(members);

  return (
    <>
      {featured.map((member) => {
        const priority = imagePriorityRef.current;
        if (imagePriorityRef.current) imagePriorityRef.current = false;
        return (
          <FeaturedDoctorSection
            key={member._id}
            member={member}
            imagePriority={priority}
          />
        );
      })}
      {!youtubeInsertedRef.current &&
        featured.length > 0 &&
        betweenFeaturedAndProfiles && (
          <>
            {(() => {
              youtubeInsertedRef.current = true;
              return betweenFeaturedAndProfiles;
            })()}
          </>
        )}
      {profiles.map((member) => (
        <ProfileSection key={member._id} member={member} />
      ))}
      {grid.length > 0 ? (
        <section className="border-t border-slate-200 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-slate-900 md:text-4xl">
              Our Team
            </h2>
            <TeamMemberGridCards members={grid} nested />
          </div>
        </section>
      ) : null}
    </>
  );
}

/**
 * Renders Sanity-driven team sections. Pass `betweenFeaturedAndProfiles` for the
 * YouTube block so it stays after the first featured doctor on the page.
 */
export function AboutUsTeamFromSanity({
  members,
  betweenFeaturedAndProfiles,
}: {
  members: TeamMember[];
  betweenFeaturedAndProfiles: ReactNode;
}) {
  const { groups, uncategorized } = groupMembersByCategory(members);
  const youtubeInsertedRef = { current: false };
  const imagePriorityRef = { current: true };

  return (
    <>
      {groups.map(({ category, members: categoryMembers }) => (
        <CategoryTeamSection
          key={category._id}
          category={category}
          members={categoryMembers}
          betweenFeaturedAndProfiles={betweenFeaturedAndProfiles}
          youtubeInsertedRef={youtubeInsertedRef}
          imagePriorityRef={imagePriorityRef}
        />
      ))}
      <UncategorizedTeamSections
        members={uncategorized}
        betweenFeaturedAndProfiles={betweenFeaturedAndProfiles}
        youtubeInsertedRef={youtubeInsertedRef}
        imagePriorityRef={imagePriorityRef}
      />
    </>
  );
}
