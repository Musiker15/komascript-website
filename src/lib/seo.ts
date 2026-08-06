import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import type { Frontmatter } from "./frontmatter";

/** Locale → BCP-47-Tag für hreflang und og:locale. */
const LOCALE_TAG: Record<Locale, string> = { de: "de-DE", en: "en-US" };
const OG_LOCALE: Record<Locale, string> = { de: "de_DE", en: "en_US" };

interface BuildMetadataParams {
  title: string;
  description?: string;
  locale: Locale;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: Date;
  modifiedTime?: Date;
  authors?: string[];
  /**
   * Sprachen, in denen es diese Seite wirklich gibt. Default: alle.
   * Für Content-Seiten immer aus `getAvailableLocales()` befüllen, sonst
   * entstehen hreflang-Verweise auf 404-Seiten.
   */
  availableLocales?: readonly Locale[];
  /** Auf `false` setzen für Seiten, die nicht in den Index gehören. */
  index?: boolean;
}

/**
 * Baut den `alternates`-Block: Canonical plus hreflang für genau die
 * Sprachen, in denen die Seite existiert. `x-default` zeigt auf die
 * Standardsprache, falls vorhanden, sonst auf die einzige verbliebene.
 */
function buildAlternates(path: string, availableLocales: readonly Locale[]) {
  const url = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const altPath = path.replace(/^\/(de|en)/, "");
  const available = availableLocales.length > 0 ? availableLocales : SUPPORTED_LOCALES;

  const languages: Record<string, string> = {};
  for (const l of available) {
    languages[LOCALE_TAG[l]] = `${siteConfig.url}/${l}${altPath}`;
  }

  // Nur annotieren, wenn es überhaupt eine Wahl gibt. Bei einer einzigen
  // Sprachvariante ist hreflang wirkungslos und x-default irreführend.
  if (available.length > 1) {
    const fallback = available.includes(siteConfig.defaultLocale) ? siteConfig.defaultLocale : available[0];
    if (fallback) languages["x-default"] = `${siteConfig.url}/${fallback}${altPath}`;
  }

  return { url, alternates: { canonical: url, languages } };
}

export function buildMetadata(params: BuildMetadataParams): Metadata {
  const {
    title,
    description = siteConfig.description[params.locale],
    locale,
    path,
    image,
    imageAlt,
    type = "website",
    publishedTime,
    modifiedTime,
    authors = [siteConfig.author.name],
    availableLocales = SUPPORTED_LOCALES,
    index = true,
  } = params;

  const { url, alternates } = buildAlternates(path, availableLocales);
  // Das Standardbild wird pro Sprache gerendert (siehe app/og-default.png).
  const ogImage = image ?? `${siteConfig.ogImage}?lang=${locale}`;

  return {
    title,
    description,
    alternates,
    ...(index ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      type,
      locale: OG_LOCALE[locale],
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? title }],
      ...(type === "article" && {
        publishedTime: publishedTime?.toISOString(),
        modifiedTime: modifiedTime?.toISOString(),
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildArticleMetadata(
  frontmatter: Frontmatter,
  locale: Locale,
  path: string,
  availableLocales?: readonly Locale[],
): Metadata {
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    locale,
    path,
    image: frontmatter.image,
    imageAlt: frontmatter.imageAlt,
    type: "article",
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.updated,
    authors: frontmatter.author ? [frontmatter.author] : undefined,
    availableLocales,
  });
}

/**
 * JSON-LD-Generator für strukturierte Daten.
 */
export function buildJsonLd(payload: Record<string, unknown>): string {
  return JSON.stringify({ "@context": "https://schema.org", ...payload });
}

/**
 * BreadcrumbList aus den bereits gerenderten Breadcrumb-Einträgen.
 *
 * Der letzte Eintrag ist die aktuelle Seite und hat in der Regel kein href.
 * Google akzeptiert ein Listenelement ohne `item`, solange es das letzte ist.
 */
export function buildBreadcrumbLd(
  locale: Locale,
  items: Array<{ label: string; href?: string }>,
): string {
  // Zwischenstufen ohne Link fliegen raus: Nur der letzte Eintrag darf laut
  // Spezifikation ohne `item` auskommen, sonst gilt die ganze Liste als
  // unvollständig. Eine übersprungene Zwischenstufe ist das kleinere Übel.
  const linked = items.filter((item, i) => item.href !== undefined || i === items.length - 1);
  const trail = [{ label: siteConfig.name, href: `/${locale}` }, ...linked];
  return buildJsonLd({
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  });
}

/**
 * SoftwareSourceCode für KOMA-Script selbst.
 *
 * Das ist bei einem Softwareprojekt das aussagekräftigste Schema: Es verknüpft
 * Version, Lizenz, Sprache und Bezugsquelle miteinander und macht die
 * Paketidentität für Suchmaschinen explizit, statt sie aus Fließtext raten zu
 * lassen. Bewusst getrennt vom Website-Betreiber gehalten, Autor des Pakets
 * ist Markus Kohm, nicht der Betreiber dieser Seite.
 */
export function buildSoftwareLd(locale: Locale): string {
  return buildJsonLd({
    "@type": "SoftwareSourceCode",
    name: siteConfig.name,
    description: siteConfig.description[locale],
    url: `${siteConfig.url}/${locale}`,
    codeRepository: siteConfig.repositories.sourceforge,
    programmingLanguage: { "@type": "ComputerLanguage", name: "TeX" },
    runtimePlatform: "LaTeX",
    version: siteConfig.currentVersion,
    dateModified: siteConfig.versionDate,
    license: "https://www.latex-project.org/lppl/lppl-1-3c/",
    author: { "@type": "Person", name: "Markus Kohm" },
    maintainer: { "@type": "Person", name: "Markus Kohm" },
    inLanguage: LOCALE_TAG[locale],
    downloadUrl: siteConfig.repositories.ctan,
    isAccessibleForFree: true,
  });
}
