import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'The Global 100 | Sustainable Leadership Index | OTA Media',
  description:
    'Ranking the leaders of the world\'s most sustainable corporations. Discover 50 international executives shaping the future of sustainable business.',
  keywords:
    'sustainable leadership, corporate sustainability, global leaders, ESG, Corporate Knights Global 100',
  openGraph: {
    title: 'The Global 100 | Sustainable Leadership Index',
    description: 'Ranking the leaders of the world\'s most sustainable corporations.',
    type: 'website',
    url: 'https://global-100.otamediagroup.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
