import {
  PROFILE_DESC,
  PROFILE_SUBTITLE,
  PROFILE_TILE,
  PROFILE_TITLE,
} from "@/components/ui/tokens";
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

type ProfileCardProps = {
  initials?: string;
  title: string;
  subtitle: string;
  desc?: string;
};

/**
 * Shared profile card used by both Teams and Investments — monogram tile
 * + title + subtitle, with an optional description. Pass `title` and the
 * monogram is derived automatically unless `initials` is given. To use a
 * real photo, replace the tile content with an `img`.
 */
export function ProfileCard({
  initials,
  title,
  subtitle,
  desc,
}: ProfileCardProps): ReactNode {
  return (
    <div>
      <div className={PROFILE_TILE} aria-hidden="true">
        {initials ?? initialsOf(title)}
      </div>
      <p className={`${PROFILE_TITLE} mt-4`}>{title}</p>
      <p className={PROFILE_SUBTITLE}>{subtitle}</p>
      {desc !== undefined && <p className={PROFILE_DESC}>{desc}</p>}
    </div>
  );
}
