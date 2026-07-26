import { FeaturesConfigSchema, type FeaturesConfig } from "@/types/config";

/**
 * ============================================================================
 * FEATURES-KONFIGURATION (Landing Page)
 * ----------------------------------------------------------------------------
 * Liste der Hauptfunktionen, die im Feature-Grid auf der Startseite gezeigt werden.
 *
 *  • icon:   Name eines Lucide-Icons (siehe https://lucide.dev/icons)
 *  • title:  I18n-Titel
 *  • description: I18n-Beschreibung
 *
 * Reihenfolge im Array = Reihenfolge im Grid.
 * ============================================================================
 */
const config = {
  features: [
    {
      icon: "BookOpen",
      title: { de: "Dokumentklassen", en: "Document classes" },
      description: {
        de: "scrartcl, scrreprt und scrbook treten an die Stelle von article, report und book und lassen sich weiter konfigurieren.",
        en: "scrartcl, scrreprt and scrbook take the place of article, report and book, and offer more configuration options.",
      },
    },
    {
      icon: "Mail",
      title: { de: "Briefklasse scrlttr2", en: "Letter class scrlttr2" },
      description: {
        de: "Briefe nach DIN, US-, Schweizer, französischer und japanischer Konvention, jeweils mit passendem Layout.",
        en: "Letters following DIN, US, Swiss, French and Japanese conventions, each with a matching layout.",
      },
    },
    {
      icon: "LayoutTemplate",
      title: { de: "Satzspiegel", en: "Type area" },
      description: {
        de: "Das Paket typearea berechnet Ränder und Textbereich nach typografischen Gesichtspunkten.",
        en: "The typearea package computes margins and text area based on typographic considerations.",
      },
    },
    {
      icon: "Layers",
      title: { de: "scrlayer für Kopf- und Fußzeilen", en: "scrlayer for headers and footers" },
      description: {
        de: "Ein Ebenen-System für Kopf- und Fußzeilen. Eine Alternative zu fancyhdr, die auch mit anderen Klassen funktioniert.",
        en: "A layer system for headers and footers. An alternative to fancyhdr that also works with other classes.",
      },
    },
    {
      icon: "Languages",
      title: { de: "Mehrsprachig", en: "Multilingual" },
      description: {
        de: "Unterstützung für Deutsch, Englisch und viele weitere Sprachen, inklusive babel und polyglossia.",
        en: "Support for German, English and many other languages, including babel and polyglossia.",
      },
    },
    {
      icon: "Settings",
      title: { de: "Konfigurierbar", en: "Configurable" },
      description: {
        de: "Hunderte von Optionen über \\KOMAoption{}, vom Schriftgrad bis zum Kapitellayout.",
        en: "Hundreds of options via \\KOMAoption{}, from font size to chapter layout.",
      },
    },
    {
      icon: "FileText",
      title: { de: "Dokumentation", en: "Documentation" },
      description: {
        de: "Über 600 Seiten Anleitung auf Deutsch und Englisch, mit vielen Beispielen.",
        en: "Over 600 pages of documentation in German and English, with plenty of examples.",
      },
    },
    {
      icon: "Award",
      title: { de: "Seit 1992", en: "Since 1992" },
      description: {
        de: "Das Projekt begann wenige Monate vor der ersten Veröffentlichung von LaTeX 2ε und wird bis heute gepflegt.",
        en: "The project started a few months before the first release of LaTeX 2ε and is still maintained today.",
      },
    },
  ],
} satisfies FeaturesConfig;

export const featuresConfig: FeaturesConfig = FeaturesConfigSchema.parse(config);
