import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Middle Door Homes helps long-term property owners transition from active management to passive income through a 721 exchange – without the tax bill.",
};

const TEAM = [
  {
    name: "Jack Elzinga",
    bio: "Transformative leader with expertise in housing and opportunity activation across institutional and entrepreneurial environments.",
  },
  {
    name: "Jose Torres",
    bio: "Housing executive with deep experience managing large scattered-site residential portfolios and a background in asset management.",
  },
  {
    name: "Robert Callaway",
    bio: "CFO with deep housing finance experience and a track record building organizations through scaled growth.",
  },
  {
    name: "Mike Rozovics",
    bio: "Operations executive with experience running large-scale property programs and driving performance across scattered-site housing portfolios.",
  },
  {
    name: "Yexuan Fan",
    bio: "Data science and AI leader translating machine learning and analytics into practical real estate operating decisions.",
  },
];

const LOGOS = [
  "Home Partners of America",
  "Invitation Homes",
  "LaSalle Investment Management",
  "BCG",
  "CBRE",
  "Landis",
  "Real Foundations",
  "Google",
  "Stanford Business School",
  "Harvard University",
];

const PRINCIPLES = [
  {
    title: "We start with a conversation",
    body: "Not every owner is a good fit, and we will tell you that clearly. We want to understand your building, your financial situation, and your goals before recommending anything.",
  },
  {
    title: "You keep managing nothing",
    body: "Once your building joins the portfolio, our team handles everything – tenants, maintenance, operations. You receive income. That is the entire job.",
  },
  {
    title: "Your income should grow",
    body: "Professional management unlocks income that most individual owners leave on the table. Expense reduction, rent adjustments, and operational efficiency work in your favor.",
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
                We built a third option for long-term owners.
              </h1>
              <Lead>
                Most building owners face a choice: keep managing, or sell and pay 30–40% in taxes.
                Middle Door Homes offers a different path – one that lets you stop managing without
                triggering a taxable event.
              </Lead>
            </div>
            <div className="relative h-[290px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/bldg-14.jpeg"
                alt="Neighborhood multifamily building"
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
                  stake – without a taxable event at closing. No capital gains. No depreciation
                  recapture.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  Why it matters
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling means a large, often
                  unexpected tax bill – typically 30–40% of the building&apos;s value. A 721 exchange
                  defers that entirely. Your equity rolls forward intact.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  What you receive
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  You own a stake in a diversified, professionally managed portfolio. You receive
                  regular distributions from the portfolio – and our team manages everything. No
                  tenant calls. No maintenance coordination. Truly passive income.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  Who it is for
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Owners of 2–49 unit buildings who have held for years, have built significant
                  equity, and are ready to stop managing – but cannot afford the tax cost of a
                  traditional sale.
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
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Our team has managed more than 30,000 homes across scattered-site portfolios at
                some of the largest residential housing operators in the country. We bring that same
                operating playbook to small multifamily buildings – for the first time.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                That experience matters for you. Professional management drives meaningful income
                improvement through expense reduction, rent adjustments, and operational efficiency –
                the same playbook we have applied across tens of thousands of homes.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[340px]">
              <Image
                src="/images/bldg-13.jpg"
                alt="Residential neighborhood with small multifamily buildings"
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
            <Eyebrow>Leadership</Eyebrow>
            <Heading className="mt-3">The team</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-[var(--mdh-line)] bg-white p-5"
                >
                  <p className="font-medium text-[var(--mdh-title)]">{member.name}</p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--mdh-ink)]">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                Team experience from
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {LOGOS.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-[var(--mdh-line)] bg-white px-3 py-1.5 text-[0.8rem] font-medium text-[var(--mdh-subtle)]"
                  >
                    {logo}
                  </span>
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
              <Heading>Ready to learn more?</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                See the full owner overview – including how the 721 exchange works step by step and
                what you can expect to receive.
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
