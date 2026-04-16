---
title: "Miami-Dade County (HVHZ)"
description: "Fourth in our AHJ teardown series. Miami-Dade's High Velocity Hurricane Zone is the strictest structural envelope in the US — and the rules that kill your permit aren't on the county's website."
---

# AHJ Teardown: Miami-Dade County (HVHZ)

*Fourth in our AHJ teardown series. Miami-Dade's High Velocity Hurricane Zone is the strictest structural envelope in the US — and the rules that kill your permit aren't on the county's website.*

---

## TL;DR

- **Turnaround**: ~21 business days. Cleanest submissions still take ~3 weeks.
- **Portal**: Miami-Dade PERA.
- **Pain**: HVHZ requires **Miami-Dade NOA product approvals** on modules, racking, and attachment hardware. Using a non-NOA product = automatic rejection. NOA approvals expire. Product approval is often the actual blocker, not the permit.
- **Gotcha**: Installers bring rack of choice from other markets, only to find it has no active NOA — wasted design pass.

## The NOA (Notice of Acceptance) trap
Miami-Dade maintains its own product-approval list separate from Florida state approvals. Products must have an active, non-expired NOA for the specific use case (module attachment, racking, standoffs). Cross-check before you finalize the BOM.

## 175 mph wind load
Structural calcs assume 175 mph design wind (HVHZ). That cascades into heavier attachment spacing, more standoffs, and load-path documentation that rural-Florida installers aren't used to. Out-of-state PEs often under-spec on first pass.

## Top rejection reasons
1. **Expired or missing NOA** for attachment/racking — ~40% of rejections.
2. **Under-spec'd attachment density** for 175 mph.
3. **Missing site-specific exposure category** justification.
4. **Placard specs** — Miami-Dade has local language requirements above NEC minimums.

## What we'd change (installer-side)
1. **Maintain a verified internal BOM whitelist** of active-NOA products, refreshed monthly.
2. **Use a FL-HVHZ-licensed PE** who does this daily. Out-of-state PEs will cost you a submission cycle.
3. **Pre-cache structural calc templates** by roof type × attachment model — reuse is the only path to repeatable speed.

## What Ashlr automates
- Live NOA database: every AHJ submission cross-checks the BOM against current NOA status.
- Auto-generate 175 mph load calculations for standard configurations (PE review still required).
- Flag products with NOA expiring within 60 days.
- Miami-Dade placard generator (HVHZ-specific label text).

## Coming next week
AHJ Teardown #5 — NYC DOB + FDNY dual review (and why 9-foot perimeter clearance reshapes your entire design).
