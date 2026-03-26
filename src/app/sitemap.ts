import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.middledoorhomes.com";
  const now = new Date();
  const routes = ["/", "/owners", "/brokers", "/lenders", "/about", "/team", "/contact", "/investor-login"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
