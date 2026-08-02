import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// TODO: Replace all placeholder values below with your actual project details

export const metadata: Metadata = {
  title: 'Project Three - YOUR_FULL_NAME',      // TODO
  description: 'A short description of Project Three.',  // TODO
};

export default function ProjectThreePage() {
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
              {/* TODO: Adjust badge text/color as needed */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-800">
                Production System
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Project Three {/* TODO: Replace with your project name */}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Full Title / Subtitle of Project Three {/* TODO */}
              </p>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {/* TODO: 2-3 sentences overview */}
              A brief overview of Project Three. Describe the problem you were solving, the approach
              you took, and who the users or stakeholders are.
            </p>
          </div>

          {/* TODO: Add screenshot at /public/projects/project-three.png */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm p-4 text-center">
              Add your project screenshot to /public/projects/project-three.png
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-10 md:py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* TODO: Replace with real numbers */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X%</div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_1</div>
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X+</div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_2</div>
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X</div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_3</div>
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">The Problem</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {/* TODO */}
              Describe the core problem this project solved. What was the status quo before you built this?
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">The Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {/* TODO */}
              Describe what you built and how it solved the problem.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 md:py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Technology Stack</h2>
          <div className="space-y-4">
            {[
              { layer: 'Frontend',       items: ['Tech1', 'Tech2', 'Tech3'] },  // TODO
              { layer: 'Backend',        items: ['Tech1', 'Tech2', 'Tech3'] },  // TODO
              { layer: 'Infrastructure', items: ['Tech1', 'Tech2', 'Tech3'] },  // TODO
            ].map((stack) => (
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

      {/* Impact */}
      <section className="py-10 md:py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Impact & Results</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            {/* TODO */}
            Describe the measurable impact this project had. Include business outcomes, user adoption,
            performance improvements, or other relevant results.
          </p>
        </div>
      </section>

      {/* Back */}
      <section className="py-10 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            View All Projects
          </Link>
        </div>
      </section>

    </div>
  );
}
