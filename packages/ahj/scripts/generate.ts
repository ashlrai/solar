/**
 * Generates `packages/ahj/src/data.ts` by reading every JSON file under
 * `data/ahj/`. We bundle the data into the published package so consumers
 * don't need filesystem access at runtime — no shipping JSON, no async
 * loaders.
 *
 * Re-runs on `pnpm prebuild`. Also safe to run directly:
 *   pnpm --filter @ashlrai/ahj generate
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const PKG_ROOT = path.resolve(import.meta.dirname, "..");
const REPO_ROOT = path.resolve(PKG_ROOT, "../..");
const DATA_ROOT = path.join(REPO_ROOT, "data/ahj");
const OUT_FILE = path.join(PKG_ROOT, "src/data.ts");

interface RawAhj {
  slug: string;
  [key: string]: unknown;
}

async function loadAll(): Promise<RawAhj[]> {
  const states = await fs.readdir(DATA_ROOT, { withFileTypes: true });
  const ahjs: RawAhj[] = [];
  for (const state of states) {
    if (!state.isDirectory()) continue;
    const stateDir = path.join(DATA_ROOT, state.name);
    const files = await fs.readdir(stateDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const raw = await fs.readFile(path.join(stateDir, file), "utf8");
      const ahj = JSON.parse(raw) as RawAhj;
      if (!ahj.slug) {
        throw new Error(`Missing slug in ${state.name}/${file}`);
      }
      ahjs.push(ahj);
    }
  }
  ahjs.sort((a, b) => a.slug.localeCompare(b.slug));
  return ahjs;
}

async function main() {
  const ahjs = await loadAll();
  const slugs = new Set<string>();
  for (const a of ahjs) {
    if (slugs.has(a.slug)) throw new Error(`Duplicate slug: ${a.slug}`);
    slugs.add(a.slug);
  }

  const header = `/**
 * GENERATED — do not edit by hand.
 *
 * Regenerate with: pnpm --filter @ashlrai/ahj generate
 *
 * Source: data/ahj/<state>/<slug>.json (CC-BY-4.0 — see DATA_LICENSE).
 */

import type { Ahj } from "./schema";
`;

  const dataLine = `\nexport const AHJS: readonly Ahj[] = ${JSON.stringify(ahjs, null, 2)} as const;\n`;
  const indexLine = `\nexport const AHJS_BY_SLUG: Readonly<Record<string, Ahj>> = Object.freeze(
  Object.fromEntries(AHJS.map((a) => [a.slug, a])),
);\n`;

  await fs.writeFile(OUT_FILE, header + dataLine + indexLine);
  console.log(`✓ Generated ${ahjs.length} AHJs → ${path.relative(REPO_ROOT, OUT_FILE)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
