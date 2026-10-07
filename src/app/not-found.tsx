import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#b8894f]">Page not found</p>
            <h1 className="font-display mt-4 text-balance text-[2rem] font-normal leading-[1.1] text-[var(--mdh-title)] md:text-[2.5rem]">
              This door doesn&apos;t lead anywhere.
            </h1>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
              The page you were looking for has moved or no longer exists.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mdh-ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--mdh-ink-soft)]"
              >
                Back to home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--mdh-line)] bg-white px-6 py-3 text-sm font-medium text-[var(--mdh-ink)] transition hover:bg-[var(--mdh-bg)]"
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
