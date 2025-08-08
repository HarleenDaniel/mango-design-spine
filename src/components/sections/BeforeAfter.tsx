import { useEffect, useRef, useState } from "react";

export type BeforeAfterPair = { before: string; after: string; label: string };

const pairs: BeforeAfterPair[] = [
  { before: "/images/before1.jpg", after: "/images/after1.jpg", label: "Kitchen" },
  { before: "/images/before2.jpg", after: "/images/after2.jpg", label: "Bathroom" },
  { before: "/images/before3.jpg", after: "/images/after3.jpg", label: "Exterior" },
  { before: "/images/before4.jpg", after: "/images/after4.jpg", label: "Living" },
  { before: "/images/before5.jpg", after: "/images/after5.jpg", label: "Patio" },
  { before: "/images/before6.jpg", after: "/images/after6.jpg", label: "Bedroom" },
];

export const BeforeAfter = () => {
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState(10);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const rect = el.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, next)));
    };
    const stop = () => (isDragging.current = false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setTimeout(() => setPos(50), 150);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pair = pairs[idx];

  return (
    <section id="before-after" className="py-20 md:py-28">
      <div className="px-6 md:px-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Before & After</h2>
          <div className="flex gap-2">
            {pairs.map((p, i) => (
              <button key={p.label} aria-label={`Show ${p.label}`} onClick={() => setIdx(i)} className={`h-2 w-8 rounded-full transition-colors ${i===idx? 'bg-primary':'bg-muted'}`} />
            ))}
          </div>
        </div>
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-elev-2"
          role="region"
          aria-label={`${pair.label} before and after slider`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
            if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
          }}
        >
          <img src={pair.before} alt={`${pair.label} before remodel`} className="absolute inset-0 size-full object-cover select-none" loading="lazy" />
          <div className="absolute inset-0 transition-all duration-700 ease-[var(--easing)]" style={{ width: `${pos}%`, overflow: 'hidden' }} aria-hidden>
            <img src={pair.after} alt="" className="size-full object-cover" loading="lazy" />
          </div>
          <div className="absolute inset-y-0 transition-all duration-700 ease-[var(--easing)]" style={{ left: `calc(${pos}% - 1px)` }} aria-hidden>
            <div className="h-full w-0.5 bg-background/80 mix-blend-exclusion" />
          </div>
          <button
            aria-label="Drag to reveal"
            onMouseDown={() => (isDragging.current = true)}
            onTouchStart={() => (isDragging.current = true)}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `calc(${pos}% - 18px)` }}
          >
            <div className="h-9 w-9 rounded-full grid place-items-center bg-primary text-primary-foreground shadow-elev-2 hover:scale-105 transition-transform" aria-hidden>
              ||
            </div>
          </button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Drag to reveal</p>
      </div>
    </section>
  );
};

export default BeforeAfter;
