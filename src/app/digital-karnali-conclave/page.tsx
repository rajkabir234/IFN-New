import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Digital Karnali Conclave | ICT Foundation Nepal',
  description: 'Focused on digital empowerment and development in the Karnali region of Nepal.',
};

export default function DigitalKarnaliConclave() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
        label="Digital Karnali Conclave"
        title="Digital Karnali Conclave"
        description="Focused on digital empowerment and development in the Karnali region of Nepal. Bridging the digital divide and fostering innovation in one of Nepal's most dynamic regions."
        // breadcrumbs={[
        //   { href: '/', label: 'Home' },
        //   { href: '/#initiatives', label: 'Events' },
        //   { href: '/digital-karnali-conclave', label: 'Digital Karnali Conclave' },
        // ]}
        slides={[
          {
            id: 'event-1',
            src: '/images/publications/ICTAward.jpg',
            alt: 'Digital Karnali Conclave event',
          },
          {
            id: 'event-2',
            src: '/images/hero-bg.jpg',
            alt: 'Regional digital transformation',
          },
          {
            id: 'event-3',
            src: '/images/research-cover.jpg',
            alt: 'Community and technology collaboration',
          },
        ]}
        actions={[
          { label: 'Register Now', href: '#', variant: 'primary' },
          { label: 'Learn More', href: '#overview', variant: 'secondary' },
        ]}
      />

        {/* Event Details Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Event Date */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Event Date</h3>
                  <p className="text-gray-600">
                    TBD<br />
                    <span className="text-sm text-gray-500">Mark your calendar</span>
                  </p>
                </div>
              </div>

              {/* Location */}
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
                  <p className="text-gray-600">
                    Karnali Region, Nepal<br />
                    <span className="text-sm text-gray-500">Venue details coming soon</span>
                  </p>
                </div>
              </div>

              {/* Contact Info */}
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
                  <p className="text-gray-600">
                    info@ictfoundation.org.np<br />
                    <span className="text-sm text-gray-500">+977-1-XXXXX</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              Event Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Digital Karnali Conclave aims to bridge the digital divide in the Karnali region by fostering innovation, entrepreneurship, and digital literacy. It showcases opportunities for regional development through technology and digital solutions tailored to local needs and challenges.
              </p>
              <p className="mb-6">
                This regional conclave serves as a comprehensive platform to discuss Karnali's digital transformation roadmap, showcase technological innovations suitable for the region, and facilitate networking among local leaders, entrepreneurs, and technology enthusiasts.
              </p>
              <p>
                Through keynote presentations, panel discussions, and interactive workshops, the conclave addresses critical topics including digital entrepreneurship, digital skills development, agricultural technology, tourism digitalization, and rural connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* About the Event Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              What to Expect
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zm-7 5a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Keynote Speakers</h3>
                <p className="text-gray-600">
                  Hear from regional leaders, innovators, and digital experts sharing insights on regional digital transformation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Networking Opportunities</h3>
                <p className="text-gray-600">
                  Connect with local entrepreneurs, investors, and technology professionals in the Karnali region and beyond.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Interactive Workshops</h3>
                <p className="text-gray-600">
                  Participate in hands-on workshops covering emerging technologies, digital skills, and regional opportunities.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l1 8m-1-8l-4 4m4-4l4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Startup Showcase</h3>
                <p className="text-gray-600">
                  Discover innovative startups and tech solutions transforming the Karnali region's digital landscape.
                </p>
              </div>

              {/* Card 5 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Policy Discussions</h3>
                <p className="text-gray-600">
                  Contribute to shaping regional digital policies and strategic initiatives for sustainable growth.
                </p>
              </div>

              {/* Card 6 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zM12 9v2m0 4v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Award Ceremonies</h3>
                <p className="text-gray-600">
                  Celebrate excellence and innovation in the Karnali region's digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Themes Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              Key Themes
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Rural Digital Transformation</h3>
                <p className="text-gray-600">
                  Explore strategies for bringing digital infrastructure and services to rural communities in Karnali.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Agricultural Technology & Innovation</h3>
                <p className="text-gray-600">
                  Discover how technology can enhance agricultural productivity and connect farmers to markets.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Skills & Entrepreneurship</h3>
                <p className="text-gray-600">
                  Foster local entrepreneurship and digital literacy to create sustainable economic opportunities.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Tourism & Digital Economy</h3>
                <p className="text-gray-600">
                  Leverage digital technology to promote tourism and create new revenue streams for the region.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Connectivity & Digital Access</h3>
                <p className="text-gray-600">
                  Address challenges of digital infrastructure and ensure equitable access to technology across the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">
              Ready to Transform the Karnali Region?
            </h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Register now to secure your spot at the Digital Karnali Conclave. Join regional leaders, innovators, and changemakers in this transformative event.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Register for the Event
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  Who should attend the Digital Karnali Conclave?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  The conclave is designed for local government officials, entrepreneurs, business owners, tech professionals, farmers, students, and anyone interested in the Karnali region's digital transformation journey.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  What is the registration fee?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  Registration details and fee structure will be announced soon. Early bird discounts will be available for early registrants.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  Will there be networking opportunities?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  Yes! The conclave includes dedicated networking sessions, coffee breaks, and social events to connect with fellow participants and speakers.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  Can I sponsor or exhibit at the event?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  Absolutely! We offer sponsorship and exhibition opportunities. Please contact our events team for partnership details.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
