import { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  // TODO: Replace with your name and description
  title: "YOUR_NAME Portfolio",
  description: "YOUR_PROFESSIONAL_TITLE",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="site-backdrop" aria-hidden="true" />
          <Navigation />
          <main>
            {children}
          </main>
          <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 px-4">
            <div className="max-w-[min(160rem,94vw)] mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">About</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">YOUR_PROFESSIONAL_TITLE building innovative solutions</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Projects & Case Studies</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li><a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">All Projects</a></li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Connect</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Get in Touch</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                  © 2026 YOUR_NAME. Built with Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
