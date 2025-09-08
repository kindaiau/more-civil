import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import Services from "@/components/Services";
import ReviewsSection from "@/components/Reviews";
import WaterQuality from "@/components/WaterQuality";
import Gallery from "@/components/Gallery";
const FAQ = lazy(() => import("@/components/FAQ"));
const Quote = lazy(() => import("@/components/Quote"));
const Footer = lazy(() => import("@/components/Footer"));
import { mountReveal, mountTilt } from "@/lib/motion";
const Home = () => {
  useEffect(() => {
    mountReveal();
    mountTilt();
  }, []);

  // JSON-LD structured data is now managed by Reviews component
  return (
    <>
      <Header />
      <Hero />
      <ServiceIntro />
      <Services />
      <Gallery />
      <ReviewsSection />
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Suspense fallback={null}>
        <Quote />
      </Suspense>
      <WaterQuality />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating CTA */}
      <button
        onClick={() =>
          document
            .querySelector("#quote")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="fixed right-6 bottom-6 z-50 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
      >
        Request a Quote
      </button>
    </>
  );
};
export default Home;
