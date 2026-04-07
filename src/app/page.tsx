import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { TaxCalculator } from "@/components/calculator";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Middle Door Homes helps small multifamily building owners transition from active management to passive income through a tax-deferred 721 exchange.",
};

const CREDIBILITY = [
  { value: "0%", label: "Taxes at closing" },
  { value: "30,000+", label: "Units of experience" },
  { value: "8–10%+", label: "Target annual return" },
];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Turn your building into passive income – without selling",
    body: "A 721 exchange lets you contribute your property, defer your taxes, and receive ongoing income with no management responsibilities.",
    cta: "Learn how it works",
  },
  {
    href: "/brokers",
    eyebrow: "For brokers & partners",
    title: "Full commission on off-market transactions",
    body: "We pay 3–4% commission on every building we acquire. Most long-term owners aren't listed – we help you unlock that pool.",
    cta: "How to partner with us",
  },
  {
    href: "/advisors",
    eyebrow: "For financial advisors",
    title: "A tax-efficient solution for your clients' real estate",
    body: "Help clients with embedded gains transition from active landlord to passive owner – without triggering a taxable event.",
    cta: "How advisors work with us",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Contribute your building",
    body: "Instead of selling, you contribute your property through a 721 exchange – a tax-deferred transaction with no capital gains at closing.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "Your equity rolls into a professionally managed real estate portfolio. You remain an owner, without any management responsibilities.",
  },
  {
    step: "03",
    title: "Collect ongoing distributions",
    body: "Our team handles everything. You receive regular income from the portfolio – and professional management works to grow it over time.",
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
                src="/images/hero-chicago-6flat.jpg"
                alt="Small multifamily building in an established urban neighborhood"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.82)] via-[rgba(8,16,24,0.28)] to-[rgba(8,16,24,0.08)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  Middle Door Homes
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[2.4rem] font-medium leading-[1.04] tracking-[-0.01em] text-white md:text-[3.6rem] lg:text-[4.2rem]">
                  From active landlord<br className="hidden md:block" /> to passive investor –<br className="hidden md:block" /> without the tax bill.
                </h1>
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

      {/* Calculator */}
      <TaxCalculator />

      {/* How it works */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>The 721 exchange</Eyebrow>
              <Heading className="mt-2">Three steps to passive ownership</Heading>
              <p className="mt-4 max-w-[52ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange is an IRS-approved strategy that allows you to contribute your
                building to a professionally managed portfolio, in exchange for a passive
                ownership stake – without a taxable event at closing.
              </p>
              <div className="mt-6">
                <Button href="/owners">Owner overview</Button>
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
    </main>
  );
}
