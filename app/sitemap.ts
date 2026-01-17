import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://epicvibecoder.com'; // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more URLs if you have other pages like /blog, /projects/[slug], etc.
    // For a single page portfolio, the root is usually sufficient.
  ];
}
