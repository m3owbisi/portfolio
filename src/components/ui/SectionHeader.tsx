'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="section-header"
    >
      <h2 className="section-title terminal-prefix">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="accent-line mt-4" style={{ maxWidth: 120 }} />
    </motion.div>
  );
}
