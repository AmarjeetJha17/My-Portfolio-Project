import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { generateSEO, generateProjectSchema } from '@/components/seo';
import { Section } from '@/components/ui';
import { featuredProjects } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    return generateSEO({ title: 'Project Not Found' });
  }

  return generateSEO({
    title: project.title,
    description: project.description,
    image: project.image,
    url: `/projects/${project.slug}`,
    keywords: project.tags,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema({
    title: project.title,
    description: project.description,
    image: project.image,
    slug: project.slug,
    technologies: project.tags,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Back Link */}
      <div className="container-custom pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <Section className="pb-8 pt-8">
        <div className="mx-auto max-w-4xl">
          {/* Category Badge */}
          <span className="badge badge-primary mb-4 capitalize">{project.category}</span>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(project.createdAt)}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {project.tags.length} technologies
            </span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="h-4 w-4" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </Section>

      {/* Project Image */}
      <Section className="py-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section className="pt-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                About the Project
              </h2>
              <div className="prose-custom mt-4">
                <p>{project.longDescription || project.description}</p>
              </div>

              {/* Features */}
              <h3 className="mt-8 text-xl font-bold text-neutral-900 dark:text-white">
                Key Features
              </h3>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Responsive design that works on all devices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Optimized performance with lazy loading
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Accessible and follows WCAG guidelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Clean, maintainable codebase
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="card">
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="card">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Links</h3>
                <div className="mt-4 space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
