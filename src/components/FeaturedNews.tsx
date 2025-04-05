import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: {
    url: string;
    alternativeText: string;
  };
  category: {
    name: string;
    slug: string;
  };
  publishedAt: string;
}

interface FeaturedNewsProps {
  news: NewsItem[];
}

export default function FeaturedNews({ news }: FeaturedNewsProps) {
  if (!news || news.length === 0) {
    return (
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Notícias em Destaque
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Nenhuma notícia em destaque no momento.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Notícias em Destaque
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div key={item.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.coverImage.url}
                    alt={item.coverImage.alternativeText || item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={`/categoria/${item.category.slug}`} className="text-sm font-medium text-primary-600">
                    {item.category.name}
                  </Link>
                  <Link href={`/noticia/${item.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-3 text-base text-gray-500">{item.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Data de publicação</span>
                    <p className="text-sm text-gray-500">
                      {new Date(item.publishedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 