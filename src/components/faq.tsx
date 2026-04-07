import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };
export type FaqGroup = { group: string; items: FaqItem[] };

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-7">
      {groups.map((g) => (
        <div key={g.group}>
          <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
            {g.group}
          </p>
          <div className="divide-y divide-[var(--mdh-line)] overflow-hidden rounded-xl border border-[var(--mdh-line)] bg-white">
            {g.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden md:px-6">
                  <span className="text-[0.95rem] font-medium leading-snug text-[var(--mdh-title)]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 shrink-0 font-medium text-[var(--mdh-subtle)]">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="border-t border-[var(--mdh-line)] bg-[var(--mdh-bg)] px-5 py-4 text-[0.91rem] leading-relaxed text-[var(--mdh-ink)] md:px-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
