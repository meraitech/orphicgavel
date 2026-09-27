/**
 * Design-system control center.
 *
 * Single source of truth for layout widths, type rhythms, and surface
 * styles. To audit or change the site width, edit the values here —
 * no `max-w-*`, eyebrow, card, or pill classes should live outside
 * `src/components/ui/`.
 */

/** Absolute site-wide maximum width. Nothing may exceed this. */
export const MAX_WIDTH = "max-w-7xl";

/** Named container widths. `default` is the site maximum. */
export const WIDTHS = {
  /** Reading measure for prose-heavy blocks. */
  narrow: "max-w-3xl",
  /** Compact floating UI (e.g. bottom nav pill). */
  compact: "max-w-2xl",
  /** Site maximum — default for all new sections and pages. */
  default: MAX_WIDTH,
} as const;

export type ContainerSize = keyof typeof WIDTHS;

/** Horizontal page padding, applied by `Container`. */
export const PAGE_PADDING_X = "px-6 sm:px-10";

/** Top padding that respects notched-device safe areas. */
export const PAGE_PADDING_TOP = "pt-[max(3rem,env(safe-area-inset-top))] sm:pt-12";

/** Bottom clearance so the fixed nav pill never covers content. */
export const PAGE_PADDING_BOTTOM = "pb-32";

/** Accent eyebrow label (mono + square marker). */
export const EYEBROW_TEXT =
  "text-accent flex items-center gap-2 font-mono text-xs tracking-tight";

/** Page hero title. */
export const HERO_TITLE =
  "text-foreground mt-5 text-[clamp(2rem,7vw,3.5rem)] font-semibold tracking-tight text-balance";

/** Page hero lead paragraph. */
export const HERO_LEAD =
  "text-muted-foreground mt-5 max-w-xl text-[clamp(1rem,3.5vw,1.125rem)] leading-relaxed text-pretty";

/** Centered hero title (home globe section). */
export const HERO_TITLE_CENTER =
  "text-foreground mt-5 text-[clamp(1.75rem,6vw,3rem)] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl";

/** Centered hero lead (home globe section). */
export const HERO_LEAD_CENTER =
  "text-muted-foreground mx-auto mt-5 max-w-md text-[clamp(1rem,3.5vw,1.125rem)] leading-relaxed text-pretty sm:text-lg";

/** Section heading. */
export const SECTION_TITLE =
  "text-foreground text-xl font-semibold tracking-tight sm:text-2xl";

/** Muted body copy under a section heading. */
export const SECTION_DESC = "text-muted-foreground mt-2 leading-relaxed";

/** Numbered-list marker (mono index). */
export const SECTION_INDEX = "text-muted-foreground font-mono text-xs";

/** Surface card. */
export const CARD = "border-border bg-card rounded-lg border p-5";

/** Card title. */
export const CARD_TITLE = "text-foreground text-base font-semibold";

/** Card body copy. */
export const CARD_DESC = "text-muted-foreground mt-2 text-sm leading-relaxed";

/** Small status pill (e.g. "In development"). */
export const STATUS_PILL =
  "text-muted-foreground border-border bg-muted rounded-full border px-2.5 py-1 font-mono text-[11px] whitespace-nowrap";

/** Dashed empty-state box. */
export const EMPTY_STATE =
  "border-border mt-6 rounded-lg border border-dashed p-8 text-center";

/** Empty-state title. */
export const EMPTY_STATE_TITLE = "text-foreground text-sm font-medium";

/** Profile photo/monogram tile. Swap the monogram for an `img` when portraits arrive. */
export const PROFILE_TILE =
  "bg-muted text-twilight-blue border-muted relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border text-4xl";

/** Profile card title (person or company name). */
export const PROFILE_TITLE = "text-foreground text-base font-semibold";

/** Profile card subtitle (role or stage). */
export const PROFILE_SUBTITLE = "text-muted-foreground mt-1 font-mono text-xs";

/** Profile card description. */
export const PROFILE_DESC = "text-muted-foreground mt-2 text-sm leading-relaxed";

/** Bordered key/value row. */
export const ROW =
  "border-border flex items-baseline justify-between gap-6 border-b py-5 first:border-t";

/** Row label (mono). */
export const ROW_LABEL = "text-muted-foreground font-mono text-xs";

/** Row value. Right-aligned since it sits on the right side of the row. */
export const ROW_VALUE =
  "text-foreground text-right text-lg font-medium tracking-tight";

/** Simple link row (no label). */
export const LINK_ROW = "border-border border-b py-4 first:border-t";

/** Simple link row anchor. */
export const LINK_ROW_LINK =
  "text-foreground/80 hover:text-foreground text-base transition-colors";
