import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'Digital Leadership Dialogue | ICT Foundation Nepal',
  description: 'Executive forum on digital transformation leadership and strategic innovation in Nepal.',
};

export default function DigitalLeadershipDialogue() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          label="Digital Leadership Dialogue"
          title="Digital Leadership Dialogue"
          description="An exclusive executive forum bringing together senior leaders to discuss digital transformation strategies, organizational innovation, and leadership challenges in Nepal's digital economy."
          breadcrumbs={[
            { href: '/', label: 'Home' },
            { href: '/#initiatives', label: 'Events' },
            { href: '/events/digital-leadership-dialogue', label: 'Digital Leadership Dialogue' },
          ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/ICTAward.jpg',
              alt: 'Digital Leadership Dialogue event',
            },
            {
              id: 'event-2',
              src: '/images/hero-bg.jpg',
              alt: 'Executive leadership meeting',
            },
            {
              id: 'event-3',
              src: '/images/research-cover.jpg',
              alt: 'Strategic digital transformation',
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
                  <p className="text-gray-600">Quarterly Sessions<br /><span className="text-sm text-gray-500">Check calendar for dates</span></p>
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
                  <p className="text-gray-600">Kathmandu, Nepal<br /><span className="text-sm text-gray-500">Premium venues</span></p>
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
                The Digital Leadership Dialogue is an exclusive forum designed for C-suite executives, organizational leaders, and digital transformation pioneers. This intimate roundtable discussion focuses on strategic challenges, emerging opportunities, and best practices in leading digital transformation initiatives.
              </p>
              <p className="mb-6">
                Held quarterly, these dialogues bring together Nepal's top leaders from government, private sector, and academia to share insights, debate emerging trends, and collaborate on solutions to drive Nepal's digital transformation at the strategic level.
              </p>
              <p>
                Through moderated discussions, case study presentations, and peer-to-peer networking, participants gain valuable insights into organizational change management, technology adoption strategies, and building competitive advantage in the digital economy.
              </p>
            </div>
          </div>
        </section>

        {/* Discussion Topics */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Key Discussion Topics</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Organizational Digital Transformation</h3>
                <p className="text-gray-600">Leading organizational change and embedding digital culture across departments and hierarchies.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI and Emerging Technologies</h3>
                <p className="text-gray-600">Strategic adoption of AI, machine learning, and advanced technologies for competitive advantage.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Cybersecurity & Risk Management</h3>
                <p className="text-gray-600">Building resilient digital infrastructure and managing emerging security challenges.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Data-Driven Decision Making</h3>
                <p className="text-gray-600">Leveraging data analytics and insights for strategic business decisions and innovation.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Talent & Skills Development</h3>
                <p className="text-gray-600">Building digital capabilities and attracting talent in Nepal's competitive tech market.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Lead Digital Transformation</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Join Nepal's top leaders in shaping the future of digital transformation. Limited seats available for this exclusive dialogue.
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
