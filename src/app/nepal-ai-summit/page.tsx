import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Nepal AI Summit | ICT Foundation Nepal',
  description: 'Premier conference on artificial intelligence innovation, applications, and impact in Nepal.',
};

export default function NepalAISummit() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          label="Nepal AI Summit"
          title="Nepal AI Summit"
          description="Asia's leading conference on artificial intelligence bringing together researchers, developers, entrepreneurs, and innovators to discuss AI applications and impact in Nepal and the region."
          // breadcrumbs={[
          //   { href: '/', label: 'Home' },
          //   { href: '/#initiatives', label: 'Events' },
          //   { href: '/events/nepal-ai-summit', label: 'Nepal AI Summit' },
          // ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/ICTAward.jpg',
              alt: 'Nepal AI Summit event',
            },
            {
              id: 'event-2',
              src: '/images/hero-bg.jpg',
              alt: 'AI innovation showcase',
            },
            {
              id: 'event-3',
              src: '/images/research-cover.jpg',
              alt: 'AI research and development',
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
                  <p className="text-gray-600">Annual<br /><span className="text-sm text-gray-500">Dates coming soon</span></p>
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
                  <p className="text-gray-600">Kathmandu, Nepal<br /><span className="text-sm text-gray-500">International venue</span></p>
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
                The Nepal AI Summit is South Asia's premier conference dedicated to artificial intelligence innovation, research, and applications. This annual summit brings together AI researchers, machine learning engineers, entrepreneurs, policymakers, and industry leaders to discuss cutting-edge AI technologies and their impact on society.
              </p>
              <p className="mb-6">
                Featuring keynote presentations from global AI pioneers, research paper presentations, industry showcases, and hands-on workshops, the summit covers topics ranging from machine learning and natural language processing to computer vision and AI ethics.
              </p>
              <p>
                The summit provides a unique platform for Nepal's AI community to network with international experts, showcase local AI innovations, and position Nepal as a regional leader in AI research and development.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Conference Topics</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Machine Learning & Deep Learning</h3>
                <p className="text-gray-600">Advances in supervised, unsupervised, and reinforcement learning algorithms and applications.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Natural Language Processing</h3>
                <p className="text-gray-600">NLP applications including chatbots, translation, sentiment analysis, and language generation.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Computer Vision</h3>
                <p className="text-gray-600">Image recognition, object detection, and visual understanding applications.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI for Healthcare</h3>
                <p className="text-gray-600">Medical AI applications, diagnostic tools, and healthcare innovation.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI Ethics & Responsible AI</h3>
                <p className="text-gray-600">Ethical considerations, bias mitigation, and responsible AI development practices.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI in Business & Industry</h3>
                <p className="text-gray-600">Enterprise AI applications, automation, and business transformation use cases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Summit Highlights</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zm-7 5a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Keynote Speakers</h3>
                <p className="text-gray-600">Leading AI researchers and industry pioneers sharing cutting-edge insights.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Research Paper Track</h3>
                <p className="text-gray-600">Presentation of peer-reviewed AI research papers from international submissions.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l1 8m-1-8l-4 4m4-4l4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Startup Showcase</h3>
                <p className="text-gray-600">AI startups and innovations demonstrating commercial applications.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Networking Events</h3>
                <p className="text-gray-600">Connect with global AI community and potential collaborators.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01v.01H12v-.01z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Hands-On Workshops</h3>
                <p className="text-gray-600">Interactive sessions on AI tools, frameworks, and practical applications.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Panel Discussions</h3>
                <p className="text-gray-600">Expert panels discussing industry trends and future AI directions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Join the AI Revolution</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Connect with global AI leaders, researchers, and innovators shaping the future of artificial intelligence.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Register Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
