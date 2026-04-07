"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";

const AUDIENCE_LINKS = [
  { href: "/owners", label: "Owners" },
  { href: "/brokers", label: "Brokers" },
  { href: "/advisors", label: "Advisors" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--mdh-line)] bg-white/96 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Middle Door Homes home">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-sm">
              <Image
                src="/images/Logo.png"
                alt="Middle Door Homes"
                fill
                priority
                sizes="44px"
                className="scale-[1.28] object-contain"
              />
            </span>
            <span className="text-base font-medium tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.04rem]">
              Middle Door Homes
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm md:flex">
            {AUDIENCE_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-[var(--mdh-title)] ${active ? "font-medium text-[var(--mdh-title)]" : "text-[var(--mdh-subtle)]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-4 w-px bg-[var(--mdh-line)]" aria-hidden />
            {COMPANY_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-[var(--mdh-title)] ${active ? "font-medium text-[var(--mdh-title)]" : "text-[var(--mdh-subtle)]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="mailto:info@middledoorhomes.com"
              className="text-xs font-medium text-[var(--mdh-subtle)] transition hover:text-[var(--mdh-title)] md:text-sm"
            >
              info@middledoorhomes.com
            </a>
            <Link
              href="/investor-login"
              className="rounded-full border border-[var(--mdh-line)] px-3 py-1 text-xs font-medium text-[var(--mdh-subtle)] hover:text-[var(--mdh-title)]"
            >
              Investor Login
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center rounded-md border border-[var(--mdh-line)] px-3 py-2 text-xs text-[var(--mdh-ink)] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--mdh-line)] bg-white md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile Primary" className="flex flex-col gap-3">
              {[...AUDIENCE_LINKS, ...COMPANY_LINKS].map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-2 py-1.5 text-sm ${active ? "bg-[var(--mdh-bg)] text-[var(--mdh-ink)]" : "text-[var(--mdh-subtle)]"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href="mailto:info@middledoorhomes.com"
              className="mt-4 inline-block text-sm font-medium text-[var(--mdh-ink)]"
            >
              info@middledoorhomes.com
            </a>
            <Link
              href="/investor-login"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block text-sm font-medium text-[var(--mdh-subtle)]"
            >
              Investor Login
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
