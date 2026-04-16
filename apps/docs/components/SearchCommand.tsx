"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

interface Entry {
  title: string;
  subtitle?: string;
  url: string;
  kind: "doc" | "ahj" | "glossary" | "clause";
  keywords: string;
}

const KIND_LABEL: Record<Entry["kind"], string> = {
  doc: "Doc",
  ahj: "AHJ",
  glossary: "Term",
  clause: "Code",
};

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [corpus, setCorpus] = useState<Entry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || corpus.length > 0) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data) => setCorpus(data as Entry[]))
      .catch(() => setCorpus([]));
  }, [open, corpus.length]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
    else setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return corpus.slice(0, 20);
    return corpus
      .map((e) => {
        let score = 0;
        if (e.title.toLowerCase() === q) score += 100;
        else if (e.title.toLowerCase().startsWith(q)) score += 50;
        else if (e.title.toLowerCase().includes(q)) score += 20;
        if (e.keywords.includes(q)) score += 5;
        return { e, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((r) => r.e);
  }, [query, corpus]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-rule px-3 py-1.5 text-xs text-muted transition hover:border-brand hover:text-parchment"
        aria-label="Search docs"
      >
        <span>Search</span>
        <kbd className="type-mono rounded border border-rule bg-ink-2 px-1.5 py-0.5 text-[10px] text-muted">⌘K</kbd>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/80 px-4 pt-24 backdrop-blur"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-rule bg-ink-2 shadow-[0_0_80px_-20px_rgba(245,165,36,0.3)]">
            <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
              <span className="type-mono text-xs text-brand">⌘K</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search AHJs, glossary, docs, code clauses…"
                className="flex-1 bg-transparent text-sm text-parchment outline-none placeholder:text-muted"
              />
              <button
                onClick={() => setOpen(false)}
                className="type-mono text-xs text-muted hover:text-parchment"
              >
                esc
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-auto">
              {results.length === 0 ? (
                <li className="p-6 text-center text-sm text-muted">
                  {corpus.length === 0 ? "Loading…" : "No matches."}
                </li>
              ) : (
                results.map((r) => (
                  <li key={`${r.kind}:${r.url}`} className="border-b border-rule last:border-b-0">
                    <Link
                      href={r.url}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 px-4 py-3 transition hover:bg-ink"
                    >
                      <span className="type-mono w-12 shrink-0 text-[10px] uppercase tracking-widest text-brand">
                        {KIND_LABEL[r.kind]}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="type-display truncate text-base text-parchment">
                          {r.title}
                        </div>
                        {r.subtitle ? (
                          <div className="truncate text-xs text-parchment-2">{r.subtitle}</div>
                        ) : null}
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
