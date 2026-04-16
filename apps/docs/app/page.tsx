import Link from "next/link";
import { coverage } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";
import { listClauses } from "@ashlrai/compliance-spec";

const QUICK_LINKS = [
  { href: "/getting-started/quickstart-typescript", label: "Quickstart · TypeScript", desc: "npm i + 10-line example" },
  { href: "/getting-started/quickstart-curl", label: "Quickstart · curl", desc: "Hit the API in one shell line" },
  { href: "/api/permit-package", label: "API · /permit-package", desc: "Assemble a permit from a design" },
  { href: "/concepts/ahj-knowledge-graph", label: "Concept · AHJ knowledge graph", desc: "How the open data is shaped" },
  { href: "/ahj-handbook", label: "AHJ handbook", desc: "Browse all 55 jurisdictions" },
  { href: "/glossary", label: "Glossary", desc: "16 terms, plain English" },
];

const FOOTER = [
  { heading: "Open data", links: [["AHJ handbook", "/ahj-handbook"], ["Glossary", "/glossary"], ["Compliance spec", "/concepts/compliance-engine"]] },
  { heading: "Build", links: [["Getting started", "/getting-started/quickstart-typescript"], ["API reference", "/api/permit-package"], ["Webhooks", "/api/webhooks/aurora"]] },
  { heading: "Project", links: [["GitHub", "https://github.com/ashlrai/solar"], ["npm", "https://www.npmjs.com/package/@ashlrai/ahj"], ["Contributing", "/contributing"]] },
];

export default function Home() {
  const c = coverage();
  const terms = listTerms().length;
  const clauses = listClauses().length;

  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="flex items-center gap-3">
          <span className="pulse-dot" />
          <span className="type-mono text-xs text-brand">SOLAR · ASHLR</span>
          <span className="type-smallcaps text-muted">open · 2026</span>
        </div>
        <h1 className="type-display mt-8 text-[clamp(3rem,9vw,7rem)]">
          Solar permitting,
          <br />
          <span className="type-display-italic text-brand">in the open</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-parchment-2">
          The open knowledge graph + docs for US + Canadian solar permitting.
          {" "}{c.total} jurisdictions codified, NEC + IRC + IBC + OESC clauses
          referenced, integration guides for every tool installers use.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/getting-started/quickstart-typescript"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink transition hover:bg-[#ffb93a]"
          >
            Get started →
          </Link>
          <Link href="/ahj-handbook" className="link-draw text-sm text-parchment-2">Browse AHJs</Link>
          <Link href="https://github.com/ashlrai/solar" className="link-draw text-sm text-parchment-2">GitHub →</Link>
        </div>
      </section>

      <section className="border-y border-rule bg-ink-2/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-rule md:grid-cols-4 md:divide-x md:divide-y-0">
          <Stat figure={c.total} label="AHJs codified" />
          <Stat figure={terms} label="Glossary terms" />
          <Stat figure={clauses} label="Code clauses" />
          <Stat figure={c.median_turnaround_business_days} label="Median days" suffix="d" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="tick pl-8">
          <div className="type-smallcaps text-brand">Quick links</div>
          <h2 className="type-display mt-3 text-[clamp(2rem,4.5vw,3rem)]">
            Where to <span className="type-display-italic">start</span>.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-rule md:grid-cols-2">
          {QUICK_LINKS.map((q, i) => (
            <Link key={q.href} href={q.href} className="group bg-ink p-6 transition hover:bg-ink-2">
              <div className="flex items-baseline justify-between">
                <span className="type-display text-3xl text-brand/40 group-hover:text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-smallcaps text-muted">link</span>
              </div>
              <h3 className="type-display mt-4 text-xl">{q.label}</h3>
              <p className="mt-2 text-sm text-parchment-2">{q.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="type-smallcaps text-brand">Open by design</div>
              <h2 className="type-display mt-3 text-2xl">
                Truth compounds when shared.
              </h2>
            </div>
            <ul className="space-y-3 text-parchment-2 md:col-span-2">
              <li>— AHJ rules are public information; nobody made them machine-readable. We did.</li>
              <li>— Community catches drift faster — a permit expediter sees the change Monday morning, our PR queue catches it Monday afternoon.</li>
              <li>— Three published npm packages: <code className="type-mono text-brand">@ashlrai/ahj</code>, <code className="type-mono text-brand">@ashlrai/glossary</code>, <code className="type-mono text-brand">@ashlrai/compliance-spec</code>.</li>
              <li>— Code: MIT. Data: CC-BY-4.0. Use freely, attribute openly.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule bg-ink-2/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_3fr]">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="pulse-dot" />
              <span className="type-display text-xl">Ashlr</span>
              <span className="type-smallcaps text-muted">Solar</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-parchment-2">
              The AI operating system that brings solar projects to reality. Product at{" "}
              <Link className="link-draw text-brand" href="https://ashlr.ai">ashlr.ai</Link>.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm text-parchment-2">
            {FOOTER.map((col) => (
              <div key={col.heading}>
                <div className="type-smallcaps text-muted">{col.heading}</div>
                <ul className="mt-3 space-y-2">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="link-draw hover:text-parchment">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ figure, label, suffix }: { figure: number; label: string; suffix?: string }) {
  return (
    <div className="px-6 py-10 md:px-8">
      <div className="type-display text-5xl text-brand md:text-6xl">
        {figure}
        <span className="type-display-italic text-parchment">{suffix ?? ""}</span>
      </div>
      <div className="type-smallcaps mt-3 text-muted">{label}</div>
    </div>
  );
}
