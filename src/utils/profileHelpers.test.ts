import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterSkills,
  groupSkillsByCategory,
  filterProjects,
  formatDateRange,
  validateContactForm,
  buildMailtoUrl,
} from './profileHelpers.ts';
import { SkillItem, ProjectItem } from '../types/profile.ts';

const mockSkills: SkillItem[] = [
  {
    id: '1',
    name: 'Adobe Illustrator',
    category: 'Graphic Design',
    proficiency: 'Expert',
    description: 'Vector illustration and packaging design',
    relatedTechnologies: ['Photoshop', 'Packaging'],
  },
  {
    id: '2',
    name: 'MS Word & Composing',
    category: 'Office & Documentation',
    proficiency: 'Expert',
    description: 'High-speed typing and document publishing in English and Bengali',
    relatedTechnologies: ['MS Excel', 'Bijoy'],
  },
  {
    id: '3',
    name: 'Digital Marketing',
    category: 'Digital Marketing',
    proficiency: 'Proficient',
    description: 'Promotional banners and social audience campaigns',
    relatedTechnologies: ['Social Media', 'Ads'],
  },
];

const mockProjects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Gazi Laboratories Healthcare Brand & Packaging',
    shortDescription: 'Complete pharmaceutical packaging and label graphics',
    fullDescription: 'Comprehensive branding project.',
    coverImage: '/test.jpg',
    category: 'Graphic Design & Branding',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
    status: 'Completed',
    featured: true,
    year: '2023',
  },
  {
    id: 'p2',
    title: 'Current Media Publishing Suite',
    shortDescription: 'Bilingual document composing and commercial print graphics',
    fullDescription: 'Media printing and typing.',
    coverImage: '/test.jpg',
    category: 'Print & Media Publishing',
    technologies: ['Photoshop', 'MS Word', 'Avro'],
    status: 'Active Production',
    featured: true,
    year: '2022',
  },
];

test('filterSkills: filters by category correctly', () => {
  const designOnly = filterSkills(mockSkills, 'Graphic Design', '');
  assert.equal(designOnly.length, 1);
  assert.equal(designOnly[0].name, 'Adobe Illustrator');

  const allSkills = filterSkills(mockSkills, 'All', '');
  assert.equal(allSkills.length, 3);
});

test('filterSkills: filters by search query across name, description, and related technologies', () => {
  const resultQueryName = filterSkills(mockSkills, 'All', 'illustrator');
  assert.equal(resultQueryName.length, 1);
  assert.equal(resultQueryName[0].id, '1');

  const resultQueryRelated = filterSkills(mockSkills, 'All', 'bijoy');
  assert.equal(resultQueryRelated.length, 1);
  assert.equal(resultQueryRelated[0].name, 'MS Word & Composing');

  const resultNoMatch = filterSkills(mockSkills, 'All', 'nonexistent-skill');
  assert.equal(resultNoMatch.length, 0);
});

test('groupSkillsByCategory: groups skills accurately by category', () => {
  const grouped = groupSkillsByCategory(mockSkills);
  assert.equal(grouped['Graphic Design'].length, 1);
  assert.equal(grouped['Office & Documentation'].length, 1);
  assert.equal(grouped['Digital Marketing'].length, 1);
});

test('filterProjects: filters by category and search keyword', () => {
  const designProjects = filterProjects(mockProjects, 'Graphic Design & Branding', '');
  assert.equal(designProjects.length, 1);
  assert.equal(designProjects[0].title, 'Gazi Laboratories Healthcare Brand & Packaging');

  const searchProjects = filterProjects(mockProjects, 'All', 'bilingual');
  assert.equal(searchProjects.length, 1);
  assert.equal(searchProjects[0].id, 'p2');
});

test('formatDateRange: formats completed vs current periods', () => {
  assert.equal(formatDateRange('2021', '2023', false), '2021 - 2023');
  assert.equal(formatDateRange('2023', 'Present', true), '2023 - Present');
});

test('validateContactForm: validates required fields and valid email format', () => {
  const invalid = validateContactForm({
    name: 'S',
    email: 'notanemail',
    subject: 'Hi',
    category: 'General',
    message: 'Short',
  });

  assert.ok(invalid.name);
  assert.ok(invalid.email);
  assert.ok(invalid.subject);
  assert.ok(invalid.message);

  const valid = validateContactForm({
    name: 'Rahim Uddin',
    email: 'rahim@example.com',
    subject: 'Graphic Design Project Inquiry',
    category: 'Design Work',
    message: 'Hello Sirajul, I would like to discuss branding and packaging for our product.',
  });

  assert.equal(Object.keys(valid).length, 0);
});

test('buildMailtoUrl: properly encodes subject and body', () => {
  const url = buildMailtoUrl(
    {
      name: 'Client Name',
      email: 'client@example.com',
      subject: 'Graphic Design Inquiry',
      category: 'Design Work',
      message: 'Need bottle packaging design',
    },
    'sirajul4516@gmail.com'
  );

  assert.ok(url.startsWith('mailto:sirajul4516@gmail.com?subject='));
  assert.ok(url.includes('Graphic%20Design%20Inquiry'));
});
