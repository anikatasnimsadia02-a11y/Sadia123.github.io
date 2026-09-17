import React, { useEffect } from 'react';
import { X, Printer, Download, GraduationCap, BookOpen, Wrench, Mail, MapPin } from 'lucide-react';
import { RESEARCHER_PROFILE, EDUCATION_DATA, PUBLICATIONS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-[#111111] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F39A24]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Curriculum Vitae (Academic Preview)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={RESEARCHER_PROFILE.resumeUrl}
              download={RESEARCHER_PROFILE.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              id="cv-modal-download-direct-btn"
              className="inline-flex items-center space-x-1.5 bg-[#F39A24] text-[#111111] hover:bg-[#e08915] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF CV</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              id="cv-modal-print-btn"
              className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors text-white"
            >
              <Printer className="w-3.5 h-3.5 text-[#F39A24]" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV Modal"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Linked File Information Bar */}
        <div className="bg-[#1a1d21] text-xs text-gray-300 px-4 sm:px-6 py-2 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#F39A24] font-bold text-[11px] uppercase tracking-wider">Configured File:</span>
            <span className="text-white font-medium text-[11px]">{RESEARCHER_PROFILE.resumeFileName}</span>
          </div>
          <span className="text-[11px] text-gray-400 font-mono hidden md:inline truncate max-w-md">
            {RESEARCHER_PROFILE.resumeUrl}
          </span>
        </div>

        {/* Printable CV Paper Body */}
        <div className="p-6 sm:p-12 overflow-y-auto bg-[#FAFAF8] text-[#111111] font-sans print:p-0 print:bg-white">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xs border border-[#E5E5E5] print:shadow-none print:border-none">
            
            {/* Header / Name / Title */}
            <div className="border-b-2 border-[#111111] pb-6 mb-6">
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                ANIKA TASNIM SADIA
              </h1>
              <div className="text-sm font-bold uppercase tracking-widest text-[#2F6F73] mt-1">
                Water Resources Engineering • Civil Engineering Graduate
              </div>

              {/* Contact Info Row */}
              <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-[#555555]">
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-[#F39A24]" />
                  <span>{RESEARCHER_PROFILE.email}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F39A24]" />
                  <span>{RESEARCHER_PROFILE.location}</span>
                </span>
                <span>Affiliation: {RESEARCHER_PROFILE.affiliation}</span>
              </div>
            </div>

            {/* Academic Profile Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#111111] border-b border-gray-200 pb-1 mb-2">
                Executive Profile & Research Statement
              </h2>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {RESEARCHER_PROFILE.shortBio} Dedicated to advancing resilient urban stormwater solutions, watershed spatial analysis, and life cycle sustainability metrics across rapidly urbanizing and coastal climates.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#111111] border-b border-gray-200 pb-1 mb-3 flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-[#F39A24]" />
                <span>Education</span>
              </h2>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-[#111111]">
                    <span>{edu.degree}</span>
                    {edu.period ? <span className="text-[#555555] font-semibold">{edu.period}</span> : null}
                  </div>
                  <div className="text-xs text-[#555555] font-medium">
                    {edu.institution} — {edu.department}
                  </div>
                  <div className="text-xs text-[#2F6F73] font-semibold mt-0.5">
                    Specialization: {edu.specialization}
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-[#555555]">
                    {edu.details.map((d, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-[#F39A24] font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Software & Analytical Capabilities */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#111111] border-b border-gray-200 pb-1 mb-3 flex items-center space-x-1.5">
                <Wrench className="w-4 h-4 text-[#2F6F73]" />
                <span>Technical & Computational Competencies</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {TECHNICAL_SKILLS.map((cat) => (
                  <div key={cat.title} className="p-2.5 bg-[#FAFAF8] rounded border border-gray-200">
                    <div className="font-bold text-[#111111] uppercase tracking-wider text-[11px] mb-1">
                      {cat.title}
                    </div>
                    <div className="text-[#555555] leading-relaxed">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#111111] border-b border-gray-200 pb-1 mb-3 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-[#F39A24]" />
                <span>Research Publications & Conference Proceedings</span>
              </h2>
              <div className="space-y-3">
                {PUBLICATIONS.map((pub) => (
                  <div key={pub.id} className="text-xs">
                    <div className="font-bold text-[#111111]">
                      "{pub.title}"
                    </div>
                    {(pub.authors || pub.venue) && (
                      <div className="text-[#555555] mt-0.5">
                        {pub.authors ? `${pub.authors} ` : ''}
                        {pub.year ? `(${pub.year}). ` : ''}
                        {pub.venue ? <span className="italic">{pub.venue}</span> : null}
                      </div>
                    )}
                    <div className="text-[10px] text-[#c8760e] font-semibold mt-0.5">
                      Status: {pub.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FFFFFF] border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="text-xs text-[#777777]">
            Academic CV Formatted for PhD Applications & Research Networking
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#111111] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F39A24] hover:text-[#111111] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
