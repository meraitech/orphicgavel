import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfileCard, ProfileGrid } from "@/components/ui/Profile";
import {
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_TOP,
  PAGE_PADDING_X,
  SECTION_INDEX,
} from "@/components/ui/tokens";

export const metadata: Metadata = {
  title: "About — Orphic Gavel",
  description:
    "Founded in 2026, PT Orphic Gavel Corp is an Indonesian holding company building products and backing founders — meet the team.",
};

const WHO_WE_ARE = [
  "In 2026, Orphic was founded on a single conviction: the next generation of great companies will be built by founders in Indonesia and beyond — and they deserve more than capital. They deserve a partner that builds alongside them.",
  "That is why Orphic works on two tracks. First, our official products — software we design, build, and operate ourselves, so we never lose touch with what it takes to ship. Second, our investments — backing early companies with hands-on help from people who have done the work: product, engineering, and go-to-market support at every stage.",
  "We invest from seed to growth across technology sectors — AI, consumer, enterprise, fintech, infrastructure, and more. We believe the future belongs to builders, and our job is to make sure they have what they need to build it.",
];

// TODO: replace monogram tiles with real portraits in `public/team/`.
const TEAM = [
  {
    initials: "YH",
    name: "Yusuf Hidral",
    role: "CEO",
    photo: {
      src: "/img/teams/ceo.jpeg",
      alt: "Yusuf Hidral, CEO of Orphic Gavel",
    },
  },
  {
    initials: "RM",
    name: "Ranaufal Muha",
    role: "CTO",
    photo: {
      src: "/img/teams/cto.webp",
      alt: "Ranaufal Muha, CTO of Orphic Gavel",
    },
  },
  {
    initials: "FA",
    name: "Fajri Annafi",
    role: "COO",
    photo: {
      src: "/img/teams/coo.jpeg",
      alt: "Fajri Annafi, COO of Orphic Gavel",
    },
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <Container
        className={`flex min-h-0 flex-1 flex-col ${PAGE_PADDING_X} ${PAGE_PADDING_TOP} ${PAGE_PADDING_BOTTOM}`}
      >
        <PageHero
          eyebrow="About"
          title="PT Orphic Gavel Corp"
          lead="A holding company from Indonesia, founded in 2026 — building official products and backing the next generation of founders."
        />

        <div className="mt-12 flex flex-col gap-10 sm:mt-16">
          <section>
            <p className={SECTION_INDEX}>01</p>
            <div className="mt-2">
              <SectionHeading title="Who we are" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {WHO_WE_ARE.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <p className={SECTION_INDEX}>02</p>
            <div className="mt-2">
              <SectionHeading
                title="The Power of Our Network"
                desc="Most firms give founders cash and advice. We built Orphic differently, with two teams working for you: first, investors who have built before — founders and engineers who have already solved the problems you are about to face. Second, operators who clear the path — product, talent, and finance support dedicated to the specific challenges of every stage."
              />
            </div>
            <ProfileGrid>
              {TEAM.map((member) => (
                <ProfileCard
                  key={member.name}
                  initials={member.initials}
                  image={member.photo}
                  title={member.name}
                  subtitle={member.role}
                />
              ))}
            </ProfileGrid>
          </section>
        </div>
      </Container>
    </PageShell>
  );
}
