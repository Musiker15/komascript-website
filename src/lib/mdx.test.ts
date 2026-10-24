import { describe, expect, it } from "vitest";
import { renderMDX } from "./mdx";

/**
 * The contract this file guards is one sentence: **the `id` on the heading
 * and the slug in the table of contents are the same string.**
 *
 * If they drift apart, a click in the contents list changes the address and
 * the page stays put. That was the case whenever a heading contained an
 * umlaut or an HTML entity: `rehype-slug` assigned the id, a second function
 * built the contents slugs from the raw Markdown, and the two disagreed.
 *
 * That is why the first test checks equality rather than single slugs. It
 * still holds if the slug rule changes later.
 */

/** Reads all heading `id` values from rendered HTML, in document order. */
function idsInHtml(html: string): string[] {
  return [...html.matchAll(/<h[1-6][^>]*\sid="([^"]+)"/g)].map((m) => m[1]!);
}

/** Renders MDX and returns the HTML plus the collected headings. */
async function render(source: string) {
  const { content, headings } = await renderMDX(source);
  const { renderToStaticMarkup } = await import("react-dom/server");
  return { html: renderToStaticMarkup(content), headings };
}

describe("renderMDX", () => {
  it("puts the same id on the heading that the table of contents links to", async () => {
    const { html, headings } = await render(
      [
        "## Voraussetzungen",
        "## Schriftgröße und Satzspiegel einstellen",
        "### Häufige Fehler",
        "## Briefe &amp; Berichte",
        "## Größe, Maß und Straße",
      ].join("\n\n"),
    );

    const ids = idsInHtml(html);
    expect(ids).toHaveLength(headings.length);
    expect(ids).toEqual(headings.map((h) => h.slug));
  });

  it("transliterates umlauts instead of dropping them", async () => {
    const { headings } = await render("## Satzspiegel prüfen\n\n## Größe messen");
    expect(headings.map((h) => h.slug)).toEqual(["satzspiegel-pruefen", "groesse-messen"]);
  });

  it("resolves HTML entities before the slug is made", async () => {
    // `&amp;` becomes `&` when rendered. A slug built from the raw Markdown
    // would read `briefe-amp-berichte`.
    const { html, headings } = await render("## Briefe &amp; Berichte");
    expect(headings[0]!.slug).toBe("briefe-berichte");
    expect(idsInHtml(html)).toEqual(["briefe-berichte"]);
  });

  it("uses the rendered text of inline code, not the backticks", async () => {
    const { html, headings } = await render("## Die Option `parskip`");
    expect(headings[0]!.text).toBe("Die Option parskip");
    expect(idsInHtml(html)).toEqual([headings[0]!.slug]);
  });

  it("numbers duplicate headings the same way in both places", async () => {
    const { html, headings } = await render(["## Prüfen", "## Prüfen", "### Prüfen"].join("\n\n"));
    expect(headings.map((h) => h.slug)).toEqual(["pruefen", "pruefen-1", "pruefen-2"]);
    expect(idsInHtml(html)).toEqual(headings.map((h) => h.slug));
  });

  it("counts H1 for numbering but leaves it out of the table of contents", async () => {
    // Otherwise H1 and H2 with the same text would share a slug, and the jump
    // would land on the wrong heading.
    const { html, headings } = await render("# Prüfen\n\n## Prüfen");
    expect(headings.map((h) => h.depth)).toEqual([2]);
    expect(headings[0]!.slug).toBe("pruefen-1");
    expect(idsInHtml(html)).toEqual(["pruefen", "pruefen-1"]);
  });

  it("takes only H2 and H3 into the table of contents", async () => {
    const { headings } = await render(
      ["# Titel", "## Zwei", "### Drei", "#### Vier", "##### Fuenf"].join("\n\n"),
    );
    expect(headings.map((h) => [h.depth, h.text])).toEqual([
      [2, "Zwei"],
      [3, "Drei"],
    ]);
  });

  it("leaves headings inside code blocks alone", async () => {
    const { headings } = await renderMDX(
      ["## Echt", "```latex", "% ## kein Titel", "## auch nicht", "```"].join("\n"),
    );
    expect(headings.map((h) => h.text)).toEqual(["Echt"]);
  });

  it("falls back to a placeholder slug when nothing usable is left", async () => {
    const { html, headings } = await render("## ---");
    expect(headings[0]!.slug).toBe("abschnitt");
    expect(idsInHtml(html)).toEqual(["abschnitt"]);
  });
});
