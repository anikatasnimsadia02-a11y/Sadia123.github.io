import React, { useState } from 'react';
import { ArrowUpRight, Filter, Calendar, FolderGit2 } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterCategory = 'ALL' | 'RESEARCH' | 'GIS' | 'HYDROLOGY' | 'CLIMATE' | 'ENVIRONMENT';

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: 'ALL', value: 'ALL' },
    { label: 'RESEARCH', value: 'RESEARCH' },
    { label: 'GIS', value: 'GIS' },
    { label: 'HYDROLOGY', value: 'HYDROLOGY' },
    { label: 'CLIMATE', value: 'CLIMATE' },
    { label: 'ENVIRONMENT', value: 'ENVIRONMENT' },
  ];

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2 flex items-center space-x-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>TECHNICAL & ACADEMIC PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
              PROJECTS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-2xl">
              Applied engineering models, catchment analyses, and climate evaluations investigating urban hydrology and environmental sustainability.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-[#555555] font-medium">
            Showing {filteredProjects.length} of {ALL_PROJECTS.length} investigations
          </div>
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#555555] mr-2">
            <Filter className="w-3.5 h-3.5 mr-1 text-[#F39A24]" />
            <span>Filter:</span>
          </div>

          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.value;
            return (
              <button
                key={btn.value}
                type="button"
                onClick={() => setActiveFilter(btn.value)}
                id={`filter-btn-${btn.value.toLowerCase()}`}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#111111] text-[#F39A24] shadow-xs'
                    : 'bg-white text-[#555555] hover:text-[#111111] hover:border-[#111111] border border-[#E5E5E5]'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#F39A24] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {project.year ? (
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-xs text-[#111111] text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-2xs">
                        <Calendar className="w-3 h-3 text-[#F39A24]" />
                        <span>{project.year}</span>
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2F6F73] mb-1.5">
                    {project.categoryLabel}
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#F39A24] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tools Used */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-medium bg-[#F5F5F3] text-[#444444] px-2 py-0.5 rounded border border-[#E5E5E5]"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] font-medium text-[#777777] px-1 py-0.5">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Details Button */}
              <div className="p-6 pt-0 border-t border-transparent">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  id={`project-view-btn-${project.id}`}
                  className="w-full inline-flex items-center justify-center space-x-1.5 bg-[#F5F5F3] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors duration-200"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F39A24]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
