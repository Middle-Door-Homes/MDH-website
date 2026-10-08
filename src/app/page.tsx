import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, DoorIcon } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { LogoRow } from "@/components/logo-row";

export const metadata: Metadata = {
  title: {
    absolute: "Middle Door Homes | 721 Exchange for Multifamily Owners",
  },
  description:
    "Middle Door Homes turns your multifamily equity into a passive stake in a diversified, professionally managed residential portfolio, through a §721 exchange with no capital gains at contribution.",
  alternates: { canonical: "/" },
};

const THREE_PROOFS = [
  {
    promise: "Keep your equity intact",
    stat: "0%",
    statLabel: "taxes at contribution",
    body: "A §721 exchange converts your building to a portfolio stake with no capital gains or depreciation recapture at contribution.",
  },
  {
    promise: "Diversify your ownership",
    stat: "8-12%",
    statLabel: "target annual return",
    body: "You receive an ownership stake in a diversified portfolio of cash-flowing neighborhood real estate.",
  },
  {
    promise: "Collect truly passive income",
    stat: "30,000+",
    statLabel: "units of experience",
    body: "Our professional management team handles leasing, maintenance, and renovations that grow your value. You share in all future income and appreciation.",
  },
];

const THREE_DOORS = [
  { label: "Sell", body: "30-40% of gains lost to tax", mdh: false },
  { label: "Hold", body: "Tenants, repairs, and debt stay your job", mdh: false },
  { label: "Middle Door", body: "Your full equity, working in a diversified portfolio", mdh: true },
];

const TEAM = [
  { name: "Jack Elzinga", title: "Managing Partner", photo: "/images/jack-elzinga-2026.jpg" },
  { name: "Jose Torres", title: "Partner & CEO", photo: "/images/jose-torres-2026.jpg" },
  { name: "Mike Rozovics", title: "Partner & EVP Operations", photo: "/images/mike-rozovics-2026.jpg" },
  { name: "Bob Sievewright", title: "Principal, Acquisitions", photo: "/images/bob-sievewright-2026.jpg" },
];

const AUDIENCE_IMAGES = ["/images/nb-greystone.jpg", "/images/nb-sixflat-front.jpg", "/images/nb-garden-apartments.jpg"];

const AUDIENCE_CARDS = [
  {
    href: "/owners",
    eyebrow: "For property owners",
    title: "Keep your equity working, without the work",
    body: "Contribute your building and receive ownership in a diversified portfolio of income-producing buildings: professional management, quarterly distributions, and no tax at contribution.",
    cta: "Learn how it works",
  },
  {
    href: "/brokers",
    eyebrow: "For brokers",
    title: "A real estate commission for representing your client's sale",
    body: "Represent your client's building sale through a 721 exchange. We work with licensed real estate brokers whose clients want a tax-deferred transition to passive ownership.",
    cta: "How brokers work with us",
  },
  {
    href: "/advisors",
    eyebrow: "For financial advisors",
    title: "A tax-efficient solution for your clients' real estate",
    body: "Help clients with embedded gains transition from active landlord to passive owner, without triggering a taxable event.",
    cta: "How advisors work with us",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Contribute your building",
    body: "Instead of selling, you contribute your building under Section 721 of the tax code. No capital gains tax is due at contribution.",
  },
  {
    step: "02",
    title: "Receive a passive ownership stake",
    body: "Your equity becomes ownership in a diversified portfolio of neighborhood buildings. You stay invested in what you know, without running any of it.",
  },
  {
    step: "03",
    title: "Collect ongoing distributions",
    body: "Our team handles all asset management and operations. You receive regular distributions from a diversified portfolio, with the long-term goal of growing income over time.",
  },
];

const FIT = [
  "Own one or more 2-49 unit multifamily buildings",
  "Held 5+ years, with a large gain built up",
  "Want passive income and long-term upside",
  "Looking for a tax-efficient way out",
  "Ready to hand off the day-to-day",
];


const SERIF_H2 =
  "font-display text-[1.75rem] font-medium leading-[1.08] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.95rem] xl:text-[2.1rem]";


const BRASS = "#b8894f";

export default function Home() {
  return (
    <main>
      {/* Hero: tall split panel, slow drift on the photo */}
      <section className="bg-[var(--mdh-ink)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:order-last lg:aspect-auto">
            <Image
              src="/images/hero-chicago-street.jpg"
              alt="Tree-lined street of brick multifamily buildings"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
          <div className="flex items-center px-5 pb-20 pt-10 sm:px-8 md:pb-24 md:pt-16 lg:min-h-[min(820px,calc(100vh-64px))] lg:pb-32 lg:pl-10 lg:pr-14 lg:pt-24 xl:pl-12">
            <div className="max-w-xl">
              <div className="hidden items-center gap-4 lg:flex">
                <span className="h-px w-10" style={{ background: BRASS }} />
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em]" style={{ color: BRASS }}>
                  Middle Door Homes
                </p>
              </div>
              <h1 className="font-display text-balance text-[2rem] font-normal leading-[1.04] tracking-[-0.015em] text-white sm:text-[2.5rem] lg:mt-6 lg:text-[3rem] xl:text-[3.25rem]">
                Your building&rsquo;s next chapter
              </h1>
              <p className="mt-5 text-[0.98rem] font-light leading-relaxed text-white/80 md:mt-7 md:text-[1.15rem]">
                The middle door between selling and holding. Keep your equity, hand off the management, and defer the tax.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 md:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
                >
                  Send us an address
                </Link>
                <Link href="#how-it-works" className="text-sm font-medium text-white/80 transition hover:text-white">
                  How it works &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key figures: floating panel overlapping the hero */}
      <section className="relative z-10">
        <Container>
          <div className="-mt-12 grid grid-cols-3 divide-x divide-[var(--mdh-line)] bg-white shadow-[0_24px_60px_rgba(18,29,41,0.16)] md:-mt-20">
            {THREE_PROOFS.map((item) => (
              <div key={item.promise} className="px-3 py-6 text-center sm:px-8 sm:py-9 sm:text-left md:px-10 md:py-10">
                <p className="hidden text-[0.7rem] font-medium uppercase tracking-[0.2em] sm:block" style={{ color: BRASS }}>
                  {item.promise}
                </p>
                <p className="font-display text-[1.6rem] leading-none text-[var(--mdh-title)] lining-nums sm:mt-4 sm:text-[1.8rem] md:text-[2rem]">
                  {item.stat}
                </p>
                <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[var(--mdh-subtle)]">
                  {item.statLabel}
                </p>
                <p className="mt-4 hidden text-[0.93rem] leading-relaxed text-[var(--mdh-ink)] sm:block md:text-[0.95rem]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement over a full-width photo */}
      <section className="relative mt-16 overflow-hidden md:mt-24">
        <Image
          src="/images/nb-autumn-corner.jpg"
          alt=""
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[rgba(14,22,32,0.55)]" />
        <Container className="relative py-24 md:py-36">
          <Reveal>
            <p className="font-display mx-auto max-w-6xl text-balance text-center text-[1.7rem] font-normal leading-[1.18] tracking-[-0.01em] text-white lining-nums md:text-[1.95rem] xl:text-[2.3rem]">
              Selling costs you 30-40% of your gains. Holding keeps you a landlord. Middle Door Homes is the third option.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Three doors */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <Reveal>
          <div className="grid border-y border-[var(--mdh-line)] md:grid-cols-3">
            {THREE_DOORS.map((door) => (
              <div
                key={door.label}
                className={`flex items-center gap-5 px-5 py-6 text-left md:flex-col md:gap-0 md:px-8 md:py-16 md:text-center ${
                  door.mdh ? "bg-[var(--mdh-ink)]" : "border-b border-[var(--mdh-line)] md:border-b-0 md:border-r"
                }`}
              >
                <DoorIcon
                  open={door.mdh}
                  className={`h-12 w-9 shrink-0 md:h-20 md:w-14 ${door.mdh ? "text-[#b8894f]" : "text-[var(--mdh-subtle)]/60"}`}
                />
                <div>
                  <p
                    className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] md:mt-5 ${door.mdh ? "" : "text-[var(--mdh-subtle)]"}`}
                    style={door.mdh ? { color: BRASS } : undefined}
                  >
                    {door.label}
                  </p>
                  <p className={`font-display mt-1.5 text-[1.1rem] leading-snug lining-nums md:mx-auto md:mt-4 md:max-w-[18ch] md:text-[1.25rem] xl:text-[1.35rem] ${door.mdh ? "text-white" : "text-[var(--mdh-title)]"}`}>
                    {door.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* Who this is for: photo bleeds to the left edge */}
      <section className="pb-14 md:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[620px]">
            <Image
              src="/images/nb-brick-threeflats.jpg"
              alt="Brick three-flats on a tree-lined street"
              fill
              quality={90}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-5 pt-10 sm:px-8 lg:pl-16 lg:pr-10 lg:pt-0 xl:pr-12">
            <div className="max-w-xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em]" style={{ color: BRASS }}>
                Who this is for
              </p>
              <h2 className={`mt-4 ${SERIF_H2}`}>Built for investors who have earned a better next chapter</h2>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-[var(--mdh-ink)] md:text-[1rem]">
                You have built meaningful equity in a single asset. A traditional sale gives up 30-40% of your gains to
                tax. A 1031 keeps your wealth concentrated and the work on your plate. Middle Door Homes offers a third
                option.
              </p>
              <ul className="mt-8 border-t border-[var(--mdh-line)]">
                {FIT.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[var(--mdh-line)] py-4 text-[0.96rem] text-[var(--mdh-ink)]">
                    <span style={{ color: BRASS }} aria-hidden>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="bg-[#f6f1e7] py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10" style={{ background: BRASS }} />
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em]" style={{ color: BRASS }}>
                    The math, illustrated
                  </p>
                </div>
                <h2 className="font-display mt-5 text-[1.75rem] font-normal leading-[1.08] tracking-[-0.01em] text-[var(--mdh-title)] lining-nums md:text-[1.95rem] xl:text-[2.1rem]">
                  On a $1M building, about $200K more of your equity keeps working.
                </h2>
                <p className="mt-6 text-[0.96rem] leading-relaxed text-[var(--mdh-ink)]">
                  Same building, same mortgage payoff, same closing costs. The difference is the tax you do not pay at
                  closing.
                </p>
              </div>
              <div className="space-y-9">
                {[
                  { label: "Sell for cash", value: "$540K", pct: 54, mdh: false },
                  { label: "Contribute to Middle Door", value: "$740K", pct: 74, mdh: true },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex items-baseline justify-between">
                      <p className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">{bar.label}</p>
                      <p className="font-display text-[1.75rem] leading-none text-[var(--mdh-title)] lining-nums md:text-[1.75rem]">{bar.value}</p>
                    </div>
                    <div className="mt-4 h-3 w-full bg-[var(--mdh-title)]/10">
                      <div
                        className="h-full"
                        style={{ width: `${bar.pct}%`, background: bar.mdh ? BRASS : "rgba(39,79,108,0.45)" }}
                      />
                    </div>
                  </div>
                ))}
                <p className="text-[0.92rem] text-[var(--mdh-ink)]">
                  <span className="font-display text-[1.35rem] [font-variant-numeric:lining-nums]" style={{ color: BRASS }}>+$200K</span>
                  <span className="ml-3">of equity preserved.</span>
                </p>
                <Link
                  href="/owners#calculator"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--mdh-ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--mdh-ink-soft)]"
                >
                  Run your own numbers &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>


      {/* How it works */}
      <section id="how-it-works" className="py-14 md:py-20">
        <Container>
          <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em]" style={{ color: BRASS }}>
                The 721 exchange
              </p>
              <h2 className={`mt-4 ${SERIF_H2}`}>Three steps to passive ownership</h2>
            </div>
            <p className="text-[0.98rem] leading-relaxed text-[var(--mdh-ink)] md:text-[1rem]">
              A §721 exchange lets you contribute your building to a partnership for ownership units, with no capital
              gains or depreciation recapture at contribution. It is the same tool large REITs have used for decades to
              buy from owners who did not want to sell. What is new is applying it to buildings your size.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="border-t-2 pt-6" style={{ borderColor: BRASS }}>
                <p className="font-display text-[2.2rem] leading-none lining-nums" style={{ color: BRASS }}>
                  {item.step}
                </p>
                <p className="font-display mt-4 text-[1.15rem] font-normal leading-snug text-[var(--mdh-title)]">{item.title}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/owners">The full owner overview</Button>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* Team: navy band */}
      <section className="bg-[var(--mdh-ink)] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10" style={{ background: BRASS }} />
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em]" style={{ color: BRASS }}>
                  Our team
                </p>
              </div>
              <h2 className="font-display mt-5 text-[1.75rem] font-normal leading-[1.08] tracking-[-0.01em] text-white md:text-[1.95rem] xl:text-[2.1rem]">
                Billions of dollars of institutional housing experience
              </h2>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-white/75 md:text-[1rem]">
                Our team has operated 30,000+ units across some of the largest residential platforms in the country. We
                built Middle Door to bring that institutional playbook to multifamily owners, and to offer them a
                structure that, until now, only large real estate institutions used.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 self-center sm:grid-cols-2 sm:gap-y-8">
              {TEAM.map((member) => (
                <Link key={member.name} href="/about" className="group flex items-center gap-4">
                  <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 md:h-24 md:w-24">
                    <Image src={member.photo} alt={member.name} fill quality={90} sizes="96px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block text-[1rem] font-medium leading-tight text-white group-hover:underline">{member.name}</span>
                    <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.13em] text-white/55">
                      {member.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team experience logos */}
      <section className="border-b border-[var(--mdh-line)] bg-white py-10 md:py-12">
        <Container>
          <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--mdh-subtle)]">
            Team experience from
          </p>
          <div className="mt-7">
            <LogoRow />
          </div>
        </Container>
      </section>

      {/* Audience routing */}
      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
          <h2 className={SERIF_H2}>Find your path</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-10">
            {AUDIENCE_CARDS.map((card, idx) => (
              <Link key={card.href} href={card.href} className="group flex flex-col">
                <span className="relative mb-6 block aspect-[3/2] overflow-hidden">
                  <Image
                    src={AUDIENCE_IMAGES[idx]}
                    alt=""
                    fill
                    quality={85}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </span>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em]" style={{ color: BRASS }}>
                  {card.eyebrow}
                </p>
                <h3 className="font-display mt-4 text-[1.2rem] font-normal leading-snug text-[var(--mdh-title)]">{card.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{card.body}</p>
                <p className="mt-6 text-[0.88rem] font-medium text-[var(--mdh-title)] transition group-hover:translate-x-1">
                  {card.cta} &rarr;
                </p>
              </Link>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing over a full-width photo */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/nb-courtyard.jpg"
          alt=""
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[rgba(14,22,32,0.58)]" />
        <Container className="relative py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-balance text-[1.75rem] font-normal leading-[1.1] tracking-[-0.01em] text-white md:text-[1.95rem] xl:text-[2.1rem]">
              You built something real. Let&apos;s make sure it keeps working for you.
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/80">
              Send us an address for a personalized valuation and proposal.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
              >
                Send us an address
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
