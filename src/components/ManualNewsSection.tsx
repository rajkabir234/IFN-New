'use client';
// components/ManualNewsSection.tsx
import React from 'react';
import { ManualNewsArticle } from '@/data/media';

interface ManualNewsSectionProps {
  articles: ManualNewsArticle[];
}

export default function ManualNewsSection({ articles }: ManualNewsSectionProps) {
  if (articles.length === 0) return null;

  const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Latest News Coverage
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Badge */}
            <div className="mb-3 inline-flex w-fit items-center gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {article.publisher}
              </span>
            </div>

            {/* Date */}
            <p className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {formattedDate(article.date)}
            </p>

            {/* Title */}
            <h3 className="line-clamp-3 text-lg font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {article.title}
            </h3>

            {/* Read More Link */}
            <div className="mt-auto inline-flex items-center gap-2 pt-4 font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
              Read More
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
