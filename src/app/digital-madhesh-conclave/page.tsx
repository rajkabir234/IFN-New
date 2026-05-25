import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Digital Madhesh Conclave | ICT Foundation Nepal',
  description: 'Dedicated to digital innovation and economic development in the Madhesh region.',
};

export default function DigitalMadheshConclave() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
        label="Digital Madhesh Conclave"
        title="Digital Madhesh Conclave"
        description="Dedicated to digital innovation and economic development in the Madhesh region. Promoting entrepreneurship and inclusive growth through technology-driven solutions."
        // breadcrumbs={[
        //   { href: '/', label: 'Home' },
        //   { href: '/#initiatives', label: 'Events' },
        //   { href: '/digital-madhesh-conclave', label: 'Digital Madhesh Conclave' },
        // ]}
        slides={[
          {
            id: 'event-1',
            src: '/images/ICTAward.jpg',
            alt: 'Digital Madhesh Conclave event',
          },
          {
            id: 'event-2',
            src: '/images/hero-bg.jpg',
            alt: 'Regional business and technology',
          },
          {
            id: 'event-3',
            src: '/images/research-cover.jpg',
            alt: 'Entrepreneurship and innovation',
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
                    Madhesh Region, Nepal<br />
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
                The Digital Madhesh Conclave promotes digital entrepreneurship, innovation, and inclusive growth in the Madhesh region. It connects entrepreneurs, startups, and businesses with resources, mentorship, and market opportunities to drive economic development.
              </p>
              <p className="mb-6">
                This regional conclave serves as a dynamic platform to discuss Madhesh's digital transformation roadmap, showcase innovative business models, and facilitate networking among local entrepreneurs, investors, and technology professionals.
              </p>
              <p>
                Through keynote presentations, panel discussions, and interactive workshops, the conclave addresses critical topics including digital entrepreneurship, e-commerce, startup ecosystem development, financial inclusion, and regional economic growth through technology.
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
                  Hear from successful entrepreneurs, business leaders, and digital innovators sharing insights on regional economic growth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Investor Connections</h3>
                <p className="text-gray-600">
                  Connect with investors, venture capitalists, and funding opportunities for your startup or business idea.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Business Workshops</h3>
                <p className="text-gray-600">
                  Participate in hands-on workshops on digital marketing, e-commerce, and business growth strategies.
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
                  Discover innovative startups and digital solutions transforming the Madhesh region's economy.
                </p>
              </div>

              {/* Card 5 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Market Opportunities</h3>
                <p className="text-gray-600">
                  Explore market opportunities and business expansion strategies for the Madhesh region.
                </p>
              </div>

              {/* Card 6 */}
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zM12 9v2m0 4v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Networking</h3>
                <p className="text-gray-600">
                  Build meaningful connections with entrepreneurs, business partners, and industry professionals.
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
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Entrepreneurship & Startups</h3>
                <p className="text-gray-600">
                  Foster innovation and entrepreneurship to create sustainable digital solutions and economic opportunities in Madhesh.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">E-Commerce & Digital Business</h3>
                <p className="text-gray-600">
                  Leverage e-commerce platforms and digital business models to expand market reach and revenue streams.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Financial Inclusion & Digital Payments</h3>
                <p className="text-gray-600">
                  Promote digital financial services and payment solutions to include underserved populations in the digital economy.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Supply Chain & Logistics Technology</h3>
                <p className="text-gray-600">
                  Optimize supply chain operations using technology to enhance efficiency and reduce costs.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Regional Brand Development</h3>
                <p className="text-gray-600">
                  Use digital marketing and branding strategies to showcase and promote Madhesh's products and services globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Register now to secure your spot at the Digital Madhesh Conclave. Connect with investors, entrepreneurs, and business leaders.
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
                  Who should attend the Digital Madhesh Conclave?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  The conclave is designed for entrepreneurs, startup founders, business owners, investors, tech professionals, and anyone interested in the Madhesh region's economic growth and digital transformation.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  What opportunities are available for funding?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  The conclave connects founders with investors, venture capitalists, and funding organizations. Funding opportunities, eligibility criteria, and application processes will be shared during the event.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  Can I pitch my startup?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  Yes! Startups can apply to pitch at the conclave's startup showcase. Applications details will be shared during registration.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                  Is there mentorship available?
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 hidden group-open:block">
                  Absolutely! The conclave provides mentorship opportunities with experienced entrepreneurs and business leaders to help guide your business growth.
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
