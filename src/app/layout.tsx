import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'hiral panchal — full-stack software engineer',
  description:
    'portfolio of hiral panchal — full-stack software engineer specializing in saas, ai integration, and devops. 10+ deployed projects, production-grade applications from system design to cloud deployment.',
  keywords: [
    'hiral panchal',
    'full-stack developer',
    'software engineer',
    'react',
    'next.js',
    'node.js',
    'saas',
    'portfolio',
  ],
  authors: [{ name: 'hiral panchal' }],
  openGraph: {
    title: 'hiral panchal — full-stack software engineer',
    description:
      'shipping production-grade full-stack applications — from system design to deployment.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* background ambient glow */}
        <div className="bg-glow" aria-hidden="true" />

        {/* subtle grid pattern overlay */}
        <div className="bg-grid fixed inset-0 pointer-events-none z-0" aria-hidden="true" />

        {/* main content */}
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
