'use client';
// components/NewsCard.tsx
import React from 'react';
import { NewsArticle } from '@/data/types';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  // Automatically format the raw date string into a readable format
  const formattedDate = article.date 
    ? new Date(article.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Recent';

  // Fallback image if the news article doesn't have a thumbnail
  const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80";

  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={article.thumbnail || fallbackImage}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Handle broken image links gracefully
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Source & Date Metadata */}
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
          <span className="text-blue-600 dark:text-blue-400">
            {article.source}
          </span>
          <span className="text-gray-500 dark:text-gray-400 normal-case">
            {formattedDate}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {article.title}
        </h3>
      </div>
    </a>
  );
}