/**
 * Renders the docs/llms.txt route to a static file for `gh-pages` mirrors
 * or for crawlers that prefer raw GitHub URLs. Optional — the live route
 * at /llms.txt always exists.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solar.ashlr.ai";

async function main() {
  const dataRoot = path.resolve(import.meta.dirname, "../data/ahj");
  const states = await fs.readdir(dataRoot, { withFileTypes: true });
  const ahjLines: string[] = [];
  for (const s of states) {
    if (!s.isDirectory()) continue;
    const files = await fs.readdir(path.join(dataRoot, s.name));
    for (const f of files) {
      if (!f.endsWith(".json")) continue;
      const raw = await fs.readFile(path.join(dataRoot, s.name, f), "utf8");
      const ahj = JSON.parse(raw) as { slug: string; name: string; state: string; country?: string; rules: unknown[]; solarapp_plus_eligible: boolean };
      const country = (ahj.country ?? "US").toLowerCase();
      ahjLines.push(`- [${ahj.name}, ${ahj.state}](${SITE_URL}/ahj-handbook/${country}/${ahj.state.toLowerCase()}/${ahj.slug}): ${ahj.rules.length} codified rules${ahj.solarapp_plus_eligible ? " · SolarAPP+ eligible" : ""}`);
    }
  }

  const body = `# Ashlr Solar — open knowledge graph for US + Canadian solar permitting

> Authoritative, source-cited reference for AHJ rules, NEC clauses, and
> integration guides. Maintained by Ashlr.ai.

## Start here
- [Hero](${SITE_URL})
- [Quickstart](${SITE_URL}/getting-started/quickstart-typescript)
- [API](${SITE_URL}/api/permit-package)

## AHJs

${ahjLines.join("\n")}

## License
- Code: MIT — https://github.com/ashlrai/solar/blob/main/LICENSE
- Data: CC-BY-4.0 — https://github.com/ashlrai/solar/blob/main/DATA_LICENSE
`;

  const out = path.resolve(import.meta.dirname, "../apps/docs/public/llms.txt");
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, body);
  console.log(`✓ Wrote ${out} (${ahjLines.length} AHJs)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
