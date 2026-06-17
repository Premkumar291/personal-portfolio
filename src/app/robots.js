// src/app/robots.js
// Next.js automatically serves this at /robots.txt
export default function robots() {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://premkumar.dev';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
