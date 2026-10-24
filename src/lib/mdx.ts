import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import { mdxComponents } from "@/components/content/MDXComponents";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: { dark: "github-dark", light: "github-light" },
  keepBackground: false,
  defaultLang: { block: "latex", inline: "latex" },
};

export interface Heading {
  depth: 2 | 3;
  text: string;
  slug: string;
}

/* ---------------------------------------------------------------------------
   Anchor slugs
   ---------------------------------------------------------------------------
   There is exactly one place where a heading slug is made: the plugin below.
   The table of contents gets its entries from the same pass that writes the
   `id` onto the heading, so the two cannot disagree.

   Before, it was split in two: `rehype-slug` (github-slugger) assigned the
   ids, and `extractHeadings()` built the contents entries from the raw
   Markdown. They disagreed as soon as a heading contained an umlaut or an
   HTML entity: github-slugger keeps "ü", the second function transliterated
   it. "Größe" got the id `größe` while the contents list linked to
   `#groesse`, so a click changed the address and the page never moved.
   --------------------------------------------------------------------------- */

const TRANSLITERATION: Record<string, string> = {
  ä: "ae",
  ö: "oe",
  ü: "ue",
  Ä: "ae",
  Ö: "oe",
  Ü: "ue",
  ß: "ss",
};

/**
 * Builds a slugger that numbers duplicates within one document
 * (`einleitung`, `einleitung-1`, ...), the way github-slugger does.
 */
function createSlugger(): (text: string) => string {
  const used = new Map<string, number>();
  return (text) => {
    const base =
      text
        // Before the NFD decomposition, otherwise "ü" falls apart into "u"
        // plus a combining diaeresis and the table never matches.
        .replace(/[äöüÄÖÜß]/g, (c) => TRANSLITERATION[c] ?? c)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "abschnitt";
    const seen = used.get(base);
    used.set(base, (seen ?? 0) + 1);
    return seen === undefined ? base : `${base}-${seen}`;
  };
}

/** Minimal hast subset. Enough for the walk, saves the type import. */
interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function textOf(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(textOf).join("");
}

/**
 * Sets the `id` of every heading and collects H2/H3 for the table of
 * contents. Must run before `rehype-autolink-headings`, which needs the ids.
 */
function rehypeHeadingIds(collect: Heading[]) {
  return () => (tree: HastNode) => {
    const slugOf = createSlugger();
    const walk = (node: HastNode): void => {
      for (const child of node.children ?? []) {
        if (child.type === "element" && child.tagName && HEADING_TAGS.has(child.tagName)) {
          const text = textOf(child).trim();
          const slug = slugOf(text);
          child.properties = { ...child.properties, id: slug };
          // H1 to H6 all go through the slugger so duplicates are numbered
          // the same way as in the rendered document. Only H2 and H3 end up
          // in the table of contents.
          const depth = Number(child.tagName.slice(1));
          if (depth === 2 || depth === 3) collect.push({ depth, text, slug });
          continue;
        }
        walk(child);
      }
    };
    walk(tree);
  };
}

/**
 * Compiles MDX source to React elements (RSC capable) and returns the
 * headings of the same pass for the table of contents.
 */
export async function renderMDX(source: string) {
  const headings: Heading[] = [];
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false, // wir parsen das selbst via gray-matter
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHeadingIds(headings),
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: { className: ["heading-anchor"] },
            },
          ],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
  });
  return { content, headings };
}
