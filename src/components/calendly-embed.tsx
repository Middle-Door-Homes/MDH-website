"use client";

import { useEffect } from "react";

// TODO: replace with your Calendly booking URL once account is set up
// e.g. "https://calendly.com/middledoorhomes/intro"
const CALENDLY_URL = "https://calendly.com/middledoorhomes/intro";

export function CalendlyEmbed() {
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
    <div
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minHeight: "700px" }}
    />
  );
}
