import {
  CARD,
  CARD_DESC,
  CARD_TITLE,
  STATUS_PILL,
} from "@/components/ui/tokens";
import type { ReactNode } from "react";

/** Small status pill, e.g. "In development". */
export function StatusPill({ children }: { children: ReactNode }): ReactNode {
  return <span className={STATUS_PILL}>{children}</span>;
}

type CardProps = {
  title: ReactNode;
  desc?: ReactNode;
  badge?: ReactNode;
};

/**
 * Surface card rendered as a list item — always place inside a `ul`.
 */
export function Card({ title, desc, badge }: CardProps): ReactNode {
  return (
    <li className={CARD}>
      <div className="flex items-center justify-between gap-4">
        <h3 className={CARD_TITLE}>{title}</h3>
        {badge !== undefined && <StatusPill>{badge}</StatusPill>}
      </div>
      {desc !== undefined && <p className={CARD_DESC}>{desc}</p>}
    </li>
  );
}
