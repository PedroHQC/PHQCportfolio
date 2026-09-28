"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Camera, Route, Wrench } from "lucide-react";
import { FaUnity } from "react-icons/fa6";
import { projects, type Project } from "../data/projects";
import { asset } from "../lib/site";
import { ProjectLink } from "./project-navigation";
import { ProjectGallery } from "./project-gallery";

const toolIcons = { Unity: FaUnity, NavMesh: Route, "Camera systems": Camera };

export function ProjectContent({ project }: { project: Project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const compact = project.details.every(detail => !detail.upperMinorImage && !detail.bottomMinorImage);
  const galleryImages = project.details.flatMap((detail, detailIndex) => detail.points.flatMap((point, pointIndex) => {
    const src = pointIndex === 0 ? detail.upperMinorImage : detail.bottomMinorImage;
    return src ? [{
      src,
      detailIndex,
      pointIndex,
      title: point.title,
      section: detail.title,
      alt: `${project.name}: ${detail.title}, screenshot ${pointIndex + 1}`,
    }] : [];
  }));

  return (
    <article className={`project-page${compact ? " project-page-compact" : ""}`}>
      <header className="project-intro">
        <div className="project-intro-art" aria-hidden="true">
          <Image src={asset(project.image)} alt="" fill priority sizes="(max-width: 1200px) 100vw, 1200px" />
        </div>
        <div className="project-intro-copy">
          {!compact && <p className="project-genre">{project.genre}</p>}
          <h1 id="project-modal-title">{project.name}</h1>
          {compact ? (
            <ul className="project-tools" aria-label="Tools">
              {project.tags.map(tool => {
                const Icon = toolIcons[tool as keyof typeof toolIcons] ?? Wrench;
                return <li key={tool}><Icon size={20} aria-hidden="true" /><span>{tool}</span></li>;
              })}
            </ul>
          ) : (
            <>
              <p className="project-deck">{project.description}</p>
              <dl className="project-facts">
                <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
                <div><dt>Toolkit</dt><dd>{project.tags.join(" · ")}</dd></div>
              </dl>
            </>
          )}
        </div>
      </header>

      <div className="project-story">
        {project.details.map((detail, index) => (
          <section key={detail.title} className="story-section" aria-labelledby={`story-title-${index}`}>
            <div className="story-heading">
              <h2 id={`story-title-${index}`}>{detail.title}</h2>
              <p>{detail.summary}</p>
            </div>

            <figure className="story-demo">
              <video controls preload="none" playsInline poster={asset(detail.mainImage)} aria-label={`${project.name}: ${detail.title} gameplay demo`}>
                <source src={asset(detail.videoSrc)} type="video/mp4" />
                Your browser does not support this video. <a href={asset(detail.videoSrc)}>Download the gameplay demo.</a>
              </video>
            </figure>

            {detail.points.length > 0 && <div className="story-details">
              {detail.points.map((point, pointIndex) => {
                const src = pointIndex === 0 ? detail.upperMinorImage : detail.bottomMinorImage;
                return (
                  <figure className="story-detail" key={point.title}>
                    {src && <button type="button" className="story-image-button" aria-haspopup="dialog" aria-label={`Open ${detail.title} screenshot ${pointIndex + 1} in gallery`} onClick={() => setGalleryIndex(galleryImages.findIndex(image => image.detailIndex === index && image.pointIndex === pointIndex))}>
                      <Image src={asset(src)} alt={`${project.name}: ${detail.title}, screenshot ${pointIndex + 1}`} width={720} height={405} sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1040px) 46vw, 468px" />
                    </button>}
                    <figcaption><h3>{point.title}</h3><p>{point.text}</p></figcaption>
                  </figure>
                );
              })}
            </div>}
          </section>
        ))}
      </div>

      <div className="project-ending">
        <ProjectLink slug={next.slug} className="project-next">
          <div className="project-next-art" aria-hidden="true"><Image src={asset(next.image)} alt="" fill sizes="(max-width: 1040px) 100vw, 1000px" /></div>
          <span className="project-next-label">Next project</span>
          <h2>{next.name}<ArrowUpRight size={30} aria-hidden="true" /></h2>
          <p>{next.genre}</p>
        </ProjectLink>
      </div>
      <ProjectGallery projectName={project.name} images={galleryImages} index={galleryIndex} onIndexChange={setGalleryIndex} onClose={() => setGalleryIndex(null)} />
    </article>
  );
}
