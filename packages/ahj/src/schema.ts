/**
 * AHJ (Authority Having Jurisdiction) knowledge graph schema.
 *
 * Every solar permit rule set in `data/ahj/<state>/<slug>.json` conforms to
 * the {@link Ahj} interface below. The same shape is consumed by the
 * `solar.ashlr.ai` docs site and (via this package) by partners building on
 * top of the open data.
 *
 * Stable: bumping this schema in a way that breaks parsing is a major-version
 * release. Adding optional fields is a minor.
 */

export type PermitType =
  | "residential_pv"
  | "residential_pv_storage"
  | "commercial_pv"
  | "commercial_pv_storage"
  | "interconnection"
  | "electrical"
  | "structural";

export type SubmissionChannel =
  | "solarapp_plus"
  | "online_portal"
  | "email"
  | "in_person"
  | "mail";

export type RuleCategory =
  | "structural"
  | "electrical"
  | "fire"
  | "setback"
  | "equipment"
  | "labeling"
  | "documentation"
  | "interconnection";

export type RuleSeverity = "blocking" | "likely_rejection" | "advisory";

export interface AhjContact {
  department: string;
  email?: string;
  phone?: string;
  portal_url?: string;
  hours?: string;
}

export interface AhjFee {
  permit_type: PermitType;
  amount_usd?: number;
  formula?: string;
  notes?: string;
}

export interface AhjRule {
  id: string;
  permit_type: PermitType;
  category: RuleCategory;
  description: string;
  code_reference?: string;
  severity: RuleSeverity;
  source_url: string;
  retrieved_at: string;
}

export interface AhjTurnaround {
  permit_type: PermitType;
  median_business_days?: number;
  p90_business_days?: number;
  last_updated: string;
  source: string;
}

export interface Ahj {
  slug: string;
  name: string;
  state: string;
  country?: "US" | "CA";
  county?: string;
  city?: string;
  fips?: string;
  population?: number;
  contacts: AhjContact[];
  submission_channels: SubmissionChannel[];
  required_documents: string[];
  fees: AhjFee[];
  rules: AhjRule[];
  turnaround: AhjTurnaround[];
  solarapp_plus_eligible: boolean;
  notes?: string;
  last_verified: string;
}
