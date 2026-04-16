import Link from "next/link";
import { notFound } from "next/navigation";
import { findTerm, listTerms } from "@ashlrai/glossary";

export function generateStaticParams() {
  return listTerms().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = findTerm(slug);
  if (!t) return {};
  return { title: t.term, description: t.summary };
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = findTerm(slug);
  if (!t) notFound();

  const related = (t.related ?? []).map((s) => findTerm(s)).filter((x): x is NonNullable<typeof x> => !!x);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    alternateName: t.aka,
    description: t.summary,
    inDefinedTermSet: "https://solar.ashlr.ai/glossary",
    url: `https://solar.ashlr.ai/glossary/${t.slug}`,
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/glossary" className="link-draw type-mono text-[11px] text-muted hover:text-parchment">
        ← All terms
      </Link>
      <header className="tick mt-6 pl-8">
        <div className="type-smallcaps text-brand">{t.category}</div>
        <h1 className="type-display mt-3 text-[clamp(2.4rem,6vw,4.4rem)]">{t.term}</h1>
        {t.aka?.length ? (
          <p className="type-mono mt-3 text-sm text-muted">aka: {t.aka.join(" · ")}</p>
        ) : null}
      </header>

      <p className="mt-8 text-xl leading-relaxed text-parchment">{t.summary}</p>
      <p className="mt-6 leading-relaxed text-parchment-2">{t.body}</p>

      {t.source_url ? (
        <p className="mt-8 text-sm">
          <span className="type-smallcaps text-muted">Source · </span>
          <a className="link-draw text-brand" href={t.source_url} target="_blank" rel="noopener noreferrer">
            {t.source_url.replace(/^https?:\/\//, "")}
          </a>
        </p>
      ) : null}

      {related.length ? (
        <section className="mt-12">
          <div className="type-smallcaps text-brand">Related</div>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/glossary/${r.slug}`} className="group block border-t border-rule py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="type-display text-lg text-parchment group-hover:text-brand">{r.term}</span>
                    <span className="type-mono text-[11px] text-muted">{r.category}</span>
                  </div>
                  <p className="mt-1 text-sm text-parchment-2">{r.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
