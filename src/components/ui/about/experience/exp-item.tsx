import type { ImageProps } from 'next/image';
import { type CSSProperties } from 'react';

import { Img } from '@/components/atoms/img';
import Tag from '@/components/atoms/tags';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { ExperienceItem, ExperienceItemWithLine } from './exp.styles';

export interface ExperienceItemProps {
  company: string;
  position: string;
  from: string;
  until?: string;
  tags?: string[];
  link: string;
  color: string;
  image: ImageProps['src'];
  last?: boolean;
}

export const ExpItem = (props: ExperienceItemProps) => {
  const color = hexToRgb(props.color, 1, true);
  const Component = props.last ? ExperienceItem : ExperienceItemWithLine;
  return (
    <Component
      title={`${props.position} at ${props.company}`}
      href={props.link}
      target={'_blank'}
      style={{ '--tint': color } as CSSProperties}
      data-umami-event={'Experience'}
      data-umami-event-company={props.company}
    >
      <Img
        src={props.image}
        alt={props.company}
        className={cx(
          'size-12 rounded-1.5',
          'border border-divider select-none',
        )}
      />
      <div className={'flex flex-col flex-1'}>
        <p className={'tabular-nums line-clamp-1 text-3xs text-tertiary-txt'}>
          <span>{props.from}</span> – <span>{props.until || 'Present'}</span>
        </p>
        <p
          className={cx(
            'line-clamp-1 font-medium text-primary-txt',
            'group-hocus/exp:underline group-hocus/exp:decoration-primary-txt',
          )}
        >
          {props.company}
        </p>
        <p className={'line-clamp-1 text-2xs flex-1 text-secondary-txt'}>
          {props.position}
        </p>
        <div className={'flex gap-x-1.5'}>
          {props.tags?.map((tag, index) => (
            <Tag key={`project-tag-${index}`}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Component>
  );
};
