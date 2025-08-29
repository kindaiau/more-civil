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
      <button 
        className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-[#00B4D8] to-white text-[#0B1F2A] font-semibold px-4 py-3 rounded-xl shadow-lg hover:from-[#00A3C4] hover:to-white transition-all duration-300 border-2 border-[#0B1F2A]"
        onClick={() => document.querySelector('#quote')?.scrollIntoView({behavior:'smooth'})}
      >
        Request a Quote
      </button>
    </>
  );
};

export default Home;