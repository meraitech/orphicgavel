import Image from "next/image";
import type { ReactNode } from "react";

type MediaCardProps = {
  /** Product or company name (also used for a11y/SEO fallback text). */
  name: string;
  /** Full-bleed background image path. */
  bg: string;
  /** Overlay logo image path, shown on a scrim strip at the bottom. */
  logo: string;
  /** Destination URL. External links open in a new tab. */
  href: string;
  children?: ReactNode;
};

/**
 * Image-only link card: square 1:1, full-bleed background with a logo
 * overlaid at the bottom in front of the image. The name is exposed to
 * screen readers and crawlers via visually-hidden text.
 */
export function MediaCard({ name, bg, logo, href, children }: MediaCardProps): ReactNode {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${name} — opens ${href}${external ? " in a new tab" : ""}`}
      className="group relative block aspect-square w-full overflow-hidden rounded-lg"
    >
      <Image
        src={bg}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-blue-charcoal/90 via-blue-charcoal/25 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="relative h-4">
          <Image
            src={logo}
            alt=""
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 20vw"
            className="object-contain object-center"
          />
        </div>
        {children}
      </div>
      <span className="sr-only">{name}</span>
    </a>
  );
}
