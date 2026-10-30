import { ProfileData } from '../types/profile.ts';

/**
 * Central Profile Configuration for Md. Sirajul Islam
 * Professional Graphic Designer, Computer Operator, Developer & Digital Media Specialist
 */
export const profileData: ProfileData = {
  name: 'Md. Sirajul Islam',
  title: 'Graphic Designer, Computer Operator & Tech Enthusiast',
  tagline:
    'Dedicated Graphic Designer, Computer Operator, and Developer combining visual packaging, computerized office workflows, and advanced software/AI engineering.',
  shortBio:
    'Experienced professional with hands-on background at Gazi Laboratories and Current Media, backed by graphic design, computer operations, digital marketing, nursing clinical experience, and full-stack software & AI integration skills.',
  fullBio: [
    'I am a versatile Graphic Designer, Computer Operator, and Tech Specialist based in Rangamati/Chattogram, Bangladesh. My objective is to work in a challenging environment, achieve continuous skills in my field, and work for the simultaneous progression of the organization and myself.',
    'I bring proven professional experience from Gazi Laboratories Unani Bangladesh and Current Media, managing packaging design, brand collaterals, digital printing, and high-accuracy computerized data operations.',
    'Beyond commercial design and office management, I am deeply invested in software development, Android engineering, system design, IoT, ethical hacking, electronics, and generative AI integration—actively building tools and experiments across multiple platforms.',
  ],
  location: 'Kaptai, Rangamati, Chattogram, Bangladesh',
  address: 'Vill-Lamuchori Para, P/O-Raikhaly Bazar, P/S-Chondraghuna, Kaptai, Rangamati',
  email: 'sirajul4516@gmail.com',
  phone: '01629744516',
  availability: 'Available for Full-time Roles, Office Positions, Design & Development Projects',
  profileImage: '/src/assets/images/sirajul_designer_portrait_1793046616433.jpg',
  resumeUrl: '#resume-modal',

  stats: [
    {
      label: 'Professional Experience',
      value: '2+ Yrs',
      description: 'Hands-on graphic design & computerized operations at Gazi Laboratories & Current Media',
    },
    {
      label: 'Professional Trainings',
      value: '3 Courses',
      description: 'Certified 6-month programs in Graphic Design, Computer Operations & Digital Marketing',
    },
    {
      label: 'Clinical Internship',
      value: '6 month',
      description: 'Hands-on hospital clinical training at TMSS Nursing Institute',
    },
    {
      label: 'Language Proficiencies',
      value: '4 Languages',
      description: 'Bengali (Native), English, Hindi, and Gulf Arabic (Spoken/Listening)',
    },
  ],

  socialLinks: [
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:sirajul4516@gmail.com',
      iconName: 'Mail',
    },
    {
      platform: 'website',
      label: 'Call / WhatsApp',
      url: 'tel:01629744516',
      iconName: 'Phone',
    },
    {
      platform: 'github',
      label: 'GitHub (msi_dev)',
      url: 'https://github.com/msi-dev',
      iconName: 'Github',
    },
    {
      platform: 'github',
      label: 'GitHub (MSI-Sirajul)',
      url: 'https://github.com/MSI-Sirajul',
      iconName: 'Github',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      iconName: 'Linkedin',
    },
  ],

  devProfiles: [
    {
      name: 'msi-dev',
      username: 'msi-dev',
      url: 'https://github.com/msi_dev',
      platform: 'GitHub',
    },
    {
      name: 'MSI-Sirajul',
      username: 'MSI-Sirajul',
      url: 'https://github.com/MSI-Sirajul',
      platform: 'GitHub',
    },
  ],

  philosophy: [
    {
      title: 'Visual Clarity & Branding Precision',
      description:
        'Graphic design must capture attention and communicate product authenticity. I focus on clean typography, vector precision, and print-ready production standards.',
      iconName: 'Palette',
    },
    {
      title: 'Operational Speed & Data Accuracy',
      description:
        'Computer operations demand meticulous attention to detail. Whether managing complex Excel spreadsheets or high-volume document typing in Bengali and English, accuracy is paramount.',
      iconName: 'CheckCircle2',
    },
    {
      title: 'Multidisciplinary Curiosity & Problem Solving',
      description:
        'Combining medical science awareness, computer systems, electronics, programming, and state-of-the-art AI tooling to build resilient, innovative solutions.',
      iconName: 'Cpu',
    },
  ],

  hobbies: [
    'Programming & Full-Stack Development',
    'Android App Development',
    'Web & UI/UX Design',
    'System Design & Architecture',
    'Ethical Hacking & Information Gathering',
    'IoT (Internet of Things) Development',
    'Electronic and Mechanical Engineering & Study',
    'AI Model Exploration & Prompt Engineering',
    'Playing cricket and outdoor sports',
  ],

  technicalHobbies: [
    {
      category: 'Software & Mobile Development',
      title: 'Programming & Android Development',
      description:
        'Developing native Android mobile apps, responsive web interfaces, and backend systems across diverse programming stacks.',
      skills: ['Android Development', 'Web Design', 'System Design', 'Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'PHP'],
      iconName: 'Smartphone',
    },
    {
      category: 'Cloud, Database & Hosting',
      title: 'Backend, Database & Hosting Architecture',
      description:
        'Configuring real-time cloud backends, relational databases, managed hosting environments, and automated scripts.',
      skills: ['Hosting', 'Supabase', 'Firebase', 'Nhost', 'SQL', 'PostgreSQL', 'Shell Script (.sh)', 'Batch Script (.bat)'],
      iconName: 'Database',
    },
    {
      category: 'Cybersecurity & Security Research',
      title: 'Ethical Hacking & Information Gathering',
      description:
        'Network scanning, reconnaissance methodologies, vulnerability assessments, security auditing, and system hardening practices.',
      skills: ['Ethical Hacking', 'Information Gathering', 'Network Security', 'Penetration Testing Concepts', 'Linux OS'],
      iconName: 'Shield',
    },
    {
      category: 'Hardware & Engineering',
      title: 'IoT, Electronic & Mechanical Engineering',
      description:
        'Hardware prototyping with microcontrollers, sensor integration, electronic circuit design, and mechanical device analysis.',
      skills: ['IoT Development', 'Microcontrollers', 'Sensor Interfacing', 'Electronic Circuits', 'Mechanical Systems'],
      iconName: 'Cpu',
    },
  ],

  aiExperience: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      provider: 'OpenAI',
      description: 'Advanced reasoning, prompt engineering, content generation, and code problem solving.',
      category: 'Conversational LLM & Reasoning',
      capabilities: ['Prompt Engineering', 'Code Generation', 'Document Synthesis', 'Data Structuring'],
      url: 'https://chatgpt.com',
      logoType: 'chatgpt',
    },
    {
      id: 'aistudio',
      name: 'Google AI Studio',
      provider: 'Google',
      description: 'Rapid prototyping, system instruction configuration, and modern @google/genai SDK implementation.',
      category: 'Developer AI Studio & Prototyping',
      capabilities: ['Gemini 2.0 / 1.5 Models', 'System Prompt Tuning', 'Function Calling', 'API Key Management'],
      url: 'https://aistudio.google.com',
      logoType: 'aistudio',
    },
    {
      id: 'cloud',
      name: 'Google Cloud (Vertex AI)',
      provider: 'Google Cloud Platform',
      description: 'Enterprise AI services, Cloud Run microservices, API integrations, and secure cloud workloads.',
      category: 'Enterprise Cloud AI',
      capabilities: ['Vertex AI', 'Cloud Run', 'IAM Security', 'Model Deployment'],
      url: 'https://cloud.google.com',
      logoType: 'cloud',
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      provider: 'DeepSeek AI',
      description: 'DeepSeek-R1 reasoning model evaluation, complex algorithm analysis, and cost-effective inference.',
      category: 'Reasoning & Coding LLM',
      capabilities: ['DeepSeek-R1 Reasoning', 'Mathematical Logic', 'Open Weights', 'Code Refinement'],
      url: 'https://chat.deepseek.com',
      logoType: 'deepseek',
    },
    {
      id: 'openrouter',
      name: 'OpenRouter',
      provider: 'OpenRouter',
      description: 'Unified multi-model API aggregator for dynamic model failover, cost optimization, and routing.',
      category: 'Multi-Model API Orchestration',
      capabilities: ['Universal LLM Gateway', 'Model Fallbacks', 'Latency Optimization', 'Cost Tracking'],
      url: 'https://openrouter.ai',
      logoType: 'openrouter',
    },
    {
      id: 'llama',
      name: 'Meta Llama',
      provider: 'Meta',
      description: 'Open-weights Llama 3 / 3.3 model architecture, local inference testing, and fine-tuning experiments.',
      category: 'Open-Source Foundation Models',
      capabilities: ['Llama 3.3', 'Local Inference (Ollama/vLLM)', 'Fine-tuning', 'Context Windows'],
      url: 'https://www.llama.com',
      logoType: 'llama',
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      provider: 'Google',
      description: 'Multimodal comprehension, vision inputs, structured JSON outputs, and real-time live interactions.',
      category: 'Multimodal Frontier Model',
      capabilities: ['Multimodal Vision', 'Structured Output', 'Web Search Grounding', 'Ultra-long Context'],
      url: 'https://gemini.google.com',
      logoType: 'gemini',
    },
  ],

  employment: [
    {
      id: 'emp-gazi',
      company: 'Gazi Laboratories Unani Bangladesh',
      position: 'Graphic Designer & Computer Operator',
      period: 'November 2022 – April 2023',
      location: '2nd Super Market, Hathazari, Chattogram',
      description:
        'Spearheaded graphic design production for healthcare and herbal product packaging while managing digital computer documentation and office workflows.',
      responsibilities: [
        'Designed labels, bottle wraps, cartons, and promotional posters for Unani pharmaceutical products using Adobe Illustrator and Photoshop.',
        'Created and maintained digital inventory sheets, purchase orders, and administrative documentation in MS Excel and MS Word.',
        'Prepared color-separated, high-resolution vector artwork files for commercial print manufacturing.',
        'Conducted bilingual typing and computer data processing with high speed and accuracy.',
      ],
    },
    {
      id: 'emp-media',
      company: 'Current Media',
      position: 'Computer Operator',
      period: '2021 – 2022',
      location: 'Chandraghuna, Licubagan, Bank Asia',
      description:
        'Managed daily computer operations, customer digital publishing, document design, and computerized data processing services.',
      responsibilities: [
        'Composed high-volume official documents, application letters, and academic materials in both Bengali (Bijoy/Avro) and English.',
        'Designed digital advertising banners, local business posters, visiting cards, and promotional flyers.',
        'Operated high-speed digital printers, scanners, and peripheral hardware while assisting client inquiries.',
        'Conducted internet research, email communications, and digital data entry.',
      ],
    },
  ],

  skills: [
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      category: 'Graphic Design',
      proficiency: 'Expert',
      yearsOfExperience: 3,
      description:
        'Vector illustration, corporate logo design, commercial packaging, product labels, vector typography, and print layouts.',
      relatedTechnologies: ['Vector Art', 'Logo Design', 'Packaging', 'Print Media'],
      featured: true,
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      category: 'Graphic Design',
      proficiency: 'Expert',
      yearsOfExperience: 3,
      description:
        'Photo retouching, image color grading, social media banner creation, mockup generation, and visual compositions.',
      relatedTechnologies: ['Image Editing', 'Photo Manipulation', 'Mockups', 'Digital Art'],
      featured: true,
    },
    {
      id: 'ms-word',
      name: 'MS Word & Document Processing',
      category: 'Office & Documentation',
      proficiency: 'Expert',
      yearsOfExperience: 4,
      description:
        'Professional report formatting, official letters, resume composition, table structuring, and high-speed bilingual typing.',
      relatedTechnologies: ['Document Formatting', 'Office Correspondence', 'Bilingual Composing'],
      featured: true,
    },
    {
      id: 'ms-excel',
      name: 'MS Excel & Data Management',
      category: 'Office & Documentation',
      proficiency: 'Proficient',
      yearsOfExperience: 3,
      description:
        'Spreadsheet data entry, formula calculations, inventory tracking, financial summaries, and structured reporting.',
      relatedTechnologies: ['Formulas', 'Spreadsheets', 'Inventory Sheets', 'Data Entry'],
      featured: true,
    },
    {
      id: 'ms-powerpoint',
      name: 'MS PowerPoint',
      category: 'Office & Documentation',
      proficiency: 'Proficient',
      yearsOfExperience: 3,
      description:
        'Creating clean, visual slide decks, business presentations, and educational visual outlines with Material layout rhythm.',
      relatedTechnologies: ['Slide Design', 'Visual Presentations', 'Media Embeds'],
      featured: false,
    },
    {
      id: 'typing-bengali-english',
      name: 'English & Bengali High-Speed Typing',
      category: 'Computer Operations',
      proficiency: 'Expert',
      yearsOfExperience: 4,
      description:
        'Fluent touch-typing in both English and Bengali (Avro / Bijoy) with high accuracy and speed for rapid document production.',
      relatedTechnologies: ['Avro Keyboard', 'Bijoy Keyboard', 'Fast Data Entry', 'Transcription'],
      featured: true,
    },
    {
      id: 'programming-languages',
      name: 'Full-Stack Programming Languages',
      category: 'Programming & Scripting',
      proficiency: 'Proficient',
      yearsOfExperience: 3,
      description:
        'Developing applications, algorithms, and scripts in Python, Java, C++, TypeScript, JavaScript, and PHP.',
      relatedTechnologies: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'PHP'],
      featured: true,
    },
    {
      id: 'android-development',
      name: 'Android All Development & Mobile',
      category: 'Programming & Scripting',
      proficiency: 'Proficient',
      yearsOfExperience: 2,
      description:
        'Building Android mobile applications with XML layouts, Java, Kotlin, UI components, and API integrations.',
      relatedTechnologies: ['Android Studio', 'XML', 'Java', 'Kotlin', 'Mobile UI'],
      featured: true,
    },
    {
      id: 'cloud-databases',
      name: 'Cloud Backends & Databases',
      category: 'Cloud & Backend',
      proficiency: 'Proficient',
      yearsOfExperience: 2,
      description:
        'Configuring real-time databases and authentication with Supabase, Firebase, Nhost, SQL, and PostgreSQL.',
      relatedTechnologies: ['Supabase', 'Firebase', 'Nhost', 'PostgreSQL', 'SQL', 'Hosting'],
      featured: true,
    },
    {
      id: 'scripting-automation',
      name: 'Shell & Batch Scripting',
      category: 'Programming & Scripting',
      proficiency: 'Proficient',
      yearsOfExperience: 2,
      description:
        'Writing Bash Shell scripts (.sh) and Windows Batch scripts (.bat) for system automation and file batch processing.',
      relatedTechnologies: ['Shell Script (.sh)', 'Batch Script (.bat)', 'Bash', 'PowerShell'],
      featured: false,
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing & Social Media',
      category: 'Digital Marketing',
      proficiency: 'Proficient',
      yearsOfExperience: 2,
      description:
        'Social media content strategy, promotional ad creation, audience engagement, campaign analytics, and digital promotion.',
      relatedTechnologies: ['Facebook Marketing', 'Social Ads', 'Content Strategy', 'Campaign Planning'],
      featured: true,
    },
    {
      id: 'os-platforms',
      name: 'Operating Systems (Windows, Linux, macOS)',
      category: 'Operating Systems',
      proficiency: 'Proficient',
      yearsOfExperience: 4,
      description:
        'System installation, software configuration, file system organization, troubleshooting, driver setups, and hardware peripherals.',
      relatedTechnologies: ['Windows 10/11', 'Linux (Ubuntu/Kali)', 'macOS', 'Hardware Setup'],
      featured: false,
    },
    {
      id: 'packaging-design',
      name: 'Product Packaging & Print Production',
      category: 'Graphic Design',
      proficiency: 'Expert',
      yearsOfExperience: 2,
      description:
        'Designing die-cut packaging boxes, pharmaceutical bottle labels, pre-press color separations (CMYK), and proofing.',
      relatedTechnologies: ['CMYK Color', 'Die-cut Lines', 'Pre-press', 'Print Verification'],
      featured: true,
    },
  ],

  projects: [
    {
      id: 'gazi-lab-packaging',
      title: 'Gazi Laboratories Healthcare Brand & Packaging',
      shortDescription:
        'Complete packaging, label graphics, and promotional marketing collateral designed for herbal & Unani pharmaceutical medicine lines.',
      fullDescription:
        'During my tenure as Graphic Designer at Gazi Laboratories Unani Bangladesh in Hathazari, Chattogram, I led the visual development of product labels and commercial packaging boxes. The designs required strict adherence to pharmaceutical labeling standards, legible typography, vector illustrations of medicinal botanicals, and high-precision CMYK color separation for offset and digital press.',
      coverImage: '/src/assets/images/project_gazi_branding_1793046616995.jpg',
      category: 'Graphic Design & Branding',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'CMYK Pre-press', 'Packaging Mockups', 'Vector Art'],
      status: 'Completed',
      featured: true,
      year: '2023',
      highlights: [
        'Designed over 20+ commercial label and carton variations for liquid elixirs and tablet containers',
        'Coordinated with Hathazari commercial printing press to ensure accurate die-cuts and color fidelity',
        'Built digital catalog and marketing flyers used by distribution representatives',
      ],
      architectureNotes:
        'Created modular vector templates in Adobe Illustrator with layered bleed guides, die-cut paths, and standardized typographic scales.',
    },
    {
      id: 'current-media-publishing',
      title: 'Current Media Commercial Publishing & Composing Suite',
      shortDescription:
        'Bilingual document composing, commercial print graphics, visiting cards, and digital marketing materials for local clients.',
      fullDescription:
        'At Current Media in Chandraghuna, I operated high-volume computer publishing workflows. I handled client requests ranging from corporate letterheads, visiting cards, and promotional banners to high-speed Bengali and English document composing for educational and business organizations.',
      coverImage: '/src/assets/images/project_media_publishing_1793046617992.jpg',
      category: 'Print & Media Publishing',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'MS Word', 'Bijoy / Avro', 'Digital Printing'],
      status: 'Active Production',
      featured: true,
      year: '2022',
      highlights: [
        'Composed hundreds of official documents, resumes, and examination sheets with 100% accuracy',
        'Designed local business brand marks, shop banners, and festival promotional posters',
        'Maintained computer systems, digital scanners, and heavy-duty printing machinery',
      ],
      architectureNotes:
        'Organized systematic digital archives and font management setups supporting Unicode Bengali (Avro) and ANSI Bijoy fonts seamlessly.',
    },
    {
      id: 'digital-marketing-campaigns',
      title: 'Harbour IT Digital Marketing & Social Campaign Assets',
      shortDescription:
        'Social media advertising campaigns, creative banners, and engagement strategies developed during training at Harbour IT, Chattogram.',
      fullDescription:
        'Completed an intensive 6-month digital marketing program at Harbour IT in Kajir Dewri, Chattogram. Developed promotional campaign graphics, social media posts, target audience segmentation plans, and visual advertising creatives.',
      coverImage: '/src/assets/images/project_digital_marketing_1793046617586.jpg',
      category: 'Digital Marketing',
      technologies: ['Digital Marketing', 'Social Media Ads', 'Photoshop', 'Canva', 'Audience Analytics'],
      status: 'Portfolio Project',
      featured: true,
      year: '2021',
      highlights: [
        'Formulated end-to-end promotional social media campaigns with high-impact visual banners',
        'Studied lead generation, audience targeting, and online customer interaction workflows',
        'Created ad creatives optimized for mobile and desktop social media feed ratios',
      ],
      architectureNotes:
        'Implemented cross-platform content dimension grids (1:1 feed square, 16:9 banner, 9:16 story) paired with compelling typography.',
    },
    {
      id: 'software-system-hobbies',
      title: 'Custom Multi-Stack Development & Scripting Lab',
      shortDescription:
        'Full-stack and Android development experiments across Supabase, Firebase, Nhost, PostgreSQL, Python, and Shell automation.',
      fullDescription:
        'A comprehensive engineering repository documenting hands-on projects across GitHub profiles (msi_dev & MSI-Sirajul). Incorporates Android applications, SQL databases, backend hosting, and automated shell scripts for system administration.',
      coverImage: '/src/assets/images/project_media_publishing_1793046617992.jpg',
      category: 'Software & System Development',
      technologies: ['Python', 'Java', 'C++', 'TypeScript', 'Supabase', 'PostgreSQL', 'Shell Script', 'GitHub'],
      githubUrl: 'https://github.com/msi_dev',
      status: 'Portfolio Project',
      featured: true,
      year: '2024',
      highlights: [
        'Explored database and backend integration with Supabase, Firebase, and PostgreSQL',
        'Automated local tasks using custom Shell (.sh) and Windows Batch (.bat) scripts',
        'Maintained active development repos under msi_dev and MSI-Sirajul on GitHub',
      ],
      architectureNotes:
        'Structured modular repositories with environment isolation, database migrations, and clean scripting pipelines.',
    },
  ],

  education: [
    {
      id: 'edu-nursing',
      institution: 'TMSS Nursing Institute',
      degree: 'Diploma In Nursing Science and Midwifery',
      fieldOfStudy: 'Nursing Science & Clinical Midwifery',
      startDate: '2023',
      endDate: '2024',
      isCurrent: false,
      status: 'Discontinued',
      discontinuedDetails: '1st year complete, 2nd year 6 month Discontinued',
      durationYears: '3-Year Course (1st year complete, 2nd year 6 month Discontinued)',
      internshipExperience: 'Completed 2 Years 6 Months of Comprehensive Hospital Internship & Clinical Experience',
      location: 'Birganj, Dinajpur, Bangladesh',
      gpa: '3.69 / 4.00 (1st Year GPA)',
      description:
        'Enrolled in 3-year professional Diploma in Nursing Science and Midwifery (2023 – 2024). 1st year complete, 2nd year 6 month Discontinued. Completed 2 years and 6 months of hospital clinical internship experience before course discontinuation. Attained an outstanding 1st year GPA of 3.69 out of 4.00.',
      yearSubjects: [
        {
          yearName: '1st Year Subjects',
          subjects: [
            'Fundamental of Nursing',
            'Anatomy and Physiology',
            'Microbiology',
            'Basic Science',
            'Behavioral Science',
          ],
        },
        {
          yearName: '2nd Year Subjects',
          subjects: [
            'Pharmacology',
            'Pediatric Nursing',
            'Psychiatric Nursing',
            'Nutrition and Dietetics',
          ],
        },
      ],
      achievements: [
        '1st Year Academic GPA: 3.69 out of 4.00',
        'Completed 2 Years 6 Months of Hospital Clinical Rotations and Patient Care Internship',
        'Hands-on clinical experience in medical wards, pediatrics, and surgical care',
      ],
    },
    {
      id: 'edu-hsc',
      institution: 'Kornofuli Govt. College',
      degree: 'Higher Secondary Certificate (HSC)',
      fieldOfStudy: 'Business Studies',
      startDate: '2019',
      endDate: '2021',
      isCurrent: false,
      status: 'Completed',
      location: 'Chattogram, Bangladesh',
      gpa: '3.17 / 5.00',
      board: 'Chattagram Board',
      description:
        'Completed Higher Secondary Certificate with concentration in Business Studies, building strong competencies in business management, accounting, communication, and commercial operations.',
      achievements: [
        'Successfully passed HSC Examination with GPA 3.17 under Chattagram Board in 2021',
        'Active participant in college computer literacy and cultural events',
      ],
      academicProjects: [
        'Business organization case analysis on small and medium enterprises in Bangladesh',
      ],
    },
    {
      id: 'edu-ssc',
      institution: 'Narangiri Govt. High School',
      degree: 'Secondary School Certificate (SSC)',
      fieldOfStudy: 'Science',
      startDate: '2017',
      endDate: '2019',
      isCurrent: false,
      status: 'Completed',
      location: 'Chattogram, Bangladesh',
      gpa: '2.83 / 5.00',
      board: 'Chattagram Board',
      description:
        'Completed Secondary School Certificate in the Science group, establishing rigorous analytical skills, mathematics, general science, and computer basics.',
      achievements: [
        'Successfully passed SSC Examination with GPA 2.83 under Chattagram Board in 2019',
        'Consistent academic performance in secondary science curriculum',
      ],
      academicProjects: [
        'Secondary science exhibition project on computing and natural resource conservation',
      ],
    },
  ],

  training: [
    {
      id: 'train-graphic-design',
      title: 'Graphic Design Professional Training',
      issuer: 'Youth Development Computer Training Centre',
      issueDate: '2022',
      duration: '6 Months',
      location: 'Noapara, Rawzan, Chattogram',
      type: 'Professional Course',
      skillsLearned: [
        'Adobe Illustrator Vector Graphics & Logo Design',
        'Adobe Photoshop Photo Editing & Banner Design',
        'Commercial Packaging & Label Architecture',
        'Color Separation & CMYK Print Production',
      ],
    },
    {
      id: 'train-computer-operator',
      title: 'Computer Operator Professional Training',
      issuer: 'Youth Development Computer Training Centre',
      issueDate: '2021',
      duration: '6 Months',
      location: 'Noapara, Rawzan, Chattogram',
      type: 'Professional Course',
      skillsLearned: [
        'MS Word Document Formatting & Page Layouts',
        'MS Excel Spreadsheets, Formulas & Accounts',
        'MS PowerPoint Slide Decks & Visual Outlines',
        'High-Speed English & Bengali Touch Typing',
      ],
    },
    {
      id: 'train-digital-marketing',
      title: 'Digital Marketing Professional Course',
      issuer: 'Harbour IT',
      issueDate: '2021',
      duration: '6 Months',
      location: 'Chattogram, Kajir Dewri',
      type: 'Certification',
      skillsLearned: [
        'Social Media Marketing & Advertising Campaigns',
        'Creative Promotional Graphics & Ad Copywriting',
        'Target Audience Research & Lead Generation',
        'Internet Operations & Online Brand Promotion',
      ],
    },
  ],

  languages: [
    {
      language: 'Bengali',
      proficiency: 'Native Proficiency',
      skills: 'Excellent command in Listening, Writing, Reading, and Speaking',
    },
    {
      language: 'English',
      proficiency: 'Good Proficiency',
      skills: 'Good competence in Listening, Writing, Reading, and Speaking',
    },
    {
      language: 'Hindi',
      proficiency: 'Good Proficiency',
      skills: 'Good competence in Listening and Speaking',
    },
    {
      language: 'Gulf Arabic',
      proficiency: 'Conversational / Working Proficiency',
      skills: 'Competence in Listening and Speaking only',
    },
  ],

  personalDetails: {
    fatherName: 'Md. Rafiqul Islam',
    motherName: 'Sahanu Akter',
    dateOfBirth: '07-01-2003',
    gender: 'Male',
    maritalStatus: 'Unmarried',
    nationality: 'Bangladeshi',
    nid: '5114637985',
    religion: 'Islam',
    height: '5.4"',
    weight: '56 kg',
    bloodGroup: 'O+(ve)',
    village: 'Vill-Lamuchori Para',
    postOffice: 'P/O-Raikhaly Bazar',
    policeStation: 'P/S-Chondraghuna',
    district: 'Kaptai, Rangamati',
    contactNumber: '01629744516',
  },
};
