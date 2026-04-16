/**
 * @ashlrai/glossary — Plain-English definitions of solar permitting terms.
 *
 * Stable across patch + minor releases. Adding a term is a minor; renaming
 * a slug is a major.
 */

import { TERMS } from "./terms";

export type { GlossaryTerm } from "./terms";
export { TERMS };

import type { GlossaryTerm } from "./terms";

const BY_SLUG: Record<string, GlossaryTerm> = Object.freeze(
  Object.fromEntries(TERMS.map((t) => [t.slug, t])),
);

export function findTerm(slug: string): GlossaryTerm | undefined {
  return BY_SLUG[slug];
}

export function listTerms(): readonly GlossaryTerm[] {
  return TERMS;
}

export function listTermsByCategory(
  category: GlossaryTerm["category"],
): readonly GlossaryTerm[] {
  return TERMS.filter((t) => t.category === category);
}

export function searchTerms(query: string): readonly GlossaryTerm[] {
  const q = query.toLowerCase().trim();
  if (!q) return TERMS;
  return TERMS.filter((t) => {
    if (t.term.toLowerCase().includes(q)) return true;
    if (t.summary.toLowerCase().includes(q)) return true;
    if (t.body.toLowerCase().includes(q)) return true;
    if (t.aka?.some((a) => a.toLowerCase().includes(q))) return true;
    return false;
  });
}
