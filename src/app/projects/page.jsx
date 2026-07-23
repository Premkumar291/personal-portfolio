// Server Component — metadata exported for SEO.
// AllProjects renders the full project list with animations.
import AllProjects from '@/components/AllProjects';

export const metadata = {
  title: 'Projects & Portfolio',
  description:
    'Browse all web applications built by Premkumar P — featuring full-stack projects, SaaS tools, and MERN stack applications.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsRoute() {
  return <AllProjects />;
}

