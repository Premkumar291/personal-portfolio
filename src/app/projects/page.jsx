// Server Component — metadata exported for SEO.
// AllProjects renders the full project list with animations.
import AllProjects from '@/components/AllProjects';

export const metadata = {
  description:
    'Browse all projects built by Premkumar P — full-stack web apps, SaaS tools, and more using the MERN stack.',
};

export default function ProjectsRoute() {
  return <AllProjects />;
}
