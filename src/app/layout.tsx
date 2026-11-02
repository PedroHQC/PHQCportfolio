import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { SmoothScroll } from "../components/smooth-scroll";
import { ProjectModalProvider } from "../components/project-modal-provider";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Pedro Coelho — Game Developer | Technical Artist", template: "%s — Pedro Coelho" },
  description: "Pedro Coelho is a Unity game developer and technical artist bridging responsive gameplay systems with custom shaders, real-time rendering, and visual optimization",
  openGraph: { title: "Pedro Coelho — Game Developer | Technical Artist", description: "Thoughtful code. Memorable play. Explore my games and the systems behind them.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top" className={`${geistSans.variable} ${geistMono.variable}`}><a href="#main-content" className="skip-link">Skip to content</a><SmoothScroll /><ProjectModalProvider><SiteHeader />{children}<SiteFooter /></ProjectModalProvider></body></html>;
}
