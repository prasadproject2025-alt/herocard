const SITE_URL = "https://campuspe.com";

// Only the homepage exists today. Add job/college/company entries here
// once those routes are built — do not list URLs that don't resolve.
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
