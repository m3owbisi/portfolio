'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'full-stack software engineer',
  'saas & ai integration',
  'devops & cloud infrastructure',
  'data engineering & analytics',
];

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="hero-content">
      {/* greeting line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-sm text-accent-purple mb-3"
      >
        {'>_'} hi, i&apos;m
      </motion.p>

      {/* name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
      >
        <span className="gradient-text">hiral</span>
        <br />
        <span className="text-text-primary">panchal</span>
      </motion.h1>

      {/* typewriter role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-6"
      >
        <span className="font-mono text-base md:text-lg text-text-secondary">
          {displayText}
        </span>
        <span className="terminal-cursor" />
      </motion.div>

      {/* tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-text-muted text-sm md:text-base max-w-md mb-8 leading-relaxed"
      >
        shipping production-grade full-stack applications — from system design to deployment.
      </motion.p>

      {/* quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex gap-6 mb-10"
      >
        <div className="hero-stat">
          <span className="hero-stat-number">10+</span>
          <span className="hero-stat-label">projects</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">7.80</span>
          <span className="hero-stat-label">cgpa</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">4+</span>
          <span className="hero-stat-label">internships</span>
        </div>
      </motion.div>

      {/* cta buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        <a href="/work" className="btn-primary">
          view my work
        </a>
        <a
          href="/documents/resume-fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Download size={16} />
          download resume
        </a>
      </motion.div>

      {/* social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="https://github.com/m3owbisi"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-link"
          aria-label="github"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/hiral-panchal-b89071294"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-link"
          aria-label="linkedin"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:hp0505157@gmail.com"
          className="hero-social-link"
          aria-label="email"
        >
          <Mail size={18} />
        </a>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hero-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </div>
  );
}
