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
  {
    title: 'About',
    href: '/about',
    className: 'text-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'text-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'text-purple',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'text-blue',
  },
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
        className={'gap-2 hocus:bg-toolbar-highlight'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <Logo className={'saturate-125 dark:saturate-150'} />
        <span className={'text-accent saturate-125 dark:saturate-150'}>
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
        {toolbarLinksList.map((link, index) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <Fragment key={link.href}>
              {index > 0 && (
                <li
                  className={'text-xs text-divider hidden tablet-sm:block'}
                  aria-hidden={'true'}
                >
                  <span className={'select-none font-bold'}>•</span>
                </li>
              )}
              <NavItem
                className={isActive ? 'before:bg-toolbar-highlight' : ''}
              >
                <NavPageLink
                  title={`${link.title} page`}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cx(
                    `hocus:${link.className}`,
                    isActive ? link.className : '',
                    isActive ? 'saturate-125 dark:saturate-150' : '',
                  )}
                  prefetch={!isActive}
                >
                  <NavPageLinkText>{link.title}</NavPageLinkText>
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
