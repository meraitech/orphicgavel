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

const EMAIL = "info@orphicgavel.com";

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/orphicgavel/" },
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
            <Row label="Address">
              Indonesia Stock Exchange, Tower 2, 17th Floor,
              <br />
              Jl. Jend. Sudirman Kav. 52-53,
              <br />
              Jakarta 12190, INDONESIA
            </Row>
            <Row label="Fax" href="fax:+62215157799">
              +62 21 515 7799
            </Row>
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
