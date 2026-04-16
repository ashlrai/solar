export interface GlossaryTerm {
  slug: string;
  term: string;
  aka?: string[];
  category:
    | "code"
    | "interconnection"
    | "structural"
    | "process"
    | "incentive"
    | "equipment"
    | "regulatory"
    | "labeling";
  summary: string;
  body: string;
  related?: string[];
  source_url?: string;
}

export const TERMS: GlossaryTerm[] = [
  {
    slug: "nec-690",
    term: "NEC 690",
    aka: ["National Electrical Code Article 690", "Solar PV Systems"],
    category: "code",
    summary:
      "The NEC article governing photovoltaic systems: circuit sizing, disconnects, grounding, labeling, and rapid shutdown.",
    body: "NEC Article 690 is the backbone of US solar permit electrical review. It covers DC + AC conductor sizing, overcurrent protection, DC/AC disconnects, grounding electrode conductor, rapid shutdown (690.12), and signage. Every permit package we assemble includes a single-line diagram that demonstrates 690 compliance; every AHJ we cover cites a specific 690 edition (usually 2020 or 2023 depending on state adoption).",
    related: ["nec-705-12", "rapid-shutdown", "solarapp-plus"],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    slug: "nec-705-12",
    term: "NEC 705.12",
    aka: ["120% rule", "load-side interconnection"],
    category: "code",
    summary:
      "The clause governing how a PV inverter ties into the main service panel without upgrading the service.",
    body: "705.12 caps the combined rating of the main breaker + PV backfeed breaker at 120% of the busbar rating. In practice: if your panel has a 200A busbar and a 200A main, you can backfeed up to 40A of PV. Exceed it and you need a service upgrade, a supply-side tap, or a power-control system (705.13). Our compliance engine runs 705.12 math at design time so you don't discover the problem at plan-check.",
    related: ["nec-690", "nec-705-13-pcs", "supply-side-tap"],
  },
  {
    slug: "nec-705-13-pcs",
    term: "NEC 705.13 (Power Control System)",
    aka: ["PCS", "inverter export control"],
    category: "code",
    summary:
      "Allows the inverter to enforce a maximum export current, widening what you can interconnect without a service upgrade.",
    body: "705.13 recognizes that smart inverters can throttle their own output. If the inverter is UL 3141 listed and configured to enforce a specific export cap, AHJs can accept backfeed that would otherwise fail 705.12. This matters most on commercial installs >50 kW where the alternative is a utility transformer upgrade. Our commercial compliance engine flags systems where 705.13 configuration should be documented.",
    related: ["nec-705-12", "commercial-pv", "utility-load-study"],
  },
  {
    slug: "rapid-shutdown",
    term: "Rapid Shutdown",
    aka: ["NEC 690.12", "PV rapid shutdown"],
    category: "code",
    summary:
      "A firefighter safety requirement: the array must drop to a safe voltage within 30 seconds of a shutdown signal at the service entrance.",
    body: "NEC 690.12 requires module-level shutdown on most residential PV. For microinverter systems (Enphase) this is built in; for string inverters you need module-level shutdown devices (Tigo, SolarEdge optimizers, etc.). The initiation device goes at the service entrance and must be clearly labeled — 690.56(C) dictates the exact placard text. AHJs that default-fail here: LADBS, NYC DOB, Fairfax County.",
    related: ["nec-690", "nec-690-56-c", "placards"],
  },
  {
    slug: "solarapp-plus",
    term: "SolarAPP+",
    aka: ["NREL SolarAPP", "instant solar permitting"],
    category: "process",
    summary:
      "NREL's automated residential PV permit platform. Where AHJs have adopted it, a code-compliant design gets same-day approval.",
    body: "SolarAPP+ runs standardized rule checks at the moment of submission. If your design passes, you get a permit in hours, not weeks. Currently live in ~200 AHJs including LADBS, Phoenix, San Jose, Tucson. Our coverage map annotates which AHJs are SolarAPP+ eligible; our design review flags projects that would otherwise fall out of SolarAPP+ eligibility (battery add, MPU, non-standard racking).",
    related: ["nec-690", "ahj"],
    source_url: "https://solarapp.nrel.gov",
  },
  {
    slug: "ahj",
    term: "AHJ · Authority Having Jurisdiction",
    category: "regulatory",
    summary:
      "The local body — city, county, state — that issues building + electrical permits for a project.",
    body: "There are ~20,000 AHJs in the US. Each has its own submittal form, rule amendments, fee schedule, portal, and reviewer quirks. A single installer often works across a dozen AHJs in one state. Our knowledge graph codifies each as a structured JSON file with source-cited rules, fees, required documents, and turnaround time — 55 AHJs live today, re-verified on a tiered cadence (30/90/180 days).",
    related: ["solarapp-plus", "plan-check"],
  },
  {
    slug: "hvhz",
    term: "HVHZ · High Velocity Hurricane Zone",
    aka: ["Miami-Dade HVHZ"],
    category: "structural",
    summary:
      "Florida coastal counties with the strictest wind design in the US. 175 mph design wind + Miami-Dade NOA product approvals.",
    body: "HVHZ covers Miami-Dade and Broward counties primarily. Every module, rack, and attachment must carry an active Miami-Dade NOA (Notice of Acceptance). Out-of-state installers reliably fail on: expired NOAs, under-spec attachment density, generic structural letters not from FL-HVHZ-licensed PEs. Our Miami-Dade and Fort Lauderdale rule sets enforce NOA cross-checks at design time.",
    related: ["structural-letter", "noa", "ahj"],
  },
  {
    slug: "noa",
    term: "NOA · Notice of Acceptance",
    aka: ["Miami-Dade NOA", "product approval"],
    category: "equipment",
    summary:
      "Miami-Dade's per-product approval list for structural components in HVHZ.",
    body: "Miami-Dade maintains its own product approval list independent of Florida state approvals. Active NOA required for modules, racking, and attachment hardware used in HVHZ. NOAs expire — we track and warn at design time for any product with an NOA expiring in <60 days.",
    related: ["hvhz", "structural-letter"],
    source_url: "https://www.miamidade.gov/building/product-control.asp",
  },
  {
    slug: "ecra-esa",
    term: "ECRA · ESA Notification",
    aka: ["Ontario Electrical Safety Authority"],
    category: "interconnection",
    summary:
      "Canada's Ontario-specific electrical safety filing, required in parallel with the building permit and before any utility connection.",
    body: "In Ontario, the Ontario Electrical Safety Code requires notification to the Electrical Safety Authority (ESA) for any solar installation. This is separate from the municipal building permit and runs in parallel. Our Toronto + Ottawa rule sets include ECRA/ESA as a blocking requirement and surface Hydro One / Toronto Hydro net metering as the matched utility path.",
    related: ["ahj", "mesurage-net"],
    source_url: "https://esasafe.com",
  },
  {
    slug: "mesurage-net",
    term: "Mesurage net · Hydro-Québec",
    aka: ["Québec net metering"],
    category: "interconnection",
    summary:
      "Hydro-Québec's net metering / auto-production program. Required alongside any Québec municipal permit.",
    body: "In Québec, the utility is Hydro-Québec and the interconnection program is Mesurage net (net metering) or Autoproducteur (larger self-production). Applications have their own SLA independent of the municipal permit, so running them in parallel is the difference between a 2-week and 6-week total timeline. Our Montréal rule set codifies the parallel-track requirement.",
    related: ["ahj", "ecra-esa"],
    source_url:
      "https://www.hydroquebec.com/residential/customer-space/production/net-metering.html",
  },
  {
    slug: "itc",
    term: "§48E · ITC",
    aka: [
      "Clean Electricity Investment Credit",
      "Commercial Solar Tax Credit",
    ],
    category: "incentive",
    summary:
      "Federal 30% investment tax credit for commercial PV, with bonus adders for energy communities, domestic content, and low-income.",
    body: "Residential §25D sunset at the end of 2025. Commercial continues under §48E: 30% base ITC, with 10% adders for energy-community siting, 10% for domestic content, and 10–20% for low-income. Prevailing wage + apprenticeship rules apply on projects >1 MW. Our incentive optimizer stacks §48E with MACRS, state/utility rebates, and performance payments (SRECs/SMART/SuSI) while flagging FEOC material-assistance risk.",
    related: ["macrs", "srec", "feoc"],
  },
  {
    slug: "macrs",
    term: "MACRS",
    aka: ["Modified Accelerated Cost Recovery System"],
    category: "incentive",
    summary:
      "Five-year accelerated depreciation for commercial solar, stackable with §48E ITC.",
    body: "Commercial taxpayers depreciate solar on a 5-year MACRS schedule. Depreciable basis is reduced by 50% of the ITC claimed (so 30% ITC → 85% basis). Combined with §48E and state incentives, MACRS typically adds 10–15% to project NPV for C-corp buyers.",
    related: ["itc"],
    source_url: "https://www.irs.gov/publications/p946",
  },
  {
    slug: "srec",
    term: "SREC",
    aka: ["Solar Renewable Energy Certificate"],
    category: "incentive",
    summary:
      "A tradable certificate representing 1 MWh of solar generation, used to meet state renewable portfolio standards.",
    body: "Installers in states with SREC markets (NJ via SuSI, MA via SMART, IL via Illinois Shines, MD, DC, PA) sell certificates to utilities that need them to meet RPS obligations. Revenue stream can be $50–300 per MWh depending on the state and program vintage. Our incentive optimizer surfaces SREC programs per state.",
    related: ["itc"],
  },
  {
    slug: "plan-check",
    term: "Plan check",
    aka: ["AHJ review", "correction notice"],
    category: "process",
    summary:
      "The AHJ reviewer's read of your permit package. Rejections come as numbered correction notices.",
    body: "Plan check is where most submissions bleed time. Reviewers return a numbered list of corrections. Our plan-check response agent reads the letter (PDF or text), maps each comment to a specific remedy, and drafts a structured reply pairing each item with the attachment or drawing that carries the fix. Typical cycle time drop: 3 weeks → 3 days.",
    related: ["ahj", "solarapp-plus"],
  },
  {
    slug: "structural-letter",
    term: "Structural letter",
    aka: ["PE letter", "wet stamp"],
    category: "structural",
    summary:
      "A stamped letter from a licensed Professional Engineer certifying the roof can take the added array load.",
    body: "Most AHJs require a PE-stamped structural letter. It covers wind + snow + dead load per ASCE 7-22, attachment spacing, and roof-type compatibility. Our PE letter agent drafts the technical body for PE review + stamp — never replaces the PE. The draft includes wind/snow/dead loads, attachment spec, and code references per the target AHJ.",
    related: ["hvhz", "noa"],
  },
  {
    slug: "feoc",
    term: "FEOC",
    aka: ["Foreign Entity of Concern"],
    category: "regulatory",
    summary:
      "IRA restrictions on components sourced from specified foreign entities. Affects ITC eligibility + bonus adders.",
    body: "Post-IRA Treasury rules restrict material assistance from FEOCs (primarily China-linked). Projects claiming domestic-content bonus must trace attachment + mounting hardware. Our incentive optimizer flags FEOC-risk components based on BOM inputs and surfaces documentation the project needs.",
    related: ["itc", "macrs"],
  },
  {
    slug: "supply-side-tap",
    term: "Supply-side tap",
    aka: ["line-side tap", "NEC 705.11"],
    category: "code",
    summary:
      "An interconnection method that taps the utility service conductors ahead of the main breaker, sidestepping NEC 705.12's busbar limit.",
    body: "When NEC 705.12's 120% rule pushes a project into a service upgrade, a supply-side tap (governed by NEC 705.11) is often cheaper. PV ties into the service entrance conductors before they reach the main breaker, so the busbar isn't loaded by both sources. Trade-offs: more involved utility coordination, additional disconnect, and a meter-can or tap-box adder. Our compliance engine flags supply-side as the path of least resistance when a load-side interconnection would require a service upgrade.",
    related: ["nec-705-12", "nec-705-13-pcs"],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    slug: "commercial-pv",
    term: "Commercial PV",
    aka: ["C&I solar", "non-residential PV"],
    category: "process",
    summary:
      "Photovoltaic projects above ~25 kW DC or on non-residential occupancies, with stricter permitting + interconnection requirements.",
    body: "We treat any PV project above 25 kW DC or on a non-residential building (office, warehouse, school, agriculture) as commercial. Compliance overlays kick in: PE-stamped single-line diagram (always blocking), utility load-impact study above 100 kW, transformer-coupled interconnection guidance above 250 kW, and explicit DC-to-AC ratio + 705.13 PCS documentation. Permit fees scale by tier: $1.2k / $3.5k / $9.5k / $18k.",
    related: ["nec-705-13-pcs", "utility-load-study", "itc"],
  },
  {
    slug: "utility-load-study",
    term: "Utility load-impact study",
    aka: ["impact study", "interconnection study"],
    category: "interconnection",
    summary:
      "A utility-conducted analysis of how a proposed PV system affects feeder voltage, hosting capacity, and protection coordination.",
    body: "For commercial installs above ~100 kW, most US utilities require a load-impact (or interconnection) study before they'll approve interconnection. Cost ranges $5–25k and turnaround 6–16 weeks; results may dictate equipment changes (smart inverter settings, anti-islanding, transformer upgrade). File the study request the same day as the AHJ permit — sequencing is the single biggest avoidable delay on commercial projects.",
    related: ["commercial-pv", "nec-705-13-pcs"],
  },
  {
    slug: "nec-690-56-c",
    term: "NEC 690.56(C)",
    aka: ["rapid shutdown placard"],
    category: "labeling",
    summary:
      "Required service-entrance placard indicating the PV system has rapid shutdown — exact wording mandated.",
    body: "NEC 690.56(C) prescribes the placard at the building's service entrance: black letters on yellow, specific phrasing per code cycle (2017 vs 2020 vs 2023). AHJs in CA, NY, and FL routinely reject submissions whose placard text doesn't match the adopted edition exactly. Our placard generator pulls the right text per the AHJ's adopted NEC cycle.",
    related: ["rapid-shutdown", "placards"],
    source_url: "https://www.nfpa.org/codes-and-standards/nfpa-70",
  },
  {
    slug: "placards",
    term: "Placards & labels",
    aka: ["site labels"],
    category: "labeling",
    summary:
      "On-equipment + at-service-entrance signage required by NEC + local fire code. Wording is jurisdiction-specific.",
    body: "Every PV install ships a small library of placards: rapid-shutdown notice (NEC 690.56(C)), DC + AC disconnect labels (NEC 690.13/.17), max output rating, point-of-connection sticker, and AHJ-specific extras (Miami-Dade HVHZ wording, Austin Energy disconnect markings, NYC FDNY fire-access tags). Our PV-04 placard sheet generates them per the resolved AHJ.",
    related: ["nec-690-56-c", "rapid-shutdown"],
  },
];

export function findTerm(slug: string): GlossaryTerm | undefined {
  return TERMS.find((t) => t.slug === slug);
}
