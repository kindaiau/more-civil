# Agent Briefing - MORECIVIL

## Latest Operator Notes

**Last Updated**: New agent briefing system implementation  
**Status**: Active  
**Priority**: Standard operations  

## Current Constraints & Requirements

### Build System Validation
- **ALWAYS** run full build validation before completing changes:
  - `npm run lint` (expect 7 warnings about fast-refresh exports - this is normal)
  - `npm run build` (expect ~5-6s build time, large bundle warning is normal)  
  - `npm run preview` (verify application serves successfully)

### Development Server Requirements  
- Development server runs on `http://localhost:8080` (NOT port 5173)
- Vite config specifies port 8080 explicitly
- Server should start in <1 second

### Environment & Dependencies
- Node.js v20+ required
- npm install takes ~16-17 seconds (expect 6 moderate vulnerabilities - normal for dev dependencies)
- No test framework configured - do not attempt to run tests

### Critical Application Features
- Homepage must load with: hero section, services, projects gallery, FAQ, quote forms
- FAQ accordion functionality must work (expand/collapse)
- Navigation between all pages: /, /projects, /water, /civil, /about, /contact, /blog
- Forms should accept input but won't submit (no backend connection expected)

## Special Instructions

### SEO Implementation Status
- SEO audit completed (see `seo/audit-20250831.md`)
- Schema markup partially implemented
- Additional SEO fixes planned in `seo/fixes/` directory
- Prioritize Core Web Vitals and mobile performance

### Code Style Requirements  
- Use existing shadcn-ui components in `src/components/ui/`
- Follow Tailwind CSS patterns already established
- Maintain brand colors: Blue (#00B4D8), Dark Blue (#0B1F2A)
- Use fonts: Inter (body), Montserrat (headings)

### CI/CD Considerations
- GitHub Actions workflows configured in `.github/workflows/`
- Requires Supabase environment variables as GitHub secrets
- Deploy workflow runs on push to main branch

## Recent Changes & Context

### Repository State
- React + Vite + TypeScript + shadcn-ui + Tailwind CSS stack
- Supabase integration configured but optional for basic functionality  
- Blog page added recently with director's message
- Project showcases water delivery and civil earthworks services

### Known Issues
- Bundle size warning (>500KB) - acceptable for current requirements
- Fast-refresh export warnings from shadcn-ui components - safe to ignore
- Large WASM file (21MB) from AI transformers dependency - investigate optimization

## Conflict Resolution

If any instructions in this BRIEF.md conflict with the main `.github/copilot-instructions.md`:
1. **Prefer the main instructions file** as the source of truth
2. **Call out the discrepancy** in your PR description  
3. **Document what you chose and why** for future reference

## Tasks & Priorities

### Immediate (High Priority)
- Maintain build system stability
- Ensure all page navigation works
- Preserve existing functionality

### Upcoming (Medium Priority)  
- SEO improvements from audit recommendations
- Performance optimization for bundle size
- Enhanced mobile responsiveness

### Future (Low Priority)
- Additional service pages
- Customer testimonials integration
- Advanced Supabase features

---

**Note**: This briefing should be checked by all agents before starting work. Update this file when constraints or priorities change.