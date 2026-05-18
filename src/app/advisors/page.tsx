import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Financial Advisor Referral Program - 721 Exchange for Your Clients",
  description:
    "Help clients with embedded real estate gains transition from active landlord to passive investor: tax-deferred, no replacement property required. Partner with Middle Door Homes.",
  alternates: { canonical: "/advisors" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing", asterisk: true },
  { value: "100%", label: "Equity preserved" },
  { value: "8-12%", label: "Target annual return" },
];

const FOR_YOU = [
  {
    title: "A solution to a persistent problem",
    body: "Many high-net-worth clients carry concentrated real estate positions they cannot easily exit. The 721 exchange gives you a tax-efficient answer: one most clients have never heard of.",
  },
  {
    title: "Strengthens your advisory relationship",
    body: "Introducing a strategy that protects your client from a 30-40% tax hit at exit positions you as a proactive, comprehensive advisor, not just a portfolio manager.",
  },
  {
    title: "Simple referral, no complexity",
    body: "You make the introduction. We handle the education, structuring, and transaction. Your relationship with your client stays intact throughout.",
  },
];

const FOR_CLIENTS = [
  {
    title: "Capital preservation",
    body: "A §721 exchange defers capital gains and depreciation recapture entirely. Your client&apos;s full equity basis rolls forward intact with no tax haircut at transition.",
  },
  {
    title: "Income-producing passive ownership",
    body: "Your client receives quarterly distributions from a professionally managed portfolio, with institutional-grade operations replacing all landlord responsibilities.",
  },
  {
    title: "Estate planning benefit",
    body: "OP units can pass to heirs with a step-up in cost basis, potentially eliminating the deferred tax liability entirely, a meaningful tool in your client&apos;s broader wealth plan.",
  },
];

const WHO_WE_WORK_WITH = [
  {
    title: "Wealth managers & RIAs",
    body: "Clients with significant real estate equity often hold an outsized share of their net worth in a single illiquid asset. The 721 exchange is a path to tax-efficient diversification.",
  },
  {
    title: "CPAs & tax advisors",
    body: "You understand the embedded gain problem better than anyone. We translate that into a structure your client can actually execute. We coordinate with you throughout.",
  },
  {
    title: "Estate planning attorneys",
    body: "For clients thinking about succession and legacy, the 721 exchange defers the tax liability and moves the asset into a professionally managed, diversified portfolio.",
  },
  {
    title: "Financial planners",
    body: "Clients approaching retirement who still manage small multifamily buildings often feel stuck. We provide a clean transition to truly passive income.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Identify a client with embedded gains",
    body: "Think about clients who own small multifamily buildings, especially those with long hold periods, deferred maintenance, or who are approaching a life transition.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door. We handle the educational conversation, explaining the 721 exchange structure and whether it is the right fit for their situation.",
  },
  {
    step: "03",
    title: "We coordinate with you and share in the upside",
    body: "We work alongside you throughout the process. You stay informed and involved. We handle the transaction, your client relationship stays yours, and you receive a finder's fee from us upon closing.",
  },
];

export default function AdvisorsPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[46vh] min-h-[360px] md:h-[58vh] md:min-h-[400px]">
              <Image
                src="/images/bldg-10.jpg"
                alt="Established residential neighborhood"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_46%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.82)] via-[rgba(8,16,24,0.25)] to-[rgba(8,16,24,0.06)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  For financial advisors
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[1.8rem] font-medium leading-[1.06] tracking-[-0.01em] text-white sm:text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem]">
                  A tax-efficient exit<br className="hidden md:block" /> for clients with<br className="hidden md:block" /> gains they want to keep.
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {STATS.map((item) => (
                <div key={item.label} className="px-3 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5">
                  <p className="whitespace-nowrap text-[1.3rem] font-semibold tracking-tight text-white sm:text-[1.5rem] md:text-[1.8rem]">
                    {item.value}{item.asterisk && <sup className="text-[0.55em] font-normal">*</sup>}
                  </p>
                  <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-white/50 sm:text-[0.72rem] sm:tracking-[0.14em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="border-t border-white/10 px-5 py-2.5 text-[0.65rem] leading-relaxed text-white/30 md:px-7">
              * §721 exchanges are non-recognition events for federal income tax purposes. Individual tax outcomes depend on cost basis, depreciation history, holding period, and state of residence. Consult your CPA.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pitch */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-10">
            <p className="font-display max-w-3xl text-[1.5rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
              Many of your clients own real estate they don&apos;t know how to exit while retaining
              their gains. We offer a path that solves that problem entirely.
            </p>
          </div>
        </Container>
      </Section>

      {/* The problem */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>The problem</Eyebrow>
            <Heading className="mt-2">Clients stuck in real estate</Heading>
            <div className="mt-5 grid gap-5 border-t border-[var(--mdh-line)] pt-5 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">The tax problem</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners of small multifamily buildings carry decades of appreciation
                  and depreciation. A sale typically triggers a combined tax liability of
                  30-40% of the building&apos;s value.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">The concentration risk</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A single building often represents a disproportionate share of your client&apos;s
                  net worth, illiquid, undiversified, and operationally demanding. The tax
                  wall prevents the diversification they need.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">No clean exit</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 1031 exchange just replaces one active management obligation with another.
                  Holding means continued management burden. Most clients feel trapped between
                  paying to exit or managing forever.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section id="solution" className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-2">A 721 exchange, not a sale</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange allows your client to contribute their building to a professionally
                managed portfolio in exchange for a passive ownership stake, with no taxable event
                at closing. No capital gains. No depreciation recapture.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                They stop managing. Their equity moves forward intact into a diversified,
                income-producing portfolio. The tax event that would have occurred at sale is
                deferred entirely.
              </p>
              <div className="mt-5 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
                <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                  Key distinction
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  This is a contribution, not a sale. IRC Section 721 is the IRS-approved structure
                  that makes this possible. The tax event that would have occurred at sale is
                  deferred entirely. Your client keeps 100% of what they built.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[360px]">
              <Image
                src="/images/px-32117624.jpg"
                alt="Tree-lined street with classic brick brownstone apartments"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* For you + For your clients */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
              <Eyebrow>For you</Eyebrow>
              <Heading className="mt-2">A stronger advisory relationship</Heading>
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

      {/* Who we work with */}
      <Section id="who-we-work-with" className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Who we work with</Eyebrow>
            <Heading className="mt-2">Built for the advisors who know their clients best</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {WHO_WE_WORK_WITH.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-white p-5 md:p-6">
                  <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-2">Three steps to a referral</Heading>
              <div className="mt-5 space-y-3">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 shadow-[0_2px_8px_rgba(18,29,41,0.04)] md:p-5">
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
                src="/images/px-36275920.jpg"
                alt="Classic red brick apartment building with arched entryway"
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
                Have a client who might benefit?
              </h2>
              <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/70">
                Reach out directly. We can walk through the 721 exchange structure with you and
                discuss whether it is a fit for your client&apos;s situation.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:info@middledoorhomes.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
