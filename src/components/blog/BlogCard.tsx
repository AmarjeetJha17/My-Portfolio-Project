import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        'group card card-hover overflow-hidden',
        featured && 'md:col-span-2 md:flex md:gap-6',
        className
      )}
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'relative block shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800',
          featured ? 'md:w-1/2' : '',
          'aspect-video'
        )}
      >
        <Image
          src={post.coverImage}
          alt={`Cover image for ${post.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className={cn('flex flex-col', featured ? 'justify-center p-0 md:w-1/2' : 'mt-4')}>
        {/* Category & Meta */}
        <div className="mb-2 flex items-center gap-3">
          <span className="badge badge-primary capitalize">{post.category}</span>
          <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            <Clock className="h-3 w-3" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className={cn('font-semibold text-neutral-900 dark:text-white', featured ? 'text-2xl' : 'text-xl')}>
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-2 text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
