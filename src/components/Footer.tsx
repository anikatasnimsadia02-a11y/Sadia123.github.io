import React from 'react';
import { ArrowUp, BookMarked, Globe, Github, Linkedin } from 'lucide-react';
import { RESEARCHER_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FEATURED THESIS', href: '#featured-project' },
    { name: 'PUBLICATIONS', href: '#publications' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'BEYOND RESEARCH', href: '#beyond-the-research' },
  ];

  return (
    <footer className="bg-[#FFFFFF] text-[#111111] py-14 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding inspired by reference image */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#111111] text-[#F39A24] flex items-center justify-center font-extrabold text-sm tracking-widest mb-3">
            {RESEARCHER_PROFILE.initials}
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111]">
            ANIKA TASNIM SADIA
          </h3>

          <div className="text-xs font-semibold tracking-widest uppercase text-[#555555] mt-1">
            CIVIL ENGINEERING • CUET
          </div>
        </div>

        {/* Minimalist Horizontal Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-bold tracking-widest uppercase text-[#555555] mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#F39A24] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Copyright Line */}
        <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © 2026 Anika Tasnim Sadia. All rights reserved. Department of Civil Engineering, CUET.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={RESEARCHER_PROFILE.links.googleScholar}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              className="text-[#555555] hover:text-[#F39A24] transition-colors"
            >
              <BookMarked className="w-4 h-4" />
            </a>
            <a
              href={RESEARCHER_PROFILE.links.orcid}
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              className="text-[#555555] hover:text-[#2F6F73] transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={RESEARCHER_PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#555555] hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={RESEARCHER_PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#555555] hover:text-[#111111] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="ml-2 w-8 h-8 rounded-full bg-[#F5F5F3] hover:bg-[#111111] hover:text-white flex items-center justify-center transition-colors text-[#555555]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
