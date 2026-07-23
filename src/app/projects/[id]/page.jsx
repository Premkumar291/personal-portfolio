// Server Component — enables static generation (SSG) via generateStaticParams.
// All project detail pages are pre-rendered at build time → zero server latency.
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetails from '@/components/ProjectDetails';

/**
 * Pre-generate a static HTML page for every project at build time.
 * New projects added to projects.js are automatically included in the next build.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

/**
 * Dynamic per-project metadata for SEO — title and description are tailored
 * to each project so search engines index meaningful content.
 */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Premkumar P`,
      description: project.description,
      images: [project.image],
    },
  };
}

/**
 * The page itself is a Server Component:
 * - Data lookup (projects.find) runs on the server / at build time
 * - The result is passed as a plain prop to the Client Component below
 * - This avoids shipping all project data to the client just for a lookup
 */
export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
