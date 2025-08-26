import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/morecivil-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Water", href: "/water" },
    { name: "Civil", href: "/civil" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isCurrentPage = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="brand">
            <img src={logo} alt="MORECIVIL" />
          </Link>
          
          <button 
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="menu-link"
                aria-current={isCurrentPage(item.href) ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: saturate(180%) blur(8px);
          background: rgba(11, 31, 42, 0.86);
          color: white;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0;
        }
        
        .brand {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        
        .brand img {
          height: 48px;
          width: auto;
          display: block;
        }
        
        .menu {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .menu-link {
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          text-decoration: none;
        }
        
        .menu-link[aria-current="page"] {
          background: rgba(255, 255, 255, 0.12);
        }
        
        .menu-link:hover {
          background: rgba(255, 255, 255, 0.08);
          text-decoration: none;
        }
        
        .menu-btn {
          display: none;
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.45rem 0.7rem;
          border-radius: 10px;
          cursor: pointer;
        }
        
        @media (max-width: 980px) {
          .menu-btn {
            display: block;
          }
          
          .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            background: rgba(11, 31, 42, 0.98);
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
          
          .menu.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;