import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, CtaBand, FeatureGrid, Intro, LogoRow, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Middle Door Homes",
  description:
    "Middle Door Homes gives multifamily owners a way out of active management through a §721 exchange: keep your equity, defer the tax, and receive passive income from a diversified portfolio.",
  alternates: { canonical: "/about" },
};


const TEAM = [
  {
    name: "Jack Elzinga",
    title: "Managing Partner",
    photo: "/images/jack-elzinga.jpg",
    bio: "Jack built Middle Door after a decade inside institutional real estate platforms and other leading companies. He helped lead the integration of the 30,000+ home Home Partners of America portfolio through the Blackstone/Tricon merger and drove $120M+ in annual net operating income growth. That work shaped a clear view: the institutional playbook for residential operations had never been packaged in a structure that worked for individual multifamily owners. Harvard BA in Economics, Stanford MBA.",
  },
  {
    name: "Jose Torres",
    title: "Partner & CEO",
    photo: "/images/jose-torres.jpg",
    bio: "Jose has operated inside two of the most significant scattered-site residential portfolios built in the last decade. He was head of asset management at Home Partners of America through the Blackstone acquisition and Tricon merger, overseeing 30,000+ homes, and served as chief of staff within Invitation Homes' finance organization through its IPO. He knows what well-run residential platforms look like from the inside, both operationally and financially. Prior experience at CBRE and RealFoundations.",
  },
  {
    name: "Mike Rozovics",
    title: "Partner & EVP Operations",
    photo: "/images/mike-rozovics.jpg",
    bio: "Mike started his career working residential construction on the south side of Chicago. He went on to run asset management and capital programs for a $10B+ residential portfolio at Home Partners of America, directing renovation, construction, and income growth across dispersed portfolios at scale. That range, from individual units to portfolio-wide systems, is the operational core of what Middle Door brings to every contributed building.",
  },
  {
    name: "Bob Sievewright",
    title: "Principal, Acquisitions",
    photo: "/images/bob-sievewright.jpg",
    bio: "Bob spent nearly fifteen years advising high-net-worth clients on their investments: as a financial advisor at Smith Barney, Vice President of Private Client Services at Bear Stearns, and Senior Vice President of Investments at Morgan Stanley. He went on to found Wright Advisory Group, a sales and business development consultancy. At Middle Door he leads owner, broker, and advisor relationships, bringing long-term owners a way out of active management that keeps their equity working.",
  },
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

const PRINCIPLES = [
  {
    title: "We start with a conversation",
    body: "Not every owner is a good fit, and we will tell you that clearly. We want to understand your building, your financial situation, and your goals before recommending anything.",
  },
  {
    title: "You transition out of operations completely",
    body: "Once your building joins the portfolio, our team handles everything: tenants, maintenance, leasing, compliance. You receive quarterly distributions. That is the entire job.",
  },
  {
    title: "Your returns should improve",
    body: "Experienced, full-time management finds income most individual owners leave on the table: lower operating costs, rents set to the market, and capital spent where it pays back.",
  },
  {
    title: "We hold for the long term",
    body: "We are not a fund with a clock running. We are building a durable housing business designed to generate growing passive income for owners over time.",
  },
];

const EXCHANGE_POINTS = [
  {
    title: "How it works",
    body: "A long-established part of the tax code lets you contribute your building to a professionally managed portfolio in exchange for a passive ownership stake, with no capital gains or depreciation recapture at closing.",
  },
  {
    title: "Why it matters",
    body: "Selling means a large, often unexpected tax bill, typically 30-40% of your gains. A 721 exchange defers that entirely. Your equity rolls forward intact.",
  },
  {
    title: "What you receive",
    body: "A stake in a diversified, professionally managed portfolio and regular distributions. No tenant calls. No maintenance coordination.",
  },
  {
    title: "Who it is for",
    body: "Owners of 2-49 unit multifamily buildings who have built up a large gain and want a tax-efficient way into passive income.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A better next step for multifamily owners."
        image="/images/nb-courtyard.jpg"
        imageAlt="Brick courtyard apartment building with a garden walkway"
        actions={
          <>
            <Button href="#team">Meet the team</Button>
            <Button href="/owners" variant="secondary">
              Owner overview
            </Button>
          </>
        }
      >
        Many multifamily owners have spent decades building equity and kept managing because there was no good
        way out: selling meant a large tax bill, and a 1031 meant another building to run. We built Middle Door
        Homes to change that.
      </PageHero>

      {/* The 721 exchange */}
      <Section>
        <Container>
          <Intro eyebrow="The 721 exchange" title="A contribution, not a sale" />
          <div className="mt-12">
            <FeatureGrid cols={4} items={EXCHANGE_POINTS} />
          </div>
        </Container>
      </Section>

      {/* Why Middle Door */}
      <Section tone="green">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Intro dark eyebrow="Why Middle Door" title="Experience managing at scale">
            We know what it takes to run residential real estate well, because we have done it at scale. Our
            team has operated 30,000+ homes at institutional scale, across some of the largest residential
            platforms in the country. We bring that same operating playbook to every multifamily building we own.
          </Intro>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/nb-garden-apartments.jpg"
              alt="Two-story brick garden apartment building under mature oak trees"
              fill
              quality={88}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section tone="stone">
        <Container>
          <Intro eyebrow="How we work" title="What to expect from us" />
          <div className="mt-12">
            <FeatureGrid cols={2} items={PRINCIPLES} />
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section id="team">
        <Container>
          <Intro eyebrow="Our team" title="Investors & operators who have done this at scale" />
          <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col gap-5 sm:flex-row">
                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-md bg-[var(--mdh-stone)]">
                  <Image src={member.photo} alt={member.name} fill quality={90} sizes="144px" className="object-cover object-top grayscale" />
                </div>
                <div>
                  <p className="font-display text-[1.4rem] leading-tight text-[var(--mdh-green)]">{member.name}</p>
                  <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--mdh-brass)]">
                    {member.title}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-[var(--mdh-line)] pt-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--mdh-muted)]">
              Team experience from
            </p>
            <div className="mt-6">
              <LogoRow logos={LOGOS} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="See exactly how this works for you."
        action={{ href: "/contact", label: "Send us an address" }}
        secondary={{ href: "/owners", label: "Owner overview" }}
      >
        The owner overview covers the 721 exchange step by step, what you receive, and what your income looks
        like going forward.
      </CtaBand>
    </main>
  );
}
