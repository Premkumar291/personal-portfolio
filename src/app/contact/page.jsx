// Server Component — metadata exported for SEO.
// ContactPage component is "use client" (Framer Motion, Send button).
import ContactPage from '@/components/ContactPage';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Premkumar P. Contact me for freelance opportunities, full-stack software development projects, or collaborations.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}

