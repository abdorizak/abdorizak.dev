import { defineCollection, s } from 'velite';

import { getBlurData } from '../rehype/blur';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const projects = defineCollection({
  name: 'Project',
  pattern: 'projects.yml',
  schema: s
    .object({
      order: s.number().min(0),
      name: s.string(),
      description: s.string(),
      icon: s.string(),
      preview: s.string().optional(),
      url: s.string().url(),
      color: s.string().regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')),
      darkColor: s
        .string()
        .regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$'))
        .optional(),
      repo: s.string().optional(),
      owner: s.string().optional(),
      stack: s.array(s.string()).optional(),
      invertOnDark: s.boolean().optional().default(false),
      hide: s.boolean().optional().default(false),
      // Case-study fields (all optional — pages degrade gracefully without them)
      slug: s.string().optional(),
      category: s.string().optional(),
      year: s.string().optional(),
      role: s.string().optional(),
      live: s.string().url().optional(),
      longDescription: s.string().optional(),
      highlights: s.array(s.string()).optional(),
      // Extra action buttons (App Store, Google Play, pub.dev, …). `icon` is a
      // keyword resolved on the page: appstore | googleplay | pub | web.
      links: s
        .array(
          s.object({
            label: s.string(),
            url: s.string().url(),
            icon: s.string().optional(),
          }),
        )
        .optional(),
      // Either a bare image path, or { src, group, caption } for labelled
      // galleries (e.g. group screenshots by "Mobile" / "Website" / "Portal").
      screenshots: s
        .array(
          s.union([
            s.string(),
            s.object({
              src: s.string(),
              group: s.string().optional(),
              caption: s.string().optional(),
            }),
          ]),
        )
        .optional(),
    })
    .transform(async (data) => {
      const screenshots = data.screenshots
        ? await Promise.all(
            data.screenshots.map(async (shot) => {
              const item = typeof shot === 'string' ? { src: shot } : shot;
              const path = item.src.startsWith('http')
                ? item.src
                : `/media/projects/${item.src}`;
              return { ...item, meta: await getBlurData(path) };
            }),
          )
        : undefined;
      return {
        ...data,
        slug: data.slug || slugify(data.name),
        iconMeta: await getBlurData(`/media/projects/${data.icon}`),
        screenshots,
      };
    }),
});
