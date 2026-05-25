import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Digital Samvad | ICT Foundation Nepal',
  description: 'Community dialogue series on digital literacy, internet safety, and digital rights.',
};

export default function DigitalSamvad() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          label="Digital Samvad"
          title="Digital Samvad"
          description="Community engagement initiative promoting digital literacy, internet safety, online rights awareness, and responsible digital citizenship across Nepal."
          // breadcrumbs={[
          //   { href: '/', label: 'Home' },
          //   { href: '/#initiatives', label: 'Events' },
          //   { href: '/events/digital-samvad', label: 'Digital Samvad' },
          // ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/ICTAward.jpg',
              alt: 'Digital Samvad community event',
            },
            {
              id: 'event-2',
              src: '/images/hero-bg.jpg',
              alt: 'Digital literacy outreach',
            },
            {
              id: 'event-3',
              src: '/images/research-cover.jpg',
              alt: 'Community digital awareness',
            },
          ]}
          actions={[
            { label: 'Get Involved', href: '#', variant: 'primary' },
            { label: 'Learn More', href: '#overview', variant: 'secondary' },
          ]}
        />

        {/* Event Details Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Sessions</h3>
                  <p className="text-gray-600">Monthly & Quarterly<br /><span className="text-sm text-gray-500">Ongoing throughout year</span></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Location</h3>
                  <p className="text-gray-600">Community Centers<br /><span className="text-sm text-gray-500">Nationwide coverage</span></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Contact</h3>
                  <p className="text-gray-600">info@ictfoundation.org.np<br /><span className="text-sm text-gray-500">+977-1-XXXXX</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Digital Samvad is a grassroots community engagement initiative bringing digital awareness and education to communities across Nepal. Through interactive dialogue sessions, the program promotes digital literacy, internet safety, and responsible digital citizenship.
              </p>
              <p className="mb-6">
                Conducted in local languages, Digital Samvad reaches rural and urban communities to discuss practical digital skills, online security, digital rights protection, and the safe and beneficial use of technology in daily life.
              </p>
              <p>
                The initiative empowers communities to participate meaningfully in Nepal's digital economy while staying safe and informed about their digital rights and responsibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Topics Covered</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Basic Digital Literacy</h3>
                <p className="text-gray-600">Fundamentals of computers, internet usage, email, and basic online communication tools.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Internet Safety & Security</h3>
                <p className="text-gray-600">Online safety practices, password security, phishing awareness, and cyber threat prevention.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Rights & Privacy</h3>
                <p className="text-gray-600">Understanding personal data protection, privacy rights, and online harassment prevention.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Social Media Awareness</h3>
                <p className="text-gray-600">Responsible social media use, misinformation detection, and digital etiquette.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">E-Commerce & Digital Payments</h3>
                <p className="text-gray-600">Safe online shopping, digital payment systems, and online transaction security.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Health & Well-being</h3>
                <p className="text-gray-600">Balancing digital life, managing screen time, and promoting digital wellness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Empower Your Community</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Join Digital Samvad sessions to build digital skills and promote safe internet practices in your community.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Find a Session Near You
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
