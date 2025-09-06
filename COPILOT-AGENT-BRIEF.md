# Copilot Agent Brief

## Purpose
- Central place for business context, constraints, and the latest operator notes that Copilot must read before doing work.

## Company context
- Business: MORECIVIL — Water delivery and civil engineering (South Australia)
- Goals: Showcase services and projects, enable quote requests, and support emergency water needs.

## Priorities and constraints
- Images: Prefer .webp; delete .jpg/.jpeg when replacing; keep filenames kebab-case.
- Runtime: Node 20+, npm 10+; Vite dev server on http://localhost:8080.
- Lint/build: `npm run lint` (warnings OK), `npm run build` (3–4s), `npm run preview`.
- Tech: React + TypeScript + Tailwind + shadcn-ui; no test framework.
- PRs: Keep changes small; include a validation checklist in the PR body (lint/build/preview).

## Branch naming
- Feature: feat/<short-summary>
- Fix: fix/<short-summary>
- Chore: chore/<short-summary>
- Docs: docs/<short-summary>

## Assets
- Public images: public/images/
- Project images: public/images/projects/
- Brand assets: public/images/brand/

## Current initiatives
- (Add short bullets of current goals/tasks here)
- Example: Migrate all project images to .webp and remove .jpg duplicates.

## Voice and tone
- Clear, professional, concise. Prefer action-oriented copy.

---

- Add notes here under "Current initiatives" and "Priorities and constraints."
- For specific tasks, open an issue via the "Copilot Task" template and attach links/assets.

## Acceptance checklist for PRs
- `npm run lint` → no errors
- `npm run build` → success
- `npm run preview` → app serves correctly
- Validate pages: /, /projects, /water, /civil, /about, /contact