import { Metadata } from 'next';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Icon } from '@/lib/icons';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: `Services - ${siteConfig.personal.fullName}`,
  description: 'Services and consulting offerings.',
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      {/* Header */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Services
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Comprehensive AI and engineering services tailored to enterprise needs. From strategy and architecture to implementation and optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-semibold transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 max-w-lg">
              {services.stats.map((stat) => (
                <div key={stat.detail} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {services.serviceIcons.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-5 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 p-0.5">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-md flex items-center justify-center">
                    <Icon name={item.icon} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Core Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">What I can deliver for your organization</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.coreServices.map((service, idx) => (
              <div key={idx} className="relative rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-400/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 p-0.5">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-md flex items-center justify-center">
                        <Icon name={service.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Key Deliverables:</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Engagement Models</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Flexible options tailored to your project needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.engagementModels.map((model, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 p-8 bg-white dark:bg-slate-900/50 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{model.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{model.duration}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Process</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Proven methodology for successful outcomes</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent" />
            </div>

            <div className="relative grid md:grid-cols-4 gap-6">
              {services.process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 p-0.5 flex items-center justify-center">
                        <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Why Work With Me</h2>
            <p className="text-lg text-slate-300">Value you can expect</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.whyWorkWithMe.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
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

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Ready to Start?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Let's discuss your project and find the perfect engagement model for your needs.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
