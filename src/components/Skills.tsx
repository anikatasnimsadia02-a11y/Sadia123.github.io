import React from 'react';
import { Droplets, Map, Leaf, Code, Wrench, CheckCircle } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#2F6F73]" />;
      case 'Map':
        return <Map className="w-5 h-5 text-[#F39A24]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-700" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#111111]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#F39A24]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>COMPUTATIONAL & ANALYTICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            TOOLS & METHODS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
            Software frameworks, numerical modeling suites, and spatial data engines utilized across water resources engineering investigations.
          </p>
        </div>

        {/* 4 Categorized Skill Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNICAL_SKILLS.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5E5] shadow-xs hover:border-[#F39A24] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-[#F0F0F0]">
                <div className="p-2.5 rounded-xl bg-[#F5F5F3] border border-[#E5E5E5]">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-wide">
                    {category.title}
                  </h3>
                  <div className="text-xs text-[#666666]">
                    {category.subtitle}
                  </div>
                </div>
              </div>

              {/* Skill Items List (Clean pills & context, no arbitrary percentage bars) */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] hover:bg-white hover:border-[#F39A24] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle
                          className={`w-3.5 h-3.5 ${
                            skill.highlight ? 'text-[#F39A24]' : 'text-gray-400'
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-bold text-[#111111]">
                          {skill.name}
                        </span>
                      </div>
                      {/* Clean name display without Core label */}
                    </div>
                    {skill.context && (
                      <p className="mt-1 text-xs text-[#666666] pl-5.5 leading-relaxed">
                        {skill.context}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
