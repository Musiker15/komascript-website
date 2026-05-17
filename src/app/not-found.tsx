import Link from "next/link";

/**
 * Root not-found für Pfade außerhalb von /[locale]/…
 * Leitet den Nutzer auf die deutsche Startseite.
 */
export default function NotFound() {
  return (
    <html lang="de">
      <body style={{ display: "flex", minHeight: "100dvh", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", margin: 0, padding: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>404 — Seite nicht gefunden</h1>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            Die angeforderte Seite existiert nicht.
          </p>
          <Link
            href="/de"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              background: "#1e40af",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.375rem",
            }}
          >
            Zur Startseite
          </Link>
        </div>
      </body>
    </html>
  );
}
