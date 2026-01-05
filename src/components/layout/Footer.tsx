import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { navigation, author, siteMetadata } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      {/* Back to top button */}
      <div className="container-custom">
        <div className="-mt-6 flex justify-center">
          <a
            href="#top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          </a>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white">
                A
              </span>
              Amarjit
            </Link>
            <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
              {author.bio.split('.')[0]}.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {author.social.github && (
                <a
                  href={author.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary-600 dark:hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary-600 dark:hover:text-white"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary-600 dark:hover:text-white"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {author.social.email && (
                <a
                  href={`mailto:${author.social.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary-600 dark:hover:text-white"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${author.social.email}`}
                  className="text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                >
                  {author.social.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Send a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} {siteMetadata.siteName}. Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label="love" />
            by Amarjit
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-primary-600 dark:hover:text-primary-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
