import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /search bewusst NICHT sperren, obwohl es Suchergebnisseiten sind:
        // Die Seiten tragen ein `noindex`, und das liest ein Crawler nur,
        // wenn er sie auch abrufen darf. Ein Disallow hier würde dazu führen,
        // dass die aus der Navigation heraus überall verlinkte URL als
        // reiner Link ohne Snippet im Index landet. Der Crawl-Aufwand ist
        // bei gut 140 Seiten kein Argument dagegen.
        disallow: ["/api/", "/_next/", "/*.json$"],
      },
      // Aggressive AI-Crawler (optional blockieren, kann später entfernt werden)
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
