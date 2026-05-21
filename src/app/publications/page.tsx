import Header from '@/components/HeaderDark';
import AboutSection from '@/components/AboutSection';
import PublicatoinSection from '@/components/PublicationsSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'About ICT Foundation Nepal | IFN',
  description: 'Learn about ICT Foundation Nepal, our vision, mission, core values, and primary objectives for digital transformation.',
};

export default function AboutIFN() {
  return (
    <>
      <Header />
      <main>
        <PublicatoinSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
