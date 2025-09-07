import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SkipLink from './SkipLink';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <SkipLink />
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 mx-[12px] py-0 my-0 px-[30px]">
          <AnimatedLogo className="-ml-14 bg-transparent" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-foreground font-semibold">
          <a href="#services" className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#services' ? 'text-primary' : ''}`}>Services</a>
          <a href="#projects" className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#projects' ? 'text-primary' : ''}`}>Projects</a>
          <a href="/blog" className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.pathname === '/blog' ? 'text-primary' : ''}`}>Blog</a>
          <a href="#faq" className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#faq' ? 'text-primary' : ''}`}>FAQ</a>
          <a href="#quote" className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#quote' ? 'text-primary' : ''}`}>Quote</a>
          <a href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">Contact</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden bg-[#00B4D8] hover:bg-[#00A3C4] text-white p-1 rounded-lg h-30 w-auto flex items-center justify-center transition-all duration-300" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {/* mobile menu */}
      {open && <div className="md:hidden px-6 pb-4 text-gray-900 space-y-2 bg-white border-t border-gray-200">
          <a onClick={() => setOpen(false)} href="#services" className="block py-2 hover:text-[#00B4D8]">Services</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block py-2 hover:text-[#00B4D8]">Projects</a>
          <a onClick={() => setOpen(false)} href="/blog" className="block py-2 hover:text-[#00B4D8]">Blog</a>
          <a onClick={() => setOpen(false)} href="#faq" className="block py-2 hover:text-[#00B4D8]">FAQ</a>
          <a onClick={() => setOpen(false)} href="#quote" className="block py-2 hover:text-[#00B4D8]">Quote</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-[#00B4D8]">Contact</a>
        </div>}
      </header>
    </>
  );
}