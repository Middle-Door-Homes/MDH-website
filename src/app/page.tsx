import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Container,
  CtaBand,
  DoorIcon,
  Eyebrow,
  FactRow,
  Heading,
  Intro,
  LogoRow,
  PhotoHero,
  Section,
  Split,
  Steps,
} from "@/components/ui";
import { TaxCalculator } from "@/components/calculator";

export const metadata: Metadata = {
  title: {
    absolute: "Middle Door Homes | 721 Exchange for Multifamily Owners",
  },
  description:
    "Middle Door Homes turns your multifamily equity into a passive stake in a diversified, professionally managed residential portfolio, through a §721 exchange with no capital gains at contribution.",
  alternates: { canonical: "/" },
};

const THREE_DOORS = [
  { label: "Sell", body: "30-40% of gains lost to tax", mdh: false },
  { label: "Hold", body: "Tenants, repairs, and debt stay your job", mdh: false },
  { label: "Middle Door", body: "Your full equity, working in a diversified portfolio", mdh: true },
];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Keep your equity working, without the work",
    body: "Contribute your building and receive ownership in a diversified portfolio of income-producing buildings: professional management, quarterly distributions, and no tax at contribution.",
    cta: "Learn how it works",
  },
  {
    href: "/brokers",
    eyebrow: "For brokers",
    title: "A real estate commission for representing your client's sale",
    body: "Represent your client's building sale through a 721 exchange. We work with licensed real estate brokers whose clients want a tax-deferred transition to passive ownership.",
    cta: "How brokers work with us",
  },
  {
    href: "/advisors",
    eyebrow: "For financial advisors",
    title: "A tax-efficient solution for your clients' real estate",
    body: "Help clients with embedded gains transition from active landlord to passive owner, without triggering a taxable event.",
    cta: "How advisors work with us",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Contribute your building",
    body: "Instead of selling, you contribute your building under Section 721 of the tax code. No capital gains tax is due at contribution.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "Your equity becomes ownership in a diversified portfolio of neighborhood buildings. You stay invested in what you know, without running any of it.",
  },
  {
    step: "03",
    title: "Collect ongoing distributions",
    body: "Our team handles all asset management and operations. You receive regular distributions from a diversified portfolio, with the long-term goal of growing income over time.",
  },
];

const FACTS = [
  { value: "0%", label: "Taxes at contribution" },
  { value: "8-12%", label: "Target annual return" },
  { value: "30,000+", label: "Units of team experience" },
];

const FIT = [
  "Own one or more 2-49 unit multifamily buildings",
  "Held 5+ years, with a large gain built up",
  "Want passive income and long-term upside",
  "Looking for a tax-efficient way out",
  "Ready to hand off the day-to-day",
];

const TEAM = [
  { name: "Jack Elzinga", title: "Managing Partner", photo: "/images/jack-elzinga.jpg" },
  { name: "Jose Torres", title: "Partner & CEO", photo: "/images/jose-torres.jpg" },
  { name: "Mike Rozovics", title: "Partner & EVP Operations", photo: "/images/mike-rozovics.jpg" },
  { name: "Bob Sievewright", title: "Principal, Acquisitions", photo: "/images/bob-sievewright.jpg" },
];

const LOGOS = [
  { name: "Home Partners of America", file: "home-partners.svg" },
  { name: "Invitation Homes", file: "invitation-homes.svg" },
  { name: "LaSalle Investment Management", file: "lasalle.svg" },
  { name: "BCG", file: "bcg.svg" },
  { name: "CBRE", file: "cbre.svg" },
  { name: "Landis", file: "landis.png" },
  { name: "Real Foundations", file: "real-foundations.svg" },
  { name: "Google", file: "google-wordmark.svg" },
  { name: "Stanford Business School", file: "stanford.svg" },
  { name: "Harvard University", file: "harvard.svg" },
];

export default function Home() {
  return (
    <main>
      <PhotoHero
        image="/images/hero-chicago-street.jpg"
        imageAlt="Tree-lined street of brick multifamily buildings"
        imagePosition="center 58%"
        title={<>Your building&rsquo;s next chapter</>}
        actions={
          <>
            <Button href="/contact" variant="light">
              Send us an address
            </Button>
            <Button href="#how-it-works" variant="outlineLight">
              How it works
            </Button>
          </>
        }
      >
        The middle door between selling and holding. Keep your equity, hand off the management, and defer the tax.
      </PhotoHero>

      {/* Three doors */}
      <Section>
        <Container>
          <Intro center eyebrow="A third option" title="Sell, hold, or the middle door">
            Selling costs you 30-40% of your gains. Holding keeps you a landlord. Contributing your
            building to Middle Door Homes does neither.
          </Intro>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-[var(--mdh-line)] bg-[var(--mdh-line)] md:grid-cols-3">
            {THREE_DOORS.map((door) => (
              <div
                key={door.label}
                className={`flex flex-col items-center px-6 py-7 text-center md:px-8 md:py-10 ${
                  door.mdh ? "bg-[var(--mdh-green)]" : "bg-white"
                }`}
              >
                <DoorIcon
                  open={door.mdh}
                  className={`h-14 w-10 md:h-20 md:w-14 ${door.mdh ? "text-[var(--mdh-brass-soft)]" : "text-[var(--mdh-subtle)]/70"}`}
                />
                <p
                  className={`mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] md:mt-6 ${
                    door.mdh ? "text-[var(--mdh-brass-soft)]" : "text-[var(--mdh-subtle)]"
                  }`}
                >
                  {door.label}
                </p>
                <p
                  className={`font-display mt-3 max-w-[18ch] text-[1.35rem] leading-snug ${
                    door.mdh ? "text-white" : "text-[var(--mdh-green)]"
                  }`}
                >
                  {door.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="stone">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Intro eyebrow="The 721 exchange" title="Three steps to passive ownership">
              A §721 exchange lets you contribute your building to a partnership for ownership units,
              with no capital gains or depreciation recapture at contribution. It is the same tool large
              REITs have used for decades to buy from owners who did not want to sell. What is new is
              applying it to buildings your size.
            </Intro>
            <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-md">
              <Image
                src="/images/nb-autumn-corner.jpg"
                alt="Brick apartment building on a tree-lined corner in autumn"
                fill
                quality={88}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:pt-24">
            <Steps items={HOW_IT_WORKS} />
            <FactRow facts={FACTS} className="mt-4" />
            <div className="mt-10">
              <Button href="/owners" variant="secondary">
                The full owner overview
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <TaxCalculator />

      {/* Team */}
      <Section tone="green">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <Intro dark eyebrow="Our team" title="Billions of dollars of institutional housing experience">
              Our team has operated 30,000+ units across some of the largest residential platforms in the
              country. We built Middle Door to bring that institutional playbook to multifamily owners, and
              to offer them a structure that, until now, only large real estate institutions used.
            </Intro>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {TEAM.map((m) => (
                <div key={m.name}>
                  <div className="relative aspect-square overflow-hidden rounded-md bg-white/5">
                    <Image src={m.photo} alt={m.name} fill quality={90} sizes="160px" className="object-cover object-top grayscale" />
                  </div>
                  <p className="mt-3 text-[0.95rem] font-semibold text-white">{m.name}</p>
                  <p className="mt-0.5 text-[0.78rem] leading-snug text-white/65">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 border-t border-white/15 pt-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/50">Team experience from</p>
            <div className="mt-6">
              <LogoRow logos={LOGOS} dark />
            </div>
            <Link href="/about" className="mt-8 inline-block text-[0.9rem] font-medium text-[var(--mdh-brass-soft)] hover:text-white">
              Meet the team &rarr;
            </Link>
          </div>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section>
        <Container>
          <Split sticky={false} eyebrow="Who this is for" title="Built for investors who have earned a better next chapter">
            <ul className="divide-y divide-[var(--mdh-line)] border-y border-[var(--mdh-line)]">
              {FIT.map((item) => (
                <li key={item} className="flex gap-4 py-4 text-[1.02rem] text-[var(--mdh-ink)]">
                  <span className="mt-0.5 text-[var(--mdh-brass)]" aria-hidden>
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Split>
        </Container>
      </Section>

      {/* Audience routing */}
      <Section tone="stone">
        <Container>
          <Intro title="Find your path" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-[var(--mdh-line)] bg-[var(--mdh-line)] md:grid-cols-3">
            {AUDIENCE_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="group flex flex-col bg-white p-7 hover:bg-[var(--mdh-parchment)] md:p-8">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <Heading as="h3" className="mt-3 !text-[1.35rem] !leading-snug">
                  {card.title}
                </Heading>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--mdh-ink)]">{card.body}</p>
                <p className="mt-6 text-[0.9rem] font-medium text-[var(--mdh-brass)] transition group-hover:translate-x-0.5">
                  {card.cta} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="You built something real. Let's make sure it keeps working for you.">
        Send us an address for a personalized valuation and proposal.
      </CtaBand>
    </main>
  );
}
