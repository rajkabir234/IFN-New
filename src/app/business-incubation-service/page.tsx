import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Business Incubation Service | ICT Foundation Nepal',
  description: 'Comprehensive incubation program supporting startups from ideation to market launch.',
};

export default function BusinessIncubationService() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          label="Business Incubation Service"
          title="Business Incubation Service"
          description="Comprehensive incubation program providing mentorship, funding support, infrastructure, and resources to nurture ICT startups from ideation to successful market launch."
          // breadcrumbs={[
          //   { href: '/', label: 'Home' },
          //   { href: '/#initiatives', label: 'Events' },
          //   { href: '/events/business-incubation-service', label: 'Business Incubation Service' },
          // ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/ICTAward.jpg',
              alt: 'Business incubation program',
            },
            {
              id: 'event-2',
              src: '/images/hero-bg.jpg',
              alt: 'Startup development',
            },
            {
              id: 'event-3',
              src: '/images/research-cover.jpg',
              alt: 'Entrepreneurship support',
            },
          ]}
          actions={[
            { label: 'Apply Now', href: '#', variant: 'primary' },
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
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Duration</h3>
                  <p className="text-gray-600">6-18 Months<br /><span className="text-sm text-gray-500">Flexible program phases</span></p>
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
                  <p className="text-gray-600">Kathmandu, Nepal<br /><span className="text-sm text-gray-500">Incubation hub facility</span></p>
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
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Program Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Business Incubation Service is a comprehensive program supporting ICT entrepreneurs in transforming ideas into viable, scalable businesses. We provide mentorship, funding, workspace, and strategic guidance to help startups navigate challenges and achieve sustainable growth.
              </p>
              <p className="mb-6">
                Our incubation hub offers state-of-the-art facilities, networking opportunities, and access to a network of experienced mentors, investors, and industry experts. Through structured phases, we help startups validate ideas, develop products, establish market presence, and secure funding.
              </p>
              <p>
                We are committed to building Nepal's startup ecosystem by nurturing innovative ICT ventures that create employment, drive economic growth, and solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Incubation Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zm-7 5a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Mentorship</h3>
                <p className="text-gray-600">One-on-one guidance from experienced entrepreneurs, industry experts, and successful founders.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Funding Support</h3>
                <p className="text-gray-600">Access to seed funding, investor connections, and grant opportunities for early-stage startups.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 110-4H9m0 0a2 2 0 110 4m6-4a2 2 0 112 2v-5.581m0 0H15" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Workspace</h3>
                <p className="text-gray-600">Dedicated office space, high-speed internet, and collaborative work environment.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Business Development</h3>
                <p className="text-gray-600">Support with business planning, market research, and go-to-market strategy.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l1 8m-1-8l-4 4m4-4l4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Networking</h3>
                <p className="text-gray-600">Connections with investors, partners, customers, and other entrepreneurs.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01v.01H12v-.01z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Training & Workshops</h3>
                <p className="text-gray-600">Structured training on entrepreneurship, technical skills, and business management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Eligibility Criteria</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-3 text-lg font-semibold text-[#0E2557]">For Startups</h3>
                <ul className="list-inside list-disc text-gray-600 space-y-2">
                  <li>ICT/Technology-focused business idea</li>
                  <li>Team with relevant skills and commitment</li>
                  <li>Registered company or in process of registration</li>
                  <li>Operated for less than 3 years</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-3 text-lg font-semibold text-[#0E2557]">For Entrepreneurs</h3>
                <ul className="list-inside list-disc text-gray-600 space-y-2">
                  <li>Strong problem-solving mindset</li>
                  <li>Passion for technology and innovation</li>
                  <li>Willingness to learn and adapt</li>
                  <li>Commitment to attend program activities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Phases */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Program Phases</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">1</div>
                    <div className="h-20 w-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Ideation & Validation (Months 1-3)</h3>
                    <p className="text-gray-600">Refine business idea, validate market demand, develop minimum viable product.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">2</div>
                    <div className="h-20 w-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Development & Launch (Months 4-9)</h3>
                    <p className="text-gray-600">Build product, establish market presence, begin customer acquisition.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Growth & Scaling (Months 10-18)</h3>
                    <p className="text-gray-600">Scale operations, secure funding, prepare for exit or long-term sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Start Your Entrepreneurial Journey</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Apply to our Business Incubation Service and get the support you need to turn your ICT idea into a successful business.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Apply Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
