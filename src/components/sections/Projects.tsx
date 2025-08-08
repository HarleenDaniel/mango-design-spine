const items = [
  { src: "/images/after1.jpg", title: "Modern Kitchen, San Jose" },
  { src: "/images/after2.jpg", title: "Spa Bath, Santa Monica" },
  { src: "/images/after3.jpg", title: "Hillside Exterior, LA" },
  { src: "/images/after4.jpg", title: "Open Living, Oakland" },
  { src: "/images/after5.jpg", title: "Outdoor Patio, San Diego" },
  { src: "/images/after6.jpg", title: "Calm Bedroom, Berkeley" }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Highlighted Projects</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {items.map((it) => (
            <figure key={it.title} className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-elev-1 hover:shadow-elev-2 transition-shadow">
              <img src={it.src} alt={it.title} loading="lazy" className="w-full h-auto object-cover hover-scale" />
              <figcaption className="p-3 text-sm text-muted-foreground">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
