"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/middle-door-homes";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyButton({ label = "Schedule a 20-minute call" }: { label?: string }) {
  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <button
      onClick={() =>
        window.Calendly?.initPopupWidget({ url: `${CALENDLY_URL}?hide_gdpr_banner=1` })
      }
      className="inline-flex items-center justify-center rounded-full bg-[var(--mdh-ink)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--mdh-ink-soft)]"
    >
      {label}
    </button>
  );
}
