import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { getAvailableLocales, listAllContentItems, listNews } from "@/lib/content";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import type { ContentItem, ContentSection } from "@/types/content";

const LOCALE_TAG: Record<Locale, string> = { de: "de-DE", en: "en-US" };

/**
 * Baut den `alternates.languages`-Block eines Sitemap-Eintrags.
 *
 * Google liest hreflang aus der Sitemap gleichwertig zu den Link-Tags im
 * <head>. Angegeben werden nur Sprachen, in denen es die Seite wirklich gibt,
 * sonst wird das Cluster als fehlerhaft verworfen. Bei nur einer verfügbaren
 * Sprache entfällt die Annotation ganz, sie wäre dann wirkungslos.
 */
function alternatesFor(paths: Partial<Record<Locale, string>>) {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    const p = paths[locale];
    if (p) languages[LOCALE_TAG[locale]] = `${siteConfig.url}${p}`;
  }
  return Object.keys(languages).length > 1 ? { languages } : undefined;
}

/**
 * Tauscht das Sprachpräfix einer internen URL aus.
 * `/de/docs/koma-script` + "en" → `/en/docs/koma-script`.
 */
function swapLocale(url: string, from: Locale, to: Locale): string {
  return `/${to}${url.slice(from.length + 1)}`;
}

/** Jüngstes Änderungsdatum einer Menge von Items, für die Index-Seiten. */
function latestChange(items: ContentItem[]): Date | undefined {
  const stamps = items.map((i) =>
    (i.frontmatter.updated ?? i.frontmatter.date ?? i.modifiedAt).getTime(),
  );
  return stamps.length > 0 ? new Date(Math.max(...stamps)) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Content einmal je Sprache einlesen, wird mehrfach gebraucht.
  const sections: ContentSection[] = ["pages", "docs", "examples", "friends"];
  const byLocale = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [
      locale,
      {
        pages: listAllContentItems("pages", locale),
        docs: listAllContentItems("docs", locale),
        examples: listAllContentItems("examples", locale),
        friends: listAllContentItems("friends", locale),
        news: listNews(locale),
      },
    ]),
  ) as Record<Locale, Record<ContentSection | "news", ContentItem[]>>;

  // Alle Inhalte zusammen bestimmen, wie aktuell die Startseite ist.
  const allItems = SUPPORTED_LOCALES.flatMap((l) => Object.values(byLocale[l]).flat());
  const siteLastModified = latestChange(allItems) ?? new Date();

  for (const locale of SUPPORTED_LOCALES) {
    const other = locale === "de" ? "en" : "de";

    // Startseite
    entries.push({
      url: `${siteConfig.url}/${locale}`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: alternatesFor({ de: "/de", en: "/en" }),
    });

    // Sektions-Übersichten. lastModified kommt aus dem jüngsten Beitrag der
    // Sektion, nicht aus `new Date()`. Ein Datum, das bei jedem Crawl auf
    // heute springt, entwertet das Signal für alle Einträge.
    const indexRoutes: Array<{ path: string; items: ContentItem[]; priority: number }> = [
      { path: "/docs", items: byLocale[locale].docs, priority: 0.8 },
      { path: "/news", items: byLocale[locale].news, priority: 0.7 },
      { path: "/examples", items: byLocale[locale].examples, priority: 0.6 },
      { path: "/friends", items: byLocale[locale].friends, priority: 0.6 },
    ];
    for (const route of indexRoutes) {
      entries.push({
        url: `${siteConfig.url}/${locale}${route.path}`,
        lastModified: latestChange(route.items) ?? siteLastModified,
        changeFrequency: "monthly",
        priority: route.priority,
        alternates: alternatesFor({ de: `/de${route.path}`, en: `/en${route.path}` }),
      });
    }

    // Einzelseiten. /search fehlt hier absichtlich, die Seite trägt noindex.
    for (const section of sections) {
      for (const item of byLocale[locale][section]) {
        const available = getAvailableLocales(section, item.slug);
        entries.push({
          url: `${siteConfig.url}${item.url}`,
          lastModified: item.frontmatter.updated ?? item.frontmatter.date ?? item.modifiedAt,
          changeFrequency: section === "docs" ? "monthly" : "yearly",
          priority: section === "docs" ? 0.8 : 0.6,
          alternates: alternatesFor(
            Object.fromEntries(available.map((l) => [l, swapLocale(item.url, locale, l)])),
          ),
        });
      }
    }

    // News
    for (const item of byLocale[locale].news) {
      const hasOther = byLocale[other].news.some((i) => i.slug.join("/") === item.slug.join("/"));
      entries.push({
        url: `${siteConfig.url}${item.url}`,
        lastModified: item.frontmatter.updated ?? item.frontmatter.date ?? item.modifiedAt,
        changeFrequency: "yearly",
        priority: 0.5,
        alternates: hasOther
          ? alternatesFor({
              de: swapLocale(item.url, locale, "de"),
              en: swapLocale(item.url, locale, "en"),
            })
          : undefined,
      });
    }
  }

  return entries;
}
