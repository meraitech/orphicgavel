import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PageShell } from "@/components/ui/PageShell";
import { Row, RowList, LinkRow } from "@/components/ui/Rows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_TOP,
  PAGE_PADDING_X,
} from "@/components/ui/tokens";

export const metadata: Metadata = {
  title: "Contact — Orphic Gavel",
  description:
    "Get in touch with PT Orphic Gavel Corp — founders, partners, and general inquiries.",
};

// TODO: replace with real contact details when ready.
const EMAIL = "hello@orphicgavel.com";

const SOCIALS = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <Container
        className={`flex min-h-0 flex-1 flex-col ${PAGE_PADDING_X} ${PAGE_PADDING_TOP} ${PAGE_PADDING_BOTTOM}`}
      >
        <PageHero
          eyebrow="Contact"
          title="Let's talk"
          lead="Founders, partners, or just curious — we would like to hear from you."
        />

        <div className="mt-12 sm:mt-16">
          <RowList>
            <Row label="Email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Row>
            <Row label="Location">Indonesia</Row>
          </RowList>
        </div>

        <div className="mt-12">
          <SectionHeading title="Elsewhere" />
          <ul className="mt-4 flex flex-col">
            {SOCIALS.map((social) => (
              <LinkRow key={social.name} href={social.href}>
                {social.name}
              </LinkRow>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Button href={`mailto:${EMAIL}`}>Email us</Button>
        </div>
      </Container>
    </PageShell>
  );
}
