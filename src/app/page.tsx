import type { Metadata } from "next";
import { Creators } from "@/components/creators";
import { PageShell } from "@/components/ui/PageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Holding Company in Indonesia`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — Holding Company in Indonesia`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
};

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_JSON_LD),
        }}
      />
      <Creators />
    </PageShell>
  );
}
