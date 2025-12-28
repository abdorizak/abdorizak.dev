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
    <Section id={'projects'} className={'gap-6'}>
      <div
        className={cx(
          'w-full flex flex-col items-start gap-4',
          'mobile-md:flex-row mobile-md:items-center mobile-md:justify-between',
        )}
      >
        <Heading className={getColoredTextClasses('purple')}>
          {props.title}
        </Heading>
        {props.featuredOnly ? (
          <div className={'flex flex-row justify-end'}>
            <a
              title={'View all projects'}
              href={'/projects'}
              className={cx(
                'flex flex-row items-center gap-2',
                'text-secondary-txt font-medium',
                'transition-colors hocus:text-primary-txt',
              )}
              data-umami-event={'View all projects'}
            >
              <span className={'underline underline-offset-4'}>View all</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        ) : null}
      </div>
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
