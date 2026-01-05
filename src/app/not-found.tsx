'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="mb-8 text-9xl font-bold text-primary-600 dark:text-primary-400">404</div>

      <h1 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
        Page Not Found
      </h1>

      <p className="mb-8 max-w-md text-neutral-600 dark:text-neutral-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
        deleted, or never existed.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Go Home
        </Link>
        <button onClick={() => window.history.back()} className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </div>

      {/* Decorative elements */}
      <div className="mt-16 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/projects" className="hover:text-primary-600 dark:hover:text-primary-400">
          Projects
        </Link>
        <span>•</span>
        <Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400">
          Blog
        </Link>
        <span>•</span>
        <Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400">
          Contact
        </Link>
      </div>
    </div>
  );
}
