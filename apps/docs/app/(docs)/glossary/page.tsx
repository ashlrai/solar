import Link from "next/link";
import { listTerms } from "@ashlrai/glossary";

export const metadata = {
  title: "Glossary",
  description: "Plain-English definitions of NEC clauses, AHJ jargon, and incentive programs.",
};

export default function GlossaryIndex() {
  const terms = [...listTerms()].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-12">
      <header className="tick pl-8">
        <div className="type-smallcaps text-brand">Glossary</div>
        <h1 className="type-display mt-3 text-[clamp(2.4rem,6vw,4.4rem)]">
          The language of <span className="type-display-italic text-brand">solar permits</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-parchment-2">
          Plain-English first, code references second. Maintained as <code className="type-mono text-brand">@ashlrai/glossary</code>.
        </p>
      </header>

      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {terms.map((t) => (
          <li key={t.slug}>
            <Link href={`/glossary/${t.slug}`} className="group block py-4 transition hover:bg-ink-2">
              <div className="flex flex-wrap items-baseline justify-between gap-3 px-3">
                <span className="type-display text-xl text-parchment group-hover:text-brand">{t.term}</span>
                <span className="type-mono text-[11px] text-muted">{t.category}</span>
              </div>
              <p className="mt-1 px-3 text-sm text-parchment-2">{t.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
