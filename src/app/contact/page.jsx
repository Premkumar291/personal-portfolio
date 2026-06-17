// Server Component — metadata exported for SEO.
// ContactPage component is "use client" (Framer Motion, Send button).
import ContactPage from '@/components/ContactPage';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Premkumar P. Send a message through the contact form or reach out via email.',
};

export default function ContactRoute() {
  return <ContactPage />;
}
