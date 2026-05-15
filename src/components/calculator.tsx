"use client";

import { useState } from "react";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

const BLDG_MIN = 200_000;
const BLDG_MAX = 5_000_000;
const BLDG_STEP = 25_000;
const BLDG_DEFAULT = 1_000_000;

const BASIS_MIN = 50_000;
const BASIS_STEP = 25_000;
const BASIS_DEFAULT = 350_000;

const MORT_MAX_RATIO = 0.75;
const MORT_STEP = 10_000;

const SALE_COSTS_RATE = 0.05;     // 5% broker fees + closing costs (same both sides)
const CAP_GAINS_RATE = 0.20;      // federal long-term rate; state taxes additional
const DEPR_RECAPTURE_RATE = 0.10; // est. 25% recapture on accumulated depreciation

function fmt(n: number, compact = false) {
  if (compact) {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    return `$${Math.round(n / 1_000)}K`;
  }
  return n === 0 ? "$0" : `$${n.toLocaleString("en-US")}`;
}

function Row({
  label,
  value,
  negative,
  zero,
  total,
  dark,
}: {
  label: string;
  value: string;
  negative?: boolean;
  zero?: boolean;
  total?: boolean;
  dark?: boolean;
}) {
  const labelClass = `text-[0.88rem] leading-snug ${
    total
      ? dark
        ? "font-medium text-white"
        : "font-medium text-[var(--mdh-title)]"
      : dark
        ? "text-white/75"
        : "text-[var(--mdh-ink)]"
  }`;

  const valueClass = `shrink-0 whitespace-nowrap tabular-nums ${
    zero
      ? "text-[0.9rem] font-semibold text-emerald-400"
      : negative
        ? dark
          ? "text-[0.9rem] font-medium text-red-400"
          : "text-[0.9rem] font-medium text-red-600"
        : total
          ? dark
            ? "text-[1.1rem] font-bold text-white"
            : "text-[1.1rem] font-bold text-[var(--mdh-title)]"
          : dark
            ? "text-[0.9rem] font-medium text-white/90"
            : "text-[0.9rem] font-medium text-[var(--mdh-title)]"
  }`;

  return (
    <div
      className={`flex items-baseline justify-between gap-4 ${
        total
          ? `border-t pt-3 mt-1 ${dark ? "border-white/15" : "border-[var(--mdh-line)]"}`
          : ""
      }`}
    >
      <span className={labelClass}>{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

export function TaxCalculator() {
  const [bldg, setBldg] = useState(BLDG_DEFAULT);
  const [basis, setBasis] = useState(BASIS_DEFAULT);
  const [mort, setMort] = useState(0);

  const mortMax = Math.round(bldg * MORT_MAX_RATIO);
  const safeM = Math.min(mort, mortMax);
  const safeBasis = Math.min(basis, bldg);

  // Shared costs
  const saleCosts = Math.round(bldg * SALE_COSTS_RATE);

  // Sale scenario
  const capGainsTax = Math.round(Math.max(0, bldg - safeBasis) * CAP_GAINS_RATE);
  const deprRecapture = Math.round(safeBasis * DEPR_RECAPTURE_RATE);
  const saleNet = bldg - saleCosts - safeM - capGainsTax - deprRecapture;

  // 721 exchange scenario - same costs, no taxes
  const mdhNet = bldg - saleCosts - safeM;
  const equityGain = mdhNet - saleNet;

  return (
    <Section className="pt-4">
      <Container>
        <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-10">
          <Eyebrow>Equity calculator</Eyebrow>
          <Heading className="mt-2">How much equity do you keep?</Heading>
          <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
            Adjust the sliders to match your situation. See how a 721 exchange compares to a
            traditional sale - line by line.
          </p>

          {/* Sliders */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[0.82rem] font-medium text-[var(--mdh-subtle)]">
                  Building value
                </p>
                <p className="shrink-0 whitespace-nowrap text-[1.4rem] font-semibold tracking-tight text-[var(--mdh-title)]">
                  {fmt(bldg)}
                </p>
              </div>
              <input
                type="range"
                min={BLDG_MIN}
                max={BLDG_MAX}
                step={BLDG_STEP}
                value={bldg}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setBldg(v);
                  if (mort > v * MORT_MAX_RATIO) setMort(Math.round(v * MORT_MAX_RATIO));
                  if (basis > v) setBasis(v);
                }}
                className="mt-3 w-full accent-[var(--mdh-accent)]"
              />
              <div className="mt-1 flex justify-between text-[0.72rem] text-[var(--mdh-muted)]">
                <span>{fmt(BLDG_MIN, true)}</span>
                <span>{fmt(BLDG_MAX, true)}</span>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[0.82rem] font-medium text-[var(--mdh-subtle)]">
                  Purchase price / cost basis
                </p>
                <p className="shrink-0 whitespace-nowrap text-[1.4rem] font-semibold tracking-tight text-[var(--mdh-title)]">
                  {fmt(safeBasis)}
                </p>
              </div>
              <input
                type="range"
                min={BASIS_MIN}
                max={bldg}
                step={BASIS_STEP}
                value={safeBasis}
                onChange={(e) => setBasis(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--mdh-accent)]"
              />
              <div className="mt-1 flex justify-between text-[0.72rem] text-[var(--mdh-muted)]">
                <span>{fmt(BASIS_MIN, true)}</span>
                <span>{fmt(bldg, true)}</span>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[0.82rem] font-medium text-[var(--mdh-subtle)]">
                  Outstanding mortgage
                </p>
                <p className="shrink-0 whitespace-nowrap text-[1.4rem] font-semibold tracking-tight text-[var(--mdh-title)]">
                  {safeM === 0 ? "None" : fmt(safeM)}
                </p>
              </div>
              <input
                type="range"
                min={0}
                max={mortMax}
                step={MORT_STEP}
                value={safeM}
                onChange={(e) => setMort(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--mdh-accent)]"
              />
              <div className="mt-1 flex justify-between text-[0.72rem] text-[var(--mdh-muted)]">
                <span>$0</span>
                <span>{fmt(mortMax, true)}</span>
              </div>
            </div>
          </div>

          {/* Comparison columns */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Traditional sale */}
            <div className="rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] p-5 md:p-6">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                Traditional sale
              </p>
              <div className="mt-4 space-y-2.5">
                <Row label="Sale proceeds" value={fmt(bldg)} />
                <Row
                  label="Sale costs (5%)"
                  value={`-${fmt(saleCosts)}`}
                  negative
                />
                <Row
                  label="Mortgage payoff"
                  value={safeM === 0 ? "$0" : `-${fmt(safeM)}`}
                  negative={safeM > 0}
                />
                <Row label="Capital gains tax (est.)" value={`-${fmt(capGainsTax)}`} negative />
                <Row
                  label="Depreciation recapture (est.)"
                  value={`-${fmt(deprRecapture)}`}
                  negative
                />
                <Row label="Equity you keep" value={fmt(Math.max(0, saleNet))} total />
              </div>
            </div>

            {/* MDH 721 exchange */}
            <div className="rounded-xl border border-[var(--mdh-accent)] bg-[var(--mdh-ink)] p-5 md:p-6">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/60">
                721 Exchange - Middle Door
              </p>
              <div className="mt-4 space-y-2.5">
                <Row label="Contribution value" value={fmt(bldg)} dark />
                <Row
                  label="Sale costs (5%, non-cash)"
                  value={`-${fmt(saleCosts)}`}
                  negative
                  dark
                />
                <Row
                  label="Mortgage payoff"
                  value={safeM === 0 ? "$0" : `-${fmt(safeM)}`}
                  negative={safeM > 0}
                  dark
                />
                <Row label="Capital gains tax" value="$0 - deferred" zero dark />
                <Row label="Depreciation recapture" value="$0 - deferred" zero dark />
                <Row label="Equity as OP units" value={fmt(mdhNet)} total dark />
              </div>
            </div>
          </div>

          {/* Difference callout */}
          {equityGain > 0 && (
            <div className="mt-4 rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-bg)] px-5 py-4 text-center md:py-5">
              <p className="text-[0.83rem] text-[var(--mdh-subtle)]">
                With a 721 exchange you preserve
              </p>
              <p className="mt-0.5 whitespace-nowrap text-[1.55rem] font-semibold tracking-tight text-[var(--mdh-title)] md:text-[1.8rem]">
                {fmt(equityGain)} more equity
              </p>
              <p className="mt-0.5 text-[0.83rem] text-[var(--mdh-muted)]">
                compared to a traditional sale
              </p>
            </div>
          )}

          <p className="mt-4 text-[0.73rem] leading-relaxed text-[var(--mdh-muted)]">
            Actual tax liability depends on your cost basis, depreciation history, and state of
            residence. This is illustrative only - not tax or legal advice.
          </p>
        </div>
      </Container>
    </Section>
  );
}
