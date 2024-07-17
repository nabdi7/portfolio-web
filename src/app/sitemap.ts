import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.najibabdi.me/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.najibabdi.me/projects',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.najibabdi.me/research',
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: 'https://www.najibabdi.me/blog',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}