import { SiteConfigSchema, type SiteConfig } from "@/types/config";

/**
 * ============================================================================
 * SITE-KONFIGURATION
 * ----------------------------------------------------------------------------
 * Hier werden globale Metadaten der Seite gepflegt: Name, Beschreibung, URL,
 * Version, Lizenz, Autor, Repository-Links und SEO-Defaults.
 *
 * Diese Datei darf gefahrlos editiert werden, alle Werte werden beim Start
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
    de: "Hier geht es um die KOMA-Script-LaTeX-Sammlung und andere Pakete des KOMA-Script-Autors, die in irgendeiner Weise mit KOMA-Script in Verbindung stehen oder davon abgeleitet sind. KOMA-Script selbst wird derzeit auf SourceForge gehostet.",
    en: "This site is about the KOMA-Script LaTeX bundle and other packages by the KOMA-Script author that are in some way related to or derived from KOMA-Script. KOMA-Script itself is currently hosted on SourceForge.",
  },

  // Öffentliche Basis-URL (ohne trailing Slash)
  url: "https://komascript.musiker15.de",

  // OpenGraph-Default-Image (1200×630 PNG, liegt in /public)
  ogImage: "/og-default.png",

  locales: ["de", "en"],
  defaultLocale: "de",

  // Aktuelle KOMA-Script-Version (wird auch im Footer & VersionBadge angezeigt)
  currentVersion: "3.49.2",
  versionDate: "2026-02-02",

  license: "LPPL 1.3c",

  // Autor dieser Website (≠ Maintainer des LaTeX-Pakets, siehe Impressum)
  author: {
    name: "Moritz Kohm",
  },

  repositories: {
    sourceforge: "https://sourceforge.net/projects/koma-script/",
    codeberg: "https://codeberg.org/komascript",
    ctan: "https://ctan.org/pkg/koma-script",
  },

  // Wenn `true`: zeigt einen kleinen Banner mit der aktuellen Version
  showVersionBanner: true,
} satisfies SiteConfig;

export const siteConfig: SiteConfig = SiteConfigSchema.parse(config);
