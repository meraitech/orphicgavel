import {
  LINK_ROW,
  LINK_ROW_LINK,
  ROW,
  ROW_LABEL,
  ROW_VALUE,
} from "@/components/ui/tokens";
import type { ReactNode } from "react";

/** Bordered list wrapper for key/value rows. */
export function RowList({ children }: { children: ReactNode }): ReactNode {
  return <ul className="flex flex-col">{children}</ul>;
}

type RowProps = {
  label: ReactNode;
  href?: string;
  children: ReactNode;
};

/** Single bordered row: mono label on the left, value on the right. */
export function Row({ label, href, children }: RowProps): ReactNode {
  return (
    <li className={ROW}>
      <span className={ROW_LABEL}>{label}</span>
      {href !== undefined ? (
        <a href={href} className={`${ROW_VALUE} hover:underline`}>
          {children}
        </a>
      ) : (
        <span className={ROW_VALUE}>{children}</span>
      )}
    </li>
  );
}

type LinkRowProps = {
  href: string;
  children: ReactNode;
};

/** Bordered link row without a label — always place inside a `ul`. */
export function LinkRow({ href, children }: LinkRowProps): ReactNode {
  return (
    <li className={LINK_ROW}>
      <a href={href} className={LINK_ROW_LINK}>
        {children}
      </a>
    </li>
  );
}
