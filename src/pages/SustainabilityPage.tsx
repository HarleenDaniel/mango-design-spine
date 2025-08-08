import HeaderRail from "@/components/layout/HeaderRail";
import Materials from "@/components/sections/Materials";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sustainability & Materials | Mango Remodel Company</title>
        <meta name="description" content="Eco-friendly materials and sustainable practices used by Mango Remodel Company across California." />
        <link rel="canonical" href="/sustainability" />
      </Helmet>
      <HeaderRail />
      <main className="page pt-16 md:pt-0 md:pr-[140px]">
        <section className="px-6 md:px-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Sustainability & Materials</h1>
        </section>
        <Materials />
        <Footer />
      </main>
    </div>
  );
};

export default SustainabilityPage;
