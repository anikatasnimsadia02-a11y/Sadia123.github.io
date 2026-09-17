import React, { useState, useEffect } from 'react';
import { X, Copy, Check, BookOpen, Quote, ExternalLink, Calendar } from 'lucide-react';
import { PublicationItem } from '../types';

interface PublicationModalProps {
  publication: PublicationItem | null;
  onClose: () => void;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({ publication, onClose }) => {
  const [citationFormat, setCitationFormat] = useState<'APA' | 'BIBTEX'>('APA');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (publication) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [publication, onClose]);

  if (!publication) return null;

  const apaCitation = `${publication.authors} (${publication.year}). "${publication.title}." ${publication.venue}. ${publication.doi || ''}`;

  const bibtexCitation = `@article{anika_sadia_${publication.year}_${publication.id.replace(/[^a-zA-Z0-9]/g, '')},
  title = {${publication.title}},
  author = {${publication.authors}},
  year = {${publication.year}},
  journal = {${publication.venue}},
  note = {Status: ${publication.status}}
}`;

  const currentCitation = citationFormat === 'APA' ? apaCitation : bibtexCitation;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(currentCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#FAFAF8] border-b border-[#E5E5E5] flex items-start justify-between">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#F39A24]/15 text-[#c8760e] px-2.5 py-0.5 rounded-md">
                {publication.typeLabel}
              </span>
              <span className="text-[10px] font-semibold text-[#555555] flex items-center space-x-1">
                <Calendar className="w-3 h-3 text-[#F39A24]" />
                <span>{publication.year}</span>
              </span>
              <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                {publication.status}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-extrabold text-[#111111] leading-snug">
              {publication.title}
            </h2>

            <div className="mt-2 text-xs font-semibold text-[#444444]">
              {publication.authors}
            </div>

            <div className="mt-1 text-xs text-[#666666] italic font-serif">
              {publication.venue}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close publication modal"
            className="w-8 h-8 rounded-full bg-[#E5E5E5] hover:bg-[#111111] hover:text-white flex items-center justify-center text-[#555555] transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Abstract */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-[#2F6F73]" />
              <span>Scientific Abstract</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed bg-[#FAFAF8] p-4 rounded-xl border border-[#E5E5E5]">
              {publication.abstract || 'Abstract under review with editorial committee.'}
            </p>
          </div>

          {/* Keywords */}
          {publication.keywords && publication.keywords.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">
                Index Keywords
              </div>
              <div className="flex flex-wrap gap-1.5">
                {publication.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[11px] bg-[#F5F5F3] text-[#333333] px-2.5 py-1 rounded-md border border-[#E5E5E5]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Citation Generator */}
          <div className="p-4 bg-[#F5F5F3] rounded-xl border border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center space-x-1.5">
                <Quote className="w-3.5 h-3.5 text-[#F39A24]" />
                <span>Cite This Publication</span>
              </div>

              <div className="flex items-center space-x-1 bg-white p-0.5 rounded-lg border border-[#E5E5E5]">
                <button
                  type="button"
                  onClick={() => setCitationFormat('APA')}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    citationFormat === 'APA' ? 'bg-[#111111] text-white' : 'text-[#555555]'
                  }`}
                >
                  APA
                </button>
                <button
                  type="button"
                  onClick={() => setCitationFormat('BIBTEX')}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    citationFormat === 'BIBTEX' ? 'bg-[#111111] text-white' : 'text-[#555555]'
                  }`}
                >
                  BibTeX
                </button>
              </div>
            </div>

            <pre className="text-[11px] font-mono bg-white p-3 rounded-lg border border-[#E5E5E5] text-[#333333] overflow-x-auto whitespace-pre-wrap">
              {currentCitation}
            </pre>

            <button
              type="button"
              onClick={handleCopyCitation}
              className="mt-3 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#111111] hover:text-[#F39A24] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Citation Copied to Clipboard!' : 'Copy Citation'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAFAF8] border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="text-xs text-[#777777]">
            CUET Civil Engineering Research Repository
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
