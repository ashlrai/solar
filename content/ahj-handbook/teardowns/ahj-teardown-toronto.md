---
title: "Toronto (ECRA/ESA + Hydro)"
description: "Seventh in our weekly AHJ teardown series. First Canadian entry. Ontario's permit process has the shape of US residential solar but with three agencies, one parallel electrical-safety authority, and O"
---

# AHJ Teardown: Toronto (ECRA/ESA + Hydro)

*Seventh in our weekly AHJ teardown series. First Canadian entry. Ontario's permit process has the shape of US residential solar but with three agencies, one parallel electrical-safety authority, and OBC snow loads that eat your attachment calcs.*

---

## TL;DR

- **Turnaround**: ~14 business days median for the building permit. ESA + Toronto Hydro add another 10–15 days of parallel work.
- **Portals**: Toronto Building (online), ESA direct (separate), Toronto Hydro net-metering portal.
- **Pain**: **Three agencies, two electrical authorities** (ESA + Hydro) that don't share sign-offs. OBC snow loads (~1.9 kPa ground snow, higher with drift) under-spec constantly.
- **Gotcha**: ECRA/ESA electrical notification is **separate** from the municipal building permit. It's not optional; it's parallel. Missing it = no connection authorization = no PTO.

## The three-agency setup

A Toronto residential PV install requires:
1. **Toronto Building** — municipal building permit (structural + roof access).
2. **ECRA / Electrical Safety Authority (ESA)** — Ontario Electrical Safety Code notification + connection authorization (OESC Rule 84).
3. **Toronto Hydro** — microFIT-successor net metering application.

None of these sign off as a bundle. Each has its own queue.

## OESC vs NEC

Ontario uses the Ontario Electrical Safety Code, which pulls from CSA C22.1. It's similar to NEC but not identical — conductor sizing tables differ, disconnect labeling is in English (and sometimes French for shared AHJs), and the inspection agency is ESA (not the municipality).

US installers coming north: your NEC-trained crew will 90% transfer, 10% not. The 10% is where rejections cluster.

## OBC snow + wind

Ontario Building Code ground snow for central Toronto is ~1.9 kPa. Outer suburbs push 2.2+. Attachment spacing designed to ASCE 7 inland values under-spec here. Calcs must be by an Ontario-licensed P.Eng (not a US PE).

## Top rejection reasons
1. **Missing ECRA/ESA notification** — not technically a building-permit rejection, but the install can't energize.
2. **Under-spec OBC snow-load attachment** — ~30% of first submissions from out-of-province PEs.
3. **Toronto Hydro net-metering application absent or misrouted** — loses 2–3 weeks.
4. **Non-OIQ/PEO stamp on structural letter** — auto-reject.

## What we'd change (installer-side)
1. **File all three in parallel** on day one. Sequential filing is the single biggest avoidable delay.
2. **Partner with an Ontario-licensed P.Eng**. PEO licensure is enforced here.
3. **OBC snow + drift calc at design time**, not submission time.
4. **OESC 84 connection authorization** checklist baked into pre-install QA.

## What Ashlr automates for Toronto
- Triple-package generation: Toronto Building + ECRA/ESA + Toronto Hydro net metering, from one design input.
- OBC snow-load attachment check with Ontario-specific values, not ASCE 7 defaults.
- OESC vs NEC diff flagging where conductor or disconnect spec deviates.
- P.Eng stamp verification — must be PEO-licensed for Ontario.

## Coming next week
AHJ Teardown #8 — Vancouver · BC seismic + BC Hydro. The West Coast, again, with different codes.
