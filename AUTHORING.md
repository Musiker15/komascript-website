# Content Authoring Guide

> **Für Markus & Co-Autoren:** So pflegst Du Inhalte auf der KOMA-Script Website,
> **ohne irgendwelchen Code anfassen zu müssen.**

---

## Inhalte = Markdown-Dateien

Alle Inhalte der Seite stehen in **Markdown-Dateien** unterhalb des Ordners `content/`.
Wenn Du eine neue Markdown-Datei anlegst, taucht sie automatisch als Seite auf.

### Wo welche Inhalte hingehören

| Ordner | Was kommt hier rein | URL-Beispiel |
|---|---|---|
| `content/pages/de/` | Statische Seiten (Impressum, FAQ, Lizenz, …) | `/de/faq` |
| `content/docs/de/` | Dokumentations-Artikel (Sidebar auto) | `/de/docs/installation` |
| `content/news/de/` | News & Releases (sortiert nach Datum) | `/de/news/<slug>` |
| `content/examples/de/` | Code-Beispiele | `/de/examples/<slug>` |

Für die englische Variante: `de` → `en`.

---

## Eine neue Seite anlegen

### Schritt 1 — Datei erstellen

```
content/pages/de/meine-neue-seite.md
content/pages/en/my-new-page.md      ← englisch (optional)
```

Der **Dateiname** wird zur **URL**:
- `meine-neue-seite.md` → `/de/meine-neue-seite`
- `klassen/scrartcl.md` → `/de/docs/klassen/scrartcl` (im `docs`-Ordner)

### Schritt 2 — Frontmatter ausfüllen

Jede Datei beginnt mit einem **Frontmatter**-Block (YAML zwischen `---`):

```markdown
---
title: "Mein Seitentitel"
description: "Kurze Beschreibung für Google und Social Media (max. 320 Zeichen)."
order: 10
---

Hier kommt der Inhalt …
```

### Schritt 3 — Markdown schreiben

```markdown
## Eine Überschrift

Ein Absatz mit **fett** und *kursiv* und `Inline-Code`.

- Liste-Punkt 1
- Liste-Punkt 2

[Ein Link](https://example.com)

![Ein Bild](/images/screenshot.png)
```

### Schritt 4 — Lokale Vorschau

```bash
pnpm dev
```

→ Öffne `http://localhost:3000/de/meine-neue-seite`

### Schritt 5 — Veröffentlichen

```bash
git add content/pages/de/meine-neue-seite.md
git commit -m "Neue Seite: Meine neue Seite"
git push
```

Das Deployment läuft automatisch via GitHub Actions.

---

## Frontmatter-Felder

Vollständige Liste aller Felder, die im Frontmatter möglich sind:

| Feld | Pflicht | Typ | Beispiel |
|---|---|---|---|
| `title` | ✓ | string (max 160) | `"Installation"` |
| `description` | – | string (max 320) | `"Wie installiere ich KOMA-Script?"` |
| `date` | – | YYYY-MM-DD | `2026-05-09` |
| `updated` | – | YYYY-MM-DD | `2026-05-14` |
| `author` | – | string | `"Markus Kohm"` |
| `order` | – | Zahl ≥ 0 (default 999) | `10` |
| `category` | – | string | `"Getting Started"` |
| `tags` | – | Array von Strings | `["latex", "release"]` |
| `draft` | – | true/false (default false) | `true` |
| `toc` | – | true/false (default true) | `false` |
| `hideTitle` | – | true/false (default false) | `true` |
| `image` | – | Pfad | `/images/hero.png` |
| `imageAlt` | – | string | `"Screenshot"` |

### Spezialfelder erklärt

- **`order`** — kleinere Werte erscheinen weiter oben in Listen und Sidebars
- **`draft: true`** — Seite ist nur in `pnpm dev` sichtbar, nicht in Production
- **`toc: false`** — kein "Auf dieser Seite"-Widget rechts
- **`hideTitle: true`** — unterdrückt die automatische `<h1>` aus dem Frontmatter

---

## Erweiterte Markdown-Features (MDX)

Diese **Spezialkomponenten** kannst Du in jedem Markdown-Dokument nutzen:

### Hinweis-Boxen (`<Callout>`)

```mdx
<Callout type="info">
Dies ist ein Informations-Hinweis.
</Callout>

<Callout type="tip">
Dies ist ein nützlicher Tipp.
</Callout>

<Callout type="warning">
Achtung: hier ist etwas wichtig!
</Callout>

<Callout type="danger">
Gefahr! Vorsichtig sein.
</Callout>

<Callout type="note">
Eine neutrale Anmerkung.
</Callout>
```

### LaTeX-Beispiel (Code + Vorschau)

```mdx
<LatexExample
  title="Minimaler Brief"
  filename="brief.tex"
  code={`\\documentclass{scrlttr2}
\\begin{document}
\\begin{letter}{Max Mustermann}
  \\opening{Sehr geehrter Herr Mustermann,}
  Inhalt …
  \\closing{Mit freundlichen Grüßen}
\\end{letter}
\\end{document}`}
/>
```

### Code-Blöcke mit Syntax-Highlighting

```latex
\documentclass[paper=a4,fontsize=11pt]{scrbook}
\usepackage[ngerman]{babel}
```

Unterstützte Sprachen: `latex`, `bash`, `json`, `typescript`, `javascript`, `css`, `yaml`, …

### Tabellen

```markdown
| Spalte 1 | Spalte 2 | Spalte 3 |
|---|---|---|
| Wert | Wert | Wert |
```

### Heading-Anchors

Alle `##` und `###` Überschriften bekommen automatisch eine ID und einen Link.

### Aufgaben-Listen

```markdown
- [x] Erledigt
- [ ] Offen
```

---

## Bilder einbinden

1. Bild ablegen unter `public/images/<thema>/<name>.png`
2. In Markdown referenzieren:

```markdown
![Beschreibung](/images/screenshots/scrlttr2.png)
```

Empfohlen: **WebP** oder **AVIF** für kleinere Dateigrößen.

---

## Navbar und Footer pflegen

### Eintrag in der Navbar hinzufügen

Öffne `config/navigation.config.ts` und füge im `primary`-Array einen Eintrag hinzu:

```ts
{
  label: { de: "Meine Sektion", en: "My Section" },
  href: "/meine-sektion",
}
```

Mit Untermenü:

```ts
{
  label: { de: "Bibliothek", en: "Library" },
  href: "/library",
  children: [
    {
      label: { de: "Einleitung", en: "Intro" },
      href: "/library/intro",
      description: { de: "Kurzbeschreibung", en: "Short description" },
    },
  ],
}
```

### Footer-Spalte ergänzen

`config/footer.config.ts` → `columns`-Array bearbeiten. Identische Syntax.

---

## Aktuelle KOMA-Script-Version aktualisieren

`config/site.config.ts`:

```ts
currentVersion: "3.49.2",
versionDate: "2026-05-09",
```

Erscheint dann automatisch im Hero-Badge und im Footer.

---

## Checks vor dem Commit

```bash
pnpm validate:content    # prüft Frontmatter aller .md-Files
pnpm lint                # ESLint
pnpm type-check          # TypeScript
pnpm build               # Production-Build (für Sicherheit)
```

Wenn `validate:content` schief geht: Fehlermeldung lesen — sie zeigt **genau**, welche
Datei und welches Feld das Problem hat.

---

## Häufige Fragen

### Warum erscheint meine Seite nicht?

Mögliche Ursachen:

1. `draft: true` im Frontmatter → ändere zu `false`
2. Datei in der falschen Sprache → `de/` vs. `en/`
3. Tippfehler im Dateinamen
4. `pnpm validate:content` aufrufen — meldet Fehler

### Wie sortiere ich Doku-Seiten in der Sidebar?

Über `order:` im Frontmatter. Niedrige Werte zuerst.

### Welche Sprache wird angezeigt, wenn die englische Datei fehlt?

Aktuell: 404 auf der englischen Route. Lege einfach `content/pages/en/<slug>.md` an.
(Eine *Fallback*-Logik kann später ergänzt werden — siehe `CLAUDE.md`.)

### Wo finde ich alle bestehenden Slugs?

```bash
ls content/pages/de/
ls content/docs/de/
ls content/news/de/
ls content/examples/de/
```

---

## Glossar

- **Frontmatter** — der YAML-Block am Anfang einer Markdown-Datei (zwischen `---`)
- **Slug** — der URL-Teil (Dateiname ohne `.md`)
- **MDX** — Markdown + JSX-Komponenten (z. B. `<Callout>`)
- **i18n** — Internationalisierung (DE/EN)
