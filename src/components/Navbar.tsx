
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black bg-opacity-80 backdrop-blur-md py-2'
          : 'nav-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-white font-serif text-xl md:text-2xl font-bold">
          Bukit Lawang
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className="text-white hover:text-jungle-200 transition-colors">About</Link>
          <Link to="/jungle-trekking" className="text-white hover:text-jungle-200 transition-colors">Jungle Trekking</Link>
          <Link to="/village-life" className="text-white hover:text-jungle-200 transition-colors">Village Life</Link>
          <Link to="/accommodations" className="text-white hover:text-jungle-200 transition-colors">Accommodations</Link>
          <Link to="/gallery" className="text-white hover:text-jungle-200 transition-colors">Gallery</Link>
          <Link to="/contact" className="text-white hover:text-jungle-200 transition-colors">Contact Us</Link>
          <a href="https://www.instagram.com/visitbukitlawang/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-jungle-200 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/about" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/jungle-trekking" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Jungle Trekking</Link>
            <Link to="/village-life" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Village Life</Link>
            <Link to="/accommodations" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Accommodations</Link>
            <Link to="/gallery" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-white hover:text-jungle-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <a href="https://www.instagram.com/visitbukitlawang/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-jungle-200 transition-colors py-2 flex items-center gap-2">
              <Instagram size={20} /> @visitbukitlawang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
