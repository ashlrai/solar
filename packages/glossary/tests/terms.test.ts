import { describe, it, expect } from "vitest";
import { TERMS, findTerm, listTermsByCategory, searchTerms } from "../src";

describe("@ashlrai/glossary", () => {
  it("ships terms", () => {
    expect(TERMS.length).toBeGreaterThan(10);
  });

  it("finds NEC 690 by slug", () => {
    const t = findTerm("nec-690");
    expect(t?.term).toContain("NEC 690");
  });

  it("groups by category", () => {
    const code = listTermsByCategory("code");
    expect(code.length).toBeGreaterThan(0);
    expect(code.every((t) => t.category === "code")).toBe(true);
  });

  it("searches across term + summary + body + aka", () => {
    const r = searchTerms("solarapp");
    expect(r.length).toBeGreaterThan(0);
  });

  it("no duplicate slugs", () => {
    const slugs = TERMS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("related slugs reference real entries (warn-only)", () => {
    const known = new Set(TERMS.map((t) => t.slug));
    const dangling: string[] = [];
    for (const t of TERMS) {
      for (const r of t.related ?? []) {
        if (!known.has(r)) dangling.push(`${t.slug} → ${r}`);
      }
    }
    if (dangling.length > 0) {
      console.warn(`[glossary] ${dangling.length} dangling related slugs:\n  ${dangling.join("\n  ")}`);
    }
    // Cap: anything more than a handful is a data-quality regression we should fix.
    expect(dangling.length).toBeLessThanOrEqual(10);
  });
});
