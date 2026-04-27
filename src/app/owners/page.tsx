import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { FaqAccordion, type FaqGroup } from "@/components/faq";

export const metadata: Metadata = {
  title: "721 Exchange for Property Owners",
  description:
    "Multifamily investors with 2-49 units can contribute their buildings through a §721 exchange - no capital gains, no depreciation recapture, no active management. Receive passive LP income from an institutionally managed portfolio.",
  alternates: { canonical: "/owners" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing" },
  { value: "30,000+", label: "Homes managed at prior platforms" },
  { value: "8-12%", label: "Target annual return" },
];

const BENEFITS = [
  {
    title: "Tax deferral & estate planning",
    body: "No capital gains or depreciation recapture at closing - your full equity basis rolls forward intact. OP units can pass to heirs with a step-up in cost basis, potentially eliminating the deferred tax liability entirely.",
  },
  {
    title: "Continued ownership with upside",
    body: "You own a passive LP stake in a diversified, professionally managed portfolio - with ongoing cash distributions and participation in portfolio appreciation over time.",
  },
  {
    title: "Truly passive income",
    body: "Operational responsibility transfers completely at close. Institutional-grade management handles tenants, maintenance, leasing, and compliance. You receive distributions, not work orders.",
  },
  {
    title: "Structured liquidity post-lockup",
    body: "After an initial lockup period, structured semi-annual redemption windows give you flexibility as your financial needs evolve.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Conversation",
    body: "We discuss your building, your financial situation, and your goals. No obligation - we want to understand if the model is genuinely a good fit.",
  },
  {
    step: "02",
    title: "Evaluation",
    body: "We assess the building and structure the exchange terms. You get full transparency on your passive ownership stake and what to expect.",
  },
  {
    step: "03",
    title: "Contribution",
    body: "You contribute the building via 721 exchange - not a sale. Not a taxable event. Your existing mortgage is paid off at close. Your equity moves forward intact.",
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
    body: "Regular passive income from the portfolio, paid after operating expenses, debt service, and capital reserves - subject to portfolio cash flow.",
  },
  {
    title: "Annual K-1 tax schedules",
    body: "You continue to receive pass-through tax treatment as an LP, including your allocable share of depreciation from the portfolio's properties.",
  },
  {
    title: "Audited financial statements",
    body: "Annual audited financials and quarterly portfolio reports covering occupancy, capital improvements, and market conditions - full transparency into what you own.",
  },
  {
    title: "Nothing to manage",
    body: "Tenants, maintenance, leasing, compliance - all of it transfers at close. You become a passive LP on day one.",
  },
];

const OWNER_FAQ: FaqGroup[] = [
  {
    group: "The 721 Exchange",
    items: [
      {
        q: "What is a 721 exchange?",
        a: "A 721 exchange (also called an UPREIT contribution) is an IRS-approved strategy that lets you contribute real property to an Operating Partnership in exchange for OP units - a passive ownership stake in the partnership. It is a contribution, not a sale, so no taxable event occurs at closing.",
      },
      {
        q: "How is a 721 exchange different from a 1031 exchange?",
        a: "A 1031 exchange also defers taxes, but requires you to identify a replacement property within 45 days and close within 180 - and you end up managing a new building. A 721 exchange has no identification window, no deadline, and no replacement property. You contribute once and exit active ownership permanently.",
      },
      {
        q: "Is this a sale?",
        a: "No. You are contributing your building to the Operating Partnership in exchange for OP units. Because it is a contribution rather than a sale, no capital gains tax or depreciation recapture is triggered at closing.",
      },
      {
        q: "Do I need to be an accredited investor?",
        a: "Yes. OP units are securities and this offering is limited to accredited investors - generally those with a net worth over $1M (excluding primary residence) or annual income above $200K ($300K joint). We can walk you through the requirements.",
      },
    ],
  },
  {
    group: "Tax & Structure",
    items: [
      {
        q: "What taxes do I defer?",
        a: "Both federal long-term capital gains (typically 20%) and depreciation recapture (25% rate on prior depreciation) are deferred at closing. Your equity rolls forward intact. State taxes vary by location.",
      },
      {
        q: "What happens to my deferred taxes eventually?",
        a: "Deferred taxes become due when you sell or redeem your OP units. However, OP units can be passed to heirs with a step-up in cost basis - which can eliminate the deferred tax liability entirely for the next generation.",
      },
      {
        q: "What is my ongoing tax treatment as an OP unit holder?",
        a: "You continue to receive pass-through tax treatment. You receive a K-1 each year reflecting your allocable share of income, deductions, and depreciation from the portfolio's properties.",
      },
      {
        q: "What happens to my mortgage?",
        a: "Your existing mortgage is paid off at closing from the contribution proceeds. Only your net equity moves forward as OP units.",
      },
    ],
  },
  {
    group: "The Process",
    items: [
      {
        q: "What does the process look like from start to finish?",
        a: "We start with a conversation about your building, financial situation, and goals. If it looks like a fit, we assess the building and structure the exchange terms. You review a full term sheet with your advisors. If you proceed, we close the contribution - title transfers, your mortgage is paid off, and your OP units are issued. From that point forward, you are a passive investor.",
      },
      {
        q: "How long does the process take?",
        a: "Typical timeline from first conversation to close is 60-90 days, depending on due diligence complexity and third-party timelines. We move as efficiently as possible.",
      },
      {
        q: "Do I need my own attorney or CPA?",
        a: "Yes, and we encourage it. This is a significant financial transaction and you should have independent counsel review the terms. We will provide full transparency on the documents and work cooperatively with your advisors.",
      },
    ],
  },
  {
    group: "Returns & Income",
    items: [
      {
        q: "What return can I expect?",
        a: "We target 8-12% annualized returns through distributions and portfolio appreciation. For context, a typical balanced advisory portfolio returns 5-7% annually - and that's after you've already surrendered 30-40% of your capital to taxes to get there. The 721 exchange lets your full equity basis work from day one. Returns are not guaranteed and depend on portfolio performance, occupancy, operating expenses, and market conditions.",
      },
      {
        q: "How are distributions paid?",
        a: "Distributions are paid quarterly, after operating expenses, debt service, and capital reserves. The timing and amount will vary with portfolio cash flow.",
      },
      {
        q: "How does my income compare to what I earn now?",
        a: "Most long-term owners are not capturing full income potential - deferred maintenance, below-market rents, and high operating costs reduce returns. Professional management typically drives 20-50%+ incremental cash flow at scale, which can mean meaningfully higher passive income than you are earning today.",
      },
    ],
  },
  {
    group: "Liquidity & Exit",
    items: [
      {
        q: "Can I get my money out?",
        a: "OP units are not publicly traded and are illiquid for an initial lockup period of approximately 2-3 years. After lockup, structured semi-annual redemption windows provide flexibility, but liquidity is not guaranteed on demand. This is a long-term investment.",
      },
      {
        q: "What are the risks I should understand?",
        a: "Real estate investment carries real risk. Property values can decline, occupancy can fall, and returns are never guaranteed. The portfolio is geographically focused, so a broad market downturn would affect returns. Performance depends on MDH's execution - past experience is not a guarantee of future results. We want you to go in with clear expectations.",
      },
      {
        q: "What if I change my mind after contributing?",
        a: "Once you contribute, the building belongs to the Operating Partnership and cannot be returned. OP units can be redeemed in semi-annual windows after the lockup period, but you should treat this as a long-term commitment going in.",
      },
    ],
  },
];

const ownerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: OWNER_FAQ.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a as string },
    }))
  ),
};

export default function OwnersPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ownerFaqSchema) }}
      />
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[46vh] min-h-[300px] md:h-[58vh] md:min-h-[400px]">
              <Image
                src="/images/px-13025296.jpg"
                alt="Classic brick apartment building courtyard"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.80)] via-[rgba(8,16,24,0.25)] to-[rgba(8,16,24,0.06)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  For property owners
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[2.2rem] font-medium leading-[1.06] tracking-[-0.01em] text-white md:text-[3.2rem] lg:text-[3.8rem]">
                  From active landlord<br className="hidden md:block" /> to passive investor -<br className="hidden md:block" /> without the tax bill.
                </h1>
                <p className="mt-4 max-w-[50ch] text-[0.92rem] leading-relaxed text-white/72 md:text-[0.97rem]">
                  You&apos;ve built real equity in multifamily real estate. But between managing tenants, deferred maintenance, and the tax bill that comes with selling, the path forward isn&apos;t obvious. The §721 exchange gives you a better option - passive income, diversified ownership, and no taxable event.
                </p>
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
              You&apos;ve spent years building a concentrated real estate position with significant embedded gains. Selling means surrendering 30-40% of that value to capital gains and depreciation recapture. Managing indefinitely means your capital keeps working - but so do you. Middle Door Homes offers a third path.
            </p>
            <div className="mt-8 grid gap-5 border-t border-[var(--mdh-line)] pt-8 md:grid-cols-3">
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">The tax problem</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling triggers capital gains and
                  depreciation recapture - often costing 30-40% of the building&apos;s value.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">Operational drag on returns</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Small multifamily buildings require constant attention - tenant calls, aging systems,
                  deferred maintenance. At some point, the active management burden stops being worth
                  the return on your time and capital. You built this as an investment, not a job.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">No clean exit from operations</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 1031 exchange defers taxes, but requires identifying a replacement property in 45 days
                  and closing in 180. You&apos;re not exiting active operations - you&apos;re just
                  changing which building you&apos;re running.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section id="solution" className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-2">A 721 exchange - not a sale</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange is an IRS-approved strategy that allows you to contribute your building
                to a professionally managed portfolio, in exchange for a passive ownership stake -
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
                    sale is deferred - so you keep 100% of what you have built.
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                    Why not a 1031 exchange?
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                    A 1031 also defers taxes, but you face a 45-day identification window and 180-day
                    closing deadline - and you end up managing a new building. A 721 exchange has no
                    deadlines and no replacement property. You contribute once and exit active
                    ownership permanently.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/bldg-04.jpg"
                alt="Tree-lined street with classic brick multifamily buildings"
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
                      label: "Exit active operations immediately",
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
                      label: "Upside participation (not fixed distributions)",
                      sale: false, ex1031: true, dst: false, mdh: true,
                    },
                    {
                      label: "Transparency into underlying assets",
                      sale: false, ex1031: true, dst: false, mdh: true,
                    },
                    {
                      label: "Structured redemption windows post-lockup",
                      sale: true, ex1031: true, dst: false, mdh: true,
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
              DST = Delaware Statutory Trust. DSTs defer taxes but use a blind-pool structure with no transparency into owned assets, pay fixed distributions with no upside participation, carry high minimum investment requirements, and offer no redemption mechanism. 1031 exchanges defer tax but require identifying a replacement property within 45 days and closing within 180 - and you remain an active operator afterward.
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
            <div className="mt-4 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">How 8-12% compares</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">Balanced advisor portfolio</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">~5-7% annually - but starting with 60-70 cents on the dollar after you sell and pay taxes to reallocate.</p>
                </div>
                <div>
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">Keep managing the building</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">Similar or lower returns - with full operational responsibility and concentrated single-asset risk.</p>
                </div>
                <div className="rounded-lg border border-[var(--mdh-accent)]/30 bg-white p-3">
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">MDH 721 exchange</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">8-12% target return on <span className="font-medium text-[var(--mdh-title)]">100% of your equity</span> - no tax haircut at contribution, no management burden.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Income growth */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Working with us</Eyebrow>
            <Heading className="mt-2">Grow your NOI, without the operational burden</Heading>
            <div className="mt-5 grid gap-5 border-t border-[var(--mdh-line)] pt-5 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
                <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Most small multifamily owners are not capturing the full NOI potential of their buildings.
                  Deferred maintenance, below-market rents, and high operating costs compress returns
                  year after year.
                </p>
                <div>
                  <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                    Institutional-grade management drives cash flow improvement through expense reduction,
                    rent optimization, and operational efficiency - passing that upside to you as a passive LP.
                  </p>
                  <p className="mt-3 rounded-xl border border-[var(--mdh-line)] bg-white p-4 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                    Professional management delivers{" "}
                    <span className="font-medium text-[var(--mdh-title)]">~20-50%+ incremental cash flow at scale</span>{" "}
                    - the same playbook we apply across the Middle Door portfolio.
                  </p>
                </div>
              </div>
              <div className="relative h-[260px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[300px]">
                <Image
                  src="/images/bldg-08.jpg"
                  alt="Classic brick apartment building"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[center_40%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who qualifies */}
      <Section id="qualifies" className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
              <div>
                <Eyebrow>Qualifying</Eyebrow>
                <Heading className="mt-2">Is this a fit for you?</Heading>
              </div>
              <div className="relative h-[200px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-[160px]">
                <Image
                  src="/images/brn-12168556.jpg"
                  alt="Classic brownstone apartment buildings on a tree-lined street"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-[center_55%]"
                />
              </div>
            </div>
            <div className="mt-6 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-[var(--mdh-title)]">MDH works best if:</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You own one or more multifamily buildings in the 2-49 unit range",
                    "You've held long enough to have meaningful embedded gains",
                    "You're ready to exit active operations, but the tax cost of a sale is too high",
                    "You likely qualify as an accredited investor - most long-term multifamily owners do (net worth over $1M excluding primary residence, or income above $200K)",
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
                    "Your building carries a high mortgage relative to its current value",
                    "You want a short-term exit rather than a long-term passive investment",
                    "The illiquid nature of a private partnership does not fit your financial situation",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                      <span className="mt-0.5 shrink-0 text-[var(--mdh-subtle)]">-</span>
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

      {/* Process */}
      <Section id="process" className="pt-4">
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
              On close, title transfers to the Operating Partnership and your OP units are issued. The
              tenant calls stop. The maintenance requests stop. The first quarterly distribution hits
              your account - that&apos;s the entire job from here.
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

      {/* FAQ */}
      <Section id="faq" className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Common questions</Eyebrow>
            <Heading className="mt-2">Frequently asked questions</Heading>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <FaqAccordion groups={OWNER_FAQ} />
            </div>
            <p className="mt-6 text-[0.8rem] leading-relaxed text-[var(--mdh-muted)]">
              This is illustrative only and does not constitute an offer to sell securities.
              Actual tax liability depends on your individual circumstances. Consult a qualified tax
              and legal advisor before making any decisions.
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
                You built something real. Let&apos;s make sure it keeps working for you.
              </h2>
              <p className="mt-2 max-w-[54ch] text-[0.95rem] leading-relaxed text-white/70">
                No obligation. We start with a conversation to understand your building and your
                goals - and give you an honest answer on whether a 721 exchange is the right fit.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:info@middledoorhomes.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Start the conversation
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
