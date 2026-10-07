import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ClassName = {
  className?: string;
};

export function Container({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`w-full px-5 md:px-8 lg:px-10 xl:px-12 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "plain",
}: ClassName & { children: ReactNode; id?: string; tone?: "plain" | "white" | "warm" }) {
  const bg = tone === "white" ? "bg-white" : tone === "warm" ? "bg-[#f6f1e7]" : "";
  return (
    <section id={id} className={`py-14 md:py-20 ${bg} ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function Heading({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <h2 className={`font-display text-[1.65rem] font-normal leading-[1.1] tracking-[-0.01em] text-[var(--mdh-title)] [font-variant-numeric:lining-nums] md:text-[1.8rem] xl:text-[1.95rem] ${className ?? ""}`.trim()}>
      {children}
    </h2>
  );
}

export function Eyebrow({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <p className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#b8894f] md:text-[0.72rem] ${className ?? ""}`.trim()}>
      {children}
    </p>
  );
}

export function Subheading({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <p className={`mt-4 max-w-[66ch] text-[0.93rem] leading-relaxed text-[var(--mdh-muted)] md:text-[0.98rem] ${className ?? ""}`.trim()}>
      {children}
    </p>
  );
}

export function Lead({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <p className={`mt-4 max-w-[62ch] text-[0.96rem] leading-[1.62] text-[var(--mdh-ink)] md:text-[1.05rem] ${className ?? ""}`.trim()}>
      {children}
    </p>
  );
}

export function Card({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`rounded-xl border border-[var(--mdh-line)] bg-[var(--mdh-surface)] p-5 shadow-[0_10px_26px_rgba(23,33,43,0.035)] md:p-6 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <Card>
      <div className="text-2xl font-semibold tracking-tight md:text-3xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">{label}</div>
      {note ? <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">{note}</p> : null}
    </Card>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-[var(--mdh-line)]" aria-hidden />;
}

export function WideHero({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative h-44 w-full overflow-hidden border-b border-[var(--mdh-line)] md:h-56">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,22,31,0.08)] to-transparent" />
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-[var(--mdh-ink)] text-white hover:bg-[var(--mdh-ink-soft)]"
      : "border border-[var(--mdh-line)] bg-white text-[var(--mdh-ink)] hover:bg-[var(--mdh-bg)]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${classes}`}
    >
      {children}
    </Link>
  );
}

/** Door illustrations from the brand collateral: closed for sell / hold, open for Middle Door. */
export function DoorIcon({ open, className }: ClassName & { open?: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 64 88" fill="none" aria-hidden className={className}>
        <path d="M6 84h52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 84V6h40v78" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M17 10l24 5v66l-24 3z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="35" cy="48" r="2.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 88" fill="none" aria-hidden className={className}>
      <rect x="10" y="4" width="44" height="80" rx="1.5" stroke="currentColor" strokeWidth="3" />
      <rect x="16" y="10" width="32" height="74" stroke="currentColor" strokeWidth="3" />
      <rect x="22" y="18" width="20" height="22" rx="1" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22" y="48" width="20" height="26" rx="1" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="43" cy="46" r="2.6" fill="currentColor" />
    </svg>
  );
}

const BRASS = "#b8894f";

/** Split hero used on inner pages: navy text panel beside an uncovered photo, optional floating figures. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  stats,
  cta = { href: "/contact", label: "Send us an address" },
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imageAlt: string;
  stats?: { value: string; label: string }[];
  cta?: { href: string; label: string };
}) {
  return (
    <>
      <section className="bg-[var(--mdh-ink)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:order-last lg:aspect-auto">
            <Image src={image} alt={imageAlt} fill priority quality={90} sizes="100vw" className="object-cover" />
          </div>
          <div
            className={`flex items-center px-5 pt-10 sm:px-8 lg:min-h-[560px] lg:pl-10 lg:pr-14 xl:pl-12 ${
              stats ? "pb-20 md:pb-24 lg:pb-28 lg:pt-20" : "pb-14 lg:py-20"
            }`}
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-10" style={{ background: BRASS }} />
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em]" style={{ color: BRASS }}>
                  {eyebrow}
                </p>
              </div>
              <h1 className="font-display mt-5 text-balance text-[1.8rem] font-normal leading-[1.05] tracking-[-0.015em] text-white sm:text-[2rem] lg:text-[2.7rem] xl:text-[2.9rem]">
                {title}
              </h1>
              {lead ? <p className="mt-5 text-[0.96rem] font-light leading-relaxed text-white/80 md:text-[1.05rem]">{lead}</p> : null}
              <div className="mt-8">
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
                >
                  {cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {stats ? (
        <section className="relative z-10">
          <Container>
            <div className="-mt-12 grid grid-cols-3 divide-x divide-[var(--mdh-line)] bg-white shadow-[0_24px_60px_rgba(18,29,41,0.14)] md:-mt-16">
              {stats.map((s) => (
                <div key={s.label} className="px-3 py-6 text-center md:px-8 md:py-8">
                  <p className="font-display text-[1.5rem] leading-none text-[var(--mdh-title)] [font-variant-numeric:lining-nums] md:text-[1.8rem]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-[var(--mdh-subtle)] md:text-[0.72rem]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

/** Light closing call to action used at the bottom of inner pages. */
export function ClosingCta({
  title,
  body,
  cta = { href: "/contact", label: "Send us an address" },
}: {
  title: ReactNode;
  body?: ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-[var(--mdh-line)] bg-[#f6f1e7] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-balance text-[1.7rem] font-normal leading-[1.1] tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.9rem]">
            {title}
          </h2>
          {body ? <p className="mx-auto mt-5 max-w-2xl text-[0.96rem] leading-relaxed text-[var(--mdh-ink)]">{body}</p> : null}
          <div className="mt-8">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--mdh-ink)] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--mdh-ink-soft)]"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
