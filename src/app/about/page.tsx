import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Middle Door Homes",
  description:
    "Middle Door Homes gives small multifamily investors an institutional-quality exit through a §721 exchange - preserving equity, exiting active operations, and generating passive LP income without a taxable event.",
  alternates: { canonical: "/about" },
};


const LOGOS = [
  { name: "Home Partners of America", file: "home-partners.svg" },
  { name: "Invitation Homes", file: "invitation-homes.svg" },
  { name: "LaSalle Investment Management", file: "lasalle.svg" },
  { name: "BCG", file: "bcg.svg" },
  { name: "CBRE", file: "cbre.svg" },
  { name: "Landis", file: "landis.png" },
  { name: "Real Foundations", file: "real-foundations.svg" },
  { name: "Google", file: "google-wordmark.svg" },
  { name: "Stanford Business School", file: "stanford.svg" },
  { name: "Harvard University", file: "harvard.svg" },
];

const PRINCIPLES = [
  {
    title: "We start with a conversation",
    body: "Not every owner is a good fit, and we will tell you that clearly. We want to understand your building, your financial situation, and your goals before recommending anything.",
  },
  {
    title: "You transition out of operations completely",
    body: "Once your building joins the portfolio, our team handles everything - tenants, maintenance, leasing, compliance. You receive quarterly distributions. That is the entire job.",
  },
  {
    title: "Your returns should improve",
    body: "Institutional management unlocks NOI that most individual operators leave on the table. Expense reduction, rent optimization, and capital efficiency work in your favor from day one.",
  },
  {
    title: "We hold for the long term",
    body: "We are not a fund with a clock running. We are building a durable housing business designed to generate growing passive income for owners over time.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
                We built an institutional-quality exit for small multifamily investors.
              </h1>
              <Lead>
                Most small multifamily investors face the same impasse: keep operating, or sell and
                surrender 30-40% of their equity to taxes. Middle Door Homes was built to offer
                a third path - one that preserves your basis, exits you from active operations,
                and keeps your capital working.
              </Lead>
            </div>
            <div className="relative h-[290px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/hero-brownstones.jpg"
                alt="Classic brownstone row on a tree-lined street"
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

      {/* What is a 721 exchange */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>The 721 exchange</Eyebrow>
            <Heading className="mt-3">A contribution, not a sale</Heading>
            <div className="mt-5 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  How it works
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 721 exchange is an IRS-approved strategy that allows you to contribute your
                  building to a professionally managed portfolio in exchange for a passive ownership
                  stake - without a taxable event at closing. No capital gains. No depreciation
                  recapture.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  Why it matters
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling means a large, often
                  unexpected tax bill - typically 30-40% of the building&apos;s value. A 721 exchange
                  defers that entirely. Your equity rolls forward intact.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  What you receive
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  You own a stake in a diversified, professionally managed portfolio. You receive
                  regular distributions from the portfolio - and our team manages everything. No
                  tenant calls. No maintenance coordination. Truly passive income.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  Who it is for
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Multifamily investors with 2-49 unit holdings who have built meaningful embedded
                  gains, want to exit active operations, and are looking for a tax-efficient way to
                  reallocate their capital into passive income.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Middle Door */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_28px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Why Middle Door</Eyebrow>
              <Heading className="mt-3">Experience managing at scale</Heading>
              <p className="mt-4 text-[1.0rem] font-medium leading-[1.4] text-[var(--mdh-title)]">
                Most small multifamily owners spent years building a position that institutional
                investors envy - and then spent the next decade managing it themselves because no
                better option existed. We built Middle Door to change that.
              </p>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Our team has operated at 30,000+ units of institutional scale - we know what
                we&apos;re acquiring and what it takes to run it well. We bring that same operating
                playbook to small multifamily buildings, for the first time making it accessible
                to owners who built their positions outside the institutional market.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                That depth of experience drives real NOI improvement through expense reduction,
                rent optimization, and capital allocation - the same playbook applied across
                tens of thousands of homes.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[340px]">
              <Image
                src="/images/bldg-06.jpg"
                alt="Classic brick multifamily building in an established neighborhood"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_50%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>How we work</Eyebrow>
            <Heading className="mt-3">What to expect from us</Heading>
            <div className="mt-5 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {PRINCIPLES.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_28px_rgba(18,29,41,0.04)] md:p-8">
            <Eyebrow>Our team</Eyebrow>
            <Heading className="mt-3">Operators who have done this at scale</Heading>
            <div className="mt-5 border-t border-[var(--mdh-line)] pt-6">
              <div className="mb-5 rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                <p className="text-[0.78rem] font-medium uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">
                  Institutional track record
                </p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Our team has operated at 30,000+ units of institutional scale - we know what
                  we&apos;re acquiring and what it takes to run it well.
                </p>
              </div>
              <p className="max-w-[72ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Before founding Middle Door Homes, we led operations at some of the largest
                residential housing platforms in the country - including a 30,000+ home
                scattered-site residential portfolio and a transaction platform that executed
                non-traditional acquisitions at scale. We know how to operate occupied real
                estate at institutional quality, run capital programs without disrupting tenants,
                and structure transactions that work for owners who have spent years building equity.
              </p>
              <p className="mt-3 max-w-[72ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                We built MDH because we saw a gap: the small multifamily investor was being left out
                of a structure that large institutional players have been using for decades.
                We&apos;re changing that.
              </p>
            </div>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                Team experience from
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                {LOGOS.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={logo.file}
                    src={`/images/logos/${logo.file}`}
                    alt={logo.name}
                    className="h-[18px] w-auto max-w-[140px] transition hover:opacity-80"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <Heading>See exactly how this works for you.</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                The full owner overview covers the 721 exchange step by step, what you receive,
                and what your income looks like going forward.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/owners">Owner overview</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
