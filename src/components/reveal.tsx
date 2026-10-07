"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades content up once as it scrolls into view. Respects reduced-motion via globals.css. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mdh-reveal ${shown ? "is-shown" : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
