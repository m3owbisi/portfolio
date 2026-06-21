'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import { ExternalLink, Github, Youtube, Award } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const featuredProjects = portfolioData.projects.filter((p) => p.highlight);

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader
          title="selected work"
          subtitle="outcome-led case studies — leading with the result"
        />

        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group"
            >
              {/* award badge */}
              {project.id === 'cybershield' && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-accent-amber/10 text-accent-amber border border-accent-amber/20 rounded-full px-3 py-1 text-xs font-mono font-semibold">
                  <Award size={14} />
                  award-winning
                </div>
              )}

              {/* project number */}
              <span className="font-mono text-6xl font-black text-surface-300 absolute -top-2 -left-1 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                {/* header */}
                <div className="mt-8 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent-teal font-mono">{project.subtitle}</p>
                </div>

                {/* role + year */}
                <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                  <span className="font-mono">role: {project.role}</span>
                  <span className="font-mono">year: {project.year}</span>
                </div>

                {/* description */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* links */}
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-5"
                    >
                      <ExternalLink size={14} />
                      live site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-5"
                    >
                      <Github size={14} />
                      github
                    </a>
                  )}
                  {('demo' in project) && project.demo && (
                    <a
                      href={project.demo as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-5"
                    >
                      <Youtube size={14} />
                      watch demo
                    </a>
                  )}
                </div>
              </div>

              {/* hover accent glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/[0.03] to-accent-teal/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
