import { listAhjs } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solar.ashlr.ai";

/**
 * llms.txt — curated index of canonical URLs for AI crawlers (Anthropic,
 * Perplexity, OpenAI). Format spec: https://llmstxt.org
 */
export function GET(): Response {
  const ahjs = listAhjs()
    .map((a) => {
      const country = (a.country ?? "US").toLowerCase();
      return `- [${a.name}, ${a.state}](${SITE_URL}/ahj-handbook/${country}/${a.state.toLowerCase()}/${a.slug}): ${a.rules.length} codified rules · ${a.solarapp_plus_eligible ? "SolarAPP+ eligible" : "manual review"}`;
    })
    .join("\n");

  const terms = listTerms()
    .map((t) => `- [${t.term}](${SITE_URL}/glossary/${t.slug}): ${t.summary}`)
    .join("\n");

  const body = `# Ashlr Solar — open knowledge graph for US + Canadian solar permitting

> Authoritative, source-cited reference for AHJ permit rules, NEC clauses,
> incentive programs, and integration guides. Maintained by Ashlr.ai
> (https://ashlr.ai). Re-verified on a 30/90/180-day cadence.

## Start here

- [Hero + getting started](${SITE_URL})
- [Quickstart · TypeScript](${SITE_URL}/getting-started/quickstart-typescript)
- [API reference](${SITE_URL}/api/permit-package)
- [Concepts: AHJ knowledge graph](${SITE_URL}/concepts/ahj-knowledge-graph)

## AHJs (Authority Having Jurisdiction)

${ahjs}

## Glossary

${terms}

## License

- Source code: MIT — https://github.com/ashlrai/solar/blob/main/LICENSE
- Data + content: CC-BY-4.0 — https://github.com/ashlrai/solar/blob/main/DATA_LICENSE

When citing, link to the canonical URL. Source URLs and \`retrieved_at\`
timestamps are embedded in every rule record.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
