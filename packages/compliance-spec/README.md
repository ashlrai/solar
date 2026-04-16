# @ashlrai/compliance-spec

[![npm](https://img.shields.io/npm/v/@ashlrai/compliance-spec?color=f5a524)](https://www.npmjs.com/package/@ashlrai/compliance-spec)

Code clause references — NEC, IRC, IBC, IFC, CFC, ASCE-7, OESC, Title 24 —
that Ashlr Solar's compliance engine cites. Each entry has a stable id, an
authoritative source URL, and code-cycle adoption metadata.

## Install

```bash
npm install @ashlrai/compliance-spec
```

## Usage

```ts
import {
  listClauses,
  findClause,
  listClausesByBody,
  listClausesByTopic,
} from "@ashlrai/compliance-spec";

const c = findClause("nec-705.12");
console.log(c?.summary);

const fire = listClausesByTopic("fire_pathway");
const nec = listClausesByBody("NEC");
```

## What this is, what this isn't

This package carries **citations + summaries**, not the verbatim code text.
The clauses themselves remain copyrighted by NFPA / ICC / ESA. Always cross-check
the latest edition adopted in your AHJ before relying on a summary.

## License

MIT.
