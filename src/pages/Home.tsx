import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import { mountReveal, mountTilt } from "@/lib/motion";

const Home = () => {
  useEffect(() => {
    mountReveal();
    mountTilt();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <FAQ />
      <Quote />
      <Footer />
      
      {/* Floating CTA */}
      <a
        href="#quote"
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 text-[#00B4D8]"
      >
        Request a Quote
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </>
  );
};

export default Home;