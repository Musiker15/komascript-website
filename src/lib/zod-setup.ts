import { z } from "zod";

/**
 * ============================================================================
 * ZOD WITHOUT JIT
 * ----------------------------------------------------------------------------
 * Zod 4 compiles its validators at runtime and checks once whether the
 * environment allows that. The check is a `Function("")` inside a try/catch.
 * Under our CSP without `'unsafe-eval'` the call throws, zod catches it and
 * takes the slower path. Nothing breaks, but the browser still reports a
 * `securitypolicyviolation` (`script-src`, blockedURI `eval`) once per page
 * load, on every page, because client components import the config modules
 * that build schemas.
 *
 * `jitless: true` skips the check instead of letting it fail.
 *
 * IMPORTANT: the switch has to be set **before** the first schema is used,
 * zod memoises the result of the check on first access. That is why every
 * file that creates a schema imports this module first:
 * `src/types/config.ts` and `src/lib/frontmatter.ts`.
 *
 * Cost: validation runs slightly slower without JIT. For a few config objects
 * and the frontmatter of one page that is not measurable.
 * ============================================================================
 */
z.config({ jitless: true });
