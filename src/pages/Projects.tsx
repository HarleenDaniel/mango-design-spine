import HeaderRail from "@/components/layout/HeaderRail";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Projects | Mango Remodel Company</title>
        <meta name="description" content="Before and after remodels and a curated project gallery by Mango Remodel Company in California." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <HeaderRail />
      <main className="page pt-16 md:pt-0 md:pr-[140px]">
        <section className="px-6 md:px-12 pt-8">
          <h1 className="sr-only">Projects</h1>
        </section>
        <BeforeAfter />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default ProjectsPage;
