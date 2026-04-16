/**
 * @ashlrai/ahj — Open knowledge graph of US + Canadian solar permitting AHJs.
 *
 * Consumers:
 *
 * ```ts
 * import { loadAhjBySlug, listAhjs } from "@ashlrai/ahj";
 *
 * const fairfax = loadAhjBySlug("va-fairfax-county");
 * const all = listAhjs();
 * ```
 *
 * Schema and individual entries are stable across patch + minor releases. See
 * {@link https://solar.ashlr.ai/concepts/ahj-knowledge-graph} for the model.
 */

export * from "./schema";
export { AHJS, AHJS_BY_SLUG } from "./data";

import type { Ahj, RuleSeverity } from "./schema";
import { AHJS, AHJS_BY_SLUG } from "./data";

/** Returns every AHJ in the corpus. Stable order: by slug ascending. */
export function listAhjs(): readonly Ahj[] {
  return AHJS;
}

/** Lookup by slug. `undefined` if the slug is not in the corpus. */
export function loadAhjBySlug(slug: string): Ahj | undefined {
  return AHJS_BY_SLUG[slug];
}

/** All AHJs in a given state / province (2-letter code). */
export function listAhjsByState(state: string): readonly Ahj[] {
  const upper = state.toUpperCase();
  return AHJS.filter((a) => a.state.toUpperCase() === upper);
}

/** All AHJs SolarAPP+ eligible. */
export function listSolarAppPlus(): readonly Ahj[] {
  return AHJS.filter((a) => a.solarapp_plus_eligible);
}

/** Rules across the entire corpus matching a severity. */
export function listRulesBySeverity(severity: RuleSeverity): Array<{
  ahj: Ahj;
  rule: Ahj["rules"][number];
}> {
  const out: Array<{ ahj: Ahj; rule: Ahj["rules"][number] }> = [];
  for (const ahj of AHJS) {
    for (const rule of ahj.rules) {
      if (rule.severity === severity) out.push({ ahj, rule });
    }
  }
  return out;
}

/**
 * Coverage stats. Useful for status pages, README badges, and freshness UI.
 */
export function coverage(): {
  total: number;
  by_country: Record<string, number>;
  by_state: Record<string, number>;
  solarapp_plus: number;
  median_turnaround_business_days: number;
} {
  const by_country: Record<string, number> = {};
  const by_state: Record<string, number> = {};
  let solarapp = 0;
  const turns: number[] = [];

  for (const ahj of AHJS) {
    const country = ahj.country ?? "US";
    by_country[country] = (by_country[country] ?? 0) + 1;
    by_state[ahj.state] = (by_state[ahj.state] ?? 0) + 1;
    if (ahj.solarapp_plus_eligible) solarapp++;
    for (const t of ahj.turnaround) {
      if (
        t.permit_type === "residential_pv" &&
        typeof t.median_business_days === "number"
      ) {
        turns.push(t.median_business_days);
        break;
      }
    }
  }

  turns.sort((a, b) => a - b);
  const median = turns.length === 0 ? 0 : (turns[Math.floor(turns.length / 2)] ?? 0);

  return {
    total: AHJS.length,
    by_country,
    by_state,
    solarapp_plus: solarapp,
    median_turnaround_business_days: median,
  };
}

/**
 * Days since the AHJ entry was last verified. Useful for freshness badges.
 * Returns +Infinity if the date is invalid.
 */
export function daysSinceVerified(ahj: Ahj, now: Date = new Date()): number {
  const t = Date.parse(ahj.last_verified);
  if (Number.isNaN(t)) return Number.POSITIVE_INFINITY;
  return Math.floor((now.getTime() - t) / (24 * 60 * 60 * 1000));
}

/**
 * Tier-based freshness assessment per `docs/ahj-verification-policy.md`.
 *   - top-10  → 30-day cadence
 *   - top-50  → 90-day cadence
 *   - rest    → 180-day cadence
 *
 * Pass `tier` when known; otherwise we use 180-day default.
 */
export function freshnessLabel(
  ahj: Ahj,
  tier: "top10" | "top50" | "longtail" = "longtail",
  now: Date = new Date(),
): "fresh" | "due" | "stale" {
  const days = daysSinceVerified(ahj, now);
  const cadence = tier === "top10" ? 30 : tier === "top50" ? 90 : 180;
  if (days <= cadence) return "fresh";
  if (days <= cadence * 2) return "due";
  return "stale";
}
