import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment when you add your project screenshot

// TODO: Replace all placeholder values below with your actual project details

export const metadata: Metadata = {
  title: 'Project One - YOUR_FULL_NAME',          // TODO: e.g. 'MyApp - John Smith'
  description: 'A short description of Project One.',  // TODO
};

export default function ProjectOnePage() {
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
              {/* TODO: Change badge text to reflect status, e.g. "Production", "Open Source", "Case Study" */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
                Production System
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Project One {/* TODO: Replace with your project name, e.g. "SmartDash" */}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Full Title / Subtitle of Project One {/* TODO: e.g. "Real-Time Analytics Dashboard for E-Commerce" */}
              </p>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {/* TODO: 2-3 sentences describing what the project does, the problem it solves, and your role. */}
              A brief overview of Project One. Describe the problem you were solving, the approach you took,
              and who the users/stakeholders are. Keep it concise but informative.
            </p>
          </div>

          {/* TODO: Add a screenshot/mockup image at /public/projects/project-one.png */}
          {/* If you don't have an image yet, you can remove this block */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
              {/* Replace this div with: <Image src="/projects/project-one.png" alt="Project One screenshot" fill sizes="45vw" className="object-cover" /> */}
              Add your project screenshot to /public/projects/project-one.png
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-10 md:py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* TODO: Replace each metric with your real measurable outcomes */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X%</div>  {/* TODO */}
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_1</div>  {/* TODO: e.g. "Performance Improvement" */}
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>  {/* TODO */}
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X+</div>  {/* TODO */}
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_2</div>  {/* TODO: e.g. "Users Onboarded" */}
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>  {/* TODO */}
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-2 bg-white dark:bg-slate-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">X</div>  {/* TODO */}
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">KEY_METRIC_3</div>  {/* TODO: e.g. "Integrations Built" */}
              <p className="text-xs text-slate-500 dark:text-slate-500">Brief context for this metric.</p>  {/* TODO */}
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
              {/* TODO: Describe the problem or challenge this project addressed. What was painful, inefficient, or missing? */}
              Describe the core problem this project solved. What was the status quo before you built this?
              What pain points existed for users or the business?
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">The Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {/* TODO: Describe your solution and why it was the right approach. */}
              Describe what you built and how it solved the problem. What were the key design decisions?
              What made your approach effective?
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
              {
                layer: 'Frontend',  // TODO: Rename layer to fit your stack (e.g. "Backend", "Infrastructure")
                items: ['Tech1', 'Tech2', 'Tech3'],  // TODO: e.g. ['React', 'TypeScript', 'Tailwind CSS']
              },
              {
                layer: 'Backend',
                items: ['Tech1', 'Tech2', 'Tech3'],  // TODO: e.g. ['Node.js', 'Express', 'PostgreSQL']
              },
              {
                layer: 'Infrastructure',
                items: ['Tech1', 'Tech2', 'Tech3'],  // TODO: e.g. ['AWS', 'Docker', 'CI/CD']
              },
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

      {/* Key Features */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Feature One',      // TODO: e.g. "Real-Time Data Sync"
                description: 'Describe what this feature does and why it matters to users.',  // TODO
              },
              {
                title: 'Feature Two',      // TODO
                description: 'Describe what this feature does and why it matters to users.',  // TODO
              },
              {
                title: 'Feature Three',    // TODO
                description: 'Describe what this feature does and why it matters to users.',  // TODO
              },
              {
                title: 'Feature Four',     // TODO
                description: 'Describe what this feature does and why it matters to users.',  // TODO
              },
            ].map((feature) => (
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
            {/* TODO: Summarize the business impact, outcomes, and any lessons learned. */}
            Describe the measurable impact this project had. Include business outcomes, user adoption,
            performance improvements, cost savings, or any other relevant results. What did you learn
            from building this?
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
