import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/'],
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}