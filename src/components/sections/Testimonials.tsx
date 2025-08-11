import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  { quote: "Our kitchen is a dream. On time and on budget.", name: "Alex & Priya, Palo Alto" },
  { quote: "Detail-oriented and communicative throughout.", name: "Jordan, Los Angeles" },
  { quote: "We loved the design-first approach.", name: "Sam, San Diego" }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Kind Words</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <blockquote className="group h-full rounded-xl border bg-background/60 glass-card p-6 shadow-elev-1 transition-all duration-300 hover:shadow-elev-2 hover:-translate-y-1 hover:ring-2 hover:ring-primary/40 tilt-on-hover">
                  <p className="text-lg transition-transform duration-300 group-hover:scale-[1.01]">“{t.quote}”</p>
                  <footer className="mt-4 text-sm text-muted-foreground">{t.name}</footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
