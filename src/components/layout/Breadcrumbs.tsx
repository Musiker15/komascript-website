import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbLd } from "@/lib/seo";
import type { Locale } from "@/types/config";

export interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
  locale: Locale;
}

/**
 * Die strukturierten Daten hängen hier an der Komponente, nicht an den
 * einzelnen Seiten. Dadurch bekommt jede Seite, die Breadcrumbs anzeigt,
 * automatisch das passende BreadcrumbList-Schema, und beides kann nicht
 * auseinanderlaufen.
 */
export async function Breadcrumbs({ items, locale }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <JsonLd data={buildBreadcrumbLd(locale, items)} />
      <ol className="flex flex-wrap items-center gap-1 text-[var(--color-muted-foreground)]">
        <li>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center transition-colors hover:text-[var(--color-foreground)]"
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-[var(--color-foreground)]">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[var(--color-foreground)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
