import { useEffect, useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#0B1F2A]/95 shadow-lg' : 'bg-[#0B1F2A]/85'} backdrop-blur-sm border-b border-white/10`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 my-0 py-0 px-0">
          <img src="/MORECIVILFINALLOGOFORWEB.svg" alt="More Civil" className="h-10 w-auto" />
          
        </a>

        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <a href="#services" className="hover:text-[#00B4D8] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#00B4D8] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[#00B4D8] transition-colors">FAQ</a>
          <a href="#quote" className="hover:text-[#00B4D8] transition-colors">Quote</a>
          <a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden text-white px-3 py-2 border border-white/30 rounded-lg" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {/* mobile menu */}
      {open && <div className="md:hidden px-6 pb-4 text-white space-y-2 bg-[#0B1F2A]">
          <a onClick={() => setOpen(false)} href="#services" className="block py-2 hover:text-[#00B4D8]">Services</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block py-2 hover:text-[#00B4D8]">Projects</a>
          <a onClick={() => setOpen(false)} href="#faq" className="block py-2 hover:text-[#00B4D8]">FAQ</a>
          <a onClick={() => setOpen(false)} href="#quote" className="block py-2 hover:text-[#00B4D8]">Quote</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-[#00B4D8]">Contact</a>
        </div>}
    </header>;
}