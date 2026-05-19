'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SubItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: SubItem[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'About IFN', href: '#about' },
      { label: 'Our Reach', href: '#reach' },
    ],
  },
  {
    label: 'Events',
    href: '#initiatives',
    children: [
      { label: 'Digital Conclaves', href: '#initiatives' },
      { label: 'Digital Nepal Conclave', href: '#initiatives' },
      { label: 'Digital Karnali Conclave', href: '#initiatives' },
      { label: 'Digital Madhesh Conclave', href: '#initiatives' },
      { label: 'ICT Award', href: '#initiatives' },
      { label: 'Digital Leadership Dialogue', href: '#initiatives' },
      { label: 'Pre-Budget ICT Discourse', href: '#initiatives' },
      { label: 'Nepal AI Summit', href: '#initiatives' },
    ],
  },
  {
    label: 'Initiatives',
    href: '#initiatives',
    children: [
      { label: 'Digital Samvad', href: '#initiatives' },
      { label: 'ICT Gyan', href: '#initiatives' },
      { label: 'Business Incubation Service', href: '#initiatives' },
      { label: 'Google Career Certification', href: '#initiatives' },
    ],
  },
  {
    label: 'Publications',
    href: '#publications',
    children: [
      { label: 'Event Reports', href: '#publications' },
      { label: 'Research Publication', href: '#publications' },
    ],
  },
  { label: 'News & Media', href: '#' },
  { label: 'Collaborations', href: '#collaborators' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const textColor = scrolled ? 'text-[#0E2557]' : 'text-white';

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="ICT Foundation Nepal"
            className="h-12 w-auto max-w-[160px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
              onMouseLeave={link.children ? handleDropdownLeave : undefined}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${textColor}`}
              >
                {link.label}
                {link.children && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[#0E2557] transition-colors hover:bg-gray-50 hover:text-primary"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-6 pt-24 pb-8">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-[#0E2557] transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-[#0E2557]/70 transition-colors hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
