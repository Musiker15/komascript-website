# KOMA-Script Homepage

> Offizielle Website für **KOMA-Script** — vielseitige LaTeX-Klassen und Pakete.
> Production: [komascript.musiker15.de](https://komascript.musiker15.de)

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Features

- **Next.js 16 + Turbopack** mit App-Router & Server Components
- **TypeScript** strikt typisiert
- **Tailwind CSS v4** (CSS-First-Config) inkl. Typography-Plugin
- **Markdown / MDX-Content** — neue Seiten werden als `.md`-Dateien angelegt
- **Mehrsprachig** (Deutsch primär, Englisch sekundär) via `next-intl`
- **Light/Dark/System-Theme** via `next-themes`
- **Volltextsuche** (Cmd/Ctrl+K) auf Basis eines Build-Time-Index
- **Voll konfigurierbar** über `config/*.ts` — Navbar, Footer, Site-Metadaten
- **SEO-stark** — OpenGraph, JSON-LD, Sitemap, hreflang, robots
- **Apache2 + systemd** ready (Debian)

---

## 🚀 Quick Start

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

Voraussetzungen: **Node ≥ 22**, **pnpm ≥ 9**.

---

## 📁 Projektstruktur

```
homepage/
├── config/                # Site-, Navigation- & Footer-Config
├── content/               # ⭐ Alle Inhalte (Markdown / MDX)
│   ├── pages/{de,en}/     # Statische Seiten
│   ├── docs/{de,en}/      # Dokumentation (verschachtelt)
│   ├── news/{de,en}/      # News / Releases
│   └── examples/{de,en}/  # Beispiele
├── deploy/                # Server-Konfiguration
│   ├── apache2/*.conf
│   └── systemd/*.service
├── public/                # Statische Assets (Favicon, og-Image)
├── scripts/               # Validate-Content, Search-Index-Builder
├── src/
│   ├── app/               # Next-App-Router
│   ├── components/        # React-Komponenten
│   ├── lib/               # MDX, Content-Loader, SEO-Helper
│   ├── messages/          # UI-Übersetzungen
│   ├── styles/            # globals.css (Tailwind v4)
│   └── types/             # TypeScript-Typen + Zod-Schemas
├── CLAUDE.md              # Architektur-Plan + Kontext für Claude
├── AUTHORING.md           # Anleitung zum Inhalte-Pflegen
└── README.md
```

---

## 📝 Inhalte pflegen (ohne Code-Kenntnisse)

Komplette Anleitung in **[AUTHORING.md](./AUTHORING.md)**. Kurz:

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

### Navbar erweitern

`config/navigation.config.ts` öffnen, Eintrag zum `primary`-Array hinzufügen,
speichern. Fertig.

### Footer-Spalten ändern

`config/footer.config.ts` — Spalten und Links pflegen.

### Aktuelle Version aktualisieren

`config/site.config.ts` → `currentVersion` und `versionDate` setzen.

---

## 🚢 Deployment

### Voraussetzungen auf dem Server (einmalig)

```bash
# Dedizierter User
sudo useradd -r -m -s /usr/sbin/nologin komascript

# Verzeichnis
sudo mkdir -p /opt/komascript
sudo chown komascript:komascript /opt/komascript

# Node 22 (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt install nodejs

# pnpm global
sudo npm install -g pnpm

# systemd-Service registrieren
sudo cp deploy/systemd/komascript.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable komascript.service

# Apache vHost
sudo cp deploy/apache2/komascript.de.conf /etc/apache2/sites-available/komascript.musiker15.de.conf
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers ssl http2 deflate expires
sudo a2ensite komascript.musiker15.de.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

### GitHub-Actions

Setze folgende Secrets im Repo:

| Secret | Inhalt |
|---|---|
| `DEPLOY_HOST` | Server-IP oder Hostname |
| `DEPLOY_USER` | SSH-User (mit sudo) |
| `DEPLOY_KEY` | privater SSH-Key |
| `DEPLOY_PORT` | (optional) SSH-Port |

Push auf `main` triggert automatisch das Deployment.

---

## 🌐 URL-Struktur

| URL | Quelle |
|---|---|
| `/` → `/de` | `src/app/[locale]/page.tsx` |
| `/de/docs` | `content/docs/de/**/*.md` (Sidebar auto) |
| `/de/docs/classes/scrartcl` | `content/docs/de/classes/scrartcl.md` |
| `/de/news` | Liste sortiert nach `frontmatter.date` |
| `/de/examples` | `content/examples/de/*.md` |
| `/de/<slug>` | Catch-All: `content/pages/de/<slug>.md` |
| `/sitemap.xml` | auto-generiert |
| `/robots.txt` | auto-generiert |

---

## 📚 Weiterführende Doku

- [CLAUDE.md](./CLAUDE.md) — vollständige Architektur und Roadmap
- [AUTHORING.md](./AUTHORING.md) — Markdown-Anleitung für Content-Pflege
- [deploy/](./deploy/) — Apache2 vHost & systemd-Service

---

## 📄 Lizenz

Code: MIT
Inhalte (Markdown unter `content/`): CC-BY 4.0
KOMA-Script selbst: LPPL 1.3c
