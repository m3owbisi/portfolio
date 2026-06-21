'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="experience" subtitle="professional journey so far" />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/40 via-accent-teal/20 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-12 md:w-[calc(50%-32px)] ${
                i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              } pl-16 md:pl-0`}
            >
              {/* timeline dot */}
              <div className={`absolute top-6 w-3 h-3 rounded-full bg-accent-purple ring-4 ring-surface-base left-[18px] md:left-auto ${
                i % 2 === 0 ? 'md:right-[-38px]' : 'md:left-[-38px]'
              }`} />

              <div className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent-purple/10 shrink-0">
                    <Briefcase size={18} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-sm text-accent-teal font-mono">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-accent-purple" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-accent-teal" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-sm text-text-secondary mb-4">{exp.summary}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-text-muted">
                      <ChevronRight size={12} className="text-accent-purple mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
