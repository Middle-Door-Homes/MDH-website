import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ClassName = {
  className?: string;
};

type Tone = "white" | "stone" | "green";

const TONE_BG: Record<Tone, string> = {
  white: "bg-white",
  stone: "bg-[var(--mdh-stone)]",
  green: "bg-[var(--mdh-green)] text-white",
};

export function Container({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "white",
}: ClassName & { children: ReactNode; id?: string; tone?: Tone }) {
  return (
    <section id={id} className={`${TONE_BG[tone]} py-16 md:py-24 ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function Eyebrow({
  className,
  children,
  dark,
}: ClassName & { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-[var(--mdh-brass-soft)]" : "text-[var(--mdh-brass)]"
      } ${className ?? ""}`.trim()}
    >
      {children}
    </p>
  );
}

export function Heading({
  className,
  children,
  dark,
  as: Tag = "h2",
}: ClassName & { children: ReactNode; dark?: boolean; as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag
      className={`font-display text-balance text-[1.85rem] font-medium leading-[1.15] tracking-[-0.01em] md:text-[2.5rem] ${
        dark ? "text-white" : "text-[var(--mdh-green)]"
      } ${className ?? ""}`.trim()}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  className,
  children,
  dark,
}: ClassName & { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mt-5 max-w-[60ch] text-pretty text-[1.05rem] leading-[1.7] md:text-[1.1rem] ${
        dark ? "text-white/80" : "text-[var(--mdh-ink)]"
      } ${className ?? ""}`.trim()}
    >
      {children}
    </p>
  );
}

/** Eyebrow + heading + optional lead, the standard top of every section. */
export function Intro({
  eyebrow,
  title,
  children,
  dark,
  center,
  className,
}: ClassName & {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className ?? ""}`.trim()}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <Heading dark={dark} className={eyebrow ? "mt-3" : ""}>
        {title}
      </Heading>
      {children ? (
        <Lead dark={dark} className={center ? "mx-auto" : ""}>
          {children}
        </Lead>
      ) : null}
    </div>
  );
}

export function Card({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`rounded-md border border-[var(--mdh-line)] bg-white p-6 md:p-7 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "outlineLight";

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-[var(--mdh-green)] text-white hover:bg-[var(--mdh-green-soft)]",
  secondary:
    "border border-[var(--mdh-green)]/30 text-[var(--mdh-green)] hover:border-[var(--mdh-green)] hover:bg-[var(--mdh-green)]/[0.04]",
  light: "bg-white text-[var(--mdh-green)] hover:bg-[var(--mdh-parchment)]",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ClassName & { href: string; children: ReactNode; variant?: ButtonVariant }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[4px] px-6 py-3 text-[0.9rem] font-medium tracking-[0.01em] ${BUTTON_STYLES[variant]} ${className ?? ""}`.trim()}
    >
      {children}
    </Link>
  );
}

/** Door illustrations from the brand collateral: closed doors for sell / hold, the open brass door for Middle Door. */
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

/** Full-bleed photo hero used on the homepage and Owners page. */
export function PhotoHero({
  image,
  imageAlt,
  imagePosition = "center",
  eyebrow,
  title,
  children,
  actions,
}: {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--mdh-green)]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(14,30,31,0.86)] via-[rgba(14,30,31,0.55)] to-[rgba(14,30,31,0.12)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(14,30,31,0.55)] via-transparent to-transparent" />
      <Container className="flex min-h-[560px] flex-col justify-end pb-14 pt-32 md:min-h-[640px] md:pb-20">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow dark>{eyebrow}</Eyebrow> : null}
          <h1 className="font-display mt-4 text-balance text-[2.4rem] font-medium leading-[1.06] tracking-[-0.015em] text-white md:text-[3.75rem]">
            {title}
          </h1>
          {children ? (
            <p className="mt-5 max-w-[46ch] text-[1.08rem] leading-[1.6] text-white/85 md:text-[1.2rem]">
              {children}
            </p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}

/** Text-led hero with a side photo, used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  actions,
  facts,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
  facts?: { value: string; label: string }[];
}) {
  return (
    <section className="bg-[var(--mdh-stone)] pb-16 pt-12 md:pb-20 md:pt-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display mt-4 text-balance text-[2.2rem] font-medium leading-[1.1] tracking-[-0.015em] text-[var(--mdh-green)] md:text-[3rem]">
            {title}
          </h1>
          {children ? (
            <p className="mt-5 max-w-[52ch] text-[1.08rem] leading-[1.7] text-[var(--mdh-ink)]">{children}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          {facts ? <FactRow facts={facts} className="mt-10" /> : null}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image src={image} alt={imageAlt} fill priority quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}

/** Quiet row of figures: supporting detail, never the headline. */
export function FactRow({
  facts,
  dark,
  className,
}: ClassName & { facts: { value: string; label: string }[]; dark?: boolean }) {
  return (
    <dl
      className={`grid grid-cols-3 gap-4 border-t pt-6 ${dark ? "border-white/15" : "border-[var(--mdh-line)]"} ${className ?? ""}`.trim()}
    >
      {facts.map((f) => (
        <div key={f.label}>
          <dt className={`font-display text-[1.6rem] font-medium leading-none md:text-[1.9rem] ${dark ? "text-white" : "text-[var(--mdh-green)]"}`}>
            {f.value}
          </dt>
          <dd className={`mt-2 text-[0.78rem] leading-snug ${dark ? "text-white/65" : "text-[var(--mdh-muted)]"}`}>{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Closing call to action on every page. */
export function CtaBand({
  title,
  children,
  action = { href: "/contact", label: "Send us an address" },
  secondary,
}: {
  title: ReactNode;
  children?: ReactNode;
  action?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-[var(--mdh-green)] py-16 md:py-20">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div>
            <h2 className="font-display max-w-[26ch] text-balance text-[1.8rem] font-medium leading-[1.15] text-white md:text-[2.3rem]">
              {title}
            </h2>
            {children ? <p className="mt-3 max-w-[54ch] text-[1rem] leading-relaxed text-white/75">{children}</p> : null}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button href={action.href} variant="light">
            {action.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="outlineLight">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** Numbered steps, used for "how it works" lists. */
export function Steps({
  items,
  dark,
}: {
  items: { step: string; title: string; body: string }[];
  dark?: boolean;
}) {
  return (
    <ol className="space-y-0">
      {items.map((item) => (
        <li
          key={item.step}
          className={`grid grid-cols-[3rem_1fr] gap-4 border-t py-6 first:border-t-0 first:pt-0 ${dark ? "border-white/15" : "border-[var(--mdh-line)]"}`}
        >
          <span className={`font-display text-[1.5rem] leading-none ${dark ? "text-[var(--mdh-brass-soft)]" : "text-[var(--mdh-brass)]"}`}>
            {item.step}
          </span>
          <div>
            <p className={`font-display text-[1.25rem] leading-snug ${dark ? "text-white" : "text-[var(--mdh-green)]"}`}>{item.title}</p>
            <p className={`mt-1.5 leading-relaxed ${dark ? "text-white/75" : "text-[var(--mdh-ink)]"}`}>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Simple titled feature grid with a brass rule on top. */
export function FeatureGrid({
  items,
  cols = 3,
  dark,
}: {
  items: { title: string; body: ReactNode }[];
  cols?: 1 | 2 | 3 | 4;
  dark?: boolean;
}) {
  const grid =
    cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : cols === 1 ? "grid-cols-1" : "md:grid-cols-3";
  return (
    <div className={`grid gap-x-8 gap-y-10 ${grid}`}>
      {items.map((item) => (
        <div key={item.title} className={`border-t pt-5 ${dark ? "border-white/20" : "border-[var(--mdh-line)]"}`}>
          <h3 className={`font-display text-[1.25rem] leading-snug ${dark ? "text-white" : "text-[var(--mdh-green)]"}`}>{item.title}</h3>
          <p className={`mt-2 text-pretty leading-relaxed ${dark ? "text-white/75" : "text-[var(--mdh-ink)]"}`}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Heading on the left, content on the right. Keeps one left edge and one text measure site-wide. */
export function Split({
  eyebrow,
  title,
  intro,
  children,
  dark,
  sticky = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  dark?: boolean;
  sticky?: boolean;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className={sticky ? "lg:sticky lg:top-28" : ""}>
          {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
          <Heading dark={dark} className={`md:!text-[2.2rem] ${eyebrow ? "mt-3" : ""}`}>
            {title}
          </Heading>
          {intro ? (
            <p className={`mt-5 text-pretty leading-[1.7] ${dark ? "text-white/80" : "text-[var(--mdh-ink)]"}`}>{intro}</p>
          ) : null}
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">{children}</div>
    </div>
  );
}

/** Uniform logo row: every mark sits in the same box so sizes read as even. */
export function LogoRow({ logos, dark }: { logos: { name: string; file: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-5">
      {logos.map((logo) => (
        <div key={logo.file} className="flex h-7 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/logos/${logo.file}`}
            alt={logo.name}
            className={`max-h-full max-w-[120px] object-contain ${
              dark ? "opacity-70 [filter:brightness(0)_invert(1)]" : "opacity-60 grayscale"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
