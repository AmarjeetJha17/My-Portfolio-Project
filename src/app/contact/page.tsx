import { Metadata } from 'next';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { generateSEO } from '@/components/seo';
import { Section, SectionHeader } from '@/components/ui';
import { ContactForm } from '@/components/contact';
import { author } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Contact',
  description:
    "Get in touch with Amarjit for project inquiries, collaboration opportunities, or just to say hello. I'm always open to discussing new projects.",
  url: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20">
        <div className="container-custom py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. Fill
              out the form below or reach out directly via email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <SectionHeader
              title="Let's Connect"
              subtitle="I'm always open to discussing new projects and opportunities"
            />

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Email</h3>
                  <a
                    href={`mailto:${author.social.email}`}
                    className="mt-1 text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                  >
                    {author.social.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Location</h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    Pune, IN (Remote Available)
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Availability</h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    Mon - Fri, 10:00 AM - 10:00 PM PST
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Response Time</h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    Usually within 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <h3 className="font-medium text-neutral-900 dark:text-white">Connect on Social</h3>
              <div className="mt-4 flex gap-4">
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Send a Message
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm className="mt-6" />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about working with me"
          centered
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              q: 'What types of projects do you work on?',
              a: "I specialize in full-stack web development, including React/Next.js applications, REST APIs, and e-commerce solutions. I'm open to various project types.",
            },
            {
              q: 'What is your typical project timeline?',
              a: 'Timelines vary based on project scope. A simple website might take 2-4 weeks, while complex applications can take 2-3 months or more.',
            },
            {
              q: 'Do you work with clients remotely?',
              a: "Yes! I work with clients worldwide. I'm comfortable with async communication and video calls across different time zones.",
            },
            {
              q: 'What is your pricing structure?',
              a: 'I offer both fixed-price and hourly rate options depending on the project. Contact me for a detailed quote based on your requirements.',
            },
          ].map((faq, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold text-neutral-900 dark:text-white">{faq.q}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
