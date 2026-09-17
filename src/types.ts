export interface ResearchArea {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  keyAspects: string[];
  toolsUsed: string[];
  linkText?: string;
  details?: {
    overview: string;
    objectives: string[];
    methodology: string;
    impact: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: 'RESEARCH' | 'GIS' | 'HYDROLOGY' | 'CLIMATE' | 'ENVIRONMENT';
  categoryLabel: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  secondaryImage?: string;
  tools: string[];
  studyArea?: string;
  researchQuestion?: string;
  methodology?: string;
  outcomes?: string[];
  featured?: boolean;
}

export interface PublicationItem {
  id: string;
  type: 'CONFERENCE' | 'JOURNAL' | 'MANUSCRIPT';
  typeLabel: string;
  year: string;
  title: string;
  authors?: string;
  venue?: string;
  status: string;
  doi?: string;
  link?: string;
  abstract?: string;
  keywords?: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    context?: string;
    highlight?: boolean;
  }[];
}

export interface StudyAreaLocation {
  name: string;
  type: string;
  focus: string;
  method: string;
  characteristics: string;
  coordinates: string;
  image: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  department: string;
  specialization: string;
  details: string[];
  cgpaOrStatus?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  badge?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
