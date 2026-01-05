import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail, ExternalLink, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { generateSEO } from '@/components/seo';
import { Section, SectionHeader, SkillBar } from '@/components/ui';
import { author, experiences, education, skills } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = generateSEO({
  title: 'Resume',
  description:
    "View Amarjit's professional resume, including work experience, education, skills, and certifications.",
  url: '/resume',
});

export default function ResumePage() {
  const skillCategories = [
    { name: 'Frontend', key: 'frontend' as const },
    { name: 'Backend', key: 'backend' as const },
    { name: 'Database', key: 'database' as const },
    { name: 'DevOps', key: 'devops' as const },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20">
        <div className="container-custom py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Resume
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              A comprehensive overview of my professional experience, education, and technical
              skills.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/resume.pdf" download className="btn-primary">
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <Link href="/contact" className="btn-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section>
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and career highlights"
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {formatDate(exp.startDate, { year: 'numeric', month: 'short' })} -{' '}
                  {exp.current
                    ? 'Present'
                    : formatDate(exp.endDate!, { year: 'numeric', month: 'short' })}
                </div>
              </div>

              <p className="mt-4 text-neutral-600 dark:text-neutral-400">{exp.description}</p>

              {/* Achievements */}
              <div className="mt-4">
                <h4 className="font-medium text-neutral-900 dark:text-white">Key Achievements:</h4>
                <ul className="mt-2 space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600 dark:bg-primary-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge badge-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
          centered
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.key);
            return (
              <div key={category.key} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="mt-4 space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Education Section */}
      <Section>
        <SectionHeader title="Education" subtitle="Academic background and qualifications" />

        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {edu.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {formatDate(edu.startDate, { year: 'numeric' })} -{' '}
                    {formatDate(edu.endDate, { year: 'numeric' })}
                  </span>
                  {edu.gpa && (
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="font-medium text-neutral-900 dark:text-white">Achievements:</h4>
                  <ul className="mt-2 space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400"
                      >
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-primary-950">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-primary-100">
            I&apos;m always looking for new opportunities and challenges. Let&apos;s discuss how my
            skills and experience can contribute to your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Link>
            <a
              href={author.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" />
              View LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
