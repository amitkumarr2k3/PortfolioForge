# Portfolio Website Template

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.
Fork or clone this repo, fill in your details, and have a professional portfolio live in minutes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38b2ac?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

---

## Table of Contents

1. [What This Template Gives You](#what-this-template-gives-you)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Customization Guide — Step by Step](#customization-guide--step-by-step)
   - [Step 1: Your Name & Branding](#step-1-your-name--branding)
   - [Step 2: Home Page Hero](#step-2-home-page-hero)
   - [Step 3: About / Career Timeline](#step-3-about--career-timeline)
   - [Step 4: Contact Links](#step-4-contact-links)
   - [Step 5: Services Page](#step-5-services-page)
   - [Step 6: Projects](#step-6-projects)
   - [Step 7: Blog Posts](#step-7-blog-posts)
   - [Step 8: Project Images](#step-8-project-images)
5. [Adding / Removing Pages](#adding--removing-pages)
6. [Theming & Colors](#theming--colors)
7. [File Structure Reference](#file-structure-reference)
8. [Deployment](#deployment)
9. [Placeholder Reference](#placeholder-reference)

---

## What This Template Gives You

| Page | What it shows |
|------|--------------|
| **Home** (`/`) | Hero with name, title, stats, featured projects, expertise highlights, CTA |
| **About** (`/about`) | Career timeline, core expertise, skills/tech stack, values |
| **Projects** (`/projects`) | Project listing with metrics, tech stack, impact |
| **Project Detail** (`/projects/project-one` etc.) | Full case study page per project |
| **Services** (`/services`) | What you offer, service cards, CTA |
| **Blog** (`/blog`) | Post listing (you write/link the posts) |
| **Contact** (`/contact`) | Email, LinkedIn, GitHub, expertise summary |

Features:
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
- Basic familiarity with React/TSX (to edit page content)

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

Now follow the customization steps below to make it yours.

---

## Customization Guide — Step by Step

All personal content is isolated in a small set of files. Follow each step in order.

### Step 1: Your Name & Branding

**File:** `app/layout.tsx`

Find and replace:
| Placeholder | Replace with |
|-------------|-------------|
| `YOUR_NAME` | Your full name (e.g. `Jane Smith`) |
| `YOUR_PROFESSIONAL_TITLE` | Your role/title (e.g. `Full-Stack Engineer`) |

This controls the browser tab title and the footer copyright text.

**File:** `components/Navigation.tsx`

Find and replace:
| Placeholder | Replace with |
|-------------|-------------|
| `YN` | Your 2-letter initials (e.g. `JS`) |
| `YOUR_FULL_NAME` | Your full name |

---

### Step 2: Home Page Hero

**File:** `app/page.tsx`

This is the first thing visitors see. Replace the following:

| Placeholder | Replace with |
|-------------|-------------|
| `YOUR_HERO_TAGLINE` | Short punchy badge text (e.g. `"Open to new opportunities"`) |
| `YOUR_FULL_NAME` | Your full name |
| `YOUR_TITLE_1 • YOUR_TITLE_2 • YOUR_TITLE_3` | Three headline descriptors (e.g. `"Software Engineer • Open Source Contributor • Technical Writer"`) |
| `YOUR_SHORT_BIO` | 1–2 sentence professional bio |
| Stats (`X+`, `X+`, `X+`, `X`) | Your real numbers (years experience, projects, clients, highlights) |
| `YOUR_SKILL_1`, `YOUR_SKILL_2`, `YOUR_SKILL_3` | Three core strengths shown in the hero panel |
| Expertise section (`YOUR_EXPERTISE_AREA_1`, `YOUR_STRENGTH_1..3`) | 4 items in "Why Work Together" section |

For the **Featured Projects** cards, see [Step 6: Projects](#step-6-projects).

---

### Step 3: About / Career Timeline

**File:** `app/about/page.tsx`

| Placeholder | Replace with |
|-------------|-------------|
| `YOUR_FULL_NAME` (metadata) | Your full name |
| `YOUR_PROFESSIONAL_TITLE` | Your title/specialization |
| `YOUR_ABOUT_INTRO` | A 1–2 sentence personal summary |
| Career highlights panel (`YOUR_ROLE_1..3`, `YEAR`) | Your 3 most recent role titles and date ranges |
| Timeline entries (`YOUR_CURRENT_ROLE`, `YOUR_CURRENT_COMPANY`, `YOUR_ROLE_1_DESCRIPTION`, `highlights`) | Your actual career history — repeat the 3 blocks for each job |

**Adding more / fewer career entries:** The timeline is an array. Add or remove objects in the `[{ year, title, company, description, highlights }]` array.

The **Core Expertise** and **Technologies & Tools** sections can also be updated to reflect your actual skillset.

---

### Step 4: Contact Links

**File:** `app/contact/page.tsx`

| Placeholder | Replace with |
|-------------|-------------|
| `your.email@example.com` | Your actual email address |
| `your-linkedin-username` | Your LinkedIn username (the part after `linkedin.com/in/`) |
| `your-github-username` | Your GitHub username |
| `YOUR_CONTACT_INTRO` | One sentence describing what you're open to discussing |
| `YOUR_EXPERTISE_1..6` | Your 6 areas of expertise shown on the contact page |

> **Security note:** Your email is placed in a `mailto:` link — it will be visible in the page source. If you prefer not to expose it, consider using a contact form service instead.

---

### Step 5: Services Page

**File:** `app/services/page.tsx`

Update the stats and the service grid items with your own offerings.

| Placeholder | Replace with |
|-------------|-------------|
| Stats (`X+` values) | Your real numbers |
| `YOUR_SERVICE_1..6` | Names of services you offer |

The detailed service cards further down the page describe what you do in more depth — update those descriptions too.

---

### Step 6: Projects

You have **two layers** to update:

#### 6a. Project listing (the cards on `/projects` and home page)

**Files:** `app/projects/page.tsx` and `app/page.tsx`

Each project entry is an object in an array. For each project, replace:

```ts
{
  title: 'Project One',                   // Short name shown as heading
  fullTitle: 'Full Title of Project One', // Longer descriptive title
  description: '...',                     // 2–3 sentence description
  href: '/projects/project-one',          // Must match the folder name
  status: 'Production',                   // e.g. "Production", "Open Source", "Side Project"
  metrics: [
    { label: 'KEY_METRIC_1', value: 'X%' }, // Up to 3 measurable outcomes
    ...
  ],
  technologies: ['Tech1', 'Tech2', ...],  // Stack used
  impact: '...',                          // One-line impact statement
}
```

#### 6b. Individual project detail pages

Each project has its own page in `app/projects/`. Three templates are provided:

| Folder | Route |
|--------|-------|
| `app/projects/project-one/page.tsx` | `/projects/project-one` |
| `app/projects/project-two/page.tsx` | `/projects/project-two` |
| `app/projects/project-three/page.tsx` | `/projects/project-three` |

**To rename a project** (e.g. call it "MyApp" at `/projects/myapp`):
1. Rename the folder: `app/projects/project-one/` → `app/projects/myapp/`
2. Update `href: '/projects/myapp'` in both `app/projects/page.tsx` and `app/page.tsx`
3. Update the metadata title inside the page file

**To add a 4th project:**
1. Copy `app/projects/project-three/` as `app/projects/project-four/`
2. Add a 4th entry to the project arrays in `app/projects/page.tsx` and `app/page.tsx`

**To remove a project** (e.g. if you have fewer than 3):
1. Delete the folder
2. Remove its entry from the arrays in `app/projects/page.tsx` and `app/page.tsx`

Inside each project page, fill in:
- Project name and subtitle
- Overview paragraph
- Key metrics (3 measurable results)
- Problem & Solution sections
- Technology stack (grouped by layer)
- Key Features (up to 4)
- Impact & Results summary

---

### Step 7: Blog Posts

**File:** `app/blog/page.tsx`

The blog list is an array of objects. Replace the placeholder entries with your own articles:

```ts
{
  title: 'Your Article Title',
  excerpt: 'A one-sentence summary of what readers will learn.',
  date: 'YYYY-MM-DD',
  category: 'Technical',   // e.g. "AI", "Product", "Tutorial", "Career"
  slug: 'your-article-slug',
}
```

> **Note:** The "Read More" links point to `/blog/[slug]`. You'll need to create those pages (or link to an external platform like Medium/Dev.to) separately. To link externally, replace the `href` with the full URL.

---

### Step 8: Project Images

Place project screenshots or mockups in `public/projects/`:

```
public/
  projects/
    project-one.png     ← referenced as /projects/project-one.png
    project-two.png
    project-three.png
```

**Recommended image specs:**
- Format: PNG or WebP
- Dimensions: 1200 × 900 px (4:3 aspect ratio)
- File size: under 500 KB (use [Squoosh](https://squoosh.app/) to compress)

In the project detail page, replace the placeholder `div` with an `Image` component:

```tsx
// Replace this:
<div className="... flex items-center justify-center text-slate-400 ...">
  Add your project screenshot to /public/projects/project-one.png
</div>

// With this:
<Image
  src="/projects/project-one.png"
  alt="Project One screenshot"
  fill
  sizes="45vw"
  className="object-cover"
/>
```

---

## Adding / Removing Pages

The navigation links are defined in `components/Navigation.tsx`:

```ts
const links = [
  { href: '/about',    label: 'About' },
  { href: '/projects', label: 'Projects & Case Studies' },
  { href: '/contact',  label: 'Contact' },
];
```

Add or remove entries here to control what appears in the nav bar.

> The `/services` and `/blog` pages exist but are not in the nav by default. Add them if you want them visible.

---

## Theming & Colors

Colors are controlled by Tailwind CSS utility classes. The template uses a **blue-violet** accent palette.

To change the accent color globally, do a find-and-replace across all files:
- Replace `blue-600` / `blue-500` → your chosen color (e.g. `emerald-600`)
- Replace `violet-600` / `violet-500` → your chosen secondary color

The dark mode is handled by `ThemeProvider` (`components/ThemeProvider.tsx`) using the `class` strategy. The default theme is `dark` — change `defaultTheme="dark"` to `"light"` in `app/layout.tsx` if you prefer light as default.

---

## File Structure Reference

```
app/
  layout.tsx            ← Root layout: nav, footer, metadata, theme
  page.tsx              ← Home page (hero, featured projects, CTA)
  about/page.tsx        ← About: career timeline, expertise, tech stack
  contact/page.tsx      ← Contact: email, LinkedIn, GitHub, expertise
  projects/
    page.tsx            ← Project listing with case study cards
    project-one/
      page.tsx          ← Full case study for Project One
    project-two/
      page.tsx          ← Full case study for Project Two
    project-three/
      page.tsx          ← Full case study for Project Three
  services/page.tsx     ← Services/consulting offerings
  blog/page.tsx         ← Blog post listing
  globals.css           ← Global CSS (mostly Tailwind base)

components/
  Navigation.tsx        ← Top nav bar (name, links, theme toggle)
  ThemeProvider.tsx     ← Dark/light mode context
  ThemeToggle.tsx       ← Dark/light mode button
  ContactForm.tsx       ← (Optional) contact form component

public/
  projects/             ← Place project screenshots here
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

In Netlify: New site → Import from Git → set build command to `npm run build` and publish directory to `.next`.

### Self-hosted / VPS

```bash
npm run build
npm start           # Starts the production server on port 3000
```

Use Nginx or Caddy as a reverse proxy in front of port 3000.

---

## Placeholder Reference

Here is every placeholder in the template and where to find it:

| Placeholder | File(s) | What to put there |
|-------------|---------|-------------------|
| `YOUR_NAME` | `app/layout.tsx` | Your full name |
| `YOUR_FULL_NAME` | Multiple files | Your full name |
| `YOUR_PROFESSIONAL_TITLE` | `app/layout.tsx`, `app/about/page.tsx` | Your role title |
| `YN` | `components/Navigation.tsx` | Your 2-letter initials |
| `YOUR_HERO_TAGLINE` | `app/page.tsx` | Short badge text on home hero |
| `YOUR_TITLE_1/2/3` | `app/page.tsx` | Three headline descriptors |
| `YOUR_SHORT_BIO` | `app/page.tsx` | 1–2 sentence bio |
| `YOUR_SKILL_1/2/3` | `app/page.tsx` | Three core strengths |
| `YOUR_EXPERTISE_AREA_1` | `app/page.tsx` | First "Why Work Together" item |
| `YOUR_STRENGTH_1/2/3` | `app/page.tsx` | Other "Why Work Together" items |
| `YOUR_ABOUT_INTRO` | `app/about/page.tsx` | About page summary paragraph |
| `YOUR_ROLE_1/2/3` | `app/about/page.tsx` | Career timeline role titles |
| `YOUR_CURRENT/PREV/EARLY_ROLE` | `app/about/page.tsx` | Timeline role titles |
| `YOUR_CURRENT/PREV/EARLY_COMPANY` | `app/about/page.tsx` | Company names |
| `YOUR_ROLE_1/2/3_DESCRIPTION` | `app/about/page.tsx` | Role descriptions |
| `your.email@example.com` | `app/contact/page.tsx` | Your email |
| `your-linkedin-username` | `app/contact/page.tsx` | LinkedIn username |
| `your-github-username` | `app/contact/page.tsx` | GitHub username |
| `YOUR_CONTACT_INTRO` | `app/contact/page.tsx` | Contact intro sentence |
| `YOUR_EXPERTISE_1..6` | `app/contact/page.tsx` | Expertise list items |
| `YOUR_SERVICE_1..6` | `app/services/page.tsx` | Service names in grid |
| Stats (`X+` values) | Multiple files | Real numbers |
| Project `title`, `fullTitle`, `description`, `metrics`, `technologies`, `impact` | `app/projects/page.tsx`, `app/page.tsx` | Your project details |
| `Project One/Two/Three` | `app/projects/project-*/page.tsx` | Project names, descriptions, metrics, stack |

---

## License

MIT — free to use, modify, and deploy for personal and commercial use. Attribution appreciated but not required.
