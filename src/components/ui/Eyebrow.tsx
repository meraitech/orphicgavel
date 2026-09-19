import { EYEBROW_TEXT } from "@/components/ui/tokens";
import type { ReactNode } from "react";

/** Accent eyebrow label with square marker. */
export function Eyebrow({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}): ReactNode {
  return (
    <p className={`${EYEBROW_TEXT} ${centered ? "justify-center" : ""}`.trim()}>
      <span aria-hidden="true" className="bg-accent h-1.5 w-1.5" />
      {children}
    </p>
  );
}
