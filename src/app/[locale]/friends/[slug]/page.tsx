import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAvailableLocales, getContent, listContent } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";
import { buildArticleMetadata, buildJsonLd } from "@/lib/seo";
import { siteConfig } from "@/config/site.config";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

export function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const slug of listContent("friends", locale)) {
      const first = slug[0];
      if (first && first !== "index") params.push({ locale, slug: first });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getContent("friends", locale, [slug]);
  if (!item) return {};
  return buildArticleMetadata(item.frontmatter, locale, item.url, getAvailableLocales("friends", [slug]));
}

export default async function FriendPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("friends");
  const item = getContent("friends", locale, [slug]);
  if (!item) notFound();

  const content = await renderMDX(item.content);

  // Jede Friends-Seite beschreibt ein eigenständiges LaTeX-Paket, deshalb
  // SoftwareSourceCode statt Article. `isBasedOn` hält die Herkunft der
  // Spin-Offs aus KOMA-Script fest.
  const ld = buildJsonLd({
    "@type": "SoftwareSourceCode",
    name: item.frontmatter.title,
    description: item.frontmatter.description,
    url: `${siteConfig.url}${item.url}`,
    programmingLanguage: { "@type": "ComputerLanguage", name: "TeX" },
    runtimePlatform: "LaTeX",
    codeRepository: `https://ctan.org/pkg/${slug}`,
    ...(item.frontmatter.category === "spin-off"
      ? { isBasedOn: { "@type": "SoftwareSourceCode", name: siteConfig.name, url: siteConfig.url } }
      : {}),
    author: { "@type": "Person", name: item.frontmatter.author ?? "Markus Kohm" },
    dateModified: (item.frontmatter.updated ?? item.modifiedAt).toISOString(),
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    isAccessibleForFree: true,
  });

  return (
    <article className="container-page max-w-4xl py-10">
      <JsonLd data={ld} />
      <Breadcrumbs
        locale={locale}
        items={[{ label: t("title"), href: `/${locale}/friends` }, { label: item.frontmatter.title }]}
      />
      <header className="mb-8 border-b border-[var(--color-border)] pb-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {item.frontmatter.title}
        </h1>
        {item.frontmatter.description && (
          <p className="mt-3 text-balance text-lg text-[var(--color-muted-foreground)]">
            {item.frontmatter.description}
          </p>
        )}
      </header>
      <div className="prose dark:prose-invert">{content}</div>
    </article>
  );
}
