'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'education', href: '/education' },
  { label: 'work', href: '/work' },
  { label: 'projects', href: '/projects' },
  { label: 'experience', href: '/experience' },
  { label: 'skills', href: '/skills' },
  { label: 'services', href: '/services' },
  { label: 'certifications', href: '/certifications' },
  { label: 'achievements', href: '/achievements' },
  { label: 'contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-scrolled'
          : 'navbar-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-[var(--nav-height)] flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="nav-logo group">
          <span className="font-mono text-accent-purple font-bold text-lg tracking-tight">
            hp
          </span>
          <span className="font-mono text-text-muted text-xs ml-1 group-hover:text-accent-purple transition-colors">
            .dev
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? 'nav-link-active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* resume button (desktop) */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="/documents/resume-fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-5"
          >
            resume
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          className="xl:hidden text-text-primary p-2 hover:text-accent-purple transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'close menu' : 'open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden"
          >
            <div className="mobile-menu-panel">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${
                      pathname === link.href ? 'mobile-nav-link-active' : ''
                    }`}
                  >
                    <span className="font-mono text-accent-purple text-xs mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-4 border-t border-white/5 flex gap-3">
                <a
                  href="/documents/resume-fullstack.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-5 flex-1 justify-center"
                >
                  full-stack resume
                </a>
                <a
                  href="/documents/resume-data-analyst.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-5 flex-1 justify-center"
                >
                  data analyst resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
