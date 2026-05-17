import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Bild-Optimierung — KEINE remotePatterns, damit kein Server- oder Client-Fetch
  // zu externen Hosts möglich ist. Alle Bilder müssen in /public/images/ liegen.
  // Falls Du später externe Bilder erlauben willst: remotePatterns explizit ergänzen.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [],
  },

  // Markdown / MDX
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // Production: kompakte Logs
  logging: {
    fetches: { fullUrl: false },
  },

  // Experimentelle Features
  experimental: {
    mdxRs: false, // wir nutzen next-mdx-remote für volle Plugin-Kompatibilität
    optimizePackageImports: ["lucide-react", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
  },

  // Globale HTTP-Header (Fallback — Apache setzt die wichtigen sowieso)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Legacy-Pfade von der alten SourceForge-Seite
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
