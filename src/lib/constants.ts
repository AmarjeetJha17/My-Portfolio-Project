import type { SiteMetadata, NavItem, Author, Project, Experience, Education, Skill } from '@/types';

export const siteMetadata: SiteMetadata = {
  title: 'Amarjit Jha | Full Stack Developer',
  description:
    'Personal portfolio of Amarjit - a passionate full stack developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, read my blog, and get in touch.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://amarjit.dev',
  siteName: 'Amarjit Portfolio',
  locale: 'en_US',
  type: 'website',
  twitterHandle: '@Amarjeet8586028',
  ogImage: '/images/og-image.png',
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const author: Author = {
  id: '1',
  name: 'Amarjit Jha',
  avatar: '/images/Amarjit.png',
  bio: "I'm Amarjit Jha, a Full Stack Developer and MCA student based in Pune. I bridge the gap between robust backend logic and beautiful, accessible user interfaces. With a background in Cyber Security and hands-on experience across the .NET and MERN stacks, I build secure, scalable web applications that solve real-world problems.",
  social: {
    github: 'https://github.com/AmarjeetJha17',
    linkedin: 'https://linkedin.com/in/amarjit-jha-556656280',
    twitter: 'https://x.com/Amarjeet8586028',
    email: 'amarjeetjha04@gmail.com',
    website: 'https://amarjit.dev',
  },
};

export const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'IT Online - Full-Service IT Website',
    slug: 'it-online',
    description:
      'Full-service IT website built with ASP.NET Core MVC and SQL Server, integrating RazorPay for secure payments.',
    longDescription:
      'A comprehensive IT services platform built with ASP.NET Core MVC and SQL Server. Features include service catalog, secure payment integration with RazorPay, user authentication, order management, and admin dashboard for service management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['ASP.NET Core', 'MVC', 'SQL Server', 'RazorPay', 'C#', 'Bootstrap'],
    githubUrl: 'https://github.com/AmarjeetJha17/IT-Online',
    liveUrl: '',
    featured: true,
    category: 'fullstack',
    createdAt: '2024-08-01',
    updatedAt: '2024-10-15',
  },
  {
    id: '2',
    title: 'Drug Abuse Reporting System',
    slug: 'drug-abuse-reporting-system',
    description:
      'Community-driven platform enabling anonymous reporting of drug-related activities using ASP.NET Core MVC.',
    longDescription:
      'A community safety platform that enables anonymous reporting of drug-related activities. Built with ASP.NET Core MVC and SQL Server, featuring secure anonymous submission, report tracking, admin moderation dashboard, and data visualization for authorities.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    tags: ['ASP.NET Core', 'MVC', 'SQL Server', 'C#', 'Bootstrap', 'Entity Framework'],
    githubUrl: 'https://github.com/AmarjeetJha17/Drug-Abuse-Reporting',
    liveUrl: '',
    featured: true,
    category: 'fullstack',
    createdAt: '2024-05-01',
    updatedAt: '2024-08-20',
  },
  {
    id: '3',
    title: 'ReachCRM - Customer Relationship Management',
    slug: 'reach-crm',
    description:
      'Feature-rich CRM application using React, TypeScript, Tailwind CSS, Node.js, and PostgreSQL.',
    longDescription:
      'A modern CRM solution built with the MERN stack. Features contact management, lead tracking, sales pipeline visualization, email integration, task management, analytics dashboard, and team collaboration tools. Implements role-based access control and real-time updates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Express.js'],
    githubUrl: 'https://github.com/AmarjeetJha17/ReachCRM',
    liveUrl: '',
    featured: true,
    category: 'fullstack',
    createdAt: '2024-09-01',
    updatedAt: '2024-12-10',
  },
  {
    id: '4',
    title: 'Personal Portfolio Website',
    slug: 'personal-portfolio',
    description:
      'Modern developer portfolio with Next.js, React, TypeScript, Tailwind CSS, and Supabase for backend.',
    longDescription:
      'A responsive personal portfolio website showcasing projects, skills, and experience. Built with Next.js 14, TypeScript, and Tailwind CSS. Features include dark mode, SEO optimization, blog integration, contact form with Supabase backend, and smooth animations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/AmarjeetJha17/My-Portfolio-Project',
    liveUrl: 'https://amarjit.dev',
    featured: true,
    category: 'fullstack',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
  },
  {
    id: '5',
    title: 'Electronics Store - E-Commerce Platform',
    slug: 'electronics-store',
    description:
      'Responsive e-commerce website for electronics using HTML, CSS, JavaScript with shopping cart functionality.',
    longDescription:
      'A fully responsive e-commerce website for electronics products. Features product catalog with filtering and search, shopping cart with local storage persistence, product details pages, responsive design for all devices, and checkout flow simulation.',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'LocalStorage', 'Bootstrap'],
    githubUrl: 'https://github.com/AmarjeetJha17/Electronics-Store',
    liveUrl: '',
    featured: true,
    category: 'web',
    createdAt: '2024-03-01',
    updatedAt: '2024-06-15',
  },
  {
    id: '6',
    title: 'High-Performance Product Page',
    slug: 'high-performance-product-page',
    description:
      'Optimized product landing page with fast load times, SEO best practices, and modern UI/UX design.',
    longDescription:
      'A performance-optimized product landing page designed for maximum conversion. Implements lazy loading, image optimization, critical CSS inlining, and SEO best practices. Achieves 90+ Lighthouse scores across all metrics with smooth animations and accessible design.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Performance', 'SEO', 'Accessibility'],
    githubUrl: 'https://github.com/AmarjeetJha17/Product-Page',
    liveUrl: '',
    featured: true,
    category: 'web',
    createdAt: '2024-02-01',
    updatedAt: '2024-04-10',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance / Personal Projects',
    position: 'Full Stack Developer',
    location: 'Pune, India',
    startDate: '2024-01',
    current: true,
    description:
      'Building production-ready web applications using modern technologies including .NET, MERN stack, and cloud services while pursuing MCA.',
    achievements: [
      'Developed IT Online - a full-service IT website with ASP.NET Core MVC and RazorPay integration',
      'Built Drug Abuse Reporting System enabling anonymous community reporting for authorities',
      'Created ReachCRM - a comprehensive CRM solution with React, TypeScript, and PostgreSQL',
      'Implemented secure authentication, payment gateways, and database optimization across projects',
    ],
    technologies: [
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'SQL Server',
      'Tailwind CSS',
    ],
  },
  {
    id: '2',
    company: 'Academic Projects',
    position: 'MCA Student Developer',
    location: 'Pune, India',
    startDate: '2023-07',
    endDate: '2024-01',
    current: false,
    description:
      'Developed various academic and personal projects focusing on web development, database management, and software engineering principles.',
    achievements: [
      'Built responsive e-commerce websites with HTML, CSS, and JavaScript',
      'Implemented RESTful APIs and database designs for multiple applications',
      'Learned and applied Cyber Security principles in web application development',
      'Collaborated with peers on group projects using Git version control',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL', 'Git', 'Bootstrap'],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Ajeenkya D Y Patil University',
    degree: 'Master of Computer Applications',
    field: 'Data Science and Analytics',
    location: 'Pune, Maharashtra, India',
    startDate: '2025-08',
    endDate: '2027-08',
    gpa: '',
    achievements: [
      'Specialization in Full Stack Web Development',
      'Coursework in Advanced Database Systems, Software Engineering, and Cloud Computing',
      'Active participant in coding competitions and hackathons',
    ],
  },
  {
    id: '2',
    institution: 'St. Edmunds College, Shillong',
    degree: 'Bachelor of Computer Applications',
    field: 'Computer Applications',
    location: 'Shillong, Meghalaya, India',
    startDate: '2021-05',
    endDate: '2025-05',
    gpa: '',
    achievements: [
      'Foundation in Programming, Data Structures, and Algorithms',
      'Introduction to Cyber Security principles',
      'Completed projects in Java and Web Development',
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React.js', category: 'frontend', proficiency: 90 },
  { id: '2', name: 'Next.js', category: 'frontend', proficiency: 85 },
  { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 85 },
  { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 90 },
  { id: '5', name: 'HTML5/CSS3', category: 'frontend', proficiency: 95 },
  { id: '6', name: 'JavaScript', category: 'frontend', proficiency: 90 },
  { id: '7', name: 'Bootstrap', category: 'frontend', proficiency: 88 },

  // Backend
  { id: '8', name: 'ASP.NET Core', category: 'backend', proficiency: 88 },
  { id: '9', name: 'ASP.NET MVC', category: 'backend', proficiency: 85 },
  { id: '10', name: 'Node.js', category: 'backend', proficiency: 82 },
  { id: '11', name: 'Express.js', category: 'backend', proficiency: 80 },
  { id: '12', name: 'C#', category: 'backend', proficiency: 88 },
  { id: '13', name: 'Java', category: 'backend', proficiency: 75 },
  { id: '14', name: 'REST APIs', category: 'backend', proficiency: 90 },

  // Database
  { id: '15', name: 'SQL Server', category: 'database', proficiency: 88 },
  { id: '16', name: 'PostgreSQL', category: 'database', proficiency: 85 },
  { id: '17', name: 'MongoDB', category: 'database', proficiency: 80 },
  { id: '18', name: 'MySQL', category: 'database', proficiency: 82 },
  { id: '19', name: 'Supabase', category: 'database', proficiency: 78 },
  { id: '20', name: 'Entity Framework', category: 'database', proficiency: 85 },

  // DevOps & Tools
  { id: '21', name: 'Git', category: 'devops', proficiency: 90 },
  { id: '22', name: 'GitHub Actions', category: 'devops', proficiency: 75 },
  { id: '23', name: 'Vercel', category: 'devops', proficiency: 82 },
  { id: '24', name: 'Docker', category: 'devops', proficiency: 70 },

  // Testing
  { id: '25', name: 'Jest', category: 'tools', proficiency: 78 },
  { id: '26', name: 'Cypress', category: 'tools', proficiency: 72 },
  { id: '27', name: 'VS Code', category: 'tools', proficiency: 95 },
  { id: '28', name: 'Postman', category: 'tools', proficiency: 88 },
];
