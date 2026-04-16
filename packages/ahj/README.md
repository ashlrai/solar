# @ashlrai/ahj

[![npm](https://img.shields.io/npm/v/@ashlrai/ahj?color=f5a524)](https://www.npmjs.com/package/@ashlrai/ahj)
[![Verify AHJ](https://github.com/ashlrai/solar/actions/workflows/verify-ahj.yml/badge.svg)](https://github.com/ashlrai/solar/actions/workflows/verify-ahj.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](https://github.com/ashlrai/solar/blob/main/LICENSE)
[![Data: CC--BY--4.0](https://img.shields.io/badge/data-CC--BY--4.0-f5a524.svg)](https://github.com/ashlrai/solar/blob/main/DATA_LICENSE)

Open knowledge graph of US + Canadian solar permitting AHJs (Authorities
Having Jurisdiction). Schema, types, and 55 hand-curated rule sets, re-verified
on a 30 / 90 / 180-day cadence. Built and maintained by [Ashlr.ai](https://ashlr.ai).

## Install

```bash
npm install @ashlrai/ahj
```

## Usage

```ts
import {
  loadAhjBySlug,
  listAhjs,
  listAhjsByState,
  coverage,
  freshnessLabel,
} from "@ashlrai/ahj";

const fairfax = loadAhjBySlug("va-fairfax-county");
console.log(fairfax?.rules.map((r) => `[${r.severity}] ${r.description}`));

const va = listAhjsByState("VA");
console.log(`${va.length} Virginia jurisdictions`);

const c = coverage();
console.log(`${c.total} AHJs · median turnaround ${c.median_turnaround_business_days}d`);

console.log(freshnessLabel(fairfax!, "top10")); // "fresh" | "due" | "stale"
```

## Schema

Every entry conforms to the `Ahj` interface. The full schema lives in
[`src/schema.ts`](./src/schema.ts) and is re-exported as
`@ashlrai/ahj/schema`.

```ts
import type { Ahj, AhjRule, RuleSeverity } from "@ashlrai/ahj";
```

## Data sourcing

Each rule carries `source_url` and `retrieved_at` so you can verify
provenance. The monthly `verify-ahj` GitHub workflow HEAD-checks every URL
and posts a report.

## Contributing

Found a stale rule? Open an [AHJ update issue](https://github.com/ashlrai/solar/issues/new?template=ahj-update.yml)
or a PR — see [CONTRIBUTING.md](https://github.com/ashlrai/solar/blob/main/CONTRIBUTING.md).

## License

Code: MIT. Data: CC-BY-4.0. When you redistribute the data, attribute as:

> AHJ data from Ashlr.ai (https://solar.ashlr.ai), licensed under CC BY 4.0.
