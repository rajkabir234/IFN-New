'use client';
// components/MediaSection.tsx
import React from 'react';
import YouTubeCard from './YouTubeCard';
import { YouTubeVideo } from '@/data/media';

interface MediaSectionProps {
  videos: YouTubeVideo[];
}

export default function MediaSection({ videos }: MediaSectionProps) {
  if (videos.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Video Media
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <YouTubeCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
