import { Metadata } from 'next';
import { ArrowRight, Server, Brain, Zap, Clock, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  // TODO: Replace with your name
  title: 'Projects - YOUR_FULL_NAME',
  description: 'Detailed case studies and portfolio projects.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      {/* Header */}
      <section className="py-12 md:py-18 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Projects & Case Studies
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Deep dives into enterprise AI systems, architecture decisions, and measurable business impact.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-14 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Select work — each with context, decisions, and outcomes</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Project One',                       // TODO: Replace with your project name
                fullTitle: 'Full Title of Project One',    // TODO: Replace with full descriptive title
                description: 'A detailed description of what this project does, the problem it solves, and the approach taken. Include technical depth and business context.',  // TODO
                href: '/projects/project-one',
                status: 'Production',                      // TODO: e.g. "Production", "Open Source", "Prototype"
                metrics: [
                  { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO: e.g. { label: 'Performance Gain', value: '40%' }
                  { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
                  { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
                ],
                technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'], // TODO: Replace with your stack
                impact: 'Describe the measurable impact and business value delivered by this project.', // TODO
              },
              {
                title: 'Project Two',                      // TODO
                fullTitle: 'Full Title of Project Two',    // TODO
                description: 'A detailed description of what this project does, the problem it solves, and the approach taken.',  // TODO
                href: '/projects/project-two',
                status: 'Production',                      // TODO
                metrics: [
                  { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO
                  { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
                  { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
                ],
                technologies: ['Tech1', 'Tech2', 'Tech3'], // TODO
                impact: 'Describe the measurable impact of this project.', // TODO
              },
              {
                title: 'Project Three',                    // TODO
                fullTitle: 'Full Title of Project Three',  // TODO
                description: 'A detailed description of what this project does, the problem it solves, and the approach taken.',  // TODO
                href: '/projects/project-three',
                status: 'Production',                      // TODO
                metrics: [
                  { label: 'KEY_METRIC_1_LABEL', value: 'VALUE' }, // TODO
                  { label: 'KEY_METRIC_2_LABEL', value: 'VALUE' }, // TODO
                  { label: 'KEY_METRIC_3_LABEL', value: 'VALUE' }, // TODO
                ],
                technologies: ['Tech1', 'Tech2', 'Tech3'], // TODO
                impact: 'Describe the measurable impact of this project.', // TODO
              },
            ].map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-400/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-6 md:p-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">{project.fullTitle}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
                    <div className="space-y-4">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Technologies</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, tidx) => (
                              <span key={tidx} className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span className="font-semibold">Impact:</span> {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold pt-2 group-hover:translate-x-2 transition-transform">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                      {project.metrics.map((metric, midx) => (
                        <div key={midx} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                          <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: 'Projects Delivered', value: 'X+' },  // TODO: Replace X
              { icon: Users, label: 'Clients Served', value: 'X+' },           // TODO: Replace X
              { icon: Clock, label: 'Years Experience', value: 'X+' },         // TODO: Replace X
              { icon: Brain, label: 'YOUR_METRIC_LABEL', value: 'X' },         // TODO: e.g. 'Systems Built', replace X
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center space-y-3">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto" />
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-14 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Services & Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">How I can help with your next project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI Strategy & Architecture',
                description: 'Design enterprise AI systems, choose appropriate models, plan scalability and integration strategies.',
              },
              {
                icon: Zap,
                title: 'Agentic Systems',
                description: 'Build autonomous AI agents, multi-agent orchestration, and intelligent workflow automation.',
              },
              {
                icon: Server,
                title: 'Full-Stack Development',
                description: 'End-to-end development from backend APIs to frontend interfaces, optimized for performance.',
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 p-8 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-900/50 backdrop-blur-sm space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 p-0.5">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 px-4 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/20 dark:to-violet-950/20">
        <div className="max-w-[min(160rem,94vw)] mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300">
            Let's discuss your project requirements and how I can help build intelligent solutions.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
