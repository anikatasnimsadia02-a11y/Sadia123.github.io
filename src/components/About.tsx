import React from 'react';
import { Download, GraduationCap, MapPin, Mail, ExternalLink, BookOpen, CheckCircle2, Linkedin } from 'lucide-react';
import { RESEARCHER_PROFILE, PORTFOLIO_IMAGES } from '../data/portfolioData';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Layout directly inspired by reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait with rounded corners & metadata */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md">
              {/* Outer subtle shadow & accent framing */}
              <div className="overflow-hidden rounded-2xl shadow-sm border border-[#E5E5E5] bg-[#F5F5F3]">
                <img
                  src="https://i.ibb.co.com/NnkjLSTj/photo.png"
                  alt="Anika Tasnim Sadia - Civil & Water Resources Engineering"
                  className="w-full h-auto object-cover object-center aspect-[4/5] hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Research Affiliation Card beneath portrait */}
              <div className="mt-4 p-4 bg-[#F5F5F3] rounded-xl border border-[#E5E5E5] flex items-center space-x-3 w-full">
                <div className="w-10 h-10 rounded-lg bg-[#2F6F73]/10 flex items-center justify-center text-[#2F6F73] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                    CUET Civil Engineering
                  </div>
                  <div className="text-xs text-[#555555]">
                    Water Resources Engineering Specialization
                  </div>
                </div>
              </div>

              {/* Location & Quick Contact Badge */}
              <div className="mt-3 space-y-1.5 text-xs text-[#555555] px-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F39A24]" />
                    <span>Chattogram, Bangladesh</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2F6F73]" />
                    <a
                      href={`mailto:${RESEARCHER_PROFILE.email}`}
                      className="hover:text-[#F39A24] transition-colors"
                    >
                      {RESEARCHER_PROFILE.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center justify-end pt-0.5">
                  <a
                    href="https://linkedin.com/in/anika-tasnim-sadia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#0A66C2] hover:text-[#004182] hover:underline transition-colors font-medium"
                  >
                    <Linkedin className="w-3.5 h-3.5 shrink-0" />
                    <span>LinkedIn: linkedin.com/in/anika-tasnim-sadia</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Biography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small uppercase category label */}
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A24] mb-2">
              BIOGRAPHY & ACADEMIC BACKGROUND
            </div>

            {/* Large Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
              ABOUT ME
            </h2>

            <div className="text-sm font-semibold tracking-wider uppercase text-[#555555] mb-6 flex items-center space-x-2">
              <span>ANIKA TASNIM SADIA</span>
              <span>•</span>
              <span className="text-[#2F6F73]">WATER RESOURCES ENGINEERING</span>
            </div>

            {/* Academic Narrative paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#333333] leading-relaxed font-normal">
              {RESEARCHER_PROFILE.detailedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Competencies Checklist */}
            <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
                Key Research & Modeling Competencies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#444444]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F39A24] shrink-0" />
                  <span>EPA SWMM & PySWMM Dynamic Routing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F39A24] shrink-0" />
                  <span>ArcGIS Pro Spatial Analyst & DEM Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F39A24] shrink-0" />
                  <span>OpenLCA & ReCiPe 2016 Carbon Accounting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F39A24] shrink-0" />
                  <span>ML based groundwater trend analysis</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={RESEARCHER_PROFILE.resumeUrl}
                download={RESEARCHER_PROFILE.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                id="about-download-cv-btn"
                className="inline-flex items-center space-x-2 bg-[#111111] hover:bg-[#F39A24] text-white hover:text-[#111111] font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD MY CV</span>
              </a>

              <a
                href="#publications"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#F39A24] px-4 py-3 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#2F6F73]" />
                <span>VIEW PUBLICATIONS & PREPRINTS</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
