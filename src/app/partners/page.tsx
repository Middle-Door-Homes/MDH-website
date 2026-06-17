import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";
import { FaqAccordion, type FaqGroup } from "@/components/faq";

export const metadata: Metadata = {
  title: "Partner Program - Earn a Real Estate Commission on 721 Exchange Transactions",
  description:
    "Earn a real estate commission representing your client's building sale through a §721 exchange. We work with licensed brokers who represent small multifamily owners in this tax-deferred transition.",
  alternates: { canonical: "/partners" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing for owners", asterisk: true },
  { value: "3%", label: "Typical commission" },
  { value: "90%+", label: "Off-market buildings" },
];

const FOR_YOU = [
  {
    title: "Real estate commission",
    body: "You represent your client's building sale and earn a typical seller-side real estate commission, paid at close. No buyer's broker split.",
  },
  {
    title: "Off-market access",
    body: "Most small buildings don't sell; we open a path to transact with unlisted owners.",
  },
  {
    title: "Relationship flywheel",
    body: "Satisfied owners will refer others; each conversation can unlock several more.",
  },
];

const FOR_CLIENTS = [
  {
    title: "Tax deferral",
    body: "For a long-term owner, a sale means a large tax bill. A 721 exchange defers that entirely.",
  },
  {
    title: "Continued ownership",
    body: "Your client owns a stake in a diversified portfolio with ongoing cash flow and growth.",
  },
  {
    title: "No management",
    body: "Professional management means truly passive income for your client.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Identify a long-term owner",
    body: "Think about owners who have held for years and built meaningful equity, but have never had an institutional-quality structure for that position.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door. We handle the educational conversation, explaining the 721 exchange and whether it is the right fit.",
  },
  {
    step: "03",
    title: "Earn your commission",
    body: "If your client's building is contributed to our portfolio, you receive a typical seller-side real estate commission for representing the sale, paid at close.",
  },
];

const BROKER_FAQ: FaqGroup[] = [
  {
    group: "Your commission",
    items: [
      {
        q: "What does my commission look like?",
        a: "You earn a typical seller-side real estate commission, negotiated with your client as you would in any transaction — MDH does not set commission rates. In a traditional sale, total commission is often split between a seller's broker and a buyer's broker, roughly 3% to each side for a combined 6%. With Middle Door, there is no buyer's broker: we are the acquirer. The full seller-side commission goes to you. We observe 3% to be typical for seller-side representation on these transactions, though the rate is between you and your client.",
      },
      {
        q: "How does this compare to representing a traditional sale?",
        a: "In a traditional sale, total commission is typically split between the seller's broker and buyer's broker — roughly 3% each side. With Middle Door, there is no buyer's broker, so you earn the full seller-side commission with no split. And your client avoids a large tax bill in the process.",
      },
      {
        q: "Are there arrangements for consistent broker partners?",
        a: "We are building long-term relationships with real estate broker partners and structure our arrangements accordingly. Reach out to discuss the specifics; we are open to conversations about ongoing arrangements for brokers who are actively working with this client profile.",
      },
      {
        q: "When do I get paid?",
        a: "Your commission is paid at close, when the building is contributed to the portfolio.",
      },
    ],
  },
  {
    group: "Qualifying clients",
    items: [
      {
        q: "What kind of client is the right fit?",
        a: "The ideal client has owned a 2-49 unit multifamily building for many years and built meaningful embedded gains. If they are hesitant to sell because of the tax cost, or simply want their equity working in a better structure, that is exactly the conversation to start. They also need to qualify as an accredited investor.",
      },
      {
        q: "What if my client just wants to sell outright?",
        a: "A traditional sale is always an option and we will say so honestly. But for long-term owners with low cost basis, the tax bill from a sale can be enormous. We can help you model the comparison. In most cases, a 721 exchange leaves the client significantly better off. That is a conversation worth having before they list.",
      },
      {
        q: "My client is thinking about a 1031 exchange - should I still introduce them?",
        a: "Yes. A 721 exchange is often a better solution than a 1031 for owners who want to stop managing. A 1031 also defers taxes, but requires finding a replacement property in 45 days, closing in 180, and then managing the new asset. A 721 exchange exits them from active ownership permanently, with no deadline and no new building to run.",
      },
      {
        q: "What if my client owns a single-family rental or commercial property?",
        a: "Our focus is small multifamily (2-49 units). We are not a fit for single-family rentals or large commercial properties. If the client owns a mix, reach out and we can discuss whether any of their holdings qualify.",
      },
    ],
  },
  {
    group: "Working together",
    items: [
      {
        q: "What do I actually do to represent a client?",
        a: "Just make the introduction. Email us at info@middledoorhomes.com with a note about your client's situation: building size, location, approximate value, and what is prompting the conversation. We handle the educational discussion with the owner from there.",
      },
      {
        q: "Will you help me explain this to my client?",
        a: "Yes. We provide materials you can share, and we are happy to do a joint call with you and your client to walk through how the 721 exchange works. You do not need to be a tax expert; you just need to open the door.",
      },
      {
        q: "What is the typical timeline from introduction to commission payment?",
        a: "From first conversation to close typically takes 60-90 days, depending on due diligence and the client's pace. We keep you informed throughout the process.",
      },
      {
        q: "How does this affect my ongoing relationship with the client?",
        a: "It usually strengthens it. You are solving a problem the client did not know had a solution. Satisfied owners refer family members and other investors who own similar properties.",
      },
    ],
  },
  {
    group: "For your clients",
    items: [
      {
        q: "What does my client actually receive?",
        a: "OP units: a passive ownership stake in a professionally managed, diversified portfolio. They receive quarterly distributions, annual K-1s, and nothing to manage. No tenant calls, no maintenance, no 2am emergencies.",
      },
      {
        q: "Is this a good deal for the client or just for MDH?",
        a: "It is genuinely good for the right client. No tax bill at closing, continued ownership in a growing portfolio, and truly passive income that is often higher than what they earned managing the building themselves. We decline transactions that are not a fit.",
      },
      {
        q: "How liquid is this for my client?",
        a: "OP units are illiquid for an initial lockup period of approximately 2-3 years. After that, semi-annual redemption windows provide flexibility. This is a long-term investment, and not appropriate for clients who need immediate liquidity.",
      },
    ],
  },
  {
    group: "How MDH makes money",
    items: [
      {
        q: "How does Middle Door generate revenue?",
        a: "MDH earns a property management fee on the portfolio: a standard percentage of gross rents, consistent with institutional property management. We do not charge acquisition fees or promote structures that would misalign our interests with owners. Our business grows when the portfolio grows and performs well.",
      },
      {
        q: "Are your interests aligned with mine and my client's?",
        a: "Yes. We earn ongoing management fees tied to portfolio performance. We are incentivized to operate well, grow income, and retain owners as long-term partners. We are not a fund with a short hold period trying to flip assets. We are building a durable housing business. When your client does well, we do well.",
      },
      {
        q: "Are you competing with me by going directly to property owners?",
        a: "No. We work closely with broker partners and protect your client relationships. We do not circumvent you or diminish your commission, and we keep you informed throughout the process. Our interests are aligned: you represent your client's interests, your client solves a real problem, and we grow the portfolio.",
      },
    ],
  },
];

const brokerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BROKER_FAQ.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a as string },
    }))
  ),
};

export default function PartnersPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brokerFaqSchema) }}
      />
      {/* Hero */}
      <Section className="pb-5 pt-6 md:pt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-ink)] shadow-[0_20px_60px_rgba(18,29,41,0.14)]">
            <div className="relative h-[46vh] min-h-[360px] md:h-[58vh] md:min-h-[400px]">
              <Image
                src="/images/px-27150697.jpg"
                alt="Classic red brick apartment building with fire escapes"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_46%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,24,0.82)] via-[rgba(8,16,24,0.25)] to-[rgba(8,16,24,0.06)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  For partners
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-[1.8rem] font-medium leading-[1.06] tracking-[-0.01em] text-white sm:text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem]">
                  Represent your client&apos;s sale.<br className="hidden md:block" /> Earn a real estate<br className="hidden md:block" /> commission.
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {STATS.map((item) => (
                <div key={item.label} className="px-3 py-3 text-center sm:px-5 sm:py-4 md:px-7 md:py-5">
                  <p className="whitespace-nowrap text-[1.3rem] font-semibold tracking-tight text-white sm:text-[1.5rem] md:text-[1.8rem]">
                    {item.value}{item.asterisk && <sup className="text-[0.55em] font-normal">*</sup>}
                  </p>
                  <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-white/50 sm:text-[0.72rem] sm:tracking-[0.14em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="border-t border-white/10 px-5 py-2.5 text-[0.65rem] leading-relaxed text-white/30 md:px-7">
              * §721 exchanges are non-recognition events for federal income tax purposes. Individual tax outcomes depend on cost basis, depreciation history, holding period, and state of residence. Consult your CPA.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pitch */}
      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <p className="font-display max-w-3xl text-[1.5rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
              Many small multifamily owners are not looking to sell. We help you unlock off-market
              transactions, helping owners make a tax-deferred transition to passive ownership.
            </p>
            <div className="relative h-[240px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-[200px]">
              <Image
                src="/images/px-3953058.jpg"
                alt="Brick apartment building with balconies"
                fill
                quality={90}
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover object-[center_50%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* For you + For your clients */}
      <Section id="commission" className="pt-4">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8">
              <Eyebrow>For you</Eyebrow>
              <Heading className="mt-2">A real estate commission for representing the sale</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_YOU.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 md:p-5">
                    <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
              <Eyebrow>For your clients</Eyebrow>
              <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_CLIENTS.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
                    <h3 className="font-medium text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" className="pt-4">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-6 shadow-[0_10px_32px_rgba(18,29,41,0.04)] md:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-2">Three steps to a commission</Heading>
              <div className="mt-5 space-y-3">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_2px_8px_rgba(18,29,41,0.04)] md:p-5">
                    <p className="shrink-0 text-[1.5rem] font-medium leading-none tracking-[-0.02em] text-[var(--mdh-line)]">
                      {item.step}
                    </p>
                    <div>
                      <p className="font-medium text-[var(--mdh-title)]">{item.title}</p>
                      <p className="mt-1 text-[0.91rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_8px_24px_rgba(18,29,41,0.07)] lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/px-30726437.jpg"
                alt="Ornate brick brownstone building facade"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_45%]"
              />
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
              <FaqAccordion groups={BROKER_FAQ} />
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
                Have a client in mind?
              </h2>
              <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/70">
                Reach out directly. We can discuss whether your client is a good fit and how to
                structure an introduction.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:info@middledoorhomes.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Introduce a client
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
