import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Welcome to my personal portfolio website',};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <header className="bg-gray-900 text-white">
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">MyPortfolio</Link>
                <div className="space-x-6">
                  <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-6 text-center">
              <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
