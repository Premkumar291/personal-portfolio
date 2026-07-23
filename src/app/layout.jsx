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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prem29.me';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Premkumar P | Full Stack Developer (MERN)',
    template: '%s | Premkumar P',
  },
  description:
    'Personal portfolio of Premkumar P — Full Stack Developer (MERN). Showcasing projects built with React, Node.js, MongoDB, Next.js, and modern web technologies.',
  keywords: [
    'Premkumar P',
    'Portfolio',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js Portfolio',
    'Web Developer',
  ],
  authors: [{ name: 'Premkumar P' }],
  creator: 'Premkumar P',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Premkumar P | Full Stack Developer (MERN)',
    description:
      'Explore the projects, skills, and full-stack web applications built by Premkumar P.',
    url: siteUrl,
    siteName: 'Premkumar P Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Premkumar P Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premkumar P | Full Stack Developer',
    description:
      'Explore the projects and skills of Premkumar P, a passionate Full Stack Developer.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'DjLD1eg2HHK3ZS6fpB2mQLtVR-02i4A1rf_C9EW1ljg',
  },
  icons: {
    icon: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Premkumar P',
  url: siteUrl,
  jobTitle: 'Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Node.js, Express, MongoDB, and Next.js.',
  knowsAbout: [
    'Web Development',
    'Full Stack Development',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Next.js',
    'Tailwind CSS',
  ],
};

/**
 * Root layout — Server Component.
 * Navbar and Footer are rendered here so they persist across navigations
 * without re-mounting, reducing unnecessary client work.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

