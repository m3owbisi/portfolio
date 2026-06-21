'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Award, Calendar, Building2, X, FileText } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

// map certifications to their image/pdf files
const certMedia: Record<string, { file: string; type: 'image' | 'pdf' }> = {
  'cyber security internship': { file: '/images/certificates/cybersecurity-internship.jpg', type: 'image' },
  'foundational c# with microsoft': { file: '/images/certificates/foundational-csharp-microsoft.png', type: 'image' },
  'tech-a-thon 2025 — technobeat v.i25': { file: '/images/certificates/techathon-2025-participation.jpg', type: 'image' },
  'tech-a-thon 2026 — technobeat v.i26': { file: '/images/certificates/techathon-2026-participation.jpg', type: 'image' },
  'gst using tallyprime': { file: '/images/certificates/gst-tallyprime.pdf', type: 'pdf' },
  'tallyessential level 1': { file: '/images/certificates/tallyessential-level1.pdf', type: 'pdf' },
  'skyscanner swe simulation (js/react)': { file: '/images/certificates/skyscanner-swe-simulation.pdf', type: 'pdf' },
};

export default function CertificationsPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const { certifications } = portfolioData;

  return (
    <PageTransition>
      <section className="page-section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
        <SectionHeader title="certifications" subtitle="validated skills & credentials" />

        {/* certificate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, i) => {
            const media = certMedia[cert.name];
            return (
              <GlassCard key={cert.name} delay={i * 0.06} className="p-5 group cursor-pointer">
                {/* thumbnail area */}
                {media && media.type === 'image' && (
                  <div
                    className="relative w-full h-36 rounded-lg overflow-hidden mb-4 bg-surface-200"
                    onClick={() => setLightboxSrc(media.file)}
                  >
                    <Image
                      src={media.file}
                      alt={cert.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {media && media.type === 'pdf' && (
                  <a
                    href={media.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-36 rounded-lg bg-surface-200 mb-4 hover:bg-surface-300 transition-colors"
                  >
                    <FileText size={32} className="text-accent-purple" />
                    <span className="ml-2 text-xs text-text-muted font-mono">view pdf</span>
                  </a>
                )}

                {!media && (
                  <div className="flex items-center justify-center w-full h-36 rounded-lg bg-surface-200 mb-4">
                    <Award size={32} className="text-surface-400" />
                  </div>
                )}

                {/* info */}
                <h4 className="text-sm font-bold text-text-primary mb-1">{cert.name}</h4>
                <div className="flex flex-wrap gap-3 text-xs text-text-muted mt-2">
                  <span className="flex items-center gap-1">
                    <Building2 size={11} className="text-accent-teal" />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-accent-purple" />
                    {cert.date}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* lightbox */}
        <AnimatePresence>
          {lightboxSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightboxSrc(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative max-w-4xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxSrc(null)}
                  className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="close"
                >
                  <X size={24} />
                </button>
                <Image
                  src={lightboxSrc}
                  alt="certificate"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}
