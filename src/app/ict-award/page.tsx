import Link from 'next/link';
import SlideshowHero from '@/components/SlideshowHero';

export const metadata = {
  title: 'ICT Award | ICT Foundation Nepal',
  description: 'Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal.',
};

export default function IctAward() {
  return (
    <>
      <SlideshowHero
        label="ICT Award"
        title="ICT Award"
        description="Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal. Honoring innovators, entrepreneurs, organizations, and projects that demonstrate outstanding contributions to Nepal's digital future."
        // breadcrumbs={[
        //   { href: '/', label: 'Home' },
        //   { href: '/#initiatives', label: 'Events' },
        //   { href: '/events/ict-award', label: 'ICT Award' },
        // ]}
        slides={[
          {
            id: 'event-1',
            src: '/images/ICTAward.jpg',
            alt: 'ICT Award ceremony',
          },
          {
            id: 'event-2',
            src: '/images/hero-bg.jpg',
            alt: 'Excellence in technology',
          },
          {
            id: 'event-3',
            src: '/images/research-cover.jpg',
            alt: 'Innovation recognition',
          },
        ]}
        actions={[
          { label: 'Apply Now', href: '#apply', variant: 'primary' },
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
                  Annual<br />
                  <span className="text-sm text-gray-500">Dates announced soon</span>
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
                  Kathmandu, Nepal<br />
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
      <section id="overview" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Award Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The ICT Award is Nepal's premier recognition program celebrating excellence in Information and Communication Technology. This prestigious annual award honors innovators, entrepreneurs, organizations, and projects that have demonstrated outstanding contributions to Nepal's digital transformation and development.
            </p>
            <p className="mb-6">
              Since its inception, the ICT Award has recognized hundreds of outstanding applications showcasing Nepal's talent, innovation, and commitment to leveraging technology for social and economic progress. The award program attracts participants from government agencies, private sector companies, startups, educational institutions, and civil society organizations.
            </p>
            <p>
              By recognizing and celebrating excellence in ICT, the award program aims to inspire more individuals and organizations to embrace digital innovation, contribute to Nepal's digital economy, and create positive social impact through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Award Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Category 1 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Innovation in Technology</h3>
              <p className="text-gray-600">
                Recognizing groundbreaking technological innovations and cutting-edge solutions that advance Nepal's digital capabilities.
              </p>
            </div>

            {/* Category 2 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Digital Entrepreneurship</h3>
              <p className="text-gray-600">
                Honoring startups and entrepreneurs leveraging technology to create innovative business models and create employment.
              </p>
            </div>

            {/* Category 3 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 110-4H9m0 0a2 2 0 110 4m6-4a2 2 0 112 2v-5.581m0 0H9" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Best ICT Implementation</h3>
              <p className="text-gray-600">
                Recognizing organizations that have successfully implemented ICT projects with significant positive impact and outcomes.
              </p>
            </div>

            {/* Category 4 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zm0 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Young ICT Professional</h3>
              <p className="text-gray-600">
                Celebrating talented young professionals under 35 making exceptional contributions to Nepal's ICT sector.
              </p>
            </div>

            {/* Category 5 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Social Impact through ICT</h3>
              <p className="text-gray-600">
                Recognizing projects and initiatives using ICT to create positive social impact and address community challenges.
              </p>
            </div>

            {/* Category 6 */}
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Best Government ICT Initiative</h3>
              <p className="text-gray-600">
                Honoring government agencies and departments for outstanding digital transformation and e-governance initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Eligibility Criteria
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">For Individuals</h3>
              <ul className="list-inside list-disc text-gray-600 space-y-2">
                <li>Nepali citizens or individuals working in Nepal for at least 2 years</li>
                <li>Demonstrable contributions to ICT innovation or implementation</li>
                <li>No age restriction unless applying for Young Professional category</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">For Organizations</h3>
              <ul className="list-inside list-disc text-gray-600 space-y-2">
                <li>Registered companies or non-profit organizations operating in Nepal</li>
                <li>Completed ICT project or initiative with measurable impact</li>
                <li>No financial or legal penalties in the past 3 years</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">For Projects</h3>
              <ul className="list-inside list-disc text-gray-600 space-y-2">
                <li>ICT projects completed or implemented within the past 24 months</li>
                <li>Clear documentation of project objectives, implementation, and outcomes</li>
                <li>Demonstrable positive impact on beneficiaries or society</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="apply" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Application Process
          </h2>
          <div className="relative">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">1</div>
                  <div className="h-24 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Registration</h3>
                  <p className="text-gray-600">
                    Visit the official ICT Award portal and create your account. Select your category and review the requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">2</div>
                  <div className="h-24 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Submit Application</h3>
                  <p className="text-gray-600">
                    Complete the application form with detailed information about your innovation, project, or achievement. Include supporting documents and evidence of impact.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">3</div>
                  <div className="h-24 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Preliminary Review</h3>
                  <p className="text-gray-600">
                    ICT Award committee reviews all applications for completeness and eligibility. Shortlisted candidates will be notified.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">4</div>
                  <div className="h-24 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Jury Evaluation</h3>
                  <p className="text-gray-600">
                    A panel of industry experts evaluates applications based on innovation, impact, sustainability, and contribution to Nepal's digital transformation.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Award Ceremony</h3>
                  <p className="text-gray-600">
                    Winners are announced and honored at the prestigious ICT Award Ceremony. Winners receive recognition, certificates, and prizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Benefits of Winning
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">National Recognition</h3>
              <p className="text-gray-600">
                Gain prestigious national recognition and visibility for your innovation and contribution.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Media Coverage</h3>
              <p className="text-gray-600">
                Feature in national and international media, increasing your profile and reach.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Networking Opportunities</h3>
              <p className="text-gray-600">
                Connect with industry leaders, investors, and potential collaborators.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Credibility & Trust</h3>
              <p className="text-gray-600">
                Build credibility and establish trust with clients, investors, and stakeholders.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Business Growth</h3>
              <p className="text-gray-600">
                Enhance business opportunities and attract new clients or investors.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0zm0 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Inspiring Others</h3>
              <p className="text-gray-600">
                Inspire and motivate others to pursue innovation and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Important Dates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Application Opening</h3>
                <p className="text-gray-600">Application portal opens - TBD</p>
              </div>
            </div>

            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Application Deadline</h3>
                <p className="text-gray-600">Final date to submit applications - TBD</p>
              </div>
            </div>

            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Winners Announcement</h3>
                <p className="text-gray-600">Award winners announced - TBD</p>
              </div>
            </div>

            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Awards Ceremony</h3>
                <p className="text-gray-600">Grand awards ceremony and recognition event - TBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                How do I submit my application?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Visit the official ICT Award portal, create an account, select your category, and fill out the application form. Submit your application before the deadline with all required documents and evidence of impact.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                Is there an application fee?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Application fee details will be announced in the official guidelines. Check the ICT Award website for the most current information.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                Can I apply in multiple categories?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Yes, you can apply in multiple categories if you meet the eligibility criteria. Each application will be evaluated independently.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                How are applications evaluated?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Applications are evaluated by an independent jury panel of industry experts based on criteria including innovation, impact, sustainability, contribution to digital transformation, and overall quality of the submission.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                What happens after I win an award?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Award winners are invited to the ICT Award Ceremony for recognition and celebration. Winners receive certificates, recognition on our website and social media, and exclusive networking opportunities with industry leaders and investors.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-6 text-3xl lg:text-4xl font-bold">
            Ready to Apply?
          </h2>
          <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
            Showcase your innovation and contribution to Nepal's digital transformation. Apply now to the ICT Award.
          </p>
          <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}
