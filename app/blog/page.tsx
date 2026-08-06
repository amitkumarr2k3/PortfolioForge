import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.personal.fullName}`,
  description: 'Articles and thoughts on your areas of expertise.',
};

export default function BlogPage() {
  const posts = siteConfig.blog.posts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      {/* Header */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">Blog</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Thoughts on AI, agentic systems, full-stack development, and the future of software.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-[min(160rem,94vw)] mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-slate-900/50 backdrop-blur-sm p-6 space-y-4 flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-400/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-3 flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="relative flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <time className="text-sm text-slate-500 dark:text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <a
                      href={post.externalUrl ?? `/blog/${post.slug}`}
                      target={post.externalUrl ? '_blank' : undefined}
                      rel={post.externalUrl ? 'noopener noreferrer' : undefined}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-600 dark:text-slate-400 text-lg">Blog posts coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
