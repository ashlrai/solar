import Link from "next/link";
import { listAhjs, coverage } from "@ashlrai/ahj";

export const metadata = {
  title: "AHJ handbook",
  description:
    "Browse all 55 codified US + Canadian solar permitting Authorities Having Jurisdiction. Source-cited rules, freshness badges, search.",
};

export default function AhjIndex() {
  const c = coverage();
  const ahjs = [...listAhjs()].sort((a, b) => a.state.localeCompare(b.state) || a.slug.localeCompare(b.slug));

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="tick pl-8">
        <div className="type-smallcaps text-brand">AHJ handbook</div>
        <h1 className="type-display mt-3 text-[clamp(2.4rem,6vw,4.4rem)]">
          {c.total} codified <span className="type-display-italic text-brand">jurisdictions</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-parchment-2">
          Every entry below ships in <code className="type-mono text-brand">@ashlrai/ahj</code>.
          Each rule cites a live URL + the date it was last confirmed.
        </p>
      </header>

      <section className="mt-12 overflow-hidden border border-rule">
        <table className="w-full text-sm">
          <thead className="bg-ink-2 text-left type-smallcaps text-muted">
            <tr>
              <th className="px-4 py-3">AHJ</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Rules</th>
              <th className="px-4 py-3">Median days</th>
              <th className="px-4 py-3">SolarAPP+</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ahjs.map((a) => {
              const country = (a.country ?? "US").toLowerCase();
              const median = a.turnaround.find((t) => t.permit_type === "residential_pv")?.median_business_days;
              return (
                <tr key={a.slug} className="transition hover:bg-ink-2">
                  <td className="px-4 py-3">
                    <Link
                      href={`/ahj-handbook/${country}/${a.state.toLowerCase()}/${a.slug}`}
                      className="type-display text-base text-parchment hover:text-brand"
                    >
                      {a.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 type-mono text-[11px] text-muted">{a.state}</td>
                  <td className="px-4 py-3 type-mono text-parchment-2">{a.rules.length}</td>
                  <td className="px-4 py-3 type-mono text-parchment-2">
                    {median ? `${median}d` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {a.solarapp_plus_eligible ? (
                      <span className="rounded-full border border-brand/40 px-2 py-0.5 text-[10px] text-brand">
                        eligible
                      </span>
                    ) : (
                      <span className="type-mono text-[11px] text-muted">manual</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </article>
  );
}
