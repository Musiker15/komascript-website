import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Link from "next/link";
import { Callout } from "./Callout";
import { LatexExample } from "./LatexExample";
import { isExternal } from "@/lib/utils";

/**
 * Custom-Mappings für MDX-Inhalte. Werden vom renderMDX-Helper genutzt.
 */
export const mdxComponents: MDXComponentsType = {
  // Custom-Komponenten direkt in MDX nutzbar
  Callout,
  LatexExample,

  // Links: interne → next/link, externe → mit rel & target
  a: ({ href = "", children, ...rest }) => {
    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  },

  // Bilder mit lazy-loading
  img: ({ src, alt, ...rest }) => {
    // Next-Image bevorzugt — aber MDX kennt nicht immer Größen.
    // Daher hier nativen <img> mit Lazy-Loading.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src as string} alt={alt ?? ""} loading="lazy" decoding="async" {...rest} />;
  },
};
