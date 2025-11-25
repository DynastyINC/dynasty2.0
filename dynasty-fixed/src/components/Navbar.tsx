import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onOpenPortfolio?: () => void;
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onOpenPortfolio, isLoggedIn = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Oracle AI', href: '#oracle' },
    { name: 'Contact', href: 'mailto:dynastyinc@proton.me' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    if (name === 'Portfolio' && onOpenPortfolio) {
      e.preventDefault();
      onOpenPortfolio();
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            onClick={() => window.location.href = '/'}
            className="text-3xl font-sans font-bold text-white tracking-tighter cursor-pointer select-none group"
        >
          DY<span className="logo-n">N</span>ASTY
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {!isLoggedIn && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.name)}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-dynasty-lime transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          {!isLoggedIn ? (
            <button 
                onClick={onLoginClick}
                className="px-6 py-2 border border-dynasty-lime text-dynasty-lime hover:bg-dynasty-lime hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-widest"
            >
                Investor Login
            </button>
          ) : (
              <span className="text-xs font-bold uppercase tracking-widest text-dynasty-lime px-6 py-2 border border-dynasty-lime/50 rounded bg-dynasty-lime/5">
                  Dashboard Active
              </span>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-dynasty-lime transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 py-8 px-6 flex flex-col gap-6">
           {!isLoggedIn && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.name)} 
              className="text-lg uppercase tracking-widest text-gray-300 hover:text-dynasty-lime"
            >
              {link.name}
            </a>
          ))}
          {!isLoggedIn && (
            <button 
                onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
                }}
                className="text-left text-lg uppercase tracking-widest text-dynasty-lime"
            >
                Investor Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;