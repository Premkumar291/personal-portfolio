// Server Component — no "use client" needed.
// Hero and Projects are Client Components imported below; that's valid.
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export const metadata = {
  title: 'Full Stack Developer (MERN)',
  description:
    'Premkumar P — Full Stack Developer (MERN). Explore my web applications, featured projects, and software development skills.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

