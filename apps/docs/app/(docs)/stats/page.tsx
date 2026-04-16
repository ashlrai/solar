import Link from "next/link";
import { listAhjs, coverage, freshnessLabel } from "@ashlrai/ahj";
import { listTerms } from "@ashlrai/glossary";
import { listClauses } from "@ashlrai/compliance-spec";

export const metadata = {
  title: "Stats",
  description:
    "Live coverage, turnaround distribution, freshness, and SolarAPP+ eligibility across the open AHJ knowledge graph.",
};

export default function Stats() {
  const c = coverage();
  const ahjs = listAhjs();
  const terms = listTerms().length;
  const clauses = listClauses().length;

  // Turnaround histogram
  const days = ahjs
    .flatMap((a) =>
      a.turnaround
        .filter((t) => t.permit_type === "residential_pv" && typeof t.median_business_days === "number")
        .map((t) => t.median_business_days as number),
    )
    .sort((a, b) => a - b);

  const buckets: Array<{ label: string; from: number; to: number; n: number }> = [
    { label: "≤ 3", from: 0, to: 3, n: 0 },
    { label: "4–7", from: 4, to: 7, n: 0 },
    { label: "8–14", from: 8, to: 14, n: 0 },
    { label: "15–21", from: 15, to: 21, n: 0 },
    { label: "> 21", from: 22, to: 999, n: 0 },
  ];
  for (const d of days) {
    const b = buckets.find((b) => d >= b.from && d <= b.to);
    if (b) b.n++;
  }
  const maxBucket = Math.max(...buckets.map((b) => b.n), 1);

  // Freshness distribution
  let fresh = 0,
    due = 0,
    stale = 0;
  for (const a of ahjs) {
    const label = freshnessLabel(a, "longtail");
    if (label === "fresh") fresh++;
    else if (label === "due") due++;
    else stale++;
  }
  const total = fresh + due + stale;

  // State coverage (sorted desc)
  const byState = Object.entries(c.by_state)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);
  const maxState = byState[0]?.[1] ?? 1;

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="tick pl-8">
        <div className="type-smallcaps text-brand">Live · stats</div>
        <h1 className="type-display mt-3 text-[clamp(2.4rem,6vw,4.4rem)]">
          The corpus,{" "}
          <span className="type-display-italic text-brand">in numbers</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-parchment-2">
          Coverage, turnaround distribution, freshness, SolarAPP+ eligibility — pulled live
          from <code className="type-mono text-brand">@ashlrai/ahj</code>.
        </p>
      </header>

      <section className="mt-12 grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
        <BigStat n="01" label="AHJs" value={c.total} />
        <BigStat n="02" label="Glossary" value={terms} />
        <BigStat n="03" label="Code clauses" value={clauses} />
        <BigStat n="04" label="Median days" value={c.median_turnaround_business_days} suffix="d" />
      </section>

      <section className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="type-display text-2xl">Turnaround distribution</h2>
          <p className="mt-2 text-sm text-parchment-2">
            Median business days for residential PV.
          </p>
          <svg viewBox="0 0 320 180" className="mt-6 w-full" aria-label="Turnaround histogram">
            {buckets.map((b, i) => {
              const w = 60;
              const gap = 8;
              const x = i * (w + gap);
              const h = (b.n / maxBucket) * 130;
              const y = 150 - h;
              return (
                <g key={b.label}>
                  <rect x={x} y={y} width={w} height={h} fill="#f5a524" opacity={0.85} />
                  <text x={x + w / 2} y={y - 6} textAnchor="middle" fontSize={11} fill="#ebe3d2" fontFamily="JetBrains Mono">
                    {b.n}
                  </text>
                  <text x={x + w / 2} y={166} textAnchor="middle" fontSize={10} fill="#7a7067" fontFamily="JetBrains Mono">
                    {b.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div>
          <h2 className="type-display text-2xl">Freshness</h2>
          <p className="mt-2 text-sm text-parchment-2">
            Per the 30/90/180-day re-verification policy.
          </p>
          <div className="mt-6 flex h-3 overflow-hidden rounded-full">
            <div
              style={{ width: `${(fresh / total) * 100}%` }}
              className="bg-emerald-400"
              title={`${fresh} fresh`}
            />
            <div
              style={{ width: `${(due / total) * 100}%` }}
              className="bg-amber-400"
              title={`${due} due`}
            />
            <div
              style={{ width: `${(stale / total) * 100}%` }}
              className="bg-rose-400"
              title={`${stale} stale`}
            />
          </div>
          <ul className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />{" "}
              <span className="type-mono text-xs">fresh · {fresh}</span>
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />{" "}
              <span className="type-mono text-xs">due · {due}</span>
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />{" "}
              <span className="type-mono text-xs">stale · {stale}</span>
            </li>
          </ul>

          <h2 className="type-display mt-12 text-2xl">SolarAPP+ eligibility</h2>
          <div className="mt-4 flex h-3 overflow-hidden rounded-full">
            <div
              style={{ width: `${(c.solarapp_plus / c.total) * 100}%` }}
              className="bg-brand"
              title={`${c.solarapp_plus} eligible`}
            />
            <div
              style={{ width: `${((c.total - c.solarapp_plus) / c.total) * 100}%` }}
              className="bg-rule"
              title="manual review"
            />
          </div>
          <div className="type-mono mt-3 text-xs text-muted">
            <span className="text-brand">{c.solarapp_plus}</span> eligible · {c.total - c.solarapp_plus} manual
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="type-display text-2xl">Top 12 by AHJ count</h2>
        <div className="mt-6 space-y-2">
          {byState.map(([state, n]) => (
            <div key={state} className="flex items-center gap-3 text-sm">
              <span className="type-mono w-10 shrink-0 text-muted">{state}</span>
              <div className="flex-1">
                <div className="h-3 overflow-hidden bg-ink-2">
                  <div className="h-full bg-brand" style={{ width: `${(n / maxState) * 100}%` }} />
                </div>
              </div>
              <span className="type-mono w-8 shrink-0 text-right text-parchment">{n}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-brand/40 bg-[radial-gradient(ellipse_60%_90%_at_0%_0%,rgba(245,165,36,0.14),transparent_60%),#0f0b07] p-6">
        <div className="type-smallcaps text-brand">Help us grow it</div>
        <h2 className="type-display mt-3 text-2xl">
          Add an AHJ in 5 minutes with the CLI.
        </h2>
        <p className="mt-3 text-sm text-parchment-2">
          <code className="type-mono text-brand">pnpm dlx @ashlrai/create-ahj</code> walks you
          through every field and writes a valid JSON file. Open a PR — we typically merge
          within 3 business days.
        </p>
        <Link
          href="/contributing"
          className="mt-4 inline-flex rounded-full bg-brand px-5 py-2 text-sm font-medium text-ink hover:bg-[#ffb93a]"
        >
          Read the contribution guide →
        </Link>
      </section>
    </article>
  );
}

function BigStat({ n, label, value, suffix }: { n: string; label: string; value: number; suffix?: string }) {
  return (
    <div className="bg-ink p-6">
      <div className="flex items-baseline justify-between">
        <span className="type-display text-4xl text-brand/40">{n}</span>
        <span className="type-smallcaps text-muted">{label}</span>
      </div>
      <div className="type-display mt-4 text-4xl text-brand">
        {value}
        <span className="type-display-italic text-parchment">{suffix ?? ""}</span>
      </div>
    </div>
  );
}
