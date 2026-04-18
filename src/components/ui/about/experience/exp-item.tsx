import type { ImageProps } from 'next/image';
import { type CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { findSkill } from '@/components/ui/about/skills/data';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { AttachmentCard } from './attachment-card';

export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Freelance'
  | 'Internship';

export type LocationType = 'On-site' | 'Remote' | 'Hybrid';

export interface RoleAttachment {
  title: string;
  description?: string;
  href: string;
  type: 'pdf' | 'link' | 'image';
}

export interface ExperienceRole {
  position: string;
  from: string;
  until?: string;
  duration?: string;
  description?: string[];
  tags?: string[];
  attachments?: RoleAttachment[];
  employmentType?: EmploymentType;
  location?: string;
  locationType?: LocationType;
}

export interface ExperienceItemProps {
  company: string;
  link: string;
  color: string;
  image: ImageProps['src'];
  employmentType?: EmploymentType;
  location?: string;
  locationType?: LocationType;
  totalDuration?: string;
  roles: ExperienceRole[];
  attachments?: RoleAttachment[];
  last?: boolean;
}

const RoleBlock = ({
  role,
  showTimeline,
}: {
  role: ExperienceRole;
  showTimeline: boolean;
}) => {
  const meta = [role.employmentType, role.duration, role.locationType].filter(
    Boolean,
  );
  return (
    <div
      className={cx(
        'relative flex flex-col gap-2 pl-6',
        showTimeline &&
          // eslint-disable-next-line max-len
          'before:absolute before:left-[0.3125rem] before:top-1.5 before:bottom-0 before:w-px before:bg-divider',
      )}
    >
      <span
        aria-hidden
        className={cx(
          'absolute left-0 top-1.5 size-2.5 rounded-full',
          'bg-accent/70 ring-2 ring-background',
        )}
      />
      <div className={'flex flex-col gap-0.5'}>
        <p className={'text-sm font-semibold text-primary-txt'}>
          {role.position}
        </p>
        <p className={'tabular-nums text-3xs text-tertiary-txt'}>
          <span>{role.from}</span> – <span>{role.until || 'Present'}</span>
          {role.duration ? (
            <>
              {' · '}
              <span>{role.duration}</span>
            </>
          ) : null}
        </p>
        {meta.length > 0 && !role.duration ? (
          <p className={'text-3xs text-tertiary-txt'}>{meta.join(' · ')}</p>
        ) : null}
        {role.location ? (
          <p className={'text-3xs text-tertiary-txt'}>
            {role.location}
            {role.locationType ? ` · ${role.locationType}` : ''}
          </p>
        ) : null}
      </div>
      {role.description && role.description.length > 0 ? (
        <ul className={'flex flex-col gap-1 text-2xs text-secondary-txt'}>
          {role.description.map((bullet, i) => (
            <li
              key={`bullet-${i}`}
              className={cx(
                'relative pl-3.5',
                // eslint-disable-next-line max-len
                'before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-tertiary-txt',
              )}
            >
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      {role.attachments && role.attachments.length > 0 ? (
        <div className={'flex flex-col gap-2 mt-1'}>
          {role.attachments.map((att, i) => (
            <AttachmentCard key={`role-att-${i}`} attachment={att} />
          ))}
        </div>
      ) : null}
      {role.tags && role.tags.length > 0 ? (
        <ul className={'flex flex-wrap items-center gap-1.5 mt-1'}>
          {role.tags.map((tag, i) => {
            const skill = findSkill(tag);
            const tint = skill
              ? hexToRgb(skill.color, 0, true)
              : hexToRgb('#6b7280', 0, true);
            return (
              <li key={`role-tag-${i}`}>
                <span
                  className={cx(
                    'inline-flex items-center gap-1',
                    'rounded-full px-2 py-1',
                    'text-[0.625rem] font-medium',
                    'bg-toolbar text-secondary-txt',
                    'transition-colors duration-200',
                    'hocus:bg-tint-bg hocus:text-primary-txt',
                  )}
                  style={{ '--tint': tint } as CSSProperties}
                >
                  {skill ? (
                    <span
                      aria-hidden
                      className={cx(
                        'flex items-center',
                        'text-[color:rgb(var(--tint))]',
                      )}
                    >
                      <Icon path={skill.icon} className={'size-3'} />
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className={cx(
                        'size-1.5 rounded-full',
                        'bg-[color:rgb(var(--tint))]',
                      )}
                    />
                  )}
                  {tag}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export const ExpItem = (props: ExperienceItemProps) => {
  const tint = hexToRgb(props.color, 1, true);
  const companyMeta = [
    props.employmentType,
    props.totalDuration,
    props.locationType,
  ].filter(Boolean);
  const singleRole = props.roles.length === 1;

  return (
    <article
      style={{ '--tint': tint } as CSSProperties}
      className={cx(
        'relative flex flex-col gap-4',
        'rounded-2.5 p-3 mobile-lg:p-4',
        '-mx-3 w-[calc(100%_+_1.5rem)]',
        'transition-colors hocus:bg-tint-bg',
      )}
      data-umami-event={'Experience'}
      data-umami-event-company={props.company}
    >
      <a
        href={props.link}
        target={'_blank'}
        rel={'noopener noreferrer'}
        title={props.company}
        className={'group/exp flex flex-row items-start gap-3 no-underline'}
      >
        <Img
          src={props.image}
          alt={props.company}
          className={cx(
            'size-12 rounded-1.5 shrink-0',
            'border border-divider select-none',
          )}
        />
        <div className={'flex flex-col gap-0.5 min-w-0 flex-1'}>
          <p
            className={cx(
              'font-semibold text-primary-txt',
              'group-hocus/exp:underline group-hocus/exp:decoration-primary-txt',
            )}
          >
            {props.company}
          </p>
          {companyMeta.length > 0 ? (
            <p className={'text-3xs text-tertiary-txt'}>
              {companyMeta.join(' · ')}
            </p>
          ) : null}
          {props.location ? (
            <p className={'text-3xs text-tertiary-txt'}>{props.location}</p>
          ) : null}
        </div>
      </a>

      <div className={cx('flex flex-col gap-5', !singleRole && 'pl-1')}>
        {props.roles.map((role, index) => (
          <RoleBlock
            key={`${props.company}-role-${index}`}
            role={role}
            showTimeline={!singleRole && index < props.roles.length - 1}
          />
        ))}
      </div>

      {props.attachments && props.attachments.length > 0 ? (
        <div className={'flex flex-col gap-2'}>
          {props.attachments.map((att, i) => (
            <AttachmentCard key={`company-att-${i}`} attachment={att} />
          ))}
        </div>
      ) : null}
    </article>
  );
};
