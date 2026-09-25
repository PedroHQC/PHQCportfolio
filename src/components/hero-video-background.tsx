"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { asset } from "../lib/site";

type Connection = EventTarget & { saveData?: boolean };

export function HeroVideoBackground() {
  const projectOpen = /^\/projects\/[^/]+\/?$/.test(usePathname());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = video?.closest(".hero");
    if (!video || !hero) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 760px)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;

    const syncPlayback = () => {
      const rect = hero.getBoundingClientRect();
      const visible = rect.bottom > innerHeight * 0.1 && rect.top < innerHeight * 0.9;
      const allowed = !reducedMotion.matches && !connection?.saveData;
      if (!allowed || !visible || projectOpen || document.hidden || document.documentElement.classList.contains("project-modal-open")) {
        video.pause();
        return;
      }
      const src = asset(`/media/hero/afonse-${mobile.matches ? "mobile" : "desktop"}.mp4`);
      if (video.getAttribute("src") !== src) video.src = src;
      video.muted = true;
      void video.play().catch(() => {
        // Keep the poster visible when the browser blocks autoplay.
      });
    };

    const observer = new IntersectionObserver(syncPlayback, { threshold: [0, 0.1, 0.5] });
    observer.observe(hero);
    reducedMotion.addEventListener("change", syncPlayback);
    mobile.addEventListener("change", syncPlayback);
    connection?.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("project-modal-toggle", syncPlayback);
    syncPlayback();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      mobile.removeEventListener("change", syncPlayback);
      connection?.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("project-modal-toggle", syncPlayback);
      video.pause();
    };
  }, [projectOpen]);

  return <div className="hero-background" aria-hidden="true">
    <video ref={videoRef} className="hero-video" poster={asset("/media/hero/afonse-poster.webp")} autoPlay muted loop playsInline preload="none" disablePictureInPicture tabIndex={-1} />
  </div>;
}
