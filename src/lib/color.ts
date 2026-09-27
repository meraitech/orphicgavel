/**
 * Brand color bridge: CSS tokens (`src/styles/colors.css`) → cobe RGB tuples.
 *
 * cobe only accepts `[r, g, b]` floats, so this module reads the computed
 * values of `--globe-base`, `--globe-marker`, and `--globe-glow` at runtime.
 * Computed styles resolve `var()` / `color-mix()` to `rgb(...)`, hence the
 * parser handles both `rgb()` and `#hex`. Hardcoded fallbacks mirror the
 * CSS tokens exactly (dark-only theme).
 */

export type GlobeRGB = [number, number, number];

/** Fallbacks mirror `colors.css`: base = egyptian-blue, marker/glow = accent. */
export const GLOBE_FALLBACKS = {
  "--globe-base": "#0526af",
  "--globe-marker": "#004ee0",
  "--globe-glow": "#004ee0",
} as const;

function parseToRGB(value: string): GlobeRGB | null {
  const v = value.trim().toLowerCase();

  const rgb = v.match(
    /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+[\d.]+%?)?\s*\)$/
  );
  if (rgb) {
    return [
      Math.min(1, Number(rgb[1]) / 255),
      Math.min(1, Number(rgb[2]) / 255),
      Math.min(1, Number(rgb[3]) / 255),
    ];
  }

  const hex = v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = h
      .split("")
      .map((c) => c + c)
      .join("");
    return [
      parseInt(h.slice(0, 2), 16) / 255,
      parseInt(h.slice(2, 4), 16) / 255,
      parseInt(h.slice(4, 6), 16) / 255,
    ];
  }

  return null;
}

function tokenRGB(name: keyof typeof GLOBE_FALLBACKS): GlobeRGB {
  if (typeof window === "undefined" || typeof getComputedStyle === "undefined") {
    return parseToRGB(GLOBE_FALLBACKS[name]) as GlobeRGB;
  }
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return (
    (raw ? parseToRGB(raw) : null) ??
    (parseToRGB(GLOBE_FALLBACKS[name]) as GlobeRGB)
  );
}

/** Resolve the three globe colors from the live CSS tokens. */
export function globeColors(): {
  baseColor: GlobeRGB;
  markerColor: GlobeRGB;
  glowColor: GlobeRGB;
} {
  return {
    baseColor: tokenRGB("--globe-base"),
    markerColor: tokenRGB("--globe-marker"),
    glowColor: tokenRGB("--globe-glow"),
  };
}
