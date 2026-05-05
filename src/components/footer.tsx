import Link from "next/link";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-[var(--mdh-line)] bg-white/95">
      <Container className="py-8">
        <div className="flex flex-col gap-3 text-sm text-[var(--mdh-subtle)] md:flex-row md:items-center md:justify-between">
          <div>&copy; {new Date().getFullYear()} Middle Door Homes</div>
          <div className="flex items-center gap-4">
            <Link href="/investor-login" className="hover:text-[var(--mdh-ink)]">
              Investor Login
            </Link>
            <a href="mailto:info@middledoorhomes.com" className="hover:text-[var(--mdh-ink)]">
              info@middledoorhomes.com
            </a>
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-[var(--mdh-muted)] md:text-sm">
          For informational purposes only; not an offer to sell or solicitation to buy securities.
          Forward-looking statements involve risks and uncertainties, and past performance does not
          guarantee future results. Tax outcomes from a §721 exchange depend on your individual
          circumstances — including cost basis, depreciation history, holding period, and state of
          residence. This is not tax advice. Please consult your CPA, attorney, and financial
          advisors before making any decisions.
        </p>
      </Container>
    </footer>
  );
}
