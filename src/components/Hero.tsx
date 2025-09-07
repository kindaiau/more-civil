export default function Hero() {
  return <section id="home" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Hero Image directly under header with light blue background */}
      <div className="w-full bg-gradient-to-r from-[#00B4D8] to-white pt-20">
        <img
          src="/more-civil-hero-image.svg"
          alt="More Civil hero image"
          className="w-full h-auto"
          width="454"
          height="170"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      
      {/* Text content below image, full width */}
      <div className="w-full px-10 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl" style={{
            fontFamily: 'Montserrat'
          }}>
            Water when you need it.<br /> Civil works you can trust.
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Reliable water cart delivery and earthmoving across South Australia.
          </p>
          
          {/* Accreditations moved from footer */}
          <div className="mt-6 mb-8">
            <img
              src="/accreditations.png"
              alt="Industry certifications and memberships"
              className="h-48 w-auto mx-auto opacity-90"
              width="384"
              height="192"
            />
            <p className="text-sm text-slate-500 mt-2">Fully insured • SWMS available • Local SA crew</p>
          </div>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#quote" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">Request a Quote</a>
            <a href="#contact" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">Book Water</a>
          </div>
          <div className="mt-6 w-full rounded-xl border-2 border-[#00B4D8] bg-[#00B4D8] px-5 py-4">
            <span className="text-white text-base block w-full text-center"><strong>$10</strong> donated to CFS or Koala Rescue SA for every <strong>15,000 L</strong> delivered.</span>
          </div>
        </div>
      </div>

      {/* Soft aqua glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20" style={{
      background: 'radial-gradient(closest-side, #00B4D8, transparent)'
    }} />
    </section>;
}