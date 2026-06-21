import HeroAvatar from '@/components/hero/HeroAvatar';
import HeroContent from '@/components/hero/HeroContent';
import PageTransition from '@/components/layout/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <main className="hero-section">
        <div className="hero-grid">
          {/* left: content */}
          <HeroContent />

          {/* right: animated avatar */}
          <HeroAvatar />
        </div>
      </main>
    </PageTransition>
  );
}
