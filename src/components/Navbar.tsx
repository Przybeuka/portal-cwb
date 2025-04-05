'use client';

import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Últimas Notícias', href: '/ultimas-noticias' },
  { name: 'Tempo', href: '/tempo' },
];

export default function Navbar() {
  return (
    <nav className="bg-[#002B4A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Links de navegação */}
            <div className="hidden lg:flex lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Portal CWB
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Links de navegação móvel */}
            <div className="flex lg:hidden space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 