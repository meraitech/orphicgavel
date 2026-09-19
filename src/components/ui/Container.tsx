import { WIDTHS, type ContainerSize } from "@/components/ui/tokens";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** Width preset. Defaults to the site maximum (`max-w-7xl`). */
  size?: ContainerSize;
  className?: string;
};

/**
 * Centered width-capped wrapper. Use for every new section and page —
 * nothing outside `ui/` should declare its own `max-w-*`.
 */
export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps): ReactNode {
  return (
    <div className={`mx-auto w-full ${WIDTHS[size]} ${className}`.trim()}>
      {children}
    </div>
  );
}
