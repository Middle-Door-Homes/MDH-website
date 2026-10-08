/** Team experience logos in original colors, optically balanced, on one row from laptop widths up. */
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
      className={`flex flex-wrap items-center gap-x-8 gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-4 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      {LOGOS.map((logo) => (
        <span key={logo.file} className="flex h-8 shrink items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/logos/${logo.file}`}
            alt={logo.name}
            style={{ height: logo.h }}
            className="w-auto max-w-[140px] object-contain lg:max-w-[9vw]"
          />
        </span>
      ))}
    </div>
  );
}
