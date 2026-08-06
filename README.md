# Portfolio Website Template

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.
Fork or clone this repo, edit **one config file**, and have a professional portfolio live in minutes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38b2ac?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

---

## Table of Contents

1. [What This Template Gives You](#what-this-template-gives-you)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Single Config File — How It Works](#single-config-file--how-it-works)
5. [Customization Guide](#customization-guide)
   - [Personal Info & Branding](#personal-info--branding)
   - [Home Page](#home-page)
   - [About Page](#about-page)
   - [Projects](#projects)
   - [Services](#services)
   - [Contact](#contact)
   - [Blog](#blog)
   - [Navigation](#navigation)
   - [Project Images](#project-images)
6. [Theming & Colors](#theming--colors)
7. [File Structure Reference](#file-structure-reference)
8. [Deployment](#deployment)

---

## What This Template Gives You

| Page | What it shows |
|------|--------------|
| **Home** (`/`) | Hero with name, title, stats, featured projects, expertise highlights, CTA |
| **About** (`/about`) | Career timeline, core expertise, skills/tech stack, values |
| **Projects** (`/projects`) | Project listing with metrics, tech stack, impact |
| **Project Detail** (`/projects/<slug>`) | Full case study page — one per project, generated automatically |
| **Services** (`/services`) | What you offer, service cards, CTA |
| **Blog** (`/blog`) | Post listing (you write/link the posts) |
| **Contact** (`/contact`) | Email, LinkedIn, GitHub, expertise summary |

Features:
- **All content lives in a single, typed config file** — no hunting through component code
- Dark / light mode toggle
- Fully responsive (mobile-first)
- Fast — static generation via Next.js
- SEO metadata on every page
- Clean component structure (easy to extend)

---

## Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js) or **pnpm** / **yarn**
- A code editor (VS Code recommended)

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the template running.

Now edit `config/site.config.ts` to make it yours (see below).

---

## Single Config File — How It Works

**All personal content — your name, bio, projects, skills, contact links, blog posts, nav
links, everything — lives in one file:**

```
config/site.config.ts
```

Every page under `app/` imports `siteConfig` from this file and renders whatever is in it.
The page components themselves contain **no personal content** — just layout and styling.

**Why this matters:**
- ✅ You only ever need to touch **one file** to build your entire portfolio.
- ✅ It's a plain, strongly-typed TypeScript object. If you make a mistake — a missing
  comma, a typo in a field name — your editor and `npm run dev` will immediately show you
  a clear compile error pointing at the exact line, instead of silently breaking a page or
  crashing at runtime.
- ✅ Adding/removing a project, a timeline entry, a blog post, or a nav link is just
  adding/removing an object from an array. No new files, no hunting across the `app/`
  folder, no risk of breaking unrelated pages.
- ✅ Icons are referenced by name (e.g. `icon: 'Brain'`) as plain strings — pick any name
  from [lucide.dev/icons](https://lucide.dev/icons) — so you never need to touch import
  statements.

**How to edit it:**
1. Open `config/site.config.ts` in your editor.
2. Search for `TODO` — every field that needs your input is marked with a `// TODO` comment.
3. Replace placeholder values, or add/remove array items as needed.
4. Save. `npm run dev` will hot-reload the site with your changes.

If you ever want to double-check the shape of the config, the `SiteConfig` TypeScript
interface at the top of the file documents every field and what it's used for.

---

## Customization Guide

### Personal Info & Branding

Edit `siteConfig.personal` and `siteConfig.seo`:

```ts
personal: {
  fullName: 'Jane Smith',
  initials: 'JS',              // shown as the logo mark in the nav bar
  professionalTitle: 'Full-Stack Engineer',
  email: 'jane@example.com',
  linkedinUrl: 'https://linkedin.com/in/janesmith',
  githubUrl: 'https://github.com/janesmith',
},
seo: {
  siteTitle: 'Jane Smith Portfolio',   // browser tab title
  siteDescription: 'Full-Stack Engineer',
},
```

This automatically updates the browser tab title, footer copyright, nav bar logo, and
contact links across the whole site.

> **Security note:** Your email is placed in a `mailto:` link — it will be visible in the
> page source. If you prefer not to expose it, consider using a contact form service instead.

### Home Page

Edit `siteConfig.home`:
- `heroTagline` — short punchy badge text
- `heroTitles` — three headline descriptors (e.g. `["Software Engineer", "OSS Contributor", "Writer"]`)
- `heroShortBio` — 1–2 sentence professional bio
- `heroStats` — 4 stat cards (label + detail)
- `heroSkills` — 3 core strengths
- `whyWorkTogether` — 4 items shown in the "Why Work Together" section

Featured projects on the home page are pulled automatically from `siteConfig.projects`
(any project with `featured: true`).

### About Page

Edit `siteConfig.about`:
- `intro` — 1–2 sentence personal summary
- `careerHighlights` — 3 recent roles shown in the hero panel
- `timeline` — your career history array (`{ year, title, company, description, highlights }`).
  Add or remove entries freely — the page adjusts automatically.
- `coreExpertise`, `values`, `techStack` — update to reflect your actual skillset

### Projects

Everything about your projects lives in the `siteConfig.projects` array. Each entry
defines both the summary card (shown on `/` and `/projects`) **and** the full case-study
page (shown at `/projects/<slug>`) — there's only one place to edit per project.

```ts
{
  slug: 'my-app',                  // becomes the URL: /projects/my-app
  title: 'MyApp',
  subtitle: 'Real-time analytics dashboard',
  fullTitle: 'Real-Time Analytics Dashboard for E-Commerce',
  description: '...',
  image: '/projects/my-app.png',
  icon: 'Code2',                   // any name from lucide.dev/icons
  gradient: 'from-blue-500 to-cyan-500',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  featured: true,                  // show on the home page?
  status: 'Production',
  metrics: [{ label: 'Performance Gain', value: '40%' }, ...],
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  impact: '...',
  detail: {
    badge: 'Production System',
    heroDescription: '...',
    keyMetrics: [{ label: '...', value: '...', context: '...' }, ...],
    problem: '...',
    solution: '...',
    techStack: [{ layer: 'Frontend', items: ['React', 'TypeScript'] }, ...],
    features: [{ title: '...', description: '...' }, ...],
    impactResults: '...',
  },
}
```

**To add a project:** copy an existing object in the array, give it a unique `slug`, fill
in your details. A page at `/projects/<slug>` is generated automatically — no new files
needed.

**To remove a project:** delete its object from the array.

**To rename a project's URL:** just change its `slug` value.

### Services

Edit `siteConfig.services`: `stats`, `serviceIcons`, `coreServices`, `engagementModels`,
`process`, and `whyWorkWithMe`. The `/services` page renders these arrays directly.

### Contact

Edit `siteConfig.contact`: `intro`, `howICanHelp`, `expertise` (6 areas), and `footerNote`.
Contact method links (email/LinkedIn/GitHub) come from `siteConfig.personal`.

### Blog

Edit `siteConfig.blog.posts` — an array of `{ title, excerpt, date, category, slug }`.
Set `externalUrl` on a post instead if it lives on an external platform (Medium/Dev.to/etc.) —
"Read More" will link there instead of `/blog/<slug>`.

### Navigation

Edit `siteConfig.navigation.links` to control what appears in the nav bar:

```ts
links: [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects & Case Studies' },
  { href: '/contact', label: 'Contact' },
],
```

> The `/services` and `/blog` pages exist but aren't in the nav by default. Add them here
> if you want them visible.

### Project Images

Place project screenshots or mockups in `public/projects/`, matching the `image` path you
set in each project's config entry:

```
public/
  projects/
    my-app.png     ← referenced as image: '/projects/my-app.png'
```

**Recommended image specs:**
- Format: PNG or WebP
- Dimensions: 1200 × 900 px (4:3 aspect ratio)
- File size: under 500 KB (use [Squoosh](https://squoosh.app/) to compress)

---

## Theming & Colors

Colors are controlled by Tailwind CSS utility classes. The template uses a **blue-violet**
accent palette.

To change the accent color globally, do a find-and-replace across the `app/` and
`components/` folders:
- Replace `blue-600` / `blue-500` → your chosen color (e.g. `emerald-600`)
- Replace `violet-600` / `violet-500` → your chosen secondary color

The dark mode is handled by `ThemeProvider` (`components/ThemeProvider.tsx`) using the
`class` strategy. The default theme is `dark` — change `defaultTheme="dark"` to `"light"`
in `app/layout.tsx` if you prefer light as default.

---

## File Structure Reference

```
config/
  site.config.ts       ← ★ THE ONLY FILE YOU NEED TO EDIT — all personal content lives here

lib/
  icons.tsx             ← Resolves icon name strings (e.g. "Brain") from config to lucide-react components

app/
  layout.tsx            ← Root layout: nav, footer, metadata, theme (reads siteConfig)
  page.tsx              ← Home page (reads siteConfig.home + siteConfig.projects)
  about/page.tsx         ← About page (reads siteConfig.about)
  contact/page.tsx       ← Contact page (reads siteConfig.contact + siteConfig.personal)
  projects/
    page.tsx            ← Project listing (reads siteConfig.projects)
    [slug]/page.tsx      ← Dynamic case-study page — one per project in siteConfig.projects
  services/page.tsx      ← Services page (reads siteConfig.services)
  blog/page.tsx           ← Blog post listing (reads siteConfig.blog.posts)
  globals.css            ← Global CSS (mostly Tailwind base)

components/
  Navigation.tsx        ← Top nav bar (reads siteConfig.navigation + siteConfig.personal)
  ThemeProvider.tsx      ← Dark/light mode context
  ThemeToggle.tsx        ← Dark/light mode button
  ContactForm.tsx        ← (Optional) contact form component (reads siteConfig.personal.email)

public/
  projects/              ← Place project screenshots here
```

---

## Deployment

### Vercel (recommended — free tier available)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

Follow the prompts. Your site will be live at `https://your-project.vercel.app`.

To use a custom domain, go to your Vercel dashboard → Domains → Add.

### Netlify

```bash
npm run build       # Builds to .next/
```

In Netlify: New site → Import from Git → set build command to `npm run build` and publish
directory to `.next`.

### Self-hosted / VPS

```bash
npm run build
npm start           # Starts the production server on port 3000
```

Use Nginx or Caddy as a reverse proxy in front of port 3000.

---

## License

MIT — free to use, modify, and deploy for personal and commercial use. Attribution appreciated but not required.
