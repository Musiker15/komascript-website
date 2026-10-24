"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/Button";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import { alternatePath } from "@/lib/locale-paths";
import { cn } from "@/lib/utils";

const NAMES: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

/**
 * Per target language: locale-free path without a counterpart there → the
 * nearest existing page. Built on the server by `getSwitcherFallbacks`.
 */
export type LocaleSwitcherFallbacks = Partial<Record<Locale, Record<string, string>>>;

/**
 * Language switcher.
 *
 * The entries are real `<a href>` links, not `router.push`, on purpose:
 *
 * `<html>` and `<body>` live in `app/[locale]/layout.tsx`, so the locale is
 * part of the segment key. A client navigation to the other language does not
 * swap the texts inside the existing nodes, it unmounts the whole tree and
 * mounts it again. That showed as the entire page flashing, the keyboard focus
 * got lost (Radix returns it to a trigger that no longer exists), and the
 * scroll position depended on how tall the tree happened to be at that moment.
 *
 * A real navigation has none of that: the browser keeps the old page until the
 * new one is ready, and a new document starts at the top. Nothing is saved by
 * a client navigation anyway, every text comes fresh from the server.
 *
 * `modal={false}` on the menu: the default `true` pulls in
 * `react-remove-scroll`, whose scroll lock is a runtime `<style>` tag. A
 * two-entry menu needs no scroll lock.
 */
export function LocaleSwitcher({ fallbacks }: { fallbacks: LocaleSwitcherFallbacks }) {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // Not a plain swap of the locale prefix:
  // - `impressum` is `imprint` in English and `datenschutz` is `privacy`.
  //   `alternatePath` resolves that, the same function builds the hreflang
  //   alternates and the sitemap pairs.
  // - Many news posts and the archive pages exist only in German. For those
  //   the server has put the nearest existing page into `fallbacks` (the
  //   section overview, at the latest the start page) instead of a link that
  //   ends on the not-found page.
  function linkFor(target: Locale): { href: string; fallback?: "overview" | "home" } {
    const prefixed = SUPPORTED_LOCALES.includes(pathname.split("/")[1] as Locale);
    if (!prefixed) return { href: `/${target}${pathname === "/" ? "" : pathname}` };
    if (target === locale) return { href: pathname };
    const rest = alternatePath(pathname, target);
    const fallback = fallbacks[target]?.[rest];
    if (fallback === undefined) return { href: `/${target}${rest}` };
    return { href: `/${target}${fallback}`, fallback: fallback === "" ? "home" : "overview" };
  }

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("language")}>
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className="z-50 min-w-[10rem] rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-1 shadow-lg"
        >
          {SUPPORTED_LOCALES.map((l) => {
            const { href, fallback } = linkFor(l);
            return (
              <DropdownMenu.Item key={l} asChild>
                <a
                  href={href}
                  hrefLang={l}
                  aria-current={locale === l ? "true" : undefined}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-sm outline-none",
                    "hover:bg-[var(--color-muted)] focus:bg-[var(--color-muted)]",
                    locale === l && "font-medium text-[var(--color-primary)]",
                  )}
                >
                  <span className="flex flex-col">
                    <span>{NAMES[l]}</span>
                    {fallback && (
                      <span className="text-xs text-[var(--color-muted-foreground)]">
                        {t(fallback === "home" ? "notTranslatedHome" : "notTranslatedOverview")}
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-xs uppercase opacity-70">{l}</span>
                </a>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
