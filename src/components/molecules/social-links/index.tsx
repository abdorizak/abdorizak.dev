/* eslint-disable max-len */
import type { ComponentProps } from 'react';

import { Icon } from '@/components/atoms/icon';
import { github } from '@/components/icons';
import cx from '@/utils/cx';

type Social = {
  title: string;
  href: string;
  iconPath: string;
  hoverClassName: string;
};

const socials: Array<Social> = [
  {
    title: 'GitHub',
    href: 'https://github.com/abdorizak',
    iconPath: github,
    hoverClassName: 'hocus:text-[#333] dark:hocus:text-[#ebebeb]',
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/abdorizak',
    iconPath:
      'M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z',
    hoverClassName: 'hocus:text-[#0C66C2] dark:hocus:text-[#5494d4]',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/abdorizak',
    iconPath:
      'M17.176 4H19.936L13.908 10.7768L21 20H15.444L11.096 14.4071L6.116 20H3.356L9.804 12.7512L3 4H8.696L12.628 9.11308L17.176 4ZM16.208 18.3756H17.736L7.864 5.54179H6.224L16.208 18.3756Z',
    hoverClassName: 'hocus:text-[#1471a9] dark:hocus:text-[#1da1f2]',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/abdorizak',
    iconPath:
      'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z',
    hoverClassName: 'hocus:text-[#ae3077] dark:hocus:text-[#d472a9]',
  },
  {
    title: 'Email',
    href: 'mailto:info@abdorizak.dev?subject=Hi%20abdorizak!',
    iconPath:
      'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z',
    hoverClassName: 'hocus:text-[#356AC4] dark:hocus:text-[#5591f5]',
  },
];

export const SocialLinks = (props: ComponentProps<'ul'>) => {
  return (
    <ul
      className={cx(
        'group/social flex flex-row items-center flex-wrap gap-x-3 gap-y-2',
        'text-xs text-secondary-txt',
        props.className,
      )}
    >
      {socials.map((s) => (
        <li key={s.title}>
          <a
            href={s.href}
            title={s.title}
            target={'_blank'}
            rel={'noopener noreferrer'}
            data-umami-event={'Social link'}
            data-umami-event-site={s.title}
            className={cx(
              'inline-flex flex-row items-center gap-1.5',
              'no-underline [&_span]:underline [&_span]:decoration-dashed [&_span]:decoration-1 [&_span]:underline-offset-2 [&_span]:decoration-divider',
              'transition-colors',
              'hocus:[&_span]:decoration-2 hocus:[&_span]:decoration-solid',
              'opacity-85 hocus:opacity-100 group-hocus/social:opacity-60 hocus:group-hocus/social:opacity-100',
              s.hoverClassName,
            )}
          >
            <Icon
              className={'size-4 fill-current shrink-0'}
              path={s.iconPath}
            />
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
