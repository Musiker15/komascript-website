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
  const t = await getTranslations({ locale, namespace: "friends" });
  return buildMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
    path: `/${locale}/friends`,
  });
}

export default async function FriendsIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("friends");
  const items = listAllContentItems("friends", locale).filter(
    (item) => item.slug.join("/") !== "index",
  );

  const spinOffs = items.filter((i) => i.frontmatter.category === "spin-off");
  const others = items.filter((i) => i.frontmatter.category !== "spin-off");

  return (
    <div className="container-page max-w-5xl py-10">
      <Breadcrumbs locale={locale} items={[{ label: t("title") }]} />
      <header className="mb-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h1>
        <p className="mt-3 text-balance text-lg text-[var(--color-muted-foreground)]">
          {t("subtitle")}
        </p>
      </header>

      {spinOffs.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">{t("spinOffs")}</h2>
          <p className="mb-5 text-sm text-[var(--color-muted-foreground)]">{t("spinOffsDescription")}</p>
          <FriendsGrid items={spinOffs} tFlags={t} />
        </section>
      )}

      {others.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">{t("otherFriends")}</h2>
          <p className="mb-5 text-sm text-[var(--color-muted-foreground)]">{t("otherFriendsDescription")}</p>
          <FriendsGrid items={others} tFlags={t} />
        </section>
      )}
    </div>
  );
}

function FriendsGrid({
  items,
  tFlags,
}: {
  items: ReturnType<typeof listAllContentItems>;
  tFlags: (key: "deprecated" | "noMaintainer" | "experimental") => string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const tags = item.frontmatter.tags;
        return (
          <Link key={item.url} href={item.url} className="group">
            <Card className="h-full transition-colors hover:border-[var(--color-primary)]/40">
              <CardHeader>
                <CardTitle className="font-mono text-base">
                  {item.frontmatter.title}
                </CardTitle>
                <div className="mt-2 flex flex-wrap gap-1">
                  {tags.includes("deprecated") && (
                    <Badge variant="outline" className="text-[10px]">{tFlags("deprecated")}</Badge>
                  )}
                  {tags.includes("no-maintainer") && (
                    <Badge variant="outline" className="text-[10px]">{tFlags("noMaintainer")}</Badge>
                  )}
                  {tags.includes("experimental") && (
                    <Badge variant="outline" className="text-[10px]">{tFlags("experimental")}</Badge>
                  )}
                </div>
              </CardHeader>
              {item.frontmatter.description && (
                <CardContent className="pt-0">
                  <CardDescription>{item.frontmatter.description}</CardDescription>
                </CardContent>
              )}
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
