export default function Footer() {
  return (
    <footer className="site-footer bg-white text-slate-700 mt-16 border-t border-slate-200">
      <div className="wrap max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-slate-900 font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>More Civil</h3>
          <p className="text-slate-600">Water cart delivery and civil earthworks across South Australia.</p>
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>Contact</h3>
          <p className="text-slate-600">
            Phone: <a href="tel:0455677833" className="hover:text-[#00B4D8] transition-colors">0455 677 833</a><br/>
            Email: <a href="mailto:shaunreid1@icloud.com" className="hover:text-[#00B4D8] transition-colors">shaunreid1@icloud.com</a>
          </p>
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>Links</h3>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#services" className="hover:text-[#00B4D8] transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-[#00B4D8] transition-colors">Projects</a></li>
            <li><a href="#faq" className="hover:text-[#00B4D8] transition-colors">FAQ</a></li>
            <li><a href="#quote" className="hover:text-[#00B4D8] transition-colors">Quote</a></li>
            <li><a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="footer-logos">
            <img src="/MORECIVILFINALLOGOFORWEB.svg" alt="More Civil logo" className="brandmark" />
            <img src="/assets/awa.svg" alt="Australian Water Association" />
            <img src="/assets/sa-gov.svg" alt="Government of South Australia" />
            <img src="/assets/cfs.svg" alt="Country Fire Service" />
          </div>
          <p><a href="tel:+61455677833">0455 677 833</a> · <a href="mailto:shaunreid1@icloud.com">shaunreid1@icloud.com</a></p>
          <p>ABN 49 113 831 343 · © More Civil</p>
        </div>
      </div>
    </footer>
  );
}