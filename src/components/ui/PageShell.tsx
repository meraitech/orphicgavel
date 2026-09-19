import type { ReactNode } from "react";

/**
 * Standard page frame: fullscreen flex column + `main#main-content`.
 * Every route renders inside this so viewport behavior stays identical.
 */
export function PageShell({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="bg-background flex min-h-dvh w-screen flex-col font-sans">
      <main id="main-content" className="flex min-h-0 w-full flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
