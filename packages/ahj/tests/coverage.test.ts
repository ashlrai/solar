import { describe, it, expect } from "vitest";
import { listAhjs, loadAhjBySlug, listAhjsByState, listSolarAppPlus, coverage, freshnessLabel } from "../src";

describe("@ashlrai/ahj", () => {
  it("ships a non-empty corpus", () => {
    expect(listAhjs().length).toBeGreaterThan(0);
  });

  it("looks up Fairfax County by slug", () => {
    const ahj = loadAhjBySlug("va-fairfax-county");
    expect(ahj?.name).toBeDefined();
    expect(ahj?.state).toBe("VA");
  });

  it("filters by state", () => {
    const va = listAhjsByState("VA");
    expect(va.length).toBeGreaterThan(0);
    expect(va.every((a) => a.state === "VA")).toBe(true);
  });

  it("filters SolarAPP+ eligible", () => {
    const sa = listSolarAppPlus();
    expect(sa.every((a) => a.solarapp_plus_eligible)).toBe(true);
  });

  it("computes coverage stats", () => {
    const c = coverage();
    expect(c.total).toBe(listAhjs().length);
    expect(c.by_country.US).toBeGreaterThan(0);
    expect(c.median_turnaround_business_days).toBeGreaterThan(0);
  });

  it("freshness label respects tiers", () => {
    const ahj = listAhjs()[0]!;
    const label = freshnessLabel(ahj, "longtail", new Date(ahj.last_verified));
    expect(["fresh", "due", "stale"]).toContain(label);
  });

  it("every rule has source_url + retrieved_at", () => {
    for (const ahj of listAhjs()) {
      for (const rule of ahj.rules) {
        expect(rule.source_url, `${ahj.slug}/${rule.id}`).toMatch(/^https?:\/\//);
        expect(rule.retrieved_at, `${ahj.slug}/${rule.id}`).toMatch(/^\d{4}-\d{2}-\d{2}/);
      }
    }
  });

  it("no duplicate slugs", () => {
    const slugs = listAhjs().map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
