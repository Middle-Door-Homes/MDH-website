import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, Container, Eyebrow, Heading, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Financial Advisors: 721 Exchange for Your Clients",
  description:
    "Help clients access a diversified, professionally managed real estate portfolio through a §721 exchange: no tax event, no replacement property required. Partner with Middle Door Homes.",
  alternates: { canonical: "/advisors" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing" },
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
    body: "Introducing a strategy that protects your client from losing 30-40% of their gains to tax at exit positions you as a proactive, comprehensive advisor, not just a portfolio manager.",
  },
  {
    title: "Simple referral, no complexity",
    body: "You make the introduction. We handle the education, structuring, and transaction. Your relationship with your client stays intact throughout.",
  },
];

const FOR_CLIENTS = [
  {
    title: "Capital preservation",
    body: "A §721 exchange defers capital gains and depreciation recapture entirely. Your client's full equity basis rolls forward intact with no tax haircut at transition.",
  },
  {
    title: "Income-producing passive ownership",
    body: "Your client receives quarterly distributions from a professionally managed portfolio, with professional operations replacing all landlord responsibilities.",
  },
  {
    title: "Estate planning benefit",
    body: "Ownership units can pass to heirs with a step-up in cost basis, potentially eliminating the deferred tax liability entirely, a meaningful tool in your client's broader wealth plan.",
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
    body: "Clients with meaningful real estate equity and no tax-efficient way to diversify it. The 721 exchange gives them a structure their position has earned.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Identify a client with embedded gains",
    body: "Think about clients who own multifamily buildings and have held long enough to carry meaningful embedded gains, but have no tax-efficient way out.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door. We handle the educational conversation, explaining the 721 exchange structure and whether it is the right fit for their situation.",
  },
  {
    step: "03",
    title: "We coordinate with you throughout",
    body: "You stay informed and involved, we handle the transaction, and your client relationship stays yours.",
  },
];

export default function AdvisorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For financial advisors"
        title="A better structure for clients with gains they want to protect."
        image="/images/nb-courtyard.jpg"
        imageAlt="Brick courtyard apartment building with a garden walkway"
        stats={STATS}
      />

      {/* Pitch */}
      <Section tone="white">
        <Container>
          <div className="">
            <p className="font-display max-w-3xl text-[1.5rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
              Many of your clients have built meaningful real estate equity in a structure that was never designed for their next chapter. We give them a better one.
            </p>
          </div>
        </Container>
      </Section>

      {/* The problem */}
      <Section>
        <Container>
          <div className="">
            <Eyebrow>The problem</Eyebrow>
            <Heading className="mt-2">Clients stuck in real estate</Heading>
            <div className="mt-5 grid gap-5 border-t border-[var(--mdh-line)] pt-5 md:grid-cols-3">
              <div className="border-t border-[var(--mdh-line)] pt-5">
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">The tax problem</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners of multifamily buildings carry decades of appreciation
                  and depreciation. A sale typically triggers a combined tax liability of
                  30-40% of their gains.
                </p>
              </div>
              <div className="border-t border-[var(--mdh-line)] pt-5">
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">The concentration risk</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A single building often represents a disproportionate share of your client&apos;s
                  net worth, illiquid, undiversified, and operationally demanding. The tax
                  wall prevents the diversification they need.
                </p>
              </div>
              <div className="border-t border-[var(--mdh-line)] pt-5">
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">No better structure</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 1031 exchange just replaces one building with another. Selling gives up
                  30-40% of the gains to tax. For most clients, there has simply never been a structure
                  that preserves their equity and keeps their capital working in a diversified,
                  institutional vehicle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section id="solution" tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-2">A 721 exchange, not a sale</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange allows your client to contribute their building to a professionally
                managed portfolio in exchange for a passive ownership stake, with no taxable event
                at closing. No capital gains. No depreciation recapture.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Their equity moves forward intact into a diversified, income-producing portfolio. The tax event that would have occurred at a sale is deferred entirely.
              </p>
              <div className="mt-5 border-t border-[var(--mdh-line)] pt-5">
                <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                  Key distinction
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  This is a contribution, not a sale. IRC Section 721 is the long-established part of the tax code
                  that makes this possible. The tax event that would have occurred at sale is
                  deferred entirely. Your client keeps 100% of what they built.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden lg:h-full lg:min-h-[360px]">
              <Image
                src="/images/nb-greystone-row.jpg"
                alt="Greystone and brick buildings on a tree-lined street"
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
      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="">
              <Eyebrow>For you</Eyebrow>
              <Heading className="mt-2">A stronger advisory relationship</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_YOU.map((item) => (
                  <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                    <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <Eyebrow>For your clients</Eyebrow>
              <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_CLIENTS.map((item) => (
                  <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                    <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who we work with */}
      <Section id="who-we-work-with" tone="white">
        <Container>
          <div className="">
            <Eyebrow>Who we work with</Eyebrow>
            <Heading className="mt-2">Built for the advisors who know their clients best</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {WHO_WE_WORK_WITH.map((item) => (
                <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-2">Three steps to a referral</Heading>
              <div className="mt-5 space-y-3">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 border-t border-[var(--mdh-line)] pt-5">
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
            <div className="relative h-[280px] overflow-hidden lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/nb-autumn-corner.jpg"
                alt="Brick apartment building on a tree-lined corner in autumn"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCta
        title="Have a client who might benefit?"
        body="Reach out directly. We can walk through the 721 exchange structure with you and discuss whether it is a fit for your client's situation."
        cta={{ href: "/contact", label: "Start a conversation" }}
      />
    </main>
  );
}
