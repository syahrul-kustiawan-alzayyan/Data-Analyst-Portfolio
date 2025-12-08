# Data Analyst Portfolio

**A professional showcase of data analysis expertise and projects**, featuring an elegant Neo-Brutalist design built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio demonstrates proficiency in data visualization, business intelligence, and analytical methodologies.

## 🌟 Key Features

- **Professional Design**: Charcoal and neon theme with distinctive Neo-Brutalism aesthetics
- **Interactive Project Gallery**: Dynamic Bento grid layout for showcasing analytical projects
- **Performance Optimized**: Static site generation with lightning-fast loading times
- **Fully Responsive**: Seamless experience across all device sizes
- **Modern Animations**: Fluid transitions and interactive elements powered by Framer Motion

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations |
| **Recharts** | Data visualization components |
| **Lucide React** | Icon library |

## 📁 Project Architecture

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── data/            # Project metadata and content
├── lib/             # Utility functions and helpers
├── types/           # TypeScript type definitions
└── public/          # Static assets (images, etc.)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation & Development

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd portfolio-data-analyst
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000) to view the application

### Building for Production
```bash
npm run build
```

## 📊 Project Management

### Adding New Projects
Project data is centralized in `src/data/projects.json`. To add a new project, extend the array with the following structure:

```json
{
  "id": "unique-project-identifier",
  "title": "Project Title",
  "summary": "Comprehensive description highlighting methodologies, tools, and outcomes",
  "thumbnail": "/images/thumbnails/project-image.webp",
  "tags": ["Power BI", "Python", "SQL", "Data Visualization"],
  "category": "Business Intelligence",
  "featured": true,
  "grid_config": "col-span-2 row-span-2",
  "metrics": [
    { "label": "Key Metric", "value": "Quantitative Result" }
  ],
  "links": {
    "github": "https://github.com/username/project-repo",
    "demo": "https://demo-link.com" (optional)
  },
  "theme_color": "#hex-color-code",
  "video_preview": "/videos/preview.webm" (optional)
}
```

### Project Data Specifications
- **ID**: Must be URL-safe and unique
- **Featured**: Boolean determining prominence in portfolio
- **Grid Config**: Responsive layout configuration (col-span-1/2, row-span-1/2)
- **Tags**: Technical skills and tools used in the project
- **Metrics**: Quantifiable achievements and results

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to a GitHub/GitLab/Bitbucket repository
2. Connect repository to [Vercel](https://vercel.com)
3. Configure automatically with zero setup
4. Enjoy automatic deployments with each push

### Alternative Platforms
- **Netlify**: Build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use `npm run export` then serve from `out` directory
- **Self-hosting**: Deploy the output of `npm run build` to any static hosting

## 🎨 Customization Guide

### Theme Colors
Modify the color scheme by adjusting:
- `tailwind.config.ts` - Define custom color palette
- `src/app/globals.css` - Update CSS custom properties

### Typography
Current fonts: Inter (body) and JetBrains Mono (code)
1. Update font imports in `src/app/layout.tsx`
2. Adjust CSS variables in `src/app/globals.css`

### Layout Configuration
- Grid layouts are defined in the project data
- Responsive breakpoints configured in `tailwind.config.ts`
- Animation properties in individual components

## 📈 Performance & SEO

- **Optimized Loading**: Static generation ensures minimal load times
- **Image Optimization**: Next.js Image component with automatic optimization
- **Bundle Size**: Tree-shaking and code splitting for minimal JS
- **SEO Ready**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant markup and navigation

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For inquiries, professional opportunities, or collaboration, feel free to reach out through the contact information provided on the portfolio website.

---

*Built with ❤️ for showcasing data analysis excellence*
