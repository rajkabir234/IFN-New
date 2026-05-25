'use client';
// components/NewsMediaHero.tsx
import React from 'react';
import { ManualNewsArticle, YouTubeVideo } from '@/data/media';

interface NewsMediaHeroProps {
  latestNews: ManualNewsArticle | null;
  latestVideo: YouTubeVideo | null;
}

export default function NewsMediaHero({ latestNews, latestVideo }: NewsMediaHeroProps) {
  // Choose image: prefer latest video thumbnail, then latest news thumbnail, otherwise none
  const fallbackImage = '';
  const imageUrl = latestVideo?.thumbnail || latestNews?.thumbnail || fallbackImage;

  // If no image available, still render hero with black translucent background
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-96 w-full overflow-hidden sm:h-[500px] lg:h-[600px]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Featured media"
            className="h-full w-full object-cover"
            onError={(e) => {
              // if image fails, fall back to black background (handled below)
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="h-full w-full bg-black/80" />
        )}

        {/* Black translucent fallback & gradient to ensure text contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content Overlay: heading and short description */}
      <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl text-white">
          <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">News & Media</h1>
          <p className="text-lg text-white/90">Latest announcements, press coverage, and media from ICT Foundation Nepal.</p>
        </div>
      </div>
    </section>
  );
}
