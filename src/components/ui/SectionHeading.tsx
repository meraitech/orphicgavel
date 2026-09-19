import { SECTION_DESC, SECTION_TITLE } from "@/components/ui/tokens";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  desc?: ReactNode;
};

/** Standard section heading with optional muted description. */
export function SectionHeading({ title, desc }: SectionHeadingProps): ReactNode {
  return (
    <div>
      <h2 className={SECTION_TITLE}>{title}</h2>
      {desc !== undefined && <p className={SECTION_DESC}>{desc}</p>}
    </div>
  );
}
