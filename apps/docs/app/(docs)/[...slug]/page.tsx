import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { listAllDocs, type DocEntry } from "@/lib/docs-fs";

export async function generateStaticParams() {
  const docs = await listAllDocs();
  return docs.map((d) => ({ slug: d.slug }));
}

async function loadDoc(slug: string[]): Promise<DocEntry | null> {
  const docs = await listAllDocs();
  const joined = slug.join("/");
  return docs.find((d) => d.slug.join("/") === joined) ?? null;
}

const COMPONENTS = {
  a: ({ href = "", children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw text-brand"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className="link-draw text-brand" {...rest}>
        {children}
      </Link>
    );
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const doc = await loadDoc(slug);
  if (!doc) notFound();

  const { content } = await compileMDX({
    source: doc.body,
    components: COMPONENTS,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: false,
    },
  });

  const breadcrumbs = doc.slug.map((seg, i) => ({
    label: seg.replace(/-/g, " "),
    href: `/${doc.slug.slice(0, i + 1).join("/")}`,
  }));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.frontmatter.title,
    description: doc.frontmatter.description,
    publisher: { "@type": "Organization", name: "Ashlr.ai" },
    url: `https://solar.ashlr.ai/${slug.join("/")}`,
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <nav className="type-mono flex flex-wrap items-center gap-1 text-[11px] text-muted">
        <Link href="/" className="hover:text-parchment">/</Link>
        {breadcrumbs.map((b, i) => (
          <span key={b.href} className="flex items-center gap-1">
            <span className="text-muted/50">›</span>
            {i === breadcrumbs.length - 1 ? (
              <span className="text-parchment">{b.label}</span>
            ) : (
              <Link href={b.href} className="hover:text-parchment">{b.label}</Link>
            )}
          </span>
        ))}
      </nav>

      {doc.frontmatter.title ? (
        <header className="tick mt-6 pl-8">
          <h1 className="type-display text-[clamp(2.4rem,6vw,4.4rem)]">
            {doc.frontmatter.title}
          </h1>
          {doc.frontmatter.description ? (
            <p className="mt-4 max-w-2xl text-lg text-parchment-2">
              {doc.frontmatter.description}
            </p>
          ) : null}
        </header>
      ) : null}

      <div
        className="mt-10 max-w-none
          [&_h1]:type-display [&_h1]:mt-12 [&_h1]:text-[clamp(2rem,4vw,3rem)] [&_h1]:leading-[0.95]
          [&_h2]:type-display [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-parchment
          [&_h2]:relative [&_h2]:pl-8
          [&_h2]:before:absolute [&_h2]:before:left-0 [&_h2]:before:top-[0.7em] [&_h2]:before:h-px [&_h2]:before:w-6 [&_h2]:before:bg-brand
          [&_h3]:type-display [&_h3]:mt-8 [&_h3]:text-lg
          [&_hr]:my-10 [&_hr]:border-rule
          [&_p]:mt-5 [&_p]:leading-[1.7] [&_p]:text-parchment-2
          [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6
          [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6
          [&_li]:text-parchment-2
          [&_strong]:text-parchment
          [&_em]:text-parchment
          [&_table]:mt-6 [&_table]:w-full [&_table]:border [&_table]:border-rule
          [&_th]:bg-ink-2 [&_th]:type-smallcaps [&_th]:text-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
          [&_td]:px-3 [&_td]:py-2 [&_td]:text-parchment-2 [&_td]:border-t [&_td]:border-rule
          [&_pre]:type-mono [&_pre]:mt-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-rule [&_pre]:bg-ink-2/60 [&_pre]:p-4 [&_pre]:text-[12.5px] [&_pre]:text-parchment-2
          [&_:not(pre)>code]:type-mono [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-ink-2 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:text-brand
          [&_blockquote]:mt-5 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:text-parchment-2 [&_blockquote]:italic"
      >
        {content}
      </div>

      <footer className="mt-16 flex items-center justify-between border-t border-rule pt-6 text-xs text-muted">
        <span className="type-mono">
          source ·{" "}
          <a
            className="link-draw text-brand"
            href={`https://github.com/ashlrai/solar/edit/main/content/${doc.relPath}`}
          >
            edit on github ↗
          </a>
        </span>
        <Link href="/" className="link-draw text-parchment-2 hover:text-parchment">
          ← Home
        </Link>
      </footer>
    </article>
  );
}
