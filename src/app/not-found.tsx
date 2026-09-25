import Link from "next/link";
export default function NotFound() { return <main id="main-content" className="container not-found"><span className="eyebrow">404 / OUT OF BOUNDS</span><h1>This level doesn’t exist.</h1><p>Let’s get you back to the games.</p><Link className="button-primary" href="/projects">Explore projects →</Link></main>; }
