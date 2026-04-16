---
title: "Vancouver, BC (BC Hydro + Seismic)"
description: "Cascadia subduction zone seismic + BC Hydro net metering separate from the building permit + a P.Eng licensure rule that locks out US engineers."
---

# AHJ Teardown: Vancouver (DBL + BC Hydro + Technical Safety BC)

*Tenth in our weekly AHJ teardown series. Second Canadian entry. Vancouver is the West Coast of Canada — Cascadia subduction zone seismic, BC Hydro as the only utility, and a P.Eng licensure regime that blocks most US PE stamps cold.*

---

## TL;DR

- **Turnaround**: ~22 business days median for the building permit.
- **Portals**: City of Vancouver Development, Buildings & Licensing; Technical Safety BC for the electrical permit; BC Hydro net metering on its own.
- **Pain**: Three separate authorities, **none of which sign each other off**. Cascadia seismic design is non-negotiable. P.Eng must be APEGBC-licensed (not US-PE).
- **Gotcha**: BC Hydro Net Metering Agreement processing is slow (4–8 weeks); file it the day the design is final, not after the city permit clears.

## The three-authority setup

A Vancouver residential PV project requires three separate approvals:

1. **City of Vancouver DBL** — building permit (structural, roof access, zoning).
2. **Technical Safety BC** — electrical permit + inspection (the electrical authority is provincial, not municipal).
3. **BC Hydro** — net metering agreement.

None of these talks to the others. Sequencing them serially is the single biggest avoidable delay.

## Cascadia subduction zone

Vancouver sits in seismic hazard category that requires shear + uplift design under design seismic forces, not just wind. APEGBC-licensed P.Eng do this by reflex; out-of-province stamps reliably under-spec.

## P.Eng licensure

BC requires the Professional Engineers and Geoscientists of British Columbia (APEGBC) stamp. US PE stamps are not accepted. There's no reciprocity for solar work. Out-of-province installers either retain a BC P.Eng or partner with a stamp-as-a-service shop licensed in BC.

## Top rejection reasons
1. **Non-APEGBC stamp on structural** — automatic kick.
2. **Seismic calcs missing or under-spec** for Cascadia forces.
3. **BC Hydro net metering filed after the building permit** — adds weeks of dead time.
4. **Technical Safety BC notification absent** — install can't energize without it.

## What we'd change (installer-side)
1. **APEGBC P.Eng on retainer or partner relationship** — non-negotiable.
2. **File all three in parallel** the day design is final. Not sequential.
3. **Pre-design seismic check** by the BC P.Eng — bake it into design QA, not submission QA.

## What Ashlr automates for Vancouver
- Triple-package generation: City of Vancouver + Technical Safety BC + BC Hydro net metering, from one design input.
- Cascadia seismic load values pulled per parcel.
- APEGBC stamp verification — block submissions with US PE stamps.

## Coming next week
AHJ Teardown #11 — Newark (PSE&G + NJ BPU SuSI SREC-II, the East Coast incentive maze).
