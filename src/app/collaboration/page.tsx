import React from 'react';
import CollaboratorsGrid from '@/components/CollaboratorsGrid';
import { collaboratorsByCategory } from '@/data/collaborators';

export default function CollaborationPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Our Partners & Collaborators
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-100 sm:text-xl">
              ICT Foundation Nepal works with government bodies, industry leaders, and international organizations to drive digital transformation and innovation across Nepal.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-400/20" />
          <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-blue-400/20" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        {/* About Collaboration */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Building Stronger Digital Nepal
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our collaborations span across government agencies, private sector organizations, and international institutions. Together, we work to address Nepal's digital challenges and unlock opportunities for growth and innovation in the ICT sector.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Through strategic partnerships, we facilitate knowledge exchange, promote best practices, and develop solutions that benefit the entire digital ecosystem.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Whether through policy advocacy, technical capacity building, or industry collaboration, our partners play a vital role in advancing digital transformation. We are committed to fostering long-term relationships that create sustainable impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                If you're interested in collaborating with ICT Foundation Nepal, we'd love to hear from you. Together, we can create positive change.
              </p>
            </div>
          </div>
        </div>

        {/* Collaborators by Category */}
        <div>
          <h2 className="mb-16 text-3xl font-bold text-gray-900 dark:text-white">
            Our Partners
          </h2>

          {/* Government Bodies */}
          {collaboratorsByCategory.government.length > 0 && (
            <CollaboratorsGrid
              collaborators={collaboratorsByCategory.government}
              title="🏛️ Government Bodies"
            />
          )}

          {/* Industry & Professional Associations */}
          {collaboratorsByCategory.industry.length > 0 && (
            <CollaboratorsGrid
              collaborators={collaboratorsByCategory.industry}
              title="🏢 Industry & Professional Associations"
            />
          )}

          {/* International Partners */}
          {collaboratorsByCategory.international.length > 0 && (
            <CollaboratorsGrid
              collaborators={collaboratorsByCategory.international}
              title="🌍 International Partners"
            />
          )}

          {/* NGOs & Non-Profits */}
          {collaboratorsByCategory.ngo.length > 0 && (
            <CollaboratorsGrid
              collaborators={collaboratorsByCategory.ngo}
              title="❤️ NGOs & Non-Profit Organizations"
            />
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center dark:border-blue-900 dark:from-blue-900/20 dark:to-blue-800/20 sm:p-12">
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Interested in Partnership?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-700 dark:text-gray-300">
            We're always looking for organizations that share our vision of advancing digital transformation in Nepal.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
          >
            Get In Touch
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
