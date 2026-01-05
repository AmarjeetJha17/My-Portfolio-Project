import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { Section, SectionHeader, SkillBar } from '@/components/ui';
import { ProjectCard } from '@/components/projects';
import { author, featuredProjects, skills, experiences } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export default function HomePage() {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          aria-hidden="true"
        />

        <div className="container-custom py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="animate-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Available for freelance work
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="animate-in animate-delay-100 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text animate-gradient bg-[length:200%_auto]">Amarjit</span>
              <br />
              <span className="mt-2 block">Full Stack Developer</span>
            </h1>

            {/* Description */}
            <p className="animate-in animate-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg md:text-xl">
              {author.bio}
            </p>

            {/* CTA Buttons - Stack on mobile, row on larger screens */}
            <div className="animate-in animate-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Get in Touch
              </Link>
              <Link href="/projects" className="btn-secondary w-full text-base sm:w-auto">
                View My Work
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href="/resume.pdf" download className="btn-ghost w-full text-base sm:w-auto">
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Stats - 2x2 grid on mobile, single row on larger */}
            <div
              className="animate-in animate-delay-400 mt-12 grid grid-cols-2 gap-6 sm:mt-16 sm:grid-cols-4 sm:gap-8"
              role="list"
              aria-label="Key statistics"
            >
              {[
                { label: 'Projects Built', value: '6+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Currently', value: 'MCA' },
                { label: 'Focus Area', value: 'Full Stack' },
              ].map((stat) => (
                <div key={stat.label} className="text-center" role="listitem">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section
        id="about"
        className="bg-neutral-50 dark:bg-neutral-900/50"
        aria-labelledby="about-heading"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Image */}
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:mx-0 lg:max-w-md">
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500 to-accent-500 opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
              <Image
                src={author.avatar}
                alt="Amarjit - Full Stack Developer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 400px"
                priority
              />
            </div>
            {/* Floating elements - hidden on mobile for cleaner look */}
            <div
              className="absolute -right-4 -top-4 hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 sm:block"
              aria-hidden="true"
            >
              <Code2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 sm:block"
              aria-hidden="true"
            >
              <Briefcase className="h-8 w-8 text-accent-600 dark:text-accent-400" />
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              title="About Me"
              subtitle="Passionate about creating exceptional digital experiences"
            />
            <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
              <p>
                I&apos;m a Full Stack Developer and MCA student based in Pune, specializing in
                building secure, scalable web applications. I bridge the gap between robust backend
                logic and beautiful, accessible user interfaces.
              </p>
              <p>
                With a background in Cyber Security and hands-on experience across the .NET and MERN
                stacks, I create applications that solve real-world problems. I specialize in
                ASP.NET Core, React, Next.js, and Node.js.
              </p>
              <p>
                I&apos;m passionate about clean code, best practices, and continuous learning. When
                I&apos;m not coding, I explore new technologies and contribute to open source
                projects.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900 dark:text-white">Frontend</h4>
                {frontendSkills.slice(0, 3).map((skill) => (
                  <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900 dark:text-white">Backend</h4>
                {backendSkills.slice(0, 3).map((skill) => (
                  <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </div>

            <Link
              href="/resume"
              className="mt-8 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              View full resume
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" aria-labelledby="projects-heading">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and personal projects"
          centered
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link href="/projects" className="btn-primary">
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-neutral-50 dark:bg-neutral-900/50">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and career highlights"
          centered
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 h-4 w-4 rounded-full border-4 border-primary-600 bg-white dark:border-primary-400 dark:bg-neutral-950 ${
                  index % 2 === 0
                    ? 'left-[-7px] md:left-auto md:right-[-8px]'
                    : 'left-[-7px] md:left-[-8px]'
                }`}
              />

              <div className="card">
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <Briefcase className="h-4 w-4" />
                  <span>
                    {formatDate(exp.startDate, { year: 'numeric', month: 'short' })} -{' '}
                    {exp.current
                      ? 'Present'
                      : formatDate(exp.endDate!, { year: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="badge badge-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/resume" className="btn-secondary">
            <GraduationCap className="h-4 w-4" />
            View Full Resume
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-primary-950">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Let&apos;s create something amazing together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
              <Mail className="h-5 w-5" />
              Start a Conversation
            </Link>
            <a
              href={`mailto:${author.social.email}`}
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              {author.social.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
