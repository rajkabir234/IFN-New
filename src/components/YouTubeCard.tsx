'use client';
// components/YouTubeCard.tsx
import React from 'react';
import { YouTubeVideo } from '@/data/media';

interface YouTubeCardProps {
  video: YouTubeVideo;
}

export default function YouTubeCard({ video }: YouTubeCardProps) {
  const formattedDate = new Date(video.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const fallbackImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
      {/* Video Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        {/* Play Button Overlay */}
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
            <svg className="h-8 w-8 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Date Metadata */}
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {formattedDate}
        </div>
        
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 dark:text-gray-100">
          {video.title}
        </h3>

        {/* View Button */}
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
        >
          Watch on YouTube
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3l14.29 10.29a1 1 0 0 1 0 1.42L5 25V3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
