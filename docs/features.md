# Funktionsumfang

Was die Website kann, welche URL woher kommt und wie Datenschutz und Sicherheit
umgesetzt sind. Zurück zur [README](../README.md).

## ✨ Features

- **Next.js 16 + Turbopack** mit App-Router & Server Components
- **TypeScript** strikt typisiert
- **Tailwind CSS v4** (CSS-First-Config) inkl. Typography-Plugin
- **Markdown / MDX-Content**: neue Seiten werden als `.md`-Dateien angelegt
- **Mehrsprachig** (Deutsch primär, Englisch sekundär) via `next-intl`
- **Light / Dark / System-Theme** via `next-themes`
- **Volltextsuche** (Cmd/Ctrl+K) auf Basis eines Build-Time-Index
- **Voll konfigurierbar** über `config/*.ts`: Navbar, Footer, Site-Metadaten
- **SEO-stark**: OpenGraph, JSON-LD, Sitemap, hreflang, robots
- **Strikt datenschutzkonform**: keine externen Fonts/Skripte, Nonce-basierte CSP mit `'strict-dynamic'` (Mozilla Observatory: **A+**)
- **Apache2 + systemd** ready (Debian, Reverse-Proxy auf Loopback :3100)

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

## 🔒 Datenschutz & Sicherheit

**Mozilla Observatory: A+**

- **Nonce-basierte CSP**: pro Request wird in [src/proxy.ts](../src/proxy.ts)
  ein kryptographisch sicherer Nonce erzeugt und in `script-src 'self'
  'nonce-XXX' 'strict-dynamic'` eingebettet. Kein `'unsafe-inline'` für
  Scripts. `default-src 'none'`, `object-src 'none'`, `img-src 'self' data:
  blob:`, `connect-src 'self'`, `font-src 'self' data:`.
- **Single Source of Truth** für alle übrigen Security-Header in
  [next.config.ts](../next.config.ts). Der Apache vHost setzt keine eigenen,
  sondern entfernt nur die von `security.conf` global gesetzten
  (verhindert Doppelungen). `X-XSS-Protection` (veraltet) wird aktiv
  entfernt, die Schutzfunktion übernimmt die CSP.
- **HSTS preload** (`max-age=63072000; includeSubDomains; preload`),
  Referrer-Policy `strict-origin-when-cross-origin`, Permissions-Policy,
  COOP / CORP / COEP `credentialless`.
- **NEXT_LOCALE Cookie**: `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/`.
- **Lokale Fonts** via `@fontsource-variable/*` (kein Google Fonts).
- **Keine Analytics, kein Tracking, keine Cookies** im rechtlichen Sinn.
- **Pre-Launch**: Der vHost in [deploy/apache2/](../deploy/apache2/) enthält
  eine zusätzliche HTTP-Basic-Auth-Schicht vor jedem Request. Die Live-Site
  ist derzeit ohne diese Schicht öffentlich erreichbar (Stand 24.10.2026).

**Trade-off:** Alle App-Routes werden dynamisch gerendert (kein SSG). Das ist
notwendig, damit jeder Request einen frischen Nonce erhält. Statisch
bleiben nur `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.
