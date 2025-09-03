import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
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
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <Reviews />
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Suspense fallback={null}>
        <Quote />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating CTA */}
      <Button
        className="fixed right-6 bottom-6 z-50"
        onClick={() =>
          document
            .querySelector("#quote")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Request a Quote
      </Button>
    </>
  );
};
export default Home;
