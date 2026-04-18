/* eslint-disable max-len */
import { Link } from '@/components/atoms/link';
import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const Nav = tw.nav.attrs({ style: { maxWidth: MAX_SITE_WIDTH } })`
  relative
  mx-auto
  h-full
  w-full
  z-4
  p-1.5 tablet-sm:p-2
  backdrop-blur-md
  bg-background/20
  transform-gpu
  flex
  flex-row
  items-center
  gap-1 tablet-sm:gap-2
  transition
  duration-200
  rounded-1
`;

export const LinksList = tw.ol`
  flex flex-row
  items-center
  justify-end
  flex-1
  gap-0 tablet-sm:gap-1
  h-full
  p-0
  transition
  duration-200
`;

export const NavLink = tw(Link)`
  relative
  no-underline
  font-manrope font-bold
  min-h-11 min-w-11 h-full
  max-h-11
  px-2.5 py-1.5 rounded-1.5
  flex items-center
  transition-colors duration-200
`;

export const NavItem = tw.li`
  relative
`;

export const NavPageLink = tw(NavLink)`
  text-secondary-txt
  transition-colors
  hocus:saturate-125
  hocus:dark:saturate-150
  max-tablet-sm:min-w-0
  max-tablet-sm:px-1
  max-tablet-sm:py-1
  max-tablet-sm:text-3xs
  max-tablet-sm:min-h-9
  max-tablet-sm:max-h-9
`;

export const NavPageLinkText = tw.span``;

export const ButtonsGroup = tw.ul`
  hidden
`;

export const ExtraNavLinks = tw.li`
  hidden
`;
