export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>More Civil</h3>
          <p className="text-gray-400">Water cart delivery and civil earthworks across South Australia.</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>Contact</h3>
          <p className="text-gray-400">
            Phone: <a href="tel:0000000000" className="hover:text-[#00B4D8] transition-colors">0000 000 000</a><br/>
            Email: <a href="mailto:info@morecivil.com.au" className="hover:text-[#00B4D8] transition-colors">info@morecivil.com.au</a>
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-xl mb-3" style={{fontFamily:'Montserrat'}}>Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#services" className="hover:text-[#00B4D8] transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-[#00B4D8] transition-colors">Projects</a></li>
            <li><a href="#faq" className="hover:text-[#00B4D8] transition-colors">FAQ</a></li>
            <li><a href="#quote" className="hover:text-[#00B4D8] transition-colors">Quote</a></li>
            <li><a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 flex justify-center">
        <img
          src="/accreditations.png"
          alt="Accreditations and memberships"
          className="h-16 w-auto opacity-90"
        />
      </div>

      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} More Civil. All rights reserved.
      </div>
    </footer>
  );
}