import React from 'react';
import { ArrowUpRight, CheckCircle, Database, HelpCircle, MapPin, Wrench } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface FeaturedProjectProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="featured-project" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#F39A24]"></span>
            <span>CAPSTONE THESIS HIGHLIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            FEATURED RESEARCH PROJECT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555]">
            Investigating decentralized urban water resilience across major commercial and industrial zones in coastal Bangladesh.
          </p>
        </div>

        {/* Large Horizontal Feature Container */}
        <div className="bg-[#FAFAF8] rounded-3xl border border-[#E5E5E5] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Research Visualization & Study Areas */}
            <div className="lg:col-span-5 relative flex flex-col justify-between bg-[#111111] text-white p-6 sm:p-8 overflow-hidden min-h-[420px] lg:min-h-full">
              {/* Background split research images showcasing both study corridors */}
              <div className="absolute inset-0 z-0 flex flex-col sm:flex-row lg:flex-col">
                {/* Image 1: Agrabad Commercial Area */}
                <div className="relative flex-1 h-1/2 sm:h-full lg:h-1/2 overflow-hidden border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b border-white/10 group">
                  <img
                    src="https://i.ibb.co.com/HLbqTKq4/Screenshot-8.png"
                    alt="Agrabad Commercial Area Study Corridor"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase text-white/90 border border-white/10">
                    Agrabad Commercial Area
                  </div>
                </div>

                {/* Image 2: CEPZ Industrial Area */}
                <div className="relative flex-1 h-1/2 sm:h-full lg:h-1/2 overflow-hidden group">
                  <img
                    src="https://i.ibb.co.com/sJ2f4YgT/Screenshot-9.png"
                    alt="CEPZ Industrial Area Study Corridor"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase text-white/90 border border-white/10">
                    CEPZ Industrial Area
                  </div>
                </div>
              </div>

              {/* Top pill tag (Undergraduate Thesis only, 2025-2026 removed) */}
              <div className="relative z-10 flex flex-wrap gap-2">
                <span className="bg-[#F39A24] text-[#111111] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Undergraduate Thesis
                </span>
              </div>

              {/* Bottom Quick Facts (Runoff Reduction & LCA Carbon Offset removed) */}
              <div className="relative z-10 mt-28 sm:mt-32 space-y-3">
                <div className="p-3.5 bg-black/65 backdrop-blur-md rounded-xl border border-white/15">
                  <div className="text-[11px] uppercase tracking-wider text-[#F39A24] font-bold">
                    Primary Study Corridors
                  </div>
                  <div className="text-sm font-semibold text-white flex items-center space-x-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F39A24] shrink-0" />
                    <span>Agrabad Commercial Area & CEPZ Industrial Area</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Research Details, Question, Methodology & Outcomes */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F73] mb-2 flex items-center space-x-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>CIVIL & WATER RESOURCES THESIS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight mb-4">
                  {FEATURED_PROJECT.title}
                </h3>

                {/* Research Question Box */}
                <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F39A24] flex items-center space-x-1.5 mb-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Research Question</span>
                  </div>
                  <p className="text-sm text-[#333333] italic font-serif leading-relaxed">
                    "{FEATURED_PROJECT.researchQuestion}"
                  </p>
                </div>

                {/* Methodology & Study Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-xs text-[#555555]">
                  <div>
                    <span className="font-bold text-[#111111] uppercase block mb-1">Methodology</span>
                    <p className="leading-relaxed">{FEATURED_PROJECT.methodology}</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111] uppercase block mb-1">Study Area Context</span>
                    <p className="leading-relaxed">
                      Coastal urban subcatchments experiencing monsoonal waterlogging alongside high commercial process water demand.
                    </p>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F39A24]" />
                    <span>Key Research Findings</span>
                  </div>
                  <ul className="space-y-1.5">
                    {FEATURED_PROJECT.outcomes?.map((outcome, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#444444] flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F39A24] mt-1.5 shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Tags */}
                <div className="mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2 flex items-center space-x-1.5">
                    <Wrench className="w-3 h-3" />
                    <span>Applied Software & Computational Frameworks</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECT.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-semibold bg-white text-[#111111] px-3 py-1 rounded-full border border-[#D1D5DB] shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(FEATURED_PROJECT)}
                  id="view-featured-project-details-btn"
                  className="inline-flex items-center space-x-2 bg-[#111111] hover:bg-[#F39A24] text-white hover:text-[#111111] font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm"
                >
                  <span>VIEW PROJECT DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-[#555555] font-semibold hidden sm:inline-block">
                  Undergraduate Thesis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
