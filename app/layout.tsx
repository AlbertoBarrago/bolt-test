import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoga Wisdom Blog',
  description: 'Explore yoga poses, techniques, and philosophy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Yoga Wisdom</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/poses" className="hover:text-gray-300">Poses</Link></li>
              <li><Link href="/news" className="hover:text-gray-300">News</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Yoga Wisdom Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}