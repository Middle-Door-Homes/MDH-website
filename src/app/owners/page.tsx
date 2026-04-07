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
  { value: "30,000+", label: "Units of experience" },
  { value: "8–10%+", label: "Target annual return" },
];

const BENEFITS = [
  {
    title: "Tax deferral",
    body: "No capital gains or depreciation recapture; your equity rolls over intact.",
  },
  {
    title: "Continued ownership",
    body: "You own a stake in a diversified portfolio, and benefit from ongoing cash flow and portfolio appreciation.",
  },
  {
    title: "No management",
    body: "Truly passive income from professional management.",
  },
  {
    title: "Liquidity",
    body: "Structured redemption windows give you flexibility as needs evolve.",
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
    body: "You contribute the building via 721 exchange – not a sale. No capital gains. No depreciation recapture. Your equity moves forward intact.",
  },
  {
    step: "04",
    title: "Ongoing income",
    body: "You receive regular distributions from the portfolio. Our team manages everything, working to grow your income over time.",
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
              managing tenants, maintenance, and debt. We have built a third option.
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
                  Traditional buyers are scarce. Selling on the open market is slow, uncertain, and still
                  triggers the tax event. Most owners feel stuck between managing forever and paying to exit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The solution */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-2 lg:items-center">
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
              <div className="mt-5 rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                  The key distinction
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 721 exchange is a contribution, not a sale. The tax event that would occur at
                  sale is deferred – so you keep 100% of what you have built.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[360px]">
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
              DST = Delaware Statutory Trust. 1031 exchanges defer tax but require you to identify and manage a replacement property within strict IRS deadlines.
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

      {/* How it works */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Process</Eyebrow>
            <Heading className="mt-2">Step by step</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
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
