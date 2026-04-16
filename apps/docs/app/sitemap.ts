import type { MetadataRoute } from "next";
import { listAhjs } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solar.ashlr.ai";

const STATIC: Array<[string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
  ["/", "weekly", 1],
  ["/getting-started/quickstart-typescript", "weekly", 0.9],
  ["/getting-started/quickstart-curl", "weekly", 0.8],
  ["/getting-started/authentication", "weekly", 0.8],
  ["/concepts/ahj-knowledge-graph", "weekly", 0.9],
  ["/concepts/approval-probability", "weekly", 0.8],
  ["/concepts/compliance-engine", "weekly", 0.8],
  ["/concepts/agent-architecture", "weekly", 0.8],
  ["/concepts/multi-provider-routing", "weekly", 0.8],
  ["/api/permit-package", "weekly", 0.9],
  ["/api/design-review", "weekly", 0.7],
  ["/api/interconnection", "weekly", 0.7],
  ["/api/plan-check", "weekly", 0.8],
  ["/api/pe-letter", "weekly", 0.7],
  ["/api/status-poll", "weekly", 0.6],
  ["/api/om-ingest", "weekly", 0.6],
  ["/api/errors", "monthly", 0.6],
  ["/api/rate-limits", "monthly", 0.6],
  ["/api/webhooks/aurora", "monthly", 0.7],
  ["/api/webhooks/opensolar", "monthly", 0.7],
  ["/api/webhooks/helioscope", "monthly", 0.7],
  ["/integrations/aurora", "monthly", 0.7],
  ["/integrations/opensolar", "monthly", 0.7],
  ["/integrations/helioscope", "monthly", 0.7],
  ["/integrations/enphase", "monthly", 0.6],
  ["/integrations/solaredge", "monthly", 0.6],
  ["/integrations/slack", "monthly", 0.6],
  ["/integrations/hubspot", "monthly", 0.6],
  ["/integrations/pipedrive", "monthly", 0.6],
  ["/ahj-handbook", "weekly", 0.9],
  ["/ahj-handbook/teardowns/ahj-teardown-fairfax", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-ladbs", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-austin", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-miami-dade-hvhz", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-nyc", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-san-francisco", "monthly", 0.7],
  ["/ahj-handbook/teardowns/ahj-teardown-toronto", "monthly", 0.7],
  ["/glossary", "weekly", 0.8],
  ["/contributing", "monthly", 0.5],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = STATIC.map(([p, cf, pr]) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: cf,
    priority: pr,
  }));

  for (const ahj of listAhjs()) {
    const country = (ahj.country ?? "US").toLowerCase();
    entries.push({
      url: `${SITE_URL}/ahj-handbook/${country}/${ahj.state.toLowerCase()}/${ahj.slug}`,
      lastModified: new Date(ahj.last_verified),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const term of listTerms()) {
    entries.push({
      url: `${SITE_URL}/glossary/${term.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
