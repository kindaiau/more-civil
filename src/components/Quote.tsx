export default function Quote() {
  return (
    <section id="quote" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-8">
        <div className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-10 h-full">
          <h2 className="font-extrabold text-2xl mb-4" style={{fontFamily:'Montserrat'}}>Request a Quote</h2>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Demo — wire to email/form service in production');}} className="space-y-8">
            <input required placeholder="Full Name" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <input required type="email" placeholder="Email" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <input required placeholder="Phone" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <select required className="w-full p-3 border border-slate-300 rounded-lg text-slate-500 focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]">
              <option value="">Select service…</option>
              <option>Water delivery (potable)</option>
              <option>Water delivery (non-potable)</option>
              <option>Site cut & pad</option>
              <option>Trenching & drainage</option>
              <option>Driveway & road base</option>
              <option>Other</option>
            </select>
            <textarea rows={4} placeholder="Tell us about your job…" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"></textarea>
            <button className="bg-[#00B4D8] text-[#0B1F2A] font-semibold px-6 py-3 rounded-lg w-full hover:bg-[#00A3C4] transition-colors">Send Request</button>
          </form>
        </div>

        <div className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-10 h-full" id="contact">
          <h2 className="font-extrabold text-2xl mb-4" style={{fontFamily:'Montserrat'}}>Book Water</h2>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Demo — wire to email/form service in production');}} className="space-y-8">
            <input required placeholder="Name" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <input required placeholder="Phone" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <input type="email" placeholder="Email" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <input required placeholder="Address" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            <div className="grid grid-cols-2 gap-3">
              <select className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]">
                <option>Potable</option>
                <option>Non-potable</option>
              </select>
              <input type="number" min="1" step="1" placeholder="Quantity (kL)" className="w-full p-3 border border-slate-300 rounded-lg focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"/>
            </div>
            <button className="bg-[#00B4D8] text-[#0B1F2A] font-semibold px-6 py-3 rounded-lg w-full hover:bg-[#00A3C4] transition-colors">Book Delivery</button>
          </form>
        </div>
      </div>
    </section>
  );
}