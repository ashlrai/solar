/**
 * Federal + state incentive rule set (v0, curated 2026-04-14).
 * Source URLs and retrieval dates required on every entry.
 * Post-ITC landscape: federal residential credit sunset 2025; remaining plays
 * are commercial §48E transition, MACRS, state credits, utility rebates,
 * and SREC/performance markets.
 */

export type IncentiveScope = "residential" | "commercial" | "both";
export type IncentiveKind =
  | "tax_credit"
  | "rebate"
  | "performance_payment"
  | "srec"
  | "depreciation"
  | "property_tax_exemption"
  | "sales_tax_exemption"
  | "loan_program";

export interface Incentive {
  id: string;
  jurisdiction: string;
  name: string;
  kind: IncentiveKind;
  scope: IncentiveScope;
  amount_description: string;
  max_amount_usd?: number;
  expires_at?: string;
  eligibility_notes: string;
  stackable: boolean;
  feoc_safe?: boolean;
  source_url: string;
  retrieved_at: string;
}

export const FEDERAL_INCENTIVES: Incentive[] = [
  {
    id: "fed-48e-transition",
    jurisdiction: "US-federal",
    name: "§48E Clean Electricity Investment Credit (commercial transition)",
    kind: "tax_credit",
    scope: "commercial",
    amount_description:
      "30% base ITC + bonus adders (energy community +10%, domestic content +10%, low-income +10–20%). Subject to FEOC material-assistance restrictions.",
    eligibility_notes:
      "Commercial / utility PV placed in service; prevailing wage + apprenticeship required for base rate on >1 MW projects.",
    stackable: true,
    feoc_safe: false,
    source_url: "https://www.irs.gov/credits-deductions/clean-electricity-investment-credit",
    retrieved_at: "2026-04-14",
  },
  {
    id: "fed-macrs",
    jurisdiction: "US-federal",
    name: "MACRS 5-year accelerated depreciation",
    kind: "depreciation",
    scope: "commercial",
    amount_description:
      "5-year MACRS schedule on depreciable basis (basis reduced by 50% of ITC claimed).",
    eligibility_notes: "Commercial taxpayers only.",
    stackable: true,
    source_url: "https://www.irs.gov/publications/p946",
    retrieved_at: "2026-04-14",
  },
  {
    id: "fed-residential-25d-sunset",
    jurisdiction: "US-federal",
    name: "Residential Clean Energy Credit (25D) — SUNSET",
    kind: "tax_credit",
    scope: "residential",
    amount_description:
      "Sunset for systems placed in service after 2025. Only projects completed before 2026-01-01 remain eligible (30%).",
    expires_at: "2025-12-31",
    eligibility_notes:
      "New installs 2026+ are NOT eligible. Do not quote this to new homeowners — flag as expired.",
    stackable: false,
    source_url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
    retrieved_at: "2026-04-14",
  },
];

export const STATE_INCENTIVES: Record<string, Incentive[]> = {
  CA: [
    {
      id: "ca-sgip",
      jurisdiction: "CA",
      name: "Self-Generation Incentive Program (SGIP) — storage",
      kind: "rebate",
      scope: "both",
      amount_description:
        "$150–$1,000/kWh depending on equity tier and utility; residential storage paired with PV.",
      eligibility_notes:
        "IOU customers (PG&E/SCE/SDG&E/SoCalGas). Equity budget prioritizes low-income + high-fire-risk.",
      stackable: true,
      source_url: "https://www.selfgenca.com/",
      retrieved_at: "2026-04-14",
    },
    {
      id: "ca-dac-sash",
      jurisdiction: "CA",
      name: "DAC-SASH (low-income solar)",
      kind: "rebate",
      scope: "residential",
      amount_description:
        "Up-front incentive for qualifying single-family low-income homes in disadvantaged communities.",
      eligibility_notes: "Income-qualified + DAC zip code.",
      stackable: true,
      source_url: "https://www.gridalternatives.org/what-we-do/single-family-housing/dac-sash",
      retrieved_at: "2026-04-14",
    },
  ],
  NY: [
    {
      id: "ny-nyserda-ny-sun",
      jurisdiction: "NY",
      name: "NY-Sun Megawatt Block Incentive",
      kind: "rebate",
      scope: "both",
      amount_description:
        "Per-watt declining block incentive by region (Con Edison / Upstate / LI).",
      eligibility_notes: "Through NYSERDA-approved contractors only.",
      stackable: true,
      source_url: "https://www.nyserda.ny.gov/All-Programs/NY-Sun",
      retrieved_at: "2026-04-14",
    },
    {
      id: "ny-state-tax-credit",
      jurisdiction: "NY",
      name: "NY State Solar Energy System Equipment Credit",
      kind: "tax_credit",
      scope: "residential",
      amount_description: "25% of cost up to $5,000.",
      max_amount_usd: 5000,
      eligibility_notes: "Primary residence in NY.",
      stackable: true,
      source_url: "https://www.tax.ny.gov/pit/credits/solar_energy_system_credit.htm",
      retrieved_at: "2026-04-14",
    },
  ],
  NJ: [
    {
      id: "nj-successor-solar-incentive",
      jurisdiction: "NJ",
      name: "Successor Solar Incentive (SuSI) — SREC-II",
      kind: "performance_payment",
      scope: "both",
      amount_description: "Fixed $/MWh for 15 years; tiered by project size and siting.",
      eligibility_notes: "NJ BPU registration required.",
      stackable: true,
      source_url: "https://njcleanenergy.com/renewable-energy/programs/successor-solar-incentive",
      retrieved_at: "2026-04-14",
    },
  ],
  MA: [
    {
      id: "ma-smart",
      jurisdiction: "MA",
      name: "SMART (Solar Massachusetts Renewable Target)",
      kind: "performance_payment",
      scope: "both",
      amount_description:
        "Declining block tariff; adders for storage, low-income, community solar, landfill siting.",
      eligibility_notes: "Eversource / National Grid / Unitil territories.",
      stackable: true,
      source_url: "https://www.mass.gov/info-details/solar-massachusetts-renewable-target-smart",
      retrieved_at: "2026-04-14",
    },
  ],
  VA: [
    {
      id: "va-property-tax-exemption",
      jurisdiction: "VA",
      name: "Solar equipment property tax exemption",
      kind: "property_tax_exemption",
      scope: "both",
      amount_description: "Locality-level exemption for solar PV equipment assessed value.",
      eligibility_notes: "Varies by county/city; most NoVA localities exempt.",
      stackable: true,
      source_url: "https://www.dmme.virginia.gov/DE/SolarTaxCredit.shtml",
      retrieved_at: "2026-04-14",
    },
  ],
};

export function getIncentivesForProject(args: {
  state: string;
  scope: IncentiveScope;
}): Incentive[] {
  const state = args.state.toUpperCase();
  const list = [
    ...FEDERAL_INCENTIVES,
    ...(STATE_INCENTIVES[state] ?? []),
  ].filter(
    (i) =>
      i.scope === "both" ||
      i.scope === args.scope ||
      args.scope === "both",
  );
  return list.filter(
    (i) => !i.expires_at || new Date(i.expires_at) >= new Date(),
  );
}
