import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Middle Door Homes",
  description:
    "Middle Door Homes gives small multifamily investors an institutional-quality exit through a §721 exchange, preserving equity, exiting active operations, and generating passive LP income without a taxable event.",
  alternates: { canonical: "/about" },
};


const TEAM = [
  {
    name: "Jack Elzinga",
    title: "Managing Partner",
    photo: "/images/jack-elzinga.jpg",
    bio: "Jack built Middle Door after a decade inside institutional real estate platforms and other leading companies. He helped lead the integration of the 30,000+ home Home Partners of America portfolio through the Blackstone/Tricon merger and drove $120M+ in annualized NOI growth. That work shaped a clear view: the institutional playbook for residential operations had never been packaged in a structure that worked for individual multifamily owners. Harvard BA in Economics, Stanford MBA.",
  },
  {
    name: "Jose Torres",
    title: "Chief Executive Officer",
    photo: "/images/jose-torres.jpg",
    bio: "Jose has operated inside two of the most significant scattered-site residential portfolios built in the last decade. He led portfolio management at Home Partners of America through the Blackstone acquisition and Tricon merger, overseeing 30,000+ homes, and ran asset management and capital markets at Invitation Homes through its IPO. He knows exactly what institutional-quality residential management looks like from the inside. Prior experience at CBRE and RealFoundations.",
  },
  {
    name: "Mike Rozovics",
    title: "EVP, Operations",
    photo: "/images/mike-rozovics.jpg",
    bio: "Mike started his career working residential construction on the south side of Chicago. He went on to run asset management and capital programs for a $10B+ residential portfolio at Home Partners of America, directing renovation, construction, and NOI improvement across dispersed portfolios at scale. That range, from individual units to institutional infrastructure, is the operational core of what Middle Door brings to every contributed building.",
  },
];

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
    body: "Once your building joins the portfolio, our team handles everything: tenants, maintenance, leasing, compliance. You receive quarterly distributions. That is the entire job.",
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
              <h1 className="mt-4 max-w-3xl text-[1.9rem] font-medium tracking-tight text-[var(--mdh-title)] md:text-4xl lg:text-5xl">
                We built an institutional-quality portfolio for small multifamily investors.
              </h1>
              <Lead>
                Many small multifamily investors have spent years building a concentrated real estate
                position and kept managing it themselves because no institutional-quality structure
                for that equity existed. Middle Door Homes was built to change that: contribute your
                building and receive a passive stake in a diversified, professionally managed portfolio,
                with no taxable event at contribution.
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
                  stake, with no taxable event at closing. No capital gains. No depreciation
                  recapture.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  Why it matters
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling means a large, often
                  unexpected tax bill, typically 30-40% of the building&apos;s value. A 721 exchange
                  defers that entirely. Your equity rolls forward intact.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
                  What you receive
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  You own a stake in a diversified, professionally managed portfolio. You receive
                  regular distributions from the portfolio. Our team manages everything. No
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
                Many small multifamily investors spent decades building a concentrated real estate
                position, and continued managing it themselves because no institutional-quality
                exit existed. We built Middle Door to change that.
              </p>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Our team has operated at 30,000+ units of institutional scale. We know what
                we&apos;re acquiring and what it takes to run it well. We bring that same operating
                playbook to small multifamily buildings, for the first time making it accessible
                to owners who built their positions outside the institutional market.
              </p>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                That depth of experience drives real NOI improvement through expense reduction,
                rent optimization, and capital allocation, the same playbook applied across
                tens of thousands of homes.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[340px]">
              <Image
                src="/images/px-29419908.jpg"
                alt="Sunlit brick brownstones on a tree-lined street"
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
            <Heading className="mt-3">Investors &amp; operators who have done this at scale</Heading>
            <div className="mt-5 border-t border-[var(--mdh-line)] pt-5">
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
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {TEAM.map((member) => (
                <div key={member.name} className="rounded-xl border border-[var(--mdh-line)] bg-white p-5 shadow-[0_2px_8px_rgba(18,29,41,0.04)]">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[var(--mdh-line)]">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        quality={90}
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-medium leading-tight text-[var(--mdh-title)]">{member.name}</p>
                      <p className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.13em] text-[var(--mdh-subtle)]">{member.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-[var(--mdh-ink)]">{member.bio}</p>
                </div>
              ))}
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
