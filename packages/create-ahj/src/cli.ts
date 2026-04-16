import { input, select, confirm, checkbox } from "@inquirer/prompts";
import { promises as fs } from "node:fs";
import path from "node:path";

interface Rule {
  id: string;
  permit_type: string;
  category: string;
  description: string;
  code_reference?: string;
  severity: "blocking" | "likely_rejection" | "advisory";
  source_url: string;
  retrieved_at: string;
}

interface AhjJson {
  slug: string;
  name: string;
  state: string;
  country: "US" | "CA";
  county?: string;
  city?: string;
  population?: number;
  contacts: Array<{ department: string; portal_url?: string; phone?: string }>;
  submission_channels: string[];
  required_documents: string[];
  fees: Array<{ permit_type: string; amount_usd: number; notes?: string }>;
  rules: Rule[];
  turnaround: Array<{ permit_type: string; median_business_days?: number; last_updated: string; source: string }>;
  solarapp_plus_eligible: boolean;
  notes?: string;
  last_verified: string;
}

const TODAY = new Date().toISOString().slice(0, 10);

const COMMON_DOCS = [
  "application_form",
  "site_plan",
  "electrical_diagram_single_line",
  "module_datasheet",
  "inverter_datasheet",
  "racking_datasheet",
  "structural_letter",
  "wind_load_calculations",
  "labels_placards",
  "interconnection_application",
];

const CATEGORIES = ["structural", "electrical", "fire", "setback", "equipment", "labeling", "documentation", "interconnection"];

async function main() {
  console.log(
    `\n  ✦ create-ahj — scaffold a new AHJ JSON for ashlrai/solar\n  ───────────────────────────────────────────────────────\n`,
  );

  const country = await select({
    message: "Country",
    choices: [
      { name: "United States", value: "US" },
      { name: "Canada", value: "CA" },
    ],
    default: "US",
  });

  const state = (
    await input({
      message: country === "US" ? "State (2-letter)" : "Province (2-letter)",
      validate: (v) => (v.length === 2 ? true : "Two letters."),
    })
  ).toUpperCase();

  const name = await input({
    message: "Jurisdiction name (e.g. 'City of Sacramento')",
    validate: (v) => (v.length > 0 ? true : "Required"),
  });

  const slug = await input({
    message: "Slug (kebab-case, e.g. 'ca-sacramento')",
    default: defaultSlug(country, state, name),
    validate: (v) => (/^[a-z0-9-]+$/.test(v) ? true : "kebab-case lowercase letters/numbers/hyphens only"),
  });

  const cityOrCounty = await select({
    message: "Is this a city or county?",
    choices: [
      { name: "City", value: "city" },
      { name: "County", value: "county" },
      { name: "Both / unsure", value: "both" },
    ],
  });

  const city = cityOrCounty !== "county" ? await input({ message: "City name", default: name.replace(/^City of /, "") }) : undefined;
  const county = cityOrCounty !== "city" ? await input({ message: "County (blank to skip)", default: "" }) : undefined;

  const populationStr = await input({
    message: "Population (optional, integer)",
    default: "",
    validate: (v) => (v === "" || /^\d+$/.test(v) ? true : "Integer or blank"),
  });

  const portalUrl = await input({
    message: "Online permit portal URL",
    validate: (v) => (/^https?:\/\//.test(v) ? true : "Must be a URL"),
  });

  const department = await input({
    message: "Department name",
    default: "Building & Inspections",
  });

  const channels = await checkbox({
    message: "Submission channels",
    choices: [
      { value: "online_portal", name: "Online portal", checked: true },
      { value: "solarapp_plus", name: "SolarAPP+" },
      { value: "email", name: "Email" },
      { value: "in_person", name: "In person" },
      { value: "mail", name: "Mail" },
    ],
  });

  const solarapp = channels.includes("solarapp_plus");

  const requiredDocs = await checkbox({
    message: "Required documents",
    choices: COMMON_DOCS.map((d) => ({
      value: d,
      name: d.replace(/_/g, " "),
      checked: ["application_form", "site_plan", "electrical_diagram_single_line", "module_datasheet", "inverter_datasheet"].includes(d),
    })),
  });

  const feeStr = await input({
    message: "Residential PV fee (USD, integer)",
    default: "150",
    validate: (v) => (/^\d+$/.test(v) ? true : "Integer"),
  });

  const turnaroundStr = await input({
    message: "Median business days for residential PV",
    default: solarapp ? "3" : "10",
    validate: (v) => (/^\d+$/.test(v) ? true : "Integer"),
  });

  const turnaroundSource = await input({
    message: "Source of the turnaround estimate",
    default: solarapp ? "SolarAPP+ coverage" : "internal_estimate",
  });

  console.log(`\n  ✦ Now we add the rules. At least one is recommended; cite a source URL.\n`);
  const rules: Rule[] = [];
  while (true) {
    const addRule = await confirm({ message: rules.length === 0 ? "Add a rule?" : "Add another rule?", default: rules.length === 0 });
    if (!addRule) break;
    const id = await input({
      message: "Rule id (e.g. 'ca-sac-001')",
      default: `${slug.replace(/^(ca|us)-/, "")}-${String(rules.length + 1).padStart(3, "0")}`,
    });
    const category = (await select({
      message: "Category",
      choices: CATEGORIES.map((c) => ({ name: c, value: c })),
      default: "interconnection",
    })) as string;
    const description = await input({ message: "Description (one sentence)" });
    const codeRef = await input({ message: "Code reference (NEC 690.12, IRC R324, etc — blank to skip)", default: "" });
    const severity = (await select({
      message: "Severity",
      choices: [
        { name: "blocking — AHJ rejects without it", value: "blocking" },
        { name: "likely_rejection — usually rejected first time", value: "likely_rejection" },
        { name: "advisory — worth noting", value: "advisory" },
      ],
      default: "blocking",
    })) as Rule["severity"];
    const source_url = await input({
      message: "Source URL (live page that confirms this rule)",
      validate: (v) => (/^https?:\/\//.test(v) ? true : "Must be a URL"),
    });

    rules.push({
      id,
      permit_type: "residential_pv",
      category,
      description,
      ...(codeRef ? { code_reference: codeRef } : {}),
      severity,
      source_url,
      retrieved_at: TODAY,
    });
  }

  const notes = await input({ message: "Notes (optional)", default: "" });

  const ahj: AhjJson = {
    slug,
    name,
    state,
    country: country as "US" | "CA",
    ...(county ? { county } : {}),
    ...(city ? { city } : {}),
    ...(populationStr ? { population: Number(populationStr) } : {}),
    contacts: [{ department, portal_url: portalUrl }],
    submission_channels: channels,
    required_documents: requiredDocs,
    fees: [{ permit_type: "residential_pv", amount_usd: Number(feeStr) }],
    rules,
    turnaround: [
      {
        permit_type: "residential_pv",
        median_business_days: Number(turnaroundStr),
        last_updated: TODAY,
        source: turnaroundSource,
      },
    ],
    solarapp_plus_eligible: solarapp,
    ...(notes ? { notes } : {}),
    last_verified: TODAY,
  };

  console.log(`\n  ✦ Generated AHJ JSON:\n`);
  console.log(JSON.stringify(ahj, null, 2));

  const writeIt = await confirm({
    message: "\nWrite to data/ahj/${state}/${slug}.json (relative to current directory)?",
    default: true,
  });

  if (writeIt) {
    const outDir = path.resolve(process.cwd(), "data/ahj", state.toLowerCase());
    await fs.mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, `${slug}.json`);
    await fs.writeFile(outPath, JSON.stringify(ahj, null, 2) + "\n");
    console.log(`\n  ✓ Wrote ${outPath}`);
    console.log(`\n  Next steps:`);
    console.log(`    pnpm --filter @ashlrai/ahj generate`);
    console.log(`    pnpm --filter @ashlrai/ahj test`);
    console.log(`    pnpm verify:ahj --slug ${slug}`);
  } else {
    console.log(`\n  Copy the JSON above into data/ahj/${state.toLowerCase()}/${slug}.json yourself.`);
  }
}

function defaultSlug(country: string, state: string, name: string): string {
  const cleaned = name
    .toLowerCase()
    .replace(/^(city|town|village|township|county) of /, "")
    .replace(/ (city|county|township|village|town)$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (country === "CA") return `ca-${state.toLowerCase()}-${cleaned}`;
  return `${state.toLowerCase()}-${cleaned}`;
}

main().catch((err) => {
  if (err && (err.name === "ExitPromptError" || err.message?.includes("force closed"))) {
    console.log("\n  ✦ Cancelled.\n");
    process.exit(0);
  }
  console.error(err);
  process.exit(1);
});
