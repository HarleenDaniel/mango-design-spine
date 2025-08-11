import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DreamIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Dream" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" data-draw {...props}>
    <path d="M4 10c0-3.314 3.582-6 8-6s8 2.686 8 6-3.582 6-8 6c-1.13 0-2.206-.15-3.2-.43L4 16l1.3-2.6C4.48 12.4 4 11.24 4 10z"/>
  </svg>
);
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Design" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" data-draw {...props}>
    <rect x="2" y="4" width="16" height="16" rx="2" ry="2"/>
    <path d="M3 7h14M3 12h10M3 17h6"/>
    <path d="M17 8l4 4-8 8H9v-4l8-8z"/>
  </svg>
);
const DeliverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Deliver" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" data-draw {...props}>
    <path d="M3 16V8a2 2 0 0 1 2-2h9l4 4v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <path d="M14 6v4h4"/>
    <circle cx="7.5" cy="17.5" r="1.5"/>
    <circle cx="15.5" cy="17.5" r="1.5"/>
  </svg>
);

export const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cards = el.querySelectorAll('.step-card');
    gsap.fromTo(cards, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", scrollTrigger: {
      trigger: el, start: 'top 80%'
    }} as any);
  }, []);
  const steps = [
    { title: "Dream", desc: "We listen and define your vision, constraints, and budget.", Icon: DreamIcon },
    { title: "Design", desc: "Schematic to detailed drawings with materials and schedule.", Icon: DesignIcon },
    { title: "Deliver", desc: "Permits, build, and finish with precision and care.", Icon: DeliverIcon },
  ];
  return (
    <section id="process" className="py-20 md:py-28 bg-card">
      <div className="px-6 md:px-12" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our Signature Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, Icon }) => (
            <article key={title} className="step-card rounded-xl border p-6 bg-background hover-scale shadow-elev-1 tilt-on-hover">
              <div className="text-3xl mb-3" aria-hidden>
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
