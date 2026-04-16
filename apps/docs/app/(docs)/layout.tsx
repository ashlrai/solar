import Link from "next/link";
import { SearchCommand } from "@/components/SearchCommand";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <aside className="hidden w-64 shrink-0 border-r border-rule px-6 py-10 md:block">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="pulse-dot" />
          <span className="type-display text-base">Ashlr</span>
          <span className="type-smallcaps text-muted">Solar</span>
        </Link>

        <div className="mt-6">
          <SearchCommand />
        </div>

        <nav className="mt-8 space-y-6 text-sm">
          <Group title="Open data">
            <NavLink href="/ahj-handbook">AHJ handbook</NavLink>
            <NavLink href="/glossary">Glossary</NavLink>
          </Group>
          <Group title="Build">
            <NavLink href="/getting-started/quickstart-typescript">Quickstart · TS</NavLink>
            <NavLink href="/getting-started/quickstart-curl">Quickstart · curl</NavLink>
            <NavLink href="/getting-started/authentication">Authentication</NavLink>
          </Group>
          <Group title="API">
            <NavLink href="/api/permit-package">/api/permit-package</NavLink>
            <NavLink href="/api/plan-check">/api/plan-check</NavLink>
            <NavLink href="/api/errors">Errors</NavLink>
            <NavLink href="/api/rate-limits">Rate limits</NavLink>
          </Group>
          <Group title="Concepts">
            <NavLink href="/concepts/ahj-knowledge-graph">AHJ knowledge graph</NavLink>
            <NavLink href="/concepts/approval-probability">Approval probability</NavLink>
            <NavLink href="/concepts/compliance-engine">Compliance engine</NavLink>
            <NavLink href="/concepts/agent-architecture">Agent architecture</NavLink>
            <NavLink href="/concepts/multi-provider-routing">Provider routing</NavLink>
          </Group>
          <Group title="Project">
            <NavLink href="/contributing">Contributing</NavLink>
            <NavLink href="https://github.com/ashlrai/solar">GitHub ↗</NavLink>
            <NavLink href="https://www.npmjs.com/package/@ashlrai/ahj">@ashlrai/ahj ↗</NavLink>
            <NavLink href="https://ashlr.ai">ashlr.ai ↗</NavLink>
          </Group>
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-end border-b border-rule px-6 py-3 md:hidden">
          <SearchCommand />
        </div>
        {children}
      </div>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="type-smallcaps text-brand">{title}</div>
      <ul className="mt-3 space-y-1">{children}</ul>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-draw text-parchment-2 hover:text-parchment">
        {children}
      </Link>
    </li>
  );
}
