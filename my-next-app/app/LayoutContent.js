'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function LayoutContent({ children }) {
  return (
    <div className={`${inter.className} flex flex-col min-h-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}>
      <Providers>
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <nav className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent">MyPortfolio</Link>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-sm font-medium bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80">
                  About
                </Link>
                <Link href="/contact" className="text-sm font-medium bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-1">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs">© {new Date().getFullYear()} My Portfolio</p>
          </div>
        </footer>
      </Providers>
    </div>
  );
}
