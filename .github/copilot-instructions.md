# MORECIVIL - Water & Civil Engineering Website

MORECIVIL is a modern React web application for a South Australian water delivery and civil engineering company. Built with Vite, TypeScript, React, shadcn-ui, and Tailwind CSS, with Supabase backend integration.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Prerequisites and Setup
- Node.js v20+ is required (v20.19.4 tested and working)
- npm 10.8+ is required (10.8.2 tested and working)
- No additional system dependencies needed

### Essential Commands (VALIDATED)
Bootstrap the repository:
```bash
npm install  # Takes ~16 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
```

Development workflow:
```bash
npm run dev     # Starts development server on http://localhost:8080 in <1 second
npm run build   # Production build - takes 3-4 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
npm run preview # Preview production build on http://localhost:4173
npm run lint    # Run ESLint - takes ~2 seconds. Returns warnings only (no errors expected)
```

### Expected Build Behavior
- **Dependencies install**: 16-36 seconds with 3 moderate dev-only vulnerabilities (esbuild) - this is NORMAL and doesn't affect production
- **Build succeeds**: 3-4 seconds generating optimized bundle in `dist/` directory with assets:
  - `dist/index.html` (1.7KB) - Main HTML file
  - `dist/assets/index-*.js` (~365KB) - Minified JavaScript bundle  
  - `dist/assets/index-*.css` (~65KB) - Optimized CSS bundle
  - `dist/assets/*` - Optimized images and static assets
- **Linting passes**: 2 seconds with 7 warnings about fast-refresh exports (this is NORMAL for shadcn-ui components)
- **No test framework**: This project has no tests configured - do not attempt to run tests

### Environment Variables
The application requires these Supabase environment variables (already configured in `.env`):
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY` 
- `VITE_SUPABASE_URL`

For CI/CD, these must be set as GitHub secrets along with `OPENAI_API_KEY`.

## Validation

### Manual Validation Requirements
After making changes, ALWAYS validate functionality by:

1. **Start the development server**: `npm run dev`
2. **Access the application**: Navigate to http://localhost:8080
3. **Test core user flows**:
   - Homepage loads with hero section, services, projects gallery, FAQ, and quote forms
   - FAQ accordion functionality works (click questions to expand/collapse)
   - Quote form accepts input (test with sample data)
   - Navigation between pages works (/projects, /water, /civil, /about, /contact)
   - All forms are functional but won't submit without backend connection

### Critical User Scenarios
The application serves potential customers looking for:
- **Water delivery services**: Potable/non-potable water for construction, events, emergencies
- **Civil engineering works**: Site preparation, earthmoving, drainage, subdivisions
- **Emergency water response**: 24/7 bushfire and emergency support across South Australia

Test these scenarios:
1. Customer wants to request a quote → Fill out quote form
2. Customer needs emergency water → Use "Book Water" form  
3. Customer wants to see past work → Navigate to /projects page
4. Customer has questions → Use FAQ section

### Build Validation
ALWAYS run these commands before completing changes:
```bash
npm run lint    # Must pass (warnings OK, no errors)
npm run build   # Must succeed in 3-4 seconds
npm run preview # Must serve application successfully
```

## Common Tasks

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/App.tsx` 
3. Update navigation in `src/components/Header.tsx`
4. Test navigation and functionality manually

### Modifying Components
- UI components are in `src/components/ui/` (shadcn-ui)
- Page components are in `src/components/`
- Always test visual changes via browser
- Use responsive design patterns (mobile-first)

### Styling Changes
- Uses Tailwind CSS with custom design system
- Brand colors: Blue (#00B4D8), Dark Blue (#0B1F2A)
- Uses custom font: Montserrat (site-wide)
- Always test on different screen sizes

### CI/CD Integration
The repository has GitHub Actions workflows:
- **CI** (`.github/workflows/ci.yml`): Runs on PRs to main/develop
- **Deploy** (`.github/workflows/deploy.yml`): Runs on push to main

Both require GitHub secrets for Supabase environment variables.

## Repository Structure

### Key Directories
```
/src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn-ui components
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Homepage hero section
│   ├── Services.tsx     # Services overview
│   ├── FAQ.tsx          # FAQ accordion
│   └── Quote.tsx        # Quote request forms
├── pages/               # Route components
│   ├── Home.tsx         # Homepage (/)
│   ├── Projects.tsx     # Projects showcase (/projects)
│   ├── Water.tsx        # Water services (/water)
│   ├── Civil.tsx        # Civil services (/civil)
│   ├── About.tsx        # About page (/about)
│   └── Contact.tsx      # Contact page (/contact)
├── integrations/        # External service integrations
│   └── supabase/        # Supabase types and client
└── lib/                 # Utility functions
    ├── utils.ts         # General utilities
    └── motion.ts        # Animation utilities
```

### Configuration Files
- `package.json`: Dependencies and scripts
- `vite.config.ts`: Vite configuration (port 8080)
- `tailwind.config.ts`: Tailwind CSS configuration  
- `components.json`: shadcn-ui configuration
- `tsconfig.json`: TypeScript configuration with path aliases
- `eslint.config.js`: ESLint configuration

### Assets and Static Files
- `public/`: Static assets
- `index.html`: HTML template with meta tags and fonts
- `src/index.css`: Global CSS and Tailwind imports

## Troubleshooting

### Common Issues
- **Build failures**: Check that all environment variables are properly set
- **Linting warnings**: 7 warnings about react-refresh exports are expected and safe to ignore
- **Vulnerabilities**: 3 moderate esbuild vulnerabilities are dev-only and don't affect production
- **Supabase connection**: Application functions without backend, forms just won't submit

### Performance Notes
- Development server starts very quickly (<1 second)
- Build process is fast (~4 seconds)
- Hot reload works efficiently in development
- Production build generates optimized bundle with code splitting

## Project Context
MORECIVIL provides water cart delivery and civil earthworks across South Australia. The website showcases their services, completed projects, and allows customers to request quotes or book water delivery. The company specializes in emergency water response, residential/commercial earthworks, and infrastructure projects.