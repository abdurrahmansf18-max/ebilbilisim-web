import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/hizmetlerimiz", "/kurumsal", "/referanslarimiz", "/iletisim"].map(
    (path) => ({
      url: `${siteConfig.domain}${path}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.domain}/hizmetlerimiz/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
