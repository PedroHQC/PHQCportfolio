import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../components/mdx-components";
import { Contact } from "../../../components/site-footer";
import { formatDate, getPost, getPosts } from "../../../lib/blog";
import { asset } from "../../../lib/site";

export const dynamicParams = false;
// "output: export" rejects an empty list, so with no published posts this emits a single 404 page.
export function generateStaticParams() {
  const posts = getPosts();
  return posts.length > 0 ? posts.map(({ slug }) => ({ slug })) : [{ slug: "no-posts-yet" }];
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.description, openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { content } = await compileMDX({ source: post.content, components: mdxComponents });
  return <main id="main-content">
    <article className="post container">
      <Link href="/blog" className="text-link back-link"><ArrowLeft size={18} /> All posts</Link>
      <header className="post-header">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <h1>{post.title}{post.draft && <span className="post-draft">DRAFT</span>}</h1>
        <p>{post.description}</p>
        {post.tags.length > 0 && <ul className="post-tags">{post.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
      </header>
      {post.cover && <div className="post-cover"><Image src={asset(post.cover)} alt="" fill priority sizes="(max-width: 840px) 100vw, 760px" /></div>}
      <div className="post-body">{content}</div>
    </article>
    <Contact />
  </main>;
}
