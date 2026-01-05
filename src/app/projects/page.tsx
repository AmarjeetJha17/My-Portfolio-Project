import { Metadata } from 'next';
import { generateSEO } from '@/components/seo';
import { Section, SectionHeader } from '@/components/ui';
import { ProjectCard } from '@/components/projects';
import { featuredProjects } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Projects',
  description:
    "Explore Amarjit's portfolio of web development projects including full-stack applications, e-commerce platforms, and more.",
  url: '/projects',
});

export default function ProjectsPage() {
  const allProjects = featuredProjects;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20">
        <div className="container-custom py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              My Projects
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              A collection of projects I&apos;ve worked on, from personal experiments to production
              applications. Each project represents a unique challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <SectionHeader
          title="Featured Work"
          subtitle="Showcasing my best and most recent projects"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </Section>

      {/* Categories Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <SectionHeader
          title="Project Categories"
          subtitle="Browse projects by type"
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Full Stack', count: 3, icon: '🚀' },
            { name: 'Frontend', count: 2, icon: '🎨' },
            { name: 'Backend', count: 2, icon: '⚙️' },
            { name: 'Mobile', count: 1, icon: '📱' },
          ].map((category) => (
            <div
              key={category.name}
              className="card text-center transition-all hover:-translate-y-1 hover:border-primary-500/50"
            >
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {category.count} projects
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="card mx-auto max-w-2xl bg-primary-50 text-center dark:bg-primary-950/30">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            I&apos;m always excited to work on new and challenging projects. Let&apos;s discuss how I can
            help bring your ideas to life.
          </p>
          <a href="/contact" className="btn-primary mt-6">
            Start a Project
          </a>
        </div>
      </Section>
    </>
  );
}
