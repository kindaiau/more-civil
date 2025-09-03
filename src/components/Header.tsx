import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-white/20 shadow-lg" : "bg-transparent"} backdrop-blur-sm`}
    >
      <Container className="flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/more-civil-transparent-logo.svg"
            alt="More Civil"
            className="h-20 w-auto"
            width="454"
            height="170"
            decoding="async"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-black font-medium">
          <a href="#services" className="hover:text-[#00B4D8] transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-[#00B4D8] transition-colors">
            Projects
          </a>
          <a href="/blog" className="hover:text-[#00B4D8] transition-colors">
            Blog
          </a>
          <a href="#faq" className="hover:text-[#00B4D8] transition-colors">
            FAQ
          </a>
          <a href="#quote" className="hover:text-[#00B4D8] transition-colors">
            Quote
          </a>
          <Button asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        <Button
          size="sm"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </Button>
      </Container>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 text-gray-900 space-y-2 bg-white border-t border-gray-200">
          <a onClick={() => setOpen(false)} href="#services" className="block py-2 hover:text-[#00B4D8]">
            Services
          </a>
          <a onClick={() => setOpen(false)} href="#projects" className="block py-2 hover:text-[#00B4D8]">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="/blog" className="block py-2 hover:text-[#00B4D8]">
            Blog
          </a>
          <a onClick={() => setOpen(false)} href="#faq" className="block py-2 hover:text-[#00B4D8]">
            FAQ
          </a>
          <a onClick={() => setOpen(false)} href="#quote" className="block py-2 hover:text-[#00B4D8]">
            Quote
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-[#00B4D8]">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}