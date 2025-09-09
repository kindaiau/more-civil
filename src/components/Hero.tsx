export default function Hero() {
  return <section id="home" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Hero Image directly under header with light blue background */}
      <div className="w-full bg-gradient-to-r from-[#00B4D8] to-white pt-20">
        <img src="/more-civil-hero-image.svg" alt="More Civil hero image" className="w-full h-auto" width="454" height="170" loading="eager" fetchPriority="high" />
      </div>
      
      {/* Text content below image, full width */}
      <div className="w-full px-10 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl" style={{
          fontFamily: 'Montserrat'
        }}>
            Water delivered fast. Civil earthworks done right.
          </h1>
          <p className="text-slate-600 mt-4 text-lg font-semibold">
            Same-day water for homes, farms, and sites across South Australia.
          </p>
          
          {/* Accreditations moved from footer */}
          <div className="mt-6 mb-8 my-[35px]">
            <img src="/accreditations.png" alt="Industry certifications and memberships" className="h-48 w-auto mx-auto opacity-90" width="384" height="192" loading="lazy" />
            <p className="mt-2 font-bold text-sm text-center text-[#0c9dc0]">Fully insured • SWMS available • Local SA crew</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/water" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">Book Water Delivery</a>
            <a href="/civil" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-primary/20 hover:border-primary/40">Get Civil Quote</a>
          </div>
          <div className="mt-6 w-full rounded-xl border-2 border-primary bg-primary px-5 py-4 shadow-lg">
            <span className="text-primary-foreground text-base block w-full text-center"><strong>$10</strong> donated to CFS or Koala Rescue SA for every <strong>15,000 L</strong> delivered.</span>
          </div>
        </div>
      </div>

      {/* Soft aqua glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20" style={{
      background: 'radial-gradient(closest-side, hsl(var(--primary)), transparent)'
    }} />
    </section>;
}