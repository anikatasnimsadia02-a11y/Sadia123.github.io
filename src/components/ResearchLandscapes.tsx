import React, { useState } from 'react';
import { MapPin, Compass, Navigation, ArrowUpRight, Globe2 } from 'lucide-react';
import { STUDY_AREAS } from '../data/portfolioData';

export const ResearchLandscapes: React.FC = () => {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <section id="study-areas" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F73] mb-2 flex items-center space-x-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>GEOSPATIAL & CATCHMENT DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            RESEARCH LANDSCAPES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
            Geographic field corridors and urban watershed systems examined across coastal and monsoonal Bangladesh.
          </p>
        </div>

        {/* Study Areas Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Location Selector Tabs (Left 4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {STUDY_AREAS.map((area, idx) => {
              const isActive = activeArea === idx;
              return (
                <button
                  key={area.name}
                  type="button"
                  onClick={() => setActiveArea(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111] shadow-md'
                      : 'bg-[#FAFAF8] text-[#111111] border-[#E5E5E5] hover:border-[#F39A24]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin
                        className={`w-4 h-4 ${isActive ? 'text-[#F39A24]' : 'text-[#2F6F73]'}`}
                      />
                      <span className="font-extrabold text-sm uppercase tracking-wide">
                        {area.name}
                      </span>
                    </div>
                    <p
                      className={`text-xs ${
                        isActive ? 'text-gray-300' : 'text-[#666666]'
                      }`}
                    >
                      {area.type}
                    </p>
                    <div
                      className={`text-[11px] font-mono ${
                        isActive ? 'text-[#F39A24]' : 'text-[#888888]'
                      }`}
                    >
                      {area.coordinates}
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isActive ? 'text-[#F39A24] translate-x-0.5' : 'text-gray-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Area Showcase Card (Right 7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFAF8] rounded-3xl border border-[#E5E5E5] overflow-hidden shadow-xs">
            {/* Visual Header with Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#111111]">
              <img
                src={STUDY_AREAS[activeArea].image}
                alt={STUDY_AREAS[activeArea].name}
                className="w-full h-full object-cover opacity-85 hover:scale-103 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#F39A24] text-[#111111] px-2.5 py-0.5 rounded-md">
                    Featured Study Area
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {STUDY_AREAS[activeArea].name}
                  </h3>
                </div>

                <span className="text-xs text-white/80 font-mono bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  {STUDY_AREAS[activeArea].coordinates}
                </span>
              </div>
            </div>

            {/* Details Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#E5E5E5]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F39A24] flex items-center space-x-1 mb-1">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Research Focus</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#111111]">
                    {STUDY_AREAS[activeArea].focus}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E5E5E5]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2F6F73] flex items-center space-x-1 mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Investigation Method</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#111111]">
                    {STUDY_AREAS[activeArea].method}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1">
                  Hydrological & Urban Terrain Context
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {STUDY_AREAS[activeArea].characteristics}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
