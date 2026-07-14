import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site.config";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import { buildJsonLd } from "@/lib/seo";

// Fonts werden vollständig lokal über das @fontsource-Paket geladen.
// Keine Kommunikation zu Google/Adobe, weder beim Build noch zur Laufzeit.
// Die .woff2-Dateien liegen unter node_modules/@fontsource-variable/* und
// werden von Next.js automatisch in /_next/static/media/ kopiert.
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "@/styles/globals.css";

// ============================================================================
// Viewport
// ============================================================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

// ============================================================================
// Metadata (Root / pro Locale)
// ============================================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(SUPPORTED_LOCALES, locale)) return {};
  const l = locale as Locale;
  const title = `${siteConfig.name}: ${siteConfig.tagline[l]}`;
  const description = siteConfig.description[l];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    generator: "Next.js",
    // referrer: konsistent mit dem HTTP-Header `Referrer-Policy` aus
    // next.config.ts. Achtung: Wenn der Wert hier von der HTTP-Header-Policy
    // abweicht, überschreibt der <meta>-Tag den Header (Mozilla Observatory
    // Issue #278). Daher beide Stellen synchron halten.
    referrer: "strict-origin-when-cross-origin",
    keywords: [
      "KOMA-Script", "LaTeX", "scrartcl", "scrreprt", "scrbook", "scrlttr2",
      "typearea", "Markus Kohm", "Typografie", "TeX", "Setzerei", "Buchsatz",
      "DIN-Brief", "wissenschaftliches Schreiben",
    ],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.mastodon }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: { telephone: false, email: false, address: false },
    alternates: {
      canonical: `/${l}`,
      languages: {
        "de-DE": "/de",
        "en-US": "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      type: "website",
      locale: l === "de" ? "de_DE" : "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    icons: {
      // Bewusst nur die .ico. Bietet man zusätzlich eine SVG an, bevorzugen
      // Chrome und Firefox diese und die .ico wird nie angezeigt.
      icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

// ============================================================================
// Root-Layout
// ============================================================================
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(SUPPORTED_LOCALES, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const l = locale as Locale;

  // CSP-Nonce aus dem Request-Header lesen (von src/proxy.ts gesetzt) und
  // an alle inline-<script>-Tags weitergeben. Der Aufruf macht die Route
  // dynamisch (kein SSG mehr), Trade-off für die strikte Nonce-CSP.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  // JSON-LD: Organisation + Website
  const orgLd = buildJsonLd({
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.repositories.github,
      siteConfig.repositories.sourceforge,
      siteConfig.repositories.codeberg,
      siteConfig.author.mastodon,
    ].filter(Boolean),
  });

  const siteLd = buildJsonLd({
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: l === "de" ? "de-DE" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/${l}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  return (
    <html lang={l} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        {/*
          suppressHydrationWarning ist hier nötig, nicht kosmetisch: Browser
          leeren das nonce-Attribut im DOM direkt nach dem Parsen (HTML-Spec,
          verhindert das Ausspähen des Nonce über CSS-Attribut-Selektoren).
          Der Client liest also nonce="", der Server hat nonce="<wert>"
          gerendert, und React meldet eine Hydration-Mismatch. Die CSP prüft
          den internen Wert, der erhalten bleibt, das Script läuft korrekt.
        */}
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: orgLd }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: siteLd }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          nonce={nonce}
        >
          <NextIntlClientProvider locale={l} messages={messages} timeZone="Europe/Berlin">
            <SkipLink />
            <Header locale={l} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer locale={l} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function SkipLink() {
  const t = useTranslations("common");
  return (
    <a href="#main" className="skip-link">
      {t("skipToContent")}
    </a>
  );
}
