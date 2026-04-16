import { describe, it, expect } from "vitest";
import { listClauses, findClause, listClausesByBody, listClausesByTopic } from "../src";

describe("@ashlrai/compliance-spec", () => {
  it("ships clauses", () => {
    expect(listClauses().length).toBeGreaterThan(5);
  });

  it("finds NEC 705.12 by id", () => {
    const c = findClause("nec-705.12");
    expect(c?.body).toBe("NEC");
    expect(c?.citation).toContain("705.12");
  });

  it("filters by code body", () => {
    expect(listClausesByBody("NEC").every((c) => c.body === "NEC")).toBe(true);
  });

  it("filters by topic", () => {
    const fires = listClausesByTopic("fire_pathway");
    expect(fires.length).toBeGreaterThan(0);
  });

  it("every clause has a source_url", () => {
    for (const c of listClauses()) {
      expect(c.source_url).toMatch(/^https?:\/\//);
    }
  });
});
