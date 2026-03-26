import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Property Owners",
  description:
    "A 721 exchange lets you contribute your building, defer your taxes, and transition to passive income — without selling. Learn how Middle Door Homes works.",
};

const BENEFITS = [
  {
    title: "Tax deferral",
    body: "A traditional sale triggers capital gains and depreciation recapture — often 30–40% of the sale price. A 721 exchange defers that tax obligation entirely.",
  },
  {
    title: "Passive income",
    body: "You receive ongoing distributions from the portfolio — without maintenance calls, tenant issues, or any management responsibilities.",
  },
  {
    title: "Continued ownership",
    body: "You remain an owner. Your equity rolls into a diversified, professionally managed portfolio that continues to appreciate over time.",
  },
  {
    title: "No management",
    body: "Our team handles everything — leasing, maintenance, renovations, and operations. Your ownership becomes truly passive.",
  },
];

const CHALLENGES = [
  {
    title: "A large tax bill at sale",
    body: "Long-term owners carry decades of appreciation. Selling means capital gains and depreciation recapture — often losing a significant share of the building's value to taxes.",
  },
  {
    title: "Management that never stops",
    body: "Small multifamily buildings require constant attention — tenant calls, aging systems, deferred maintenance. Many owners reach a point where the income no longer justifies the effort.",
  },
  {
    title: "No clean way out",
    body: "Traditional buyers are few. Selling on the open market is slow, uncertain, and still triggers the tax event. Most owners feel stuck between managing forever and paying to exit.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Conversation",
    body: "We discuss your building, your financial situation, and your goals. There is no obligation and no pressure — we want to understand if the model is genuinely a good fit.",
  },
  {
    step: "02",
    title: "Evaluation",
    body: "We assess the building and structure the exchange terms. You get full transparency on what your passive ownership stake looks like and what to expect.",
  },
  {
    step: "03",
    title: "Contribution",
    body: "You contribute the building through a 721 exchange — not a sale. No capital gains event. No depreciation recapture. Your equity moves forward intact.",
  },
  {
    step: "04",
    title: "Ongoing income",
    body: "You receive regular distributions from the portfolio. Our team manages everything. You own a stake in a growing, professionally operated portfolio.",
  },
];

const CREDIBILITY = [
  { value: "30,000+", label: "Homes managed by team" },
  { value: "80+", label: "US markets operated in" },
  { value: "15–20%", label: "Target LTV" },
  { value: "90%+", label: "Occupancy at acquisition" },
];

export default function OwnersPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>For property owners</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Stop managing. Keep owning.
              </h1>
              <Lead>
                If you have owned your building for years, you have built real value — but a traditional
                sale means a large tax bill and the end of your income stream. There is a better path.
              </Lead>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Request a conversation</Button>
                <Button href="/about" variant="secondary">About our team</Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/bldg-14.jpeg"
                alt="Small multifamily building in an established neighborhood"
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
            <Eyebrow>The challenge</Eyebrow>
            <Heading className="mt-3">Long-term ownership has a hidden cost</Heading>
            <p className="mt-3 max-w-[66ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              After years of ownership, many small multifamily landlords find themselves in the same position:
              a building that is valuable on paper, but difficult — and expensive — to exit.
            </p>
            <div className="mt-6 grid gap-5 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              {CHALLENGES.map((item) => (
                <div key={item.title}>
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
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <Heading className="mt-3">A 721 exchange lets you transition without selling</Heading>
              <p className="mt-4 text-base leading-relaxed text-[var(--mdh-ink)]">
                A 721 exchange allows you to contribute your building to a real estate portfolio and receive
                a passive ownership stake — completely tax-deferred. You do not sell. You do not lose your
                income. You simply stop managing.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[var(--mdh-ink)]">
                Your equity moves forward intact into a diversified, professionally managed portfolio. You
                continue to receive distributions — without the day-to-day responsibilities of ownership.
              </p>
              <div className="mt-5 rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                <p className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                  Key distinction
                </p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  A 721 exchange is not a sale. It is a contribution. The tax event that would occur at
                  sale is deferred — so you keep more of what you have built.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] lg:h-full lg:min-h-[320px]">
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

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Benefits</Eyebrow>
            <Heading className="mt-3">What you gain</Heading>
            <div className="mt-6 grid gap-5 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2">
              {BENEFITS.map((item) => (
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
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8">
            <Eyebrow>Process</Eyebrow>
            <Heading className="mt-3">How it works — step by step</Heading>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-5 md:p-6">
                  <p className="shrink-0 text-[1.6rem] font-medium leading-none tracking-tight text-[var(--mdh-line)]">
                    {item.step}
                  </p>
                  <div>
                    <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <Eyebrow>Why Middle Door</Eyebrow>
            <Heading className="mt-3">Institutional experience in scattered-site housing</Heading>
            <p className="mt-3 max-w-[66ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              Our team has spent careers managing large-scale residential portfolios at institutions like
              Home Partners of America and Invitation Homes — applying rigorous operations, data, and
              capital discipline to scattered-site housing. We are applying that same playbook to small
              multifamily for the first time.
            </p>
            <div className="mt-6 grid gap-4 border-t border-[var(--mdh-line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {CREDIBILITY.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                  <p className="text-[1.7rem] font-medium tracking-tight text-[var(--mdh-title)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.8rem] uppercase tracking-[0.14em] text-[var(--mdh-subtle)]">
                    {item.label}
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
              <Heading>Ready to explore your options?</Heading>
              <p className="mt-2 max-w-[58ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                There is no obligation. We start with a conversation to understand your building and your
                goals — and to see whether a 721 exchange is the right fit for you.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact">Request a conversation</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
