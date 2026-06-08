import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import {
  groupProjectsByCategory,
  sortedProjects,
  visibleProjects,
} from '@/utils/projects';

import { ProjectItem } from './item';

interface ProjectsListProps {
  title: string;
  featuredOnly?: boolean;
}

export const ProjectsList = (props: ProjectsListProps) => {
  const filteredProjects = props.featuredOnly
    ? visibleProjects
    : sortedProjects;
  const Heading = props.featuredOnly ? 'h2' : 'h1';
  // Group by category only on the full projects page
  const groups = props.featuredOnly
    ? [{ category: '', projects: filteredProjects }]
    : groupProjectsByCategory(filteredProjects);
  return (
    <Section id={'projects'} className={'gap-5'}>
      <Heading className={getColoredTextClasses('blue')}>{props.title}</Heading>

      {groups.map((group) => (
        <div key={group.category || 'all'} className={'flex flex-col gap-2'}>
          {group.category ? (
            <h2
              className={cx(
                'text-2xs font-semibold uppercase tracking-wide',
                'text-tertiary-txt mt-2',
              )}
            >
              {group.category}
            </h2>
          ) : null}
          <ul>
            {group.projects.map((project) => (
              <li key={project.name}>
                <ProjectItem project={project} />
              </li>
            ))}
          </ul>
        </div>
      ))}

      {props.featuredOnly ? (
        <div className={'flex flex-row items-center justify-end mt-1'}>
          <a
            title={'View all projects'}
            href={'/projects'}
            className={cx(
              'group/view inline-flex items-center gap-1.5',
              'text-2xs font-semibold text-secondary-txt',
              'transition-colors hocus:text-primary-txt',
            )}
            data-umami-event={'View all projects'}
          >
            <span className={'underline underline-offset-4 decoration-divider'}>
              View all
            </span>
            <span
              aria-hidden
              className={cx(
                'transition-transform',
                'group-hocus/view:translate-x-0.5',
              )}
            >
              →
            </span>
          </a>
        </div>
      ) : null}
    </Section>
  );
};
