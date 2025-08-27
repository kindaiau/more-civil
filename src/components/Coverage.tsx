export default function Coverage() {
  return (
    <section id="coverage" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center" style={{fontFamily:'Montserrat'}}>Service Coverage</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="col">
            <div className="community-card reveal" style={{'--d': '0.1s'} as React.CSSProperties}>
              <div className="pill">Community Focus</div>
              <h3 className="font-bold text-lg mb-3" style={{fontFamily:'Montserrat'}}>Supporting Local Communities</h3>
              <p>We're committed to supporting local South Australian communities through reliable water delivery and civil works services. From rural properties to suburban developments, we provide essential infrastructure support.</p>
            </div>
            
            <div className="mt-6 space-y-3 text-slate-600">
              <p>Primary service area covers Adelaide metropolitan and surrounding regions.</p>
              <p>Country areas serviced by arrangement - contact us to discuss your requirements.</p>
              <p className="text-sm text-slate-500">Licensed carrier with comprehensive insurance coverage.</p>
            </div>
          </div>
          
          <div className="col">
            <div className="reveal" style={{'--d': '0.2s'} as React.CSSProperties}>
              <h3 className="font-bold text-xl mb-4" style={{fontFamily:'Montserrat'}}>Service Areas</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-[#00B4D8] mb-2">Metropolitan Adelaide</h4>
                  <p className="text-slate-600 text-sm">Complete coverage across all suburbs including Hills, Plains, and coastal areas.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-[#00B4D8] mb-2">Regional South Australia</h4>
                  <p className="text-slate-600 text-sm">Barossa, Fleurieu Peninsula, Murray regions and beyond by arrangement.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-[#00B4D8] mb-2">Emergency Response</h4>
                  <p className="text-slate-600 text-sm">Rapid deployment for urgent water delivery and emergency civil works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}