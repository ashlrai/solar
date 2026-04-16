---
title: "Newark, NJ (PSE&G + SuSI SREC-II)"
description: "Newark's permit is straightforward. The actual lever is the NJ BPU SuSI SREC-II registration — file it wrong and the homeowner loses 15 years of $/MWh income."
---

# AHJ Teardown: Newark (Newark Engineering + PSE&G + NJ BPU SuSI)

*Eleventh in our weekly AHJ teardown series. New Jersey leads the US in cumulative SREC payouts per residential install. Newark's building permit is fine. The thing that matters is the BPU SuSI registration, and most installers fumble it.*

---

## TL;DR

- **Turnaround**: ~15 business days for the building permit. The SuSI SREC-II registration runs another 4–8 weeks in parallel.
- **Portals**: Newark Department of Engineering; PSE&G interconnection; NJ BPU SuSI for SREC-II.
- **Pain**: **SuSI SREC-II** (the Successor Solar Incentive program) is what generates 60–80% of the homeowner's lifetime project value. Filing it incorrectly — wrong project sub-type, missing system commissioning date, mismatched address — locks the homeowner into the wrong $/MWh tier for 15 years.
- **Gotcha**: SuSI tiers depend on system size + location + installation type. The wrong sub-type at registration = the wrong income for 15 years.

## SREC-II in 60 seconds

NJ BPU's Successor Solar Incentive program pays a fixed $/MWh to certified solar systems for 15 years from the commissioning date. Tiers:
- Residential rooftop: ~$90/MWh
- Subsection 5 (community solar / small commercial): different schedule
- Net-metered + located in a qualifying overburdened community: bonus tier

A 10 kW residential system generating 12,000 kWh/year × $90/MWh × 15 years = ~$16,200 of project value the homeowner gets only if the SuSI registration is correct.

## Top rejection reasons
1. **SuSI registration with wrong sub-type** — biggest source of installer regret.
2. **PSE&G interconnection app filed sequentially with the building permit**.
3. **Module + inverter not on NJ BPU's approved list** for SuSI eligibility.
4. **Newark structural letter** without sufficient wind exposure detail (Atlantic-coast Category C considerations).

## What we'd change (installer-side)
1. **SuSI registration as a first-class deliverable** — same day the design is final, not after PTO.
2. **Verify NJ BPU module + inverter approved list** before BOM.
3. **PSE&G interconnection in parallel** with the Newark Engineering submission.

## What Ashlr automates for Newark
- SuSI sub-type classification from the design + address (residential rooftop vs Subsection 5 vs overburdened community bonus).
- NJ BPU module/inverter approved-list verification at design time.
- Triple-package: Newark Engineering + PSE&G interconnection + SuSI SREC-II registration.
- Calculates the homeowner's expected SREC income over 15 years for the proposal.

## Coming next week
AHJ Teardown #12 — Chicago (ComEd + Illinois Shines, the Adjustable Block Program).
