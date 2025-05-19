
import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import RealTimeAlertsSection from '@/components/landing/real-time-alerts-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/layout/footer';

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RealTimeAlertsSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
