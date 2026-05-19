import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const initiatives = [
  {
    title: 'Digital Nepal Conclave (2022–2025)',
    description:
      "Nepal's largest annual digital conference unites ministers, government officials, IT professionals, entrepreneurs, and academics to advance the Digital Nepal Framework. Each edition focuses on a forward-looking theme, bringing together 15+ international keynote speakers alongside hundreds of national delegates.",
    website: 'digitalconclave.org',
    accent: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Digital Samvad (1.0–4.0)',
    description:
      'A multi-edition dialogue series aligning stakeholders with the Digital Nepal vision. Beginning as a virtual initiative during Nepal\'s first lockdown, it grew into province-level physical gatherings — Digital Pradesh Samvad — across all seven provinces.',
    website: 'digitalsamvad.org',
    accent: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Startup & Idea Fest (2019–Present)',
    description:
      'An annual, province-wide startup showcase that has grown from a regional pilot to a national movement spanning all seven provinces. Shortlisted startups compete in Kathmandu finals featuring bootcamps, mentoring, exhibitions, and the coveted ICT Award.',
    website: 'startupnepal.org',
    accent: 'from-red-500 to-red-700',
    stats: '15,000+ attendees · 100+ startups showcased',
  },
  {
    title: 'Digital Karnali Conclave (2024–2025)',
    description:
      'Organized in collaboration with the Karnali Province Government to align local digital policies with national strategies. The 2025 edition in Birendranagar, Surkhet drew 500+ attendees and 50+ expert speakers.',
    website: 'digitalkarnali.org',
    accent: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Digital Madhesh Conclave (2025)',
    description:
      'The inaugural edition, held in Bardibas, Mahottari, marked a significant step toward advancing Madhesh Province\'s digital agenda. Co-organized with the Ministry of Home Affairs, Communication & Law.',
    website: 'madhesh.digital',
    accent: 'from-orange-500 to-orange-700',
  },
  {
    title: 'ICT Gyan',
    description:
      'A digital literacy program that promotes technology education in native languages across Nepal, empowering students, local communities, and government representatives. 15 sessions conducted nationwide to date.',
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Digital Literacy Campaign — Nagarik App (2024)',
    description:
      'Implemented across all seven provinces through 15 physical sessions, this campaign promotes citizen-centric digital services and drives public adoption of the Government of Nepal\'s Nagarik App.',
    accent: 'from-cyan-500 to-cyan-700',
  },
  {
    title: 'Digital Leadership Dialogue 1.0 & 2.0',
    description:
      'Two physical and seven virtual sessions organized ahead of the 2082 elections, engaging key stakeholders in conversations on digital policy and leadership.',
    accent: 'from-indigo-500 to-indigo-700',
  },
];

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

      {/* All Initiatives */}
      <div className="grid gap-6 md:grid-cols-2">
        {initiatives.map((init, i) => (
          <div
            key={init.title}
            className="card-hover group relative flex overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            {/* Left accent side */}
            <div className={`relative flex w-20 shrink-0 flex-col items-center justify-center bg-gradient-to-br ${init.accent} py-6`}>
              <div className="absolute inset-0 bg-white/5" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/10" aria-hidden="true" />
              <span className="relative text-2xl font-extrabold text-white/90">{String(i + 1).padStart(2, '0')}</span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center p-6">
              <h3 className="mb-2 text-lg font-bold text-body-text transition-colors group-hover:text-primary">{init.title}</h3>
              <p className="text-sm leading-relaxed text-body-text/60">{init.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {init.stats && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {init.stats}
                  </span>
                )}
                {init.website && (
                  <a
                    href={`https://${init.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/50 transition-colors hover:text-primary"
                  >
                    <FaGlobe className="h-3 w-3" />
                    {init.website}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
