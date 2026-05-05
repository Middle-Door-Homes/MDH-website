"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";

const AUDIENCE_LINKS = [
  {
    href: "/owners",
    label: "Owners",
    sections: [
      { href: "/owners#solution", label: "The 721 exchange" },
      { href: "/owners#qualifies", label: "Who qualifies" },
      { href: "/owners#process", label: "The process" },
      { href: "/owners#faq", label: "FAQ" },
    ],
  },
  {
    href: "/brokers",
    label: "Brokers",
    sections: [
      { href: "/brokers#commission", label: "Your commission" },
      { href: "/brokers#how-it-works", label: "How it works" },
      { href: "/brokers#faq", label: "FAQ" },
    ],
  },
  {
    href: "/advisors",
    label: "Advisors",
    sections: [
      { href: "/advisors#solution", label: "The 721 exchange" },
      { href: "/advisors#who-we-work-with", label: "Who we work with" },
      { href: "/advisors#how-it-works", label: "How it works" },
    ],
  },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--mdh-line)] bg-white/96 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1.5" aria-label="Middle Door Homes home">
            <span className="relative h-8 w-8 shrink-0">
              <Image
                src="/images/Logo.png"
                alt="Middle Door Homes"
                fill
                priority
                sizes="32px"
                className="object-contain"
              />
            </span>
            <span className="text-base font-medium tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.04rem]">
              Middle Door Homes
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm md:flex">
            {AUDIENCE_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-0.5 transition hover:text-[var(--mdh-title)] ${active ? "font-medium text-[var(--mdh-title)]" : "text-[var(--mdh-subtle)]"}`}
                  >
                    {link.label}
                    <svg className="mt-px h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[180px] overflow-hidden rounded-xl border border-[var(--mdh-line)] bg-white py-1.5 shadow-[0_8px_24px_rgba(18,29,41,0.10)]">
                      {link.sections.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-[0.85rem] text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)] hover:text-[var(--mdh-title)]"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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
            <nav aria-label="Mobile Primary" className="flex flex-col gap-1">
              {AUDIENCE_LINKS.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-2 py-1.5 text-sm font-medium ${active ? "bg-[var(--mdh-bg)] text-[var(--mdh-ink)]" : "text-[var(--mdh-subtle)]"}`}
                    >
                      {link.label}
                    </Link>
                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-[var(--mdh-line)] pl-3">
                      {link.sections.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="block rounded px-2 py-1 text-[0.8rem] text-[var(--mdh-muted)] transition hover:text-[var(--mdh-ink)]"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="my-1 h-px bg-[var(--mdh-line)]" />
              {COMPANY_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-2 py-1.5 text-sm ${active ? "bg-[var(--mdh-bg)] text-[var(--mdh-ink)]" : "text-[var(--mdh-subtle)]"}`}
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
          </Container>
        </div>
      ) : null}
    </header>
  );
}
