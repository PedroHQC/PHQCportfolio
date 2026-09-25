import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { github, linkedin } from "../lib/site";

export function Contact() {
  return <section className="contact-section container" id="contact">
    <div className="contact-row"><h2>Let’s make<br />something <em>playable.</em></h2><a href={linkedin} target="_blank" rel="noreferrer" className="contact-arrow" aria-label="Start a conversation on LinkedIn (opens in a new tab)"><ArrowUpRight strokeWidth={1.4} /></a></div>
    <p>Looking for a gameplay programmer or a creative collaborator?<br />I’d love to hear about your next project.</p>
  </section>;
}
export function SiteFooter() {
  return <footer className="site-footer container">
    <Link href="/" className="wordmark">pedro<span>hqc</span><span className="logo-square" /></Link>
    <p>© {new Date().getFullYear()} Pedro Coelho</p>
    <div className="footer-links"><a href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub<span className="sr-only"> (opens in a new tab)</span></a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span></a><a href="#top" aria-label="Back to top">Back to top ↑</a></div>
  </footer>;
}
