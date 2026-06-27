// Server Component — no "use client" needed.
// Hero and Projects are Client Components imported below; that's valid.
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export const metadata = {
  description:
    'Premkumar P — Full Stack Developer (MERN). Explore my work, projects, and skills.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
