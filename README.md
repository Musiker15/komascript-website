# KOMA-Script Homepage

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org) [![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

Mehrsprachige Webpräsenz rund um die LaTeX-Sammlung **KOMA-Script** und ihr
Ökosystem („Freunde").

Die Seite läuft unter [komascript.musiker15.de](https://komascript.musiker15.de)
und bündelt Beschreibung, Dokumentation, Beispiele, News und die Spin-Off-Pakete
an einem Ort, auf Deutsch und Englisch. Gebaut ist sie mit Next.js 16, alle
Inhalte liegen als Markdown unter `content/`, Navbar, Footer und Metadaten werden
über `config/*.ts` gepflegt. So lassen sich neue Seiten ohne Code-Kenntnisse
anlegen.

> ⚠️ Inhaltlich handelt es sich um ein Portfolio-Projekt von Moritz Kohm.
> Es ist **kein offizieller KOMA-Script-Auftritt** und wird nicht von dessen
> Entwicklern betrieben.

## 🚀 Schnellstart

Voraussetzungen: **Node ≥ 24** und **pnpm ≥ 11**.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## 📚 Dokumentation

| Thema | Inhalt |
|---|---|
| [Entwicklung](docs/development.md) | Alle Befehle, Projektstruktur, Kurzfassung zum Pflegen der Inhalte |
| [Inhalte pflegen](AUTHORING.md) | Markdown-Anleitung für Content-Pflege |
| [Funktionsumfang](docs/features.md) | Features, URL-Struktur, Datenschutz & Sicherheit |
| [Betrieb und Deployment](docs/deployment.md) | Server-Einrichtung, GitHub Actions, Secrets |
| [deploy/](deploy/) | Apache2 vHost & systemd-Service |
| [Lizenz im Überblick](docs/license.md) | Was die MSK-SAL erlaubt und was nicht |
| [SECURITY.md](SECURITY.md) | Verantwortlicher Umgang mit Sicherheits­meldungen |

## 💬 Hilfe und Mitmachen

Fehler und Wünsche bitte als
[GitHub-Issue](https://github.com/Musiker15/komascript-website/issues) melden,
Vorlagen für Bug-Reports und Feature-Wünsche sind hinterlegt. Pull Requests, die
dem Projekt zugutekommen, sind willkommen. Sicherheitslücken bitte nicht
öffentlich melden, sondern wie in [SECURITY.md](SECURITY.md) beschrieben.

## 📄 Lizenz

**Copyright © 2026 MSK Scripts. Alle Rechte vorbehalten.**

Der Code steht unter der **MSK Source Available License (MSK-SAL) v1.1**: einsehbar,
aber nicht frei nutzbar („Source Available" ≠ „Open Source"). Die Inhalte rund um
KOMA-Script stammen von Markus Kohm beziehungsweise stehen unter der LPPL und
bleiben bei ihren Rechteinhabern. Volltext: [LICENSE.md](LICENSE.md) (English),
[LICENSE_DE.md](LICENSE_DE.md) (Deutsch), Zusammenfassung in
[docs/license.md](docs/license.md).
