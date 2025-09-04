import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import Services from "@/components/Services";
import ReviewsSection from "@/components/Reviews";
import WaterQuality from "@/components/WaterQuality";
const Gallery = lazy(() => import("@/components/Gallery"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Quote = lazy(() => import("@/components/Quote"));
const Footer = lazy(() => import("@/components/Footer"));
import { mountReveal, mountTilt } from "@/lib/motion";

const Index = () => {
  useEffect(() => {
    mountReveal();
    mountTilt();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ld-localbusiness";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "More Civil",
      "image": "https://morecivil.com.au/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Adelaide",
        "addressRegion": "SA",
        "addressCountry": "AU"
      },
      "url": "https://morecivil.com.au",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.getElementById("ld-localbusiness");
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <ServiceIntro />
      <Services />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <ReviewsSection />
      <WaterQuality />
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Suspense fallback={null}>
        <Quote />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      <button
        onClick={() => {
          document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-[#00B4D8] to-white text-[#0B1F2A] font-semibold rounded-xl shadow-lg hover:from-[#00A3C4] hover:to-white transition-all duration-300 border-2 border-[#0B1F2A] mx-0 px-0 my-[31px] py-[6px]"
      >
        Request a Quote
      </button>
    </>
  );
};

export default Index;
