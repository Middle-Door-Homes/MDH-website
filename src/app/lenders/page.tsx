import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Lenders",
  description:
    "Middle Door Homes offers a conservative credit profile: 15–20% LTV, 3x+ DSCR, occupied assets at acquisition, and non-recourse structure. Learn about our lending partnership opportunity.",
};

const METRICS = [
  { value: "15–20%", label: "Target LTV" },
  { value: "3x+", label: "Debt service coverage" },
  { value: "90%+", label: "Occupancy at acquisition" },
  { value: "Non-recourse", label: "Carve-out only structure" },
];

const CREDIT_PROFILE = [
  {
    title: "Exceptional LTV protection",
    body: "15–20% LTV means asset values would need to fall more than 80% before lender exposure is affected. Urban multifamily has never approached this level of value decline historically.",
  },
  {
    title: "Cash-flowing collateral from day one",
    body: "Buildings are occupied and generating rental income at contribution. There is no lease-up risk and no construction risk — assets enter the portfolio stabilized and cash-flowing.",
  },
  {
    title: "Institutional-grade borrower",
    body: "Our team managed Blackstone's 30,000+ unit scattered-site portfolio across 80+ US markets, and led a capex program that achieved 20%+ NOI improvement on average at Home Partners of America.",
  },
  {
    title: "Acquisition funded without debt",
    body: "The acquisition cost is covered entirely by the owner's 721 exchange contribution — not leverage. Debt is deployed only against renovation and closing costs on assets we already control.",
  },
];

const FACILITY_ROWS = [
  { label: "Facility Type", value: "Revolving portfolio draw facility; buildings added to collateral pool on contribution" },
  { label: "Use of Proceeds", value: "Closing costs at contribution; unit renovation capital deployed as tenants turn" },
  { label: "LTV", value: "Target 15–20% of contributed asset value" },
  { label: "Collateral", value: "Occupied, cash-flowing small multifamily buildings in established urban neighborhoods" },
  { label: "Draw Mechanics", value: "Closing cost draw at contribution; renovation draws tied to unit turn events and completion milestones" },
  { label: "DSCR", value: "3x+ on stabilized portfolio; buildings are cash-flowing from first draw" },
  { label: "Recourse", value: "Non-recourse; carve-out only structure" },
  { label: "Initial Facility Size", value: "$5–15M to start; potential to grow to $50M+ with portfolio performance and scale" },
];

export default function LendersPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>For lenders</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
                A conservative credit profile in stabilized urban housing
              </h1>
              <Lead>
                Middle Door Homes acquires small multifamily buildings through a tax-deferred contribution
                structure. Our debt profile is intentionally conservative — assets enter the portfolio
                occupied, generating cash flow, and at 15–20% LTV.
              </Lead>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Discuss a lending relationship</Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/bldg-01.jpg"
                alt="Institutional quality small multifamily building"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_48%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Key metrics</Eyebrow>
            <Heading className="mt-3">Portfolio credit snapshot</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                  <p className="text-[1.9rem] font-medium tracking-tight text-[var(--mdh-title)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.8rem] uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8">
            <Eyebrow>Credit profile</Eyebrow>
            <Heading className="mt-3">Why this is lower risk than typical multifamily lending</Heading>
            <p className="mt-3 max-w-[66ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              The Middle Door model is structured differently from traditional real estate debt. Our capital
              structure separates acquisition from leverage — the owner's contribution funds the acquisition,
              and debt is limited to renovation and closing costs on assets we already control.
            </p>
            <div className="mt-6 grid gap-5 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {CREDIT_PROFILE.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-white p-5 md:p-6">
                  <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Facility structure</Eyebrow>
            <Heading className="mt-3">Terms overview</Heading>
            <p className="mt-3 max-w-[66ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              We are seeking a primary lending partner to grow with us as we build our portfolio. Our initial
              focus is Chicago, with plans to expand to additional markets. We are looking for a long-term
              relationship — not a transactional lender.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              {FACILITY_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[140px_1fr] gap-4 p-4 md:grid-cols-[200px_1fr] md:p-5 ${
                    i < FACILITY_ROWS.length - 1 ? "border-b border-[var(--mdh-line)]" : ""
                  } ${i % 2 === 0 ? "bg-white" : "bg-[var(--mdh-bg)]"}`}
                >
                  <p className="text-[0.82rem] font-medium uppercase tracking-[0.1em] text-[var(--mdh-subtle)]">
                    {row.label}
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <Eyebrow>The team</Eyebrow>
              <Heading className="mt-3">Institutional operations at scale</Heading>
              <p className="mt-4 text-base leading-relaxed text-[var(--mdh-ink)]">
                Our team has managed 30,000+ homes across 80+ US markets as part of Blackstone's scattered-site
                portfolio at Home Partners of America — with a track record of 20%+ NOI improvement from
                targeted renovation programs.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[var(--mdh-ink)]">
                We bring that same institutional operational discipline to small multifamily — applying proven
                playbooks in acquisitions, renovations, and portfolio management for the first time at scale
                in this asset class.
              </p>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              <Image
                src="/images/bldg-15.jpg"
                alt="Small multifamily building portfolio"
                fill
                quality={90}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <Heading>Interested in a lending relationship?</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                We are building for the long term and looking for a lender partner to grow with us. Reach
                out to start a conversation about the opportunity.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact">Get in touch</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
