import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { listAllContentItems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/types/config";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "examples" });
  return buildMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
    path: `/${locale}/examples`,
  });
}

export default async function ExamplesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("examples");
  const items = listAllContentItems("examples", locale);

  return (
    <div className="container-page max-w-5xl py-10">
      <Breadcrumbs locale={locale} items={[{ label: t("title") }]} />
      <header className="mb-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h1>
        <p className="mt-3 text-balance text-lg text-[var(--color-muted-foreground)]">
          {t("subtitle")}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.url} href={item.url} className="group">
            <Card className="h-full transition-colors hover:border-[var(--color-primary)]/40">
              <CardHeader>
                <CardTitle className="text-lg">{item.frontmatter.title}</CardTitle>
                {item.frontmatter.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.frontmatter.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              {item.frontmatter.description && (
                <CardContent className="pt-0">
                  <CardDescription>{item.frontmatter.description}</CardDescription>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
