import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  personalInfo,
  skills,
  projects,
  education,
  certifications,
} from './data/resume.data';

const Button = ({
  children,
  href,
  primary = false,
}: {
  children: ReactNode;
  href: string;
  primary?: boolean;
}) => {
  const isExternal = !href.startsWith('#') && !href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : 'noopener'}
      className={`inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
        primary
          ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-400'
          : 'border border-white/15 text-stone-200 hover:border-pink-400'
      }`}
    >
      {children}
    </a>
  );
};

const Section = ({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: ReactNode;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="border-t border-white/10 px-6 py-14 sm:px-10 lg:px-16"
  >
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
        {number} / {id}
      </p>

      <h2 className="mb-8 text-4xl font-bold tracking-[-0.06em] text-stone-200 sm:text-5xl">
        {title}
      </h2>

      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-stone-200">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b0b]/90 px-6 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
          <div className="font-mono text-lg font-extrabold tracking-[-0.05em] text-white">
            <span className="text-pink-400">sidra_rahman</span>
          </div>

          <div className="hidden gap-6 text-sm text-stone-400 md:flex">
            {['summary', 'education', 'projects', 'skills', 'certifications'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="px-6 pb-6 pt-10 sm:px-10 lg:px-16 lg:pb-8 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mt-2 flex flex-wrap gap-3">
              <Button href="#projects" primary>
                View Projects
              </Button>
              <Button href={personalInfo.github}>GitHub</Button>
              <Button href={personalInfo.linkedin}>LinkedIn</Button>
            </div>
          </motion.div>
        </div>
      </header>

      <Section
        id="summary"
        number="01"
        title={
          <>
            Professional Summary<span className="text-pink-400">.</span>
          </>
        }
      >
        <p className="max-w-4xl text-lg leading-8 text-stone-400">
          {personalInfo.summary}
        </p>
      </Section>

      <Section
        id="education"
        number="02"
        title={
          <>
            Education<span className="text-pink-400">.</span>
          </>
        }
      >
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.credential}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-stone-100">{item.institution}</h3>
                  <p className="mt-2 text-stone-400">{item.credential}</p>
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
                  {item.year}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
                <span>{item.location}</span>
                <span>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        number="03"
        title={
          <>
            Projects<span className="text-pink-400">.</span>
          </>
        }
      >
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-stone-100">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">{project.subtitle}</p>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-200 hover:border-pink-400"
                  >
                    [Repo]
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm text-stone-400">
                {project.technologies.join(', ')}
              </p>

              <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-stone-400">
                {project.features.map((feature) => (
                  <li key={feature} className="list-disc">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        number="04"
        title={
          <>
            Technical Skills<span className="text-pink-400">.</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="mb-2 text-lg font-semibold text-stone-100">{skill.category}</h3>
              <p className="text-sm leading-6 text-stone-400">{skill.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="certifications"
        number="05"
        title={
          <>
            Certifications<span className="text-pink-400">.</span>
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          {certifications.map((item) => (
            <span
              key={item}
              className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-sm text-stone-200"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-7 text-xs text-stone-600 sm:px-10">
        <div className="mx-auto max-w-6xl">
          © 2026 {personalInfo.name}
        </div>
      </footer>
    </div>
  );
}

export default App;