import { Section } from '@/components/atoms/section';
import { projects as allProjects } from '@/content';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { ProjectItem } from './item';

interface ProjectsListProps {
  title: string;
  featuredOnly?: boolean;
}

const projects = allProjects.sort((a, b) => a.order - b.order);
export const ProjectsList = (props: ProjectsListProps) => {
  const filteredProjects = props.featuredOnly
    ? projects.filter((it) => !it.hide)
    : projects;
  const Heading = props.featuredOnly ? 'h2' : 'h1';
  return (
    <Section id={'projects'} className={'gap-5'}>
      <Heading className={getColoredTextClasses('blue')}>{props.title}</Heading>

      <ul>
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>

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
