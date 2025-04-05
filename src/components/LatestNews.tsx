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

interface LatestNewsProps {
  news: NewsItem[];
}

export default function LatestNews({ news }: LatestNewsProps) {
  if (!news || news.length === 0) {
    return (
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Últimas Notícias
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Nenhuma notícia disponível no momento.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Últimas Notícias
          </h2>
        </div>
        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {news.map((item) => (
            <article key={item.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.coverImage.url}
                    alt={item.coverImage.alternativeText || item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={item.publishedAt} className="text-gray-500">
                    {new Date(item.publishedAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <Link
                    href={`/categoria/${item.category.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {item.category.name}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/noticia/${item.slug}`}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 