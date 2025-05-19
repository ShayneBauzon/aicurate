import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import RealTimeAlertsSection from '@/components/landing/real-time-alerts-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import CtaSection from '@/components/landing/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <RealTimeAlertsSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
