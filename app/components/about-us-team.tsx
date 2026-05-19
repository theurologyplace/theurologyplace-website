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

const SECTION_TITLE =
  "text-3xl font-bold tracking-tight text-slate-900 md:text-4xl";
const SECTION_ACCENT =
  "mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-400";
const CARD_SURFACE =
  "rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-100";
const IMAGE_FRAME =
  "overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80";

const bioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-slate-600 first:mt-4 md:text-lg">
        {children}
      </p>
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

/** Row widths for team card grids (max 3 per row; 4 → 2+2, 5 → 3+2, etc.). */
function getTeamGridRowSizes(count: number): number[] {
  if (count <= 0) return [];
  const presets: Record<number, number[]> = {
    1: [1],
    2: [2],
    3: [3],
    4: [2, 2],
    5: [3, 2],
    6: [3, 3],
    7: [3, 2, 2],
    8: [3, 3, 2],
    9: [3, 3, 3],
  };
  if (presets[count]) return presets[count];

  const rows: number[] = [];
  let remaining = count;
  while (remaining > 0) {
    if (remaining === 4) {
      rows.push(2, 2);
      break;
    }
    if (remaining === 5) {
      rows.push(3, 2);
      break;
    }
    if (remaining === 1 && rows.length > 0) {
      const last = rows.pop()!;
      if (last === 3) {
        rows.push(2, 2);
      } else {
        rows.push(last, 1);
      }
      break;
    }
    const take = Math.min(3, remaining);
    rows.push(take);
    remaining -= take;
  }
  return rows;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <h2 className={SECTION_TITLE}>{title}</h2>
      <div className={SECTION_ACCENT} aria-hidden />
    </div>
  );
}

function MemberName({ name, className = "" }: { name: string; className?: string }) {
  return (
    <h3
      className={`text-xl font-bold tracking-tight text-slate-900 md:text-2xl ${className}`}
    >
      {name}
    </h3>
  );
}

function MemberRole({ role }: { role: string }) {
  return (
    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue-600 md:text-base">
      {role}
    </p>
  );
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

  const inner = (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      {showImageColumn ? (
        <div className="flex shrink-0 flex-col gap-5 lg:w-[440px]">
          {mainUrl ? (
            <div
              className={`relative h-[26rem] w-full md:h-[30rem] ${IMAGE_FRAME}`}
            >
              <Image
                src={mainUrl}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 440px, 100vw"
                priority={imagePriority}
                unoptimized
              />
            </div>
          ) : null}
          {credentialUrls.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5">
              {credentialUrls.map((cred) => (
                <div
                  key={cred.key}
                  className="relative h-24 w-24 shrink-0 md:h-28 md:w-28"
                >
                  <Image
                    src={cred.url}
                    alt={cred.alt}
                    fill
                    className="object-contain p-1"
                    sizes="112px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <MemberName name={name} />
        {member.role ? <MemberRole role={member.role} /> : null}
        {member.bio && member.bio.length > 0 ? (
          <div className="bio mt-4">
            <PortableText value={member.bio} components={bioComponents} />
          </div>
        ) : null}
      </div>
    </div>
  );

  const content = embedded ? (
    <div className={`${CARD_SURFACE} p-6 md:p-8`}>{inner}</div>
  ) : (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className={`${CARD_SURFACE} p-6 md:p-10`}>{inner}</div>
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

  const inner = (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      {mainUrl ? (
        <div
          className={`relative h-72 w-full shrink-0 md:h-80 lg:w-[340px] ${IMAGE_FRAME}`}
        >
          <Image
            src={mainUrl}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 340px, 100vw"
            unoptimized
          />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <MemberName name={name} />
        {member.role ? <MemberRole role={member.role} /> : null}
        {member.bio && member.bio.length > 0 ? (
          <div className="mt-4">
            <PortableText value={member.bio} components={bioComponents} />
          </div>
        ) : null}
      </div>
    </div>
  );

  const content = embedded ? (
    <div className={`${CARD_SURFACE} p-6 md:p-8`}>{inner}</div>
  ) : (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className={`${CARD_SURFACE} p-6 md:p-10`}>{inner}</div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return <section className="bg-white">{content}</section>;
}

function TeamMemberGridCard({ member }: { member: TeamMember }) {
  const imgUrl = profileImageUrl(member.profileImage, 768);
  const name = member.name ?? "Team member";
  const alt =
    (member.profileImage as { alt?: string } | null)?.alt?.trim() || name;

  return (
    <div className="flex w-52 flex-col items-center text-center sm:w-56 md:w-64">
      {imgUrl ? (
        <div
          className={`relative mb-5 h-56 w-56 md:h-64 md:w-64 ${IMAGE_FRAME}`}
        >
          <Image
            src={imgUrl}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 256px, 224px"
            unoptimized
          />
        </div>
      ) : null}
      <MemberName name={name} className={imgUrl ? "" : "text-lg md:text-xl"} />
      {member.role ? (
        <p className="mt-2 text-sm text-slate-600">{member.role}</p>
      ) : null}
      {member.shortSummary ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {member.shortSummary}
        </p>
      ) : null}
    </div>
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

  const rowSizes = getTeamGridRowSizes(members.length);
  const rows: TeamMember[][] = [];
  let offset = 0;
  for (const size of rowSizes) {
    rows.push(members.slice(offset, offset + size));
    offset += size;
  }

  const gridInner = (
    <div className="flex w-full flex-col items-center gap-y-10 md:gap-y-12">
      {rows.map((rowMembers, rowIndex) => {
        const count = rowMembers.length;
        const rowGridClass =
          count === 1
            ? "mx-auto grid max-w-xs grid-cols-1 justify-items-center"
            : count === 2
              ? "mx-auto grid w-full max-w-lg grid-cols-2 justify-items-center gap-x-8 md:max-w-xl md:gap-x-12"
              : "mx-auto grid w-full max-w-4xl grid-cols-3 justify-items-center gap-x-6 md:max-w-5xl md:gap-x-10 lg:gap-x-14";
        return (
          <div key={`row-${rowIndex}`} className={rowGridClass}>
            {rowMembers.map((member) => (
              <TeamMemberGridCard key={member._id} member={member} />
            ))}
          </div>
        );
      })}
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

  return <section className="bg-slate-50/80">{grid}</section>;
}

function CategoryTeamSection({
  category,
  members,
  imagePriorityRef,
  variantIndex,
}: {
  category: TeamCategory;
  members: TeamMember[];
  imagePriorityRef: { current: boolean };
  variantIndex: number;
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

  const bgClass = variantIndex % 2 === 0 ? "bg-slate-50/80" : "bg-white";

  return (
    <section className={`${bgClass} py-12 md:py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={category.title ?? "Team"} />
        <div className="flex flex-col gap-8 md:gap-10">{blocks}</div>
      </div>
    </section>
  );
}

function UncategorizedTeamSections({
  members,
  imagePriorityRef,
  variantIndex,
}: {
  members: TeamMember[];
  imagePriorityRef: { current: boolean };
  variantIndex: number;
}) {
  if (members.length === 0) return null;

  const { featured, profiles, grid } = partitionTeamMembers(members);
  const bgClass = variantIndex % 2 === 0 ? "bg-slate-50/80" : "bg-white";

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
        <section className={`${bgClass} py-12 md:py-16`}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Our Team" />
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
    <div>
      {groups.map(({ category, members: categoryMembers }, index) => (
        <CategoryTeamSection
          key={category._id}
          category={category}
          members={categoryMembers}
          imagePriorityRef={imagePriorityRef}
          variantIndex={index}
        />
      ))}
      <UncategorizedTeamSections
        members={uncategorized}
        imagePriorityRef={imagePriorityRef}
        variantIndex={groups.length}
      />
      {afterAllMembers}
    </div>
  );
}
