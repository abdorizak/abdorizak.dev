import { type CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { StarsCounter } from '@/components/ui/projects/item/stars-count';
import type { Project } from '@/content';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { getProjectImageSrc } from '@/utils/projects';
import { getReadableColor } from '@/utils/readable-color';

interface HeaderProps {
  project: Project;
}

export const Header = ({ project }: HeaderProps) => {
  const readableColor = getReadableColor(project.color, true);
  const shadowColor = hexToRgb(readableColor, 0.85);
  const tint =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  const meta = [project.category, project.year, project.role].filter(Boolean);

  return (
    <div className={'flex flex-col gap-4 text-shadow shadow-background -mt-2'}>
      <Link
        title={'Go back to projects list'}
        href={'/projects'}
        className={cx(
          'self-start no-underline hocus:underline',
          'py-1 flex flex-row gap-1.5 items-center',
        )}
      >
        <Icon
          path={
            'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z'
          }
          className={'size-4'}
        />
        <span>Back to projects</span>
      </Link>

      <div className={'flex flex-row items-center gap-3.5'}>
        <Img
          src={getProjectImageSrc(project.icon)}
          alt={`Icon for project "${project.name}"`}
          width={64}
          height={64}
          blurDataURL={project.iconMeta?.blurDataURL}
          placeholder={project.iconMeta?.placeholder}
          style={{ '--tint': tint } as CSSProperties}
          className={cx(
            'rounded-2.5 p-1.5 shrink-0',
            'aspect-square object-contain bg-tint-bg',
            project.invertOnDark && 'dark:invert dark:!bg-white/90',
          )}
        />
        <div className={'flex flex-col gap-1 min-w-0'}>
          <div className={'flex flex-row items-center gap-3'}>
            <h1
              className={cx('dark:saturate-150', 'm-0')}
              style={
                {
                  '--tw-shadow-color': shadowColor,
                  color: readableColor,
                } as CSSProperties
              }
            >
              {project.name}
            </h1>
            <StarsCounter repo={project.repo || ''} owner={project.owner} />
          </div>
          {meta.length > 0 ? (
            <p
              className={cx(
                'flex flex-row flex-wrap items-center gap-2',
                'text-tertiary-txt text-3xs mobile-md:text-2xs',
              )}
            >
              {meta.map((item, i) => (
                <span key={item} className={'flex flex-row items-center gap-2'}>
                  {i > 0 ? (
                    <span aria-hidden className={'font-bold'}>
                      ·
                    </span>
                  ) : null}
                  <span>{item}</span>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
