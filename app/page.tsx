import Link from 'next/link';
import { yogaPositions } from '../data/yogaPositions';
import { newsArticles } from '../data/newsArticles';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Yoga Wisdom Blog</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Yoga Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yogaPositions.slice(0, 3).map((position) => (
            <div key={position.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={position.imageUrl} alt={position.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{position.name}</h3>
                <p className="text-gray-600 line-clamp-3">{position.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/poses" className="text-blue-500 hover:underline">View all poses</Link>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <div className="space-y-4">
          {newsArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
              <Link href={`/news/${article.id}`} className="text-blue-500 hover:underline">Read more</Link>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/news" className="text-blue-500 hover:underline">View all news</Link>
        </div>
      </section>
    </div>
  );
}