import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { TaxCalculator } from "@/components/calculator";

export const metadata: Metadata = {
  title: {
    absolute: "Middle Door Homes | 721 Exchange for Small Multifamily Owners",
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
    asterisk: true,
    body: "A §721 exchange converts your building to a portfolio stake with no capital gains or depreciation recapture at contribution.",
  },
  {
    promise: "Diversify your ownership",
    stat: "8-12%",
    statLabel: "target annual return",
    asterisk: false,
    body: "A passive stake in a professionally managed portfolio of cash-flowing neighborhood real estate.",
  },
  {
    promise: "Collect truly passive income",
    stat: "30,000+",
    statLabel: "units of experience",
    asterisk: false,
    body: "Our team handles everything: leasing, maintenance, and targeted renovations that grow building value. You share in all future income growth and appreciation.",
  },
];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Convert your equity into a managed income position",
    body: "A §721 exchange converts your concentrated real estate equity into a diversified, income-producing LP stake: institutional management, quarterly distributions, and no taxable event at contribution.",
    cta: "Learn how it works",
  },
  {
    href: "/partners",
    eyebrow: "For partners",
    title: "A finder's fee from off-market transactions",
    body: "We pay a 2-4% finder's fee for introductions that lead to a contribution. Most long-term owners don't list their properties. We help you unlock these transactions.",
    cta: "How to partner with us",
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
    body: "Instead of selling, you contribute your property through a §721 exchange, an IRS-recognized non-recognition event with no capital gains at contribution.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "Your equity converts into a passive LP stake in a professionally managed, diversified portfolio. Full ownership in the asset class you have built in, now at institutional scale.",
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
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[52vh] min-h-[380px] md:h-[68vh] md:min-h-[480px]">
              <Image
                src="/images/hero-chicago-street.jpg"
                alt="Tree-lined street with classic brick townhomes"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_52%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.88)] via-[rgba(8,16,24,0.30)] to-[rgba(8,16,24,0.45)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,24,36,0.30)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  Middle Door Homes
                </p>
                <h1 className="font-display mt-3 text-[1.9rem] font-medium leading-[1.08] tracking-[-0.01em] text-white sm:text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem]">
                  Your building&rsquo;s next chapter
                </h1>
                <p className="mt-2 max-w-2xl text-[1.05rem] font-light leading-snug text-white/75 sm:text-[1.25rem] md:text-[1.45rem]">
                  An &ldquo;index fund&rdquo; of neighborhood real estate
                </p>
                <p className="mt-4 max-w-[54ch] text-[0.88rem] leading-relaxed text-white/65 sm:text-[0.95rem] md:text-[1rem]">
                  Contribute your building to become an owner of a neighborhood real estate portfolio: no taxes at contribution, diversified ownership, and professional management where you share in the upside.
                </p>
              </div>
            </div>

            <div className="grid divide-y divide-[var(--mdh-line)] border-t border-[var(--mdh-line)] bg-[var(--mdh-bg)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {THREE_PROOFS.map((item) => (
                <div key={item.promise} className="p-6 md:p-8">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                    {item.promise}
                  </p>
                  <p className="mt-3 text-[2.6rem] font-semibold leading-none tracking-[-0.02em] text-[var(--mdh-title)]">
                    {item.stat}{item.asterisk && <sup className="text-[0.45em] font-normal">*</sup>}
                  </p>
                  <p className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--mdh-subtle)]">
                    {item.statLabel}
                  </p>
                  <p className="mt-4 border-t border-[var(--mdh-line)] pt-4 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[0.65rem] leading-relaxed text-[var(--mdh-subtle)]">
            * §721 exchanges are non-recognition events for federal income tax purposes. Individual tax outcomes depend on cost basis, depreciation history, holding period, and state of residence. Consult your CPA.
          </p>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading className="mt-2">Built for investors who have earned a better next chapter</Heading>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              You have built meaningful equity in a single asset. A traditional sale erodes 30-40% of that to capital gains and depreciation recapture. MDH offers a different structure: contribute your building and receive a passive stake in a diversified, institutionally managed portfolio. The same equity, working on better terms, with no tax event at contribution.
            </p>
            <div className="mt-6 space-y-3 border-t border-[var(--mdh-line)] pt-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Own one or more 2-49 unit multifamily buildings",
                  "Held 5+ years with meaningful embedded gains",
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

      {/* Calculator */}
      <TaxCalculator />

      {/* Team credentials */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Our team</Eyebrow>
            <Heading className="mt-2">Billions of dollars of institutional housing experience</Heading>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              Our team has operated 30,000+ units across some of the largest residential platforms in the country. We built Middle Door to bring that institutional playbook to small multifamily, giving individual investors access to a wealth structure that has historically been available only to institutional capital.
            </p>
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

      {/* How it works */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>The 721 exchange</Eyebrow>
              <Heading className="mt-2">Three steps to passive ownership</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A §721 exchange is an IRS-recognized non-recognition event that allows you to
                contribute your building to a professionally managed portfolio in exchange for a
                passive ownership stake, with no capital gains or depreciation recapture at contribution.
              </p>
              <div className="mt-6">
                <Button href="/owners">Owner overview</Button>
              </div>
              <div className="relative mt-6 h-[200px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-[240px]">
                <Image
                  src="/images/px-12168579.jpg"
                  alt="Classic red brick apartment building facade"
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
    </main>
  );
}
