---
title: "Houston, TX (CenterPoint + Hurricane Wind)"
description: "Houston's permit is fast. The trap is hurricane wind exposure — Galveston-adjacent zip codes have stricter design wind than installers default to."
---

# AHJ Teardown: Houston (Houston Permitting Center + CenterPoint Energy)

*Twelfth in our weekly AHJ teardown series. Houston is one of the largest residential PV markets in Texas. The permit's not the issue. Hurricane-zone wind exposure is.*

---

## TL;DR

- **Turnaround**: ~9 business days for the residential PV permit.
- **Portals**: Houston Permitting Center (online); CenterPoint Energy for interconnection.
- **Pain**: **Hurricane-zone wind exposure** — the Gulf Coast makes ASCE 7 Exposure Category D plausible for southern Houston zip codes. Out-of-state installers default to Category C and bounce on structural review.
- **Gotcha**: CenterPoint interconnection requires its own labeling spec for the AC disconnect. Generic NEC-compliant labeling sometimes gets rejected.

## Wind exposure

Most of Houston is Exposure C (open terrain), but coastal-influence zip codes (especially south of I-610) push into Category D for the design wind speed determination. ASCE 7-22 makes Category C vs D a structural-load difference of ~15–25%.

## Top rejection reasons
1. **Wind exposure under-determined** — using C when D applies.
2. **CenterPoint AC disconnect labeling** not matching their spec exactly.
3. **Wood-roof attachment density** insufficient for the wind tier (older Houston housing has 24" rafter spacing, sometimes 16").
4. **Module attachment hardware** not on CenterPoint's approved list for fast-track interconnection.

## What we'd change (installer-side)
1. **Parcel-level wind exposure determination** before structural calc, not after.
2. **CenterPoint disconnect labeling spec** baked into the placard generator.
3. **Wood-roof rafter survey** at design time on pre-1990 homes.

## What Ashlr automates for Houston
- ASCE 7-22 wind exposure determination per parcel — overrides default Category C when coastal influence applies.
- CenterPoint Energy interconnection package generated alongside Houston Permitting Center submission.
- AC disconnect placard text matched to CenterPoint's current spec.
- Rafter spacing inferred from year-built when known; flagged for verification on pre-1990 homes.

## Coming next month
We rotate AHJ teardowns weekly. Suggest the next jurisdiction at [github.com/ashlrai/solar/issues](https://github.com/ashlrai/solar/issues/new?template=new-ahj.yml).
