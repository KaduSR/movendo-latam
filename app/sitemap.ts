import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.movendolatam.com.br",
      lastModified: new Date("2026-09-10"),
    },
  ];
}
