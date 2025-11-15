# PackCo - Backpack Company Website

A fully functional website for a premium backpack company built with Astro.

## Features

- Modern, responsive design
- Content collections for product management
- Product catalog with filtering
- Individual product detail pages
- About and Contact pages
- SEO-friendly
- Fast page loads with Astro

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── ProductCard.astro
│   ├── content/         # Content collections
│   │   ├── config.ts
│   │   └── products/    # Product markdown files
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # File-based routing
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       └── products/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Products

Products are managed through Astro's Content Collections. Each product is a Markdown file in `src/content/products/` with frontmatter containing:

- title
- description
- price
- image
- category (hiking, travel, everyday, laptop)
- features
- colors
- capacity
- featured (boolean)

## Customization

### Adding New Products

Create a new `.md` file in `src/content/products/` following the schema defined in `src/content/config.ts`.

### Styling

Global styles are in `src/layouts/Layout.astro`. Component-specific styles are scoped within each `.astro` component file.

### Color Scheme

The primary color scheme uses blue (`#2563eb`). Update CSS variables in `src/layouts/Layout.astro` to change the theme.

## Tech Stack

- [Astro](https://astro.build) - Web framework
- TypeScript - Type safety
- Content Collections - CMS-like content management

## License

MIT
