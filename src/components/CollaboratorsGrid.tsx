'use client';
// components/CollaboratorsGrid.tsx
import React from 'react';
import { Collaborator } from '@/data/collaborators';

interface CollaboratorsGridProps {
  collaborators: Collaborator[];
  title?: string;
}

export default function CollaboratorsGrid({ collaborators, title }: CollaboratorsGridProps) {
  const fallbackImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80';

  return (
    <div className="mb-12">
      {title && (
        <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {collaborators.map((collaborator) => (
          <a
            key={collaborator.id}
            href={collaborator.website || '#'}
            target={collaborator.website ? '_blank' : undefined}
            rel={collaborator.website ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-8"
          >
            {/* Logo Container */}
            <div className="relative h-24 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 sm:h-32">
              <img
                src={collaborator.logo || fallbackImage}
                alt={collaborator.name}
                className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>

            {/* Name */}
            <p className="mt-4 line-clamp-2 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {collaborator.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
