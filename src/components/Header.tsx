import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header wrap max-w-7xl mx-auto px-6">
        <a href="#home" className="flex items-center gap-3 brand">
          <img
            src="/MORECIVILFINALLOGOFORWEB.svg"
            alt="More Civil"
            className="header-brand-img"
          />
          <span className="font-extrabold tracking-wide" style={{color: 'var(--coal)'}}>
            More Civil
          </span>
        </a>

        <nav className="nav hidden md:flex items-center font-medium">
          <a href="#services" className="hover:text-[#00B4D8] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#00B4D8] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[#00B4D8] transition-colors">FAQ</a>
          <a href="#quote" className="hover:text-[#00B4D8] transition-colors">Quote</a>
          <a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a>
        </nav>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden px-3 py-2 border border-gray-300 rounded-lg"
          style={{color: 'var(--coal)'}}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white border-t border-gray-200" style={{color: 'var(--coal)'}}>
          <a onClick={()=>setOpen(false)} href="#services" className="block py-2 hover:text-[#00B4D8]">Services</a>
          <a onClick={()=>setOpen(false)} href="#projects" className="block py-2 hover:text-[#00B4D8]">Projects</a>
          <a onClick={()=>setOpen(false)} href="#faq" className="block py-2 hover:text-[#00B4D8]">FAQ</a>
          <a onClick={()=>setOpen(false)} href="#quote" className="block py-2 hover:text-[#00B4D8]">Quote</a>
          <a onClick={()=>setOpen(false)} href="#contact" className="block py-2 hover:text-[#00B4D8]">Contact</a>
        </div>
      )}
    </header>
  );
}