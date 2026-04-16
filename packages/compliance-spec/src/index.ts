/**
 * @ashlrai/compliance-spec — Code clause references for US + Canadian solar.
 *
 * What this is: a structured catalog of NEC, IRC, IBC, OESC clauses that
 * Ashlr's compliance engine cites. Each entry has a stable id, the human
 * citation, an authoritative source URL, the code body it belongs to, and
 * adoption metadata so we know which AHJ uses which cycle.
 *
 * What this is not: the rule itself. The clause text and interpretation
 * live with the publishing body (NFPA, ICC, ESA). We carry pointers + the
 * one-sentence summary needed to surface the clause in our UI.
 */

export type CodeBody =
  | "NEC"
  | "IRC"
  | "IBC"
  | "IFC"
  | "CFC"
  | "ASCE-7"
  | "OESC"
  | "OBC"
  | "NFPA-1"
  | "Title-24";

export interface CodeCycle {
  body: CodeBody;
  /** e.g. "2017", "2020", "2023". OESC uses "27th edition" etc. */
  edition: string;
  effective_date?: string;
}

export interface CodeClause {
  id: string;
  body: CodeBody;
  citation: string;
  /** One-sentence summary suitable for inline UI. */
  summary: string;
  topic:
    | "rapid_shutdown"
    | "interconnection"
    | "structural"
    | "fire_pathway"
    | "labeling"
    | "grounding"
    | "conductor_sizing"
    | "energy_storage"
    | "service_panel";
  cycles: CodeCycle[];
  source_url: string;
}

const CLAUSES: readonly CodeClause[] = [
  {
    id: "nec-690.12",
    body: "NEC",
    citation: "NEC 690.12",
    summary:
      "Rapid shutdown of PV systems on buildings. Module-level conductors must drop to 80V in 30s of shutdown initiation.",
    topic: "rapid_shutdown",
    cycles: [
      { body: "NEC", edition: "2017" },
      { body: "NEC", edition: "2020" },
      { body: "NEC", edition: "2023" },
    ],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    id: "nec-690.13",
    body: "NEC",
    citation: "NEC 690.13",
    summary:
      "PV system disconnecting means: lockable, plainly marked, accessible, indicates open/closed.",
    topic: "service_panel",
    cycles: [{ body: "NEC", edition: "2020" }, { body: "NEC", edition: "2023" }],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    id: "nec-690.56-c",
    body: "NEC",
    citation: "NEC 690.56(C)",
    summary: "Rapid-shutdown placard required at the service entrance.",
    topic: "labeling",
    cycles: [{ body: "NEC", edition: "2020" }, { body: "NEC", edition: "2023" }],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    id: "nec-705.12",
    body: "NEC",
    citation: "NEC 705.12",
    summary:
      "Load-side interconnection sizing: combined rating of main + PV breaker ≤ 120% of busbar.",
    topic: "interconnection",
    cycles: [
      { body: "NEC", edition: "2017" },
      { body: "NEC", edition: "2020" },
      { body: "NEC", edition: "2023" },
    ],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    id: "nec-705.13",
    body: "NEC",
    citation: "NEC 705.13",
    summary:
      "Power Control System (PCS): inverter enforces export-current cap, expanding interconnection options.",
    topic: "interconnection",
    cycles: [{ body: "NEC", edition: "2020" }, { body: "NEC", edition: "2023" }],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    id: "irc-r324",
    body: "IRC",
    citation: "IRC R324 / R324.7",
    summary: "Solar energy systems on residential roofs; access pathways for firefighters.",
    topic: "fire_pathway",
    cycles: [{ body: "IRC", edition: "2021" }, { body: "IRC", edition: "2024" }],
    source_url: "https://codes.iccsafe.org/content/IRC2021P2",
  },
  {
    id: "cfc-1205",
    body: "CFC",
    citation: "CFC 1205",
    summary:
      "California Fire Code rooftop access pathways for PV — 36\" minimum on most residential.",
    topic: "fire_pathway",
    cycles: [{ body: "CFC", edition: "2022" }],
    source_url: "https://codes.iccsafe.org/",
  },
  {
    id: "asce7-22",
    body: "ASCE-7",
    citation: "ASCE 7-22",
    summary:
      "Wind + snow + seismic load standard. Determines attachment density, structural calc inputs.",
    topic: "structural",
    cycles: [{ body: "ASCE-7", edition: "2022" }],
    source_url: "https://www.asce.org/publications-and-news/asce-7",
  },
  {
    id: "oesc-rule-84",
    body: "OESC",
    citation: "OESC Rule 84",
    summary:
      "Ontario Electrical Safety Code — interconnected micro-generation; ECRA/ESA notification + connection authorization required.",
    topic: "interconnection",
    cycles: [{ body: "OESC", edition: "27th" }],
    source_url: "https://esasafe.com",
  },
  {
    id: "title24-part6",
    body: "Title-24",
    citation: "Title 24 Part 6",
    summary:
      "California energy code — PV sizing, battery readiness, CF-1R/CF-2R/CF-3R compliance forms.",
    topic: "energy_storage",
    cycles: [{ body: "Title-24", edition: "2022" }],
    source_url: "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards",
  },
];

export function listClauses(): readonly CodeClause[] {
  return CLAUSES;
}

export function findClause(id: string): CodeClause | undefined {
  return CLAUSES.find((c) => c.id === id);
}

export function listClausesByBody(body: CodeBody): readonly CodeClause[] {
  return CLAUSES.filter((c) => c.body === body);
}

export function listClausesByTopic(topic: CodeClause["topic"]): readonly CodeClause[] {
  return CLAUSES.filter((c) => c.topic === topic);
}
