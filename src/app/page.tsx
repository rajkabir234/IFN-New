import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InitiativesSection from '@/components/InitiativesSection';
import PublicationsSection from '@/components/PublicationsSection';
import ReachSection from '@/components/ReachSection';
import CollaboratorsSection from '@/components/CollaboratorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InitiativesSection />
        <PublicationsSection />
        <ReachSection />
        {/* <CollaboratorsSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
