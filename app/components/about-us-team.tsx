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
  const credentialUrls =
    member.credentialImages
      ?.map((img, i) => ({
        url: profileImageUrl(img, 256),
        alt: (img as { alt?: string })?.alt?.trim() || `Credential ${i + 1}`,
        key: `${member._id}-cred-${i}`,
      }))
      .filter((c): c is { url: string; alt: string; key: string } =>
        Boolean(c.url),
      ) ?? [];
  const showImageColumn = Boolean(mainUrl) || credentialUrls.length > 0;

  const content = (
    <div
      className={
        embedded
          ? "mx-auto max-w-6xl px-6"
          : "mx-auto max-w-6xl px-6 py-16 md:py-20"
      }
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        {showImageColumn ? (
          <div className="flex shrink-0 flex-col gap-6 lg:w-[480px]">
            {mainUrl ? (
              <div className="relative h-[28rem] w-full overflow-hidden rounded-xl bg-slate-100 md:h-[32rem]">
                <Image
                  src={mainUrl}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority={imagePriority}
                  unoptimized
                />
              </div>
            ) : null}
            {credentialUrls.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-6">
                {credentialUrls.map((cred) => (
                  <div
                    key={cred.key}
                    className="relative h-28 w-28 shrink-0 md:h-32 md:w-32"
                  >
                    <Image
                      src={cred.url}
                      alt={cred.alt}
                      fill
                      className="object-contain"
                      sizes="128px"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
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
    return content;
  }

  return <section className="bg-white">{content}</section>;
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
    <div
      className={
        embedded
          ? "mx-auto max-w-6xl px-6"
          : "mx-auto max-w-6xl px-6 py-16 md:py-20"
      }
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        {mainUrl ? (
          <div className="relative h-80 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-96 lg:w-[380px]">
            <Image
              src={mainUrl}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 380px, 100vw"
              unoptimized
            />
          </div>
        ) : null}
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
    return content;
  }

  return <section className="bg-white">{content}</section>;
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
        {imgUrl ? (
          <div className="relative h-80 w-80 overflow-hidden rounded-xl bg-slate-200 md:h-96 md:w-96">
            <Image
              src={imgUrl}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 384px, 320px"
              unoptimized
            />
          </div>
        ) : null}
        <p
          className={`text-lg font-semibold text-slate-900${imgUrl ? " mt-4" : ""}`}
        >
          {name}
        </p>
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
          ? "flex flex-wrap justify-center gap-x-16 gap-y-10 lg:gap-x-20"
          : "flex flex-wrap justify-center gap-x-16 gap-y-10 lg:gap-x-20"
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
        embedded ? "mx-auto max-w-6xl px-6" : "mx-auto max-w-6xl px-6 py-16 md:py-20"
      }
    >
      {gridInner}
    </div>
  );

  if (embedded) {
    return grid;
  }

  return <section className="bg-slate-50/50">{grid}</section>;
}

function CategoryTeamSection({
  category,
  members,
  imagePriorityRef,
}: {
  category: TeamCategory;
  members: TeamMember[];
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
    } else if (layout === "profile") {
      blocks.push(
        <ProfileSection key={member._id} member={member} embedded />,
      );
    }
  }

  flushGridBatch();

  return (
    <section className="bg-slate-50/50 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight text-slate-900 md:mb-12 md:text-4xl">
          {category.title ?? "Team"}
        </h2>
        <div className="flex flex-col gap-10 md:gap-12">{blocks}</div>
      </div>
    </section>
  );
}

function UncategorizedTeamSections({
  members,
  imagePriorityRef,
}: {
  members: TeamMember[];
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
      {profiles.map((member) => (
        <ProfileSection key={member._id} member={member} />
      ))}
      {grid.length > 0 ? (
        <section className="bg-slate-50/50 py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight text-slate-900 md:mb-12 md:text-4xl">
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
 * Renders Sanity-driven team sections. Pass `afterAllMembers` to append content
 * (e.g. a YouTube block) after every team section on the page.
 */
export function AboutUsTeamFromSanity({
  members,
  afterAllMembers,
}: {
  members: TeamMember[];
  afterAllMembers?: ReactNode;
}) {
  const { groups, uncategorized } = groupMembersByCategory(members);
  const imagePriorityRef = { current: true };

  return (
    <>
      {groups.map(({ category, members: categoryMembers }) => (
        <CategoryTeamSection
          key={category._id}
          category={category}
          members={categoryMembers}
          imagePriorityRef={imagePriorityRef}
        />
      ))}
      <UncategorizedTeamSections
        members={uncategorized}
        imagePriorityRef={imagePriorityRef}
      />
      {afterAllMembers}
    </>
  );
}
