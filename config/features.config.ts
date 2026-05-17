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
      title: { de: "Vollständige Dokumentklassen", en: "Full Document Classes" },
      description: {
        de: "scrartcl, scrreprt und scrbook ersetzen article, report und book mit vollem Funktionsumfang und mehr Konfigurierbarkeit.",
        en: "scrartcl, scrreprt and scrbook replace article, report and book with full feature parity and significantly more configurability.",
      },
    },
    {
      icon: "Mail",
      title: { de: "Briefklasse scrlttr2", en: "Letter Class scrlttr2" },
      description: {
        de: "Hochkonfigurierbare Briefe nach DIN, US, Schweiz, Frankreich und Japan — mit Sprach- und Layoutvarianten.",
        en: "Highly configurable letters following DIN, US, Swiss, French and Japanese conventions.",
      },
    },
    {
      icon: "LayoutTemplate",
      title: { de: "Intelligenter Satzspiegel", en: "Smart Type Area" },
      description: {
        de: "Das typearea-Paket berechnet automatisch optimale Seitenränder nach typografischen Regeln.",
        en: "The typearea package automatically computes optimal margins based on typographic rules.",
      },
    },
    {
      icon: "Layers",
      title: { de: "scrlayer für Kopf-/Fußzeilen", en: "scrlayer for Headers/Footers" },
      description: {
        de: "Vollständig in KOMA-Script integriertes Layer-System für komplexe Kopf- und Fußzeilen — etablierte Alternative zu fancyhdr.",
        en: "Fully integrated layer system for complex headers and footers — an established alternative to fancyhdr.",
      },
    },
    {
      icon: "Languages",
      title: { de: "Mehrsprachig", en: "Multilingual" },
      description: {
        de: "Vollständige Unterstützung für Deutsch, Englisch und viele weitere Sprachen — inkl. babel und polyglossia.",
        en: "Full support for German, English and many other languages — including babel and polyglossia.",
      },
    },
    {
      icon: "Settings",
      title: { de: "Hohe Konfigurierbarkeit", en: "Highly Configurable" },
      description: {
        de: "Hunderte von Optionen über \\KOMAoption{} — vom Schriftgrad bis zum Kapitellayout.",
        en: "Hundreds of options via \\KOMAoption{} — from font size to chapter layout.",
      },
    },
    {
      icon: "FileText",
      title: { de: "Ausführliche Dokumentation", en: "Comprehensive Documentation" },
      description: {
        de: "Über 600 Seiten deutsche und englische Dokumentation, viele Jahre gewachsen und verfeinert.",
        en: "Over 600 pages of German and English documentation, refined over decades.",
      },
    },
    {
      icon: "Award",
      title: { de: "Bewährter Standard", en: "Proven Standard" },
      description: {
        de: "Seit 1992 aktiv entwickelt — heute eine der meistgenutzten LaTeX-Klassen weltweit.",
        en: "Actively developed since 1992 — today one of the most widely used LaTeX class bundles worldwide.",
      },
    },
  ],
} satisfies FeaturesConfig;

export const featuresConfig: FeaturesConfig = FeaturesConfigSchema.parse(config);
