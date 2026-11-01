import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "blog");
const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" });

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  draft: boolean;
}
export interface Post extends PostMeta { content: string }

// A malformed post fails the build instead of publishing a broken page.
function readPost(slug: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8"));
  const { title, description, date, tags = [], cover, draft = false } = data;
  const published = new Date(date);
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`${slug}.mdx: filenames become URLs, so use only lowercase letters, numbers, and hyphens.`);
  if (typeof title !== "string" || typeof description !== "string" || Number.isNaN(published.getTime()) || !Array.isArray(tags)) throw new Error(`${slug}.mdx: frontmatter needs title, description, and date (YYYY-MM-DD); tags must be a list.`);
  return { slug, title, description, date: published.toISOString().slice(0, 10), tags, cover, draft: draft === true, content };
}

const isVisible = (post: PostMeta) => !post.draft || process.env.NODE_ENV !== "production";

export function getPosts(): PostMeta[] {
  return fs.readdirSync(postsDir)
    .filter(file => file.endsWith(".mdx"))
    .map(file => readPost(file.replace(/\.mdx$/, "")))
    .filter(isVisible)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  if (!fs.existsSync(path.join(postsDir, `${slug}.mdx`))) return undefined;
  const post = readPost(slug);
  return isVisible(post) ? post : undefined;
}

export const formatDate = (date: string) => dateFormat.format(new Date(date));
