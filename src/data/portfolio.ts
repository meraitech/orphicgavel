/**
 * Portfolio single source of truth.
 *
 * Asset conventions (paths are absolute from `public/`):
 * - Official products: `/img/portfolio/official-products/*`
 * - Investments:       `/img/portfolio/investments/*`
 *
 * Each item carries three image fields:
 * - `logo`           — square mark (ProfileCard tile / globe fallback).
 * - `logoHorizontal` — wide lockup (MediaCard overlay strip).
 * - `background`     — full-bleed card background.
 *
 * Empty string means "asset not ready yet" — callers must fall back
 * (monogram tile / hide card art), never render a broken `<img>`.
 */

export type MapLocation = [number, number];

export type Product = {
  slug: string;
  name: string;
  href: string;
  logo: string;
  logoHorizontal: string;
  background: string;
  handle: string;
  location: MapLocation;
  initials: string;
};

export type Investment = {
  slug: string;
  name: string;
  handle: string;
  desc: string;
  stage: string;
  logo: string;
  logoHorizontal: string;
  background: string;
  location: MapLocation;
  initials: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "merai",
    name: "Merai",
    href: "https://merai.tech",
    logo: "/img/portfolio/official-products/merai-logo.png",
    logoHorizontal:
      "/img/portfolio/official-products/merai-logo-horizontal.webp",
    background: "/img/portfolio/official-products/merai-bg.jpg",
    handle: "@merai.tech",
    location: [-6.2, 106.8],
    initials: "M",
  },
];

// Investment `location`s are temporary spread placeholders so globe labels
// stay visible (all HQs are Indonesia-based and would cluster); replace
// with real HQ coords when ready.
export const INVESTMENTS: Investment[] = [
  {
    slug: "bareh-solok",
    name: "Bareh Solok",
    handle: "@barehsolok",
    desc: "Farm company producing rice in Solok, West Sumatra.",
    stage: "Seed · Early-stage",
    logo: "",
    logoHorizontal: "",
    background: "",
    location: [35.68, 139.69],
    initials: "BS",
  },
  {
    slug: "nuye",
    name: "Nuye",
    handle: "@nuye.design",
    desc: "Clothing brand with simple, clean essentials in the spirit of Uniqlo.",
    stage: "Seed · Early-stage",
    logo: "",
    logoHorizontal: "",
    background: "",
    location: [40.71, -74.0],
    initials: "N",
  },
  {
    slug: "legal-company-indonesia",
    name: "Legal Company Indonesia",
    handle: "@legal.company",
    desc: "Legal partner helping international companies enter and operate in Indonesia.",
    stage: "Seed · Early-stage",
    logo: "",
    logoHorizontal: "",
    background: "",
    location: [51.5, -0.12],
    initials: "LC",
  },
  {
    slug: "ekspor-company",
    name: "Ekspor Company",
    handle: "@annafiekspor",
    desc: "Export company moving Indonesian goods from Indonesia to international markets.",
    stage: "Seed · Early-stage",
    logo: "",
    logoHorizontal: "",
    background: "",
    location: [-33.87, 151.2],
    initials: "EC",
  },
];
