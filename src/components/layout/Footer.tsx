import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const socialLinks = [
  { icon: Github, href: 'https://github.com/m3owbisi', label: 'github' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hiral-panchal-b89071294', label: 'linkedin' },
  { icon: Instagram, href: 'https://www.instagram.com/m3owbisi', label: 'instagram' },
  { icon: Mail, href: 'mailto:hp0505157@gmail.com', label: 'email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* brand */}
          <div>
            <Link href="/" className="flex items-baseline mb-3">
              <span className="font-mono text-accent-purple font-bold text-lg">hp</span>
              <span className="font-mono text-text-muted text-xs ml-1">.dev</span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              {portfolioData.footer.tagline}
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-xs font-bold text-text-secondary mb-3 font-mono">quick links</h4>
            <div className="grid grid-cols-2 gap-1">
              {['about', 'work', 'projects', 'skills', 'experience', 'contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link}`}
                  className="text-xs text-text-muted hover:text-accent-purple transition-colors py-1"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* languages */}
          <div>
            <h4 className="text-xs font-bold text-text-secondary mb-3 font-mono">languages spoken</h4>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.footer.languages.map((lang) => (
                <span key={lang.language} className="text-[10px] text-text-muted bg-surface-200 rounded-md px-2 py-1">
                  {lang.language}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="accent-line my-0" />

        {/* bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-text-muted flex items-center gap-1">
            {portfolioData.footer.copyright.replace('·', '—')}
            <Heart size={12} className="text-accent-purple inline" />
          </p>

          {/* social icons */}
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-accent-purple hover:bg-accent-purple/10 transition-all"
                aria-label={s.label}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
