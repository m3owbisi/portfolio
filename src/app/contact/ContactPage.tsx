'use client';

import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import {
  Mail, Phone, Linkedin, Github, Instagram,
  MapPin, Download, MessageSquare
} from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const contactCards = [
  {
    icon: Mail,
    label: 'email (primary)',
    value: 'hp0505157@gmail.com',
    href: 'mailto:hp0505157@gmail.com',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  },
  {
    icon: Mail,
    label: 'email (secondary)',
    value: 'hhp57@outlook.com',
    href: 'mailto:hhp57@outlook.com',
    color: 'text-accent-teal',
    bg: 'bg-accent-teal/10',
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+91 7304206771',
    href: 'tel:+917304206771',
    color: 'text-accent-amber',
    bg: 'bg-[rgba(245,158,11,0.1)]',
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: 'hiral-panchal',
    href: 'https://linkedin.com/in/hiral-panchal-b89071294',
    color: 'text-accent-teal',
    bg: 'bg-accent-teal/10',
  },
  {
    icon: Github,
    label: 'github',
    value: 'm3owbisi',
    href: 'https://github.com/m3owbisi',
    color: 'text-text-primary',
    bg: 'bg-surface-300',
  },
  {
    icon: Instagram,
    label: 'instagram',
    value: '@m3owbisi',
    href: 'https://www.instagram.com/m3owbisi',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  },
];

export default function ContactPage() {
  const { profile } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="reach out" subtitle="let's build something together" />

        <div className="bento-grid mb-10">
          {/* location card — wide */}
          <GlassCard className="bento-span-2 p-6" delay={0}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent-teal/10">
                <MapPin size={24} className="text-accent-teal" />
              </div>
              <div>
                <p className="text-lg font-bold text-text-primary">{profile.location}</p>
                <p className="text-sm text-text-muted">{portfolioData.availability}</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">available</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* resume download cards */}
          <GlassCard className="p-6" delay={0.05}>
            <a
              href="/documents/resume-fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-3 rounded-xl bg-accent-purple/10 group-hover:scale-110 transition-transform">
                <Download size={20} className="text-accent-purple" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">full-stack resume</p>
                <p className="text-xs text-text-muted">download pdf</p>
              </div>
            </a>
          </GlassCard>

          <GlassCard className="p-6" delay={0.1}>
            <a
              href="/documents/resume-data-analyst.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-3 rounded-xl bg-accent-teal/10 group-hover:scale-110 transition-transform">
                <Download size={20} className="text-accent-teal" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">data analyst resume</p>
                <p className="text-xs text-text-muted">download pdf</p>
              </div>
            </a>
          </GlassCard>

          {/* contact method cards */}
          {contactCards.map((card, i) => (
            <GlassCard key={card.label} delay={0.1 + i * 0.05} className="p-5">
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-3 group"
              >
                <div className={`p-2 rounded-lg ${card.bg} shrink-0 group-hover:scale-110 transition-transform`}>
                  <card.icon size={18} className={card.color} />
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">{card.label}</p>
                  <p className="text-sm font-medium text-text-primary group-hover:text-accent-purple transition-colors">
                    {card.value}
                  </p>
                </div>
              </a>
            </GlassCard>
          ))}
        </div>

        {/* testimonial */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-text-primary mb-6 font-mono terminal-prefix">in my own words</h3>
          {portfolioData.testimonials.map((t) => (
            <GlassCard key={t.id} className="p-8 max-w-2xl" delay={0.3}>
              <MessageSquare size={24} className="text-accent-purple/30 mb-4" />
              <blockquote className="text-text-secondary text-sm md:text-base leading-relaxed italic mb-4">
                &quot;{t.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: t.avatarColor }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
