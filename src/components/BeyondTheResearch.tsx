import React from 'react';
import { Mail, Linkedin, FileText, Download, ExternalLink, Quote } from 'lucide-react';
import { RESEARCHER_PROFILE } from '../data/portfolioData';

interface BeyondTheResearchProps {
  onOpenCvModal?: () => void;
}

export const BeyondTheResearch: React.FC<BeyondTheResearchProps> = ({ onOpenCvModal }) => {
  const cvUrl = "https://file.tmper.app/image_1789653212642_3bd1cab9.pdf";
  const linkedinUrl = "https://linkedin.com/in/anika-tasnim-sadia";
  const email = "anikatasnimsadia02@gmail.com";

  return (
    <section
      id="beyond-the-research"
      className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E5E5E5] relative overflow-hidden"
    >
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39A24]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2F6F73]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
            BEYOND THE RESEARCH
          </h2>

          <div className="w-16 h-1 bg-[#F39A24] mt-4 mb-4 rounded-full"></div>

          <p className="max-w-2xl text-sm sm:text-base text-[#555555] leading-relaxed">
            Exploring the personal curiosity, intellectual drive, and creative perspectives that fuel my commitment to civil & environmental engineering.
          </p>
        </div>

        {/* Two-Column Card Layout: Portrait + Quote & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Image with curated styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Outer decorative border/glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#F39A24]/30 to-[#2F6F73]/30 rounded-3xl blur-xs opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-[#F5F5F3] border border-[#E5E5E5] shadow-lg">
                <img
                  src="https://i.ibb.co.com/HLd03Hj1/IMG-20260512-121651-jpg.jpg"
                  alt="Anika Tasnim Sadia - Beyond the Research"
                  className="w-full h-auto object-cover object-center aspect-[4/5] hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Image Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold tracking-wider uppercase text-[11px]">Anika Tasnim Sadia</span>
                  <span className="text-[#F39A24] font-mono text-[10px]">CUET • Civil Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote & Contact Details */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Featured Quote Card */}
            <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] shadow-xs relative">
              <Quote className="w-10 h-10 text-[#F39A24]/30 absolute top-5 right-5" />

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#111111] leading-snug tracking-tight">
                &ldquo;Curiosity drives the questions. Research shapes the answers.&rdquo;
              </blockquote>
            </div>

            {/* Direct Connect & Resources Box */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border-2 border-[#111111]/10 shadow-sm">
              <h3 className="text-base font-black uppercase tracking-wider text-[#111111] mb-5 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#F39A24]"></span>
                <span>Get In Touch & Credentials</span>
              </h3>

              <div className="space-y-4">
                {/* 1. Email Item */}
                <a
                  href={`mailto:${email}`}
                  id="beyond-email-link"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FAFAF8] hover:bg-[#F39A24]/10 border border-[#E5E5E5] hover:border-[#F39A24]/40 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#2F6F73]/10 text-[#2F6F73] flex items-center justify-center shrink-0 group-hover:bg-[#2F6F73] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                        Email
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#111111] truncate group-hover:text-[#F39A24] transition-colors">
                        {email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#999999] group-hover:text-[#111111] transition-colors shrink-0 ml-2" />
                </a>

                {/* 2. LinkedIn Item */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="beyond-linkedin-link"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FAFAF8] hover:bg-[#0A66C2]/10 border border-[#E5E5E5] hover:border-[#0A66C2]/40 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                        LinkedIn
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#111111] truncate group-hover:text-[#0A66C2] transition-colors">
                        linkedin.com/in/anika-tasnim-sadia
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#999999] group-hover:text-[#111111] transition-colors shrink-0 ml-2" />
                </a>

                {/* 3. CV Download Item */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Anika_Tasnim_Sadia_CV.pdf"
                  id="beyond-cv-link"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#111111] hover:bg-[#F39A24] text-white hover:text-[#111111] transition-all duration-200 group cursor-pointer shadow-xs"
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-[#111111]/20 flex items-center justify-center shrink-0 text-[#F39A24] group-hover:text-[#111111] transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-300 group-hover:text-[#111111]/80">
                        Curriculum Vitae
                      </div>
                      <div className="text-xs sm:text-sm font-bold truncate">
                        Download Official CV (PDF)
                      </div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-[#F39A24] group-hover:text-[#111111] transition-colors shrink-0 ml-2" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
