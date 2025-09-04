import { useEffect, useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/20 shadow-lg' : 'bg-transparent'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 mx-[12px] py-0 my-0 px-[30px]">
          <img
            src="/more-civil-transparent-logo.svg"
            alt="More Civil"
            className="h-30 w-auto -ml-14 bg-transparent"
            width="600"
            height="250"
            decoding="async"
          />
          
        </a>

        <nav className="hidden md:flex items-center gap-6 text-black font-semibold">
          <a href="#services" className="text-black hover:text-[#00B4D8] transition-colors">Services</a>
          <a href="#projects" className="text-black hover:text-[#00B4D8] transition-colors">Projects</a>
          <a href="/blog" className="text-black hover:text-[#00B4D8] transition-colors">Blog</a>
          <a href="#faq" className="text-black hover:text-[#00B4D8] transition-colors">FAQ</a>
          <a href="#quote" className="text-black hover:text-[#00B4D8] transition-colors">Quote</a>
          <a href="#contact" className="bg-gradient-to-r from-[#00B4D8] to-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-[#00A3C4] hover:to-white transition-all duration-300 border-2 border-[#0B1F2A]">Contact</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden bg-gradient-to-r from-[#00B4D8] to-white text-black p-1 border-2 border-[#0B1F2A] rounded-lg shadow-sm h-30 w-auto flex items-center justify-center" aria-label="Toggle menu">
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
    </header>;
}