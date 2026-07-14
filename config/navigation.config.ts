import { NavigationConfigSchema, type NavigationConfig } from "@/types/config";

/**
 * ============================================================================
 * NAVIGATIONS-KONFIGURATION
 * ----------------------------------------------------------------------------
 * Hier werden alle Einträge der Hauptnavigation (Navbar) gepflegt.
 *
 *  • `primary`   : Hauptmenü (Desktop + Mobile)
 *  • `actions`   : Rechte Icon-Leiste (Suche, Sprache, Theme, externe Links)
 *
 * STRUKTUR EINES NAV-ITEMS
 *   label:       I18n-Beschriftung, entweder String oder { de, en }
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
          label: { de: "Die KOMA-Script-Sammlung", en: "The KOMA-Script bundle" },
          href: "/docs/koma-script",
          description: {
            de: "Alle Klassen und Pakete der Sammlung im Überblick",
            en: "Overview of all classes and packages in the bundle",
          },
        },
        {
          label: { de: "FAQ", en: "FAQ" },
          href: "/faq",
          description: {
            de: "Häufige Fragen und Antworten",
            en: "Frequently asked questions",
          },
        },
        {
          label: { de: "Alte Versionen", en: "Old Versions" },
          href: "/docs/koma-script/releases",
          description: {
            de: "Wo sich alte KOMA-Script-Versionen finden lassen",
            en: "Where to find old KOMA-Script releases",
          },
        },
        {
          label: { de: "Archiv", en: "Archive" },
          href: "/docs/koma-script/archive",
          description: {
            de: "Ältere Materialien aus dem Dokumentationsprojekt",
            en: "Older material from the documentation project",
          },
        },
        {
          label: { de: "Wer ist KOMA?", en: "Who is KOMA?" },
          href: "/docs/koma",
          description: {
            de: "Über den Autor, Danksagungen, Wunschliste",
            en: "About the author, thank yous, wishlist",
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
