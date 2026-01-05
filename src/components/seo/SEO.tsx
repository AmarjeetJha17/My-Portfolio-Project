import { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import { absoluteUrl } from '@/lib/utils';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedAt,
  updatedAt,
  author,
  keywords,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = image || siteMetadata.ogImage;
  const metaUrl = url || siteMetadata.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: siteMetadata.siteName,
    publisher: siteMetadata.siteName,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: absoluteUrl(metaImage),
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: siteMetadata.locale,
      type: type,
      ...(type === 'article' && {
        publishedTime: publishedAt,
        modifiedTime: updatedAt,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [absoluteUrl(metaImage)],
      creator: siteMetadata.twitterHandle,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}

// Structured data generators
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amarjit',
    url: siteMetadata.siteUrl,
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/amarjit',
      'https://linkedin.com/in/amarjit',
      'https://twitter.com/amarjit_dev',
    ],
    image: absoluteUrl('/images/avatar.jpg'),
    description: siteMetadata.description,
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.siteName,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    author: {
      '@type': 'Person',
      name: 'Amarjit',
    },
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Amarjit',
      url: siteMetadata.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Amarjit',
      url: siteMetadata.siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export function generateProjectSchema(project: {
  title: string;
  description: string;
  image: string;
  slug: string;
  technologies: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    author: {
      '@type': 'Person',
      name: 'Amarjit',
    },
    programmingLanguage: project.technologies,
    url: absoluteUrl(`/projects/${project.slug}`),
  };
}
