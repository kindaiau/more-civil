# More Civil Project Structure Guide

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui with custom variants
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Email**: Resend API
- **State Management**: React Query (TanStack Query)

## Project Structure

```
src/
├── components/
│   ├── ui/                     # Shadcn UI components (button, input, etc.)
│   ├── Header.tsx              # Main navigation header
│   ├── Hero.tsx                # Homepage hero section
│   ├── Services.tsx            # Services showcase
│   ├── ContactForm.tsx         # General contact form
│   ├── WaterBookingForm.tsx    # Water delivery booking with pricing
│   ├── Reviews.tsx             # Google Reviews integration
│   ├── Gallery.tsx             # Project gallery
│   ├── FAQ.tsx                 # Frequently asked questions
│   ├── Footer.tsx              # Site footer
│   └── Layout.tsx              # Page layout wrapper
├── pages/
│   ├── Home.tsx                # Main landing page (/)
│   ├── Water.tsx               # Water delivery services (/water)
│   ├── Civil.tsx               # Civil construction services (/civil)
│   ├── Projects.tsx            # Project showcase (/projects)
│   ├── About.tsx               # About page (/about)
│   ├── Contact.tsx             # Contact page (/contact)
│   └── NotFound.tsx            # 404 page
├── lib/
│   ├── utils.ts                # Utility functions
│   └── motion.ts               # Animation utilities
└── integrations/
    └── supabase/
        ├── client.ts           # Supabase client setup
        └── types.ts            # Auto-generated DB types
```

## Backend Structure (Supabase)

### Database Tables
- `water_quotes` - Water delivery booking requests with pricing
- `profiles` - User profile information
- `invoices` - Invoice management
- `spend_summary` - Financial summary data

### Edge Functions
- `water-quote` - Handles water delivery form submissions
- `contact` - Handles general contact form submissions  
- `google-reviews` - Fetches Google Reviews data

### Storage
- `invoice-pdfs` - Public bucket for invoice storage

## Key Components

### WaterBookingForm.tsx
- Real-time pricing calculator (bulk discounts)
- Form validation with React Hook Form + Zod
- Integrates with water-quote edge function
- Stores quotes in water_quotes table

### ContactForm.tsx  
- General contact form for inquiries
- Integrates with contact edge function
- Email notifications via Resend

### Reviews.tsx
- Displays Google Reviews
- Structured data (JSON-LD) for SEO
- Fetches from google-reviews edge function

## Design System
- Custom color tokens in `index.css` using HSL values
- Semantic color variables (primary, secondary, accent, etc.)
- Component variants defined in `tailwind.config.ts`
- All styling uses design system tokens, not direct colors

## API Integration Patterns
- Supabase client for database operations
- Edge functions for external API calls (email, Google APIs)
- React Query for data fetching and caching
- CORS enabled for all edge functions

## Key Business Logic
- Water delivery pricing with bulk discounts (10L+ orders)
- Quote management system with approval workflow
- Google Reviews integration for social proof
- Contact form routing to management

## Environment & Deployment
- Deployed via Lovable platform
- Supabase project ID: ccwbdarlfwmqbeftppzk
- Edge functions auto-deploy with code changes
- No VITE_ environment variables used

## Notable Features
- Responsive design with mobile-first approach
- SEO optimized with structured data
- Performance optimized with lazy loading
- Security headers and CORS properly configured
- Real-time form validation and pricing updates