import { NavigationConfigSchema, type NavigationConfig } from "@/types/config";

/**
 * ============================================================================
 * NAVIGATIONS-KONFIGURATION
 * ----------------------------------------------------------------------------
 * Hier werden alle Einträge der Hauptnavigation (Navbar) gepflegt.
 *
 *  • `primary`   — Hauptmenü (Desktop + Mobile)
 *  • `actions`   — Rechte Icon-Leiste (Suche, Sprache, Theme, externe Links)
 *
 * STRUKTUR EINES NAV-ITEMS
 *   label:       I18n-Beschriftung — entweder String oder { de, en }
 *   href:        Ziel-URL (relativ ohne Locale-Prefix, z.B. "/docs")
 *   highlight?:  true → wird als CTA-Button hervorgehoben
 *   external?:   true → öffnet in neuem Tab + rel=noopener
 *   children?:   Untermenü (für Dropdowns)
 *   description?:Optionaler Untertitel im Dropdown
 *
 * Reihenfolge im Array = Reihenfolge in der Navbar.
 * ============================================================================
 */
const config = {
  primary: [
    {
      label: { de: "Start", en: "Home" },
      href: "/",
    },
    {
      label: { de: "Dokumentation", en: "Documentation" },
      href: "/docs",
      children: [
        {
          label: { de: "Installation", en: "Installation" },
          href: "/docs/installation",
          description: {
            de: "KOMA-Script in TeX Live / MiKTeX einrichten",
            en: "Set up KOMA-Script in TeX Live / MiKTeX",
          },
        },
        {
          label: { de: "Erste Schritte", en: "Getting Started" },
          href: "/docs/getting-started",
          description: {
            de: "Dein erstes Dokument mit KOMA-Script",
            en: "Your first document with KOMA-Script",
          },
        },
        {
          label: { de: "Dokumentklassen", en: "Document Classes" },
          href: "/docs/classes/scrartcl",
          description: {
            de: "scrartcl, scrreprt, scrbook, scrlttr2",
            en: "scrartcl, scrreprt, scrbook, scrlttr2",
          },
        },
        {
          label: { de: "Pakete", en: "Packages" },
          href: "/docs/packages/typearea",
          description: {
            de: "typearea, scrbase, tocbasic & mehr",
            en: "typearea, scrbase, tocbasic & more",
          },
        },
      ],
    },
    {
      label: { de: "Funktionen", en: "Features" },
      href: "/features",
    },
    {
      label: { de: "Beispiele", en: "Examples" },
      href: "/examples",
    },
    {
      label: { de: "Freunde", en: "Friends" },
      href: "/friends",
    },
    {
      label: { de: "News", en: "News" },
      href: "/news",
    },
    {
      label: { de: "Community", en: "Community" },
      href: "/community",
    },
    {
      label: { de: "Download", en: "Download" },
      href: "/download",
      highlight: true,
    },
  ],

  actions: [
    { type: "search", label: { de: "Suchen", en: "Search" } },
    { type: "locale" },
    { type: "theme" },
    {
      type: "link",
      label: "GitHub",
      href: "https://github.com/komascript",
      icon: "github",
      external: true,
      "aria-label": "KOMA-Script auf GitHub",
    },
  ],
} satisfies NavigationConfig;

export const navigationConfig: NavigationConfig = NavigationConfigSchema.parse(config);
