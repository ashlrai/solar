/**
 * AHJ source-URL verifier.
 *
 * For each AHJ in `data/ahj/`, HEAD-checks every `source_url`. Writes a
 * report to `reports/ahj-verification-<date>.json` and exits 1 if more than
 * 10% of URLs fail (CI signal).
 *
 * Usage:
 *   pnpm verify:ahj                            # all AHJs
 *   pnpm verify:ahj --top 10                   # top 10 by population
 *   pnpm verify:ahj --slug va-fairfax-county   # single
 */

import { promises as fs } from "node:fs";
import path from "node:path";

interface Rule {
  id: string;
  source_url: string;
  retrieved_at: string;
}

interface Ahj {
  slug: string;
  state: string;
  population?: number;
  contacts: Array<{ portal_url?: string }>;
  rules: Rule[];
  last_verified: string;
}

interface Issue {
  slug: string;
  rule_id: string;
  url: string;
  status: number | "network_error" | "timeout";
  age_days: number;
}

const DATA_ROOT = path.resolve(import.meta.dirname, "../data/ahj");

function parseArgs(): { top?: number; slugs?: string[] } {
  const args = process.argv.slice(2);
  let top: number | undefined;
  let slugs: string[] | undefined;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--top") top = Number(args[++i]);
    if (args[i] === "--slug") slugs = args[++i]!.split(",").map((s) => s.trim());
  }
  return { top, slugs };
}

async function loadAll(): Promise<Ahj[]> {
  const states = await fs.readdir(DATA_ROOT, { withFileTypes: true });
  const out: Ahj[] = [];
  for (const s of states) {
    if (!s.isDirectory()) continue;
    const stateDir = path.join(DATA_ROOT, s.name);
    const files = await fs.readdir(stateDir);
    for (const f of files) {
      if (!f.endsWith(".json")) continue;
      const raw = await fs.readFile(path.join(stateDir, f), "utf8");
      out.push(JSON.parse(raw) as Ahj);
    }
  }
  return out;
}

async function check(url: string): Promise<Issue["status"]> {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
      headers: { "User-Agent": "AshlrSolar/0.1 AHJ verifier" },
    });
    if (res.status === 405) {
      const get = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(10_000),
        headers: { "User-Agent": "AshlrSolar/0.1 AHJ verifier" },
      });
      return get.status;
    }
    return res.status;
  } catch (err) {
    return (err as Error).name === "TimeoutError" ? "timeout" : "network_error";
  }
}

async function main() {
  const { top, slugs } = parseArgs();
  let ahjs = await loadAll();
  if (slugs) ahjs = ahjs.filter((a) => slugs!.includes(a.slug));
  if (top) ahjs = ahjs.sort((a, b) => (b.population ?? 0) - (a.population ?? 0)).slice(0, top);

  const now = Date.now();
  const issues: Issue[] = [];
  let checked = 0;
  let ok = 0;

  for (const ahj of ahjs) {
    const urls = new Set<string>();
    for (const r of ahj.rules) urls.add(r.source_url);
    for (const c of ahj.contacts) if (c.portal_url) urls.add(c.portal_url);

    for (const url of urls) {
      const status = await check(url);
      checked++;
      const related = ahj.rules.find((r) => r.source_url === url);
      const retrieved = related?.retrieved_at ?? ahj.last_verified;
      const age_days = Math.floor((now - Date.parse(retrieved)) / (24 * 3600 * 1000));
      const healthy = typeof status === "number" && status >= 200 && status < 400;
      if (healthy) ok++;
      if (!healthy || age_days > 180) {
        issues.push({ slug: ahj.slug, rule_id: related?.id ?? "contact/portal", url, status, age_days });
      }
    }
  }

  const outDir = path.resolve(import.meta.dirname, "../reports");
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, `ahj-verification-${new Date().toISOString().slice(0, 10)}.json`);
  await fs.writeFile(outPath, JSON.stringify({ generated_at: new Date().toISOString(), ahjs_checked: ahjs.length, urls_checked: checked, urls_ok: ok, issues }, null, 2));

  console.log(`\nChecked ${checked} URLs across ${ahjs.length} AHJs.`);
  console.log(`  ok: ${ok}`);
  console.log(`  issues: ${issues.length}`);
  for (const i of issues.slice(0, 10)) {
    console.log(`    [${i.slug}] ${i.status} — ${i.url} (age ${i.age_days}d)`);
  }
  console.log(`Report → ${outPath}`);
  if (issues.length > Math.max(3, Math.ceil(checked * 0.1))) {
    console.error("\n✗ Too many issues (> 10%). Triage before next release.");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
