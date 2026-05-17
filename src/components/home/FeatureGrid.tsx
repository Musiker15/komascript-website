import { useTranslations } from "next-intl";
import * as Icons from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { featuresConfig } from "@/config/features.config";
import type { Locale } from "@/types/config";

interface Props {
  locale: Locale;
}

export function FeatureGrid({ locale }: Props) {
  const t = useTranslations("home");

  return (
    <section className="container-page py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("featuresTitle")}</h2>
        <p className="mt-3 text-balance text-[var(--color-muted-foreground)] md:text-lg">
          {t("featuresSubtitle")}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuresConfig.features.map((feature) => {
          const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
            feature.icon
          ];
          return (
            <Card
              key={feature.title.de}
              className="group h-full border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)]/40"
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-primary-foreground)]">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </div>
                <CardTitle className="text-base">{feature.title[locale]}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>{feature.description[locale]}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
