import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import EventHero from '@/components/EventHero';
import { getEventBySlug, getAllEventSlugs, events } from '@/data/events';

interface EventPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | ICT Foundation Nepal`,
    description: event.description,
  };
}

export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({
    slug,
  }));
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventHero event={event} />

      {/* Event Content Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#0E2557] lg:text-4xl">
              Event Overview
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {event.content}
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">
                Information
              </h3>
              <p className="text-sm text-gray-600">
                Learn more about the event schedule, speakers, and key details.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">
                Registration
              </h3>
              <p className="text-sm text-gray-600">
                Register for the event and secure your spot. Limited seats available.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">
                Contact Us
              </h3>
              <p className="text-sm text-gray-600">
                Have questions? Reach out to our team for more information.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-gradient-to-r from-[#0E2557] to-[#1a3a7a] p-8 text-center text-white lg:p-12">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Join Us?
            </h3>
            <p className="mb-6 text-lg text-gray-200">
              Secure your spot at this exclusive event and connect with leaders and innovators.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Related Events Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0E2557] lg:text-4xl">
            Other Events
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((e) => e.slug !== params.slug)
              .slice(0, 3)
              .map((relatedEvent) => (
                <a
                  key={relatedEvent.slug}
                  href={`/events/${relatedEvent.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:border-primary"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#0E2557] group-hover:text-primary transition-colors">
                    {relatedEvent.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {relatedEvent.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Learn More
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
