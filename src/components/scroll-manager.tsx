"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Opens every new page at the top. If the link carries a #section, glides to it instead
 * once the page has rendered.
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
