import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site.config';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-renders a static page for every project defined in the config.
export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} - ${siteConfig.personal.fullName}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { detail } = project;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">

      {/* Back navigation */}
      <section className="py-8 px-4 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
                {detail.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {project.fullTitle}
              </p>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {detail.heroDescription}
            </p>
          </div>

          {/* TODO: Add a screenshot at /public + set `image` in config/site.config.ts, then replace this block with an <Image> component */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm px-6 text-center">
              Add your project screenshot to {project.image}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-10 md:py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {detail.keyMetrics.map((metric, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{metric.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-500">{metric.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">The Problem</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {detail.problem}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">The Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {detail.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 md:py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Technology Stack</h2>
          <div className="space-y-4">
            {detail.techStack.map((stack) => (
              <div key={stack.layer} className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stack.layer}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {detail.features.map((feature) => (
              <div key={feature.title} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-10 md:py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Impact & Results</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            {detail.impactResults}
          </p>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-10 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            View All Projects
          </Link>
        </div>
      </section>

    </div>
  );
}
