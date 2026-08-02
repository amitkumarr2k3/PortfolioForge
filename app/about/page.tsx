import { Metadata } from 'next';
import { ArrowRight, Lightbulb, Target, Users, Code2, Brain, Zap } from 'lucide-react';

export const metadata: Metadata = {
  // TODO: Replace with your name and bio
  title: 'About - YOUR_FULL_NAME',
  description: 'YOUR_PROFESSIONAL_TITLE with X+ years building [your specialty].',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              YOUR_ABOUT_INTRO {/* TODO: e.g. "Software Engineer transforming complex challenges into elegant solutions through X+ years of development and innovation." */}
            </p>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-violet-500/10 dark:from-blue-400/10 dark:to-violet-400/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-8 space-y-5 shadow-xl">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Career highlights</span>
              {[
                { icon: Brain, label: 'YOUR_ROLE_1',   detail: 'YEAR - Present' }, // TODO: e.g. "Senior Engineer", "2020 - Present"
                { icon: Zap,   label: 'YOUR_ROLE_2',   detail: 'YEAR - YEAR' },    // TODO
                { icon: Code2, label: 'YOUR_ROLE_3',   detail: 'YEAR - YEAR' },    // TODO
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-md flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.label}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Building smarter systems, one challenge at a time</p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: 'YEAR-Present',                   // TODO: Replace with your years
                title: 'YOUR_CURRENT_ROLE',            // TODO: e.g. "Senior Software Engineer"
                company: 'YOUR_CURRENT_COMPANY',       // TODO: e.g. "Acme Corp"
                description:
                  'YOUR_ROLE_1_DESCRIPTION',           // TODO: Describe your responsibilities and impact
                highlights: ['Skill1', 'Skill2', 'Skill3', 'Skill4'], // TODO: Key skills used
              },
              {
                year: 'YEAR-YEAR',                     // TODO
                title: 'YOUR_PREV_ROLE',               // TODO: e.g. "Software Engineer"
                company: 'YOUR_PREV_COMPANY',          // TODO
                description:
                  'YOUR_ROLE_2_DESCRIPTION',           // TODO
                highlights: ['Skill1', 'Skill2', 'Skill3'], // TODO
              },
              {
                year: 'YEAR-YEAR',                     // TODO
                title: 'YOUR_EARLY_ROLE',              // TODO: e.g. "Junior Developer"
                company: 'YOUR_EARLY_COMPANY',         // TODO
                description:
                  'YOUR_ROLE_3_DESCRIPTION',           // TODO
                highlights: ['Skill1', 'Skill2', 'Skill3'], // TODO
              },
            ].map((milestone, idx) => (
              <div key={idx} className="relative flex gap-6 md:gap-8">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900" />
                  {idx !== 3 && <div className="w-1 h-full bg-gradient-to-b from-blue-600/50 to-blue-600/0 dark:from-blue-400/50 dark:to-blue-400/0" />}
                </div>
                <div className="pb-8 pt-1 flex-1 grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10">
                  <div>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{milestone.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{milestone.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{milestone.description}</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2 lg:pt-8">
                    {milestone.highlights.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-900/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Core Expertise</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Specialized skills across AI, architecture, and product strategy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                skills: ['LLMs & Transformers', 'RAG Systems', 'Embeddings & Vectors', 'Fine-tuning & Prompt Engineering'],
              },
              {
                icon: Zap,
                title: 'Agentic Systems',
                skills: ['AI Agents', 'Multi-agent Orchestration', 'Tool Use & Integration', 'Autonomous Workflows'],
              },
              {
                icon: Code2,
                title: 'Full-Stack Development',
                skills: ['Backend Architecture', 'API Design', 'Database Optimization', 'Cloud Infrastructure'],
              },
              {
                icon: Target,
                title: 'Product Leadership',
                skills: ['Strategy & Roadmapping', 'User-Centric Design', 'Stakeholder Management', 'Go-to-Market'],
              },
            ].map((expertise, idx) => {
              const Icon = expertise.icon;
              return (
                <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-900/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 p-0.5">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-md flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{expertise.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {expertise.skills.map((skill, sidx) => (
                      <li key={sidx} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">What Drives Me</h2>
            <p className="text-lg text-slate-300">Core principles guiding every project and decision</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Constantly exploring cutting-edge technologies to solve real-world problems in better ways.',
              },
              {
                icon: Users,
                title: 'User-Centric',
                description: 'Building solutions that genuinely improve user experience and deliver measurable business value.',
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'Committed to high-quality execution, scalability, and attention to architectural detail.',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="rounded-xl border border-slate-700/50 p-6 space-y-3">
                  <Icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Technologies & Tools</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Proven experience with modern development stacks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                category: 'AI & GenAI',
                items: [
                  'Agentic AI',
                  'Generative AI',
                  'RAG',
                  'Context Engineering',
                  'Knowledge Graphs',
                  'AI Governance'
                ],
              },
              {
                category: 'Product Management',
                items: [
                  'Product Strategy',
                  'Customer Discovery',
                  'Roadmap Management',
                  'Stakeholder Management',
                  'Go-to-Market',
                  'Product Analytics'
                ],
              },
              {
                category: 'Industrial & IoT',
                items: [
                  'Industrial IoT',
                  'OPC-UA',
                  'Predictive Maintenance',
                  'Digital Twins',
                  'Root Cause Analysis',
                  'Operational Intelligence'
                ],
              },
              {
                category: 'Cloud & DevOps',
                items: [
                  'Azure',
                  'AWS',
                  'Docker',
                  'CI/CD',
                  'Microservices',
                  'Kubernetes'
                ],
              },
              {
                category: 'Data & Platforms',
                items: [
                  'Semantic Search',
                  'Vector Databases',
                  'PostgreSQL',
                  'Event Processing',
                  'Data Analytics',
                  'MCP'
                ],
              },
              {
                category: 'Modern Web',
                items: [
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Angular',
                  'REST APIs',
                  'Tailwind CSS'
                ],
              },
            ].map((stack, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, sidx) => (
                    <span key={sidx} className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/20 dark:to-violet-950/20">
        <div className="max-w-[min(160rem,94vw)] mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Let's Connect</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Interested in discussing AI, product strategy, or collaboration opportunities?
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
}
