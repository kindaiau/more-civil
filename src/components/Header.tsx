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
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 5);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <>
      <SkipLink />
      <header className={`fixed top-0 w-full z-50 transition-all ${shouldHaveWhiteBackground ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <a href="#home" className="flex items-center">
          <AnimatedLogo className="bg-transparent" scrolled={shouldHaveWhiteBackground} />
        </a>

        <nav className="hidden md:flex items-center gap-6 font-semibold text-lg text-black">
          <a href="/water" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.pathname === '/water' ? 'font-bold' : ''}`}>Water Delivery</a>
          <a href="/civil" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.pathname === '/civil' ? 'font-bold' : ''}`}>Civil Works</a>
          <a href="#projects" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.hash === '#projects' ? 'font-bold' : ''}`}>Projects</a>
          <a href="/about" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</a>
          <a href="/blog" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.pathname === '/blog' ? 'font-bold' : ''}`}>Blog</a>
          <a href="#quote" className={`text-black hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1 ${location.hash === '#quote' ? 'font-bold' : ''}`}>Quote</a>
          <a href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mr-8">Contact</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-lg w-auto flex items-center justify-center transition-all duration-300 mr-4" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {/* mobile menu */}
      {open && <div className="md:hidden px-6 pb-6 pt-4 text-foreground space-y-3 bg-card border-t border-border shadow-lg">
          <a onClick={() => setOpen(false)} href="/water" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">Water Delivery</a>
          <a onClick={() => setOpen(false)} href="/civil" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">Civil Works</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">Projects</a>
          <a onClick={() => setOpen(false)} href="/about" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">About</a>
          <a onClick={() => setOpen(false)} href="/blog" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">Blog</a>
          <a onClick={() => setOpen(false)} href="#quote" className="block py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium">Quote</a>
          <a onClick={() => setOpen(false)} href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg transition-colors font-semibold text-center block mt-4">Contact Us</a>
        </div>}
      </header>
    </>;
}