import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import ReviewsSection from "@/components/Reviews";
import WaterQuality from "@/components/WaterQuality";
const Gallery = lazy(() => import("@/components/Gallery"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Quote = lazy(() => import("@/components/Quote"));
const Footer = lazy(() => import("@/components/Footer"));
import { mountReveal, mountTilt } from "@/lib/motion";
const Home = () => {
  useEffect(() => {
    mountReveal();
    mountTilt();
  }, []);

  useEffect(() => {
    // Remove any existing script with the same ID first
    const existingScript = document.getElementById("ld-localbusiness");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "ld-localbusiness";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "More Civil",
      address: { "@type": "PostalAddress", addressRegion: "SA", addressCountry: "AU" },
      url: "https://more-civil.lovable.app/",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3" },
    });
    document.head.appendChild(script);
    return () => {
      // Use the more reliable remove() method instead of removeChild()
      try {
        const scriptToRemove = document.getElementById("ld-localbusiness");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      } catch (error) {
        // Silently handle any removal errors
        console.warn("Failed to remove JSON-LD script:", error);
      }
    };
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <ServiceIntro />
      <Services />
      <RecentProjects />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
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
        className="fixed right-6 bottom-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
      >
        Request a Quote
      </button>
    </>
  );
};
export default Home;
