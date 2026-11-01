import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "../lib/site";

function PostImage({ src, alt = "" }: { src?: unknown; alt?: string }) {
  if (typeof src !== "string") return null;
  return <Image src={asset(src)} alt={alt} width={1280} height={720} sizes="(max-width: 840px) calc(100vw - 40px), 760px" />;
}

function PostLink({ href = "", children }: { href?: string; children?: ReactNode }) {
  if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
  if (!/^https?:/.test(href)) return <a href={href}>{children}</a>;
  return <a href={href} target="_blank" rel="noreferrer">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function Video({ src, poster, label }: { src: string; poster?: string; label: string }) {
  return <video controls preload="none" playsInline poster={poster && asset(poster)} aria-label={label}>
    <source src={asset(src)} type="video/mp4" />
    Your browser does not support this video. <a href={asset(src)}>Download the video.</a>
  </video>;
}

function YouTube({ id, title }: { id: string; title: string }) {
  return <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen />;
}

export const mdxComponents = { img: PostImage, a: PostLink, Video, YouTube };
