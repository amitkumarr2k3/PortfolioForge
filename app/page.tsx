import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, Zap, Globe, Sparkles, CheckCircle2, Server } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">YOUR_HERO_TAGLINE {/* e.g. "Building the future with AI" */}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
                YOUR_FULL_NAME {/* TODO: Replace with your full name */}
              </h1>
              <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                YOUR_TITLE_1 • YOUR_TITLE_2 • YOUR_TITLE_3 {/* TODO: e.g. "AI Engineer • Product Builder • Open Source Contributor" */}
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              YOUR_SHORT_BIO {/* TODO: A 1-2 sentence professional bio. e.g. "Building enterprise-grade software with X years of expertise in Y and Z." */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 dark:from-blue-500 dark:to-violet-500 dark:hover:from-blue-600 dark:hover:to-violet-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Visual highlight panel */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-violet-500/10 dark:from-blue-400/10 dark:to-violet-400/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">At a glance</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100/80 dark:bg-green-900/30 text-xs font-medium text-green-700 dark:text-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 animate-pulse" />
                  Available for projects
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'X+', detail: 'Years experience' },       // TODO: Replace X
                  { label: 'X+', detail: 'Projects delivered' },     // TODO: Replace X
                  { label: 'X+', detail: 'Clients served' },         // TODO: Replace X
                  { label: 'X',  detail: 'Key systems built' },      // TODO: Replace X
                ].map((stat) => (
                  <div
                    key={`${stat.label}-${stat.detail}`}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.detail}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'YOUR_SKILL_1', // TODO: e.g. "Agentic AI & LLM orchestration"
                  'YOUR_SKILL_2', // TODO: e.g. "Enterprise-grade architecture"
                  'YOUR_SKILL_3', // TODO: e.g. "Full-stack product delivery"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Transforming complex challenges into intelligent solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Project One',                          // TODO: Replace with your project name
                subtitle: 'Short Project Subtitle',           // TODO: Replace with a subtitle
                image: '/projects/project-one.png',           // TODO: Add your project image to /public/projects/
                description: 'A brief description of what this project does and the problem it solves.',  // TODO: Replace
                href: '/projects/project-one',
                icon: Code2,
                gradient: 'from-blue-500 to-cyan-500',
                tags: ['Tag1', 'Tag2', 'Tag3'],               // TODO: Replace with relevant tags
              },
              {
                title: 'Project Two',                         // TODO: Replace with your project name
                subtitle: 'Short Project Subtitle',           // TODO: Replace with a subtitle
                image: '/projects/project-two.png',           // TODO: Add your project image to /public/projects/
                description: 'A brief description of what this project does and the problem it solves.',  // TODO: Replace
                href: '/projects/project-two',
                icon: Zap,
                gradient: 'from-violet-500 to-purple-500',
                tags: ['Tag1', 'Tag2', 'Tag3'],               // TODO: Replace with relevant tags
              },
              {
                title: 'Project Three',                       // TODO: Replace with your project name
                subtitle: 'Short Project Subtitle',           // TODO: Replace with a subtitle
                image: '/projects/project-three.png',         // TODO: Add your project image to /public/projects/
                description: 'A brief description of what this project does and the problem it solves.',  // TODO: Replace
                href: '/projects/project-three',
                icon: Globe,
                gradient: 'from-amber-500 to-orange-500',
                tags: ['Tag1', 'Tag2', 'Tag3'],               // TODO: Replace with relevant tags
              },
              {
                title: 'Project Four',                        // TODO: Replace with your project name (or remove this entry)
                subtitle: 'Short Project Subtitle',           // TODO: Replace with a subtitle
                image: '/projects/project-four.png',          // TODO: Add your project image to /public/projects/
                description: 'A brief description of what this project does and the problem it solves.',  // TODO: Replace
                href: '/projects/project-four',
                icon: Server,
                gradient: 'from-emerald-500 to-teal-500',
                tags: ['Tag1', 'Tag2', 'Tag3'],               // TODO: Replace with relevant tags
              },
            ].map((project) => {
              const Icon = project.icon;
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-slate-900/50 backdrop-blur-sm"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-800/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative p-8 space-y-4">
                    <div className={`w-12 h-12 -mt-16 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{project.subtitle}</p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold pt-2 group-hover:translate-x-2 transition-transform">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Work Together</h2>
            <p className="text-lg text-slate-300 max-w-2xl">Proven expertise in architecting scalable, intelligent systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: 'X+ years', detail: 'YOUR_EXPERTISE_AREA_1' },    // TODO: e.g. "Building enterprise software"
              { label: 'YOUR_STRENGTH_1', detail: 'YOUR_STRENGTH_1_DESC' }, // TODO: e.g. "AI & ML Expert", "Copilots, agents, embeddings"
              { label: 'YOUR_STRENGTH_2', detail: 'YOUR_STRENGTH_2_DESC' }, // TODO
              { label: 'YOUR_STRENGTH_3', detail: 'YOUR_STRENGTH_3_DESC' }, // TODO
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg">{item.label}</div>
                  <div className="text-slate-400">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/20 dark:to-violet-950/20 p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-violet-400/10 dark:from-blue-400/5 dark:to-violet-400/5 blur-3xl" />

            <div className="relative space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Ready to Build?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Let's discuss your next AI-driven project, agentic system, or full-stack innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-all"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
