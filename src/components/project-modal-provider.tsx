"use client";
import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import Lenis from "lenis";
import { projects } from "../data/projects";
import { asset } from "../lib/site";
import { smoothScrollOptions, autoHideScrollbar } from "../lib/scroll";
import { ProjectContent } from "./project-content";
import { ProjectNavigationContext } from "./project-navigation";

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const project = projects.find(item => item.slug === slug);
  const isOpen = Boolean(project);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backdropPointer = useRef(false);
  const originRef = useRef<string | null>(null);

  useEffect(() => {
    if (!project) originRef.current = null;
    else if (typeof window.history.state?.projectModalOrigin === "string") {
      originRef.current = window.history.state.projectModalOrigin;
    }
  }, [project]);

  const openProject = useCallback((nextSlug: string) => {
    if (!projects.some(item => item.slug === nextSlug)) return;
    const url = asset(`/projects/${nextSlug}/`);
    // Next synchronizes native history with usePathname without replacing the background.
    // Copying Next's internal history flags here would bypass that synchronization.
    if (project) {
      window.history.replaceState({ projectModalOrigin: originRef.current ?? window.history.state?.projectModalOrigin }, "", url);
    } else {
      originRef.current = window.location.href;
      window.history.pushState({ projectModalOrigin: originRef.current }, "", url);
    }
  }, [project]);

  const closeProject = useCallback(() => {
    if (originRef.current || window.history.state?.projectModalOrigin) window.history.back();
    else router.replace("/#work");
  }, [router]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.documentElement.classList.add("project-modal-open");
    window.dispatchEvent(new Event("project-modal-toggle"));
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      document.documentElement.classList.remove("project-modal-open");
      window.dispatchEvent(new Event("project-modal-toggle"));
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!project) return;
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    closeRef.current?.focus({ preventScroll: true });
    const previousTitle = document.title;
    document.title = `${project.name} — Pedro Coelho`;
    return () => { document.title = previousTitle; };
  }, [project]);

  useEffect(() => {
    const scroller = scrollRef.current;
    const content = scroller?.firstElementChild;
    if (!project || !scroller || !content) return;
    const lenis = new Lenis({
      ...smoothScrollOptions,
      wrapper: scroller,
      content,
      overscroll: false,
    });
    const syncGalleryScroll = () => {
      if (scroller.classList.contains("project-gallery-open")) lenis.stop();
      else lenis.start();
    };
    scroller.addEventListener("project-gallery-toggle", syncGalleryScroll);
    return () => {
      scroller.removeEventListener("project-gallery-toggle", syncGalleryScroll);
      lenis.destroy();
    };
  }, [project]);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!project || !scroller) return;
    return autoHideScrollbar(scroller);
  }, [project]);

  return <ProjectNavigationContext.Provider value={openProject}>
    {children}
    <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" data-lenis-prevent
      onCancel={event => { event.preventDefault(); closeProject(); }}
      onPointerDown={event => {
        const rect = event.currentTarget.getBoundingClientRect();
        backdropPointer.current = event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
      }}
      onPointerUp={event => {
        const rect = event.currentTarget.getBoundingClientRect();
        const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
        if (backdropPointer.current && event.target === event.currentTarget && outside) closeProject();
        backdropPointer.current = false;
      }}
    >
      <div className="project-modal-bar">
        <span>Project details</span>
        <button ref={closeRef} type="button" onClick={closeProject} className="project-modal-close" aria-label="Close project"><X size={22} aria-hidden="true" /></button>
      </div>
      <div ref={scrollRef} className="project-modal-scroll" data-lenis-prevent>
        {project && <ProjectContent key={project.slug} project={project} />}
      </div>
    </dialog>
  </ProjectNavigationContext.Provider>;
}
