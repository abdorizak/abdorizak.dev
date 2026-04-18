import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
import { hexToRgb } from '@/utils/color';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { skills } from './data';

export const Skills = () => {
  return (
    <Section id={'skills'} className={'gap-4'}>
      <h2 className={getColoredTextClasses('yellow')}>Skills</h2>
      <ul className={'flex items-center gap-2 flex-wrap'}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill) => {
            const color = hexToRgb(skill.color, 0, true);
            return (
              <li className={'block'} key={skill.name}>
                <span
                  className={cx(
                    'flex items-center gap-1.5',
                    'rounded-full pl-2.5 pr-3 py-1.5 min-h-8',
                    'text-3xs font-medium cursor-default',
                    'bg-toolbar text-secondary-txt',
                    'transition-colors duration-200',
                    'hocus:bg-tint-bg hocus:text-primary-txt',
                  )}
                  style={{ '--tint': color } as CSSProperties}
                >
                  <span
                    aria-hidden
                    className={cx(
                      'flex items-center',
                      'text-[color:rgb(var(--tint))]',
                    )}
                  >
                    <Icon path={skill.icon} className={'size-4'} />
                  </span>
                  <span>{skill.name}</span>
                </span>
              </li>
            );
          })}
      </ul>
    </Section>
  );
};
