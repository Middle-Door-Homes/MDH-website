import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, DoorIcon, Eyebrow, Heading, Section } from "@/components/ui";
import { TaxCalculator } from "@/components/calculator";

export const metadata: Metadata = {
  title: {
    absolute: "Middle Door Homes | 721 Exchange for Multifamily Owners",
  },
  description:
    "Middle Door Homes turns your multifamily equity into a passive stake in a diversified, professionally managed residential portfolio, through a §721 exchange with no capital gains at contribution.",
  alternates: { canonical: "/" },
};

const THREE_PROOFS = [
  {
    promise: "Keep your equity intact",
    stat: "0%",
    statLabel: "taxes at contribution",
    body: "A §721 exchange converts your building to a portfolio stake with no capital gains or depreciation recapture at contribution.",
  },
  {
    promise: "Diversify your ownership",
    stat: "8-12%",
    statLabel: "target annual return",
    body: "You receive an ownership stake in a diversified portfolio of cash-flowing neighborhood real estate.",
  },
  {
    promise: "Collect truly passive income",
    stat: "30,000+",
    statLabel: "units of experience",
    body: "Our professional management team handles leasing, maintenance, and renovations that grow your value. You share in all future income and appreciation.",
  },
];

const THREE_DOORS = [
  { label: "Sell", body: "30-40% of gains lost to tax", mdh: false },
  { label: "Hold", body: "Tenants, repairs, and debt stay your job", mdh: false },
  { label: "Middle Door", body: "Your full equity, working in a diversified portfolio", mdh: true },
];

const TEAM = [
  { name: "Jack Elzinga", title: "Managing Partner", photo: "/images/jack-elzinga.jpg" },
  { name: "Jose Torres", title: "Partner & CEO", photo: "/images/jose-torres.jpg" },
  { name: "Mike Rozovics", title: "Partner & EVP Operations", photo: "/images/mike-rozovics.jpg" },
  { name: "Bob Sievewright", title: "Principal, Acquisitions", photo: "/images/bob-sievewright.jpg" },
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

export default function Home() {
  return (
    <main>
      {/* Hero: split panel */}
      <section className="bg-[var(--mdh-ink)]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-14 md:px-10 md:py-20 lg:min-h-[640px] lg:py-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-16">
            <div className="max-w-xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55">
                Middle Door Homes
              </p>
              <h1 className="font-display mt-4 text-[2.4rem] font-medium leading-[1.05] tracking-[-0.01em] text-white sm:text-[3rem] lg:text-[4rem]">
                Your building&rsquo;s next chapter
              </h1>
              <p className="mt-5 text-[1.08rem] font-light leading-relaxed text-white/80 md:text-[1.25rem]">
                The middle door between selling and holding. Keep your equity, hand off the management, and defer the tax.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
                >
                  Send us an address
                </Link>
                <Link href="#how-it-works" className="text-sm font-medium text-white/80 transition hover:text-white">
                  How it works &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0">
            <Image
              src="/images/hero-chicago-street.jpg"
              alt="Tree-lined street of brick multifamily buildings"
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="border-b border-[var(--mdh-line)] bg-white">
        <Container>
          <div className="grid divide-y divide-[var(--mdh-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {THREE_PROOFS.map((item) => (
              <div key={item.promise} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 md:py-10">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                  {item.promise}
                </p>
                <p className="mt-3 text-[2.4rem] font-semibold leading-none tracking-[-0.02em] text-[var(--mdh-title)]">
                  {item.stat}
                </p>
                <p className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--mdh-subtle)]">
                  {item.statLabel}
                </p>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement */}
      <section className="pb-10 pt-16 md:pb-14 md:pt-24">
        <Container>
          <p className="font-display mx-auto max-w-4xl text-balance text-center lining-nums text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[2.5rem]">
            Selling costs you 30-40% of your gains. Holding keeps you a landlord. Middle Door Homes is the third option.
          </p>
        </Container>
      </section>

      {/* Three doors */}
      <Section className="pt-0">
        <Container>
          <div className="grid overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-white shadow-[0_10px_32px_rgba(18,29,41,0.04)] sm:grid-cols-3">
            {THREE_DOORS.map((door) => (
              <div
                key={door.label}
                className={door.mdh
                  ? "bg-[var(--mdh-ink)] p-6 md:p-8"
                  : "border-b border-[var(--mdh-line)] p-6 sm:border-b-0 sm:border-r md:p-8"}
              >
                <DoorIcon
                  open={door.mdh}
                  className={`mb-4 h-11 w-8 ${door.mdh ? "text-[#c99a5e]" : "text-[var(--mdh-subtle)]/70"}`}
                />
                <p className={`text-[0.68rem] font-medium uppercase tracking-[0.2em] ${door.mdh ? "text-white/60" : "text-[var(--mdh-subtle)]"}`}>
                  {door.label}
                </p>
                <p className={`mt-3 text-[1.15rem] font-medium leading-snug md:text-[1.3rem] ${door.mdh ? "text-white" : "text-[var(--mdh-title)]"}`}>
                  {door.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading className="mt-2">Built for investors who have earned a better next chapter</Heading>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              You have built meaningful equity in a single asset. A traditional sale gives up 30-40% of your gains to capital gains tax and depreciation recapture. A 1031 exchange keeps your wealth concentrated and the operational burden on your plate. Middle Door Homes offers a third option: contribute your building and receive a passive stake in a diversified, professionally managed portfolio, without sacrificing your equity gains.
            </p>
            <div className="mt-6 space-y-3 border-t border-[var(--mdh-line)] pt-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Own one or more 2-49 unit multifamily buildings",
                  "Held 5+ years, with a large gain built up",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4">
                    <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                    <p className="text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Enjoy passive income & long-term upside",
                  "Seeking tax-efficient options",
                  "Ready to hand off the day-to-day",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4">
                    <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                    <p className="text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>The 721 exchange</Eyebrow>
              <Heading className="mt-2">Three steps to passive ownership</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A §721 exchange lets you contribute your building to a partnership for ownership
                units, with no capital gains or depreciation recapture at contribution. It is the same
                tool large REITs have used for decades to buy from owners who did not want to sell.
                What is new is applying it to buildings your size.
              </p>
              <div className="mt-6">
                <Button href="/owners">Owner overview</Button>
              </div>
              <div className="relative mt-6 h-[200px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-[240px]">
                <Image
                  src="/images/nb-autumn-corner.jpg"
                  alt="Brick apartment building on a tree-lined corner in autumn"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[center_50%]"
                />
              </div>
            </div>
            <div className="space-y-3">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 shadow-[0_2px_8px_rgba(18,29,41,0.04)] md:p-5"
                >
                  <p className="shrink-0 text-[1.5rem] font-medium leading-none tracking-[-0.02em] text-[var(--mdh-line)] md:text-[1.7rem]">
                    {item.step}
                  </p>
                  <div>
                    <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                    <p className="mt-1 text-[0.91rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <TaxCalculator />

      {/* Team credentials */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Our team</Eyebrow>
            <Heading className="mt-2">Billions of dollars of institutional housing experience</Heading>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              Our team has operated 30,000+ units across some of the largest residential platforms in the country. We built Middle Door to bring that institutional playbook to multifamily owners, and to offer them a structure that, until now, only large real estate institutions used.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member) => (
                <Link key={member.name} href="/about" className="group flex items-center gap-3">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[var(--mdh-line)]">
                    <Image src={member.photo} alt={member.name} fill quality={90} sizes="48px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block font-medium leading-tight text-[var(--mdh-title)] group-hover:underline">{member.name}</span>
                    <span className="mt-0.5 block text-[0.7rem] font-medium uppercase tracking-[0.13em] text-[var(--mdh-subtle)]">{member.title}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                Team experience from
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                {[
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
                ].map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={logo.file}
                    src={`/images/logos/${logo.file}`}
                    alt={logo.name}
                    className="h-[18px] w-auto max-w-[140px] transition hover:opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Audience routing */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <div className="mb-6">
              <Eyebrow>Who we work with</Eyebrow>
              <Heading className="mt-2">Find your path</Heading>
            </div>
            <div className="grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {AUDIENCE_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 transition hover:border-[var(--mdh-accent)] hover:shadow-[0_8px_24px_rgba(18,29,41,0.07)] md:p-6"
                >
                  <p className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[var(--mdh-subtle)]">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-2 text-[1.05rem] font-medium leading-snug text-[var(--mdh-title)] md:text-[1.1rem]">
                    {card.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
                    {card.body}
                  </p>
                  <p className="mt-4 text-[0.85rem] font-medium text-[var(--mdh-accent)] transition group-hover:translate-x-0.5">
                    {card.cta} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="font-display text-[1.7rem] font-medium leading-tight tracking-[-0.01em] text-white md:text-[2.1rem]">
                You built something real. Let&apos;s make sure it keeps working for you.
              </h2>
              <p className="mt-2 max-w-[54ch] text-[0.95rem] leading-relaxed text-white/70">
                Send us an address for a personalized valuation and proposal.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Send us an address
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
