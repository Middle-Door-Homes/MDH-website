import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.middledoorhomes.com"),
  title: {
    default: "Middle Door Homes",
    template: "%s | Middle Door Homes",
  },
  description:
    "Middle Door Homes helps small multifamily building owners transition from active management to passive income through a tax-deferred 721 exchange.",
  openGraph: {
    title: "Middle Door Homes",
    description:
      "Middle Door Homes helps small multifamily building owners transition from active management to passive income through a tax-deferred 721 exchange.",
    url: "https://www.middledoorhomes.com",
    siteName: "Middle Door Homes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/bldg-13.jpg",
        width: 1200,
        height: 630,
        alt: "Small multifamily building",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
