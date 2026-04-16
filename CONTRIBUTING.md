# Contributing to Ashlr Solar

This repo is the open-source half of [Ashlr Solar](https://ashlr.ai). It
contains the AHJ knowledge graph, the glossary, the docs site, and three
publishable npm packages. Code is MIT; data is CC-BY-4.0 (see `LICENSE` and
`DATA_LICENSE`).

The contribution we want most: **fixing or adding AHJ rules**. If a permit
reviewer told you a rule that contradicts what we have, we want to know.

---

## Quick paths

| You want to… | Do this |
|---|---|
| Fix one rule for an AHJ already in the corpus | Open an [AHJ update issue](https://github.com/ashlrai/solar/issues/new?template=ahj-update.yml) — fill the form, we PR it |
| Add a brand-new AHJ | Open a [new AHJ issue](https://github.com/ashlrai/solar/issues/new?template=new-ahj.yml) |
| File a bug in the docs site or packages | Open a [bug](https://github.com/ashlrai/solar/issues/new?template=bug.yml) |
| Propose a feature | Open a [feature request](https://github.com/ashlrai/solar/issues/new?template=feature-request.yml) |
| Submit a PR directly | See the workflow below |

---

## Local setup

```bash
git clone https://github.com/ashlrai/solar
cd solar
pnpm install
pnpm dev          # docs site at localhost:3000
pnpm typecheck    # all packages + docs
pnpm test         # all packages + docs
pnpm verify:ahj   # HEAD-checks every source_url across the corpus
```

Requires Node 22+ and pnpm 10+.

---

## Adding or editing an AHJ

AHJs live as one JSON file per jurisdiction at:

```
data/ahj/<state-or-province-slug>/<jurisdiction-slug>.json
```

The schema is `packages/ahj/src/schema.ts`. Every rule must have:

- `id` — stable, e.g. `va-fairfax-001`
- `description` — human-readable, no jargon-only
- `severity` — `blocking` | `likely_rejection` | `advisory`
- `source_url` — a URL we can fetch with HEAD
- `retrieved_at` — ISO date you confirmed the rule is current

When you change a rule with `severity: blocking`, two reviewers are required
on the PR (CODEOWNERS enforces it).

After editing JSON, run:

```bash
pnpm verify:ahj --slug <your-slug>
```

This HEAD-checks your `source_url`s and writes a report to `reports/`.

---

## Re-verification cadence

Per `docs/ahj-verification-policy.md`:

| Tier | Cadence | AHJs |
|---|---|---|
| Top-10 | 30 days | High-traffic jurisdictions |
| Top-50 | 90 days | Coverage backbone |
| Long-tail | 180 days | Everything else |

If a rule's `retrieved_at` is older than its tier allows, the docs site
shows an amber freshness badge with a "Refresh" CTA that opens an
ahj-update issue pre-filled.

---

## Adding a teardown post

Long-form posts live at `content/ahj-handbook/teardowns/<slug>.md`. Format:
markdown frontmatter optional; first-line `# Title` becomes the page title.

We aim for ≤ 800 words, structured as: TL;DR · Top rejection reasons ·
What we'd change · What Ashlr automates · What's next.

---

## PR conventions

- One concern per PR. Keep diffs scannable.
- Title in imperative mood (`fix(ahj): va-fairfax-001 source url moved`).
- Reference the issue you're closing.
- CI must pass: typecheck + tests + verify:ahj.
- For rule changes, paste a screenshot of the source page or a quote from
  a permit expediter — we need provenance.

---

## Releases

Maintainers run releases via [changesets](https://github.com/changesets/changesets):

```bash
pnpm changeset       # describe what changed in which package
git push             # the release workflow opens a Version PR
```

When that Version PR merges, packages publish to npm automatically.

---

## License terms for contributions

By contributing you agree your contribution may be released under the
same terms as the rest of the repo: MIT for code, CC-BY-4.0 for data and
content. No CLA required — the license itself is the contract.

---

## Code of conduct

See `CODE_OF_CONDUCT.md`. TL;DR: be kind, assume good faith, focus on what's
best for the broader solar industry.

---

Questions? Open a [discussion](https://github.com/ashlrai/solar/discussions)
or email **founders@ashlr.ai**.
