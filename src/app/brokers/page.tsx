import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Brokers & Partners",
  description:
    "Earn full 3–4% commission on off-market small multifamily transactions. Middle Door Homes helps you unlock conversations with long-term owners who aren't otherwise planning to sell.",
};

const STATS = [
  { value: "100%", label: "Owner tax deferral" },
  { value: "3–4%", label: "Broker commission" },
  { value: "90%+", label: "Off-market buildings" },
];

const FOR_YOU = [
  {
    title: "Full commission – no split",
    body: "We pay a standard commission of 3–4% on every transaction. There is no buyer's broker taking a share. You earn the full fee.",
  },
  {
    title: "Off-market access",
    body: "Most small multifamily buildings never reach the open market. Our 721 exchange creates a path to transact with owners who would not otherwise be sellers.",
  },
  {
    title: "A referral flywheel",
    body: "Satisfied owners refer others. Each successful transaction builds your reputation with this owner group. One conversation can unlock several more.",
  },
];

const FOR_CLIENTS = [
  {
    title: "Tax deferral",
    body: "For a long-term owner, a sale means a large tax bill. A 721 exchange defers that entirely.",
  },
  {
    title: "Continued ownership",
    body: "Your client owns a stake in a diversified portfolio with ongoing cash flow and portfolio appreciation.",
  },
  {
    title: "No management",
    body: "Professional management means truly passive income for your client – no more tenant calls or maintenance.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Identify a long-term owner",
    body: "Think about clients who have owned their buildings for years – especially those showing signs of management fatigue, tax concerns, or succession planning.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door. We handle the educational conversation – explaining the 721 exchange and whether it is the right fit.",
  },
  {
    step: "03",
    title: "Earn your commission",
    body: "If the building is contributed to our portfolio, you receive full commission – typically 3–4% – without a buyer's broker reducing your share.",
  },
];

export default function BrokersPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[46vh] min-h-[300px] md:h-[58vh] md:min-h-[400px]">
              <Image
                src="/images/bldg-02.jpg"
                alt="Urban small multifamily residential street"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_46%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.82)] via-[rgba(8,16,24,0.25)] to-[rgba(8,16,24,0.06)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  For brokers &amp; partners
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[2.2rem] font-medium leading-[1.06] tracking-[-0.01em] text-white md:text-[3.2rem] lg:text-[3.8rem]">
                  Earn full commission<br className="hidden md:block" /> from owners who<br className="hidden md:block" /> aren&apos;t planning to sell.
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {STATS.map((item) => (
                <div key={item.label} className="px-5 py-4 md:px-7 md:py-5">
                  <p className="text-[1.5rem] font-semibold tracking-tight text-white md:text-[1.8rem]">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.14em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pitch */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-10">
            <p className="font-display max-w-3xl text-[1.5rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
              Many small multifamily owners are not looking to sell. We help you unlock off-market
              transactions – to help owners make a tax-deferred transition to passive ownership.
            </p>
          </div>
        </Container>
      </Section>

      {/* For you + For your clients */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
              <Eyebrow>For you</Eyebrow>
              <Heading className="mt-2">Full commission from off-market transactions</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_YOU.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                    <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
              <Eyebrow>For your clients</Eyebrow>
              <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_CLIENTS.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
                    <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-2">Three steps to a commission</Heading>
              <div className="mt-5 space-y-3">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_2px_8px_rgba(18,29,41,0.04)] md:p-5">
                    <p className="shrink-0 text-[1.5rem] font-medium leading-none tracking-[-0.02em] text-[var(--mdh-line)]">
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
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/bldg-13.jpg"
                alt="Established neighborhood multifamily housing"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_45%]"
              />
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
                Have a client in mind?
              </h2>
              <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/70">
                Reach out directly. We can discuss whether your client is a good fit and how to
                structure the introduction.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:info@middledoorhomes.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Introduce a client
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
