import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Home from "../../../components/home-page";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project?.name ?? "Project not found", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projects.some(project => project.slug === slug)) notFound();
  return <Home />;
}
