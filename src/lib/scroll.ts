import type { LenisOptions } from "lenis";

export const SCROLL_SPEED = 2.25;

export const smoothScrollOptions = {
  autoRaf: true,
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: SCROLL_SPEED,
  syncTouch: false,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
} satisfies LenisOptions;

export function autoHideScrollbar(element: HTMLElement) {
  const isPage = element === document.documentElement;
  const eventsTarget: EventTarget = isPage ? window : element;
  let hideTimer: ReturnType<typeof setTimeout>;
  const reveal = () => {
    element.classList.add("is-scrolling");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => element.classList.remove("is-scrolling"), 900);
  };
  const revealAtEdge = (event: Event) => {
    const edge = isPage ? innerWidth : element.getBoundingClientRect().right;
    if ((event as PointerEvent).clientX >= edge - 16) reveal();
  };
  eventsTarget.addEventListener("scroll", reveal, { passive: true });
  eventsTarget.addEventListener("pointermove", revealAtEdge, { passive: true });
  return () => {
    clearTimeout(hideTimer);
    element.classList.remove("is-scrolling");
    eventsTarget.removeEventListener("scroll", reveal);
    eventsTarget.removeEventListener("pointermove", revealAtEdge);
  };
}
