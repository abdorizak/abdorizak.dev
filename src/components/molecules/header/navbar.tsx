import { Fragment } from 'react';

import { Logo } from '@/components/atoms/logo';
import type { TWComponentProps } from '@/utils/cx';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavItem,
  NavLink,
  ExtraNavLinks,
  NavPageLink,
  NavPageLinkText,
} from './navbar.styles';

const toolbarLinksList = [
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
  { title: 'Uses', href: '/uses' },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  expanded?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { expanded, className } = props;
  return (
    <Nav id={'navigation'} className={className}>
      <NavLink
        title={'Abdirizak Abdalla - Home Page'}
        href={'/'}
        className={cx(
          'gap-2 shrink-0',
          'max-tablet-sm:min-w-0 max-tablet-sm:px-1.5',
        )}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <Logo className={'saturate-125 dark:saturate-150'} />
        <span
          className={cx(
            'text-accent saturate-125 dark:saturate-150',
            'hidden tablet-sm:inline',
          )}
        >
          Abdirizak Abdalla
        </span>
      </NavLink>
      <LinksList
        className={
          expanded
            ? 'max-h-full opacity-100 select-auto pointer-events-auto visible'
            : ''
        }
      >
        {toolbarLinksList.map((link) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <Fragment key={link.href}>
              <li
                className={cx(
                  'block leading-none',
                  'text-base tablet-sm:text-lg',
                  isActive ? 'text-green-400' : 'text-divider',
                )}
                aria-hidden={'true'}
              >
                <span className={'select-none font-bold'}>•</span>
              </li>
              <NavItem>
                <NavPageLink
                  title={`${link.title} page`}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cx('hocus:text-primary-txt')}
                  prefetch={!isActive}
                >
                  <NavPageLinkText
                    className={cx(
                      isActive
                        ? // eslint-disable-next-line max-len
                          'text-primary-txt underline underline-offset-4 decoration-2 decoration-dashed decoration-accent'
                        : '',
                    )}
                  >
                    {link.title}
                  </NavPageLinkText>
                </NavPageLink>
              </NavItem>
            </Fragment>
          );
        })}
        <ExtraNavLinks aria-hidden={'true'} />
        <ExtraNavLinks className={'mx-auto'}>
          <SocialLinks />
        </ExtraNavLinks>
      </LinksList>
      <ButtonsGroup>
        <li>
          <NavToggle
            title={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={expanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
