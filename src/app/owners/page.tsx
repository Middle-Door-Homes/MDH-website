import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Property Owners",
  description:
    "From active landlord to passive investor – without the tax bill. A 721 exchange lets you contribute your building, defer taxes entirely, and receive growing passive income.",
};

const STATS = [
  { value: "0%", label: "Taxes at closing" },
  { value: "30,000+", label: "Units managed by leadership team" },
  { value: "8–10%+", label: "Target annual return" },
];

const BENEFITS = [
  {
    title: "Tax deferral & estate planning",
    body: "No capital gains or depreciation recapture at closing — your equity rolls over intact. And OP units can pass to heirs with a step-up in cost basis, potentially eliminating a deferred tax liability entirely.",
  },
  {
    title: "Continued ownership",
    body: "You own a stake in a diversified portfolio, and benefit from ongoing cash flow and portfolio appreciation.",
  },
  {
    title: "No management",
    body: "Truly passive income from professional management. No tenant calls, no maintenance coordination, no 2am emergencies.",
  },
  {
    title: "Liquidity",
    body: "After an initial lockup period, structured redemption windows give you flexibility as your needs evolve.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Conversation",
    body: "We discuss your building, your financial situation, and your goals. No obligation – we want to understand if the model is genuinely a good fit.",
  },
  {
    step: "02",
    title: "Evaluation",
    body: "We assess the building and structure the exchange terms. You get full transparency on your passive ownership stake and what to expect.",
  },
  {
    step: "03",
    title: "Contribution",
    body: "You contribute the building via 721 exchange – not a sale. Not a taxable event. Your existing mortgage is paid off at close. Your equity moves forward intact.",
  },
  {
    step: "04",
    title: "Ongoing income",
    body: "You receive regular distributions from the portfolio. Our team manages everything, working to grow your income over time.",
  },
];

const AFTER_CLOSE = [
  {
    title: "Quarterly distributions",
    body: "Regular income from the portfolio, paid after operating expenses, debt service, and capital reserves — subject to portfolio cash flow.",
  },
  {
    title: "Annual K-1 tax schedules",
    body: "You continue to receive pass-through tax treatment, including your allocable share of depreciation from the portfolio's properties.",
  },
  {
    title: "Audited financial statements",
    body: "Annual audited financials and quarterly portfolio reports covering occupancy, renovation progress, and market conditions.",
  },
  {
    title: "Nothing to manage",
    body: "Tenants, maintenance, leasing, compliance — all of it transfers on close. You are a passive investor from day one.",
  },
];

const RISKS = [
  {
    title: "Illiquidity",
    body: "OP units are not publicly traded. There is a lockup period of 2–3 years from contribution. After lockup, semi-annual redemption windows open, but liquidity is not guaranteed on demand.",
  },
  {
    title: "Market risk",
    body: "Property values can decline. Your OP units are linked to the portfolio's underlying value. Real estate investment carries real risk, and returns are never guaranteed.",
  },
  {
    title: "Concentration",
    body: "The portfolio is geographically focused. We diversify across neighborhoods and building types, but a broad downturn would affect returns.",
  },
  {
    title: "Management execution",
    body: "The portfolio's performance depends on MDH's execution. We believe our team is well-equipped for this — but past experience is not a guarantee of future results.",
  },
];

export default function OwnersPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[46vh] min-h-[300px] md:h-[58vh] md:min-h-[400px]">
              <Image
                src="/images/bldg-14.jpeg"
                alt="Classic brick apartment building in an established urban neighborhood"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.80)] via-[rgba(8,16,24,0.25)] to-[rgba(8,16,24,0.06)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  For property owners
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[2.2rem] font-medium leading-[1.06] tracking-[-0.01em] text-white md:text-[3.2rem] lg:text-[3.8rem]">
                  From active landlord<br className="hidden md:block" /> to passive investor –<br className="hidden md:block" /> without the tax bill.
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
            <p className="font-display max-w-3xl text-[1.6rem] font-medium leading-[1.25] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[2.1rem]">
              You&apos;ve built equity over decades. Selling means a significant tax bill. Holding means
              managing tenants, maintenance, and debt. Middle Door Homes offers a third option.
            </p>
            <div className="mt-8 grid gap-5 border-t border-[var(--mdh-line)] pt-8 md:grid-cols-3">
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">The tax problem</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling triggers capital gains and
                  depreciation recapture – often costing 30–40% of the building&apos;s value.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">Management fatigue</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Small multifamily buildings require constant attention – tenant calls, aging systems,
                  deferred maintenance. Many owners reach a point where the income no longer justifies the effort.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">No clean way out</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 1031 exchange defers taxes, but you must identify a replacement property in 45 days,
                  close in 180, and then manage whatever you buy. You&apos;re not exiting landlord life –
                  you&apos;re just changing which building you&apos;re managing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-2">A 721 exchange – not a sale</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange is an IRS-approved strategy that allows you to contribute your building
                to a professionally managed portfolio, in exchange for a passive ownership stake –
                without a taxable event at closing.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                You do not sell. You do not lose your income. You simply stop managing. Your equity
                moves forward intact into a diversified, professionally operated portfolio.
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                    The key distinction
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                    A 721 exchange is a contribution, not a sale. The tax event that would occur at
                    sale is deferred – so you keep 100% of what you have built.
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                    Why not a 1031 exchange?
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                    A 1031 also defers taxes, but you face a 45-day identification window and 180-day
                    closing deadline – and you end up managing a new building. A 721 exchange has no
                    deadlines and no replacement property. You contribute once and exit active
                    ownership permanently.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/bldg-15.jpg"
                alt="Multifamily building exterior"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison chart */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Compare your options</Eyebrow>
            <Heading className="mt-2">How a 721 exchange stacks up</Heading>
            <div className="mt-6 overflow-x-auto border-t border-[var(--mdh-line)] pt-6">
              <table className="w-full min-w-[540px] text-[0.9rem]">
                <thead>
                  <tr>
                    <th className="w-[34%] pb-3 pr-4 text-left text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]" />
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">Sale</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">1031 Exchange</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">DST</th>
                    <th className="pb-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-accent)]">Middle Door</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--mdh-line)]">
                  {[
                    {
                      label: "Tax deferred at closing",
                      sale: false, ex1031: true, dst: true, mdh: true,
                    },
                    {
                      label: "Stop managing immediately",
                      sale: true, ex1031: false, dst: true, mdh: true,
                    },
                    {
                      label: "No replacement property to find",
                      sale: true, ex1031: false, dst: true, mdh: true,
                    },
                    {
                      label: "Diversified real estate portfolio",
                      sale: false, ex1031: false, dst: true, mdh: true,
                    },
                    {
                      label: "Purpose-built for small multifamily",
                      sale: false, ex1031: false, dst: false, mdh: true,
                    },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="py-3 pr-4 font-medium text-[var(--mdh-title)]">{row.label}</td>
                      {[row.sale, row.ex1031, row.dst].map((val, i) => (
                        <td key={i} className="py-3 pr-4 text-center">
                          {val
                            ? <span className="text-emerald-600 font-bold">✓</span>
                            : <span className="text-[var(--mdh-line)] font-bold">✗</span>
                          }
                        </td>
                      ))}
                      <td className="py-3 text-center">
                        {row.mdh
                          ? <span className="text-emerald-600 font-bold">✓</span>
                          : <span className="text-[var(--mdh-line)] font-bold">✗</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-[var(--mdh-muted)]">
              DST = Delaware Statutory Trust. 1031 exchanges defer tax but require identifying a replacement property within 45 days and closing within 180 – and you remain an active landlord afterward.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>What you receive</Eyebrow>
            <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {BENEFITS.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
                  <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Income growth */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Working with us</Eyebrow>
            <Heading className="mt-2">Grow your income, without the work</Heading>
            <div className="mt-5 grid gap-5 border-t border-[var(--mdh-line)] pt-5 md:grid-cols-2">
              <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Most long-term owners are not capturing the full income potential of their buildings.
                Deferred maintenance, below-market rents, and high operating costs eat into returns
                year after year.
              </p>
              <div>
                <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Professional management grows cash flow through expense reduction and rent
                  adjustments – offering you a share of truly passive, growing income.
                </p>
                <p className="mt-3 rounded-xl border border-[var(--mdh-line)] bg-white p-4 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Professional management delivers{" "}
                  <span className="font-medium text-[var(--mdh-title)]">~20–50%+ incremental cash flow at scale</span>{" "}
                  – the same playbook we apply across the Middle Door portfolio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who qualifies */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Qualifying</Eyebrow>
            <Heading className="mt-2">Is this a fit for you?</Heading>
            <div className="mt-6 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">MDH works best if:</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You own one or multiple 2–49 unit multifamily buildings",
                    "You've built meaningful equity",
                    "You're ready to stop managing – but the tax cost of a sale feels too high",
                    "You qualify as an accredited investor (generally: net worth over $1M excluding primary residence, or annual income above $200K)",
                    "Your mortgage is moderate relative to the building's value",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                      <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">It&apos;s probably not the right fit if:</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You need immediate, unrestricted liquidity",
                    "Your building carries a high mortgage relative to its value",
                    "You're looking for a quick exit rather than a long-term passive investment",
                    "The illiquid nature of a private partnership doesn't match your financial situation",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                      <span className="mt-0.5 shrink-0 text-[var(--mdh-subtle)]">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-[var(--mdh-ink)]">
                  The best way to find out is a conversation. There&apos;s no cost, no obligation, and
                  we&apos;ll give you an honest answer.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Process</Eyebrow>
            <Heading className="mt-2">Step by step</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-5 md:p-6">
                  <p className="shrink-0 text-[1.5rem] font-medium leading-none tracking-[-0.02em] text-[var(--mdh-line)]">
                    {item.step}
                  </p>
                  <div>
                    <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                    <p className="mt-2 text-[0.91rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* After you close */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>The owner experience</Eyebrow>
            <Heading className="mt-2">What happens after you contribute</Heading>
            <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              On close, title transfers to the Operating Partnership and your OP units are issued. From
              that point forward, you are a passive investor. Everything operational transfers to MDH.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {AFTER_CLOSE.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5">
                  <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What to know — risks */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>What to know</Eyebrow>
            <Heading className="mt-2">A few things to understand upfront</Heading>
            <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              We want owners to go into this with clear expectations. Real estate investment carries
              real risk, and we would rather be honest upfront than close a transaction that
              doesn&apos;t serve you well.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {RISKS.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                  <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.88rem] leading-relaxed text-[var(--mdh-muted)]">
              MDH is structured conservatively – low leverage on high-quality, occupied, cash-flowing
              collateral – which reduces downside risk relative to more aggressive real estate strategies.
              This is illustrative only and does not constitute an offer to sell securities.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="font-display text-[1.7rem] font-medium leading-tight tracking-[-0.01em] text-white md:text-[2.1rem]">
                Ready to explore your options?
              </h2>
              <p className="mt-2 max-w-[54ch] text-[0.95rem] leading-relaxed text-white/70">
                There is no obligation. We start with a conversation to understand your building and
                your goals – and to see whether a 721 exchange is the right fit for you.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:info@middledoorhomes.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Request a conversation
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
