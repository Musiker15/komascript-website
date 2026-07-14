import type { ReactNode } from "react";

interface DetailsProps {
  /** Beschriftung der Zusammenfassung (immer sichtbar). */
  title: string;
  /** Wenn true, ist der Block beim Laden bereits aufgeklappt. */
  open?: boolean;
  children: ReactNode;
}

/**
 * Aufklappbarer Abschnitt für lange Listen (z. B. Changelog-Einträge pro Version).
 * Ersetzt das `details`-Shortcode der ursprünglichen Hugo-Seite.
 */
export function Details({ title, open = false, children }: DetailsProps) {
  return (
    <details
      open={open}
      className="my-4 rounded-md border border-[var(--color-border)] bg-[var(--color-muted)]/40 px-4 py-3"
    >
      <summary className="cursor-pointer font-semibold text-[var(--color-foreground)]">
        {title}
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}
