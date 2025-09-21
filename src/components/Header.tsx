import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import SkipLink from './SkipLink';
import AnimatedLogo from './AnimatedLogo';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="ml-2">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => navigate('/auth')}
              className="ml-2"
            >
              Sign In
            </Button>
          )}
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
          
          {user ? (
            <>
              <div className="block py-3 px-4 text-sm text-muted-foreground border-t mt-4">
                {user.email}
              </div>
              <button 
               onClick={() => { handleSignOut(); setOpen(false); }}
                className="block w-full py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium text-left text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4 inline" />
                Sign Out
              </button>
            </>
          ) : (
            <button 
               onClick={() => { navigate('/auth'); setOpen(false); }}
              className="block w-full py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium text-left mt-4 border-t"
            >
              <User className="mr-2 h-4 w-4 inline" />
              Sign In
            </button>
          )}
        </div>}
      </header>
    </>;
}