import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  featured = false,
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'card card-hover group overflow-hidden',
        featured && 'md:col-span-2 md:grid md:grid-cols-2 md:gap-6',
        className
      )}
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          'relative block overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800',
          featured ? 'aspect-[4/3]' : 'aspect-video'
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured
              ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'
          }
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className={cn('flex flex-col', featured ? 'justify-center p-0' : 'mt-4')}>
        {/* Category Badge */}
        <div className="mb-2">
          <span className="badge badge-primary capitalize">{project.category}</span>
        </div>

        {/* Title */}
        <h3
          id={`project-title-${project.slug}`}
          className="text-lg font-semibold text-neutral-900 dark:text-white sm:text-xl"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
          >
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-[44px] items-center gap-1 rounded-lg px-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 hover:text-primary-700 dark:text-primary-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-300"
          >
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
