import { type CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { findSkill } from '@/components/ui/about/skills/data';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

interface StackListProps {
  stack?: Array<string>;
  keyPrefix: string;
  className?: string;
}

export const StackList = ({ stack, keyPrefix, className }: StackListProps) => {
  if (!stack || stack.length === 0) return null;
  return (
    <ul className={cx('flex flex-wrap items-center gap-1.5', className)}>
      {stack.map((tech, i) => {
        const skill = findSkill(tech);
        const tint = skill
          ? hexToRgb(skill.color, 0, true)
          : hexToRgb('#6b7280', 0, true);
        return (
          <li key={`${keyPrefix}-stack-${i}`}>
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
              {tech}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
