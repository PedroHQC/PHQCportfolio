import { ArrowDown } from "lucide-react";
import { HeroVideoBackground } from "./hero-video-background";

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <HeroVideoBackground />
      <div className="hero-content">
        <p className="hero-identity">Game developer</p>
        <h1 id="hero-heading">PORTFOLIO</h1>
        <div className="hero-byline">
          <p>Pedro Coelho</p>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="hero-bottom">
        <a className="hero-scroll" href="#about">
          <span>Scroll to explore</span>
          <span className="hero-scroll-icon"><ArrowDown size={20} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  );
}
