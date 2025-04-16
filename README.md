# Portfolio Website

A customizable portfolio website built with Astro, designed to be easily modified by non-developers.

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Project data and content
│   ├── layouts/        # Page layouts
│   ├── pages/          # Website pages
│   ├── styles/         # Global styles and theme
│   └── utils/          # Helper functions
├── public/             # Static assets
└── package.json        # Project configuration
```

## 🎨 Customization Guide

### Changing Colors and Theme

All colors and theme settings are centralized in `src/styles/theme.css`. You can modify:
- Primary colors
- Background colors
- Text colors
- Spacing
- Typography

### Adding/Editing Projects

Projects are managed in `src/content/projects.ts`. Each project has:
- Title
- Description
- Image
- Technologies used
- Links

### Modifying Layout

The main layout is in `src/layouts/Layout.astro`. You can modify:
- Navigation
- Footer
- Page structure

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the existing layout components
3. Add your content

## 🛠️ Available Scripts

| Command           | Action                                      |
|------------------|---------------------------------------------|
| `npm run dev`    | Start development server                    |
| `npm run build`  | Build for production                        |
| `npm run preview`| Preview production build                    |

## 📝 Best Practices

1. Keep all styles in `src/styles/theme.css`
2. Use existing components when possible
3. Add new projects in `src/content/projects.ts`
4. Test changes locally before deploying

## 🚀 Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Project Structure Guide](https://docs.astro.build/en/basics/project-structure/)
