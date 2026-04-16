import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <aside className="hidden w-64 shrink-0 border-r border-rule px-6 py-10 md:block">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="pulse-dot" />
          <span className="type-display text-base">Ashlr</span>
          <span className="type-smallcaps text-muted">Solar</span>
        </Link>

        <nav className="mt-8 space-y-6 text-sm">
          <Group title="Open data">
            <NavLink href="/ahj-handbook">AHJ handbook</NavLink>
            <NavLink href="/glossary">Glossary</NavLink>
          </Group>
          <Group title="Project">
            <NavLink href="https://github.com/ashlrai/solar">GitHub ↗</NavLink>
            <NavLink href="https://www.npmjs.com/package/@ashlrai/ahj">@ashlrai/ahj ↗</NavLink>
            <NavLink href="https://ashlr.ai">ashlr.ai ↗</NavLink>
          </Group>
        </nav>
      </aside>

      <div className="min-w-0 flex-1">{children}</div>
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
