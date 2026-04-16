import { listAhjs } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";
import { listClauses } from "@ashlrai/compliance-spec";
import { listAllDocs } from "./docs-fs";

export interface SearchEntry {
  title: string;
  subtitle?: string;
  url: string;
  kind: "doc" | "ahj" | "glossary" | "clause";
  keywords: string;
}

/**
 * Precompiled at build time (inside getSearchCorpus) and served as a static
 * JSON blob. The /api/search-index route returns this; the client-side
 * Command component fetches once and filters in-memory.
 */
export async function getSearchCorpus(): Promise<SearchEntry[]> {
  const out: SearchEntry[] = [];

  for (const doc of await listAllDocs()) {
    const url = `/${doc.slug.join("/")}`;
    out.push({
      title: doc.frontmatter.title ?? doc.slug.join(" / "),
      subtitle: doc.frontmatter.description,
      url,
      kind: "doc",
      keywords: `${doc.frontmatter.title ?? ""} ${doc.frontmatter.description ?? ""} ${doc.body.slice(0, 400)}`.toLowerCase(),
    });
  }

  for (const a of listAhjs()) {
    const country = (a.country ?? "US").toLowerCase();
    out.push({
      title: `${a.name}, ${a.state}`,
      subtitle: `${a.rules.length} rules · ${a.solarapp_plus_eligible ? "SolarAPP+ eligible" : "manual review"}`,
      url: `/ahj-handbook/${country}/${a.state.toLowerCase()}/${a.slug}`,
      kind: "ahj",
      keywords: `${a.name} ${a.state} ${a.slug} ${a.county ?? ""} ${a.city ?? ""} ${a.rules.map((r) => r.description).join(" ")}`.toLowerCase(),
    });
  }

  for (const t of listTerms()) {
    out.push({
      title: t.term,
      subtitle: t.summary,
      url: `/glossary/${t.slug}`,
      kind: "glossary",
      keywords: `${t.term} ${(t.aka ?? []).join(" ")} ${t.summary} ${t.body}`.toLowerCase(),
    });
  }

  for (const c of listClauses()) {
    out.push({
      title: c.citation,
      subtitle: c.summary,
      url: `/concepts/compliance-engine#${c.id}`,
      kind: "clause",
      keywords: `${c.citation} ${c.body} ${c.summary} ${c.topic}`.toLowerCase(),
    });
  }

  return out;
}
