const items = [
  { title: "FSC Wood", desc: "Certified, responsibly sourced lumber.", icon: "wood" },
  { title: "Recycled Tile", desc: "High-content recycled finishes.", icon: "recycle" },
  { title: "LED Lighting", desc: "High efficacy, low-heat fixtures.", icon: "energy" },
  { title: "Insulation", desc: "Efficient thermal + acoustic layers.", icon: "insulation" },
  { title: "Low-VOC Paints", desc: "Cleaner air quality indoors.", icon: "water" },
  { title: "Solar Ready", desc: "Conduit + layout for PV add-ons.", icon: "solar" },
];

const Icon = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-8 w-8" data-draw>
    <use href={`/icons/${name}.svg#title`} />
  </svg>
);

export const Materials = () => (
  <section id="materials" className="py-20 md:py-28">
    <div className="px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sustainability & Materials</h2>
      <p className="text-muted-foreground mb-8 max-w-prose">We prioritize healthy, durable materials and efficient systems that respect California’s climate and codes.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <article key={it.title} className="group rounded-xl border bg-card p-5 shadow-elev-1 transition-all duration-300 hover:shadow-elev-2 hover:-translate-y-1">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {/* Inline icon fallback */}
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" data-draw>
                  {it.icon === 'wood' && (<>
                    <path d="M4 20V8l8-4 8 4v12"/>
                    <path d="M12 4v16"/>
                    <path d="M4 12l8 4 8-4"/>
                  </>)}
                  {it.icon === 'recycle' && (<>
                    <path d="M6.5 13l-2 3 2 3"/>
                    <path d="M6.5 13l3 1"/>
                    <path d="M13 5l-3 1-1-3"/>
                    <path d="M13 5l1 3"/>
                    <path d="M17.5 13l2 3-2 3"/>
                    <path d="M17.5 13l-3 1"/>
                  </>)}
                  {it.icon === 'energy' && (<>
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                  </>)}
                  {it.icon === 'insulation' && (<>
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <path d="M8 8v8M12 6v12M16 8v8"/>
                  </>)}
                  {it.icon === 'water' && (<>
                    <path d="M12 3s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10z"/>
                  </>)}
                  {it.icon === 'solar' && (<>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M19.1 4.9l-2.1 2.1M6.9 16.9l-2.1 2.1"/>
                  </>)}
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Materials;
