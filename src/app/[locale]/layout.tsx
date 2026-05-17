import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
  const title = `${siteConfig.name} — ${siteConfig.tagline[l]}`;
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
    referrer: "origin-when-cross-origin",
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
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
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

  // JSON-LD: Organisation + Website
  const orgLd = buildJsonLd({
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    sameAs: [
      siteConfig.repositories.github,
      siteConfig.repositories.sourceforge,
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
    <html
      lang={l}
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgLd }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: siteLd }} />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
