import { HomeHero } from "./home-hero";
import { ArrowUpRight } from "lucide-react";
import { ProjectGrid } from "./project-grid";
import { Contact } from "./site-footer";
import { github } from "../lib/site";

const expertise = [
  { title: "Gameplay that feels right", text: "Responsive character controllers, combat, and mechanics that make every interaction count.", skills: "GAMEPLAY · INPUT · PHYSICS" },
  { title: "Systems built to grow", text: "State machines, enemy AI, and save systems built with clear, maintainable C# architecture.", skills: "C# · DESIGN PATTERNS · AI" },
  { title: "The details that bring life", text: "Smooth scene transitions, camera work, and visual feedback that connect code to the player experience.", skills: "CINEMACHINE · TWEENING · UI" },
];

export default function Home() {
  return <main id="main-content" className="home-page">
    <HomeHero />
    <section className="about-section container" id="about">
      <div className="about-layout">
        <div>
          <h2>I’m Pedro</h2>
          <a href={github} target="_blank" rel="noreferrer" className="text-link">Find me on GitHub <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <div className="about-copy">
          <p>Graduated in Computer Science &amp; Generalist Game Developer with 5+ years of experience creating gameplay mechanics and optimized pipelines across Unity, Unreal Engine, and Godot.</p>
          <p>Proficient in C#, C++, GDScript, and Python, with a strong focus on clean architecture, GPU profiling, shader development, and multi-platform development.</p>
          <div className="about-signature">Pedro Coelho<span>GAME DEVELOPER</span></div>
        </div>
      </div>
    </section>
    <ProjectGrid />
    <section className="expertise-section container" id="expertise">
      <div className="section-heading"><h2>Under the hood<span className="accent">.</span></h2></div>
      <div className="expertise-grid">
        {expertise.map(item => <article key={item.title} className="expertise-card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="expertise-skills">{item.skills}</div>
        </article>)}
      </div>
    </section>
    <Contact />
  </main>;
}
