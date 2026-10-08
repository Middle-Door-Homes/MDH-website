/** Team experience logos, set in one muted tone and optically balanced so the row reads evenly. */
const LOGOS = [
  { name: "Home Partners of America", file: "home-partners.svg", h: 22 },
  { name: "Invitation Homes", file: "invitation-homes.svg", h: 18 },
  { name: "LaSalle Investment Management", file: "lasalle.svg", h: 18 },
  { name: "BCG", file: "bcg.svg", h: 17 },
  { name: "CBRE", file: "cbre.svg", h: 16 },
  { name: "Landis", file: "landis.png", h: 20 },
  { name: "Real Foundations", file: "real-foundations.svg", h: 22 },
  { name: "Google", file: "google-wordmark.svg", h: 19 },
  { name: "Stanford Business School", file: "stanford.svg", h: 21 },
  { name: "Harvard University", file: "harvard.svg", h: 20 },
];

export function LogoRow({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-10 gap-y-6 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      {LOGOS.map((logo) => (
        <span key={logo.file} className="flex h-8 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/logos/${logo.file}`}
            alt={logo.name}
            style={{ height: logo.h }}
            className="w-auto max-w-[150px] object-contain opacity-80 [filter:grayscale(1)_brightness(0.55)_contrast(1.4)] transition hover:opacity-100"
          />
        </span>
      ))}
    </div>
  );
}
