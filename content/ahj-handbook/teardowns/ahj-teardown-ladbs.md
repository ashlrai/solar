---
title: "Los Angeles (LADBS + SolarAPP+)"
description: "Second in our weekly AHJ teardown series. If #1 was a low-volume-but-opaque exurb (Fairfax), this is the opposite: highest US volume, highly instrumented, partially automated. The interesting pain her"
---

# AHJ Teardown: Los Angeles (LADBS + SolarAPP+)

*Second in our weekly AHJ teardown series. If #1 was a low-volume-but-opaque exurb (Fairfax), this is the opposite: highest US volume, highly instrumented, partially automated. The interesting pain here is the fallback path.*

---

## TL;DR

- **Turnaround**: ~3 business days median when SolarAPP+ eligible. P90 jumps to 14 when LADBS plan check catches the fallback.
- **Portal**: LADBS ePermit + SolarAPP+ integration.
- **Pain**: Installers design for SolarAPP+ eligibility, then get bounced to plan check by a subtle config (battery add, MPU, non-standard racking), and lose the whole speed premium with no early warning.
- **Gotcha**: Wet-stamped structural calcs get demanded for non-standard roofs; non-standard is broader than installers think.

## What SolarAPP+ covers
Straightforward roof-mount residential PV, standard equipment, no MPU, no storage add in the same permit. For these: near-instant approval, 1-day inspection scheduling.

## Where the fallback kicks in
1. Battery storage in scope → LADBS plan check.
2. Main service panel upgrade → plan check.
3. Ground mount, tilt racking, or unusual module sizes → plan check.
4. Historic-district overlays → planning-department hold.

## Top rejection reasons (LADBS plan-check path)
1. **Missing Title 24 compliance docs** (~22% of rejections).
2. **CFC 1205 roof access pathway mismatch** with site plan (~19%).
3. **NEC 690.12 rapid shutdown location** not within 1 ft of array (~12%).
4. **Un-stamped structural calcs on arrays > 4 kW** or non-standard roofs.

## What we'd change (installer-side)
1. **Pre-flight SolarAPP+ eligibility at design time**, not at submission. Every scope delta (storage, MPU) should trip a visible alert.
2. **Build a LADBS-plan-check pre-check** into your process: if SolarAPP+ fails, don't just re-route — run the 4 top-rejection-reason checks before resubmitting.
3. **Cache your PE's structural letter templates** by racking × roof-type — reuse cuts 2 days.

## What Ashlr automates for LADBS
- Determine SolarAPP+ eligibility from design input with a clear "fallback probability" score.
- If fallback likely, generate plan-check-ready package up front (Title 24 docs, dimensioned pathway diagrams, rapid-shutdown callout).
- Batch-stamp structural letter templates for your PE to countersign.
- Monitor LADBS ePermit portal status; auto-draft responses to plan-check comments.

## Coming next week
AHJ Teardown #3 — City of Austin (municipal utility interconnection as the shadow critical path).
