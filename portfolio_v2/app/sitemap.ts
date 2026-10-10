import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arieljulytraje.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: `${baseUrl}/#projects`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${baseUrl}/#certificates`,
      lastModified: new Date(),
      priority: 0.8,
    },
    { url: `${baseUrl}/#about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/#skills`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/#contact`, lastModified: new Date(), priority: 0.7 },
  ];
}
