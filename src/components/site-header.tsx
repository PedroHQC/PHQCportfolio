"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { linkedin } from "../lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="wordmark" aria-label="Pedro HQC home" onClick={() => setOpen(false)}>pedro<span>hqc</span><span className="logo-square" /></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="primary-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Main navigation" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
        <Link href="/#work" className={pathname.startsWith("/projects") ? "nav-active" : ""} onClick={() => setOpen(false)}>Work</Link>
        <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/#expertise" onClick={() => setOpen(false)}>Expertise</Link>
        <a className="nav-contact" href={linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
    </div>
  </header>;
}
