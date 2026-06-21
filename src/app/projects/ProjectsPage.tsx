'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

type FilterCategory = 'all' | 'full-stack' | 'frontend' | 'data' | 'devops';

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'all', value: 'all' },
  { label: 'full-stack', value: 'full-stack' },
  { label: 'frontend', value: 'frontend' },
  { label: 'data', value: 'data' },
  { label: 'devops', value: 'devops' },
];

function getCategory(project: typeof portfolioData.projects[0]): FilterCategory[] {
  const stack = project.stack.join(' ').toLowerCase();
  const categories: FilterCategory[] = [];

  if (stack.includes('next') || stack.includes('full-stack') || stack.includes('django') || stack.includes('database'))
    categories.push('full-stack');
  if (stack.includes('html') || stack.includes('css') || stack.includes('javascript') && !stack.includes('full-stack'))
    categories.push('frontend');
  if (stack.includes('python') || stack.includes('pandas') || stack.includes('excel') || stack.includes('scikit'))
    categories.push('data');
  if (stack.includes('jenkins') || stack.includes('docker') || stack.includes('bash'))
    categories.push('devops');
  if (stack.includes('ai') || stack.includes('linux') || stack.includes('osint'))
    categories.push('devops');

  return categories.length > 0 ? categories : ['frontend'];
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const { projects } = portfolioData;

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => getCategory(p).includes(activeFilter));

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader
          title="all projects"
          subtitle={`${projects.length} projects across multiple domains`}
        />

        {/* filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-accent-purple text-white'
                  : 'bg-surface-200 text-text-muted hover:text-text-primary hover:bg-surface-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* project grid */}
        <div className="bento-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="glass-card p-5 flex flex-col"
              >
                {/* title */}
                <h3 className="text-base font-bold text-text-primary mb-1">{project.title}</h3>
                <p className="text-xs text-accent-teal font-mono mb-3">{project.subtitle}</p>

                {/* description */}
                <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-pill text-[10px] py-0.5 px-2">{tech}</span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="tech-pill text-[10px] py-0.5 px-2">+{project.stack.length - 3}</span>
                  )}
                </div>

                {/* links */}
                <div className="flex gap-2 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent-purple hover:text-accent-purple-light transition-colors"
                    >
                      <ExternalLink size={12} /> live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary transition-colors"
                    >
                      <Github size={12} /> code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}
