import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white text-slate-900 overflow-hidden pt-20">
      {/* Hero Image directly under header with light blue background */}
      <div className="w-full bg-gradient-to-r from-[#00B4D8] to-white">
        <img
          src="/more-civil-hero-image.svg"
          alt="More Civil hero image"
          className="w-full aspect-[454/170]"
          width="454"
          height="170"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Text content below image */}
      <Container className="py-12 sm:py-16 lg:py-20 text-center">
        <h1
          className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Water when you need it.<br /> Civil works you can trust.
        </h1>
        <p className="text-slate-600 mt-4 text-lg">
          Reliable water cart delivery and earthmoving across South Australia.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button asChild>
            <a href="#quote">Request a Quote</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Book Water</a>
          </Button>
        </div>
        <div className="mt-6 inline-flex items-center gap-3 rounded-xl border-8 border-[#00B4D8] bg-slate-50 px-4 py-3">
          <span className="text-[#00B4D8] font-extrabold bg-[#e0f7ff] rounded-full px-3 py-1 text-sm">Community</span>
          <span className="text-slate-600"><strong>$10</strong> donated to CFS or Koala Rescue SA for every <strong>15,000 L</strong> delivered.</span>
        </div>
      </Container>

      {/* Soft aqua glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(closest-side, #00B4D8, transparent)" }}
      />
    </section>
  );
}