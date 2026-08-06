import { headers } from "next/headers";

/**
 * Rendert einen JSON-LD-Block mit dem CSP-Nonce des laufenden Requests.
 *
 * Die Seite läuft unter einer strikten Nonce-CSP ohne 'unsafe-inline'
 * (siehe src/proxy.ts). Jedes inline-<script> braucht deshalb das Nonce,
 * auch ein nicht ausführbares mit type="application/ld+json". Ohne Nonce
 * meldet der Browser bei jedem Seitenaufruf eine CSP-Violation.
 *
 * suppressHydrationWarning ist nötig, weil Browser das nonce-Attribut nach
 * dem Parsen aus dem DOM entfernen (HTML-Spec, verhindert das Ausspähen des
 * Nonce über CSS-Attribut-Selektoren). Der Client liest also nonce="",
 * während der Server einen Wert gerendert hat. Dieselbe Begründung wie im
 * Root-Layout.
 */
export async function JsonLd({ data }: { data: string }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
