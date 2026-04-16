import { promises as fs } from "node:fs";
import path from "node:path";
import { listAhjs } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";
import { listClauses } from "@ashlrai/compliance-spec";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solar.ashlr.ai";
const CONTENT_ROOT = path.resolve(process.cwd(), "../../content");

/**
 * llms-full.txt — full long-form content dump for AI crawlers.
 *
 * llms.txt at root is the curated index. llms-full.txt is the full text of
 * every doc + every glossary term + every AHJ rule set + every NEC clause,
 * in one file. Spec: https://llmstxt.org/#what-about-llms-full-txt
 */
export async function GET(): Promise<Response> {
  const sections: string[] = [];

  sections.push(`# Ashlr Solar — full open knowledge graph

> Source-cited reference for US + Canadian solar permitting. Maintained by Ashlr.ai.
> Code: MIT. Data + content: CC-BY-4.0. Source URLs and \`retrieved_at\` timestamps
> are embedded in every rule record; please preserve them when redistributing.

> Canonical: ${SITE_URL}/llms-full.txt
> Curated index: ${SITE_URL}/llms.txt
`);

  // Docs (MDX)
  sections.push("\n# Documentation\n");
  const docFiles = await collectMdx(CONTENT_ROOT);
  for (const rel of docFiles) {
    const raw = await fs.readFile(path.join(CONTENT_ROOT, rel), "utf8");
    const slug = rel.replace(/\.(md|mdx)$/, "");
    sections.push(`\n## ${SITE_URL}/${slug}\n\n${raw.trim()}\n`);
  }

  // AHJs
  sections.push("\n# AHJ knowledge graph\n");
  for (const ahj of listAhjs()) {
    const country = (ahj.country ?? "US").toLowerCase();
    sections.push(
      `\n## ${ahj.name}, ${ahj.state} — ${SITE_URL}/ahj-handbook/${country}/${ahj.state.toLowerCase()}/${ahj.slug}\n`,
    );
    sections.push(
      `Population: ${ahj.population ?? "n/a"} · ` +
        `SolarAPP+ ${ahj.solarapp_plus_eligible ? "eligible" : "manual"} · ` +
        `Last verified ${ahj.last_verified}\n`,
    );
    sections.push("\n**Rules**\n");
    for (const r of ahj.rules) {
      sections.push(
        `- [${r.severity}] ${r.id}: ${r.description}` +
          (r.code_reference ? ` (${r.code_reference})` : "") +
          ` — source: ${r.source_url} (retrieved ${r.retrieved_at})`,
      );
    }
    if (ahj.required_documents.length) {
      sections.push("\n**Required documents**\n");
      sections.push(ahj.required_documents.map((d) => `- ${d}`).join("\n"));
    }
    if (ahj.notes) sections.push(`\n**Notes**: ${ahj.notes}`);
    sections.push("");
  }

  // Glossary
  sections.push("\n# Glossary\n");
  for (const t of listTerms()) {
    sections.push(`\n## ${t.term} — ${SITE_URL}/glossary/${t.slug}\n`);
    if (t.aka?.length) sections.push(`*Also: ${t.aka.join(" · ")}*\n`);
    sections.push(`**Summary**: ${t.summary}\n`);
    sections.push(`${t.body}\n`);
    if (t.source_url) sections.push(`Source: ${t.source_url}`);
  }

  // Compliance clauses
  sections.push("\n# Code clause references\n");
  for (const c of listClauses()) {
    sections.push(`\n## ${c.citation} (${c.body})\n`);
    sections.push(`${c.summary}\n`);
    sections.push(`Topic: ${c.topic}`);
    sections.push(
      `Cycles: ${c.cycles.map((cy) => `${cy.body} ${cy.edition}`).join(", ")}`,
    );
    sections.push(`Source: ${c.source_url}`);
  }

  return new Response(sections.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

async function collectMdx(dir: string, base = dir): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === "meta.json") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await collectMdx(full, base)));
    else if (/\.(md|mdx)$/.test(e.name)) out.push(path.relative(base, full));
  }
  return out.sort();
}
