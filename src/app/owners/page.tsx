import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, Container, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { FaqAccordion, type FaqGroup } from "@/components/faq";
import { TaxCalculator } from "@/components/calculator";

export const metadata: Metadata = {
  title: "721 Exchange for Property Owners",
  description:
    "Owners of 2-49 unit multifamily buildings can contribute their building through a §721 exchange: no tax at closing and no more management. Receive quarterly distributions from a professionally managed portfolio.",
  alternates: { canonical: "/owners" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing" },
  { value: "30,000+", label: "Units of experience" },
  { value: "8-12%", label: "Target annual return" },
];

const BENEFITS = [
  {
    title: "Tax deferral & estate planning",
    body: "No capital gains or depreciation recapture at closing. Your full equity basis rolls forward intact. Ownership units can pass to heirs with a step-up in cost basis, potentially eliminating the deferred tax liability entirely.",
  },
  {
    title: "Continued ownership with upside",
    body: "You own a share of a diversified, professionally managed portfolio, with quarterly distributions and a share of its growth over time.",
  },
  {
    title: "Truly passive income",
    body: "Our team handles tenants, maintenance, leasing, and compliance. You receive distributions, not work orders.",
  },
  {
    title: "Structured liquidity",
    body: "A three-year minimum hold applies to all units. From year four, we target quarterly repurchase windows, at your option and subject to portfolio liquidity.",
  },
];

const SITUATIONS = [
  {
    title: "Tired of managing",
    body: "You have held a long time, built a large gain, and you are done with tenants and repairs.",
    number: "$1M building: ~$540K after a cash sale vs. ~$740K through us",
  },
  {
    title: "Loan maturing",
    body: "Refinancing at today's rates can mean a much larger payment on the same building and the same management.",
    number: "A refi can double your payment. We pay the loan off at closing.",
  },
  {
    title: "Planning a 1031",
    body: "A 1031 defers the tax, but only by taking on another building to find, finance, close, and run.",
    number: "Same deferral, no 45-day clock, no new building",
  },
  {
    title: "Building with upside left",
    body: "Rents that could be higher and units that could be updated. Sell as-is and the next owner keeps that upside.",
    number: "Listed at $1.2M: ~$1.0M as-is vs. ~$1.3-1.4M after the work",
  },
];

const PARTNERSHIP_POINTS = [
  {
    title: "Today's value stays yours",
    body: "The building's value today is yours in full. The upside comes on top.",
  },
  {
    title: "We handle the work",
    body: "We own renovations, operations, and rents. You stay fully passive.",
  },
  {
    title: "50/50 on the gain",
    body: "Everything above today's value is split with you, which is how owners typically end up well past any as-is sale.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Conversation",
    body: "We discuss your building, your financial situation, and your goals. No obligation. We want to understand if the model is genuinely a good fit.",
  },
  {
    step: "02",
    title: "Evaluation",
    body: "We assess the building and structure the exchange terms. You get full transparency on your passive ownership stake and what to expect.",
  },
  {
    step: "03",
    title: "Contribution",
    body: "You contribute the building via 721 exchange, not a sale. Not a taxable event. Your existing mortgage is paid off at close. Your equity moves forward intact.",
  },
  {
    step: "04",
    title: "Ongoing income",
    body: "You receive quarterly distributions from a diversified portfolio. Our team manages all operations, working to grow the portfolio's value and income over time.",
  },
];

const AFTER_CLOSE = [
  {
    title: "Quarterly distributions",
    body: "Regular passive income from the portfolio, paid after operating expenses, debt service, and capital reserves, subject to portfolio cash flow.",
  },
  {
    title: "An annual K-1",
    body: "You keep pass-through tax treatment and receive a Schedule K-1, the yearly tax form a partnership sends its owners. What it is worth in a given year depends on your own basis.",
  },
  {
    title: "Audited financial statements",
    body: "Annual audited financials and quarterly portfolio reports covering occupancy, capital improvements, and market conditions, with full transparency into what you own.",
  },
  {
    title: "Nothing to manage",
    body: "Tenants, maintenance, leasing, compliance: all transfer at close. You are a passive owner from day one.",
  },
];

const OWNER_FAQ: FaqGroup[] = [
  {
    group: "The 721 Exchange",
    items: [
      {
        q: "What is a 721 exchange?",
        a: "A 721 exchange (also called an UPREIT contribution) is a long-established part of the tax code that lets you contribute real property to an operating partnership in exchange for ownership units (often called OP units): a passive ownership stake in the partnership. It is the same tool large REITs have used for decades to buy from owners who did not want to sell. What is new is applying it to buildings your size. It is a contribution, not a sale, so no taxable event occurs at closing.",
      },
      {
        q: "How is a 721 exchange different from a 1031 exchange?",
        a: "A 1031 exchange also defers taxes, but requires you to identify a replacement property within 45 days and close within 180, and you end up managing a new building. A 721 exchange has no identification window, no deadline, and no replacement property. You contribute once and exit active ownership permanently.",
      },
      {
        q: "Is this a sale?",
        a: "No. You are contributing your building to our partnership in exchange for ownership units. Because it is a contribution rather than a sale, no capital gains tax or depreciation recapture is triggered at closing.",
      },
      {
        q: "Do I need to be an accredited investor?",
        a: "Yes. Ownership units are securities and this offering is limited to accredited investors: generally those with a net worth over $1M (excluding primary residence) or annual income above $200K ($300K joint). We can walk you through the requirements.",
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
        a: "Deferred taxes become due when you sell or redeem your units. However, units can be passed to heirs with a step-up in cost basis, which can eliminate the deferred tax liability entirely for the next generation.",
      },
      {
        q: "What is my ongoing tax treatment as a unit holder?",
        a: "You keep pass-through tax treatment and receive a Schedule K-1 each year. What that is worth in a given year depends on your own basis.",
      },
      {
        q: "What happens to my mortgage?",
        a: "Your existing mortgage is paid off at closing from the contribution proceeds. Only your net equity moves forward as ownership units.",
      },
    ],
  },
  {
    group: "The Process",
    items: [
      {
        q: "What does the process look like from start to finish?",
        a: "We start with a conversation about your building, financial situation, and goals. If it looks like a fit, we assess the building and structure the exchange terms. You review a full term sheet with your advisors. If you proceed, we close the contribution. Title transfers, your mortgage is paid off, and your ownership units are issued. From that point forward, you are a passive investor.",
      },
      {
        q: "How long does the process take?",
        a: "Typically a few months from first conversation to close, depending on due diligence and third-party timelines. We move as efficiently as possible.",
      },
      {
        q: "Where do you buy?",
        a: "We are a national platform. Within our cities we concentrate on neighborhoods with real tenant demand, proximity to employment and a trajectory we have conviction in, rather than areas already priced for perfection.",
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
        a: "We target 8-12% annualized returns through distributions and portfolio appreciation. For context, a typical balanced advisory portfolio returns 5-7% annually, and that's after you've already surrendered 30-40% of your capital to taxes to get there. The 721 exchange lets your full equity basis work from day one. Returns are not guaranteed and depend on portfolio performance, occupancy, operating expenses, and market conditions.",
      },
      {
        q: "How do distributions work?",
        a: "You receive 100% of the first 6% of annual total return before we participate at all. Above that, 70% goes to unit holders and 30% to us up to a 12% return, and the excess above 12% is split 50/50. We never take more than 30% of a year's total return, and if portfolio value falls we earn nothing further until it recovers. Distributions are targeted quarterly, subject to portfolio cash flow.",
      },
      {
        q: "How does Middle Door Homes make money?",
        a: "An annual management fee of 1.25% of assets under management, our share of the upside above the 6% preferred return, and our own units alongside yours. We do our best when the portfolio does.",
      },
      {
        q: "How does my income compare to what I earn now?",
        a: "Most long-term owners are not capturing full income potential: deferred maintenance, below-market rents, and high operating costs reduce returns. Our team has driven $120M+ in annual net operating income growth across a 30,000+ home portfolio, and we bring the same playbook to every building we own.",
      },
    ],
  },
  {
    group: "Liquidity & Exit",
    items: [
      {
        q: "Can I get my money out?",
        a: "Ownership units are not publicly traded. A three-year minimum hold applies to all units. From year four, we target quarterly repurchase windows, at your option and subject to portfolio liquidity. Liquidity is not guaranteed on demand, so treat this as a long-term investment.",
      },
      {
        q: "What are the risks I should understand?",
        a: "Real estate investment carries real risk. Property values can decline, occupancy can fall, and returns are never guaranteed. The portfolio is geographically focused, so a broad market downturn would affect returns. Performance depends on MDH's execution. Past experience is not a guarantee of future results. We want you to go in with clear expectations.",
      },
      {
        q: "What if I change my mind after contributing?",
        a: "Once you contribute, the building belongs to the partnership and cannot be returned. Units can be redeemed through quarterly repurchase windows from year four, but you should treat this as a long-term commitment going in.",
      },
    ],
  },
  {
    group: "Terms in plain English",
    items: [
      { q: "Ownership units (OP units)", a: "Your stake in our partnership, received instead of cash when you contribute your building." },
      { q: "Section 721 contribution", a: "Contributing a building to a partnership in exchange for ownership units, without triggering tax at the time of transfer. Often called a 721 exchange." },
      { q: "Depreciation recapture", a: "Tax owed on depreciation you have already deducted. It is why the tax bill on a sale is usually larger than owners expect." },
      { q: "Basis", a: "Your tax cost in the building. Your gain is measured against it." },
      { q: "Preferred return", a: "The first 6% of annual total return, which owners receive in full before we participate." },
      { q: "K-1", a: "The yearly tax form a partnership sends its owners." },
      { q: "Accredited investor", a: "Someone who meets an income or net worth test and can therefore own securities like our units." },
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
      <PageHero
        eyebrow="For property owners"
        title="Turn your real estate equity into a diversified portfolio."
        lead="Contribute your building instead of selling it. You receive ownership in a diversified portfolio of neighborhood buildings, owe no tax at closing, and hand off the management on day one."
        image="/images/nb-brick-threeflats.jpg"
        imageAlt="Brick three-flats on a tree-lined street"
        stats={STATS}
      />

      {/* Pitch */}
      <Section tone="white">
        <Container>
          <div className="">
            <p className="font-display max-w-4xl text-[1.35rem] leading-[1.45] text-[var(--mdh-title)] md:text-[1.65rem]">
              You&apos;ve spent years building equity in your building. Selling means giving up 30-40% of your gains to capital gains tax and depreciation recapture, the tax on depreciation you&apos;ve already deducted. Holding means staying a landlord, with everything riding on one property. Middle Door Homes offers a third path.
            </p>
            <div className="mt-8 grid gap-5 border-t border-[var(--mdh-line)] pt-8 md:grid-cols-3">
              <div>
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">The tax problem</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling triggers capital gains and
                  depreciation recapture, often costing 30-40% of your gains.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">Operational drag on returns</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Multifamily buildings require constant attention: tenant calls, aging systems,
                  deferred maintenance. At some point, the active management burden stops being worth
                  the return on your time and capital. You built this as an investment, not a job.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">No clean exit from operations</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 1031 exchange defers taxes, but requires identifying a replacement property in 45 days
                  and closing in 180. You&apos;re not exiting active operations; you&apos;re just
                  changing which building you&apos;re running.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Situations */}
      <Section>
        <Container>
          <div className="">
            <Eyebrow>Where owners start</Eyebrow>
            <Heading className="mt-2">Which sounds like you?</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {SITUATIONS.map((item) => (
                <div key={item.title} className="flex flex-col border-t border-[var(--mdh-line)] pt-5">
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  <p className="mt-4 border-t border-[var(--mdh-line)] pt-3 text-[0.9rem] font-medium leading-snug text-[var(--mdh-title)]">
                    {item.number}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-[var(--mdh-muted)]">
              Illustrative round numbers. Figures will differ for your building.
            </p>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section id="solution" tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-2">A 721 exchange, not a sale</Heading>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange is a long-established part of the tax code that allows you to contribute your building
                to a professionally managed portfolio, in exchange for a passive ownership stake,
                with no taxable event at closing.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                You do not sell. Your equity moves forward intact into a diversified, professionally operated portfolio.
              </p>
              <div className="mt-5 space-y-3">
                <div className="border-t border-[var(--mdh-line)] pt-5">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                    The key distinction
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                    A 721 exchange is a contribution, not a sale. The tax event that would occur at
                    sale is deferred, so you keep 100% of what you have built.
                  </p>
                </div>
                <div className="border-t border-[var(--mdh-line)] pt-5">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                    Why not a 1031 exchange?
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                    A 1031 also defers taxes, but you face a 45-day identification window and 180-day
                    closing deadline, and you end up managing a new building. A 721 exchange has no
                    deadlines and no replacement property. You contribute once and exit active
                    ownership permanently.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden lg:h-full lg:min-h-[420px]">
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

      {/* Value creation */}
      <Section>
        <Container>
          <div className="">
            <Eyebrow>How returns are generated</Eyebrow>
            <Heading className="mt-2">We invest in the buildings. You get paid first.</Heading>
            <p className="mt-4 max-w-[64ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              MDH doesn&apos;t manage contributed buildings passively. We evaluate each property for value-creation potential and deploy capital where it generates the most impact: higher net operating income (rent minus operating costs), better occupancy, and where the building allows, additional units for incremental cash flow.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div className="border-t border-[var(--mdh-line)] pt-5">
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">Building-level capital review</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  We assess every contributed building for capital improvement opportunities. Where improvements generate measurable returns, MDH arranges renovation financing and executes: systems upgrades, unit renovations, and where feasible, additional units created for incremental cash flow. No capital required from you.
                </p>
              </div>
              <div className="border-t border-[var(--mdh-line)] pt-5">
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">You are paid first</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  You receive 100% of the first 6% of annual total return before we participate at all. Above that, 70% goes to unit holders and 30% to us up to a 12% return, and the excess above 12% is split 50/50.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-[var(--mdh-line)] pt-5">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">The alignment</p>
              <p className="mt-2 text-[0.97rem] font-medium leading-snug text-[var(--mdh-title)]">
                We never take more than 30% of a year&apos;s total return, and if portfolio value falls we earn nothing further until it recovers. We hold our own units alongside yours.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value-add partnership */}
      <Section id="partnership" tone="white">
        <Container>
          <div className="">
            <Eyebrow>For buildings with upside left in them</Eyebrow>
            <Heading className="mt-2">The value-add partnership</Heading>
            <p className="mt-4 max-w-[64ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              Some buildings are worth more after the work than any as-is buyer will pay. For those, we offer a partnership: your building goes into a single-asset partnership with us, we handle the renovation, operations, and rents, and the increase in value is split 50/50 with you.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {PARTNERSHIP_POINTS.map((item) => (
                <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison chart */}
      <Section>
        <Container>
          <div className="">
            <Eyebrow>Compare your options</Eyebrow>
            <Heading className="mt-2">How a 721 exchange stacks up</Heading>
            <div className="mt-6 -mx-6 overflow-x-auto border-t border-[var(--mdh-line)] pt-6 md:-mx-8">
              <div className="px-6 md:px-8">
              <table className="w-full min-w-[720px] text-[0.9rem]">
                <thead>
                  <tr>
                    <th className="w-[28%] pb-3 pr-4 text-left text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]" />
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">Self-manage</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">Hire PM</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">Sale</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">1031</th>
                    <th className="pb-3 pr-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">DST</th>
                    <th className="pb-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-accent)]">Middle Door</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--mdh-line)]">
                  {[
                    {
                      label: "No tax event at transition",
                      selfManage: true, hirePm: true, sale: false, ex1031: true, dst: true, mdh: true,
                    },
                    {
                      label: "Exit active operations completely",
                      selfManage: false, hirePm: false, sale: true, ex1031: false, dst: true, mdh: true,
                    },
                    {
                      label: "Ongoing upside participation (vs. fixed distributions)",
                      selfManage: true, hirePm: true, sale: false, ex1031: true, dst: false, mdh: true,
                    },
                    {
                      label: "Diversified portfolio exposure",
                      selfManage: false, hirePm: false, sale: false, ex1031: false, dst: true, mdh: true,
                    },
                    {
                      label: "Renovation capital & value creation provided",
                      selfManage: false, hirePm: false, sale: false, ex1031: false, dst: false, mdh: true,
                    },
                    {
                      label: "Purpose-built for 2-49 unit buildings",
                      selfManage: false, hirePm: false, sale: false, ex1031: false, dst: false, mdh: true,
                    },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="py-3 pr-4 font-medium text-[var(--mdh-title)]">{row.label}</td>
                      {[row.selfManage, row.hirePm, row.sale, row.ex1031, row.dst].map((val, i) => (
                        <td key={i} className="py-3 pr-4 text-center">
                          {val
                            ? <span className="text-[#b8894f] font-bold">✓</span>
                            : <span className="text-[var(--mdh-line)] font-bold">✗</span>
                          }
                        </td>
                      ))}
                      <td className="py-3 text-center">
                        {row.mdh
                          ? <span className="text-[#b8894f] font-bold">✓</span>
                          : <span className="text-[var(--mdh-line)] font-bold">✗</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
            <div className="mt-5 border-t border-[var(--mdh-line)] pt-5">
              <p className="text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                <span className="font-medium text-[var(--mdh-title)]">Middle Door is the only structure that clears all three: </span>
                no tax event at contribution, complete exit from active management, and ongoing upside participation. Every other option trades at least one away.
              </p>
            </div>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-[var(--mdh-muted)]">
              DST = Delaware Statutory Trust. DSTs defer taxes but require a 1031 exchange process, use a blind-pool structure with fixed distributions and limited upside, and offer no redemption mechanism. Hiring a property manager reduces but does not eliminate active ownership: owners remain responsible for capital decisions and pay 8-10% of gross rents regardless of performance. 1031 exchanges defer tax but require identifying a replacement property within 45 days and closing within 180, and you remain an active operator afterward.
            </p>
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <div id="calculator" className="scroll-mt-20">
        <TaxCalculator />
      </div>

      {/* Benefits */}
      <Section tone="white">
        <Container>
          <div className="">
            <Eyebrow>What you receive</Eyebrow>
            <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {BENEFITS.map((item) => (
                <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-[var(--mdh-line)] pt-5">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">How 8-12% compares</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">Balanced advisor portfolio</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">~5-7% annually, but starting with 60-70 cents on the dollar after you sell and pay taxes to reallocate.</p>
                </div>
                <div>
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">Keep managing the building</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">Similar or lower returns, with full operational responsibility and concentrated single-asset risk.</p>
                </div>
                <div className="border-t border-[var(--mdh-line)] pt-5">
                  <p className="text-[0.88rem] font-medium text-[var(--mdh-title)]">MDH 721 exchange</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">8-12% target return on <span className="font-medium text-[var(--mdh-title)]">100% of your equity</span>: no tax haircut at contribution, no management burden.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Income growth */}
      <Section>
        <Container>
          <div className="">
            <Eyebrow>Working with us</Eyebrow>
            <Heading className="mt-2">How professional management grows your income</Heading>
            <div className="mt-5 grid gap-5 border-t border-[var(--mdh-line)] pt-5 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
                <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Many owners are not earning everything their building could. Deferred maintenance,
                  below-market rents, and high operating costs hold returns down year after year.
                </p>
                <div>
                  <p className="text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                    Full-time, experienced management lifts income through lower operating costs, rents set
                    to the market, and efficient operations. That upside flows to you as an owner.
                  </p>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)] border-t border-[var(--mdh-line)] pt-5">
                    Our team has driven{" "}
                    <span className="font-medium text-[var(--mdh-title)]">$120M+ in annual net operating income growth</span>
                    {" "}across a 30,000+ home portfolio. We bring the same playbook to every building we own.
                  </p>
                </div>
              </div>
              <div className="relative h-[260px] overflow-hidden lg:h-full lg:min-h-[300px]">
                <Image
                  src="/images/nb-courtyard.jpg"
                  alt="Brick courtyard apartment building with a garden walkway"
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
      <Section id="qualifies" tone="white">
        <Container>
          <div className="">
            <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
              <div>
                <Eyebrow>Qualifying</Eyebrow>
                <Heading className="mt-2">Is this a fit for you?</Heading>
              </div>
              <div className="relative hidden h-[200px] overflow-hidden lg:block lg:h-[160px]">
                <Image
                  src="/images/nb-entrance.jpg"
                  alt="Building entrance with stone steps and a wooden door"
                  fill
                  quality={90}
                  sizes="320px"
                  className="object-cover object-[center_55%]"
                />
              </div>
            </div>
            <div className="mt-6 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">MDH works best if:</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You own one or more multifamily buildings in the 2-49 unit range",
                    "You've held long enough to build up a large gain",
                    "You're ready to exit active operations, but the tax cost of a sale is too high",
                    "You likely qualify as an accredited investor; most long-term multifamily owners do (net worth over $1M excluding primary residence, or income above $200K)",
                    "You do not need a debt-free building: we pay off your mortgage at closing",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                      <span className="mt-0.5 shrink-0 text-[#b8894f]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">It&apos;s probably not the right fit if:</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You need immediate, unrestricted liquidity",
                    "Your mortgage is close to the building's value, leaving little equity to contribute",
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
      <Section id="process">
        <Container>
          <div className="">
            <Eyebrow>Process</Eyebrow>
            <Heading className="mt-2">Step by step</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex gap-4 border-t border-[var(--mdh-line)] pt-5">
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
      <Section tone="white">
        <Container>
          <div className="">
            <Eyebrow>The owner experience</Eyebrow>
            <Heading className="mt-2">What happens after you contribute</Heading>
            <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
              On close, the building transfers to our partnership and your ownership units are issued. Your equity is now a passive stake in a diversified, professionally managed portfolio. The first quarterly distribution hits your account. That is the entire job from here.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {AFTER_CLOSE.map((item) => (
                <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <div className="">
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

      <ClosingCta
        title="You built something real. Let's make sure it keeps working for you."
        body="No obligation. We start with a conversation to understand your building and your goals, and give you an honest answer on whether a 721 exchange is the right fit."
        cta={{ href: "/contact", label: "Send us an address" }}
      />
    </main>
  );
}
