import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { RESEARCH_AREAS } from '../data/portfolioData';
import { ResearchArea } from '../types';

interface ResearchSectionProps {
  onSelectResearch: (area: ResearchArea) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onSelectResearch }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(RESEARCH_AREAS.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedAreas = RESEARCH_AREAS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="research" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with title and Navigation Arrows inspired by reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE INVESTIGATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
              RESEARCH
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
              Integrating numerical hydrodynamic simulation, geospatial data synthesis, and environmental life cycle assessment to build resilient urban water futures.
            </p>
          </div>

          {/* Carousel Controls inspired by reference image */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <span className="text-xs font-medium text-[#555555] mr-2">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              id="research-carousel-prev"
              aria-label="Previous research areas"
              className="w-10 h-10 rounded-full border border-[#E5E5E5] bg-white text-[#111111] hover:border-[#F39A24] hover:text-[#F39A24] flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              id="research-carousel-next"
              aria-label="Next research areas"
              className="w-10 h-10 rounded-full border border-[#E5E5E5] bg-white text-[#111111] hover:border-[#F39A24] hover:text-[#F39A24] flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Column Grid of Large Research Cards directly matching reference visual layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedAreas.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#F39A24] transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
            >
              {/* Image Container with 16:10 ratio & subtle zoom */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#F5F5F3]">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#111111]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {area.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#F39A24] transition-colors leading-snug">
                    {area.title}
                  </h3>
                  
                  <p className="mt-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                    {area.description}
                  </p>

                  {/* Tools Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {area.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium bg-[#F5F5F3] text-[#444444] px-2.5 py-1 rounded-md border border-[#E5E5E5]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button / Link */}
                <div className="mt-6 pt-5 border-t border-[#E5E5E5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectResearch(area)}
                    id={`view-research-${area.id}`}
                    className="inline-flex items-center space-x-2 bg-[#111111] text-white hover:bg-[#F39A24] hover:text-[#111111] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectResearch(area)}
                    className="text-xs font-semibold text-[#555555] hover:text-[#F39A24] flex items-center space-x-1"
                  >
                    <span>View Methodology</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-10 flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentPage === i ? 'w-8 bg-[#F39A24]' : 'bg-[#D1D5DB] hover:bg-[#9CA3AF]'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
