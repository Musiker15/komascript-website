# Entwicklung

Befehle, Projektstruktur und die Kurzfassung zum Pflegen der Inhalte. Zurück zur
[README](../README.md).

## Befehle

```bash
# Installation
pnpm install

# Dev-Server (Turbopack, http://localhost:3000)
pnpm dev

# Production-Build
pnpm build && pnpm start

# Content validieren
pnpm validate:content

# Such-Index neu bauen
pnpm build:search
```

Voraussetzungen: **Node ≥ 24**, **pnpm ≥ 11** (Versions-Pin in `package.json`
via `packageManager`-Feld).

Weitere Skripte aus `package.json`: `pnpm lint`, `pnpm type-check`,
`pnpm format:check` und `pnpm test` (Vitest). Die CI
([.github/workflows/ci.yml](../.github/workflows/ci.yml)) prüft bei jedem Push
Content, Lint, Typen, Build und Tests.

## Projektstruktur

```
homepage/
├── config/                # Site-, Navigation-, Footer- & Features-Config
├── content/               # ⭐ Alle Inhalte (Markdown / MDX)
│   ├── pages/{de,en}/     # Statische Seiten (Impressum, FAQ, …)
│   ├── docs/{de,en}/      # Dokumentation (verschachtelt, Sidebar auto)
│   │   ├── classes/index.md   # Klassen-Übersicht
│   │   └── packages/index.md  # Pakete-Übersicht
│   ├── news/{de,en}/      # News / Releases
│   ├── examples/{de,en}/  # LaTeX-Beispiele
│   └── friends/{de,en}/   # Spin-Off-Pakete des KOMA-Script-Ökosystems
├── deploy/                # Server-Konfiguration
│   ├── apache2/*.conf     # vHost mit CSP, Basic-Auth, Reverse-Proxy
│   └── systemd/*.service  # Run-User komascript, Port 3100
├── docs/                  # Doku zum Repository (Entwicklung, Betrieb, Funktionen)
├── public/                # Statische Assets (Favicon, logo.png, og-Image)
├── scripts/               # Validate-Content, Search-Index-Builder
├── src/
│   ├── app/[locale]/      # Next-App-Router (de / en)
│   │   ├── docs/[...slug] # Catch-All für Doku
│   │   ├── friends/       # Übersicht + Detailseiten
│   │   ├── news, examples # gleiche Struktur
│   │   └── [slug]         # Catch-All für Pages
│   ├── components/        # React-Komponenten
│   ├── lib/               # MDX, Content-Loader, SEO-Helper
│   ├── messages/          # UI-Übersetzungen (de.json, en.json)
│   ├── styles/            # globals.css (Tailwind v4)
│   ├── types/             # TypeScript-Typen + Zod-Schemas
│   └── proxy.ts           # Middleware: next-intl + Nonce-CSP + Cookie-Hardening
├── CLAUDE.md              # Architektur-Plan + Kontext für Claude
├── AUTHORING.md           # Anleitung zum Inhalte-Pflegen
└── README.md
```

## Inhalte pflegen (ohne Code-Kenntnisse)

Komplette Anleitung in **[AUTHORING.md](../AUTHORING.md)**. Kurz:

### Neue Seite anlegen

```
content/pages/de/meine-seite.md
content/pages/en/my-page.md
```

```markdown
---
title: "Meine Seite"
description: "Kurze Beschreibung für SEO und Social Media."
order: 10
---

# Meine Seite

Inhalt in Markdown …
```

→ Verfügbar unter `/de/meine-seite` und `/en/my-page`.

### Neuen „Friend" hinzufügen

```
content/friends/de/<paketname>.md
content/friends/en/<paketname>.md
```

Frontmatter-Felder steuern Übersicht und Badges:

```yaml
---
title: "paketname"
description: "Was das Paket tut."
order: 25
category: "spin-off"            # optional, sortiert in den oberen Block
tags: ["deprecated"]            # optional, steuert Badges (s. AUTHORING.md)
---
```

### Navbar erweitern

`config/navigation.config.ts` öffnen, Eintrag zum `primary`-Array hinzufügen,
speichern. Fertig.

### Footer-Spalten ändern

`config/footer.config.ts` öffnen und dort Spalten und Links pflegen. Das Flag `showPrivate`
schaltet den Portfolio-Disclaimer ein/aus.

### Aktuelle Version aktualisieren

`config/site.config.ts` → `currentVersion` und `versionDate` setzen.
