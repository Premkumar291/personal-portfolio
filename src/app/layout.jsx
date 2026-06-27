import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

// next/font: fonts are self-hosted at build time — zero layout shift, no external request
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Premkumar P',
  description:
    'Personal portfolio of Premkumar P — Full Stack Developer (MERN). Showcasing projects built with React, Node.js, MongoDB, and modern web technologies.',
  keywords: ['Premkumar P', 'Portfolio', 'Full Stack Developer', 'MERN', 'React', 'Node.js'],
  authors: [{ name: 'Premkumar P' }],
  openGraph: {
    title: 'Premkumar P',
    description:
      'Explore the projects and skills of Premkumar P, a passionate Full Stack Developer.',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premkumar P',
    description:
      'Explore the projects and skills of Premkumar P, a passionate Full Stack Developer.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
  },
};

/**
 * Root layout — Server Component.
 * Navbar and Footer are rendered here so they persist across navigations
 * without re-mounting, reducing unnecessary client work.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
