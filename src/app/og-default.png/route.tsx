import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";

/**
 * OpenGraph-Standardbild, serverseitig gerendert.
 *
 * Warum eine Route und keine Datei in /public: Bis hierher lag dort nur eine
 * og-default.svg, während `siteConfig.ogImage` auf og-default.png zeigte. Die
 * Vorschaukarte war damit überall kaputt, und SVG hätte auch nicht geholfen,
 * denn Facebook, LinkedIn, Slack, WhatsApp und Mastodon rendern kein SVG.
 *
 * Version, Tagline und Lizenz kommen aus site.config.ts. Damit kann das Bild
 * nicht mehr auseinanderlaufen, wenn dort eine neue Version eingetragen wird.
 * Es werden keine Schriftdateien nachgeladen, next/og bringt seine eigene
 * mit, und es geht kein Request an einen fremden Host.
 */
/**
 * Bewusst dynamisch: `force-static` würde die Route einmal ohne Query-String
 * vorrendern, `?lang=en` liefe dann still ins Leere und englische Seiten
 * bekämen die deutsche Tagline. Der Cache-Header unten übernimmt die
 * Auslieferung, aufgerufen wird das Bild ohnehin nur von Crawlern und
 * Vorschau-Scrapern.
 */
export const dynamic = "force-dynamic";

const SIZE = { width: 1200, height: 630 };
const CACHE = "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800";

export function GET(request: Request) {
  const param = new URL(request.url).searchParams.get("lang");
  const locale: Locale = SUPPORTED_LOCALES.includes(param as Locale)
    ? (param as Locale)
    : siteConfig.defaultLocale;

  const host = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "96px",
            height: "96px",
            borderRadius: "18px",
            background: "linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          K
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ marginTop: "16px", fontSize: "36px", color: "#cbd5e1" }}>
            {siteConfig.tagline[locale]}
          </div>
        </div>

        <div style={{ fontSize: "22px", color: "#94a3b8" }}>
          {`${host}  ·  v${siteConfig.currentVersion}  ·  ${siteConfig.license}`}
        </div>
      </div>
    ),
    { ...SIZE, headers: { "Cache-Control": CACHE } },
  );
}
