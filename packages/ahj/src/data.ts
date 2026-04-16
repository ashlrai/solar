/**
 * GENERATED — do not edit by hand.
 *
 * Regenerate with: pnpm --filter @ashlrai/ahj generate
 *
 * Source: data/ahj/<state>/<slug>.json (CC-BY-4.0 — see DATA_LICENSE).
 */

import type { Ahj } from "./schema";

export const AHJS: readonly Ahj[] = [
  {
    "slug": "az-chandler",
    "name": "City of Chandler",
    "state": "AZ",
    "county": "Maricopa",
    "city": "Chandler",
    "population": 280000,
    "contacts": [
      {
        "department": "Development Services",
        "portal_url": "https://www.chandleraz.gov"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 170
      }
    ],
    "rules": [
      {
        "id": "az-cha-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "SRP interconnection typical; verify service territory.",
        "severity": "blocking",
        "source_url": "https://www.srpnet.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "az-mesa",
    "name": "City of Mesa",
    "state": "AZ",
    "county": "Maricopa",
    "city": "Mesa",
    "population": 510000,
    "contacts": [
      {
        "department": "Development Services",
        "portal_url": "https://www.mesaaz.gov/business/development-services"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 165
      }
    ],
    "rules": [
      {
        "id": "az-mesa-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Mesa municipal utility or SRP interconnection depending on service address.",
        "severity": "blocking",
        "source_url": "https://www.mesaaz.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "az-phoenix",
    "name": "City of Phoenix",
    "state": "AZ",
    "county": "Maricopa",
    "city": "Phoenix",
    "population": 1608000,
    "contacts": [
      {
        "department": "Planning & Development Department — PV",
        "portal_url": "https://www.phoenix.gov/pdd"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "labels_placards"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 175
      }
    ],
    "rules": [
      {
        "id": "az-phx-001",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "APS or SRP interconnection pre-approval required before final inspection.",
        "severity": "blocking",
        "source_url": "https://www.phoenix.gov/pdd",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 2,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "az-scottsdale",
    "name": "City of Scottsdale",
    "state": "AZ",
    "county": "Maricopa",
    "city": "Scottsdale",
    "population": 242000,
    "contacts": [
      {
        "department": "Planning & Development",
        "portal_url": "https://www.scottsdaleaz.gov"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 175
      }
    ],
    "rules": [
      {
        "id": "az-sco-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "APS or SRP interconnection based on service address.",
        "severity": "blocking",
        "source_url": "https://www.scottsdaleaz.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "az-tucson",
    "name": "City of Tucson",
    "state": "AZ",
    "county": "Pima",
    "city": "Tucson",
    "population": 543000,
    "contacts": [
      {
        "department": "Planning and Development Services",
        "portal_url": "https://www.tucsonaz.gov/pdsd"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 160
      }
    ],
    "rules": [
      {
        "id": "az-tuc-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "TEP (Tucson Electric Power) interconnection application required.",
        "severity": "blocking",
        "source_url": "https://www.tep.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-ab-calgary",
    "name": "City of Calgary",
    "state": "AB",
    "country": "CA",
    "city": "Calgary",
    "population": 1306000,
    "contacts": [
      {
        "department": "Planning & Development",
        "portal_url": "https://www.calgary.ca/pda/pd/home-building/building-permits.html"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 175,
        "notes": "CAD ~240"
      }
    ],
    "rules": [
      {
        "id": "ca-ab-cal-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Alberta Building Code snow load (1.0-1.2 kPa); P.Eng stamp required (APEGA).",
        "severity": "blocking",
        "source_url": "https://www.calgary.ca",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-ab-cal-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "ENMAX or Direct Energy micro-generation application (Alberta Utilities Commission rules).",
        "severity": "blocking",
        "source_url": "https://www.enmax.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 16,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-anaheim",
    "name": "City of Anaheim",
    "state": "CA",
    "county": "Orange",
    "city": "Anaheim",
    "population": 346000,
    "contacts": [
      {
        "department": "Planning & Building",
        "portal_url": "https://www.anaheim.net/1167/Permits-Inspections"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 255
      }
    ],
    "rules": [
      {
        "id": "ca-ana-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Anaheim Public Utilities (municipal) interconnection — separate track from SCE service areas.",
        "severity": "blocking",
        "source_url": "https://www.anaheim.net/Utilities",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 4,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-bc-vancouver",
    "name": "City of Vancouver",
    "state": "BC",
    "country": "CA",
    "city": "Vancouver",
    "population": 662000,
    "contacts": [
      {
        "department": "Development, Buildings & Licensing",
        "portal_url": "https://vancouver.ca/home-property-development/applying-for-a-building-permit.aspx"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "bc_hydro_net_metering_application"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 250,
        "notes": "CAD ~340; verify"
      }
    ],
    "rules": [
      {
        "id": "ca-bc-van-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "BC Building Code seismic design (Cascadia subduction zone); P.Eng stamp required (licensed in BC).",
        "severity": "blocking",
        "source_url": "https://vancouver.ca/",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-bc-van-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "BC Hydro Net Metering Agreement; Technical Safety BC electrical permit separate from building permit.",
        "severity": "blocking",
        "source_url": "https://www.bchydro.com/powersmart/residential/net-metering.html",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 22,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-fresno",
    "name": "City of Fresno",
    "state": "CA",
    "county": "Fresno",
    "city": "Fresno",
    "population": 545000,
    "contacts": [
      {
        "department": "Planning & Development",
        "portal_url": "https://www.fresno.gov/pdm"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 235
      }
    ],
    "rules": [
      {
        "id": "ca-fre-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "PG&E interconnection standard; Title 24 compliance required.",
        "severity": "blocking",
        "source_url": "https://www.fresno.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 4,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-long-beach",
    "name": "City of Long Beach",
    "state": "CA",
    "county": "Los Angeles",
    "city": "Long Beach",
    "population": 456000,
    "contacts": [
      {
        "department": "Long Beach Development Services",
        "portal_url": "https://www.longbeach.gov/lbds"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 285
      }
    ],
    "rules": [
      {
        "id": "ca-lb-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Long Beach has its own municipal utility review for parts of the city (Long Beach Energy).",
        "severity": "blocking",
        "source_url": "https://www.longbeach.gov/energy",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 4,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-los-angeles-city",
    "name": "City of Los Angeles",
    "state": "CA",
    "county": "Los Angeles",
    "city": "Los Angeles",
    "fips": "0644000",
    "population": 3820000,
    "contacts": [
      {
        "department": "LADBS — Residential Plan Check (Solar)",
        "portal_url": "https://www.ladbs.org/services/online-services/epermit-ladbs",
        "phone": "213-482-0000"
      },
      {
        "department": "LADWP — Solar Incentive Program",
        "portal_url": "https://ladwp.com/sipbill"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "ladbs_application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "structural_calculations",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "labels_placards",
      "ladwp_interconnection_application"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 450,
        "formula": "Base $350 + plan check",
        "notes": "Verify with LADBS Fee Estimator before submission."
      }
    ],
    "rules": [
      {
        "id": "ca-lac-001",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "Roof access pathways per CRC R331 / CFC 1205: minimum 36\" pathways from eave to ridge on each slope with array.",
        "code_reference": "CFC 1205",
        "severity": "blocking",
        "source_url": "https://www.ladbs.org/docs/default-source/publications/information-bulletins/building-code/ib-p-bc-2020-111-residential-rooftop-photovoltaic-systems.pdf",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-lac-002",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "Rapid shutdown device required at or within 1ft of array per NEC 690.12.",
        "code_reference": "NEC 690.12",
        "severity": "blocking",
        "source_url": "https://www.ladbs.org/docs/default-source/publications/information-bulletins/electrical-code/ib-p-ec-2020-007-photovoltaic-systems.pdf",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-lac-003",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Wet-stamped structural calculations by CA-licensed engineer for arrays > 4 kW or on unconventional roofs.",
        "severity": "likely_rejection",
        "source_url": "https://www.ladbs.org/",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "p90_business_days": 14,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage + LADBS posted SLAs"
      }
    ],
    "solarapp_plus_eligible": true,
    "notes": "SolarAPP+ eligible for many residential configurations — instant review. Fall back to LADBS plan check for batteries, ground mounts, or MPU.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-oakland",
    "name": "City of Oakland",
    "state": "CA",
    "county": "Alameda",
    "city": "Oakland",
    "population": 440000,
    "contacts": [
      {
        "department": "Oakland Planning & Building Department",
        "portal_url": "https://www.oaklandca.gov/topics/building-permits"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 290
      }
    ],
    "rules": [
      {
        "id": "ca-oak-001",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "NEC 690.12 rapid shutdown; PG&E interconnection parallel.",
        "severity": "blocking",
        "source_url": "https://www.oaklandca.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 5,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-on-ottawa",
    "name": "City of Ottawa",
    "state": "ON",
    "country": "CA",
    "city": "Ottawa",
    "population": 1017000,
    "contacts": [
      {
        "department": "Building Code Services",
        "portal_url": "https://ottawa.ca/en/planning-development-and-construction/building-permits"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "ecra_esa_notification"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 210,
        "notes": "CAD ~285"
      }
    ],
    "rules": [
      {
        "id": "ca-on-ott-001",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "ECRA/ESA notification required (OESC); Hydro Ottawa net metering application parallel.",
        "severity": "blocking",
        "source_url": "https://esasafe.com",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-on-ott-002",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "OBC snow (higher than Toronto, ~2.4 kPa) + P.Eng stamp.",
        "severity": "blocking",
        "source_url": "https://ottawa.ca",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 15,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-on-toronto",
    "name": "City of Toronto",
    "state": "ON",
    "country": "CA",
    "city": "Toronto",
    "population": 2794000,
    "contacts": [
      {
        "department": "Toronto Building",
        "portal_url": "https://www.toronto.ca/services-payments/building-construction/"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "ecra_esa_notification"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 385,
        "notes": "CAD ~520; verify current rate"
      }
    ],
    "rules": [
      {
        "id": "ca-on-tor-001",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "ECRA/ESA notification + connection authorization required (Ontario Electrical Safety Code rule 84).",
        "code_reference": "OESC 84",
        "severity": "blocking",
        "source_url": "https://esasafe.com/",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-on-tor-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Toronto Hydro microFIT/net metering application parallel with permit.",
        "severity": "blocking",
        "source_url": "https://www.torontohydro.com",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-on-tor-003",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "OBC snow load (1-in-50 year ground snow 1.9 kPa) + stamped letter by P.Eng licensed in Ontario.",
        "severity": "blocking",
        "source_url": "https://www.toronto.ca/services-payments/building-construction/",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 14,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "Canadian AHJ. Wind/snow loads per OBC; electrical inspection by ESA (separate from building permit).",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-qc-montreal",
    "name": "Ville de Montréal",
    "state": "QC",
    "country": "CA",
    "city": "Montréal",
    "population": 1763000,
    "contacts": [
      {
        "department": "Service de l'urbanisme et de la mobilité",
        "portal_url": "https://montreal.ca/"
      }
    ],
    "submission_channels": [
      "online_portal",
      "in_person"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "hydro_quebec_mesurage_net_request"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 200,
        "notes": "CAD ~270"
      }
    ],
    "rules": [
      {
        "id": "ca-qc-mtl-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Hydro-Québec Mesurage net / auto-production — separate application with its own timeline.",
        "severity": "blocking",
        "source_url": "https://www.hydroquebec.com/residential/customer-space/production/net-metering.html",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-qc-mtl-002",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Code de construction du Québec chapitre Bâtiment; ingénieur membre OIQ required for PE stamp.",
        "severity": "blocking",
        "source_url": "https://www.rbq.gouv.qc.ca",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 24,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "Documentation often bilingual; fr-CA UI supported via i18n scaffold.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-riverside",
    "name": "City of Riverside",
    "state": "CA",
    "county": "Riverside",
    "city": "Riverside",
    "population": 317000,
    "contacts": [
      {
        "department": "Community Development",
        "portal_url": "https://riversideca.gov/cedd"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 240
      }
    ],
    "rules": [
      {
        "id": "ca-riv-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Riverside Public Utilities (municipal) interconnection required.",
        "severity": "blocking",
        "source_url": "https://riversideca.gov/utilities",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 4,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-sacramento",
    "name": "City of Sacramento",
    "state": "CA",
    "county": "Sacramento",
    "city": "Sacramento",
    "population": 525000,
    "contacts": [
      {
        "department": "Sacramento Community Development Department",
        "portal_url": "https://www.cityofsacramento.org/community-development"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 260
      }
    ],
    "rules": [
      {
        "id": "ca-sac-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "SMUD interconnection application + SMUD-specific disconnect labeling.",
        "severity": "blocking",
        "source_url": "https://www.smud.org",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 4,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-san-diego-city",
    "name": "City of San Diego",
    "state": "CA",
    "county": "San Diego",
    "city": "San Diego",
    "population": 1381000,
    "contacts": [
      {
        "department": "Development Services Department",
        "portal_url": "https://www.sandiego.gov/development-services"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "labels_placards"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 325
      }
    ],
    "rules": [
      {
        "id": "ca-sd-001",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "CFC 1205 pathways + Title 24 energy compliance docs required.",
        "severity": "blocking",
        "source_url": "https://www.sandiego.gov/development-services",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-san-francisco",
    "name": "City and County of San Francisco",
    "state": "CA",
    "county": "San Francisco",
    "city": "San Francisco",
    "population": 808000,
    "contacts": [
      {
        "department": "SF Department of Building Inspection",
        "portal_url": "https://sfdbi.org"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "structural_calculations",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 520
      }
    ],
    "rules": [
      {
        "id": "ca-sf-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Seismic + wind calcs required per SF amendments; stamped by CA PE.",
        "severity": "blocking",
        "source_url": "https://sfdbi.org/solar-permits",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ca-sf-002",
        "permit_type": "residential_pv",
        "category": "setback",
        "description": "Historic district and parapet rules apply in many SF neighborhoods; planning-department sign-off often needed.",
        "severity": "likely_rejection",
        "source_url": "https://sfplanning.org",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 24,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "One of the slowest CA AHJs — pre-application meetings recommended for historic districts.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ca-san-jose",
    "name": "City of San Jose",
    "state": "CA",
    "county": "Santa Clara",
    "city": "San Jose",
    "population": 1013000,
    "contacts": [
      {
        "department": "Planning, Building & Code Enforcement",
        "portal_url": "https://www.sanjoseca.gov/your-government/departments/planning-building-code-enforcement"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 310
      }
    ],
    "rules": [
      {
        "id": "ca-sj-001",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "PG&E interconnection application + Title 24 Part 6 PV sizing rules.",
        "severity": "blocking",
        "source_url": "https://www.sanjoseca.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 3,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "co-denver",
    "name": "City and County of Denver",
    "state": "CO",
    "county": "Denver",
    "city": "Denver",
    "population": 716000,
    "contacts": [
      {
        "department": "Denver Community Planning and Development",
        "portal_url": "https://www.denvergov.org/Government/Agencies-Departments-Offices/Community-Planning-and-Development"
      }
    ],
    "submission_channels": [
      "online_portal",
      "solarapp_plus"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 230
      }
    ],
    "rules": [
      {
        "id": "co-den-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Snow load calcs required (40 psf ground snow in most of Denver county).",
        "severity": "blocking",
        "source_url": "https://www.denvergov.org",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "co-den-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Xcel Energy interconnection + net metering application.",
        "severity": "blocking",
        "source_url": "https://www.xcelenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 5,
        "last_updated": "2026-04-14",
        "source": "SolarAPP+ coverage"
      }
    ],
    "solarapp_plus_eligible": true,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-fort-lauderdale",
    "name": "City of Fort Lauderdale",
    "state": "FL",
    "county": "Broward",
    "city": "Fort Lauderdale",
    "population": 183000,
    "contacts": [
      {
        "department": "Department of Sustainable Development",
        "portal_url": "https://www.fortlauderdale.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations",
      "noa_approval_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 265
      }
    ],
    "rules": [
      {
        "id": "fl-ftl-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Broward HVHZ — 170 mph design wind; Miami-Dade NOA products required.",
        "severity": "blocking",
        "source_url": "https://www.broward.org",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 19,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "Broward is part of the HVHZ envelope with Miami-Dade; NOA and wind rules apply.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-jacksonville",
    "name": "City of Jacksonville / Duval County",
    "state": "FL",
    "county": "Duval",
    "city": "Jacksonville",
    "population": 950000,
    "contacts": [
      {
        "department": "Building Inspection Division",
        "portal_url": "https://www.coj.net"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 195
      }
    ],
    "rules": [
      {
        "id": "fl-jax-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "JEA (municipal utility) interconnection application required with its own approval path.",
        "severity": "blocking",
        "source_url": "https://www.jea.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 13,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-miami-dade",
    "name": "Miami-Dade County",
    "state": "FL",
    "county": "Miami-Dade",
    "population": 2700000,
    "contacts": [
      {
        "department": "Miami-Dade Permitting, Environment & Regulatory Affairs",
        "portal_url": "https://www.miamidade.gov/permits/"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "wind_load_calculations",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "noa_approval_letter",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 285
      }
    ],
    "rules": [
      {
        "id": "fl-mdc-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "HVHZ (High Velocity Hurricane Zone): 175 mph wind load design; Miami-Dade NOA product approvals required for modules + racking.",
        "severity": "blocking",
        "source_url": "https://www.miamidade.gov/building/product-control.asp",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 21,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "HVHZ rules are strict — using non-NOA product is an automatic rejection. Maintain a verified NOA product list.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-orlando",
    "name": "City of Orlando",
    "state": "FL",
    "county": "Orange",
    "city": "Orlando",
    "population": 320000,
    "contacts": [
      {
        "department": "Permitting Services",
        "portal_url": "https://www.orlando.gov/Building-Development/Permitting-Services"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 215
      }
    ],
    "rules": [
      {
        "id": "fl-orl-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "FL Building Code wind-load design (typically 140 mph outside HVHZ, verify per zone).",
        "severity": "blocking",
        "source_url": "https://www.orlando.gov",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "fl-orl-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "OUC (Orlando Utilities Commission) interconnection — municipal utility, separate SLA.",
        "severity": "blocking",
        "source_url": "https://www.ouc.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 14,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-st-petersburg",
    "name": "City of St. Petersburg",
    "state": "FL",
    "county": "Pinellas",
    "city": "St. Petersburg",
    "population": 259000,
    "contacts": [
      {
        "department": "Development Review Services",
        "portal_url": "https://www.stpete.org"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 200
      }
    ],
    "rules": [
      {
        "id": "fl-stp-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Coastal exposure; 140 mph design wind typical per FL Building Code.",
        "severity": "blocking",
        "source_url": "https://www.stpete.org",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 13,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "fl-tampa",
    "name": "City of Tampa",
    "state": "FL",
    "county": "Hillsborough",
    "city": "Tampa",
    "population": 404000,
    "contacts": [
      {
        "department": "Construction Services",
        "portal_url": "https://www.tampa.gov/construction-services"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 210
      }
    ],
    "rules": [
      {
        "id": "fl-tpa-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "FL Building Code wind-load design with Tampa coastal exposure categories; Category 1 for near-coast properties.",
        "severity": "blocking",
        "source_url": "https://www.tampa.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 12,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ga-atlanta",
    "name": "City of Atlanta",
    "state": "GA",
    "county": "Fulton",
    "city": "Atlanta",
    "population": 498000,
    "contacts": [
      {
        "department": "Office of Buildings",
        "portal_url": "https://www.atlantaga.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 180
      }
    ],
    "rules": [
      {
        "id": "ga-atl-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Georgia Power interconnection (monopoly utility); net metering cap rules apply.",
        "severity": "blocking",
        "source_url": "https://www.georgiapower.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 14,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "hi-honolulu",
    "name": "City & County of Honolulu",
    "state": "HI",
    "county": "Honolulu",
    "city": "Honolulu",
    "population": 350000,
    "contacts": [
      {
        "department": "Department of Planning and Permitting",
        "portal_url": "https://www.honoluludpp.org"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "wind_load_calculations"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 310
      }
    ],
    "rules": [
      {
        "id": "hi-hnl-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Hurricane wind exposure; stainless fasteners required in coastal zones.",
        "severity": "blocking",
        "source_url": "https://www.honoluludpp.org",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "hi-hnl-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Hawaiian Electric interconnection; storage-first market — pure-export queues are slow.",
        "severity": "blocking",
        "source_url": "https://www.hawaiianelectric.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 28,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "il-chicago",
    "name": "City of Chicago",
    "state": "IL",
    "county": "Cook",
    "city": "Chicago",
    "population": 2665000,
    "contacts": [
      {
        "department": "Department of Buildings",
        "portal_url": "https://www.chicago.gov/buildings"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 230
      }
    ],
    "rules": [
      {
        "id": "il-chi-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Ground snow load 25-30 psf; Chicago Building Code amendments on top of IBC.",
        "severity": "blocking",
        "source_url": "https://www.chicago.gov",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "il-chi-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "ComEd interconnection + Illinois Shines (Adjustable Block Program) for SRECs.",
        "severity": "blocking",
        "source_url": "https://illinoisshines.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 22,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ma-boston",
    "name": "City of Boston",
    "state": "MA",
    "county": "Suffolk",
    "city": "Boston",
    "population": 650000,
    "contacts": [
      {
        "department": "Inspectional Services Department",
        "portal_url": "https://www.boston.gov/departments/inspectional-services"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "fire_department_review"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 220
      }
    ],
    "rules": [
      {
        "id": "ma-bos-001",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "Boston Fire Department rooftop access review required; tight geometry on row houses causes frequent redesigns.",
        "severity": "blocking",
        "source_url": "https://www.boston.gov",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ma-bos-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Eversource interconnection; SMART block tracking for incentive lock-in.",
        "severity": "advisory",
        "source_url": "https://www.mass.gov/smart",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 18,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "nc-charlotte",
    "name": "City of Charlotte / Mecklenburg County",
    "state": "NC",
    "county": "Mecklenburg",
    "city": "Charlotte",
    "population": 875000,
    "contacts": [
      {
        "department": "Code Enforcement",
        "portal_url": "https://www.mecknc.gov/LUESA/CodeEnforcement"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 145
      }
    ],
    "rules": [
      {
        "id": "nc-clt-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Duke Energy interconnection (NC Utilities Commission rules).",
        "severity": "blocking",
        "source_url": "https://www.duke-energy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 10,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "nc-raleigh",
    "name": "City of Raleigh",
    "state": "NC",
    "county": "Wake",
    "city": "Raleigh",
    "population": 480000,
    "contacts": [
      {
        "department": "Development Services Customer Service Center",
        "portal_url": "https://raleighnc.gov/services/business/how-apply-building-permit"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 140
      }
    ],
    "rules": [
      {
        "id": "nc-ral-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Duke Energy Progress interconnection required before PTO.",
        "severity": "blocking",
        "source_url": "https://www.duke-energy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 9,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "nj-edison",
    "name": "Township of Edison",
    "state": "NJ",
    "county": "Middlesex",
    "city": "Edison",
    "population": 107000,
    "contacts": [
      {
        "department": "Construction Code Enforcement",
        "portal_url": "https://www.edisonnj.org"
      }
    ],
    "submission_channels": [
      "online_portal",
      "email"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 150
      }
    ],
    "rules": [
      {
        "id": "nj-edn-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "PSE&G interconnection + NJ BPU SuSI SREC-II registration.",
        "severity": "blocking",
        "source_url": "https://njcleanenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 13,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "nj-jersey-city",
    "name": "Jersey City",
    "state": "NJ",
    "county": "Hudson",
    "city": "Jersey City",
    "population": 292000,
    "contacts": [
      {
        "department": "Division of Housing, Economic Development & Commerce",
        "portal_url": "https://www.jerseycitynj.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 165
      }
    ],
    "rules": [
      {
        "id": "nj-jc-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "PSE&G interconnection + NJ BPU SuSI SREC-II registration.",
        "severity": "blocking",
        "source_url": "https://njcleanenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 14,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "nj-newark",
    "name": "City of Newark",
    "state": "NJ",
    "county": "Essex",
    "city": "Newark",
    "population": 307000,
    "contacts": [
      {
        "department": "Newark Department of Engineering",
        "portal_url": "https://www.newarknj.gov"
      }
    ],
    "submission_channels": [
      "online_portal",
      "email"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 155
      }
    ],
    "rules": [
      {
        "id": "nj-nwk-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "PSE&G interconnection + NJ BPU SuSI registration for SREC-II.",
        "severity": "blocking",
        "source_url": "https://njcleanenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 15,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ny-buffalo",
    "name": "City of Buffalo",
    "state": "NY",
    "county": "Erie",
    "city": "Buffalo",
    "population": 276000,
    "contacts": [
      {
        "department": "Permit & Inspection Services",
        "portal_url": "https://www.buffalony.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 170
      }
    ],
    "rules": [
      {
        "id": "ny-buf-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "High ground snow load (50 psf typical); snow drift calcs often required.",
        "severity": "blocking",
        "source_url": "https://www.buffalony.gov",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ny-buf-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "National Grid interconnection + NY-Sun MW Block incentive registration.",
        "severity": "blocking",
        "source_url": "https://www.nyserda.ny.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 15,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ny-new-york-city",
    "name": "New York City",
    "state": "NY",
    "city": "New York",
    "population": 8260000,
    "contacts": [
      {
        "department": "NYC Department of Buildings",
        "portal_url": "https://www.nyc.gov/site/buildings/index.page"
      },
      {
        "department": "FDNY Solar Unit",
        "portal_url": "https://www.nyc.gov/site/fdny"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "dob_now_application",
      "site_plan",
      "electrical_diagram_single_line",
      "structural_calculations",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "fdny_approval_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 380,
        "notes": "DOB + FDNY review combined"
      }
    ],
    "rules": [
      {
        "id": "ny-nyc-001",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "FDNY rooftop access requirements (9ft perimeter clearance on most roofs). Non-negotiable; primary rejection cause in NYC.",
        "severity": "blocking",
        "source_url": "https://www.nyc.gov/site/fdny/business/all-certifications/certificate-of-fitness-pv-systems.page",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ny-nyc-002",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Stamped structural calcs by NY PE; many pre-1961 buildings require ASCE 7 upgrade analysis.",
        "severity": "blocking",
        "source_url": "https://www.nyc.gov/site/buildings",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 28,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "Among the toughest US AHJs — dual DOB+FDNY review, strict setback rules, Con Edison interconnection in parallel.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "or-portland",
    "name": "City of Portland",
    "state": "OR",
    "county": "Multnomah",
    "city": "Portland",
    "population": 641000,
    "contacts": [
      {
        "department": "Bureau of Development Services",
        "portal_url": "https://www.portland.gov/bds"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 235
      }
    ],
    "rules": [
      {
        "id": "or-pdx-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Oregon seismic standards (Cascadia subduction zone) — PE stamp required.",
        "severity": "blocking",
        "source_url": "https://www.portland.gov/bds",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "or-pdx-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "PGE or Pacific Power interconnection by service territory.",
        "severity": "blocking",
        "source_url": "https://portlandgeneral.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 16,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-arlington",
    "name": "City of Arlington",
    "state": "TX",
    "county": "Tarrant",
    "city": "Arlington",
    "population": 394000,
    "contacts": [
      {
        "department": "Community Development",
        "portal_url": "https://www.arlingtontx.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 160
      }
    ],
    "rules": [
      {
        "id": "tx-arl-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Oncor interconnection; 100 mph design wind typical.",
        "severity": "blocking",
        "source_url": "https://www.oncor.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 11,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-austin",
    "name": "City of Austin",
    "state": "TX",
    "county": "Travis",
    "city": "Austin",
    "population": 974000,
    "contacts": [
      {
        "department": "Development Services Department — Residential Review",
        "portal_url": "https://abc.austintexas.gov/web/permit/public-search-other",
        "phone": "512-978-4000"
      },
      {
        "department": "Austin Energy Green Building — Solar",
        "portal_url": "https://austinenergy.com/energy-efficiency/solar-solutions"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "austin_solar_application",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "structural_letter",
      "austin_energy_interconnection_app"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 210,
        "notes": "Combined building + electrical; verify 2026 rates."
      }
    ],
    "rules": [
      {
        "id": "tx-atx-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Austin Energy interconnection application required in parallel; AE disconnect labeling per AE Solar Standards.",
        "severity": "blocking",
        "source_url": "https://austinenergy.com/green-power/solar/interconnection-requirements",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "tx-atx-002",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "Setbacks per 2021 IRC R324 + Austin amendments; 36\" ridge pathway on hipped roofs with array.",
        "severity": "blocking",
        "source_url": "https://library.municode.com/tx/austin/codes/code_of_ordinances",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 7,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "Austin Energy is a municipal utility — interconnection runs alongside building permit, not after. Parallelize.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-dallas",
    "name": "City of Dallas",
    "state": "TX",
    "county": "Dallas",
    "city": "Dallas",
    "population": 1300000,
    "contacts": [
      {
        "department": "Building Inspection",
        "portal_url": "https://dallascityhall.com/departments/sustainabledevelopment"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 175
      }
    ],
    "rules": [
      {
        "id": "tx-dal-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Oncor interconnection application parallel with building permit.",
        "severity": "blocking",
        "source_url": "https://www.oncor.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 12,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-el-paso",
    "name": "City of El Paso",
    "state": "TX",
    "county": "El Paso",
    "city": "El Paso",
    "population": 678000,
    "contacts": [
      {
        "department": "Planning & Inspections",
        "portal_url": "https://www.elpasotexas.gov/planning-and-inspections"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 140
      }
    ],
    "rules": [
      {
        "id": "tx-elp-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "El Paso Electric interconnection application — higher altitude exposure category considerations.",
        "severity": "blocking",
        "source_url": "https://www.epelectric.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 10,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-fort-worth",
    "name": "City of Fort Worth",
    "state": "TX",
    "county": "Tarrant",
    "city": "Fort Worth",
    "population": 956000,
    "contacts": [
      {
        "department": "Development Services Department",
        "portal_url": "https://www.fortworthtexas.gov/departments/developmentservices"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 165
      }
    ],
    "rules": [
      {
        "id": "tx-ftw-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Oncor or TriCounty Electric interconnection depending on territory.",
        "severity": "blocking",
        "source_url": "https://www.oncor.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 11,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-houston",
    "name": "City of Houston",
    "state": "TX",
    "county": "Harris",
    "city": "Houston",
    "population": 2300000,
    "contacts": [
      {
        "department": "Houston Permitting Center",
        "portal_url": "https://www.houstonpermittingcenter.org"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 155
      }
    ],
    "rules": [
      {
        "id": "tx-hou-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "CenterPoint Energy interconnection agreement required before final inspection.",
        "severity": "blocking",
        "source_url": "https://www.centerpointenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 9,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-plano",
    "name": "City of Plano",
    "state": "TX",
    "county": "Collin",
    "city": "Plano",
    "population": 290000,
    "contacts": [
      {
        "department": "Building Inspections",
        "portal_url": "https://www.plano.gov"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 155
      }
    ],
    "rules": [
      {
        "id": "tx-plo-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Oncor interconnection; Plano HOA notifications common prior to permit.",
        "severity": "advisory",
        "source_url": "https://www.plano.gov",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 9,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "tx-san-antonio",
    "name": "City of San Antonio",
    "state": "TX",
    "county": "Bexar",
    "city": "San Antonio",
    "population": 1472000,
    "contacts": [
      {
        "department": "Development Services Department",
        "portal_url": "https://www.sa.gov/Directory/Departments/DSD"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 150
      }
    ],
    "rules": [
      {
        "id": "tx-sa-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "CPS Energy interconnection (municipal utility) — separate rebate program with its own timeline.",
        "severity": "blocking",
        "source_url": "https://www.cpsenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 8,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "ut-salt-lake-city",
    "name": "Salt Lake City",
    "state": "UT",
    "county": "Salt Lake",
    "city": "Salt Lake City",
    "population": 200000,
    "contacts": [
      {
        "department": "Building Services",
        "portal_url": "https://www.slc.gov/permits"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 195
      }
    ],
    "rules": [
      {
        "id": "ut-slc-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "High snow load (30-45 psf); seismic design considerations.",
        "severity": "blocking",
        "source_url": "https://www.slc.gov",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "ut-slc-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Rocky Mountain Power interconnection.",
        "severity": "blocking",
        "source_url": "https://www.rockymountainpower.net",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 11,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-alexandria",
    "name": "City of Alexandria",
    "state": "VA",
    "city": "Alexandria",
    "population": 160000,
    "contacts": [
      {
        "department": "Code Administration",
        "portal_url": "https://www.alexandriava.gov/Code"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 145
      }
    ],
    "rules": [
      {
        "id": "va-alx-001",
        "permit_type": "residential_pv",
        "category": "setback",
        "description": "Historic district overlay in Old Town requires Board of Architectural Review approval.",
        "severity": "blocking",
        "source_url": "https://www.alexandriava.gov/BAR",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 18,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-arlington-county",
    "name": "Arlington County",
    "state": "VA",
    "county": "Arlington",
    "contacts": [
      {
        "department": "Inspection Services Division",
        "portal_url": "https://permits.arlingtonva.us"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "labels_placards"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 140
      }
    ],
    "rules": [
      {
        "id": "va-arl-001",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "Arlington Fire Marshal review required for arrays > 10 kW.",
        "severity": "likely_rejection",
        "source_url": "https://www.arlingtonva.us",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 11,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-fairfax-county",
    "name": "Fairfax County",
    "state": "VA",
    "county": "Fairfax",
    "fips": "51059",
    "contacts": [
      {
        "department": "Land Development Services — Building Plan Review",
        "portal_url": "https://www.fairfaxcounty.gov/landdevelopment/",
        "phone": "703-222-0801"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter",
      "racking_datasheet",
      "labels_placards"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 120,
        "notes": "Placeholder — verify before first submission"
      }
    ],
    "rules": [
      {
        "id": "va-fairfax-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Structural letter stamped by a Virginia-licensed PE is required for all roof-mount arrays.",
        "severity": "blocking",
        "source_url": "https://www.fairfaxcounty.gov/landdevelopment/solar",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "va-fairfax-002",
        "permit_type": "residential_pv",
        "category": "electrical",
        "description": "Main service panel upgrade or supply-side tap evaluation required if existing busbar + breaker sum exceeds 120% rule (NEC 705.12).",
        "code_reference": "NEC 705.12",
        "severity": "likely_rejection",
        "source_url": "https://www.fairfaxcounty.gov/landdevelopment/",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "va-fairfax-003",
        "permit_type": "residential_pv",
        "category": "fire",
        "description": "IRC R324.7 roof access pathways; confirm with Fairfax County Fire Marshal if array covers >33% of roof area.",
        "severity": "likely_rejection",
        "source_url": "https://www.fairfaxcounty.gov/fire-ems/",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 10,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "notes": "SEED — placeholder values. First week's task is to replace every unverified field with cited sources.",
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-loudoun-county",
    "name": "Loudoun County",
    "state": "VA",
    "county": "Loudoun",
    "contacts": [
      {
        "department": "Building & Development",
        "portal_url": "https://www.loudoun.gov/lola"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "structural_letter",
      "module_datasheet",
      "inverter_datasheet",
      "racking_datasheet"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 130
      }
    ],
    "rules": [
      {
        "id": "va-loudoun-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "PE-stamped structural letter required; Loudoun accepts digital stamps per VA state board.",
        "severity": "blocking",
        "source_url": "https://www.loudoun.gov/solar",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 8,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-richmond",
    "name": "City of Richmond",
    "state": "VA",
    "city": "Richmond",
    "population": 226000,
    "contacts": [
      {
        "department": "Permits & Inspections",
        "portal_url": "https://eservices.richmondgov.com"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 120
      }
    ],
    "rules": [
      {
        "id": "va-rva-001",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Dominion Energy interconnection application parallel with building permit.",
        "severity": "blocking",
        "source_url": "https://www.dominionenergy.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 9,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "va-virginia-beach",
    "name": "City of Virginia Beach",
    "state": "VA",
    "city": "Virginia Beach",
    "population": 457000,
    "contacts": [
      {
        "department": "Permits & Inspections",
        "portal_url": "https://www.vbgov.com"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 135
      }
    ],
    "rules": [
      {
        "id": "va-vb-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Coastal wind exposure (Category D) typical; wind loads higher than inland VA counties.",
        "severity": "blocking",
        "source_url": "https://www.vbgov.com",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 12,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  },
  {
    "slug": "wa-seattle",
    "name": "City of Seattle",
    "state": "WA",
    "county": "King",
    "city": "Seattle",
    "population": 733000,
    "contacts": [
      {
        "department": "Seattle Department of Construction and Inspections",
        "portal_url": "https://www.seattle.gov/sdci"
      }
    ],
    "submission_channels": [
      "online_portal"
    ],
    "required_documents": [
      "application_form",
      "site_plan",
      "electrical_diagram_single_line",
      "module_datasheet",
      "inverter_datasheet",
      "structural_letter"
    ],
    "fees": [
      {
        "permit_type": "residential_pv",
        "amount_usd": 290
      }
    ],
    "rules": [
      {
        "id": "wa-sea-001",
        "permit_type": "residential_pv",
        "category": "structural",
        "description": "Seismic design category D2; Seattle energy code amendments on top of WA state.",
        "severity": "blocking",
        "source_url": "https://www.seattle.gov/sdci",
        "retrieved_at": "2026-04-14"
      },
      {
        "id": "wa-sea-002",
        "permit_type": "residential_pv",
        "category": "interconnection",
        "description": "Seattle City Light (municipal) interconnection — separate from PSE service areas.",
        "severity": "blocking",
        "source_url": "https://www.seattle.gov/city-light",
        "retrieved_at": "2026-04-14"
      }
    ],
    "turnaround": [
      {
        "permit_type": "residential_pv",
        "median_business_days": 20,
        "last_updated": "2026-04-14",
        "source": "internal_estimate"
      }
    ],
    "solarapp_plus_eligible": false,
    "last_verified": "2026-04-14"
  }
] as const;

export const AHJS_BY_SLUG: Readonly<Record<string, Ahj>> = Object.freeze(
  Object.fromEntries(AHJS.map((a) => [a.slug, a])),
);
