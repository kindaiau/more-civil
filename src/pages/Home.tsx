import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
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
      <Coverage />
      <Gallery />
      <FAQ />
      <Quote />
      <Footer />
      
      {/* Floating CTA */}
      <button 
        className="btn btn--primary fixed right-6 bottom-6 z-50 shadow-lg"
        onClick={() => document.querySelector('#quote')?.scrollIntoView({behavior:'smooth'})}
      >
        Request a Quote
      </button>
    </>
  );
};

export default Home;