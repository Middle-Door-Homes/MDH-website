import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui";

const LINKS = [
  { href: "/owners", label: "Owners" },
  { href: "/brokers", label: "Brokers" },
  { href: "/advisors", label: "Advisors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/investor-login", label: "Investor Login" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#16302f] text-white/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative h-8 w-8 shrink-0">
                <Image src="/images/logo-white.png" alt="" fill sizes="32px" className="object-contain" />
              </span>
              <p className="font-display text-[1.3rem] font-medium text-white">Middle Door Homes</p>
            </div>
            <p className="mt-4 max-w-[34ch] text-[0.92rem] leading-relaxed">
              The middle door between selling and holding for multifamily owners.
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--mdh-brass-soft)]">Contact</p>
            <ul className="mt-4 space-y-2 text-[0.92rem]">
              <li>
                <a href="tel:7084126898" className="hover:text-white">
                  (708) 412-6898
                </a>
              </li>
              <li>
                <a href="mailto:acquisitions@middledoorhomes.com" className="hover:text-white">
                  Acquisitions@MiddleDoorHomes.com
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                1021 W Adams St, Suite 200-30
                <br />
                Chicago, IL 60607
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--mdh-brass-soft)]">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.92rem]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[0.75rem] leading-relaxed text-white/50">
          <p>
            For informational purposes only; not an offer to sell or solicitation to buy securities.
            Forward-looking statements involve risks and uncertainties, and past performance does not
            guarantee future results. Tax outcomes from a §721 exchange depend on your individual
            circumstances, including cost basis, depreciation history, holding period, and state of
            residence. This is not tax advice. Please consult your CPA, attorney, and financial
            advisors before making any decisions.
          </p>
          <p className="mt-3">&copy; {new Date().getFullYear()} Middle Door Homes</p>
        </div>
      </Container>
    </footer>
  );
}
