import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Brokers & Partners",
  description:
    "Earn full 3–4% commission on off-market small multifamily transactions. Middle Door Homes helps you unlock conversations with long-term owners who aren't otherwise planning to sell.",
};

const VALUE_PROPS = [
  {
    title: "Full commission — no split",
    body: "We pay a standard broker commission of 3–4% on every transaction. There is no buyer's broker taking a share. You earn the full fee on deals you help us close.",
  },
  {
    title: "Off-market access",
    body: "Most small multifamily buildings never reach the open market. Long-term owners are not listed — but many are open to the right conversation. Our 721 exchange creates a path to transact with this pool.",
  },
  {
    title: "A referral flywheel",
    body: "Satisfied owners refer others. Each successful transaction builds your reputation with this owner group and opens doors to additional conversations. One deal often leads to several more.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Identify a long-term owner",
    body: "Think about clients who have owned their buildings for years and show signs of management fatigue, tax concerns, or succession planning. These are ideal candidates for the 721 exchange conversation.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door Homes. We handle the educational conversation — explaining the 721 exchange model, what the owner can expect, and whether it is a fit for their situation.",
  },
  {
    step: "03",
    title: "Earn your commission",
    body: "If the building is contributed to our portfolio, you receive full commission — typically 3–4% — without a buyer's broker reducing your share.",
  },
];

export default function BrokersPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>For brokers &amp; partners</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Earn full commission from owners who aren&apos;t planning to sell
              </h1>
              <Lead>
                Most small multifamily owners will never list their building. Middle Door Homes helps you
                unlock a new category of off-market transactions — and earn full commission on every one.
              </Lead>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Introduce a client</Button>
                <Button href="/owners" variant="secondary">How owners benefit</Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/bldg-02.jpg"
                alt="Urban small multifamily building"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>What we offer</Eyebrow>
            <Heading className="mt-3">A new transaction channel — not a replacement for existing ones</Heading>
            <p className="mt-3 max-w-[66ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              Most long-term small multifamily owners are not in the traditional sales funnel. They are not
              looking for buyers — they are avoiding the tax consequence of selling. Middle Door opens a
              path to transact with this group, and pays you a full commission for bringing them to the table.
            </p>
            <div className="mt-6 grid gap-5 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {VALUE_PROPS.map((item) => (
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
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-3">Three steps to a commission</Heading>
              <div className="mt-5 space-y-4">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                    <p className="shrink-0 text-[1.4rem] font-medium leading-none tracking-tight text-[var(--mdh-line)]">
                      {item.step}
                    </p>
                    <div>
                      <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                      <p className="mt-1 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/bldg-13.jpg"
                alt="Established neighborhood multifamily housing"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>The right candidates</Eyebrow>
            <Heading className="mt-3">Who to think about in your book of business</Heading>
            <div className="mt-5 grid gap-4 border-t border-[var(--mdh-line)] pt-5 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">Long-term owners (10+ years)</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Owners who purchased for income and have accumulated significant embedded gains. A sale
                  triggers a large tax bill — making the 721 exchange an appealing alternative.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">Management-fatigued landlords</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Owners who are tired of the day-to-day demands of managing tenants, maintenance, and
                  aging buildings — but do not want to give up their income by selling.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">Owners approaching retirement</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Owners who want to simplify their financial lives, reduce their involvement, and secure a
                  predictable, growing income stream without a taxable exit.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-5">
                <h3 className="font-medium text-[var(--mdh-title)]">Buildings that are difficult to sell</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">
                  Small multifamily buildings (2–49 units) with a thin buyer pool, deferred maintenance, or
                  below-market rents — where a 721 exchange may offer better outcomes than a traditional sale.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <Heading>Have a client in mind?</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Reach out to us directly. We can discuss whether your client is a good fit and how to
                structure the introduction.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact">Introduce a client</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
