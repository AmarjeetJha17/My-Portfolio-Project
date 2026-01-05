# Amarjit Portfolio

A modern, production-ready personal portfolio website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.


## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), React 18, TypeScript 5, Tailwind CSS 3.4
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Dark Mode**: System-aware dark/light theme with manual toggle
- **SEO Optimized**: Meta tags, Open Graph, sitemap.xml, robots.txt, and structured data (JSON-LD)
- **Accessibility**: WCAG compliant with proper ARIA labels, focus management, and skip links
- **Performance**: Optimized images, code splitting, and minimal bundle size
- **Contact Form**: Server-side validation with Zod, rate limiting, and Supabase integration
- **Blog Ready**: Static generation with ISR support and category filtering
- **Projects Showcase**: Dynamic project pages with detailed case studies
- **Resume Page**: Professional experience, education, and skills display
- **CI/CD**: GitHub Actions workflow with lint, test, build, and deploy stages

## 🛠️ Tech Stack

| Category   | Technologies                    |
| ---------- | ------------------------------- |
| Framework  | Next.js 14.1.0                  |
| Language   | TypeScript 5                    |
| Styling    | Tailwind CSS 3.4, CSS Variables |
| Database   | Supabase (PostgreSQL)           |
| Forms      | React Hook Form, Zod            |
| Icons      | Lucide React                    |
| Testing    | Jest, React Testing Library     |
| Linting    | ESLint, Prettier                |
| Deployment | Vercel                          |

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm
- A Supabase account (optional - for contact form database)
- A Vercel account (for deployment)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amarjit/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase (optional - contact form works without it in dev mode)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── public/
│   ├── icons/              # App icons
│   ├── images/             # Static images
│   ├── icon.svg            # Favicon
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine rules
│   └── sitemap.xml         # Generated sitemap
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── api/contact/    # Contact form API route
│   │   ├── blog/           # Blog listing page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects list & detail pages
│   │   ├── resume/         # Resume/CV page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── not-found.tsx   # 404 page
│   ├── components/
│   │   ├── blog/           # BlogCard
│   │   ├── contact/        # ContactForm
│   │   ├── layout/         # Header, Footer
│   │   ├── projects/       # ProjectCard
│   │   ├── seo/            # SEO utilities & JSON-LD
│   │   └── ui/             # Button, Section, SkillBar
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & constants
│   ├── styles/             # Global CSS
│   └── types/              # TypeScript definitions
├── supabase/
│   └── migrations/         # Database SQL migrations
├── jest.config.js          # Jest configuration
├── jest.setup.ts           # Test setup file
├── next.config.mjs         # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📊 Build Output

```
Route (app)                    Size     First Load JS
┌ ○ /                          194 B    95.9 kB
├ ○ /blog                      194 B    95.9 kB
├ ○ /contact                   24.2 kB  116 kB
├ ○ /projects                  194 B    95.9 kB
├ ● /projects/[slug]           194 B    95.9 kB
└ ○ /resume                    175 B    91 kB

○ Static   ● SSG   λ Dynamic
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
# Build the application
pnpm build

# The output is in the .next folder
# Deploy using your preferred hosting service
```

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate provisioning

## 📊 Database Setup (Supabase)

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and API keys

### 2. Run Migrations

Execute the SQL files in `supabase/migrations/` in order:

```sql
-- Run in Supabase SQL Editor
-- 1. 001_create_contacts_table.sql
-- 2. 002_create_projects_table.sql
-- 3. 003_create_blog_posts_table.sql
```

### 3. Configure RLS Policies

The migrations include Row Level Security policies. Review and adjust based on your needs.

## 🎨 Customization

### Updating Content

Edit the constants in `src/lib/constants.ts`:

- `siteMetadata` - Site title, description, URLs
- `author` - Your name, bio, social links
- `featuredProjects` - Your projects
- `experiences` - Work history
- `education` - Education background
- `skills` - Technical skills

### Styling

- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

### Adding Pages

Create new pages in `src/app/` following the Next.js App Router conventions.

## 📝 Available Scripts

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `npm run dev`           | Start development server      |
| `npm run build`         | Create production build       |
| `npm start`             | Start production server       |
| `npm run lint`          | Run ESLint                    |
| `npm run lint:fix`      | Fix ESLint issues             |
| `npm run type-check`    | Run TypeScript compiler check |
| `npm test`              | Run Jest tests                |
| `npm run test:watch`    | Run tests in watch mode       |
| `npm run test:coverage` | Generate test coverage report |
| `npm run format`        | Format code with Prettier     |

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) first.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Vercel](https://vercel.com/) - Platform for frontend frameworks
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [React Hook Form](https://react-hook-form.com/) - Performant form library
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## 📧 Contact

**Amarjit Jha** - Full Stack Developer

- 📧 Email: [amarjeetjha04@gmail.com](mailto:amarjeetjha04@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/amarjit-jha-556656280](https://linkedin.com/in/amarjit-jha-556656280)
- 🐙 GitHub: [github.com/AmarjeetJha17](https://github.com/AmarjeetJha17)
- 🐦 X (Twitter): [@Amarjeet8586028](https://x.com/Amarjeet8586028)

---

<p align="center">Built with ❤️ using Next.js and Tailwind CSS</p>
