"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function DesignGallery({ images }) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d) => setActive((i) => (i + d + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {images.map((src, i) => (
          <li key={src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-[20px] border-[0.8px] border-line bg-paper"
              aria-label={`Open design ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" className="w-full transition duration-500 group-hover:scale-[1.03]" />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label="Design viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-paper/95 p-4 backdrop-blur" onClick={close}>
          <button type="button" aria-label="Close" onClick={close} className="absolute right-4 top-4 rounded-full border-[0.8px] border-line bg-paper p-3 text-ink shadow-[inset_0_-3px_0_0_rgba(29,29,29,0.15)] hover:bg-lavender">
            <X size={20} />
          </button>
          <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 rounded-full border-[0.8px] border-line bg-paper p-3 text-ink shadow-[inset_0_-3px_0_0_rgba(29,29,29,0.15)] hover:bg-lavender">
            <ChevronLeft size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[active]} alt={`Design ${active + 1}`} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain" />
          <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 rounded-full border-[0.8px] border-line bg-paper p-3 text-ink shadow-[inset_0_-3px_0_0_rgba(29,29,29,0.15)] hover:bg-lavender">
            <ChevronRight size={20} />
          </button>
          <p className="absolute bottom-6 text-sm text-muted">{active + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
