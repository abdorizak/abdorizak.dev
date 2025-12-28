import cx, { tw } from '@/utils/cx';

export const StyledHeader = tw.header`
  fixed top-0 h-auto
  w-screen z-3
  left-0 right-0
  bg-transparent
  p-0
  transform-gpu
  transition-[max-height]
  duration-300
  max-h-20 tablet-sm:max-h-21
`;

export const expandedClasses = cx(
  'tablet-sm:h-[unset]',
  'max-tablet-sm:max-h-full',
  'max-tablet-sm:to-dark/50',
);
