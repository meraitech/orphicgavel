import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
};

/** Pill call-to-action link. */
export function Button({
  children,
  href,
  variant = "solid",
  className = "",
}: ButtonProps): ReactNode {
  const styles =
    variant === "solid"
      ? "bg-accent text-accent-foreground hover:bg-accent-strong"
      : "border-border text-foreground border hover:bg-muted";
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-7 text-base font-semibold transition-opacity ${styles} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
