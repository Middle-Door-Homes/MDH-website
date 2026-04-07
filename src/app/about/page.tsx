import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Middle Door Homes is an institutional small multifamily platform applying a proven scattered-site operating playbook to a $5 trillion underserved housing category.",
};

const PRINCIPLES = [
  {
    title: "Operations first",
    body: "Returns are driven by operational performance, not market timing or financial engineering. We underwrite for durability and execute for consistency.",
  },
  {
    title: "Conservative by design",
    body: "Low leverage, stabilized assets, and disciplined acquisition criteria. The portfolio is structured to perform through cycles, not to optimize for a single exit.",
  },
  {
    title: "Data-informed judgment",
    body: "Data and AI improve screening and prioritization. Investment decisions remain anchored in institutional underwriting standards and field-level context.",
  },
  {
    title: "Long-term orientation",
    body: "We are building a durable housing business – not a fund with a defined exit window. Our hold strategy is designed around compounding income and operational improvement over time.",
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
                Institutional operations applied to small multifamily
              </h1>
              <Lead>
                Middle Door Homes acquires small multifamily buildings through a tax-deferred contribution
                structure, then applies institutional-grade scattered-site operations to improve performance
                and build a durable long-term portfolio.
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

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>What we do</Eyebrow>
            <Heading className="mt-3">Transitioning small multifamily into institutional ownership</Heading>
            <div className="mt-5 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">The model</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  We acquire 2–49 unit buildings from long-term individual owners using a 721 exchange – a
                  tax-deferred contribution structure. Owners receive a passive ownership stake and ongoing
                  income. We take on the management.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">The opportunity</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Small multifamily – or &ldquo;middle housing&rdquo; – represents more than $5 trillion in US asset
                  value with less than 3% institutional ownership. It is the last large underserved category
                  in residential real estate.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">The operations</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Our team brings a proven scattered-site operational playbook – built managing 30,000+ homes
                  at institutions like Home Partners of America and Invitation Homes – and applies it to small
                  multifamily for the first time at scale.
                </p>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--mdh-title)]">The capital structure</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                  Owner contributions fund acquisitions. Conservative debt – at 15–20% LTV – supports
                  renovation and closing costs only. Buildings enter the portfolio occupied, cash-flowing,
                  and with no lease-up or construction risk.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/55 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>How we operate</Eyebrow>
            <Heading className="mt-3">Principles that guide the business</Heading>
            <div className="mt-5 grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {PRINCIPLES.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-medium text-[var(--mdh-title)]">{item.title}</h3>
                  <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <Heading>Learn more about our team</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Our leadership team brings deep experience across institutional scattered-site housing,
                capital markets, and data science.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/team">Meet the team</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
