// Server Component — metadata is statically exported for SEO.
// AboutPage component itself is "use client" (Framer Motion animations).
import AboutPage from '@/components/AboutPage';

export const metadata = {
  title: 'About Me',
  description:
    'Learn about Premkumar P — a Full Stack Developer (MERN) with expertise in React, Node.js, MongoDB, Express, and modern web software engineering.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}

