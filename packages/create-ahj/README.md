# @ashlrai/create-ahj

[![npm](https://img.shields.io/npm/v/@ashlrai/create-ahj?color=f5a524)](https://www.npmjs.com/package/@ashlrai/create-ahj)

Interactive CLI for scaffolding a new AHJ JSON file in
[ashlrai/solar](https://github.com/ashlrai/solar). Asks the right questions in
the right order, validates source URLs, writes a schema-conformant entry under
`data/ahj/<state>/<slug>.json`.

## Usage

From inside a clone of `ashlrai/solar` (or any repo with `data/ahj/`):

```bash
pnpm dlx @ashlrai/create-ahj
# or
npx @ashlrai/create-ahj
```

Walks you through:
1. Country (US / CA)
2. State / province
3. Jurisdiction name + slug
4. Population, portal URL, department
5. Submission channels (online portal, SolarAPP+, email, mail)
6. Required documents
7. Fees + turnaround
8. Rules — one at a time, with category + severity + cited source URL
9. Notes

Output: a valid AHJ JSON file ready to PR.

## Then

```bash
pnpm --filter @ashlrai/ahj generate    # regenerate the bundled corpus
pnpm --filter @ashlrai/ahj test        # validate
pnpm verify:ahj --slug <your-slug>     # HEAD-check source URLs
```

Open a PR. CODEOWNERS auto-routes; reviewers usually merge within 3 business days.

## License

MIT.
