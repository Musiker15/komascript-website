import Link from "next/link";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site.config";
import { formatDate } from "@/lib/utils";
import type { Locale } from "@/types/config";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      {/* Background-Decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, var(--color-primary)/8%, transparent 70%)",
        }}
      />

      <div className="container-page grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:py-28">
        {/* Text-Spalte */}
        <div>
          <Badge variant="outline" className="mb-5 gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-success)]" />
            {t("heroBadge")}: v{siteConfig.currentVersion} ·{" "}
            {formatDate(siteConfig.versionDate, locale, { month: "short", day: "numeric", year: "numeric" })}
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-balance text-xl text-[var(--color-muted-foreground)] md:text-2xl">
            {siteConfig.tagline[locale]}
          </p>
          <p className="mt-6 max-w-xl text-pretty text-base text-[var(--color-muted-foreground)] md:text-lg">
            {siteConfig.description[locale]}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href={`/${locale}/download`}>
                <Download className="h-4 w-4" />
                {t("heroCtaPrimary")}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/docs`}>
                <BookOpen className="h-4 w-4" />
                {t("heroCtaSecondary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Code-Showcase */}
        <div className="relative">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] shadow-xl">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-[var(--color-muted-foreground)]">
                thesis.tex
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-[var(--color-foreground)]">
              <code>
                <span className="text-[var(--color-muted-foreground)]">% Eine moderne Diplomarbeit</span>
                {"\n"}
                <span className="text-blue-500">\documentclass</span>
                <span className="text-amber-600">[</span>
                <span>paper=a4,fontsize=11pt,DIV=12</span>
                <span className="text-amber-600">]</span>
                <span className="text-amber-600">{"{"}</span>
                <span className="text-emerald-500">scrbook</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n"}
                <span className="text-blue-500">\usepackage</span>
                <span className="text-amber-600">[ngerman]{"{"}</span>
                <span>babel</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n"}
                <span className="text-blue-500">\usepackage</span>
                <span className="text-amber-600">{"{"}</span>
                <span>microtype</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-500">\KOMAoption</span>
                <span className="text-amber-600">{"{"}</span>
                <span>captions</span>
                <span className="text-amber-600">}{"{"}</span>
                <span>tableheading</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-500">\begin</span>
                <span className="text-amber-600">{"{"}</span>
                <span className="text-emerald-500">document</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n"}
                <span className="text-blue-500">  \chapter</span>
                <span className="text-amber-600">{"{"}</span>
                <span>Einleitung</span>
                <span className="text-amber-600">{"}"}</span>
                {"\n"}
                <span>  Willkommen bei KOMA-Script …</span>
                {"\n"}
                <span className="text-blue-500">\end</span>
                <span className="text-amber-600">{"{"}</span>
                <span className="text-emerald-500">document</span>
                <span className="text-amber-600">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
