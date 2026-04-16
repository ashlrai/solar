---
title: "Phoenix, AZ (APS vs SRP)"
description: "Phoenix building permits are easy. The trap is figuring out which of two utilities serves the address — and they have different interconnection paths."
---

# AHJ Teardown: Phoenix (PDD + APS / SRP)

*Ninth in our weekly AHJ teardown series. Phoenix is a SolarAPP+ jurisdiction and the building permit usually clears in days. The complexity is utility-side: APS or SRP, neither is which.*

---

## TL;DR

- **Turnaround**: ~2 business days for the building permit under SolarAPP+.
- **Portal**: Phoenix PDD; APS or SRP for interconnection.
- **Pain**: **Two utilities serve Phoenix**, sometimes splitting a neighborhood block by block. APS uses one application path + tariff; SRP uses another. Filing the wrong one wastes 1–3 weeks.
- **Gotcha**: SRP's net-metering rate is usage-based and time-of-use; APS is on a separate buy-back rate. Pricing assumptions made under one don't transfer.

## Telling APS from SRP

APS is the regulated investor-owned utility (Arizona Corporation Commission rate-regulated). SRP is a public power district with its own elected board. Address determines which serves you — there's no choice.

Quick check: scrape the Maricopa County parcel-to-utility map at design time, or call the customer line on a recent utility bill.

## Top rejection reasons
1. **Wrong utility application** filed — caught only when the chosen utility says "we don't serve this address". Adds 1–3 weeks.
2. **APS rate-plan mismatch** — projects sized to net-metering economics that don't apply under their post-2017 buy-back rate.
3. **SRP demand-charge tier change** triggered by adding PV; homeowner sees a worse bill on TOU.
4. **Module BOM not on the AZ-approved list** for either utility's fast-track interconnection.

## What we'd change (installer-side)
1. **Parcel-level utility lookup at design time**. Don't trust the homeowner's memory.
2. **Run two pricing models** when the address sits on the APS/SRP boundary blocks; show the homeowner the actual delta.
3. **APS buy-back math** in the proposal, not optimistic net-metering math.

## What Ashlr automates for Phoenix
- Address-to-utility resolution from the parcel map.
- Auto-routes interconnection package to the right utility (APS vs SRP).
- Pre-checks module + inverter BOM against each utility's fast-track approved list.
- Generates the SRP demand-charge tier flag when the PV system would shift the homeowner into a different TOU bracket.

## Coming next week
AHJ Teardown #10 — Vancouver, BC (BC Hydro + seismic + the Pacific Coast PE network).
