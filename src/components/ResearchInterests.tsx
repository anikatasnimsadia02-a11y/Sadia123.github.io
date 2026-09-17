import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { RESEARCH_INTERESTS } from '../data/portfolioData';

export const ResearchInterests: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="research-interests" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOCUS & SCHOLARLY INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            RESEARCH INTERESTS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
            Key areas of active academic investigation and research directions.
          </p>
        </div>

        {/* Large Typography Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_INTERESTS.map((interest, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={interest.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative group cursor-default flex flex-col justify-between ${
                  isHovered
                    ? 'bg-[#111111] text-white border-[#111111] shadow-lg transform -translate-y-1'
                    : 'bg-white text-[#111111] border-[#E5E5E5] hover:border-[#F39A24] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md transition-colors ${
                        isHovered
                          ? 'bg-[#F39A24] text-[#111111]'
                          : 'bg-[#F5F5F3] text-[#555555]'
                      }`}
                    >
                      {interest.tag}
                    </span>
                    <span className="text-xs font-mono opacity-40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-black tracking-tight uppercase leading-snug transition-colors ${
                      isHovered ? 'text-[#F39A24]' : 'text-[#111111] group-hover:text-[#F39A24]'
                    }`}
                  >
                    {interest.title}
                  </h3>

                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mt-1 transition-colors ${
                      isHovered ? 'text-[#2F6F73]' : 'text-[#2F6F73]'
                    }`}
                  >
                    {interest.subtitle}
                  </div>

                  <p
                    className={`mt-4 text-xs sm:text-sm leading-relaxed transition-colors ${
                      isHovered ? 'text-gray-300' : 'text-[#555555]'
                    }`}
                  >
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">
                    Active Horizon
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isHovered ? 'text-[#F39A24] translate-x-1.5' : 'text-gray-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
