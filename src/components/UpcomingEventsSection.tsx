'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const upcomingEvents = [
  {
    id: 1,
    title: 'Nepal AI Summit',
    description: 'Nepal\'s largest annual digital conference uniting ministers, government officials, IT professionals, and entrepreneurs to advance the Digital Nepal Framework. Join 1000+ participants and 60+ international speakers.',
    date: 'March 15-17, 2025',
    location: 'The Plaza, Pulchowk, Lalitpur',
    thumbnail: '/images/events/nas-2025.jpg',
    href: '/nepal-ai-summit',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'ICT Award 2026 ',
    description: 'Regional digital transformation initiative organized in collaboration with Karnali Province Government. Focus on aligning local digital policies with national strategies and fostering provincial digital growth.',
    date: 'April 10-12, 2025',
    location: 'Birendranagar, Surkhet',
    thumbnail: '/images/ICTAward.JPG',
    href: '/ict-award',
    color: 'from-teal-600 to-teal-800',
  },
];

export default function UpcomingEventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEvent = upcomingEvents[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % upcomingEvents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  return (
    <AnimatedSection id="upcoming-events" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Upcoming Events
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        Join us at our upcoming digital transformation initiatives across Nepal. Each event brings together leaders, innovators, and stakeholders to drive Nepal's digital future.
      </p>

      {/* Event Card */}
      <div className="mb-12">
        <div className="grid gap-8 md:gap-10 items-center md:grid-cols-5">
          {/* Thumbnail */}
          <div className={`relative h-64 md:h-auto md:col-span-2 rounded-2xl overflow-hidden bg-gradient-to-br ${currentEvent.color} aspect-[3/2]`}>
            {currentEvent.thumbnail ? (
              <Image
                src={currentEvent.thumbnail}
                alt={currentEvent.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📅</div>
                  <p className="text-lg font-semibold">{currentEvent.title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">{currentEvent.date}</span>
              </div>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold text-body-text">
                {currentEvent.title}
              </h3>
              <p className="mb-3 text-sm text-body-text/60 font-medium">
                📍 {currentEvent.location}
              </p>
              <p className="mb-8 text-base leading-relaxed text-body-text/70">
                {currentEvent.description}
              </p>
            </div>

            <Link
              href={currentEvent.href}
              className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110 w-fit"
            >
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
          aria-label="Previous event"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
          aria-label="Next event"
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </AnimatedSection>
  );
}
