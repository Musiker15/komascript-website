# public/

Dateien in diesem Ordner werden **unverändert** unter `/` ausgeliefert.

## Pflicht-Dateien

| Datei | Status | Hinweis |
|---|---|---|
| `favicon.svg` | ✓ vorhanden | KOMA-K Logo, Quelle für alle Icons |
| `favicon.ico` | ✓ vorhanden | klassisches 32×32 Favicon |
| `apple-touch-icon.png` | ✓ vorhanden | 180×180, ohne Transparenz (iOS maskiert selbst) |
| `android-chrome-192x192.png` | ✓ vorhanden | PWA-Icon klein, aus `app/manifest.ts` referenziert |
| `android-chrome-512x512.png` | ✓ vorhanden | PWA-Icon groß, aus `app/manifest.ts` referenziert |
| `logo.png` | ✓ vorhanden | 120×120, Header und JSON-LD `Organization.logo` |
| `search-index.json` | wird generiert | via `pnpm run build:search` |

Das OpenGraph-Bild liegt **nicht** hier. Es wird unter `/og-default.png` von
`src/app/og-default.png/route.tsx` gerendert und zieht Name, Tagline, Version
und Lizenz aus `config/site.config.ts`, damit es nicht veralten kann. Die
Sprache steuert der Query-Parameter `?lang=de|en`.

`robots.txt`, `sitemap.xml` und `manifest.webmanifest` kommen ebenfalls aus
`src/app/`, nicht aus diesem Ordner.

## Icons neu erzeugen

Nötig nur, wenn sich `favicon.svg` ändert. `sharp` liegt bereits als
transitive Abhängigkeit im Store, deshalb wird nichts zusätzlich installiert.

```bash
node -e "
const sharp = require('./node_modules/.pnpm/sharp@0.35.3_@types+node@25.9.5/node_modules/sharp');
const jobs = [['public/android-chrome-192x192.png',192,true],['public/android-chrome-512x512.png',512,true],['public/apple-touch-icon.png',180,false]];
(async()=>{for(const [out,size,alpha] of jobs){let i=sharp('public/favicon.svg',{density:900}).resize(size,size);if(!alpha)i=i.flatten({background:'#1e40af'});await i.png({compressionLevel:9}).toFile(out);}})();
"
```
