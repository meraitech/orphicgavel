import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MediaCard } from "@/components/ui/MediaCard";
import { PageHero } from "@/components/ui/PageHero";
import { PageShell } from "@/components/ui/PageShell";
import { ProfileCard, ProfileGrid } from "@/components/ui/Profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CARD_DESC,
  EMPTY_STATE,
  EMPTY_STATE_TITLE,
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_TOP,
  PAGE_PADDING_X,
} from "@/components/ui/tokens";

export const metadata: Metadata = {
  title: "Portfolio — Orphic Gavel",
  description:
    "The Orphic Gavel portfolio — official products we build and operate, plus investments in early companies.",
};

const PRODUCTS = [
  {
    name: "Merai",
    href: "https://merai.tech",
    bg: "/img/portfolio/official-products/merai-bg.jpg",
    logo: "/img/portfolio/official-products/merai-logo.webp",
  },
];

// TODO: replace with real investments once announced.
const INVESTMENTS: Array<{ name: string; desc: string; stage: string }> = [];

export default function PortfolioPage() {
  return (
    <PageShell>
      <Container
        className={`flex min-h-0 flex-1 flex-col ${PAGE_PADDING_X} ${PAGE_PADDING_TOP} ${PAGE_PADDING_BOTTOM}`}
      >
        <PageHero
          eyebrow="Portfolio"
          title="What we build and back"
          lead="Two tracks: official products we operate ourselves, and investments in founders we believe in."
        />

        <section className="mt-12 sm:mt-16">
          <SectionHeading
            title="Official products"
            desc="Software designed, built, and operated by Orphic."
          />
          <ProfileGrid>
            {PRODUCTS.map((product) => (
              <MediaCard
                key={product.name}
                name={product.name}
                href={product.href}
                bg={product.bg}
                logo={product.logo}
              />
            ))}
          </ProfileGrid>
        </section>

        <section className="mt-12 sm:mt-16">
          <SectionHeading
            title="Investments"
            desc="Our thesis is simple: back ambitious founders early, starting in Indonesia and expanding from there."
          />
          {INVESTMENTS.length === 0 ? (
            <div className={EMPTY_STATE}>
              <p className={EMPTY_STATE_TITLE}>
                No investments announced yet
              </p>
              <p className={CARD_DESC}>
                We are meeting founders now. If you are building something
                ambitious, reach out via the contact page.
              </p>
            </div>
          ) : (
            <ProfileGrid>
              {INVESTMENTS.map((investment) => (
                <ProfileCard
                  key={investment.name}
                  title={investment.name}
                  subtitle={investment.stage}
                  desc={investment.desc}
                />
              ))}
            </ProfileGrid>
          )}
        </section>
      </Container>
    </PageShell>
  );
}
