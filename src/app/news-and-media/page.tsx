import React from 'react';
import ManualNewsSection from '@/components/ManualNewsSection';
import MediaSection from '@/components/MediaSection';
import NewsMediaHero from '@/components/NewsMediaHero';
import { manualNewsArticles, youtubeVideos } from '@/data/media';

export default async function NewsAndMediaPage() {
  const latestNews = manualNewsArticles.length > 0 ? manualNewsArticles[0] : null;
  const latestVideo = youtubeVideos.length > 0 ? youtubeVideos[0] : null;

  return (
    <main>
      {/* Hero Section */}
      <NewsMediaHero latestNews={latestNews} latestVideo={latestVideo} />

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Manual News Coverage Section */}
        {manualNewsArticles.length > 0 && (
          <ManualNewsSection articles={manualNewsArticles} />
        )}

        {/* Video Media Section */}
        {youtubeVideos.length > 0 && (
          <MediaSection videos={youtubeVideos} />
        )}
      </div>
    </main>
  );
}
