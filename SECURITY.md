# Security Policy

## Reporting a vulnerability

Email **security@ashlr.ai** with a description and reproduction steps. We
acknowledge within 24 hours and work with you to triage + fix. Please do not
open a public GitHub issue for security problems.

## What's in scope

- Build chain or dependency vulnerabilities affecting the docs site or
  packages published from this repo (`@ashlrai/ahj`, `@ashlrai/glossary`,
  `@ashlrai/compliance-spec`).
- Auth/identity issues in the docs site if exposed.
- Misuse of GitHub Actions / secrets in this repo.
- Data integrity attacks against the AHJ JSON corpus (rule poisoning, bad
  PRs that slip past review).

## Out of scope

- Vulnerabilities in the closed product (`ashlr.ai` app) — report those via
  the same email.
- Third-party services (Vercel, npm, GitHub) — report to the vendor.
- AHJ portal vulnerabilities — report to the AHJ.

## Disclosure

We disclose fixed vulnerabilities with a 60-day embargo (or earlier if the
reporter consents and downstream consumers are notified).

## Data integrity

All AHJ rule changes go through PR review. Two-reviewer requirement for
changes touching rules tagged `severity: blocking`. Source URL changes
trigger an automated `verify-ahj` workflow run.
