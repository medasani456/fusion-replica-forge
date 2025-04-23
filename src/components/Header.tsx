
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-fusion-primary">Fusion</span>
            <span className="text-2xl font-bold text-fusion-dark">Sourcing</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <a href="#solutions" className="nav-link flex items-center">
              Solutions <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#procurement" className="block px-4 py-2 hover:bg-gray-100">Procurement</a>
              <a href="#supply-chain" className="block px-4 py-2 hover:bg-gray-100">Supply Chain</a>
              <a href="#manufacturing" className="block px-4 py-2 hover:bg-gray-100">Manufacturing</a>
              <a href="#sustainability" className="block px-4 py-2 hover:bg-gray-100">Sustainability</a>
            </div>
          </div>
          <a href="#expertise" className="nav-link">Expertise</a>
          <div className="relative group">
            <a href="#industries" className="nav-link flex items-center">
              Industries <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#healthcare" className="block px-4 py-2 hover:bg-gray-100">Healthcare</a>
              <a href="#retail" className="block px-4 py-2 hover:bg-gray-100">Retail</a>
              <a href="#manufacturing" className="block px-4 py-2 hover:bg-gray-100">Manufacturing</a>
              <a href="#automotive" className="block px-4 py-2 hover:bg-gray-100">Automotive</a>
            </div>
          </div>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#about-us" className="nav-link">About Us</a>
        </nav>
        
        <div className="hidden lg:block">
          <Button className="button-primary">Contact Us</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-fusion-dark p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#solutions" className="nav-link font-medium">Solutions</a>
              <a href="#expertise" className="nav-link font-medium">Expertise</a>
              <a href="#industries" className="nav-link font-medium">Industries</a>
              <a href="#resources" className="nav-link font-medium">Resources</a>
              <a href="#about-us" className="nav-link font-medium">About Us</a>
              <Button className="button-primary w-full">Contact Us</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
