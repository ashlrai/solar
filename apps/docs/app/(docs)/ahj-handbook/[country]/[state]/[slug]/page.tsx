import Link from "next/link";
import { notFound } from "next/navigation";
import { listAhjs, loadAhjBySlug, freshnessLabel, daysSinceVerified } from "@ashlrai/ahj";

export function generateStaticParams() {
  return listAhjs().map((a) => ({
    country: (a.country ?? "US").toLowerCase(),
    state: a.state.toLowerCase(),
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ahj = loadAhjBySlug(slug);
  if (!ahj) return {};
  return {
    title: `${ahj.name}, ${ahj.state} · AHJ handbook`,
    description: `${ahj.rules.length} codified rules, ${ahj.solarapp_plus_eligible ? "SolarAPP+ eligible" : "manual review"}. Source-cited and re-verified.`,
  };
}

const SEVERITY_STYLE: Record<string, string> = {
  blocking: "border-rose-900/60 text-rose-300",
  likely_rejection: "border-amber-900/60 text-amber-300",
  advisory: "border-rule text-parchment-2",
};

export default async function AhjPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ahj = loadAhjBySlug(slug);
  if (!ahj) notFound();

  const days = daysSinceVerified(ahj);
  const fresh = freshnessLabel(ahj);
  const median = ahj.turnaround.find((t) => t.permit_type === "residential_pv");

  const issueUrl = `https://github.com/ashlrai/solar/issues/new?template=ahj-update.yml&title=${encodeURIComponent(`[ahj] ${ahj.slug}: refresh`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: `${ahj.name} solar permit`,
    serviceType: "Solar PV permit issuance",
    provider: {
      "@type": "GovernmentOrganization",
      name: ahj.name,
      address: { "@type": "PostalAddress", addressRegion: ahj.state, addressCountry: ahj.country ?? "US" },
    },
    url: ahj.contacts[0]?.portal_url,
  };

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/ahj-handbook" className="link-draw type-mono text-[11px] text-muted hover:text-parchment">
        ← All AHJs
      </Link>

      <header className="tick mt-6 pl-8">
        <div className="type-smallcaps text-brand">{ahj.country ?? "US"} · {ahj.state}</div>
        <h1 className="type-display mt-3 text-[clamp(2.4rem,6vw,4.4rem)]">{ahj.name}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 type-mono text-[11px] text-muted">
          <span>slug · <span className="text-parchment">{ahj.slug}</span></span>
          {ahj.population ? <span>· population {ahj.population.toLocaleString()}</span> : null}
          {ahj.solarapp_plus_eligible ? (
            <span className="rounded-full border border-brand/40 px-2 py-0.5 text-brand">SolarAPP+ eligible</span>
          ) : null}
          <FreshnessBadge label={fresh} days={days} issueUrl={issueUrl} />
        </div>
      </header>

      <section className="mt-12 grid gap-px bg-rule md:grid-cols-3">
        <Stat label="Codified rules" value={String(ahj.rules.length)} />
        <Stat label="Median turnaround" value={median?.median_business_days ? `${median.median_business_days} days` : "—"} />
        <Stat label="Submission channels" value={String(ahj.submission_channels.length)} />
      </section>

      <section className="mt-12">
        <h2 className="type-display text-2xl">Required documents</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {ahj.required_documents.map((d) => (
            <li key={d} className="rounded-lg border border-rule bg-ink-2/40 px-3 py-2 type-mono text-xs">
              {d.replaceAll("_", " ")}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="type-display text-2xl">Rules</h2>
        <ul className="mt-4 space-y-3">
          {ahj.rules.map((r) => (
            <li key={r.id} className="rounded-xl border border-rule bg-ink-2/40 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="type-mono text-[11px] text-muted">{r.id}</span>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest ${SEVERITY_STYLE[r.severity]}`}>
                  {r.severity.replace("_", " ")}
                </span>
              </div>
              <p className="mt-3 text-parchment">{r.description}</p>
              {r.code_reference ? (
                <p className="type-mono mt-2 text-[11px] text-muted">code · <span className="text-brand">{r.code_reference}</span></p>
              ) : null}
              <div className="mt-3 flex flex-wrap items-center gap-3 type-mono text-[11px] text-muted">
                <a href={r.source_url} className="link-draw text-brand" target="_blank" rel="noopener noreferrer">
                  source ↗
                </a>
                <span>retrieved · {r.retrieved_at}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="type-display text-2xl">Contacts</h2>
        <ul className="mt-4 space-y-2">
          {ahj.contacts.map((c, i) => (
            <li key={`${c.department}-${i}`} className="rounded-lg border border-rule bg-ink-2/40 px-4 py-3 text-sm">
              <div className="type-display text-base">{c.department}</div>
              <div className="mt-1 flex flex-wrap gap-3 type-mono text-[11px] text-muted">
                {c.portal_url ? <a className="link-draw text-brand" href={c.portal_url} target="_blank" rel="noopener noreferrer">portal ↗</a> : null}
                {c.phone ? <span>{c.phone}</span> : null}
                {c.email ? <a className="link-draw text-brand" href={`mailto:${c.email}`}>{c.email}</a> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {ahj.notes ? (
        <section className="mt-12 rounded-2xl border border-brand/40 bg-[radial-gradient(ellipse_60%_90%_at_0%_0%,rgba(245,165,36,0.14),transparent_60%),#0f0b07] p-6">
          <div className="type-smallcaps text-brand">Notes</div>
          <p className="mt-3 text-parchment-2">{ahj.notes}</p>
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl border border-rule bg-ink-2/40 p-6">
        <div className="type-smallcaps text-brand">See something stale?</div>
        <p className="mt-3 text-sm text-parchment-2">
          File a one-form update — we turn it into a PR within 3 business days.
        </p>
        <a
          href={issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-brand px-5 py-2 text-sm font-medium text-ink hover:bg-[#ffb93a]"
        >
          Open update issue →
        </a>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ink p-5">
      <div className="type-smallcaps text-muted">{label}</div>
      <div className="type-display mt-2 text-2xl text-parchment">{value}</div>
    </div>
  );
}

function FreshnessBadge({ label, days, issueUrl }: { label: string; days: number; issueUrl: string }) {
  const tone =
    label === "fresh"
      ? "border-emerald-900/60 text-emerald-300"
      : label === "due"
        ? "border-amber-900/60 text-amber-300"
        : "border-rose-900/60 text-rose-300";
  if (label === "fresh") {
    return <span className={`rounded-full border px-2 py-0.5 ${tone}`}>verified {days}d ago</span>;
  }
  return (
    <a href={issueUrl} target="_blank" rel="noopener noreferrer" className={`rounded-full border px-2 py-0.5 hover:opacity-80 ${tone}`}>
      {label === "due" ? "verification due" : "stale — open issue ↗"}
    </a>
  );
}
