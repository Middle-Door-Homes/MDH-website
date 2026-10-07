"use client";

import Image from "next/image";
import { useState } from "react";

type TeamMember = {
  name: string;
  image: string;
  bio: string;
};

export function TeamHoverGrid({ team }: { team: TeamMember[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-5 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-7">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {team.map((member, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={member.name}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`group text-left ${active ? "" : "opacity-90 hover:opacity-100"}`}
              aria-label={`View bio for ${member.name}`}
            >
              <div
                className={`relative aspect-square overflow-hidden rounded-xl border ${active ? "border-[var(--mdh-title)] shadow-[0_12px_26px_rgba(39,79,108,0.2)]" : "border-[var(--mdh-line)]"} transition`}
              >
                <Image src={member.image} alt={member.name} fill sizes="220px" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(12,20,29,0.62)] to-transparent p-3">
                  <p className="text-[0.88rem] font-medium tracking-[-0.01em] text-white md:text-[0.92rem]">
                    {member.name}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-[var(--mdh-line)] bg-[rgba(248,251,253,0.85)] p-4 md:p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">Profile</p>
        <h3 className="mt-2 text-[1.6rem] font-medium tracking-[-0.01em] text-[var(--mdh-title)] md:text-[1.75rem]">
          {team[activeIndex]?.name}
        </h3>
        <p className="mt-3 max-w-[70ch] text-[0.97rem] leading-[1.62] text-[var(--mdh-ink)] md:text-[1.01rem]">
          {team[activeIndex]?.bio}
        </p>
      </div>
    </div>
  );
}
