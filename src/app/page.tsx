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
    "Middle Door Homes lets multifamily investors contribute their 2-49 unit buildings through a §721 exchange and receive passive LP income, preserving equity, deferring taxes, and exiting active operations.",
  alternates: { canonical: "/" },
};

const CREDIBILITY = [
  { value: "0%", label: "Taxes at closing" },
  { value: "30,000+", label: "Units of experience" },
  { value: "8-12%", label: "Target annual return" },
];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Convert your equity into a managed income position",
    body: "A §721 exchange converts your concentrated real estate equity into a diversified, income-producing LP stake — institutional management, quarterly distributions, and no taxable event at contribution.",
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
    body: "Instead of selling, you contribute your property through a §721 exchange — an IRS-recognized non-recognition event with no capital gains at contribution.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "Your equity converts into an LP interest in a professionally managed portfolio. You retain ownership exposure to real estate without the operational burden.",
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
            <div className="relative h-[52vh] min-h-[340px] md:h-[68vh] md:min-h-[480px]">
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
                <h1 className="font-display mt-3 max-w-3xl text-[2.4rem] font-medium leading-[1.04] tracking-[-0.01em] text-white md:text-[3.6rem] lg:text-[4.2rem]">
                  From active landlord<br className="hidden md:block" /> to passive investor,<br className="hidden md:block" /> without the tax bill.
                </h1>
                <p className="mt-4 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/72 md:text-[1rem]">
                  You&apos;ve built significant equity in multifamily real estate. Between active management, deferred maintenance, and the capital gains exposure that comes with a traditional sale, most conventional exits erode the position you&apos;ve spent years building. The §721 exchange offers a better structure: a professionally managed, income-producing portfolio with no taxable event at contribution.
                </p>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {CREDIBILITY.map((item) => (
                <div key={item.label} className="px-5 py-4 md:px-7 md:py-5">
                  <p className="text-[1.65rem] font-semibold tracking-tight text-white md:text-[2rem]">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[0.73rem] uppercase tracking-[0.14em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading className="mt-2">Built for investors who have earned a smarter exit</Heading>
            <p className="mt-4 max-w-[66ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              Middle Door is built for multifamily investors who have held long enough that a traditional sale would trigger a significant capital gains event, and whose capital deserves a more efficient structure than active management can provide.
            </p>
            <div className="mt-6 grid gap-3 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 sm:items-start">
              {[
                "Own one or more 2-49 unit multifamily buildings",
                "Held 5+ years with meaningful embedded gains",
                "Want capital preservation and passive income without sacrificing long-term upside",
                "Ready to exit active operations and convert equity into managed, income-producing capital — without triggering a taxable event",
              ].map((item) => (
                <div key={item} className="flex gap-2.5 rounded-xl border border-[var(--mdh-line)] bg-white p-4">
                  <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                  <p className="text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item}</p>
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
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Our team</Eyebrow>
            <Heading className="mt-2">Billions of dollars of institutional housing experience</Heading>
            <p className="mt-4 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              Our team has operated 30,000+ units across some of the largest residential platforms in the country. We built Middle Door to bring that institutional playbook to small multifamily — giving individual investors access to a wealth structure that has historically been available only to institutional capital.
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
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>The 721 exchange</Eyebrow>
              <Heading className="mt-2">Three steps to passive ownership</Heading>
              <p className="mt-4 max-w-[52ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
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
                  className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_2px_8px_rgba(18,29,41,0.04)] md:p-5"
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
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <div className="mb-6">
              <Eyebrow>Who we work with</Eyebrow>
              <Heading className="mt-2">Find your path</Heading>
            </div>
            <div className="grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {AUDIENCE_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 transition hover:border-[var(--mdh-accent)] hover:bg-white hover:shadow-[0_8px_24px_rgba(18,29,41,0.07)] md:p-6"
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
