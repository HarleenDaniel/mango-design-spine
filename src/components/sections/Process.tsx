export const Process = () => {
  const steps = [
    { title: "Dream", desc: "We listen and define your vision, constraints, and budget.", icon: "💡" },
    { title: "Design", desc: "Schematic to detailed drawings with materials and schedule.", icon: "📐" },
    { title: "Deliver", desc: "Permits, build, and finish with precision and care.", icon: "🧰" },
  ];
  return (
    <section id="process" className="py-20 md:py-28 bg-card">
      <div className="px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our Signature Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <article key={s.title} className="rounded-xl border p-6 bg-background hover-scale shadow-elev-1">
              <div className="text-3xl mb-3" aria-hidden>{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
