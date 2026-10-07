import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, Container, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { FaqAccordion, type FaqGroup } from "@/components/faq";

export const metadata: Metadata = {
  title: "For Brokers: Your Full Commission on 721 Exchange Transactions",
  description:
    "Your commission is paid in full, in cash at closing, per your listing agreement. Middle Door Homes gives long-term multifamily owners a tax-deferred way to say yes.",
  alternates: { canonical: "/brokers" },
};

const STATS = [
  { value: "0%", label: "Taxes at closing for owners" },
  { value: "100%", label: "Commission paid in cash at close" },
  { value: "2-49", label: "Units per building" },
];

const FOR_YOU = [
  {
    title: "Your full commission",
    body: "Paid 100% in cash at closing, per your listing agreement, the same as a conventional sale.",
  },
  {
    title: "Off-market access",
    body: "Most multifamily buildings never come to market; we open a path to transact with unlisted owners.",
  },
  {
    title: "Relationship flywheel",
    body: "Satisfied owners often refer others who own similar buildings.",
  },
];

const FOR_CLIENTS = [
  {
    title: "Tax deferral",
    body: "For a long-term owner, a sale means a large tax bill. A 721 exchange defers that entirely.",
  },
  {
    title: "Continued ownership",
    body: "Your client owns a stake in a diversified portfolio, with ongoing income and a share of its growth.",
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
    body: "Think about owners who have held for years and built meaningful equity, but the tax bill keeps them from selling.",
  },
  {
    step: "02",
    title: "Make the introduction",
    body: "Connect them with Middle Door. We handle the educational conversation, explaining the 721 exchange and whether it is the right fit.",
  },
  {
    step: "03",
    title: "Earn your commission",
    body: "If your client's building is contributed to our portfolio, your commission is paid in full, in cash at closing, per your listing agreement.",
  },
];

const BROKER_FAQ: FaqGroup[] = [
  {
    group: "Your commission",
    items: [
      {
        q: "What does my commission look like?",
        a: "Your commission is paid 100% in cash at closing, per your listing agreement, the same as a conventional sale. MDH does not set commission rates; that stays between you and your client.",
      },
      {
        q: "How does this compare to representing a traditional sale?",
        a: "On your side it looks the same: same listing agreement, same commission, paid in cash at closing. The difference is for your seller, who can defer the tax bill that often keeps long-term owners from selling at all.",
      },
      {
        q: "Are there arrangements for consistent broker partners?",
        a: "We are building long-term relationships with real estate broker partners and structure our arrangements accordingly. Reach out to discuss the specifics; we are open to conversations about ongoing arrangements for brokers who are actively working with this client profile.",
      },
      {
        q: "When do I get paid?",
        a: "In cash at closing, per your listing agreement. No referral fee structure and no waiting.",
      },
      {
        q: "What will you pay? What is your cap rate?",
        a: "Our underwriting team prices it, and fast. Send us the address and the rent roll and we will come back with something real.",
      },
    ],
  },
  {
    group: "Qualifying clients",
    items: [
      {
        q: "What kind of client is the right fit?",
        a: "The ideal client has owned a 2-49 unit multifamily building for many years and built up a large gain. If they are hesitant to sell because of the tax cost, or simply want their equity working in a better structure, that is exactly the conversation to start. They also need to qualify as an accredited investor.",
      },
      {
        q: "What if my client just wants to sell outright?",
        a: "Totally fair, and some do. It is worth asking, because owners often say cash until they see the after-tax number, and partial cash can be part of the conversation. If they need a straight all-cash sale, we are not their buyer, and that is worth knowing early.",
      },
      {
        q: "My client is thinking about a 1031 exchange. Should I still introduce them?",
        a: "Yes. A 721 exchange is often a better solution than a 1031 for owners who want to stop managing. A 1031 also defers taxes, but requires finding a replacement property in 45 days, closing in 180, and then managing the new asset. A 721 exchange exits them from active ownership permanently, with no deadline and no new building to run.",
      },
      {
        q: "What if my client owns a single-family rental or commercial property?",
        a: "Our focus is multifamily buildings of 2-49 units. We are not a fit for single-family rentals or large commercial properties. If the client owns a mix, reach out and we can discuss whether any of their holdings qualify.",
      },
    ],
  },
  {
    group: "Working together",
    items: [
      {
        q: "What do I actually do to represent a client?",
        a: "Just make the introduction. Email us at Acquisitions@MiddleDoorHomes.com with a note about your client's situation: building size, location, approximate value, and what is prompting the conversation. We handle the educational discussion with the owner from there.",
      },
      {
        q: "Will you help me explain this to my client?",
        a: "Yes. Forward our one-pager, and if they are interested, help us schedule one call. You are not explaining tax structure. That is on us and their CPA.",
      },
      {
        q: "What is the typical timeline from introduction to commission payment?",
        a: "Typically a few months from first conversation to close, depending on due diligence and the client\'s pace. We keep you informed throughout the process.",
      },
      {
        q: "How does this affect my ongoing relationship with the client?",
        a: "It usually strengthens it. You are solving a problem the client did not know had a solution. Satisfied owners refer family members and other investors who own similar properties.",
      },
      {
        q: "Are you going around me to the owner?",
        a: "No. You represent your client and we keep you in the loop the whole way. We do not circumvent you or diminish your commission.",
      },
      {
        q: "Are you actually going to close?",
        a: "Yes. We close with conventional financing. Happy to walk you through our process and share references.",
      },
      {
        q: "Do you need a tour first?",
        a: "No. We make the offer off the listing data and inspect during diligence.",
      },
      {
        q: "I can't give tax advice. Is that a problem?",
        a: "No, and the process is built that way. You spot the situation and make the introduction. We handle the structure conversation with your client and their CPA from there.",
      },
    ],
  },
  {
    group: "For your clients",
    items: [
      {
        q: "What does my client actually receive?",
        a: "Three things. The tax bill deferred. Income from distributions on their units. And no more tenants, repairs, or management. Their ownership is spread across a portfolio instead of one building.",
      },
      {
        q: "Is this a good deal for the client or just for MDH?",
        a: "It is genuinely good for the right client. No tax bill at closing, continued ownership in a diversified portfolio, and income without the work of managing. We decline transactions that are not a fit.",
      },
      {
        q: "How liquid is this for my client?",
        a: "Ownership units are not publicly traded. A three-year minimum hold applies to all units, and from year four the partnership targets quarterly repurchase windows, at the holder\'s option and subject to portfolio liquidity. This is a long-term investment, and not appropriate for clients who need immediate liquidity.",
      },
      {
        q: "Why a partnership and not a cash offer?",
        a: "For buildings with upside left in them, a cash offer pays as-is value. The partnership keeps that value for your seller and adds a share of whatever the renovation creates.",
      },
    ],
  },
  {
    group: "How MDH makes money",
    items: [
      {
        q: "How does Middle Door generate revenue?",
        a: "An annual management fee of 1.25% of assets under management, our share of the upside above a 6% preferred return, and our own units held alongside owners\'. Owners receive 100% of the first 6% of annual total return before we participate. We do our best when the portfolio does.",
      },
      {
        q: "Are your interests aligned with mine and my client's?",
        a: "Yes. Owners receive the first 6% of annual total return before we participate, we never take more than 30% of a year\'s return, and if portfolio value falls we earn nothing further until it recovers. We are not a fund with a short hold period trying to flip assets. We are building a durable housing business. When your client does well, we do well.",
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

export default function BrokersPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brokerFaqSchema) }}
      />
      <PageHero
        eyebrow="For brokers"
        title="Your commission, paid in full. A new way for your seller to say yes."
        image="/images/nb-sixflat-front.jpg"
        imageAlt="Brick six-flat apartment building with a front garden"
        stats={STATS}
      />

      {/* Pitch */}
      <Section tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-center">
            <p className="font-display max-w-3xl text-[1.5rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
              Many multifamily owners are not looking to sell. We help you unlock off-market
              transactions, helping owners make a tax-deferred transition to passive ownership.
            </p>
            <div className="relative h-[240px] overflow-hidden lg:h-[200px]">
              <Image
                src="/images/nb-garden-apartments.jpg"
                alt="Two-story brick garden apartment building under mature oak trees"
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
      <Section id="commission">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="">
              <Eyebrow>For you</Eyebrow>
              <Heading className="mt-2">A real estate commission for representing the sale</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_YOU.map((item) => (
                  <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                    <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <Eyebrow>For your clients</Eyebrow>
              <Heading className="mt-2">A tax-efficient transition to passive income</Heading>
              <div className="mt-5 space-y-4 border-t border-[var(--mdh-line)] pt-5">
                {FOR_CLIENTS.map((item) => (
                  <div key={item.title} className="border-t border-[var(--mdh-line)] pt-5">
                    <h3 className="font-display text-[1.3rem] font-medium leading-snug text-[var(--mdh-title)]">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <Heading className="mt-2">Three steps to a commission</Heading>
              <div className="mt-5 space-y-3">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex gap-4 border-t border-[var(--mdh-line)] pt-5">
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
            <div className="relative h-[280px] overflow-hidden lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/nb-greystone.jpg"
                alt="Greystone multifamily building with a lit entrance"
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
      <Section id="faq">
        <Container>
          <div className="">
            <Eyebrow>Common questions</Eyebrow>
            <Heading className="mt-2">Frequently asked questions</Heading>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <FaqAccordion groups={BROKER_FAQ} />
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCta
        title="Have a client in mind?"
        body="Reach out directly. We can discuss whether your client is a good fit and how to structure an introduction."
        cta={{ href: "/contact", label: "Introduce a client" }}
      />
    </main>
  );
}
