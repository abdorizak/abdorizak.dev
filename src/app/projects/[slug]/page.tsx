import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Icon } from '@/components/atoms/icon';
import { LinkButton, OutlinedLinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { StackList } from '@/components/ui/projects/stack-list';
import type { Project } from '@/content';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';
import {
  getProjectImageSrc,
  getProjectLiveUrl,
  getProjectRepoUrl,
  sortedProjects,
} from '@/utils/projects';

import { Gallery } from './gallery';
import { Header } from './header';

const absoluteImage = (src?: string): string => {
  const resolved = getProjectImageSrc(src);
  return resolved.startsWith('http')
    ? resolved
    : `https://abdorizak.dev${resolved}`;
};

const GITHUB_ICON =
  // eslint-disable-next-line max-len
  'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z';
const EXTERNAL_ICON =
  // eslint-disable-next-line max-len
  'M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z';
const CHECK_ICON =
  // eslint-disable-next-line max-len
  'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z';
const LINK_ICONS: Record<string, string> = {
  appstore:
    // eslint-disable-next-line max-len
    'M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z',
  googleplay:
    // eslint-disable-next-line max-len
    'M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z',
  pub:
    // eslint-disable-next-line max-len
    'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z',
};

interface ProjectPageContext {
  params: { slug?: string };
}

const structuredData = (project: Project): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: project.category,
    url: `https://abdorizak.dev/projects/${project.slug}`,
    image: absoluteImage(project.icon),
    author: {
      '@type': 'Person',
      name: 'Abdirizak Abdalla',
      url: 'https://abdorizak.dev/about',
    },
  });

export default function ProjectPage(context: ProjectPageContext) {
  const { slug } = context.params;
  const project = sortedProjects.find((it) => it.slug === slug);
  if (!slug || !project) return notFound();

  const liveUrl = getProjectLiveUrl(project);
  const repoUrl = getProjectRepoUrl(project);
  const paragraphs = (project.longDescription || project.description)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <Section id={'project'} className={'gap-6'}>
      <Header project={project} />

      <div className={'flex flex-col gap-3 max-w-prose'}>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={'text-secondary-txt text-pretty'}>
            {paragraph}
          </p>
        ))}
      </div>

      {liveUrl || repoUrl || project.links?.length ? (
        <div className={'flex flex-row flex-wrap items-center gap-2.5'}>
          {liveUrl ? (
            <LinkButton
              title={`Open ${project.name} live`}
              href={liveUrl}
              data-umami-event={'Open project live'}
              data-umami-event-project={project.name}
            >
              <Icon className={'size-5'} path={EXTERNAL_ICON} />
              <span>Live demo</span>
            </LinkButton>
          ) : null}
          {repoUrl ? (
            <OutlinedLinkButton
              title={`View ${project.name} source code`}
              href={repoUrl}
              data-umami-event={'View project code'}
              data-umami-event-project={project.name}
            >
              <Icon className={'size-5'} path={GITHUB_ICON} />
              <span>View code</span>
            </OutlinedLinkButton>
          ) : null}
          {project.links?.map((link) => (
            <OutlinedLinkButton
              key={link.url}
              title={`${project.name} on ${link.label}`}
              href={link.url}
              data-umami-event={'Open project link'}
              data-umami-event-project={`${project.name} – ${link.label}`}
            >
              <Icon
                className={'size-5'}
                path={LINK_ICONS[link.icon || ''] || EXTERNAL_ICON}
              />
              <span>{link.label}</span>
            </OutlinedLinkButton>
          ))}
        </div>
      ) : null}

      {project.highlights && project.highlights.length > 0 ? (
        <div className={'flex flex-col gap-2'}>
          <h2 className={'text-xs font-semibold text-primary-txt'}>
            Highlights
          </h2>
          <ul className={'flex flex-col gap-1.5'}>
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className={cx(
                  'flex flex-row items-start gap-2',
                  'text-2xs text-secondary-txt text-pretty',
                )}
              >
                <Icon
                  className={'size-4 shrink-0 mt-px text-accent'}
                  path={CHECK_ICON}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.stack && project.stack.length > 0 ? (
        <div className={'flex flex-col gap-2'}>
          <h2 className={'text-xs font-semibold text-primary-txt'}>
            Tech stack
          </h2>
          <StackList stack={project.stack} keyPrefix={project.slug} />
        </div>
      ) : null}

      <Gallery name={project.name} screenshots={project.screenshots} />

      <script type={'application/ld+json'} suppressHydrationWarning>
        {structuredData(project)}
      </script>
    </Section>
  );
}

export const generateStaticParams = () =>
  sortedProjects.map((project) => ({ slug: project.slug }));

export function generateMetadata(
  context: ProjectPageContext,
): Metadata | undefined {
  const { slug } = context.params;
  if (!slug) return undefined;
  const project = sortedProjects.find((it) => it.slug === slug);
  if (!project) return undefined;

  return createMetadata({
    title: `${project.name} | Projects – Abdirizak Abdalla`,
    description: project.description,
    exactUrl: `https://abdorizak.dev/projects/${slug}`,
    keywords: project.stack,
    image: absoluteImage(project.icon),
  });
}
