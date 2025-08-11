import HeaderRail from "@/components/layout/HeaderRail";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Testimonials | Mango Home Remodeling</title>
        <meta name="description" content="Client reviews and testimonials for Mango Home Remodeling's California remodeling projects." />
        <link rel="canonical" href="https://mangodesignbuild.com/testimonials" />
      </Helmet>
      <HeaderRail />
      <main className="page pt-16 md:pt-0 md:pr-[140px]">
        <section className="px-6 md:px-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Kind Words</h1>
        </section>
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default TestimonialsPage;
