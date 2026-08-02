import { Metadata } from 'next';
import {
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  // TODO: Replace with your name and description
  title: 'Contact - YOUR_FULL_NAME',
  description: 'Get in touch to discuss your next project or collaboration.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me a direct message',
      action: 'Contact Me',
      href: 'mailto:your.email@example.com', // TODO: Replace with your email address
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect professionally',
      action: 'Visit Profile',
      href: 'https://linkedin.com/in/your-linkedin-username', // TODO: Replace with your LinkedIn profile URL
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Explore my projects',
      action: 'View Repositories',
      href: 'https://github.com/your-github-username', // TODO: Replace with your GitHub profile URL
    },
  ];

  // TODO: Replace these with your own areas of expertise
  const expertise = [
    'YOUR_EXPERTISE_1', // e.g. 'Software Architecture'
    'YOUR_EXPERTISE_2', // e.g. 'Cloud & DevOps'
    'YOUR_EXPERTISE_3', // e.g. 'Full-Stack Development'
    'YOUR_EXPERTISE_4', // e.g. 'API Design'
    'YOUR_EXPERTISE_5', // e.g. 'Team Leadership'
    'YOUR_EXPERTISE_6', // e.g. 'Agile & Product Management'
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      {/* Header */}
      <section className="pt-2 pb-2 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
            Let's Connect
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            YOUR_CONTACT_INTRO {/* TODO: e.g. "Looking to discuss software development, consulting, or collaboration opportunities?" */}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-2 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">

            {/* Contact Cards */}
            <div className="space-y-5">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-slate-900/50 p-6 flex items-center gap-5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-400/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    <div className="relative flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {method.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400">
                        {method.description}
                      </p>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mt-2">
                        {method.action}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            {/* How I Can Help */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                How I Can Help
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I help organizations transform ideas into successful products by
                combining Product Strategy, Agentic AI, Generative AI,
                Industrial AI, IoT, and Enterprise Software expertise.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-3">
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Open to discussions on Product Management, Agentic AI,
                  GenAI, Industrial AI, Product Discovery, Product Strategy,
                  and Enterprise Digital Transformation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}