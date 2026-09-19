import { Eyebrow } from "@/components/ui/Eyebrow";
import { HERO_LEAD, HERO_TITLE } from "@/components/ui/tokens";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
};

/** Standard page header: eyebrow + title + optional lead paragraph. */
export function PageHero({
  eyebrow,
  title,
  lead,
  align = "left",
}: PageHeroProps): ReactNode {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const leadClass =
    align === "center" ? `${HERO_LEAD} mx-auto` : HERO_LEAD;
  return (
    <div className={alignClass}>
      <Eyebrow centered={align === "center"}>{eyebrow}</Eyebrow>
      <h1 className={HERO_TITLE}>{title}</h1>
      {lead !== undefined && <p className={leadClass}>{lead}</p>}
    </div>
  );
}
