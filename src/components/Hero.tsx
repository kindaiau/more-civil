export default function Hero() {
  return (
    <section id="home" className="relative bg-[#0B1F2A] text-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        <div className="reveal">
          <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl"
              style={{fontFamily:'Montserrat'}}>
            Water when you need it.<br/> Civil works you can trust.
          </h1>
          <p className="text-blue-100 mt-4 text-lg">
            Reliable water cart delivery and earthmoving across South Australia.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#quote" className="bg-[#00B4D8] text-[#0B1F2A] font-extrabold px-6 py-3 rounded-xl hover:bg-[#00A3C4] transition-colors">Request a Quote</a>
            <a href="#contact" className="border-2 border-[#00B4D8] text-white px-6 py-3 rounded-xl hover:bg-[#00B4D8] hover:text-[#0B1F2A] transition-colors">Book Water</a>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-[#9BE7FF] font-extrabold bg-[#073042] rounded-full px-3 py-1 text-sm">Community</span>
            <span className="text-blue-100"><strong>$10</strong> donated to CFS or Koala Rescue SA for every <strong>15,000 L</strong> delivered.</span>
          </div>
        </div>

        <div className="reveal">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-gradient-to-br from-sky-900 to-slate-900 grid place-items-center">
            <img
              src="/water-truck.png"
              alt="More Civil water truck"
              className="w-[90%] h-auto float"
              data-tilt
            />
          </div>
        </div>
      </div>

      {/* Soft aqua glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
           style={{background:'radial-gradient(closest-side, #00B4D8, transparent)'}} />
    </section>
  );
}