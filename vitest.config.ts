import { defineConfig } from "vitest/config";
import path from "node:path";

// =============================================================================
// Vitest config
// -----------------------------------------------------------------------------
// The aliases mirror `compilerOptions.paths` from tsconfig.json. Order matters:
// `@/config` and `@/content` must come BEFORE `@/`, otherwise the generic entry
// wins and resolves `@/config/site.config` to `src/config/site.config`.
//
// `include` keeps Vitest out of `e2e/`, those specs belong to Playwright.
// =============================================================================
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/config\//, replacement: path.resolve(import.meta.dirname, "config") + "/" },
      { find: /^@\/content\//, replacement: path.resolve(import.meta.dirname, "content") + "/" },
      { find: /^@\//, replacement: path.resolve(import.meta.dirname, "src") + "/" },
    ],
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "scripts/**/*.test.ts"],
  },
});
