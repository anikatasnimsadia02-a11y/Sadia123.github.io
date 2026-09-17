import React from 'react';
import { ArrowDown, Download, Layers, Compass, Sparkles, Cpu } from 'lucide-react';
import { RESEARCHER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onViewResearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onViewResearch }) => {
  return (
    <section
      id="home"
      className="relative bg-[#0D0F12] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10"
    >
      {/* Subtle architectural & contour grid background texture */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2F6F73]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F39A24]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Monogram Emblem inspired by reference image */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F39A24] to-[#d87d10] text-[#111111] flex items-center justify-center font-extrabold text-xl sm:text-2xl tracking-widest shadow-lg shadow-[#F39A24]/20 border-2 border-white/20">
            {RESEARCHER_PROFILE.initials}
          </div>
        </div>

        {/* Academic Status / Department Pill */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/15 px-4 py-1.5 rounded-full text-xs sm:text-sm text-gray-300 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#F39A24] animate-pulse"></span>
            <span className="tracking-wide">
              Civil Engineering (Water Resources) • CUET
            </span>
          </div>
        </div>

        {/* Giant Hero Name inspired by the reference image */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-xs">
            ANIKA TASNIM SADIA
          </h1>

          {/* Subtitle in clean typography */}
          <div className="mt-4 sm:mt-5">
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.2em] text-white/90 uppercase">
              CIVIL ENGINEERING(WATER RESOURCES ENGINEERING)
            </p>
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-[#2F6F73] mt-1.5 uppercase leading-relaxed max-w-4xl mx-auto">
              HYDROLOGIC MODELING(SWMM) • GIS & SPATIAL ANALYTICS • SUSTAINABLE URBAN DRAINAGE • CLIMATE ASSOCIATED GROUNDWATER TABLE CHANGES • CMIP6
            </p>
          </div>

          {/* Professional 2-3 line statement */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {RESEARCHER_PROFILE.tagline}
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onViewResearch}
              id="hero-view-research-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-[#111111] hover:bg-[#F39A24] hover:text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>VIEW MY RESEARCH</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={RESEARCHER_PROFILE.resumeUrl}
              download={RESEARCHER_PROFILE.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-download-cv-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent text-white hover:bg-white/10 border border-white/30 font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#F39A24]" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          {/* Quick Academic Trust Pillars */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3">
              <Layers className="w-5 h-5 text-[#F39A24] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">SWMM 5.2 & PySWMM</div>
                <div className="text-[11px] text-gray-400">Urban runoff & pipe hydraulics</div>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3">
              <Compass className="w-5 h-5 text-[#F39A24] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">ARCGIS</div>
                <div className="text-[11px] text-gray-400">DEM & spatial analysis</div>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-[#F39A24] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">OpenLCA (ReCiPe)</div>
                <div className="text-[11px] text-gray-400">Cradle-to-grave eco-auditing</div>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3">
              <Cpu className="w-5 h-5 text-[#F39A24] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Machine Learning</div>
                <div className="text-[11px] text-gray-400">CMIP6 Projections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
