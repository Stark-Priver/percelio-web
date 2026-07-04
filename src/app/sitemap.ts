import { MetadataRoute } from 'next';

const baseUrl = 'https://pacelio.incpritech.com';

const pages = [
  '',
  '/about',
  '/api-docs',
  '/blog',
  '/blog/ai-last-mile-delivery',
  '/blog/east-africa-logistics-boom',
  '/blog/pacelio-launch-mbeya',
  '/careers',
  '/changelog',
  '/contact',
  '/cookies',
  '/download',
  '/features',
  '/how-it-works',
  '/investors',
  '/partnerships',
  '/press',
  '/privacy',
  '/support',
  '/terms',
  '/solutions/businesses',
  '/solutions/couriers',
  '/solutions/enterprise',
  '/solutions/logistics',
  '/solutions/users',
];

const externalPages = [
  'https://app.pacelio.incpritech.com',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const internal = pages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1.0 : path.startsWith('/blog') || path === '/features' || path === '/solutions/businesses' ? 0.8 : 0.6,
  }));

  const external = externalPages.map(url => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...internal, ...external];
}
