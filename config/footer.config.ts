import { FooterConfigSchema, type FooterConfig } from "@/types/config";

/**
 * ============================================================================
 * FOOTER-KONFIGURATION
 * ----------------------------------------------------------------------------
 * Pflege der Footer-Spalten, Social-Links und Copyright-Hinweis.
 *
 * STRUKTUR
 *   columns:    Array von Spalten (responsive 1→2→4)
 *     title:    Spaltenüberschrift (I18n)
 *     links:    Liste von Links innerhalb der Spalte
 *
 *   social:     Icon-Leiste (Mastodon, GitHub, ...)
 *     platform: "mastodon" | "github" | "twitter" | "linkedin" | "youtube" | "sourceforge"
 *     href:     vollständige URL
 *
 *   copyright:  {year} wird automatisch ersetzt
 *   showVersion: zeigt aktuelle KOMA-Script-Version unten rechts
 * ============================================================================
 */
const config = {
  columns: [
    {
      title: { de: "Projekt", en: "Project" },
      links: [
        { label: { de: "Über KOMA-Script", en: "About" }, href: "/about" },
        { label: { de: "Funktionen", en: "Features" }, href: "/features" },
        { label: { de: "Lizenz", en: "License" }, href: "/license" },
      ],
    },
    {
      title: { de: "Ressourcen", en: "Resources" },
      links: [
        { label: { de: "Dokumentation", en: "Documentation" }, href: "/docs" },
        { label: { de: "Beispiele", en: "Examples" }, href: "/examples" },
        { label: { de: "FAQ", en: "FAQ" }, href: "/faq" },
        { label: { de: "News", en: "News" }, href: "/news" },
      ],
    },
    {
      title: { de: "Community", en: "Community" },
      links: [
        { label: "CTAN", href: "https://ctan.org/pkg/koma-script", external: true },
        { label: "SourceForge", href: "https://sourceforge.net/projects/koma-script/", external: true },
        { label: "Codeberg", href: "https://codeberg.org/komascript", external: true },
        { label: "Mastodon", href: "https://mastodontech.de/@koma", external: true },
      ],
    },
    {
      title: { de: "Rechtliches", en: "Legal" },
      links: [
        { label: { de: "Impressum", en: "Imprint" }, href: "/impressum" },
        { label: { de: "Datenschutz", en: "Privacy" }, href: "/datenschutz" },
        { label: { de: "Lizenz", en: "License" }, href: "/license" },
      ],
    },
  ],

  social: [
    { platform: "mastodon", href: "https://mastodontech.de/@koma" },
    { platform: "codeberg", href: "https://codeberg.org/komascript" },
    { platform: "sourceforge", href: "https://sourceforge.net/projects/koma-script/" },
  ],

  copyright: {
    de: "© {year} Markus Kohm. KOMA-Script ist unter der LPPL 1.3c lizenziert.",
    en: "© {year} Markus Kohm. KOMA-Script is licensed under the LPPL 1.3c.",
  },

  showVersion: true,
} satisfies FooterConfig;

export const footerConfig: FooterConfig = FooterConfigSchema.parse(config);
