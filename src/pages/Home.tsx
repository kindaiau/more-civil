import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import { mountReveal, mountTilt } from "@/lib/motion";

const Home = () => {
  useEffect(() => {
    mountReveal();
    mountTilt();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "More Civil",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: 3,
    },
    review: [
      {
        "@type": "Review",
        author: "Karen B.",
        datePublished: "2024-04-05",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          "Excellent service and very professional from start to finish. Highly recommend More Civil!",
      },
      {
        "@type": "Review",
        author: "Michael T.",
        datePublished: "2024-02-18",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          "Reliable, efficient and easy to work with – the team delivered exactly what we needed.",
      },
      {
        "@type": "Review",
        author: "Sophie L.",
        datePublished: "2023-12-12",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          "Great communication and quality equipment. Will be using More Civil again.",
      },
    ],
  };

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <FAQ />
      <Quote />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Floating CTA */}
      <button
        className="fixed right-6 bottom-6 z-50 bg-[#00B4D8] text-[#0B1F2A] font-extrabold px-4 py-3 rounded-xl shadow-lg hover:bg-[#00A3C4] transition-colors"
        onClick={() => document.querySelector('#quote')?.scrollIntoView({behavior:'smooth'})}
      >
        Request a Quote
      </button>
    </>
  );
};

export default Home;
