# @ashlrai/glossary

[![npm](https://img.shields.io/npm/v/@ashlrai/glossary?color=f5a524)](https://www.npmjs.com/package/@ashlrai/glossary)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](https://github.com/ashlrai/solar/blob/main/LICENSE)
[![Data: CC--BY--4.0](https://img.shields.io/badge/data-CC--BY--4.0-f5a524.svg)](https://github.com/ashlrai/solar/blob/main/DATA_LICENSE)

Open glossary of US + Canadian solar permitting terms — NEC clauses, AHJ
jargon, incentive programs. Plain-English first, code references second.

## Install

```bash
npm install @ashlrai/glossary
```

## Usage

```ts
import { findTerm, listTerms, searchTerms } from "@ashlrai/glossary";

const nec = findTerm("nec-705-12");
console.log(nec?.summary);

const all = listTerms();
console.log(`${all.length} terms`);

const matches = searchTerms("rapid shutdown");
```

Browse all terms at [solar.ashlr.ai/glossary](https://solar.ashlr.ai/glossary).

## License

Code: MIT. Glossary content: CC-BY-4.0. Attribute as:

> Solar permitting glossary from Ashlr.ai (https://solar.ashlr.ai/glossary), licensed under CC BY 4.0.
