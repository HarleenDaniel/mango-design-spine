import HeaderRail from "@/components/layout/HeaderRail";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact | Mango Remodel Company</title>
        <meta name="description" content="Contact Mango Remodel Company for a free consultation and project quote." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <HeaderRail />
      <main className="page pt-16 md:pt-0 md:pr-[140px]">
        <section className="px-6 md:px-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Start Your Project</h1>
        </section>
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
