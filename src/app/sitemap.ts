import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://najibabdi.me',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://najibabdi.me/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
        url: 'https://najibabdi.me/projects',
        lastModified: new Date(),
        priority: 0.6,
      },
    {
      url: 'https://najibabdi.me/research',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
        url: 'https://najibabdi.me/blog',
        lastModified: new Date(),
        priority: 0.5,
      },
  ]
}