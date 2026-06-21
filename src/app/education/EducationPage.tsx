'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function EducationPage() {
  const { education } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="education" subtitle="academic foundation" />

        <div className="education-timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="education-card glass-card p-8"
            >
              {/* accent line at top */}
              <div className="education-card-accent" />

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent-purple/10 shrink-0">
                  <GraduationCap size={24} className="text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                  <p className="text-sm text-text-secondary mt-1 flex items-center gap-2">
                    <MapPin size={14} className="text-accent-teal" />
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Calendar size={14} className="text-accent-purple" />
                  {edu.year}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy size={14} className="text-accent-amber" />
                  <span className="font-mono font-semibold text-accent-amber">{edu.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
