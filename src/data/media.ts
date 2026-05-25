// Manual news articles and media entries
export interface ManualNewsArticle {
  id: string;
  title: string;
  date: string; // ISO format or readable format
  thumbnail: string;
  publisher: string;
  url: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string; // YouTube video ID
  thumbnail: string;
  date: string;
}

// Manual news articles - Add your news links here
export const manualNewsArticles: ManualNewsArticle[] = [
  {
    id: 'news-001',
    title: 'ICT Foundation Nepal Makes Headlines in Tech Industry',
    date: '2026-04-25',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-adf4e9a5160f?auto=format&fit=crop&w=1200&q=80',
    publisher: 'Technology Khabar',
    url: 'https://www.technologykhabar.com/2026/04/25/237755/',
  },
  // Add more news articles here following the same structure
  // Note: You can omit the thumbnail field for news articles now, they'll display text-only
];

// YouTube videos - Add your YouTube video links here
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'video-001',
    title: 'ICT Foundation Nepal - 2026 Digital Initiative',
    videoId: 'P_zx9TtKRvE',
    thumbnail: 'https://img.youtube.com/vi/P_zx9TtKRvE/maxresdefault.jpg',
    date: '2026-04-20',
  },
  // Add more YouTube videos here following the same structure
];

// Helper function to extract YouTube video ID from URL
export function extractYouTubeId(url: string): string {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : '';
}
