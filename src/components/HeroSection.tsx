import Link from 'next/link';
import {
  FaUsers,
  FaRocket,
  FaHandshake,
  FaLandmark,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import SlideshowHero from './SlideshowHero';

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

const slides = [
  {
    id: 'hero-1',
    src: '/images/hero-bg.jpg',
    alt: 'ICT Foundation Nepal event',
  },
  {
    id: 'hero-2',
    src: '/images/team-hero.svg',
    alt: 'Team collaborating on digital strategy',
  },
  {
    id: 'hero-3',
    src: '/images/research-cover.jpg',
    alt: 'Digital development in Nepal',
  },
];

export default function HeroSection() {
  return (
    <>
      <SlideshowHero
        label="ICT Foundation Nepal"
        title="Driving Nepal’s Digital Transformation"
        description="ICT Foundation Nepal partners with government, industry, and communities to build an inclusive digital future for every Nepali citizen."
        slides={slides}
        actions={[
          { label: 'Explore Our Initiatives', href: '/#initiatives', variant: 'primary' },
          { label: 'Partner With Us', href: '/#contact', variant: 'secondary' },
        ]}
      />

      {/* Introduction Block */}
      <div className="gradient-primary relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg leading-relaxed font-light text-white/95">
            <b>ICT Foundation Nepal</b>, a non-profit organization aiming to push forward the country’s digital transformation mission through policy-level planning, discussions and ICT initiatives execution in collaboration with central government bodies at local, provincial, and national levels.
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

      {/* Featured Initiatives */}
      {/* <AnimatedSection className="bg-surface" id="initiatives">
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
      </AnimatedSection> */}
    </>
  );
}
