import { Inter } from 'next/font/google';
import './globals.css';
import LayoutContent from './LayoutContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Welcome to my personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full m-0 p-0`}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
