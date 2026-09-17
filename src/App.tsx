import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProject } from './components/FeaturedProject';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { ResearchInterests } from './components/ResearchInterests';
import { EducationTimeline } from './components/EducationTimeline';
import { BeyondTheResearch } from './components/BeyondTheResearch';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { PublicationModal } from './components/PublicationModal';
import { CvModal } from './components/CvModal';

import { ProjectItem, PublicationItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<PublicationItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // ScrollSpy to update active section in navigation
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'featured-project',
      'publications',
      'skills',
      'research-interests',
      'education',
      'beyond-the-research'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewResearch = () => {
    const targetSec = document.getElementById('featured-project') || document.getElementById('publications');
    if (targetSec) {
      targetSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] flex flex-col font-sans selection:bg-[#F39A24]/20 selection:text-[#111111]">
      {/* 01 — NAVIGATION */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 02 — HERO */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onViewResearch={handleViewResearch}
        />

        {/* 03 — ABOUT ME */}
        <About onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 04 — FEATURED RESEARCH THESIS */}
        <FeaturedProject onOpenProjectModal={(proj) => setSelectedProject(proj)} />

        {/* 05 — PUBLICATIONS */}
        <Publications onSelectPublication={(pub) => setSelectedPublication(pub)} />

        {/* 06 — COMPUTATIONAL TOOLS & METHODS */}
        <Skills />

        {/* 07 — RESEARCH INTERESTS */}
        <ResearchInterests />

        {/* 08 — EDUCATION */}
        <EducationTimeline />

        {/* 09 — BEYOND THE RESEARCH */}
        <BeyondTheResearch onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PublicationModal
        publication={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
