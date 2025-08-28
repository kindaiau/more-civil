const Card = ({badge, title, children}:{badge:string; title:string; children:React.ReactNode}) => (
  <div className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
    <span className="inline-block bg-[#e0f7ff] text-[#043b4a] px-3 py-1 rounded-full font-bold text-sm mb-3">{badge}</span>
    <h3 className="font-bold text-lg mb-3" style={{fontFamily:'Montserrat'}}>{title}</h3>
    <div className="[&>ul]:list-disc [&>ul]:pl-5 [&>p]:text-slate-700 [&>ul]:text-slate-700">{children}</div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center" style={{fontFamily:'Montserrat'}}>What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card badge="Water Delivery" title="Potable & non-potable">
            <p>Bulk deliveries for tanks, pools, events, civil & roadworks.</p>
            <ul className="mt-3">
              <li>2,000 L trailers</li>
              <li>8,000 L & 13,000 L trucks</li>
              <li>17,500 L trucks ready to go</li>
            </ul>
            <div className="mt-4">
              <a href="#contact" className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors">Book Water</a>
            </div>
          </Card>
          
          <Card badge="Civil Works" title="Earthmoving & site prep">
            <p>Site cuts, trenching, drainage, pads, driveways and tidy handovers.</p>
            <ul className="mt-3">
              <li>Accurate levels & compaction</li>
              <li>Tight-access specialists</li>
              <li>Clean, safe worksites</li>
            </ul>
            <div className="mt-4">
              <a href="#quote" className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors">Request Quote</a>
            </div>
          </Card>
          
          <Card badge="Compliance" title="Safety & assurance">
            <p>Fully insured. SWMS and plant risk assessments available on request.</p>
            <ul className="mt-3">
              <li>Clear comms & scheduling</li>
              <li>Honest pricing</li>
              <li>Local SA crew</li>
            </ul>
            <div className="mt-4">
              <a href="#contact" className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors">About us</a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}