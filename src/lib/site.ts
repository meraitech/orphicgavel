/**
 * Site-wide identity and SEO source of truth.
 *
 * Canonical URL, brand name, default description, and keywords live here.
 * `layout.tsx`, `robots.ts`, and `sitemap.ts` all read from this module —
 * update the URL once the production domain is known.
 */

// TODO: replace with the production domain (e.g. https://orphicgavel.co.id).
export const SITE_URL = "https://orphicgavel.com";

export const siteConfig = {
  name: "Orphic Gavel",
  legalName: "PT Orphic Gavel Corp",
  description:
    "PT Orphic Gavel Corp is an Indonesian holding company building official products and backing early-stage founders and startups.",
  url: SITE_URL,
  locale: "en_US",
  keywords: [
    "Orphic Gavel",
    "PT Orphic Gavel Corp",
    "holding company Indonesia",
    "Indonesian holding company",
    "startup investment Indonesia",
    "early-stage investment",
  ],
} as const;
