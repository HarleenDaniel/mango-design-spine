import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const words = ["Design.", "Build.", "Live."];
const heroImages = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const t = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setImgIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    timerRef.current = t;
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, []);

  const currentImage = useMemo(() => heroImages[imgIndex], [imgIndex]);

  return (
    <section id="hero" className="relative min-h-[90vh] grid md:grid-cols-[1fr_minmax(320px,520px)] items-stretch">
      <div className="relative flex flex-col justify-center px-6 md:px-12 py-20 md:py-0">
        <span className="mb-4 inline-flex items-center text-xs tracking-widest uppercase text-muted-foreground">California Design-Build</span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-[12ch]">
          <span className="sr-only">Mango Home Remodeling — Design Build Live</span>
          <span className="block">{words[wordIndex]}</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-prose">
          California remodeling with precision and soul. Kitchens, baths, and whole-home transformations by Mango Home Remodeling.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button asChild size="lg" className="hover-scale">
            <a href="#contact" aria-label="Book a Free Consultation">Get a Free Consultation</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="hover-scale">
            <a href="#projects" aria-label="See Portfolio">See Portfolio</a>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img src={currentImage} alt="Modern California remodel hero" className="absolute inset-0 size-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
          background: 'var(--glass)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-background/0" />
        <div className="absolute right-8 bottom-8 h-16 w-16 rounded-full" aria-hidden>
          <div className="size-full rounded-full" style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--brand-mango)) 0%, hsl(42 100% 75%) 60%, transparent 65%)',
            filter: 'drop-shadow(0 12px 28px hsl(var(--brand-mango) / 0.35))',
            animation: 'spin 18s linear infinite'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
};

export default Hero;
