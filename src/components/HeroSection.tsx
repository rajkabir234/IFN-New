import Link from 'next/link';
import {
  FaUsers,
  FaRocket,
  FaHandshake,
  FaLandmark,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '2500+', label: 'Annual Participants', icon: FaUsers },
  { value: '400+', label: 'Startups Supported', icon: FaRocket },
  { value: '200+', label: 'Local Entrepreneurs', icon: FaHandshake },
  { value: '500+', label: 'Government Officials', icon: FaLandmark },
];

const initiatives = [
  { name: 'Digital Nepal Conclave', href: '#initiatives', color: 'from-blue-600 to-blue-800' },
  { name: 'Startup & Idea Fest', href: '#initiatives', color: 'from-red-500 to-red-700' },
  { name: 'Digital Karnali Conclave', href: '#initiatives', color: 'from-teal-500 to-teal-700' },
  { name: 'Digital Madhesh Conclave', href: '#initiatives', color: 'from-orange-500 to-orange-700' },
  { name: 'Digital Samvad', href: '#initiatives', color: 'from-purple-500 to-purple-700' },
  { name: 'ICT Award', href: '#initiatives', color: 'from-amber-500 to-amber-700' },
  { name: 'Digital Leadership Dialogue', href: '#initiatives', color: 'from-indigo-500 to-indigo-700' },
  { name: 'ICT Gyan', href: '#initiatives', color: 'from-emerald-500 to-emerald-700' },
];

const collaborators = [
  'MoCIT', 'DOIT', 'NTA', 'NITC', 'FNCCI', 'NAST', 'NAS-IT',
  'The Asia Foundation', 'Huawei', 'Nepal Rastra Bank', 'upGrad', 'InDrive',
];

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <img
          src="/images/hero-bg.jpg"
          alt="ICT Foundation Nepal"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero-overlay" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 backdrop-blur-sm">
            <span className="text-sm font-medium tracking-wide text-white/90">
              ICT Foundation Nepal
            </span>
          </div>
          <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
            Driving Nepal&apos;s
            <span className="block text-accent">Digital Transformation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            ICT Foundation Nepal partners with government, industry, and communities
            to build an inclusive digital future for every Nepali citizen.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#initiatives"
              className="group inline-flex items-center gap-2 rounded-lg gradient-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:brightness-110"
            >
              Explore Our Initiatives
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <div className="gradient-primary relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg leading-relaxed font-light text-white/95">
            ICT Foundation Nepal (IFN) is a profit-not-distributing organization that
            advances Nepal&apos;s digital transformation through policy-level planning,
            collaborative ICT initiatives, and grassroots capacity building — working
            across local, provincial, and national levels.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-b border-gray-100 bg-white py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-body-text/60">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Snapshot */}
      {/* <AnimatedSection className="bg-dots">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 section-divider" />
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-[32px]">Our Mission</h2>
          <p className="text-lg leading-[1.8] text-body-text/80">
            We leverage expertise in governance, digital transformation, education,
            leadership, and public policy to deliver meaningful, measurable change
            for Nepal&apos;s people.
          </p>
        </div>
      </AnimatedSection> */}

      {/* Featured Initiatives */}
      <AnimatedSection className="bg-surface" id="initiatives">
        <div className="mx-auto mb-4 section-divider" />
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
          Featured Initiatives
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body-text/60">
          From grassroots digital literacy campaigns to Nepal&apos;s largest technology conference
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((init) => (
            <Link
              key={init.name}
              href={init.href}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className={`relative h-32 bg-gradient-to-br ${init.color} p-5 flex items-end`}>
                <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white/10" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-white/5" aria-hidden="true" />
                <h3 className="relative text-lg font-bold leading-snug text-white">
                  {init.name}
                </h3>
              </div>
              <div className="flex flex-1 items-center p-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/50 transition-colors group-hover:text-primary">
                  Learn more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Collaborators Strip */}
      {/* <div className="border-y border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-body-text/40 uppercase">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {collaborators.map((name) => (
              <span
                key={name}
                className="rounded-full border border-gray-100 px-5 py-2 text-sm font-medium text-body-text/50 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
