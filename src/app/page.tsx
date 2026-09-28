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
    images: [
      {
        url: "/orphic/logo/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Holding Company in Indonesia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Holding Company in Indonesia`,
    description: siteConfig.description,
    images: ["/orphic/logo/og.png"],
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/orphic/logo/og.png`,
  image: `${siteConfig.url}/orphic/logo/og.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower 2, 17th Floor, Jl. Jend. Sudirman Kav. 52-53",
    addressLocality: "Jakarta",
    postalCode: "12190",
    addressCountry: "ID",
  },
  email: "info@orphicgavel.com",
  faxNumber: "+62 21 515 7799",
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
