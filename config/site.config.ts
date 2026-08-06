/**
 * ============================================================================
 *  SITE CONFIGURATION — THE ONLY FILE YOU SHOULD NEED TO EDIT
 * ============================================================================
 *
 *  Everything shown on the site (your name, bio, projects, skills, contact
 *  links, blog posts, nav links, etc.) is defined right here in one place.
 *
 *  All pages under `app/` simply import `siteConfig` from this file and
 *  render whatever is in it — they contain no personal content themselves.
 *
 *  HOW TO USE THIS FILE:
 *    1. Replace every `TODO` value below with your own information.
 *    2. Add / remove items from arrays (projects, timeline entries, blog
 *       posts, etc.) freely — the pages will automatically adjust.
 *    3. Save the file. That's it — no other file needs to change.
 *
 *  TIP: This is a plain TypeScript object, so if you make a syntax mistake
 *  (e.g. a missing comma) your editor / `npm run dev` will immediately show
 *  you a clear error pointing at this file, instead of a broken page.
 * ============================================================================
 */

// Icon names must match an exported icon name from `lucide-react`.
// See the full icon list at https://lucide.dev/icons — just use the
// PascalCase name shown on that site (e.g. "Brain", "Code2", "Rocket").
export type IconName = string;

export interface StatItem {
  label: string;
  detail: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDetailMetric extends ProjectMetric {
  context: string;
}

export interface TechStackGroup {
  layer: string;
  items: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  /** Used to build the URL: /projects/<slug> — use lowercase, hyphenated. */
  slug: string;
  /** Short name shown on cards, e.g. "SmartDash" */
  title: string;
  /** One-line subtitle shown under the title on the project list. */
  subtitle: string;
  /** Longer descriptive title used on the /projects page and detail page. */
  fullTitle: string;
  /** 2-3 sentence description of what the project does. */
  description: string;
  /** Path to a screenshot in /public, e.g. "/projects/my-project.png" */
  image: string;
  /** Icon shown on the home page project card. */
  icon: IconName;
  /** Tailwind gradient classes, e.g. "from-blue-500 to-cyan-500" */
  gradient: string;
  /** Short tags shown as pills, e.g. ["React", "Node.js"] */
  tags: string[];
  /** Whether this project appears in the "Featured Projects" home section. */
  featured: boolean;
  /** e.g. "Production", "Open Source", "Prototype" */
  status: string;
  /** Up to 3 headline metrics shown on the /projects listing card. */
  metrics: ProjectMetric[];
  /** Tech stack shown as pills on the /projects listing card. */
  technologies: string[];
  /** One-line business impact statement. */
  impact: string;
  /** Full case-study content shown on /projects/<slug> */
  detail: {
    badge: string;
    heroDescription: string;
    keyMetrics: ProjectDetailMetric[];
    problem: string;
    solution: string;
    techStack: TechStackGroup[];
    features: ProjectFeature[];
    impactResults: string;
  };
}

export interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface ExpertiseGroup {
  icon: IconName;
  title: string;
  skills: string[];
}

export interface ValueItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  benefits: string[];
}

export interface EngagementModel {
  title: string;
  duration: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: string;
  slug: string;
  /** Optional external URL (e.g. Medium/Dev.to). If set, "Read More" links here instead of /blog/[slug]. */
  externalUrl?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SiteConfig {
  personal: {
    fullName: string; // TODO: e.g. "Jane Smith"
    initials: string; // TODO: e.g. "JS" — shown as the logo mark in the nav bar
    professionalTitle: string; // TODO: e.g. "Full-Stack Engineer"
    email: string; // TODO: your.email@example.com
    linkedinUrl: string; // TODO: https://linkedin.com/in/your-username
    githubUrl: string; // TODO: https://github.com/your-username
  };
  seo: {
    /** Used as the browser tab title suffix and footer copyright name. */
    siteTitle: string;
    siteDescription: string;
  };
  home: {
    heroTagline: string; // TODO: e.g. "Building the future with AI"
    heroTitles: [string, string, string]; // TODO: three headline descriptors
    heroShortBio: string; // TODO: 1-2 sentence professional bio
    heroStats: StatItem[]; // TODO: 4 items, e.g. { label: "5+", detail: "Years experience" }
    heroSkills: [string, string, string]; // TODO: 3 core strengths
    whyWorkTogether: StatItem[]; // TODO: 4 items shown in "Why Work Together"
  };
  about: {
    intro: string; // TODO: 1-2 sentence personal summary
    careerHighlights: { icon: IconName; label: string; detail: string }[]; // TODO: 3 recent roles
    timeline: TimelineEntry[]; // TODO: your career history, most recent first
    coreExpertise: ExpertiseGroup[];
    values: ValueItem[];
    techStack: TechCategory[];
  };
  projects: Project[];
  services: {
    stats: StatItem[]; // TODO: e.g. { label: "X+", detail: "Projects Delivered" }
    serviceIcons: { icon: IconName; label: string }[]; // TODO: 6 short service names
    coreServices: ServiceItem[];
    engagementModels: EngagementModel[];
    process: ProcessStep[];
    whyWorkWithMe: { label: string; detail: string }[];
  };
  contact: {
    intro: string; // TODO: one sentence describing what you're open to discussing
    howICanHelp: string; // TODO: paragraph describing how you help clients/employers
    expertise: string[]; // TODO: 6 areas of expertise
    footerNote: string; // TODO: short note shown in the highlighted box on the contact page
  };
  blog: {
    posts: BlogPost[];
  };
  navigation: {
    links: NavLink[];
  };
  footer: {
    aboutText: string; // TODO: one-line description shown in the footer "About" column
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    fullName: 'YOUR_FULL_NAME', // TODO
    initials: 'YN', // TODO
    professionalTitle: 'YOUR_PROFESSIONAL_TITLE', // TODO
    email: 'your.email@example.com', // TODO
    linkedinUrl: 'https://linkedin.com/in/your-linkedin-username', // TODO
    githubUrl: 'https://github.com/your-github-username', // TODO
  },

  seo: {
    siteTitle: 'YOUR_FULL_NAME Portfolio', // TODO
    siteDescription: 'YOUR_PROFESSIONAL_TITLE', // TODO
  },

  home: {
    heroTagline: 'YOUR_HERO_TAGLINE', // TODO: e.g. "Building the future with AI"
    heroTitles: ['YOUR_TITLE_1', 'YOUR_TITLE_2', 'YOUR_TITLE_3'], // TODO
    heroShortBio: 'YOUR_SHORT_BIO', // TODO
    heroStats: [
      { label: 'X+', detail: 'Years experience' }, // TODO
      { label: 'X+', detail: 'Projects delivered' }, // TODO
      { label: 'X+', detail: 'Clients served' }, // TODO
      { label: 'X', detail: 'Key systems built' }, // TODO
    ],
    heroSkills: ['YOUR_SKILL_1', 'YOUR_SKILL_2', 'YOUR_SKILL_3'], // TODO
    whyWorkTogether: [
      { label: 'X+ years', detail: 'YOUR_EXPERTISE_AREA_1' }, // TODO
      { label: 'YOUR_STRENGTH_1', detail: 'YOUR_STRENGTH_1_DESC' }, // TODO
      { label: 'YOUR_STRENGTH_2', detail: 'YOUR_STRENGTH_2_DESC' }, // TODO
      { label: 'YOUR_STRENGTH_3', detail: 'YOUR_STRENGTH_3_DESC' }, // TODO
    ],
  },

  about: {
    intro: 'YOUR_ABOUT_INTRO', // TODO
    careerHighlights: [
      { icon: 'Brain', label: 'YOUR_ROLE_1', detail: 'YEAR - Present' }, // TODO
      { icon: 'Zap', label: 'YOUR_ROLE_2', detail: 'YEAR - YEAR' }, // TODO
      { icon: 'Code2', label: 'YOUR_ROLE_3', detail: 'YEAR - YEAR' }, // TODO
    ],
    timeline: [
      {
        year: 'YEAR-Present', // TODO
        title: 'YOUR_CURRENT_ROLE', // TODO
        company: 'YOUR_CURRENT_COMPANY', // TODO
        description: 'YOUR_ROLE_1_DESCRIPTION', // TODO
        highlights: ['Skill1', 'Skill2', 'Skill3', 'Skill4'], // TODO
      },
      {
        year: 'YEAR-YEAR', // TODO
        title: 'YOUR_PREV_ROLE', // TODO
        company: 'YOUR_PREV_COMPANY', // TODO
        description: 'YOUR_ROLE_2_DESCRIPTION', // TODO
        highlights: ['Skill1', 'Skill2', 'Skill3'], // TODO
      },
      {
        year: 'YEAR-YEAR', // TODO
        title: 'YOUR_EARLY_ROLE', // TODO
        company: 'YOUR_EARLY_COMPANY', // TODO
        description: 'YOUR_ROLE_3_DESCRIPTION', // TODO
        highlights: ['Skill1', 'Skill2', 'Skill3'], // TODO
      },
    ],
    coreExpertise: [
      {
        icon: 'Brain',
        title: 'AI & Machine Learning',
        skills: ['LLMs & Transformers', 'RAG Systems', 'Embeddings & Vectors', 'Fine-tuning & Prompt Engineering'],
      },
      {
        icon: 'Zap',
        title: 'Agentic Systems',
        skills: ['AI Agents', 'Multi-agent Orchestration', 'Tool Use & Integration', 'Autonomous Workflows'],
      },
      {
        icon: 'Code2',
        title: 'Full-Stack Development',
        skills: ['Backend Architecture', 'API Design', 'Database Optimization', 'Cloud Infrastructure'],
      },
      {
        icon: 'Target',
        title: 'Product Leadership',
        skills: ['Strategy & Roadmapping', 'User-Centric Design', 'Stakeholder Management', 'Go-to-Market'],
      },
    ],
    values: [
      { icon: 'Lightbulb', title: 'Innovation', description: 'Constantly exploring cutting-edge technologies to solve real-world problems in better ways.' },
      { icon: 'Users', title: 'User-Centric', description: 'Building solutions that genuinely improve user experience and deliver measurable business value.' },
      { icon: 'Target', title: 'Excellence', description: 'Committed to high-quality execution, scalability, and attention to architectural detail.' },
    ],
    techStack: [
      { category: 'AI & GenAI', items: ['Agentic AI', 'Generative AI', 'RAG', 'Context Engineering', 'Knowledge Graphs', 'AI Governance'] },
      { category: 'Product Management', items: ['Product Strategy', 'Customer Discovery', 'Roadmap Management', 'Stakeholder Management', 'Go-to-Market', 'Product Analytics'] },
      { category: 'Industrial & IoT', items: ['Industrial IoT', 'OPC-UA', 'Predictive Maintenance', 'Digital Twins', 'Root Cause Analysis', 'Operational Intelligence'] },
      { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Microservices', 'Kubernetes'] },
      { category: 'Data & Platforms', items: ['Semantic Search', 'Vector Databases', 'PostgreSQL', 'Event Processing', 'Data Analytics', 'MCP'] },
      { category: 'Modern Web', items: ['React', 'Next.js', 'TypeScript', 'Angular', 'REST APIs', 'Tailwind CSS'] },
    ],
  },

  projects: [
    {
      slug: 'project-one', // TODO: rename, e.g. "smartdash" (this becomes the URL /projects/smartdash)
      title: 'Project One', // TODO
      subtitle: 'Short Project Subtitle', // TODO
      fullTitle: 'Full Title of Project One', // TODO
      description: 'A brief description of what this project does and the problem it solves.', // TODO
      image: '/projects/project-one.svg', // TODO
      icon: 'Code2',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Tag1', 'Tag2', 'Tag3'], // TODO
      featured: true,
      status: 'Production', // TODO
      metrics: [
        { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
      ],
      technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'], // TODO
      impact: 'Describe the measurable impact and business value delivered by this project.', // TODO
      detail: {
        badge: 'Production System', // TODO
        heroDescription:
          'A brief overview of Project One. Describe the problem you were solving, the approach you took, and who the users/stakeholders are. Keep it concise but informative.', // TODO
        keyMetrics: [
          { label: 'KEY_METRIC_1', value: 'X%', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_2', value: 'X+', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_3', value: 'X', context: 'Brief context for this metric.' }, // TODO
        ],
        problem: 'Describe the core problem this project solved. What was the status quo before you built this? What pain points existed for users or the business?', // TODO
        solution: 'Describe what you built and how it solved the problem. What were the key design decisions? What made your approach effective?', // TODO
        techStack: [
          { layer: 'Frontend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Backend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Infrastructure', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
        ],
        features: [
          { title: 'Feature One', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Two', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Three', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Four', description: 'Describe what this feature does and why it matters to users.' }, // TODO
        ],
        impactResults:
          'Describe the measurable impact this project had. Include business outcomes, user adoption, performance improvements, cost savings, or any other relevant results. What did you learn from building this?', // TODO
      },
    },
    {
      slug: 'project-two', // TODO
      title: 'Project Two', // TODO
      subtitle: 'Short Project Subtitle', // TODO
      fullTitle: 'Full Title of Project Two', // TODO
      description: 'A brief description of what this project does and the problem it solves.', // TODO
      image: '/projects/project-two.svg', // TODO
      icon: 'Zap',
      gradient: 'from-violet-500 to-purple-500',
      tags: ['Tag1', 'Tag2', 'Tag3'], // TODO
      featured: true,
      status: 'Production', // TODO
      metrics: [
        { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
      ],
      technologies: ['Tech1', 'Tech2', 'Tech3'], // TODO
      impact: 'Describe the measurable impact of this project.', // TODO
      detail: {
        badge: 'Production System', // TODO
        heroDescription:
          'A brief overview of Project Two. Describe the problem you were solving, the approach you took, and who the users/stakeholders are.', // TODO
        keyMetrics: [
          { label: 'KEY_METRIC_1', value: 'X%', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_2', value: 'X+', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_3', value: 'X', context: 'Brief context for this metric.' }, // TODO
        ],
        problem: 'Describe the core problem this project solved.', // TODO
        solution: 'Describe what you built and how it solved the problem.', // TODO
        techStack: [
          { layer: 'Frontend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Backend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Infrastructure', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
        ],
        features: [
          { title: 'Feature One', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Two', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Three', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Four', description: 'Describe what this feature does and why it matters to users.' }, // TODO
        ],
        impactResults: 'Describe the measurable impact this project had.', // TODO
      },
    },
    {
      slug: 'project-three', // TODO
      title: 'Project Three', // TODO
      subtitle: 'Short Project Subtitle', // TODO
      fullTitle: 'Full Title of Project Three', // TODO
      description: 'A brief description of what this project does and the problem it solves.', // TODO
      image: '/projects/project-three.svg', // TODO
      icon: 'Globe',
      gradient: 'from-amber-500 to-orange-500',
      tags: ['Tag1', 'Tag2', 'Tag3'], // TODO
      featured: true,
      status: 'Production', // TODO
      metrics: [
        { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
        { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
      ],
      technologies: ['Tech1', 'Tech2', 'Tech3'], // TODO
      impact: 'Describe the measurable impact of this project.', // TODO
      detail: {
        badge: 'Production System', // TODO
        heroDescription:
          'A brief overview of Project Three. Describe the problem you were solving, the approach you took, and who the users/stakeholders are.', // TODO
        keyMetrics: [
          { label: 'KEY_METRIC_1', value: 'X%', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_2', value: 'X+', context: 'Brief context for this metric.' }, // TODO
          { label: 'KEY_METRIC_3', value: 'X', context: 'Brief context for this metric.' }, // TODO
        ],
        problem: 'Describe the core problem this project solved.', // TODO
        solution: 'Describe what you built and how it solved the problem.', // TODO
        techStack: [
          { layer: 'Frontend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Backend', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
          { layer: 'Infrastructure', items: ['Tech1', 'Tech2', 'Tech3'] }, // TODO
        ],
        features: [
          { title: 'Feature One', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Two', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Three', description: 'Describe what this feature does and why it matters to users.' }, // TODO
          { title: 'Feature Four', description: 'Describe what this feature does and why it matters to users.' }, // TODO
        ],
        impactResults: 'Describe the measurable impact this project had.', // TODO
      },
    },
    // TODO: To add a new project, copy one of the objects above, give it a
    // unique `slug`, fill in your details, and add it to this array. A page
    // at /projects/<slug> is generated automatically — no new files needed.
    // To remove a project, delete its object from this array.
  ],

  services: {
    stats: [
      { label: 'X+', detail: 'Projects Delivered' }, // TODO
      { label: 'X+', detail: 'Clients Served' }, // TODO
      { label: 'X+', detail: 'Years Experience' }, // TODO
    ],
    serviceIcons: [
      { icon: 'Brain', label: 'YOUR_SERVICE_1' }, // TODO
      { icon: 'Code2', label: 'YOUR_SERVICE_2' }, // TODO
      { icon: 'Compass', label: 'YOUR_SERVICE_3' }, // TODO
      { icon: 'Layers', label: 'YOUR_SERVICE_4' }, // TODO
      { icon: 'Lightbulb', label: 'YOUR_SERVICE_5' }, // TODO
      { icon: 'Zap', label: 'YOUR_SERVICE_6' }, // TODO
    ],
    coreServices: [
      {
        icon: 'Brain',
        title: 'AI Copilot Development',
        description: 'Build intelligent copilots that augment human capabilities. From design to deployment, creating AI assistants that understand context and provide actionable insights.',
        benefits: ['Context-aware assistance', 'Natural language interface', 'Seamless integration', 'User training included'],
      },
      {
        icon: 'Zap',
        title: 'Enterprise RAG Systems',
        description: 'Implement Retrieval-Augmented Generation systems that connect your LLMs to proprietary knowledge. Accurate, fast, and always up-to-date.',
        benefits: ['Custom knowledge indexing', 'Semantic search', 'Vector embeddings', 'Quality assurance'],
      },
      {
        icon: 'Code2',
        title: 'Agentic AI Architecture',
        description: 'Design and build autonomous AI agent systems with multi-agent orchestration. Create agents that think, plan, and execute complex workflows.',
        benefits: ['Agent design patterns', 'Tool integration', 'Orchestration framework', 'Monitoring & observability'],
      },
      {
        icon: 'Lightbulb',
        title: 'Product Strategy & Consulting',
        description: 'Strategic guidance on AI adoption, roadmapping, and organizational change. Help navigate the AI landscape and maximize ROI on AI initiatives.',
        benefits: ['Roadmap development', 'Technology evaluation', 'Change management', 'Team capability building'],
      },
      {
        icon: 'Layers',
        title: 'Full-Stack Development',
        description: 'End-to-end development of AI-powered applications. Backend APIs, databases, frontend interfaces, and infrastructure all optimized for scale.',
        benefits: ['Scalable architecture', 'Performance optimization', 'API design', 'DevOps & deployment'],
      },
      {
        icon: 'TrendingUp',
        title: 'MCP Integration',
        description: 'Integrate Model Context Protocol into your AI systems. Enable standardized AI interactions across tools and platforms.',
        benefits: ['Protocol implementation', 'Tool standardization', 'System interoperability', 'Future-proof architecture'],
      },
    ],
    engagementModels: [
      { title: 'Project-Based', duration: 'Defined timeline', description: 'Ideal for specific projects with clear scope and deliverables. Dedicated focus until completion.' },
      { title: 'Staff Augmentation', duration: 'Flexible duration', description: 'Extend your team with expertise. Seamless integration into your existing workflows and processes.' },
      { title: 'Advisory/Consulting', duration: 'Part-time', description: 'Strategic guidance and decision support. Perfect for product roadmaps, architecture reviews, and capability building.' },
    ],
    process: [
      { number: '01', title: 'Discovery & Planning', description: 'Deep dive into your requirements, constraints, and goals. Define scope, timeline, and success metrics.' },
      { number: '02', title: 'Architecture & Design', description: 'Design solution architecture, technical approach, and integration strategy. Validate assumptions.' },
      { number: '03', title: 'Development & Testing', description: 'Agile development with continuous testing. Regular check-ins and adjustments based on feedback.' },
      { number: '04', title: 'Deployment & Support', description: 'Smooth production rollout, training, and post-launch support. Documentation and handoff.' },
    ],
    whyWorkWithMe: [
      { label: '15+ years', detail: 'Deep experience with enterprise-scale systems' },
      { label: 'AI Pioneer', detail: 'Cutting-edge expertise in LLMs, agents, and embeddings' },
      { label: 'Full-Stack', detail: 'Can own entire technical scope from API to UI' },
      { label: 'Strategic Thinking', detail: 'Business-focused solutions aligned with goals' },
      { label: 'Proven Track Record', detail: '50+ projects delivered to enterprise clients' },
      { label: 'Communication', detail: 'Clear, regular updates and collaboration' },
    ],
  },

  contact: {
    intro: 'YOUR_CONTACT_INTRO', // TODO
    howICanHelp:
      'I help organizations transform ideas into successful products by combining Product Strategy, Agentic AI, Generative AI, Industrial AI, IoT, and Enterprise Software expertise.', // TODO
    expertise: [
      'YOUR_EXPERTISE_1', // TODO: e.g. 'Software Architecture'
      'YOUR_EXPERTISE_2', // TODO: e.g. 'Cloud & DevOps'
      'YOUR_EXPERTISE_3', // TODO: e.g. 'Full-Stack Development'
      'YOUR_EXPERTISE_4', // TODO: e.g. 'API Design'
      'YOUR_EXPERTISE_5', // TODO: e.g. 'Team Leadership'
      'YOUR_EXPERTISE_6', // TODO: e.g. 'Agile & Product Management'
    ],
    footerNote:
      'Open to discussions on Product Management, Agentic AI, GenAI, Industrial AI, Product Discovery, Product Strategy, and Enterprise Digital Transformation.', // TODO
  },

  blog: {
    posts: [
      {
        title: 'The Future of Agentic AI in Enterprise',
        excerpt: 'Exploring how agentic AI systems are transforming enterprise software and automation.',
        date: '2024-01-15',
        category: 'AI',
        slug: 'agentic-ai-future',
      },
      {
        title: 'Building Scalable AI Products',
        excerpt: 'Best practices for designing and scaling AI-powered applications.',
        date: '2024-01-10',
        category: 'Product',
        slug: 'building-scalable-ai',
      },
      {
        title: 'MCP Integration Patterns',
        excerpt: 'Deep dive into Model Context Protocol and integration strategies.',
        date: '2024-01-05',
        category: 'Technical',
        slug: 'mcp-integration-patterns',
      },
      // TODO: Add, remove, or edit blog post entries here. Set `externalUrl`
      // instead of relying on `slug` if the post lives on Medium/Dev.to/etc.
    ],
  },

  navigation: {
    links: [
      { href: '/about', label: 'About' },
      { href: '/projects', label: 'Projects & Case Studies' },
      { href: '/contact', label: 'Contact' },
      // TODO: Add or remove nav links here, e.g. { href: '/services', label: 'Services' }
    ],
  },

  footer: {
    aboutText: 'YOUR_PROFESSIONAL_TITLE building innovative solutions', // TODO
  },
};

export default siteConfig;
