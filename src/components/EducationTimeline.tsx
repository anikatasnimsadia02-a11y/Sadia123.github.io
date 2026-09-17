import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>DEGREE CREDENTIALS & ACADEMIC TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            ACADEMIC EDUCATION
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
            Formal engineering degree credentials and academic coursework in water resources and civil engineering.
          </p>
        </div>

        {/* Academic Education Section Only */}
        <div className="max-w-3xl">
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] hover:border-[#F39A24] transition-colors shadow-2xs"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#F39A24]/10 text-[#F39A24]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#111111] leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-[#333333] mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-[#666666] mb-4">
                  {edu.department} • <span className="text-[#2F6F73] font-semibold">{edu.specialization}</span>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2.5">
                  {edu.details.map((detail, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-[#555555] leading-relaxed flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F39A24] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
