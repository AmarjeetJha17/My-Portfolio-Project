import { Metadata } from 'next';
import { generateSEO } from '@/components/seo';
import { Section, SectionHeader } from '@/components/ui';
import { BlogCard } from '@/components/blog';
import type { BlogPost } from '@/types';

export const metadata: Metadata = generateSEO({
  title: 'Blog',
  description:
    'Read technical articles, tutorials, and thoughts on web development, programming, and technology by Amarjit.',
  url: '/blog',
});

// Sample blog posts (in production, fetch from Supabase)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern Portfolio with Next.js 14 and Tailwind CSS',
    slug: 'building-modern-portfolio-nextjs-tailwind',
    excerpt:
      'A comprehensive guide to creating a professional portfolio website using the latest web technologies.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    author: {
      id: '1',
      name: 'Amarjit',
      avatar: '/images/Amarjit.png',
      bio: '',
      social: {},
    },
    tags: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    category: 'tutorial',
    publishedAt: '2024-03-15',
    updatedAt: '2024-03-15',
    readingTime: 8,
    featured: true,
  },
  {
    id: '2',
    title: 'TypeScript Best Practices for Clean Code',
    slug: 'typescript-best-practices-clean-code',
    excerpt:
      'Learn how to write maintainable TypeScript code with these essential best practices and patterns.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    author: {
      id: '1',
      name: 'Amarjit',
      avatar: '/images/Amarjit.png',
      bio: '',
      social: {},
    },
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    category: 'tutorial',
    publishedAt: '2024-02-20',
    updatedAt: '2024-02-20',
    readingTime: 6,
    featured: false,
  },
  {
    id: '3',
    title: 'From Junior to Senior Developer: Lessons Learned',
    slug: 'junior-to-senior-developer-lessons',
    excerpt:
      'Reflecting on my journey from a junior developer to a senior role, sharing key insights and advice.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    author: {
      id: '1',
      name: 'Amarjit',
      avatar: '/images/Amarjit.png',
      bio: '',
      social: {},
    },
    tags: ['Career', 'Growth', 'Advice'],
    category: 'career',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    readingTime: 10,
    featured: true,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20">
        <div className="container-custom py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Thoughts, tutorials, and insights on web development, programming, and technology. I
              write about things I learn and experiences I want to share.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section>
          <SectionHeader
            title="Featured Posts"
            subtitle="Handpicked articles I think you'll enjoy"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        </Section>
      )}

      {/* All Posts */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <SectionHeader title="Recent Articles" subtitle="The latest from the blog" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section>
        <SectionHeader
          title="Browse by Category"
          subtitle="Find articles that interest you"
          centered
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Tutorials', slug: 'tutorial', count: 5 },
            { name: 'Career', slug: 'career', count: 3 },
            { name: 'Technology', slug: 'technology', count: 4 },
            { name: 'Case Studies', slug: 'case-study', count: 2 },
          ].map((category) => (
            <a
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="card text-center transition-all hover:-translate-y-1 hover:border-primary-500/50"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-white">{category.name}</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {category.count} articles
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-primary-600 dark:bg-primary-950">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Subscribe to my newsletter</h2>
          <p className="mt-3 text-primary-100">
            Get notified when I publish new articles. No spam, unsubscribe anytime.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input max-w-xs bg-white"
              required
            />
            <button type="submit" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
