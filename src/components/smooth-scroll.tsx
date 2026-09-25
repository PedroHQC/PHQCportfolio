"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { SCROLL_SPEED, smoothScrollOptions, autoHideScrollbar } from "../lib/scroll";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => autoHideScrollbar(document.documentElement), []);

  useEffect(() => {
    const lenis = new Lenis(smoothScrollOptions);

    const syncModalScroll = () => {
      if (document.documentElement.classList.contains("project-modal-open")) lenis.stop();
      else lenis.start();
    };
    syncModalScroll();
    window.addEventListener("project-modal-toggle", syncModalScroll);

    // Handle same-page links before Next's router, including the mobile menu.
    // Measure in document coordinates so native scrolling and focus cannot shift the destination.
    const onAnchorClick = (event: MouseEvent) => {
      if (document.documentElement.classList.contains("project-modal-open")) return;
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return;

      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      const inset = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const destination = target === document.body ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - inset);
      // Sync before a new animation, including clicks made during wheel inertia.
      lenis.scrollTo(window.scrollY, { immediate: true });
      if (window.location.hash !== url.hash) {
        window.history.pushState(window.history.state, "", url.hash);
      }
      lenis.scrollTo(destination, {
        duration: 1.25 / SCROLL_SPEED,
        lerp: 0,
        easing: progress => 1 - Math.pow(1 - progress, 3),
        onComplete: () => {
          const temporaryTabIndex = !target.hasAttribute("tabindex");
          if (temporaryTabIndex) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          if (temporaryTabIndex) target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
        },
      });
    };

    document.addEventListener("click", onAnchorClick, true);
    return () => {
      document.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("project-modal-toggle", syncModalScroll);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
