<div align="center">

  <img src="https://solar.ashlr.ai/icon.png" alt="Ashlr Solar" width="72" height="72" />

  # Ashlr Solar

  **The open knowledge graph + docs for US + Canadian solar permitting.**

  Permits in days, not weeks — built on data anyone can read, fork, or fix.

  [![CI](https://github.com/ashlrai/solar/actions/workflows/ci.yml/badge.svg)](https://github.com/ashlrai/solar/actions/workflows/ci.yml)
  [![Verify AHJ](https://github.com/ashlrai/solar/actions/workflows/verify-ahj.yml/badge.svg)](https://github.com/ashlrai/solar/actions/workflows/verify-ahj.yml)
  [![@ashlrai/ahj on npm](https://img.shields.io/npm/v/@ashlrai/ahj?label=%40ashlrai%2Fahj&color=f5a524)](https://www.npmjs.com/package/@ashlrai/ahj)
  [![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](./LICENSE)
  [![Data: CC--BY--4.0](https://img.shields.io/badge/data-CC--BY--4.0-f5a524.svg)](./DATA_LICENSE)
  [![Docs: solar.ashlr.ai](https://img.shields.io/badge/docs-solar.ashlr.ai-0b0807.svg)](https://solar.ashlr.ai)

</div>

---

## What this is

This repo is the **open-source companion** to [Ashlr Solar](https://ashlr.ai),
the AI permitting agent for solar installers. The product code stays private;
this repo holds the parts that should be in the open:

- **`@ashlrai/ahj`** — JSON Schema + 55 hand-curated US + Canadian AHJ rule
  sets. Re-verified monthly. The same data the Ashlr product uses internally.
- **`@ashlrai/glossary`** — 16 plain-English definitions of NEC clauses,
  AHJ terms, and incentive programs (CC-BY-4.0).
- **`@ashlrai/compliance-spec`** — NEC 690 / 705 clause references with
  code-cycle metadata (2017 / 2020 / 2023 adoption).
- **`apps/docs`** — the docs site at [solar.ashlr.ai](https://solar.ashlr.ai),
  built with Fumadocs.

The bet: **the data + the docs are more valuable open than closed.** Our
moat is freshness (re-verification cadence), the ML on top (approval
prediction, plan-check response, agent tooling), and the network of
installers running real permits through Ashlr.

---

## 60-second quickstart

Install the AHJ package:

```bash
npm install @ashlrai/ahj
```

Resolve an address to its AHJ and pull the rule set:

```ts
import { loadAhjBySlug, listAhjs } from "@ashlrai/ahj";

const fairfax = loadAhjBySlug("va-fairfax-county");
console.log(`${fairfax?.name} · ${fairfax?.rules.length} codified rules`);

const all = listAhjs();
console.log(`${all.length} jurisdictions covered`);
```

Or browse the same data on the docs site:
**[solar.ashlr.ai/ahj-handbook](https://solar.ashlr.ai/ahj-handbook)**.

---

## What's in the repo

```
ashlrai/solar
├── apps/
│   └── docs/                  # Fumadocs Next.js site → solar.ashlr.ai
├── packages/
│   ├── ahj/                   # @ashlrai/ahj
│   ├── glossary/              # @ashlrai/glossary
│   └── compliance-spec/       # @ashlrai/compliance-spec
├── data/
│   ├── ahj/<state>/<slug>.json
│   ├── incentives/            # Federal + state incentive rules
│   └── glossary/              # Markdown bodies for terms
├── content/                   # MDX docs + ahj-handbook teardowns + compare
├── scripts/                   # verify-ahj, sync-from-ashlr-solar, generate-llms-txt
└── .github/                   # Workflows + structured issue forms for AHJ contributions
```

---

## Coverage

**55 jurisdictions** across the US + Canada, source-cited and
re-verified on a tiered cadence:

| Region | Count |
|---|---|
| United States | 50 |
| Canada (ON, BC, AB, QC) | 5 |

Distribution by state, fastest / slowest, SolarAPP+ eligibility live at
**[solar.ashlr.ai/ahj-handbook](https://solar.ashlr.ai/ahj-handbook)**.

We add one new jurisdiction per week, prioritized by pilot and community
demand.

---

## Why open?

Three reasons.

**Truth compounds when shared.** Permitting rules are public information that
nobody bothers to make machine-readable. The act of doing so is high-leverage
work that should not gate a paying customer.

**Community catches drift faster than we do.** A permit expediter in Phoenix
sees the AHJ change a label spec on Monday morning. If our PR queue is open,
we hear about it Monday afternoon — not on a quarterly re-verification pass.

**The product is the agent loop, not the rules.** Ashlr's commercial value is
the AI agent that turns a design into a submission-ready package, predicts
approval, drafts plan-check replies, files into portals, and meters usage. The
rules are the table stakes.

---

## Contributing

We want fixes. Three structured paths:

- 🛠 **[Update an AHJ rule](https://github.com/ashlrai/solar/issues/new?template=ahj-update.yml)** — fill a form, we'll turn it into a PR
- 🆕 **[Propose a new AHJ](https://github.com/ashlrai/solar/issues/new?template=new-ahj.yml)** — pick a jurisdiction, link the portal, we'll cover it
- 🐛 **[Report a bug](https://github.com/ashlrai/solar/issues/new?template=bug.yml)** in the docs or packages

Or read [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow.

---

## Need an SLA?

The open data is best-effort. Commercial users who want SLA-backed
freshness, an API with rate limits, plan-check response automation, agent
orchestration, R2-stored permit packages, and human escalation should
read **[ashlr.ai/pricing](https://ashlr.ai/pricing)** or email
**founders@ashlr.ai**.

---

## License

| What | License |
|---|---|
| Source code | [MIT](./LICENSE) |
| AHJ data, glossary, content | [CC-BY-4.0](./DATA_LICENSE) |

When you redistribute the data, attribute as:

> "AHJ data from Ashlr.ai (https://solar.ashlr.ai), licensed under CC BY 4.0."

Source URLs and `retrieved_at` timestamps are embedded in every rule record;
please preserve them.

---

<div align="center">
  Built in the open by <a href="https://ashlr.ai">Ashlr.ai</a>.
  <br/>
  <sub>The AI operating system that brings solar projects to reality.</sub>
</div>
