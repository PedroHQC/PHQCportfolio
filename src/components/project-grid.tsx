"use client";
import { useState } from "react";
import Image from "next/image";
import { ProjectLink } from "./project-navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { asset } from "../lib/site";

export function ProjectGrid({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter(project => filter === "All projects" || project.category === filter.slice(0, 2));
  return <section className={full ? "work-section container work-page" : "work-section container"} id="work">
    <div className="section-heading"><div>{full ? <h1>The work<span className="accent">.</span></h1> : <h2>Built to be played<span className="accent">.</span></h2>}<p>A selection of worlds, mechanics, and the code behind them.</p></div></div>
    <div className="filter-row" role="group" aria-label="Filter projects">
      {["All projects", "3D games", "2D games"].map(label => <button key={label} onClick={() => setFilter(label)} aria-pressed={filter === label} className={filter === label ? "filter-button selected" : "filter-button"}>{label}{label === "All projects" && <span>06</span>}</button>)}
      <span className="sr-only" aria-live="polite">{visible.length} projects</span>
    </div>
    <div className="project-grid">
      {visible.map((project, index) => <ProjectLink key={project.slug} slug={project.slug} className="project-card">
        <div className="project-visual"><Image src={asset(project.image)} alt={`${project.name} game artwork`} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /><div className="project-visual-shade" />{index === 0 && filter === "All projects" && <span className="featured-label">FEATURED PROJECT</span>}<span className="project-open"><ArrowUpRight size={24} /></span><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <div className="project-title-row"><h3>{project.name}</h3><span>{project.genre}</span></div><p>{project.description}</p>
      </ProjectLink>)}
    </div>
  </section>;
}
