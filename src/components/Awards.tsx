import React from 'react';
import { Award, Trophy, CheckCircle, ExternalLink } from 'lucide-react';
import { AWARDS_DATA } from '../data/portfolioData';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Centered Trophy Badge directly inspired by reference image */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F39A24]/10 text-[#F39A24] mb-3">
            <Trophy className="w-5 h-5" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-tight uppercase">
            AWARDS AND HONORS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            Scholarly recognitions, conference acceptance awards, and departmental academic honors.
          </p>
        </div>

        {/* Horizontal Row of Compact Academic Recognition Cards inspired by reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_DATA.map((award) => (
            <div
              key={award.id}
              className="bg-white p-6 rounded-2xl border border-[#E5E5E5] hover:border-[#F39A24] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm group text-center"
            >
              <div>
                {/* Organization Logo / Badge Representation */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] flex items-center justify-center text-[#111111] group-hover:bg-[#F39A24]/10 group-hover:text-[#F39A24] transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F39A24] mb-1">
                  {award.year} • {award.badge}
                </div>

                <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#F39A24] transition-colors leading-snug">
                  {award.title}
                </h3>

                <div className="mt-2 text-xs font-semibold text-[#555555]">
                  {award.organization}
                </div>

                <p className="mt-2 text-xs text-[#777777] leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center text-[11px] text-[#888888] font-medium">
                <CheckCircle className="w-3 h-3 text-[#2F6F73] mr-1" />
                <span>Verified Academic Merit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots as seen in reference image */}
        <div className="mt-10 flex justify-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F39A24]"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};
