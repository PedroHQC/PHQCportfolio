import type { Metadata } from "next";
import { BlogList } from "../../components/blog-list";
import { Contact } from "../../components/site-footer";
import { getPosts } from "../../lib/blog";
export const metadata: Metadata = { title: "Blog", description: "Devlogs from Pedro Coelho on building games: the systems, the tools, and what he learned along the way." };
export default function Blog() { return <main id="main-content"><BlogList posts={getPosts()} /><Contact /></main>; }
