import type { MetadataRoute } from "next";

const BASE = "https://www.middledoorhomes.com";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: RouteConfig[] = [
  { path: "/",           priority: 1.0, changeFrequency: "weekly"  },
  { path: "/owners",     priority: 0.9, changeFrequency: "monthly" },
  { path: "/brokers",    priority: 0.9, changeFrequency: "monthly" },
  { path: "/advisors",   priority: 0.9, changeFrequency: "monthly" },
  { path: "/about",      priority: 0.7, changeFrequency: "monthly" },
  { path: "/team",       priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact",    priority: 0.7, changeFrequency: "yearly"  },
  { path: "/asset-class",priority: 0.5, changeFrequency: "monthly" },
  // /investor-login intentionally excluded - private page
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
