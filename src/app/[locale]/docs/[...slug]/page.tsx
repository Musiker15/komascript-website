import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { CalendarClock, Pencil } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { DocSidebar } from "@/components/content/DocSidebar";
import { TableOfContents } from "@/components/content/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildDocTree, getAvailableLocales, getContent, listContent } from "@/lib/content";
import { renderMDX, extractHeadings } from "@/lib/mdx";
import { buildArticleMetadata, buildJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";

interface Props {
  params: Promise<{ locale: Locale; slug: string[] }>;
}

export function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string[] }> = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const slug of listContent("docs", locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getContent("docs", locale, slug);
  if (!item) return {};
  // Das Archiv liegt nur auf Deutsch vor, hreflang darf hier nicht pauschal
  // beide Sprachen behaupten.
  return buildArticleMetadata(item.frontmatter, locale, item.url, getAvailableLocales("docs", slug));
}

export default async function DocPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");

  const item = getContent("docs", locale, slug);
  if (!item) notFound();

  const headings = extractHeadings(item.content);
  const content = await renderMDX(item.content);
  const tree = buildDocTree(locale);

  // Breadcrumbs aufbauen. Zwischenstufen werden gegen ihre index.md aufgelöst,
  // damit dort der echte Seitentitel und ein Link stehen statt eines aus dem
  // Ordnernamen gebastelten "Koma Script". Das betrifft die sichtbare
  // Navigation genauso wie das BreadcrumbList-Schema, das für Zwischenstufen
  // ohne Link unvollständig wäre.
  const crumbs: Crumb[] = [{ label: t("title"), href: `/${locale}/docs` }];
  for (let i = 0; i < slug.length - 1; i++) {
    const seg = slug[i];
    if (!seg) continue;
    const ancestor = getContent("docs", locale, slug.slice(0, i + 1));
    crumbs.push(
      ancestor
        ? { label: ancestor.frontmatter.title, href: ancestor.url }
        : { label: seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) },
    );
  }
  crumbs.push({ label: item.frontmatter.title });

  const articleLd = buildJsonLd({
    "@type": "TechArticle",
    headline: item.frontmatter.title,
    description: item.frontmatter.description,
    url: `${siteConfig.url}${item.url}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}${item.url}` },
    datePublished: item.frontmatter.date?.toISOString(),
    dateModified: (item.frontmatter.updated ?? item.modifiedAt).toISOString(),
    author: { "@type": "Person", name: item.frontmatter.author ?? siteConfig.author.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    // Verankert die Doku am Paket selbst, statt sie als freistehenden Artikel
    // stehen zu lassen.
    about: { "@type": "SoftwareSourceCode", name: siteConfig.name, version: siteConfig.currentVersion },
    proficiencyLevel: "Beginner",
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    isAccessibleForFree: true,
  });

  return (
    <div className="container-page py-8 lg:py-10">
      <JsonLd data={articleLd} />

      <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)_14rem]">
        {/* Sidebar: Doc-Baum */}
        <aside className="hidden lg:block lg:sticky lg:top-20 lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto">
          <DocSidebar tree={tree} />
        </aside>

        {/* Hauptinhalt */}
        <article className="min-w-0">
          <Breadcrumbs locale={locale} items={crumbs} />

          {!item.frontmatter.hideTitle && (
            <header className="mb-8 border-b border-[var(--color-border)] pb-6">
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                {item.frontmatter.title}
              </h1>
              {item.frontmatter.description && (
                <p className="mt-3 text-balance text-lg text-[var(--color-muted-foreground)]">
                  {item.frontmatter.description}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[var(--color-muted-foreground)]">
                {item.frontmatter.updated && (
                  <span className="inline-flex items-center gap-1">
                    <CalendarClock className="h-3 w-3" />
                    {t("lastUpdated")} {formatDate(item.frontmatter.updated, locale)}
                  </span>
                )}
                {siteConfig.repositories.github && (
                  <Link
                    href={`${siteConfig.repositories.github}/homepage/edit/main/content/docs/${locale}/${slug.join("/")}.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--color-primary)]"
                  >
                    <Pencil className="h-3 w-3" />
                    {t("editPage")}
                  </Link>
                )}
              </div>
            </header>
          )}

          <div className="prose dark:prose-invert">{content}</div>
        </article>

        {/* Table of Contents */}
        <aside className="hidden xl:block xl:sticky xl:top-20 xl:max-h-[calc(100dvh-6rem)] xl:overflow-y-auto">
          {item.frontmatter.toc && <TableOfContents headings={headings} />}
        </aside>
      </div>
    </div>
  );
}
