'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Trophy, Star, Rocket, CheckCircle2, Zap, Target } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const achievementIcons = [Trophy, Star, Rocket, CheckCircle2, Zap, Target];
const achievementColors = [
  'text-accent-amber',
  'text-accent-amber',
  'text-accent-purple',
  'text-accent-teal',
  'text-accent-purple',
  'text-accent-teal',
];

// achievement images
const achievementImages = [
  { src: '/images/achievements/best-cybersecurity-project.jpg', label: 'best cyber security project — cybershield' },
  { src: '/images/achievements/subject-topper-gst.jpeg', label: 'subject topper — advanced gst using tallyprime' },
  { src: '/images/achievements/subject-topper-devops.jpeg', label: 'subject topper — devops' },
  { src: '/images/achievements/techathon-2025-participation-01.jpeg', label: 'tech-a-thon 2025 participation' },
  { src: '/images/achievements/techathon-2025-participation-02.jpeg', label: 'tech-a-thon 2025 certificate' },
];

export default function AchievementsPage() {
  const { achievements } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="achievements" subtitle="milestones & recognitions" />

        {/* achievement cards */}
        <div className="bento-grid mb-12">
          {achievements.map((achievement, i) => {
            const Icon = achievementIcons[i] || Star;
            return (
              <GlassCard
                key={achievement}
                delay={i * 0.08}
                className={`p-5 ${i === 0 ? 'bento-span-2' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${i === 0 ? 'bg-[rgba(245,158,11,0.15)]' : 'bg-accent-purple/10'} shrink-0`}>
                    <Icon size={18} className={achievementColors[i]} />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{achievement}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* achievement gallery */}
        <h3 className="text-lg font-bold text-text-primary mb-6 font-mono terminal-prefix">gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-text-muted">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
