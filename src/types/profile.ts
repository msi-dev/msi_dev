export type SkillCategory =
  | 'Graphic Design'
  | 'Office & Documentation'
  | 'Computer Operations'
  | 'Programming & Scripting'
  | 'Cloud & Backend'
  | 'Digital Marketing'
  | 'Operating Systems';

export type ProficiencyLevel = 'Expert' | 'Proficient' | 'Familiar';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  yearsOfExperience?: number;
  description: string;
  relatedTechnologies?: string[];
  iconName?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | 'Graphic Design & Branding'
  | 'Print & Media Publishing'
  | 'Digital Marketing'
  | 'Office Automation & Documentation'
  | 'Software & System Development';

export type ProjectStatus = 'Completed' | 'Active Production' | 'Client Work' | 'Portfolio Project';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  highlights?: string[];
  architectureNotes?: string;
}

export interface EducationYearSubjects {
  yearName: string;
  subjects: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  status?: 'Completed' | 'Incomplete' | 'Discontinued' | 'Ongoing';
  durationYears?: string;
  internshipExperience?: string;
  yearSubjects?: EducationYearSubjects[];
  location: string;
  gpa?: string;
  board?: string;
  description: string;
  achievements?: string[];
  academicProjects?: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  duration?: string;
  location?: string;
  expiryDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  type: 'Certification' | 'Specialization' | 'Workshop' | 'Professional Course';
  skillsLearned: string[];
}

export interface EmploymentItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  skills: string;
}

export interface PersonalDetails {
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  nid: string;
  religion: string;
  height: string;
  weight: string;
  bloodGroup: string;
  village: string;
  postOffice: string;
  policeStation: string;
  district: string;
  contactNumber: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'x' | 'email' | 'website';
  label: string;
  url: string;
  iconName: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ProfileStat {
  label: string;
  value: string;
  description?: string;
}

export interface AiExperienceItem {
  id: string;
  name: string;
  provider: string;
  description: string;
  category: string;
  capabilities: string[];
  url: string;
  logoType: 'chatgpt' | 'aistudio' | 'cloud' | 'deepseek' | 'openrouter' | 'llama' | 'gemini';
}

export interface TechnicalHobbyItem {
  category: string;
  title: string;
  description: string;
  skills: string[];
  iconName?: string;
}

export interface DevProfile {
  name: string;
  username: string;
  url: string;
  platform: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location?: string;
  address?: string;
  email: string;
  phone?: string;
  availability: string;
  profileImage: string;
  resumeUrl: string;
  stats: ProfileStat[];
  socialLinks: SocialLink[];
  philosophy: PhilosophyPillar[];
  hobbies: string[];
  technicalHobbies: TechnicalHobbyItem[];
  devProfiles: DevProfile[];
  aiExperience: AiExperienceItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  training: TrainingItem[];
  employment: EmploymentItem[];
  languages: LanguageItem[];
  personalDetails: PersonalDetails;
}
