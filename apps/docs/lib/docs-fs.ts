import { promises as fs } from "node:fs";
import path from "node:path";

export const contentRoot = path.resolve(process.cwd(), "../../content");

export interface DocFrontmatter {
  title?: string;
  description?: string;
}

export interface DocEntry {
  slug: string[];
  /** Relative path under content/ — used for "edit on github" links + sitemap. */
  relPath: string;
  frontmatter: DocFrontmatter;
  body: string;
}

const SKIP = new Set(["meta.json"]);

async function walk(dir: string, base = dir): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (SKIP.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full, base)));
    else if (/\.(md|mdx)$/.test(e.name)) out.push(path.relative(base, full));
  }
  return out;
}

function parseFrontmatter(raw: string): { frontmatter: DocFrontmatter; body: string } {
  if (!raw.startsWith("---")) return { frontmatter: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, body: raw };
  const yaml = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, "");
  const frontmatter: DocFrontmatter = {};
  for (const line of yaml.split("\n")) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    let value = m[2]!.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    (frontmatter as Record<string, string>)[m[1]!] = value;
  }
  return { frontmatter, body };
}

let _cache: DocEntry[] | null = null;

export async function listAllDocs(): Promise<DocEntry[]> {
  if (_cache) return _cache;
  const files = await walk(contentRoot);
  const docs: DocEntry[] = [];
  for (const relPath of files) {
    const full = path.join(contentRoot, relPath);
    const raw = await fs.readFile(full, "utf8");
    const { frontmatter, body } = parseFrontmatter(raw);
    const slugStr = relPath.replace(/\.(md|mdx)$/, "");
    const slug = slugStr === "index" ? [""] : slugStr.split("/");
    if (slug.length === 1 && slug[0] === "") continue;
    docs.push({ slug, relPath, frontmatter, body });
  }
  _cache = docs;
  return docs;
}
