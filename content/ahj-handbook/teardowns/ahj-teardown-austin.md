---
title: "City of Austin (and the Austin Energy shadow path)"
description: "Third in our AHJ teardown series. Austin looks easy on paper — medium turnaround, clear portal. The real time sink is the parallel utility interconnection you can't skip."
---

# AHJ Teardown: City of Austin (and the Austin Energy shadow path)

*Third in our AHJ teardown series. Austin looks easy on paper — medium turnaround, clear portal. The real time sink is the parallel utility interconnection you can't skip.*

---

## TL;DR

- **Turnaround**: ~7 business days for the building permit itself.
- **Portal**: Austin Build + Connect (ABC) for building; Austin Energy's GreenChoice / Solar Incentive portal for interconnection.
- **Pain**: Austin is a **municipal utility** — Austin Energy is both the utility and the incentive administrator. The AE interconnection app runs parallel to ABC, and finishing the AE side is the real critical path.
- **Gotcha**: Crews show up, turn on the system, and then discover AE hasn't issued PTO. Weeks of lost revenue.

## The two parallel tracks
1. **Building permit (ABC)** — electrical + structural review. Standard stuff.
2. **Austin Energy interconnection** — application + load study (for larger systems) + PTO issuance.

Track #2 has fewer public SLAs and more back-and-forth. Our internal data shows AE is the critical path in ~70% of Austin projects.

## Top rejection reasons
1. **AE disconnect labeling spec** not matched — their sticker requirements are quietly updated.
2. **Interconnection application filed after the permit** (sequentially instead of parallel). Loses 5–10 days.
3. **Line diagram missing AE-side AC disconnect** in prescribed location.

## What we'd change (installer-side)
1. **File AE interconnection concurrent with ABC**, not after.
2. **Verify AE labeling spec at design time** — not install day.
3. **Build PTO tracking into your CRM** — phone calls beat email for AE status.

## What Ashlr automates
- Generate ABC building package + Austin Energy interconnection package as a single bundle from one input.
- Validate AE labeling spec against current AE standards doc (scraped weekly).
- Track AE application status via portal polling.
- Alert installer ops when AE silence exceeds median+2 days.

## Coming next week
AHJ Teardown #4 — Miami-Dade and the HVHZ product-approval trap.
