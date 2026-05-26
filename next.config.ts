import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

// =============================================================================
// Content-Security-Policy
// -----------------------------------------------------------------------------
// • default-src 'none'  → "deny by default" (Observatory CSP-Check)
// • Jede zulässige Quelle wird explizit per Direktive freigeschaltet.
// • script-src / style-src brauchen 'unsafe-inline', weil Next.js zur Laufzeit
//   inline-Snippets für Streaming-SSR/Hydration injiziert. Für eine strikt
//   nonce-basierte CSP müsste die Seite vollständig dynamisch gerendert
//   werden (kein SSG mehr) — bewusster Trade-off.
// • Keine externen Hosts, keine https:-Wildcards.
// =============================================================================
const contentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

// =============================================================================
// Security-Header — Single Source of Truth
// -----------------------------------------------------------------------------
// ALLE Security-Header werden von Next.js gesetzt (im Backend-Response).
// Der Apache vHost setzt keine eigenen mehr und entfernt zusätzlich die,
// die /etc/apache2/conf-enabled/security.conf systemweit setzt, damit keine
// Doppelungen mehr in der Antwort landen (Mozilla Observatory: 2× Header).
// =============================================================================
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

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
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  // Globale HTTP-Header — Single Source of Truth für Security-Headers.
  // Apache vHost setzt keine eigenen mehr (siehe deploy/apache2/komascript.de.conf).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
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
