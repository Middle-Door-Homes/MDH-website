"use client";

import { useState } from "react";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

const MIN = 300_000;
const MAX = 5_000_000;
const STEP = 50_000;
const TAX_RATE = 0.35;

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${(n / 1_000).toFixed(0)}K`;
}

export function TaxCalculator() {
  const [value, setValue] = useState(1_000_000);

  const taxBill = Math.round(value * TAX_RATE);
  const equityAfterSale = value - taxBill;
  const incomeMin = Math.round(value * 0.08);
  const incomeMax = Math.round(value * 0.1);

  return (
    <Section className="pt-4">
      <Container>
        <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-10">
          <Eyebrow>Tax savings calculator</Eyebrow>
          <Heading className="mt-2">See what you keep</Heading>
          <p className="mt-3 max-w-[60ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
            Move the slider to your building&apos;s estimated value. See the difference between a
            traditional sale and a 721 exchange.
          </p>

          {/* Slider */}
          <div className="mt-7 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
            <div className="flex items-baseline justify-between">
              <p className="text-[0.85rem] font-medium text-[var(--mdh-subtle)]">
                Building value
              </p>
              <p className="text-[1.7rem] font-semibold tracking-tight text-[var(--mdh-title)]">
                {fmt(value)}
              </p>
            </div>
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--mdh-accent)]"
            />
            <div className="mt-1 flex justify-between text-[0.73rem] text-[var(--mdh-muted)]">
              <span>{fmt(MIN)}</span>
              <span>{fmt(MAX)}</span>
            </div>
          </div>

          {/* Comparison cards */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Sell column */}
            <div className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                If you sell
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] text-[var(--mdh-ink)]">Tax bill at closing</span>
                  <span className="text-[0.9rem] font-semibold text-red-600">
                    &ndash;{fmt(taxBill)}
                  </span>
                </div>
                <div className="h-px bg-[var(--mdh-line)]" />
                <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] font-medium text-[var(--mdh-title)]">
                    Equity you keep
                  </span>
                  <span className="text-[1.15rem] font-semibold text-[var(--mdh-title)]">
                    {fmt(equityAfterSale)}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[0.75rem] leading-relaxed text-[var(--mdh-muted)]">
                Based on ~30&ndash;40% combined capital gains and depreciation recapture tax.
              </p>
            </div>

            {/* MDH column */}
            <div className="rounded-xl border border-[var(--mdh-accent)] bg-[var(--mdh-ink)] p-5 md:p-6">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/60">
                With Middle Door
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] text-white/80">Tax at closing</span>
                  <span className="text-[0.9rem] font-semibold text-emerald-400">$0</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] font-medium text-white">Equity you keep</span>
                  <span className="text-[1.15rem] font-semibold text-white">{fmt(value)}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] font-medium text-white">Est. annual income</span>
                  <span className="text-[1.15rem] font-semibold text-white">
                    {fmt(incomeMin)}&ndash;{fmt(incomeMax)}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[0.75rem] leading-relaxed text-white/50">
                Target return of 8&ndash;10%+ annually, distributed as passive income.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[0.75rem] leading-relaxed text-[var(--mdh-muted)]">
            Estimates only. Tax liability depends on your cost basis, depreciation history, and state
            of residence. Annual income is a target, not a guarantee. Consult your tax advisor.
          </p>
        </div>
      </Container>
    </Section>
  );
}
