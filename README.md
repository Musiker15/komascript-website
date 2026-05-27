# KOMA-Script Homepage

> Mehrsprachige Webpräsenz rund um die LaTeX-Sammlung **KOMA-Script** und ihr
> Ökosystem („Freunde").
> Production: [komascript.musiker15.de](https://komascript.musiker15.de)

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

> ⚠️ Inhaltlich handelt es sich um ein Portfolio-Projekt von Moritz Kohm — 
> **kein offizieller KOMA-Script-Auftritt** und nicht von dessen Entwicklern betrieben.

---

## ✨ Features

- **Next.js 16 + Turbopack** mit App-Router & Server Components
- **TypeScript** strikt typisiert
- **Tailwind CSS v4** (CSS-First-Config) inkl. Typography-Plugin
- **Markdown / MDX-Content** — neue Seiten werden als `.md`-Dateien angelegt
- **Mehrsprachig** (Deutsch primär, Englisch sekundär) via `next-intl`
- **Light / Dark / System-Theme** via `next-themes`
- **Volltextsuche** (Cmd/Ctrl+K) auf Basis eines Build-Time-Index
- **Voll konfigurierbar** über `config/*.ts` — Navbar, Footer, Site-Metadaten
- **SEO-stark** — OpenGraph, JSON-LD, Sitemap, hreflang, robots
- **Strikt datenschutzkonform** — keine externen Fonts/Skripte, Nonce-basierte CSP mit `'strict-dynamic'` (Mozilla Observatory: **A+**)
- **Apache2 + systemd** ready (Debian, Reverse-Proxy auf Loopback :3100)

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

Voraussetzungen: **Node ≥ 22**, **pnpm ≥ 11** (Versions-Pin in `package.json`
via `packageManager`-Feld).

---

## 📁 Projektstruktur

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
category: "spin-off"            # optional — sortiert in den oberen Block
tags: ["deprecated"]            # optional — steuert Badges (s. AUTHORING.md)
---
```

### Navbar erweitern

`config/navigation.config.ts` öffnen, Eintrag zum `primary`-Array hinzufügen,
speichern. Fertig.

### Footer-Spalten ändern

`config/footer.config.ts` — Spalten und Links pflegen. Das Flag `showPrivate`
schaltet den Portfolio-Disclaimer ein/aus.

### Aktuelle Version aktualisieren

`config/site.config.ts` → `currentVersion` und `versionDate` setzen.

---

## 🚢 Deployment

### Voraussetzungen auf dem Server (einmalig)

```bash
# Dedizierter Run-User (system, no-login)
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
sudo cp deploy/apache2/komascript.de.conf \
  /etc/apache2/sites-available/komascript.musiker15.de.conf
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers ssl http2 deflate expires
sudo a2ensite komascript.musiker15.de.conf
sudo apache2ctl configtest
sudo systemctl reload apache2

# Basic-Auth-Datei (Pre-Launch)
sudo htpasswd -c /etc/apache2/komascript.htpasswd <username>
sudo chown root:www-data /etc/apache2/komascript.htpasswd
sudo chmod 640 /etc/apache2/komascript.htpasswd
```

> SSL-Zertifikat: **eigenes Wildcard-Zertifikat** für `*.musiker15.de`, **kein**
> Let's Encrypt. Die Pfade sind im vHost konfiguriert
> (`/etc/apache2/ssl/fullchain.cer` + `_.musiker15.de_private_key.key`).

### GitHub-Actions

Setze folgende Secrets im Repo:

| Secret | Inhalt |
|---|---|
| `DEPLOY_HOST` | Server-IP oder Hostname |
| `DEPLOY_USER` | SSH-User (mit `sudo` für `chown` & `systemctl restart komascript`) |
| `DEPLOY_KEY` | Privater SSH-Key (key-only Auth, kein Passwort) |
| `DEPLOY_PORT` | (optional) SSH-Port, default 22 |

Push auf `main` triggert automatisch das Deployment. Der Workflow validiert
Content, baut Type-Check / Lint / Build / Search-Index, packt ein Release-
Tarball und führt auf dem Server einen atomischen Symlink-Swap aus mit
Fallback auf die letzten 5 Releases unter `/opt/komascript/releases/`.

---

## 🌐 URL-Struktur

| URL | Quelle |
|---|---|
| `/` → `/de` | `src/app/[locale]/page.tsx` |
| `/de/docs` | Übersicht aus `content/docs/de/**/*.md` (Sidebar auto) |
| `/de/docs/classes` | `content/docs/de/classes/index.md` |
| `/de/docs/classes/scrartcl` | `content/docs/de/classes/scrartcl.md` |
| `/de/docs/packages` | `content/docs/de/packages/index.md` |
| `/de/news` | Liste sortiert nach `frontmatter.date` |
| `/de/examples` | `content/examples/de/*.md` |
| `/de/friends` | Übersicht aus `content/friends/de/*.md` |
| `/de/friends/<paket>` | `content/friends/de/<paket>.md` |
| `/de/<slug>` | Catch-All: `content/pages/de/<slug>.md` |
| `/sitemap.xml` | auto-generiert (`src/app/sitemap.ts`) |
| `/robots.txt` | auto-generiert (`src/app/robots.ts`) |

---

## 🔒 Datenschutz & Sicherheit

**Mozilla Observatory: A+**

- **Nonce-basierte CSP**: pro Request wird in [src/proxy.ts](./src/proxy.ts)
  ein kryptographisch sicherer Nonce erzeugt und in `script-src 'self'
  'nonce-XXX' 'strict-dynamic'` eingebettet. Kein `'unsafe-inline'` für
  Scripts. `default-src 'none'`, `object-src 'none'`, `img-src 'self' data:
  blob:`, `connect-src 'self'`, `font-src 'self' data:`.
- **Single Source of Truth** für alle übrigen Security-Header in
  [next.config.ts](./next.config.ts) — Apache vHost setzt keine eigenen,
  sondern entfernt nur die von `security.conf` global gesetzten
  (verhindert Doppelungen). `X-XSS-Protection` (veraltet) wird aktiv
  entfernt — CSP übernimmt die Schutzfunktion.
- **HSTS preload** (`max-age=63072000; includeSubDomains; preload`),
  Referrer-Policy `strict-origin`, Permissions-Policy, COOP / CORP / COEP
  `credentialless`.
- **NEXT_LOCALE Cookie**: `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/`.
- **Lokale Fonts** via `@fontsource-variable/*` (kein Google Fonts).
- **Keine Analytics, kein Tracking, keine Cookies** im rechtlichen Sinn.
- **Pre-Launch**: zusätzliche HTTP-Basic-Auth-Schicht vor jedem Request.

**Trade-off:** Alle App-Routes werden dynamisch gerendert (kein SSG) —
notwendig, damit jeder Request einen frischen Nonce erhält. Statisch
bleiben nur `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

Details: Abschnitt „Datenschutz-Audit" in [CLAUDE.md](./CLAUDE.md).

---

## 📚 Weiterführende Doku

- [CLAUDE.md](./CLAUDE.md) — vollständige Architektur, Status & Roadmap
- [AUTHORING.md](./AUTHORING.md) — Markdown-Anleitung für Content-Pflege
- [deploy/](./deploy/) — Apache2 vHost & systemd-Service
- [SECURITY.md](./SECURITY.md) — Verantwortlicher Umgang mit Sicherheits­meldungen

---

## 📄 Lizenz

**Copyright © 2026 MSK Scripts — Alle Rechte vorbehalten.**

Dieses Projekt steht unter der **MSK Source Available License (MSK-SAL) v1.0** —
einer proprietären „Source Available"-Lizenz. Der Quellcode ist **einsehbar**,
aber **nicht frei nutzbar**.

> „Source Available" ≠ „Open Source"

Volltext:
- [LICENSE.md](LICENSE.md) (English)
- [LICENSE_DE.md](LICENSE_DE.md) (Deutsch)

Erlaubt (ohne weitere Genehmigung):
- Lesen und Sichten des Quellcodes
- Lokales Ausführen zu rein privaten, nicht-kommerziellen Studienzwecken
- Bug-Reports via GitHub-Issues
- Pull Requests, die dem Projekt zugutekommen

Untersagt (ohne ausdrückliche schriftliche Genehmigung):
Kopieren · abgeleitete Werke · öffentlicher Betrieb · kommerzielle Verwertung ·
Weitergabe · Design-Nachahmung · Reverse Engineering · Entfernen von
Urheberrechtshinweisen — siehe § 3 der Lizenz für die vollständige Liste.

Für kommerzielle Lizenzen, Kooperationen oder Nutzungen außerhalb des
gestatteten Rahmens: `info@msk-scripts.de` (Betreff: `MSK License Request`).