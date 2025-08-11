import HeaderRail from "@/components/layout/HeaderRail";
import Process from "@/components/sections/Process";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Our Process | Mango Home Remodeling</title>
        <meta name="description" content="Explore Mango Home Remodeling's signature design-build process: Dream, Design, Deliver." />
        <link rel="canonical" href="https://mangodesignbuild.com/process" />
      </Helmet>
      <HeaderRail />
      <main className="page pt-16 md:pt-0 md:pr-[140px]">
        <section className="px-6 md:px-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Our Process</h1>
        </section>
        <Process />
        <Footer />
      </main>
    </div>
  );
};

export default ProcessPage;
