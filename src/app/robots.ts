import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/investor-login"],
      },
    ],
    sitemap: "https://www.middledoorhomes.com/sitemap.xml",
  };
}
