import { SiteConfigSchema, type SiteConfig } from "@/types/config";

/**
 * ============================================================================
 * SITE-KONFIGURATION
 * ----------------------------------------------------------------------------
 * Hier werden globale Metadaten der Seite gepflegt: Name, Beschreibung, URL,
 * Version, Lizenz, Autor, Repository-Links und SEO-Defaults.
 *
 * Diese Datei darf gefahrlos editiert werden — alle Werte werden beim Start
 * automatisch per Zod validiert, Fehler werden im Terminal angezeigt.
 * ============================================================================
 */
const config = {
  name: "KOMA-Script",
  tagline: {
    de: "Vielseitige LaTeX-Klassen und Pakete",
    en: "Versatile LaTeX classes and packages",
  },
  description: {
    // de: "KOMA-Script ist eine Sammlung von LaTeX-Klassen und Paketen, die seit 1992 als moderne, hochkonfigurierbare Alternative zu den Standard-Klassen entwickelt wird.",
    // en: "KOMA-Script is a bundle of versatile LaTeX classes and packages, developed since 1992 as a modern, highly configurable alternative to the standard classes.",
    de: "Reine Portfolio-Übung, vollständig selbst entwickelt. Kein offizieller Auftritt – die Website steht in keinem Zusammenhang mit dem LaTeX-Paket KOMA-Script und wird auch nicht von dessen Entwicklern betrieben.",
    en: "This is purely a portfolio project, developed entirely on my own. This is not an official site—the website is in no way affiliated with the LaTeX package KOMA-Script and is not operated by its developers.",
  },

  // Öffentliche Basis-URL (ohne trailing Slash)
  url: "https://komascript.musiker15.de",

  // OpenGraph-Default-Image (1200×630 PNG, liegt in /public)
  ogImage: "/og-default.png",

  locales: ["de", "en"],
  defaultLocale: "de",

  author: {
    name: "Markus Kohm",
    mastodon: "https://mastodontech.de/@koma",
    email: "komascript@gmx.info",
  },

  // Aktuelle KOMA-Script-Version (wird auch im Footer & VersionBadge angezeigt)
  currentVersion: "3.49.2",
  versionDate: "2026-05-09",

  license: "LPPL 1.3c",

  repositories: {
    sourceforge: "https://sourceforge.net/projects/koma-script/",
    codeberg: "https://codeberg.org/komascript",
    ctan: "https://ctan.org/pkg/koma-script",
  },

  // Wenn `true`: zeigt einen kleinen Banner mit der aktuellen Version
  showVersionBanner: true,
} satisfies SiteConfig;

export const siteConfig: SiteConfig = SiteConfigSchema.parse(config);
