import { FileCode2 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LatexExampleProps {
  title?: string;
  code: string;
  preview?: ReactNode;
  filename?: string;
}

/**
 * Side-by-Side Darstellung: LaTeX-Quellcode (links) und Vorschau (rechts).
 * Wenn keine Vorschau übergeben wird, wird nur der Code-Block angezeigt.
 */
export function LatexExample({ title, code, preview, filename = "example.tex" }: LatexExampleProps) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]">
      {title && (
        <figcaption className="border-b border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2 text-sm font-medium">
          {title}
        </figcaption>
      )}
      <div className={cn("grid", preview ? "md:grid-cols-2" : "grid-cols-1")}>
        <div className="border-b border-[var(--color-border)] md:border-b-0 md:border-r">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-muted)]/40 px-3 py-1.5 text-xs font-mono text-[var(--color-muted-foreground)]">
            <FileCode2 className="h-3.5 w-3.5" aria-hidden />
            {filename}
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
        {preview && (
          <div className="bg-white p-4 dark:bg-zinc-100">
            <div className="mx-auto max-w-md text-zinc-900">{preview}</div>
          </div>
        )}
      </div>
    </figure>
  );
}
