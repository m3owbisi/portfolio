'use client';

import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Code2, Cloud, Plug, Container, BarChart3, Shield } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const serviceIcons = [Code2, Cloud, Plug, Container, BarChart3, Shield];
const serviceColors = [
  'text-accent-purple',
  'text-accent-teal',
  'text-accent-amber',
  'text-accent-purple',
  'text-accent-teal',
  'text-accent-amber',
];
const serviceBgs = [
  'bg-accent-purple/10',
  'bg-accent-teal/10',
  'bg-[rgba(245,158,11,0.1)]',
  'bg-accent-purple/10',
  'bg-accent-teal/10',
  'bg-[rgba(245,158,11,0.1)]',
];

export default function ServicesPage() {
  const { services } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="services" subtitle="what i can do for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] || Code2;
            return (
              <GlassCard key={service.name} delay={i * 0.08} className="p-6 group">
                <div className={`p-3 rounded-xl ${serviceBgs[i]} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={serviceColors[i]} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{service.name}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{service.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
