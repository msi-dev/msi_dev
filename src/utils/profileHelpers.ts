import { SkillCategory, SkillItem, ProjectCategory, ProjectItem } from '../types/profile.ts';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function filterSkills(
  skills: SkillItem[],
  selectedCategory: SkillCategory | 'All',
  searchQuery: string
): SkillItem[] {
  const query = searchQuery.trim().toLowerCase();

  return skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesQuery =
      !query ||
      skill.name.toLowerCase().includes(query) ||
      skill.description.toLowerCase().includes(query) ||
      skill.proficiency.toLowerCase().includes(query) ||
      (skill.relatedTechnologies && skill.relatedTechnologies.some((t) => t.toLowerCase().includes(query)));

    return matchesCategory && matchesQuery;
  });
}

export function groupSkillsByCategory(skills: SkillItem[]): Record<SkillCategory, SkillItem[]> {
  const grouped: Partial<Record<SkillCategory, SkillItem[]>> = {};

  for (const skill of skills) {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category]!.push(skill);
  }

  return grouped as Record<SkillCategory, SkillItem[]>;
}

export function filterProjects(
  projects: ProjectItem[],
  selectedCategory: ProjectCategory | 'All',
  searchQuery: string
): ProjectItem[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.status.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });
}

export function formatDateRange(startDate: string, endDate: string, isCurrent: boolean): string {
  if (isCurrent) {
    return `${startDate} - Present`;
  }
  return `${startDate} - ${endDate}`;
}

export function validateContactForm(values: ContactFormValues): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.subject || values.subject.trim().length < 3) {
    errors.subject = 'Subject line is required (at least 3 characters).';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please write a message with at least 10 characters.';
  }

  return errors;
}

export function buildMailtoUrl(values: ContactFormValues, recipientEmail: string): string {
  const subject = encodeURIComponent(`[Portfolio] ${values.category ? `(${values.category}) ` : ''}${values.subject}`);
  const body = encodeURIComponent(
    `From: ${values.name} (${values.email})\n` +
    `Topic: ${values.category}\n\n` +
    `${values.message}\n\n` +
    `---\nSent via Portfolio Contact Form`
  );
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
