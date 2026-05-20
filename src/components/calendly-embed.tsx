"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/middle-door-homes";

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
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
      style={{ height: "900px" }}
    />
  );
}
