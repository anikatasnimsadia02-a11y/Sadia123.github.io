import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';
import { PublicationItem } from '../types';

interface PublicationsProps {
  onSelectPublication?: (pub: PublicationItem) => void;
}

export const Publications: React.FC<PublicationsProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'CONFERENCE' | 'MANUSCRIPT'>('ALL');

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    if (selectedCategory === 'ALL') return true;
    return pub.type === selectedCategory;
  });

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PEER-REVIEWED & SCHOLARLY CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            PUBLICATIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
            Conference proceedings, peer-reviewed journal submissions, and ongoing academic research manuscripts.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-[#111111] text-[#F39A24]'
                : 'bg-[#F5F5F3] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
            }`}
          >
            All Contributions ({PUBLICATIONS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('CONFERENCE')}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              selectedCategory === 'CONFERENCE'
                ? 'bg-[#111111] text-[#F39A24]'
                : 'bg-[#F5F5F3] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
            }`}
          >
            Conference Papers
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('MANUSCRIPT')}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              selectedCategory === 'MANUSCRIPT'
                ? 'bg-[#111111] text-[#F39A24]'
                : 'bg-[#F5F5F3] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
            }`}
          >
            Under Review / Manuscripts
          </button>
        </div>

        {/* Clean Editorial List View */}
        <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="py-8 group hover:bg-[#FAFAF8] px-4 -mx-4 rounded-xl transition-colors duration-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Year & Type Column */}
                <div className="md:col-span-3 flex flex-col space-y-1.5">
                  <span className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                    {pub.year}
                  </span>
                  {pub.typeLabel ? (
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2F6F73]">
                      {pub.typeLabel}
                    </span>
                  ) : null}
                  
                  {/* Status Badge */}
                  {pub.status ? (
                    <div className="pt-1">
                      <span className="inline-flex items-center space-x-1 bg-[#F39A24]/10 text-[#c8760e] border border-[#F39A24]/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {pub.status === 'Accepted' || pub.status === 'Published' ? (
                          <CheckCircle className="w-3 h-3 mr-0.5" />
                        ) : (
                          <Clock className="w-3 h-3 mr-0.5" />
                        )}
                        <span>{pub.status}</span>
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Title, Authors & Venue */}
                <div className="md:col-span-9 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#F39A24] transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    {pub.authors ? (
                      <div className="mt-2 text-xs sm:text-sm font-medium text-[#444444]">
                        {pub.authors}
                      </div>
                    ) : null}

                    {pub.venue ? (
                      <div className="mt-1 text-xs text-[#666666] italic font-serif">
                        {pub.venue}
                      </div>
                    ) : null}

                    {pub.doi ? (
                      <div className="mt-2 text-[11px] text-[#777777] font-mono">
                        <span className="text-[#999999] uppercase">Identifier:</span> {pub.doi}
                      </div>
                    ) : null}

                    {pub.keywords && pub.keywords.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {pub.keywords.slice(0, 4).map((kw) => (
                          <span
                            key={kw}
                            className="text-[10px] bg-[#F5F5F3] text-[#555555] px-2 py-0.5 rounded border border-[#E5E5E5]"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
