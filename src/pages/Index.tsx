import HeaderRail from "@/components/layout/HeaderRail";
import Hero from "@/components/sections/Hero";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Estimator from "@/components/sections/Estimator";
import Testimonials from "@/components/sections/Testimonials";
import Materials from "@/components/sections/Materials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-background focus:ring-2 focus:ring-ring px-3 py-2 rounded-md">Skip to content</a>
      <HeaderRail />
      <main className="pt-16 md:pt-0 md:pr-[140px]">
        <Hero />
        <BeforeAfter />
        <Process />
        <Projects />
        <Estimator />
        <Testimonials />
        <Materials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
