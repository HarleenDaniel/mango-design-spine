import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const format = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const Estimator = () => {
  const [type, setType] = useState<'kitchen'|'bath'|'whole'>('kitchen');
  const [size, setSize] = useState(200);
  const [quality, setQuality] = useState<'standard'|'premium'|'luxury'>('premium');
  const [displayMin, setDisplayMin] = useState(0);
  const [displayMax, setDisplayMax] = useState(0);
  const prev = useRef({ min: 0, max: 0 });

  const compute = () => {
    const base = type === 'kitchen' ? 250 : type === 'bath' ? 300 : 200;
    const qualityMult = quality === 'standard' ? 1 : quality === 'premium' ? 1.25 : 1.6;
    const min = Math.round(size * base * 0.8 * qualityMult);
    const max = Math.round(size * base * 1.2 * qualityMult);
    return { min, max };
  };

  const animateNumbers = (toMin: number, toMax: number) => {
    const fromMin = prev.current.min;
    const fromMax = prev.current.max;
    const start = performance.now();
    const duration = 600;
    const ease = (t: number) => t<.5 ? 2*t*t : -1+(4-2*t)*t;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const e = ease(p);
      setDisplayMin(Math.round(fromMin + (toMin - fromMin) * e));
      setDisplayMax(Math.round(fromMax + (toMax - fromMax) * e));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    prev.current = { min: toMin, max: toMax };
  };

  useEffect(() => {
    const { min, max } = compute();
    animateNumbers(min, max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, size, quality]);

  return (
    <section id="estimate" className="py-20 md:py-28">
      <div className="px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Interactive Cost Estimator</h2>
        <div className="rounded-xl border p-6 bg-card shadow-elev-1">
          <div className="grid md:grid-cols-3 gap-6">
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Project type</span>
              <select value={type} onChange={(e)=>setType(e.target.value as any)} className="h-11 rounded-md border bg-background px-3">
                <option value="kitchen">Kitchen</option>
                <option value="bath">Bathroom</option>
                <option value="whole">Whole-home</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Size (sq ft)</span>
              <input type="range" min={80} max={1200} value={size} onChange={(e)=>setSize(parseInt(e.target.value))} />
              <div className="text-sm">{size} sq ft</div>
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Quality</span>
              <select value={quality} onChange={(e)=>setQuality(e.target.value as any)} className="h-11 rounded-md border bg-background px-3">
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-lg bg-muted p-4 flex items-baseline gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Estimated Range</div>
              <div className="text-2xl font-semibold">{format(displayMin)} – {format(displayMax)}</div>
            </div>
            <div className="ml-auto">
              <Button asChild>
                <a href="#contact">Estimate my remodel</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
