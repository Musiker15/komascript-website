import { SUPPORTED_LOCALES, type Locale } from "@/types/config";
import type { ContentSection } from "@/types/content";

/**
 * Pages whose slug differs between the languages.
 *
 * Without this table the path of the other language would be derived
 * mechanically: `/de/impressum` would become `/en/impressum`, and that page
 * does not exist (it is `/en/imprint`). Every other page has the same slug in
 * both languages and needs no entry here.
 *
 * Pure module without `node:fs`, so the language switcher (a client
 * component) can use it as well as the metadata, the sitemap and the footer.
 * One table for all of them keeps the switcher, the hreflang alternates and
 * the sitemap pointing at the same pages.
 */
const LOCALIZED_PATHS: ReadonlyArray<Readonly<Record<Locale, string>>> = [
  { de: "/impressum", en: "/imprint" },
  { de: "/datenschutz", en: "/privacy" },
];

const LOOKUP = new Map<string, Readonly<Record<Locale, string>>>();
for (const entry of LOCALIZED_PATHS) {
  for (const locale of SUPPORTED_LOCALES) LOOKUP.set(entry[locale], entry);
}

// The lookahead keeps `/denkmal` from losing its `/de`.
const LOCALE_PREFIX = new RegExp(`^/(${SUPPORTED_LOCALES.join("|")})(?=/|$)`);

/** Exported for the unit test. */
export const localizedPathTable = LOCALIZED_PATHS;

/**
 * The locale-free path of a page in the target language.
 *
 * Accepts a path with or without locale prefix:
 * `/de/impressum` + "en" → `/imprint`, `/de/docs/koma-script` + "en" →
 * `/docs/koma-script`, `/de` + "en" → `""` (the start page).
 */
export function alternatePath(path: string, target: Locale): string {
  const rest = path.replace(LOCALE_PREFIX, "");
  return LOOKUP.get(rest)?.[target] ?? rest;
}

/** Full path of a page in the target language: `/de/impressum` + "en" → `/en/imprint`. */
export function localizedPath(path: string, target: Locale): string {
  return `/${target}${alternatePath(path, target)}`;
}

/**
 * The slug of the same content in the target language.
 * `("pages", ["impressum"], "en")` → `["imprint"]`.
 */
export function localizedSlug(section: ContentSection, slug: string[], target: Locale): string[] {
  const prefix = section === "pages" ? "" : `/${section}`;
  const mapped = alternatePath(`${prefix}/${slug.join("/")}`, target);
  return mapped.slice(prefix.length + 1).split("/");
}
