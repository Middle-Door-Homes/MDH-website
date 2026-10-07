import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, CtaBand, FeatureGrid, Intro, PageHero, Section, Steps } from "@/components/ui";

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

const PROBLEMS = [
  {
    title: "The tax problem",
    body: "Long-term owners of multifamily buildings carry decades of appreciation and depreciation. A sale typically triggers a combined tax liability of 30-40% of their gains.",
  },
  {
    title: "The concentration risk",
    body: "A single building often represents a disproportionate share of your client's net worth: illiquid, undiversified, and operationally demanding. The tax wall prevents the diversification they need.",
  },
  {
    title: "No better structure",
    body: "A 1031 exchange just replaces one building with another. For most clients, there has never been a structure that preserves their equity and keeps it working in a diversified, institutional vehicle.",
  },
];

export default function AdvisorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For financial advisors"
        title="A better structure for clients with gains they want to protect."
        image="/images/nb-greystone.jpg"
        imageAlt="Greystone multifamily building with a lit entrance"
        facts={STATS}
        actions={
          <>
            <Button href="/contact">Start a conversation</Button>
            <Button href="#how-it-works" variant="secondary">
              How it works
            </Button>
          </>
        }
      >
        Many of your clients have built meaningful real estate equity in a structure that was never designed
        for their next chapter. We give them a better one.
      </PageHero>

      {/* The problem */}
      <Section>
        <Container>
          <Intro eyebrow="The problem" title="Clients stuck in real estate" />
          <div className="mt-12">
            <FeatureGrid items={PROBLEMS} />
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section id="solution" tone="green">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Intro dark eyebrow="The solution" title="A 721 exchange, not a sale">
              Your client contributes their building to a professionally managed portfolio in exchange for a
              passive ownership stake, with no taxable event at closing. No capital gains. No depreciation
              recapture. Their equity moves forward intact.
            </Intro>
            <div className="mt-10 border-t-2 border-[var(--mdh-brass-soft)] pt-5">
              <h3 className="text-[1.05rem] font-semibold text-white">Key distinction</h3>
              <p className="mt-2 leading-relaxed text-white/75">
                This is a contribution, not a sale. IRC Section 721 is the long-established part of the tax code
                that makes it possible. Your client keeps 100% of what they built.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/nb-courtyard.jpg"
              alt="Brick courtyard apartment building"
              fill
              quality={88}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* For you + for your clients */}
      <Section>
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Intro eyebrow="For you" title="A stronger advisory relationship" />
            <div className="mt-10">
              <FeatureGrid cols={1} items={FOR_YOU} />
            </div>
          </div>
          <div>
            <Intro eyebrow="For your clients" title="A tax-efficient transition to passive income" />
            <div className="mt-10">
              <FeatureGrid cols={1} items={FOR_CLIENTS} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Who we work with */}
      <Section id="who-we-work-with" tone="stone">
        <Container>
          <Intro eyebrow="Who we work with" title="Built for the advisors who know their clients best" />
          <div className="mt-12">
            <FeatureGrid cols={4} items={WHO_WE_WORK_WITH} />
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Intro eyebrow="How it works" title="Three steps to a referral" />
          <Steps items={HOW_IT_WORKS} />
        </Container>
      </Section>

      <CtaBand
        title="Have a client who might benefit?"
        action={{ href: "/contact", label: "Start a conversation" }}
      >
        We can walk through the structure with you and discuss whether it fits your client&apos;s situation.
      </CtaBand>
    </main>
  );
}
