const chips = ["Low-VOC Paints","FSC Wood","Recycled Tile","LED Lighting","WaterSense Fixtures","Solar Ready"];

export const Materials = () => (
  <section id="materials" className="py-20 md:py-28">
    <div className="px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sustainability & Materials</h2>
      <p className="text-muted-foreground mb-4 max-w-prose">We prioritize healthy, durable materials and efficient systems that respect California’s climate and codes.</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span key={c} className="px-3 py-1 rounded-full bg-muted text-sm hover-scale">{c}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Materials;
