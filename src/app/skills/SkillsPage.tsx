'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import portfolioData from '@/data/portfolio.json';

function SkillBar({ name, proficiency, delay }: { name: string; proficiency: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm text-text-primary font-medium">{name}</span>
        <span className="text-xs text-text-muted font-mono">{proficiency}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: isInView ? `${proficiency}%` : '0%' }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const { skills } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="skills" subtitle="technologies & proficiency levels" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((category, catIdx) => (
            <GlassCard key={category.name} delay={catIdx * 0.1} className="p-6 md:p-8">
              <h3 className="text-base font-bold text-accent-purple font-mono mb-6">
                {category.name}
              </h3>
              {category.items.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  delay={catIdx * 0.1 + skillIdx * 0.05}
                />
              ))}
            </GlassCard>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
