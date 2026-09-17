import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { RESEARCHER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'FEATURED THESIS', href: '#featured-project', id: 'featured-project' },
    { name: 'PUBLICATIONS', href: '#publications', id: 'publications' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'EDUCATION', href: '#education', id: 'education' },
    { name: 'BEYOND RESEARCH', href: '#beyond-the-research', id: 'beyond-the-research' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#E5E5E5] py-3 text-[#111111]'
          : 'bg-[#0D0F12]/90 backdrop-blur-sm border-b border-white/10 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Personal Monogram / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-3 group"
          id="nav-logo-link"
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm tracking-wider transition-colors duration-200 ${
              isScrolled
                ? 'bg-[#111111] text-[#F39A24] group-hover:bg-[#F39A24] group-hover:text-[#111111]'
                : 'bg-[#F39A24] text-[#111111] group-hover:bg-white group-hover:text-[#111111]'
            }`}
          >
            {RESEARCHER_PROFILE.initials}
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold tracking-tight text-sm uppercase transition-colors ${
                isScrolled ? 'text-[#111111]' : 'text-white'
              }`}
            >
              ANIKA TASNIM SADIA
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-[#555555]' : 'text-white/60'
              }`}
            >
              Civil Engineering • CUET
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`nav-link-${link.id}`}
                className={`text-[11px] tracking-widest font-semibold transition-all relative py-1 uppercase whitespace-nowrap ${
                  isActive
                    ? 'text-[#F39A24]'
                    : isScrolled
                    ? 'text-[#444444] hover:text-[#F39A24]'
                    : 'text-white/80 hover:text-[#F39A24]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F39A24] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-md ${
              isScrolled ? 'text-[#111111] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] text-[#111111] border-b border-[#E5E5E5] px-6 py-5 shadow-xl transition-all">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs tracking-widest font-semibold uppercase py-1.5 border-b border-gray-100 flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#F39A24] font-bold' : 'text-[#333333]'
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#F39A24]"></span>
                )}
              </a>
            ))}

            <a
              href={RESEARCHER_PROFILE.resumeUrl}
              download={RESEARCHER_PROFILE.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-3 flex items-center justify-center space-x-2 bg-[#111111] text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-[#F39A24] hover:text-[#111111] transition-colors uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Academic CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
