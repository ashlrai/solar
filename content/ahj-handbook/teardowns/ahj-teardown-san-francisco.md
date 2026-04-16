---
title: "San Francisco (SFDBI + Historic Overlays)"
description: "Sixth in our weekly AHJ teardown series. San Francisco has the slowest residential PV permit median on the West Coast, and the reason isn't the portal — it's the historic district overlays that resh"
---

# AHJ Teardown: San Francisco (SFDBI + Historic Overlays)

*Sixth in our weekly AHJ teardown series. San Francisco has the slowest residential PV permit median on the West Coast, and the reason isn't the portal — it's the historic district overlays that reshape what you can put on a roof.*

---

## TL;DR

- **Turnaround**: ~24 business days median. Historic-district projects double that.
- **Portal**: SF Department of Building Inspection (SFDBI) online.
- **Pain**: **Historic overlays cover huge swaths of the city** — Mission, Noe Valley, the Haight, Pacific Heights, much of the Castro. Any array visible from the street needs Planning Department sign-off before DBI looks at it.
- **Gotcha**: **Seismic design category D2** compounds structural calc complexity. Out-of-state PEs under-spec on first pass ~60% of the time.

## The historic-overlay gate

Before SFDBI reviews anything, any project in a historic-overlay parcel needs a Certificate of Appropriateness or, at minimum, a planning signoff. That adds a Planning Department queue on top of the building-permit queue.

Neighborhoods with heavy overlays:
- Mission (most of it)
- Noe Valley (post-1906 Victorian context)
- Pacific Heights
- The Haight
- Alamo Square
- Jackson Square

A quick parcel check at design time saves weeks.

## Seismic design category D2

SF sits in seismic design category D2 per ASCE 7. That's stricter than most US jurisdictions. Attachment calcs must account for shear + uplift under design seismic forces, not just wind. CA-licensed PEs do this by reflex; outside PEs miss it.

## Top rejection reasons
1. **Missing Planning signoff on visible array** — adds 6–12 weeks if caught late.
2. **Seismic calcs under-spec** — ~60% of out-of-state PE submissions.
3. **PG&E interconnection application not filed in parallel**.
4. **Title 24 compliance docs incomplete** (CF-1R, CF-2R, CF-3R).

## What we'd change (installer-side)
1. **Pre-application meeting** with Planning for any historic-overlay project. Free, 30 minutes, saves months.
2. **CA PE on staff or on retainer**. Remote PEs can't work here reliably.
3. **Pre-design parcel check** — automate the overlay lookup. We do this.
4. **Filing Cabinet**: CF-1R / CF-2R / CF-3R templates per typical system.

## What Ashlr automates for SFDBI
- Parcel-level historic-overlay lookup at design time — surfaces if Planning signoff will be needed before package assembly.
- ASCE 7 seismic D2 check on attachment spec.
- Title 24 compliance docs pre-filled from design.
- PG&E interconnection package generated alongside SFDBI submission.

## Coming next week
AHJ Teardown #7 — Toronto · ECRA/ESA parallel path + OBC snow loads. Why Canadian solar looks like American solar in fluorescent colors.
