// Project type definition
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  createdAt: string;
  updatedAt: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'fullstack' | 'other';

// Blog post type definition
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  tags: string[];
  category: BlogCategory;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  featured: boolean;
}

export type BlogCategory = 'tutorial' | 'career' | 'technology' | 'opinion' | 'case-study';

// Author type definition
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  social: SocialLinks;
}

// Social links type definition
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Contact submission type (stored in database)
export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: string;
  read: boolean;
}

// Resume/Experience type definitions
export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  icon?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft-skills';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// Site metadata type
export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  twitterHandle?: string;
  ogImage: string;
}

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

// Theme type
export type Theme = 'light' | 'dark' | 'system';

// API response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasMore: boolean;
  };
}

// Form state types
export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}
