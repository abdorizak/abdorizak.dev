import type { MetadataRoute } from 'next';

import { allReadableBlogs, sortBlogPostsByDate } from '@/utils/blog';
import { getDate } from '@/utils/date';
import { visibleProjects } from '@/utils/projects';

const today = ((): Date => {
  const d = new Date();
  // Somalia TimeZone (UTC+3)
  d.setUTCHours(d.getUTCHours() + 3);
  return d;
})();

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allReadableBlogs
    .filter((it) => !Boolean(it.link))
    .sort(sortBlogPostsByDate)
    .map((post) => ({
      url: `https://abdorizak.dev/blog/${post.slug}`,
      lastModified: getDate(post.date)?.toISOString().split('T')[0],
      priority: 0.6,
    }));

  const projects = visibleProjects.map((project) => ({
    url: `https://abdorizak.dev/projects/${project.slug}`,
    lastModified: today.toISOString().split('T')[0],
    priority: 0.7,
  }));

  const routes = [
    '',
    'about',
    'blog',
    'donate',
    'projects',
    'uses',
    'colophon',
  ].map((route) => ({
    url: `https://abdorizak.dev/${route}`,
    lastModified: today.toISOString().split('T')[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes, ...projects, ...blogs].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
