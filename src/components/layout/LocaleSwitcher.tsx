"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/Button";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import { cn } from "@/lib/utils";

const NAMES: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

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
export function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // /de/foo  ->  /en/foo
  function hrefFor(target: Locale): string {
    const segments = pathname.split("/");
    if (segments[1] && SUPPORTED_LOCALES.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    return segments.join("/") || `/${target}`;
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
          {SUPPORTED_LOCALES.map((l) => (
            <DropdownMenu.Item key={l} asChild>
              <a
                href={hrefFor(l)}
                hrefLang={l}
                aria-current={locale === l ? "true" : undefined}
                className={cn(
                  "flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none",
                  "hover:bg-[var(--color-muted)] focus:bg-[var(--color-muted)]",
                  locale === l && "font-medium text-[var(--color-primary)]",
                )}
              >
                <span>{NAMES[l]}</span>
                <span className="font-mono text-xs uppercase opacity-70">{l}</span>
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
