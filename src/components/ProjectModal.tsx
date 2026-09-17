import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Wrench, CheckCircle, HelpCircle, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="relative bg-[#111111] overflow-hidden">
          {project.secondaryImage ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 aspect-[16/10] sm:aspect-[21/9]">
              <div className="relative h-full overflow-hidden border-b sm:border-b-0 sm:border-r border-white/10">
                <img
                  src={project.image}
                  alt={`${project.title} - Agrabad Commercial Area`}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                  Agrabad Commercial Area
                </div>
              </div>
              <div className="relative h-full overflow-hidden">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} - CEPZ Industrial Area`}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                  CEPZ Industrial Area
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-[16/8] sm:aspect-[21/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-75"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tags on image */}
          <div className="absolute bottom-4 left-6 right-6 z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#F39A24] text-[#111111] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              {project.year ? (
                <span className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </span>
              ) : null}
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Study Area Context */}
          {project.studyArea && (
            <div className="p-3 bg-[#F5F5F3] rounded-xl flex items-center space-x-2 text-xs sm:text-sm text-[#333333] border border-[#E5E5E5]">
              <MapPin className="w-4 h-4 text-[#F39A24] shrink-0" />
              <span className="font-bold">Investigation Study Area:</span>
              <span>{project.studyArea}</span>
            </div>
          )}

          {/* Research Question */}
          {project.researchQuestion && (
            <div className="p-4 bg-orange-50/60 rounded-xl border border-[#F39A24]/30">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F39A24] flex items-center space-x-1 mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Core Research Question</span>
              </div>
              <p className="text-xs sm:text-sm text-[#333333] italic font-serif">
                "{project.researchQuestion}"
              </p>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
              Project Overview & Scientific Context
            </h3>
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed whitespace-pre-line">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Methodology */}
          {project.methodology && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-[#2F6F73]" />
                <span>Methodological Framework</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed bg-[#FAFAF8] p-3 rounded-xl border border-[#E5E5E5]">
                {project.methodology}
              </p>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#F39A24]" />
                <span>Key Quantitative Outcomes & Impact</span>
              </h3>
              <ul className="space-y-2">
                {project.outcomes.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#444444] flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F39A24] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center space-x-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#555555]" />
              <span>Computational Software & Engineering Tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-semibold bg-[#F5F5F3] text-[#111111] px-3 py-1 rounded-md border border-[#E5E5E5]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#FAFAF8] border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="text-xs text-[#777777]">
            CUET Civil Engineering Research Archive
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#111111] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F39A24] hover:text-[#111111] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
