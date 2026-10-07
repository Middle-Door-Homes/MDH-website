"use client";

import { useState } from "react";

const EMAIL = "Acquisitions@MiddleDoorHomes.com";

const inputClass =
  "mt-1.5 w-full rounded-[4px] border border-[var(--mdh-line)] bg-white px-3.5 py-2.5 text-[1rem] text-[var(--mdh-title)] outline-none transition focus:border-[var(--mdh-green)]";
const labelClass = "text-[0.82rem] font-medium text-[var(--mdh-subtle)]";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "error", message: json.error ?? "We could not send your message." });
      }
    } catch {
      setStatus({ state: "error", message: "We could not send your message." });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="rounded-md bg-white">
        <p className="font-medium text-[var(--mdh-title)]">Thank you. We have your building.</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
          We will come back to you with a personalized valuation and proposal.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className={labelClass}>Name *</span>
        <input name="name" required autoComplete="name" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Email *</span>
        <input name="email" type="email" required autoComplete="email" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Units</span>
        <input name="units" inputMode="numeric" className={inputClass} />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Building address *</span>
        <input name="address" required autoComplete="street-address" className={inputClass} />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>What&apos;s prompting this?</span>
        <textarea name="message" rows={3} className={inputClass} />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex items-center justify-center rounded-[4px] bg-[var(--mdh-green)] px-6 py-3 text-[0.9rem] font-medium text-white hover:bg-[var(--mdh-green-soft)] disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending..." : "Send"}
        </button>
        {status.state === "error" ? (
          <p className="text-[0.88rem] text-red-600">
            {status.message} Please email us at{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium underline">
              {EMAIL}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
