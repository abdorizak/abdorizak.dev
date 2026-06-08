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
  {
    title: 'WhatsApp',
    href: 'https://wa.me/252618125834?text=Hi%20Abdirizak%2C%20I%27d%20like%20to%20discuss%20a%20project',
    iconPath:
      'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z',
    hoverClassName: 'hocus:text-[#1DA851] dark:hocus:text-[#25D366]',
  },
];

const socialRows: Array<Array<Social>> = [
  socials.slice(0, 3),
  socials.slice(3),
];

export const SocialLinks = (props: ComponentProps<'div'>) => {
  return (
    <div
      className={cx(
        'group/social flex flex-col gap-y-1.5',
        'text-2xs text-secondary-txt',
        props.className,
      )}
    >
      {socialRows.map((row, rowIdx) => (
        <ul
          key={rowIdx}
          className={'flex flex-row items-center flex-wrap gap-x-3 gap-y-2'}
        >
          {row.map((s, idx) => (
            <li key={s.title} className={'inline-flex items-center gap-x-3'}>
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
                  className={'size-3.5 fill-current shrink-0'}
                  path={s.iconPath}
                />
                <span>{s.title}</span>
              </a>
              {idx < row.length - 1 ? (
                <span
                  aria-hidden
                  className={cx(
                    'select-none font-bold leading-none',
                    'text-2xs text-divider',
                  )}
                >
                  •
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
