"use client";
import { createContext, useContext, type ComponentProps } from "react";
import Link from "next/link";

export const ProjectNavigationContext = createContext<((slug: string) => void) | null>(null);

export function ProjectLink({ slug, children, onClick, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { slug: string }) {
  const openProject = useContext(ProjectNavigationContext);
  return <Link {...props} href={`/projects/${slug}/`} aria-haspopup="dialog" prefetch={false} onClick={event => {
    onClick?.(event);
    if (!openProject || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || (event.currentTarget.target && event.currentTarget.target !== "_self")) return;
    event.preventDefault();
    openProject(slug);
  }}>{children}</Link>;
}
