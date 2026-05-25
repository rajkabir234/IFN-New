import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'ICT Gyan | ICT Foundation Nepal',
  description: 'Educational knowledge-sharing platform providing ICT training and professional development.',
};

export default function IctGyan() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          label="ICT Gyan"
          title="ICT Gyan"
          description="Comprehensive knowledge-sharing and training platform offering ICT education, professional development, and skill enhancement programs for individuals and organizations."
          // breadcrumbs={[
          //   { href: '/', label: 'Home' },
          //   { href: '/#initiatives', label: 'Events' },
          //   { href: '/events/ict-gyan', label: 'ICT Gyan' },
          // ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/ICTAward.jpg',
              alt: 'ICT Gyan training session',
            },
            {
              id: 'event-2',
              src: '/images/hero-bg.jpg',
              alt: 'Professional development',
            },
            {
              id: 'event-3',
              src: '/images/research-cover.jpg',
              alt: 'Knowledge sharing',
            },
          ]}
          actions={[
            { label: 'Explore Programs', href: '#', variant: 'primary' },
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
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Programs</h3>
                  <p className="text-gray-600">Ongoing throughout year<br /><span className="text-sm text-gray-500">Start dates vary by program</span></p>
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
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Format</h3>
                  <p className="text-gray-600">Online & Offline<br /><span className="text-sm text-gray-500">Flexible learning options</span></p>
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
                ICT Gyan is a comprehensive knowledge-sharing platform dedicated to providing quality ICT education and professional development. Through structured training programs, workshops, and certification courses, we develop Nepal's digital talent pool.
              </p>
              <p className="mb-6">
                Our programs cater to diverse audiences—from students seeking ICT skills to professionals seeking career advancement. We partner with industry experts and educational institutions to deliver cutting-edge, industry-relevant training.
              </p>
              <p>
                ICT Gyan empowers individuals to build careers in technology and helps organizations develop their ICT capabilities for sustainable growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Training Programs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.692 10-10.747S17.5 6.253 12 6.253z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Foundation Courses</h3>
                <p className="text-gray-600">Basic ICT skills including computer fundamentals, office applications, and internet basics.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Software Development</h3>
                <p className="text-gray-600">Programming languages, web development, mobile app development, and software engineering.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Cybersecurity</h3>
                <p className="text-gray-600">Information security, network security, ethical hacking, and security certifications.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Data Analytics</h3>
                <p className="text-gray-600">Data analysis, business intelligence, big data tools, and analytics platforms.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Enterprise Solutions</h3>
                <p className="text-gray-600">Cloud computing, enterprise systems, IT operations, and organizational ICT training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Industry Certifications</h2>
            <p className="mb-8 text-gray-600 text-lg">
              Our programs are designed to prepare you for industry-recognized certifications. Upon completion, participants can pursue credentials from major certification bodies.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Technical Certifications</h3>
                <p className="text-gray-600">Microsoft, Cisco, CompTIA, AWS, Google Cloud, and other industry-recognized certifications.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Professional Development</h3>
                <p className="text-gray-600">Leadership, project management, agile methodologies, and professional skills certifications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Start Your Learning Journey</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Choose from our comprehensive training programs and develop skills for a successful career in ICT.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Explore Programs
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
