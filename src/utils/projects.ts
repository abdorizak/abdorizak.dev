import { projects as allProjects, type Project } from '@/content';

export const sortedProjects: Array<Project> = [...allProjects].sort(
  (a, b) => a.order - b.order,
);

export const visibleProjects: Array<Project> = sortedProjects.filter(
  (it) => !it.hide,
);

export const getProjectBySlug = (slug?: string): Project | undefined =>
  slug ? sortedProjects.find((it) => it.slug === slug) : undefined;

export interface ProjectGroup {
  category: string;
  projects: Array<Project>;
}

const FALLBACK_CATEGORY = 'Other';

// Preserve first-seen category order (driven by `order` in projects.yml)
export const groupProjectsByCategory = (
  projects: Array<Project>,
): Array<ProjectGroup> => {
  const groups: Array<ProjectGroup> = [];
  for (const project of projects) {
    const category = project.category || FALLBACK_CATEGORY;
    const existing = groups.find((g) => g.category === category);
    if (existing) existing.projects.push(project);
    else groups.push({ category, projects: [project] });
  }
  return groups;
};

/** GitHub repo URL for a project, derived from `url` or `repo`/`owner`. */
export const getProjectRepoUrl = (project: Project): string | undefined => {
  if (project.url.includes('github.com')) return project.url;
  if (project.repo)
    return `https://github.com/${project.owner || 'abdorizak'}/${project.repo}`;
  return undefined;
};

/** Live/demo URL for a project (explicit `live`, or `url` when not GitHub). */
export const getProjectLiveUrl = (project: Project): string | undefined => {
  if (project.live) return project.live;
  if (!project.url.includes('github.com')) return project.url;
  return undefined;
};

export const getProjectImageSrc = (src?: string): string =>
  src && src.startsWith('http') ? src : `/media/projects/${src || ''}`;
