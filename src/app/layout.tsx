import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://www.middledoorhomes.com";
const SITE_NAME = "Middle Door Homes";
const DEFAULT_DESCRIPTION =
  "Middle Door Homes helps small multifamily building owners transition from active landlord to passive investor through a tax-deferred 721 exchange - without triggering a taxable event.";
const OG_IMAGE = {
  url: "/images/hero-redbrick.jpg",
  width: 1200,
  height: 800,
  alt: "Classic brick apartment building - Middle Door Homes",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "721 exchange",
    "UPREIT contribution",
    "small multifamily",
    "passive income real estate",
    "tax deferred real estate",
    "landlord to passive investor",
    "depreciation recapture deferral",
    "operating partnership units",
    "OP units",
    "multifamily property owners",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "RealEstateAgent"],
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: DEFAULT_DESCRIPTION,
  email: "info@middledoorhomes.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "721 exchange",
    "UPREIT",
    "small multifamily real estate",
    "tax-deferred real estate transactions",
    "operating partnership units",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
