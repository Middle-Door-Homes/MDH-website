import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, Container, Eyebrow, Heading, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Middle Door Homes",
  description:
    "Middle Door Homes gives multifamily owners a way out of active management through a §721 exchange: keep your equity, defer the tax, and receive passive income from a diversified portfolio.",
  alternates: { canonical: "/about" },
};


const TEAM = [
  {
    name: "Jack Elzinga",
    title: "Managing Partner",
    photo: "/images/jack-elzinga-2026.jpg",
    bio: "Jack built Middle Door after a decade inside institutional real estate platforms and other leading companies. He helped lead the integration of the 30,000+ home Home Partners of America portfolio through the Blackstone/Tricon merger and drove $120M+ in annual net operating income growth. That work shaped a clear view: the institutional playbook for residential operations had never been packaged in a structure that worked for individual multifamily owners. Harvard BA in Economics, Stanford MBA.",
  },
  {
    name: "Jose Torres",
    title: "Partner & CEO",
    photo: "/images/jose-torres-2026.jpg",
    bio: "Jose has operated inside two of the most significant scattered-site residential portfolios built in the last decade. He was head of asset management at Home Partners of America through the Blackstone acquisition and Tricon merger, overseeing 30,000+ homes, and served as chief of staff within Invitation Homes' finance organization through its IPO. He knows what well-run residential platforms look like from the inside, both operationally and financially. Prior experience at CBRE and RealFoundations.",
  },
  {
    name: "Mike Rozovics",
    title: "Partner & EVP Operations",
    photo: "/images/mike-rozovics-2026.jpg",
    bio: "Mike started his career working residential construction on the south side of Chicago. He went on to run asset management and capital programs for a $10B+ residential portfolio at Home Partners of America, directing renovation, construction, and income growth across dispersed portfolios at scale. That range, from individual units to portfolio-wide systems, is the operational core of what Middle Door brings to every contributed building.",
  },
  {
    name: "Bob Sievewright",
    title: "Principal, Acquisitions",
    photo: "/images/bob-sievewright-2026.jpg",
    bio: "Bob spent nearly fifteen years advising high-net-worth clients on their investments: as a financial advisor at Smith Barney, Vice President of Private Client Services at Bear Stearns, and Senior Vice President of Investments at Morgan Stanley. He went on to found Wright Advisory Group, a sales and business development consultancy. At Middle Door he leads owner, broker, and advisor relationships, bringing long-term owners a way out of active management that keeps their equity working.",
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
    body: "Experienced, full-time management finds income most individual owners leave on the table: lower operating costs, rents set to the market, and capital spent where it pays back.",
  },
  {
    title: "We hold for the long term",
    body: "We are not a fund with a clock running. We are building a durable housing business designed to generate growing passive income for owners over time.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A better next step for multifamily owners."
        lead="Many multifamily owners have spent decades building equity and kept managing because there was no good way out: selling meant a large tax bill, and a 1031 meant another building to run. We built Middle Door Homes to change that."
        image="/images/nb-garden-apartments.jpg"
        imageAlt="Two-story brick garden apartment building under mature oak trees"
      />

      {/* What is a 721 exchange */}
      <Section tone="white">
        <Container>
          <div className="">
            <Eyebrow>The 721 exchange</Eyebrow>
            <Heading className="mt-3">A contribution, not a sale</Heading>
            <div className="mt-5 grid gap-x-12 gap-y-2 md:grid-cols-2">
              <div>
                <h3 className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
                  How it works
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 721 exchange is a long-established part of the tax code that allows you to contribute your
                  building to a professionally managed portfolio in exchange for a passive ownership
                  stake, with no taxable event at closing. No capital gains. No depreciation
                  recapture.
                </p>
              </div>
              <div>
                <h3 className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
                  Why it matters
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
                  Long-term owners carry decades of appreciation. Selling means a large, often
                  unexpected tax bill, typically 30-40% of your gains. A 721 exchange
                  defers that entirely. Your equity rolls forward intact.
                </p>
              </div>
              <div>
                <h3 className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
                  What you receive
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
                  You own a stake in a diversified, professionally managed portfolio. You receive
                  regular distributions from the portfolio. Our team manages everything. No
                  tenant calls. No maintenance coordination. Truly passive income.
                </p>
              </div>
              <div>
                <h3 className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
                  Who it is for
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
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
      <Section>
        <Container>
          <div className="grid gap-x-12 gap-y-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Why Middle Door</Eyebrow>
              <Heading className="mt-3">Experience managing at scale</Heading>
              <p className="mt-4 text-[0.95rem] font-medium leading-[1.4] text-[var(--mdh-title)]">
                We know what it takes to run residential real estate well, because we have done it
                at scale.
              </p>
              <p className="mt-4 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                Our team has operated 30,000+ homes at institutional scale, across some of the largest
                residential platforms in the country. We bring that same operating playbook to every
                multifamily building we own.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden lg:h-full lg:min-h-[340px]">
              <Image
                src="/images/nb-greystone-row.jpg"
                alt="Greystone and brick buildings on a tree-lined street"
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
      <Section tone="white">
        <Container>
          <div className="">
            <Eyebrow>How we work</Eyebrow>
            <Heading className="mt-3">What to expect from us</Heading>
            <div className="mt-5 grid gap-x-12 gap-y-2 md:grid-cols-2">
              {PRINCIPLES.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <div className="">
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
            <div className="mt-6 grid gap-x-12 gap-y-2 md:grid-cols-2">
              {TEAM.map((member) => (
                <div key={member.name} className="border-t border-[var(--mdh-line)] pt-5">
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

      <ClosingCta
        title="See exactly how this works for you."
        body="The full owner overview covers the 721 exchange step by step, what you receive, and what your income looks like going forward."
        cta={{ href: "/owners", label: "Owner overview" }}
      />
    </main>
  );
}
