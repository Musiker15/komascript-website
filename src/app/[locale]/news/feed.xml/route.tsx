import { siteConfig } from "@/config/site.config";
import { listNews } from "@/lib/content";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";

/**
 * RSS 2.0 für „Markus schreibt".
 *
 * Feed-Reader und Aggregatoren sind für einen Blog dieser Art die zweite
 * Entdeckungsschiene neben der Suche. Der Feed enthält bewusst nur
 * Titel, Beschreibung und Link, keinen Volltext: Der Content ist MDX und
 * müsste sonst zu HTML gerendert und dabei von allen Komponenten befreit
 * werden. Das Ergebnis wäre unzuverlässig, ein sauberer Teaser-Feed ist
 * ehrlicher.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

/** Maskiert die fünf in XML nicht erlaubten Zeichen. */
function xml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!SUPPORTED_LOCALES.includes(raw as Locale)) {
    return new Response("Not found", { status: 404 });
  }
  const locale = raw as Locale;

  const items = listNews(locale);
  const feedUrl = `${siteConfig.url}/${locale}/news/feed.xml`;
  const latest = items[0]?.frontmatter.date ?? new Date();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(siteConfig.name)}</title>
    <link>${xml(`${siteConfig.url}/${locale}/news`)}</link>
    <description>${xml(siteConfig.description[locale])}</description>
    <language>${locale === "de" ? "de-de" : "en-us"}</language>
    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>
    <atom:link href="${xml(feedUrl)}" rel="self" type="application/rss+xml" />
${items
  .map((item) => {
    const url = `${siteConfig.url}${item.url}`;
    return `    <item>
      <title>${xml(item.frontmatter.title)}</title>
      <link>${xml(url)}</link>
      <guid isPermaLink="true">${xml(url)}</guid>
      ${item.frontmatter.date ? `<pubDate>${item.frontmatter.date.toUTCString()}</pubDate>` : ""}
      ${item.frontmatter.description ? `<description>${xml(item.frontmatter.description)}</description>` : ""}
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
