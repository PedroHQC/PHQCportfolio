import Image from "next/image";
import Link from "next/link";
import { formatDate, type PostMeta } from "../lib/blog";
import { asset } from "../lib/site";

export function BlogList({ posts }: { posts: PostMeta[] }) {
  return <section className="work-section container">
    <div className="section-heading">
      <div><h1>Blog<span className="accent">.</span></h1><p>Devlogs on building games: the systems, the tools, and what I learned along the way.</p></div>
    </div>
    {posts.length === 0 ? <p className="post-empty">The first devlog is on its way.</p> : <ul className="post-list">
      {posts.map(post => <li key={post.slug}>
        <Link href={`/blog/${post.slug}`} className="post-row">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <div>
            <h2>{post.title}{post.draft && <span className="post-draft">DRAFT</span>}</h2>
            <p>{post.description}</p>
          </div>
          {post.cover && <div className="post-thumb"><Image src={asset(post.cover)} alt="" fill sizes="(max-width: 760px) 100vw, 220px" /></div>}
        </Link>
      </li>)}
    </ul>}
  </section>;
}
