# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Context & goals

This is the personal portfolio of **Ilani Seguinot**, a fourth-year Digital Arts & Sciences major (minor in Media Production, Management, and Technology) at the **University of Florida**, seeking **software engineering and front-end design internships**.

The site's purpose is to showcase her skills, projects, and background to **recruiters**. When making changes, optimize for that audience: clarity, polish, fast load, accessibility, mobile responsiveness, and prominently surfacing technical and design strengths. Prefer changes that make the work easier for a recruiter to scan and evaluate quickly.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000 (hot reload)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (eslint-config-next, flat config in eslint.config.mjs)
```

There is no test suite or test runner configured.

## Architecture

Single-page personal portfolio built on the **Next.js App Router** (`app/`) with **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

- `app/layout.tsx` is the only layout: loads two Google fonts — **Inter** (sans, the site-wide default for the navbar and body text via `--font-inter`) and **Cormorant Garamond** (serif, for the name, large quotes, and standout display headings via `--font-cormorant`) — sets metadata, and mounts Vercel `<Analytics />`. Apply Cormorant to standout text with the `.font-cormorant` utility (defined in `globals.css`); everything else inherits Inter from `body`.
- `app/page.tsx` is the entire site — it imports and stacks the section components in render order: `Header → Hero → About → AboutJourney → Projects → Contact`. There is no routing, data layer, or CMS; all content is hardcoded inside each component.
- `app/globals.css` uses Tailwind v4's `@import "tailwindcss"` plus `@theme inline` to register CSS variables (background/foreground, font). Light/dark backgrounds come from a `prefers-color-scheme` media query.

### Section components (`components/`)

Each section is a `"use client"` component (they use hooks, Framer Motion, canvas, and mouse tracking). Navigation between them relies on a shared contract:

- **Section `id`s are the navigation anchors.** `Header.tsx` scrolls to and highlights sections by `getElementById`, keyed to a `navItems` list of `{ id, label }`. The ids `hero`, `about`, `journey`, `projects`, `contact` must stay in sync between `Header.tsx`'s `navItems` and the `id={...}` on each section's root element. Renaming or removing a section id silently breaks nav highlighting and scroll.
- `Navbar.tsx` is empty/unused — navigation lives entirely in `Header.tsx`.

### Cursor-reactive text effect (important duplication)

`Hero.tsx`, `About.tsx`, `AboutJourney.tsx`, and `Projects.tsx` each define their **own local copy** of a `LetterSpan` + `HeaderWithAura` pair. The effect: the parent section tracks the mouse via `useMotionValue` (`mouseX`/`mouseY`, set in `onMouseMove`), and each letter interpolates its color toward gold (`#FFC459`) based on distance to the cursor. `LetterSpan` finds its containing section with `closest("section")` (Hero uses `closest(".relative.h-screen")`) to compute relative coordinates.

When editing this effect, remember it is **copy-pasted, not shared** — a fix in one file does not propagate. If asked to change the behavior globally, extract a shared component first.

### Color palette

Recurring brand colors used inline throughout: gold accent `#FFC459`, cream text `#F6F4D2` / `#D3E4E4`, and green/brown section gradients (`#849F8C`, `#4A311F`, `#27321F`). Match these when adding UI.

### Conventions

- Path alias `@/*` maps to the repo root (e.g. `@/components/About`). Mixed with relative imports in `page.tsx` — both work.
- Static assets (`flamboyan.jpg`, `headshot.jpg`, `zelda.png`, `flixhabit.png`, `github.svg`, `googledrive.png`) live in `public/` and are referenced by root-absolute paths via plain `<img>`/`bg-[url('/...')]`, not `next/image`.
