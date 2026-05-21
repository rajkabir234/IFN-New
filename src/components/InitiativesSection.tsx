 'use client';

import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const initiatives = [
  {
    title: 'Digital Nepal Conclave (2022–2025)',
    description:
      "Nepal's largest annual digital conference unites ministers, government officials, IT professionals, entrepreneurs, and academics to advance the Digital Nepal Framework. Each edition focuses on a forward-looking theme, bringing together 15+ international keynote speakers alongside hundreds of national delegates.",
    website: 'digitalconclave.org',
    href: 'https://digitalconclave.org',
    logo: 'digital-nepal-logo.png',
    accent: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Digital Samvad (1.0–4.0)',
    description:
      'A multi-edition dialogue series aligning stakeholders with the Digital Nepal vision. Beginning as a virtual initiative during Nepal\'s first lockdown, it grew into province-level physical gatherings — Digital Pradesh Samvad — across all seven provinces.',
    website: 'digitalsamvad.org',
    href: 'https://digitalsamvad.org',
    logo: 'digital-samvad.png',
    accent: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Startup & Idea Fest (2019–Present)',
    description:
      'An annual, province-wide startup showcase that has grown from a regional pilot to a national movement spanning all seven provinces. Shortlisted startups compete in Kathmandu finals featuring bootcamps, mentoring, exhibitions, and the coveted ICT Award.',
    website: 'startupnepal.org',
    href: 'https://startupnepal.org',
    logo: 'startup-idea-fest.png',
    accent: 'from-red-500 to-red-700',
    stats: '15,000+ attendees · 100+ startups showcased',
  },
  {
    title: 'Digital Karnali Conclave (2024–2025)',
    description:
      'Organized in collaboration with the Karnali Province Government to align local digital policies with national strategies. The 2025 edition in Birendranagar, Surkhet drew 500+ attendees and 50+ expert speakers.',
    website: 'digitalkarnali.org',
    href: 'https://digitalkarnali.org',
    logo: 'digital-karnali.png',
    accent: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Digital Madhesh Conclave (2025)',
    description:
      'The inaugural edition, held in Bardibas, Mahottari, marked a significant step toward advancing Madhesh Province\'s digital agenda. Co-organized with the Ministry of Home Affairs, Communication & Law.',
    website: 'madhesh.digital',
    href: 'https://madhesh.digital',
    logo: 'digital-madhesh.png',
    accent: 'from-orange-500 to-orange-700',
  },
  {
    title: 'ICT Gyan',
    description:
      'A digital literacy program that promotes technology education in native languages across Nepal, empowering students, local communities, and government representatives. 15 sessions conducted nationwide to date.',
    href: '#initiatives',
    logo: 'ict-gyan.png',
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Digital Literacy Campaign — Nagarik App (2024)',
    description:
      'Implemented across all seven provinces through 15 physical sessions, this campaign promotes citizen-centric digital services and drives public adoption of the Government of Nepal\'s Nagarik App.',
    href: '#initiatives',
    logo: 'nagarik-campaign.png',
    accent: 'from-cyan-500 to-cyan-700',
  },
  {
    title: 'Digital Leadership Dialogue 1.0 & 2.0',
    description:
      'Two physical and seven virtual sessions organized ahead of the 2082 elections, engaging key stakeholders in conversations on digital policy and leadership.',
    href: '#initiatives',
    logo: 'digital-leadership.png',
    accent: 'from-indigo-500 to-indigo-700',
  },
];

const initiativeLogos = initiatives.map((item) => ({
  title: item.title,
  href: item.href,
  initials: item.title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase(),
  color: item.accent,
  external: item.website !== undefined,
  logo: (item as any).logo,
}));

const conclaveHistory = [
  {
    year: '2022',
    theme: 'Digital Nepal Conclave for Digital Transformation',
    venue: 'The Soaltee Kathmandu',
    highlight: "Inaugurated by Nepal's Vice President; 60+ ICT speakers",
  },
  {
    year: '2023',
    theme: 'Fostering Digitally Saksham Nepal',
    venue: 'The Soaltee Kathmandu',
    highlight: 'PM Prachanda; 800+ participants',
  },
  {
    year: '2024',
    theme: 'Harmonizing Digitalization & Development',
    venue: 'Kathmandu Marriott Hotel',
    highlight: 'PM Prachanda; 1,000+ participants',
  },
  {
    year: '2025',
    theme: 'Digital Synergy: Transforming Governance, Economy & Society',
    venue: 'The Plaza, Pulchowk, Lalitpur',
    highlight: 'PM of Nepal as chief guest',
  },
];

export default function InitiativesSection() {
  // Duplicate logos and use a CSS marquee that translates by 50% (one copy)
  const doubled = initiativeLogos.concat(initiativeLogos);

  const durationSeconds = Math.max(12, initiativeLogos.length * 6);

  return (
    <AnimatedSection id="initiatives" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Programs & Initiatives
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        From grassroots digital literacy campaigns to Nepal&apos;s largest technology conference,
        our initiatives span every province and reach every level of society.
      </p>

      <div className="mb-14 overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-5">
          <h3 className="text-lg font-semibold text-body-text">Featured initiative logos</h3>
          <p className="mt-1 text-sm text-body-text/60">
            Scroll through the logos below and click to visit the initiative website or learn more.
          </p>
        </div>

        <div className="overflow-hidden px-6 py-6">
          <div
            className="ifn-marquee relative"
            aria-hidden={false}
          >
            <div
              className="ifn-marquee-track flex"
              style={{ animation: `ifn-scroll ${durationSeconds}s linear infinite` }}
            >
              {doubled.map((item, idx) => (
                <a
                  key={item.title + '-' + idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-label={item.title}
                  className="w-screen flex-none flex items-center justify-center"
                >
                  {item.logo ? (
                    <div className="h-28 w-3/4 flex items-center justify-center">
                      <Image
                        src={`/images/${item.logo}`}
                        alt={item.title}
                        width={520}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`h-28 w-28 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl font-bold text-white`}>{item.initials}</div>
                  )}
                </a>
              ))}
            </div>
          </div>
          <style>{`
            .ifn-marquee-track { gap: 1rem; }
            .ifn-marquee-track > a { flex: 0 0 100vw; }
            @keyframes ifn-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
        </div>
      </div>

      {/* Digital Nepal Conclave History Table */}
      {/* <div className="mb-14 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="gradient-primary px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <FaExternalLinkAlt className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Digital Nepal Conclave
              </h3>
              <p className="text-sm text-white/70">Nepal&apos;s Flagship Annual Digital Conference</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/80">
                <th className="px-6 py-4 font-semibold text-body-text/60 text-xs tracking-wider uppercase">Year</th>
                <th className="px-6 py-4 font-semibold text-body-text/60 text-xs tracking-wider uppercase">Theme</th>
                <th className="hidden px-6 py-4 font-semibold text-body-text/60 text-xs tracking-wider uppercase md:table-cell">Venue</th>
                <th className="hidden px-6 py-4 font-semibold text-body-text/60 text-xs tracking-wider uppercase lg:table-cell">Highlight</th>
              </tr>
            </thead>
            <tbody>
              {conclaveHistory.map((row, i) => (
                <tr key={row.year} className={`border-b border-gray-50 transition-colors hover:bg-primary/[0.02] ${i % 2 === 1 ? 'bg-gray-50/40' : ''}`}>
                  <td className="px-6 py-4">
                    <span className="inline-flex h-9 w-14 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-white">
                      {row.year}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-body-text">{row.theme}</td>
                  <td className="hidden px-6 py-4 text-body-text/60 md:table-cell">{row.venue}</td>
                  <td className="hidden px-6 py-4 text-body-text/60 lg:table-cell">{row.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {initiatives.map((init, i) => (
          <a
            key={init.title}
            href={init.href}
            target={init.website ? '_blank' : undefined}
            rel={init.website ? 'noopener noreferrer' : undefined}
            aria-label={init.title}
            className="card-hover group flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm p-6"
          >
            {init.logo ? (
              <div className="h-20 w-full flex items-center justify-center">
                <Image
                  src={`/images/${init.logo}`}
                  alt={init.title}
                  width={320}
                  height={120}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${init.accent} flex items-center justify-center text-2xl font-bold text-white`}>{String(i + 1)}</div>
            )}
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}
