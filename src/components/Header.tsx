import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SkipLink from './SkipLink';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Determine if header should have white background (not on home page OR scrolled)
  const shouldHaveWhiteBackground = scrolled || location.pathname !== '/';
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <>
      <SkipLink />
      <header className={`fixed top-0 w-full z-50 transition-all ${shouldHaveWhiteBackground ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-3">
        <a href="#home" className="flex items-center">
          <AnimatedLogo className="bg-transparent" scrolled={shouldHaveWhiteBackground} />
        </a>

        <nav className={`hidden md:flex items-center gap-6 font-bold ${shouldHaveWhiteBackground ? 'text-foreground' : 'text-black'}`} style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
          <a href="#services" className={`hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#services' ? 'text-blue-600' : ''}`}>Services</a>
          <a href="#projects" className={`hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#projects' ? 'text-blue-600' : ''}`}>Projects</a>
          <a href="/blog" className={`hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.pathname === '/blog' ? 'text-blue-600' : ''}`}>Blog</a>
          <a href="#faq" className={`hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#faq' ? 'text-blue-600' : ''}`}>FAQ</a>
          <a href="#quote" className={`hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${location.hash === '#quote' ? 'text-blue-600' : ''}`}>Quote</a>
          <a href="#contact" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Contact</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-bold px-6 py-2 rounded-md w-auto flex items-center justify-center transition-all duration-300" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {/* mobile menu */}
      {open && <div className="md:hidden px-6 pb-4 text-foreground space-y-2 bg-white border-t border-border">
          <a onClick={() => setOpen(false)} href="#services" className="block py-2 hover:text-primary">Services</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block py-2 hover:text-primary">Projects</a>
          <a onClick={() => setOpen(false)} href="/blog" className="block py-2 hover:text-primary">Blog</a>
          <a onClick={() => setOpen(false)} href="#faq" className="block py-2 hover:text-primary">FAQ</a>
          <a onClick={() => setOpen(false)} href="#quote" className="block py-2 hover:text-primary">Quote</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-primary">Contact</a>
        </div>}
      </header>
    </>
  );
}