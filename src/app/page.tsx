import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Middle Door Homes helps small multifamily building owners transition from active management to passive income through a tax-deferred 721 exchange.",
};

const CREDIBILITY = [
  { value: "30,000+", label: "Homes managed by team" },
  { value: "15–20%", label: "Target LTV" },
  { value: "3x+", label: "Debt service coverage" },
];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Turn your building into passive income",
    body: "A 721 exchange lets you contribute your property, defer your taxes, and receive ongoing income — without selling and without managing.",
    cta: "Learn how it works",
  },
  {
    href: "/brokers",
    eyebrow: "For brokers & partners",
    title: "Earn full commission from owners who aren't selling",
    body: "We pay 3–4% commission on off-market transactions. Every introduction to a long-term owner is a potential transaction.",
    cta: "How to partner with us",
  },
  {
    href: "/lenders",
    eyebrow: "For lenders",
    title: "A conservative credit profile in stabilized housing",
    body: "15–20% LTV, 3x+ DSCR, occupied assets at acquisition. Conservative leverage with institutional-grade operations.",
    cta: "Review our credit profile",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Contribute your building",
    body: "Instead of selling, you contribute your property to the portfolio through a 721 exchange — a tax-deferred transaction.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "You become a passive owner in a professionally managed real estate portfolio, retaining equity and ongoing income.",
  },
  {
    step: "03",
    title: "Collect distributions — with no management",
    body: "Our team handles everything. You receive regular income from the portfolio without maintenance calls or tenant issues.",
  },
];

export default function Home() {
  return (
    <main>
      <Section className="pb-6 pt-6 md:pt-9">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] border border-[var(--mdh-line)] bg-white shadow-[0_18px_52px_rgba(18,29,41,0.08)]">
            <div className="relative h-[430px] md:h-[560px]">
              <Image
                src="/images/Bldg-16.jpg"
                alt="Small multifamily building in an urban neighborhood"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,19,28,0.55)] via-[rgba(11,19,28,0.15)] to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 md:p-7">
              <div className="max-w-4xl rounded-xl border border-[rgba(215,225,233,0.75)] bg-[rgba(247,250,252,0.9)] p-5 shadow-[0_14px_30px_rgba(15,24,34,0.14)] backdrop-blur-[2px] md:p-7">
                <Eyebrow>Middle Door Homes</Eyebrow>
                <h1 className="mt-3 max-w-3xl text-[2.1rem] font-medium leading-[1.04] tracking-[-0.015em] text-[var(--mdh-title)] md:text-[3.08rem] lg:text-[3.35rem]">
                  A tax-efficient path for long-term property owners
                </h1>
                <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-[1.6] text-[var(--mdh-ink)] md:text-[1.08rem]">
                  Middle Door Homes works with small multifamily building owners who want to transition
                  from active management to passive income — without selling and triggering a large tax bill.
                </p>
                <div className="mt-5 grid gap-3 border-t border-[var(--mdh-line)] pt-4 sm:grid-cols-3">
                  {CREDIBILITY.map((item) => (
                    <div key={item.label}>
                      <p className="text-[1.6rem] font-medium tracking-[-0.015em] text-[var(--mdh-title)] md:text-[1.9rem]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--mdh-subtle)] md:text-[0.88rem]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1.25fr_1fr_1fr]">
            <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_8px_24px_rgba(18,29,41,0.05)] md:p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                How it works
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--mdh-ink)]">
                Owners contribute buildings through a 721 exchange — a tax-deferred structure that converts
                active real estate into passive portfolio ownership.
              </p>
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-32">
              <Image
                src="/images/bldg-13.jpg"
                alt="Urban multifamily streetscape"
                fill
                quality={90}
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-32">
              <Image
                src="/images/bldg-10.jpg"
                alt="Brick multifamily building"
                fill
                quality={90}
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[center_56%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <div className="mb-6">
              <Eyebrow>Who we work with</Eyebrow>
              <Heading className="mt-3">Find the right path for you</Heading>
            </div>
            <div className="grid gap-5 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {AUDIENCE_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col rounded-xl border border-[var(--mdh-line)] bg-white p-5 shadow-[0_6px_18px_rgba(18,29,41,0.04)] transition hover:shadow-[0_10px_28px_rgba(18,29,41,0.08)] hover:border-[var(--mdh-accent)/40] md:p-6"
                >
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-2 text-[1.05rem] font-medium leading-snug text-[var(--mdh-title)] md:text-[1.12rem]">
                    {card.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                    {card.body}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[var(--mdh-accent)] group-hover:underline underline-offset-2">
                    {card.cta} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-3">Three steps from active ownership to passive income</Heading>
              <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--mdh-ink)]">
                The 721 exchange is a tax-deferred structure that lets owners contribute a property to a
                real estate portfolio in exchange for a passive ownership stake.
              </p>
              <div className="mt-6">
                <Button href="/owners">Learn how it works</Button>
              </div>
            </div>
            <div className="space-y-4">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_4px_12px_rgba(18,29,41,0.04)] md:p-5"
                >
                  <p className="shrink-0 text-[1.4rem] font-medium leading-none tracking-tight text-[var(--mdh-line)] md:text-[1.6rem]">
                    {item.step}
                  </p>
                  <div>
                    <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                    <p className="mt-1 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
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
