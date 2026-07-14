import { FileCode2 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LatexExampleProps {
  title?: string;
  filename?: string;
  preview?: ReactNode;
  children: ReactNode;
}

/**
 * LaTeX-Beispiel mit Code-Block (Children-Pattern) und optionaler PDF-Vorschau.
 *
 * Verwendung in MDX. Children sind ein normaler Markdown-Code-Block:
 *
 *   <LatexExample title="Minimaler Brief" filename="brief.tex">
 *
 *   ```latex
 *   \documentclass{scrlttr2}
 *   \begin{document}
 *   ...
 *   \end{document}
 *   ```
 *
 *   </LatexExample>
 *
 * Die Leerzeilen vor und nach dem Code-Block sind wichtig, damit MDX den Block
 * korrekt als Markdown-Code-Fence verarbeitet (Syntax-Highlighting via Shiki).
 *
 * Hinweis: Das Children-Pattern ist mit `next-mdx-remote >= 6.0` kompatibel,
 * weil keine JS-Expression-Props nötig sind (CVE-2026-0969).
 */
export function LatexExample({
  title,
  filename = "example.tex",
  preview,
  children,
}: LatexExampleProps) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]">
      {title && (
        <figcaption className="border-b border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2 text-sm font-medium">
          {title}
        </figcaption>
      )}
      <div className={cn("grid", preview ? "md:grid-cols-2" : "grid-cols-1")}>
        <div className="border-b border-[var(--color-border)] md:border-b-0 md:border-r">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-muted)]/40 px-3 py-1.5 font-mono text-xs text-[var(--color-muted-foreground)]">
            <FileCode2 className="h-3.5 w-3.5" aria-hidden />
            {filename}
          </div>
          <div className="latex-example-body">{children}</div>
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
