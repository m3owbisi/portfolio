'use client';

import Image from 'next/image';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Code2, Rocket, Shield, Database, Globe, Award } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const highlights = [
  { icon: Code2, label: 'projects deployed', value: '10+' },
  { icon: Rocket, label: 'cgpa', value: '7.80' },
  { icon: Shield, label: 'mitre att&ck techniques', value: '17' },
  { icon: Database, label: 'test layers', value: '5' },
  { icon: Globe, label: 'platforms deployed', value: '3' },
  { icon: Award, label: 'awards', value: '1' },
];

export default function AboutPage() {
  const { profile } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="about me" subtitle="who i am & what drives me" />

        <div className="bento-grid">
          {/* bio — large card spanning 3 columns */}
          <GlassCard className="bento-span-3 bento-row-2" delay={0.1}>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              {profile.bio}
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-text-secondary leading-relaxed text-sm">
                what sets me apart is range without sacrificing depth. i&apos;ve architected a real-time collaborative research platform with websocket integration and live analytics dashboards, automated build-to-deployment workflows with jenkins and docker, and built an award-winning ai cybersecurity platform validated against 17 mitre att&ck techniques. i also bring secondary expertise in data engineering — python, sql, power bi, and machine learning — giving me the ability to build data-driven features natively into the products i ship.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-text-muted text-sm font-mono">
                i graduated from mulund college of commerce (university of mumbai) with a 7.80 cgpa, and i follow clean architecture principles, agile practices, and test-driven development. i&apos;m currently focused on deepening my skills in data engineering, devops, and cloud infrastructure while actively looking for full-stack development, backend engineering, or software engineering roles.
              </p>
            </div>
          </GlassCard>

          {/* profile photo */}
          <GlassCard className="bento-row-2 flex flex-col items-center justify-center" delay={0.2}>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-4 ring-2 ring-accent-purple/20">
              <Image
                src="/images/profile/profile-photo.png"
                alt="hiral panchal"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">{profile.name}</h3>
            <p className="text-sm text-text-muted font-mono mt-1">{profile.role}</p>
            <p className="text-xs text-text-muted mt-2">
              📍 {profile.location}
            </p>
          </GlassCard>

          {/* quick stat cards */}
          {highlights.map((item, i) => (
            <GlassCard key={item.label} delay={0.1 + i * 0.05}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-purple/10">
                  <item.icon size={18} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-text-primary">{item.value}</p>
                  <p className="text-xs text-text-muted mt-1">{item.label}</p>
                </div>
              </div>
            </GlassCard>
          ))}

          {/* languages spoken */}
          <GlassCard className="bento-span-2" delay={0.4}>
            <h4 className="text-sm font-semibold text-text-secondary mb-3 font-mono">languages spoken</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.footer.languages.map((lang) => (
                <span key={lang.language} className="tech-pill">
                  {lang.language} · {lang.level}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* availability */}
          <GlassCard className="bento-span-2" delay={0.45}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-text-primary">{portfolioData.availability}</p>
                <p className="text-xs text-text-muted mt-1">ready to start contributing from day one</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageTransition>
  );
}
