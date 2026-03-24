import Image from "next/image";
import Link from "next/link";

export type MoreInformationItem = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  /** Use "#" until a destination URL is ready. */
  href: string;
};

type MoreInformationCardGridProps = {
  items: MoreInformationItem[];
  className?: string;
  headingClassName?: string;
};

export function MoreInformationCardGrid({
  items,
  className = "",
  headingClassName = "",
}: MoreInformationCardGridProps) {
  return (
    <section className={`bg-slate-50/90 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          className={`text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl ${headingClassName}`}
        >
          More Information
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition group-hover:opacity-95"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="border-t border-slate-200 px-3 py-4 text-center">
                  <span className="text-sm font-bold leading-snug text-slate-900 md:text-[15px]">
                    {item.label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
