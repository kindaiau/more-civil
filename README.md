# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/99ce33f8-8800-4ec2-8b63-49c8b3732976

## 🚀 Quick Start

- **Working in Replit?** → See our [**Replit to GitHub Transfer Guide**](./REPLIT_TO_GITHUB_GUIDE.md)
- **Local development?** → Run `npm install` then `npm run dev`
- **Need to deploy?** → Check the [deployment section](#how-can-i-deploy-this-project)

## How can I edit this code?

There are several ways of editing your application.

### 🔄 Transfer from Replit to GitHub

If you've been developing in Replit and want to update this GitHub repository, see our comprehensive **[Replit to GitHub Transfer Guide](./REPLIT_TO_GITHUB_GUIDE.md)** for step-by-step instructions.

### 💻 Development Options

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/99ce33f8-8800-4ec2-8b63-49c8b3732976) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/kindaiau/more-civil.git

# Step 2: Navigate to the project directory.
cd more-civil

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

### 🧪 Testing Your Changes

After making changes, always test:

```sh
npm run lint    # Check code quality
npm run build   # Test production build
npm run dev     # Start development server
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## GitHub Workflows

This project includes GitHub Actions workflows for CI/CD:

### CI Workflow (`.github/workflows/ci.yml`)
- Runs on push and pull requests to `main` and `develop` branches
- Installs dependencies, runs linting, and builds the project
- Requires the following secrets to be configured in your GitHub repository:
  - `VITE_SUPABASE_PROJECT_ID`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
  - `VITE_SUPABASE_URL`
  - `OPENAI_API_KEY` (for AI-powered features)

### Deploy Workflow (`.github/workflows/deploy.yml`)
- Runs on push to `main` branch
- Builds the project with production environment variables
- Ready for deployment configuration

### Setting up GitHub Secrets

To configure the required secrets:

1. Navigate to your GitHub repository
2. Go to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `VITE_SUPABASE_PROJECT_ID`: Your Supabase project ID
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key
   - `VITE_SUPABASE_URL`: Your Supabase URL
   - `OPENAI_API_KEY`: Your OpenAI API key for AI features

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/99ce33f8-8800-4ec2-8b63-49c8b3732976) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Google Reviews

The homepage displays recent Google reviews. To enable this feature:

1. Create a Google Places API key and add it as `GOOGLE_PLACES_API_KEY` in your repository secrets and runtime environment (server-side only).
2. Add your business Place ID as `GOOGLE_PLACE_ID`.
