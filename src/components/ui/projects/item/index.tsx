import { type CSSProperties } from 'react';

import type { Project } from '@/content';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { StackList } from '../stack-list';

import { ProjectIcon, ProjectLink } from './item.styles';
import { StarsCounter } from './stars-count';

interface ProjectItemProps {
  project: Project;
}

// eslint-disable-next-line max-len
const ARROW_PATH = 'M7 17L17 7M17 7H9M17 7V15';

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  return (
    <ProjectLink
      title={`View ${project.name}`}
      href={`/projects/${project.slug}`}
      style={{ '--tint': color } as CSSProperties}
      data-umami-event={'View project'}
      data-umami-event-project={project.name}
    >
      <ProjectIcon
        src={
          project.icon && project.icon.startsWith('http')
            ? project.icon
            : `/media/projects/${project.icon || ''}`
        }
        alt={`Icon for project "${project.name}"`}
        width={56}
        height={56}
        blurDataURL={project.iconMeta?.blurDataURL}
        placeholder={project.iconMeta?.placeholder}
        className={cx(project.invertOnDark && 'dark:invert dark:!bg-white/90')}
      />
      <div className={'flex flex-col gap-0.5 flex-1 min-w-0'}>
        <div className={'flex flex-row gap-3 items-center'}>
          <p
            className={cx(
              'font-medium',
              'text-xs text-primary-txt line-clamp-2 text-pretty',
              // eslint-disable-next-line max-len
              'group-hocus/project:underline group-hocus/project:decoration-primary-txt',
            )}
          >
            {project.name}
          </p>
          <StarsCounter repo={project.repo || ''} owner={project.owner} />
        </div>
        <p className={'text-2xs text-secondary-txt text-pretty'}>
          {project.description}
        </p>
        <StackList
          stack={project.stack}
          keyPrefix={project.name}
          className={'mt-2'}
        />
      </div>
      <span
        aria-hidden
        className={cx(
          'shrink-0 self-start',
          'flex items-center justify-center',
          'size-6 rounded-full',
          'text-tertiary-txt',
          'transition-all duration-200',
          // eslint-disable-next-line max-len
          'group-hocus/project:text-[rgb(var(--tint))] group-hocus/project:-translate-y-0.5 group-hocus/project:translate-x-0.5',
        )}
      >
        <svg
          viewBox={'0 0 24 24'}
          fill={'none'}
          stroke={'currentColor'}
          strokeWidth={'2'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          className={'size-3.5'}
        >
          <path d={ARROW_PATH} />
        </svg>
      </span>
    </ProjectLink>
  );
};
