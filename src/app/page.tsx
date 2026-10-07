import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, DoorIcon } from "@/components/ui";
import { TaxCalculator } from "@/components/calculator";

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
  { name: "Jack Elzinga", title: "Managing Partner", photo: "/images/jack-elzinga.jpg" },
  { name: "Jose Torres", title: "Partner & CEO", photo: "/images/jose-torres.jpg" },
  { name: "Mike Rozovics", title: "Partner & EVP Operations", photo: "/images/mike-rozovics.jpg" },
  { name: "Bob Sievewright", title: "Principal, Acquisitions", photo: "/images/bob-sievewright.jpg" },
];

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

const SERIF_H2 =
  "font-display text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[2.75rem]";
const LABEL = "text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--mdh-subtle)]";

export default function Home() {
  return (
    <main>
      {/* Hero: split panel (photo first on phones) */}
      <section className="bg-[var(--mdh-ink)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:order-last lg:aspect-auto">
            <Image
              src="/images/hero-chicago-street.jpg"
              alt="Tree-lined street of brick multifamily buildings"
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
          <div className="flex items-center px-5 pb-12 pt-10 sm:px-8 md:py-16 lg:min-h-[640px] lg:py-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-16">
            <div className="max-w-xl">
              <p className="hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55 lg:block">
                Middle Door Homes
              </p>
              <h1 className="font-display text-[2.3rem] font-medium leading-[1.06] tracking-[-0.01em] text-white sm:text-[3rem] lg:mt-4 lg:text-[4rem]">
                Your building&rsquo;s next chapter
              </h1>
              <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-white/80 md:mt-5 md:text-[1.25rem]">
                The middle door between selling and holding. Keep your equity, hand off the management, and defer the tax.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
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

      {/* Key figures */}
      <section className="border-b border-[var(--mdh-line)] bg-white">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-[var(--mdh-line)]">
            {THREE_PROOFS.map((item) => (
              <div key={item.promise} className="px-3 py-6 text-center first:pl-0 last:pr-0 sm:px-8 sm:text-left md:py-10">
                <p className={`hidden sm:block ${LABEL}`}>{item.promise}</p>
                <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.02em] text-[var(--mdh-title)] sm:mt-3 sm:text-[2.2rem] md:text-[2.4rem]">
                  {item.stat}
                </p>
                <p className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--mdh-subtle)]">
                  {item.statLabel}
                </p>
                <p className="mt-4 hidden text-[0.9rem] leading-relaxed text-[var(--mdh-ink)] sm:block">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement + three doors */}
      <section className="py-20 md:py-28">
        <Container>
          <p className="font-display mx-auto max-w-4xl text-balance text-center text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--mdh-title)] lining-nums md:text-[2.5rem]">
            Selling costs you 30-40% of your gains. Holding keeps you a landlord. Middle Door Homes is the third option.
          </p>
          <div className="mt-14 grid border-y border-[var(--mdh-line)] md:mt-16 md:grid-cols-3">
            {THREE_DOORS.map((door) => (
              <div
                key={door.label}
                className={`flex items-center gap-5 px-5 py-6 text-left md:flex-col md:gap-0 md:px-6 md:py-12 md:text-center ${
                  door.mdh
                    ? "bg-[var(--mdh-ink)]"
                    : "border-b border-[var(--mdh-line)] md:border-b-0 md:border-r"
                }`}
              >
                <DoorIcon
                  open={door.mdh}
                  className={`h-12 w-9 shrink-0 md:h-14 md:w-10 ${door.mdh ? "text-[#c99a5e]" : "text-[var(--mdh-subtle)]/60"}`}
                />
                <div>
                  <p className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] md:mt-5 ${door.mdh ? "text-white/60" : "text-[var(--mdh-subtle)]"}`}>
                    {door.label}
                  </p>
                  <p className={`font-display mt-1.5 text-[1.25rem] leading-snug lining-nums md:mx-auto md:mt-3 md:max-w-[16ch] md:text-[1.4rem] ${door.mdh ? "text-white" : "text-[var(--mdh-title)]"}`}>
                    {door.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who this is for: photo beside text */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/nb-brick-threeflats.jpg"
                alt="Brick three-flats on a tree-lined street"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className={LABEL}>Who this is for</p>
              <h2 className={`mt-4 ${SERIF_H2}`}>Built for investors who have earned a better next chapter</h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--mdh-ink)]">
                You have built meaningful equity in a single asset. A traditional sale gives up 30-40% of your
                gains to tax. A 1031 keeps your wealth concentrated and the work on your plate. Middle Door Homes
                offers a third option.
              </p>
              <ul className="mt-8 border-t border-[var(--mdh-line)]">
                {FIT.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[var(--mdh-line)] py-3.5 text-[0.98rem] text-[var(--mdh-ink)]">
                    <span className="text-[var(--mdh-accent)]" aria-hidden>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works: numbered columns */}
      <section id="how-it-works" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className={LABEL}>The 721 exchange</p>
              <h2 className={`mt-4 ${SERIF_H2}`}>Three steps to passive ownership</h2>
            </div>
            <p className="text-[1rem] leading-relaxed text-[var(--mdh-ink)]">
              A §721 exchange lets you contribute your building to a partnership for ownership units, with no
              capital gains or depreciation recapture at contribution. It is the same tool large REITs have used
              for decades to buy from owners who did not want to sell. What is new is applying it to buildings your
              size.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="border-t border-[var(--mdh-title)]/40 pt-6">
                <p className="font-display text-[2.4rem] leading-none text-[var(--mdh-title)]/35 lining-nums">{item.step}</p>
                <p className="mt-5 text-[1.1rem] font-medium text-[var(--mdh-title)]">{item.title}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/owners">The full owner overview</Button>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <TaxCalculator />

      {/* Team: navy band */}
      <section className="bg-[var(--mdh-ink)] py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/55">Our team</p>
              <h2 className="font-display mt-4 text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-white md:text-[2.75rem]">
                Billions of dollars of institutional housing experience
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-white/75">
                Our team has operated 30,000+ units across some of the largest residential platforms in the
                country. We built Middle Door to bring that institutional playbook to multifamily owners, and to
                offer them a structure that, until now, only large real estate institutions used.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 self-end">
              {TEAM.map((member) => (
                <Link key={member.name} href="/about" className="group flex items-center gap-4">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image src={member.photo} alt={member.name} fill quality={90} sizes="64px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block font-medium leading-tight text-white group-hover:underline">{member.name}</span>
                    <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.13em] text-white/55">
                      {member.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-white/15 pt-8">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45">Team experience from</p>
            <div className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-5">
              {LOGOS.map((logo) => (
                <div key={logo.file} className="flex h-7 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/logos/${logo.file}`}
                    alt={logo.name}
                    className="max-h-full max-w-[120px] object-contain opacity-70 [filter:brightness(0)_invert(1)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Audience routing: open columns */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <h2 className={SERIF_H2}>Find your path</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {AUDIENCE_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="group flex flex-col border-t border-[var(--mdh-line)] pt-6">
                <p className={LABEL}>{card.eyebrow}</p>
                <h3 className="font-display mt-3 text-[1.4rem] font-medium leading-snug text-[var(--mdh-title)]">{card.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">{card.body}</p>
                <p className="mt-6 text-[0.88rem] font-medium text-[var(--mdh-accent)] transition group-hover:translate-x-0.5">
                  {card.cta} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="border-t border-[var(--mdh-line)] py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-[2rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[2.75rem]">
              You built something real. Let&apos;s make sure it keeps working for you.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--mdh-ink)]">
              Send us an address for a personalized valuation and proposal.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mdh-ink)] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--mdh-ink-soft)]"
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
