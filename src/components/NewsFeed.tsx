// components/NewsFeed.tsx
import NewsCard from './NewsCard';
import { NewsArticle } from '@/data/types';

async function getAutomatedNews(): Promise<NewsArticle[]> {
  try {
    // Fetching live tech headlines automatically (No key required for this testing mirror)
    const res = await fetch(
      'https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json',
      { next: { revalidate: 3600 } } 
    );

    if (!res.ok) throw new Error('Failed to fetch automated news stream');

    const data = await res.json();

    // Map incoming API parameters smoothly into your layout's structure
    return data.articles.slice(0, 6).map((article: any, index: number) => ({
      id: `${index}-${article.publishedAt}`,
      title: article.title,
      thumbnail: article.urlToImage,
      source: article.source.name,
      url: article.url,
      date: article.publishedAt, 
    }));
  } catch (error) {
    console.error("Automation error:", error);
    return []; // Returns an empty state instead of crashing if the API has hiccups
  }
}

export default async function NewsFeed({ initialArticles }: { initialArticles?: NewsArticle[] } = {}) {
  const articles = initialArticles ?? (await getAutomatedNews());

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Unable to load automated feed at this time.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Automated Tech Stream
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}