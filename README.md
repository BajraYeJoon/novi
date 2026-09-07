# Novi — Frontend Assignment

**Novi** is a marketing homepage for a team productivity tool that brings tasks, docs, and conversations into one calm workspace — built for small, fast-moving teams.

## Tech stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS 4**
- **Motion** (Framer Motion) for scroll-triggered animations
- **Lenis** for smooth scrolling
- **lucide-react** for icons

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Deploy

The app is deployed on **Vercel**

> Deployed preview link: _https://novi-project.vercel.app_

## Repository structure

```
app/            Routes, metadata, layout
components/
  sections/     Hero + Features sections
  layout/       Navbar, Footer
  ui/           SectionHeading
config/         Site content 
lib/            Metadata, JSON-LD helpers
public/         Local images
```

## Sub-pages (footer links)

Pages like **Pricing**, **About**, **Blog**, **Contact**, **Features**, **Privacy**, and **Terms** are built from a single reusable `SimplePage` component (`title` + `description` + optional `body`) with per-page metadata — added just to give the footer links working destinations within the scope of this assignment, not as full product pages.