"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { asset } from "../lib/site";

type GalleryImage = { src: string; title: string; section: string; alt: string };
type GalleryProps = {
  projectName: string;
  images: GalleryImage[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function ProjectGallery({ projectName, images, index, onIndexChange, onClose }: GalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backdropPointer = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = index !== null;
  const current = index === null ? null : images[index];
  const move = (step: number) => {
    if (index !== null) onIndexChange((index + step + images.length) % images.length);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scroller = dialog.closest(".project-modal-scroll");
    scroller?.classList.add("project-gallery-open");
    scroller?.dispatchEvent(new Event("project-gallery-toggle"));
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      scroller?.classList.remove("project-gallery-open");
      scroller?.dispatchEvent(new Event("project-gallery-toggle"));
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return <dialog ref={dialogRef} className="project-gallery" aria-label={`${projectName} image gallery`} aria-describedby="gallery-caption" data-lenis-prevent
    onCancel={event => { event.preventDefault(); event.stopPropagation(); onClose(); }}
    onKeyDown={event => {
      if (event.key === "Tab") {
        const controls = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();
        move(event.key === "ArrowLeft" ? -1 : 1);
      }
    }}
    onPointerDown={event => {
      event.stopPropagation();
      const rect = event.currentTarget.getBoundingClientRect();
      backdropPointer.current = event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
    }}
    onPointerUp={event => {
      event.stopPropagation();
      const rect = event.currentTarget.getBoundingClientRect();
      const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (backdropPointer.current && event.target === event.currentTarget && outside) onClose();
      backdropPointer.current = false;
    }}
  >
    <div className="gallery-bar">
      <span>{projectName} <span className="gallery-bar-label">/ Gallery</span></span>
      <button ref={closeRef} type="button" className="gallery-control" onClick={onClose} aria-label="Close gallery"><X size={22} aria-hidden="true" /></button>
    </div>
    {current && <>
      <div className="gallery-stage"
        onTouchStart={event => {
          const touch = event.touches[0];
          touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
        }}
        onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || event.touches.length || !event.changedTouches[0]) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - start.x;
          const dy = touch.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <Image key={current.src} src={asset(current.src)} alt={current.alt} fill priority sizes="(max-width: 1488px) 94vw, 1400px" draggable={false} />
        {images.length > 1 && <>
          <button type="button" className="gallery-control gallery-previous" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft size={28} aria-hidden="true" /></button>
          <button type="button" className="gallery-control gallery-next" onClick={() => move(1)} aria-label="Next image"><ChevronRight size={28} aria-hidden="true" /></button>
        </>}
      </div>
      <div id="gallery-caption" className="gallery-caption" aria-live="polite" aria-atomic="true">
        <div><p>{current.title}</p><span>{current.section}</span></div>
        <span className="gallery-counter">{(index ?? 0) + 1} / {images.length}</span>
      </div>
    </>}
  </dialog>;
}
