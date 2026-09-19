import {
  PROFILE_DESC,
  PROFILE_SUBTITLE,
  PROFILE_TILE,
  PROFILE_TITLE,
} from "@/components/ui/tokens";
import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Derive a tile monogram from a name — first letters of the first two
 * words ("Acme Labs" -> "AL", "Yusuf" -> "Y").
 */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/** Shared profile grid: 2 columns on phones, 3 on tablets, 4 max. */
export function ProfileGrid({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

type ProfileImage = {
  src: string;
  alt: string;
};

type ProfileCardProps = {
  initials?: string;
  image?: ProfileImage;
  title: string;
  subtitle: string;
  desc?: string;
};

/**
 * Shared profile card used by both Teams and Investments — photo (or
 * monogram fallback) tile + title + subtitle, with an optional
 * description. Pass `title` and the monogram is derived automatically
 * unless `initials` is given.
 */
export function ProfileCard({
  initials,
  image,
  title,
  subtitle,
  desc,
}: ProfileCardProps): ReactNode {
  return (
    <div>
      <div className={PROFILE_TILE}>
        {image !== undefined ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top"
          />
        ) : (
          <span aria-hidden="true">{initials ?? initialsOf(title)}</span>
        )}
      </div>
      <p className={`${PROFILE_TITLE} mt-4`}>{title}</p>
      <p className={PROFILE_SUBTITLE}>{subtitle}</p>
      {desc !== undefined && <p className={PROFILE_DESC}>{desc}</p>}
    </div>
  );
}
