import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };
export type FaqGroup = { group: string; items: FaqItem[] };

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <div key={g.group}>
          <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#b8894f]">{g.group}</p>
          <div className="divide-y divide-[var(--mdh-line)] border-y border-[var(--mdh-line)]">
            {g.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[1.02rem] font-medium leading-snug text-[var(--mdh-title)]">{item.q}</span>
                  <span className="mt-0.5 shrink-0 text-[1.2rem] leading-none text-[#b8894f]">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">&minus;</span>
                  </span>
                </summary>
                <div className="max-w-3xl pb-6 text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
