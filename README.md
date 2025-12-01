# Data Analyst Portfolio

A modern portfolio website showcasing data analysis projects and expertise, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Charcoal and neon theme with Neo-Brutalism aesthetics
- **Project Showcase**: Bento grid layout for displaying projects
- **Interactive Elements**: Smooth animations and transitions
- **Responsive Design**: Works on all device sizes
- **Performance Optimized**: Static site generation for fast loading

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React Icons
- **Visualizations**: Recharts

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable React components
- `/src/data` - Project data in JSON format
- `/src/lib` - Utility functions
- `/src/types` - TypeScript type definitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data Management

Project data is stored in `src/data/projects.json`. To add a new project, simply add a new entry to the array with the following structure:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "summary": "Brief description of the project",
  "thumbnail": "/images/projects/image.webp",
  "tags": ["Python", "SQL", "Tableau"],
  "category": "Visualization",
  "featured": true,
  "grid_config": "col-span-1 row-span-1",
  "metrics": [
    { "label": "Accuracy", "value": "95%" }
  ],
  "links": {
    "github": "https://github.com/username/repo",
    "demo": "https://demo-link.com"
  },
  "theme_color": "#00fefc",
  "video_preview": "/videos/preview.webm"
}
```

## Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect and deploy your Next.js application

### Netlify
1. Push your code to a GitHub repository
2. Connect your repository to [Netlify](https://netlify.com)
3. Set the build command to `npm run build` and publish directory to `out`

### GitHub Pages
To deploy to GitHub Pages, first build the project for static export:

```bash
npm run build
npm run export
```

Then configure GitHub Pages to serve from the `out` directory.

## Customization

### Theme Colors
You can customize the color scheme in:
- `tailwind.config.ts` - Define custom colors
- `src/app/globals.css` - Define CSS variables

### Fonts
The project uses Inter (sans-serif) and JetBrains Mono (monospace). To change fonts:
1. Update the font imports in `src/app/layout.tsx`
2. Update the CSS variables in `src/app/globals.css`

## Performance
- Static site generation ensures fast loading times
- Optimized images using Next.js Image component
- Minimal JavaScript bundle size
- Properly configured for SEO
