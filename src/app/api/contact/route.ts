import { NextResponse } from "next/server";

const TO = "acquisitions@middledoorhomes.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Middle Door Homes Website <website@middledoorhomes.com>";

const FIELDS = ["name", "email", "phone", "address", "units", "message"] as const;
type Field = (typeof FIELDS)[number];

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });

  // Honeypot: real visitors never fill this field.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map((f) => [f, clean(body[f])])) as Record<Field, string>;
  if (!data.name || !data.email || !data.address) {
    return NextResponse.json({ ok: false, error: "Name, email, and building address are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Form delivery is not configured." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Building address", data.address],
    ["Units", data.units],
    ["What's prompting this", data.message],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n");
  const html = `<table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v || "-").replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `Website: ${data.address}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "We could not send your message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
