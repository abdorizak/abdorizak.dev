/* eslint-disable max-len */
import type { PropsWithChildren, ReactNode } from 'react';

import cx from '@/utils/cx';

interface TagProps extends PropsWithChildren {
  variant?: 'subtle' | 'outline' | 'solid' | 'glass';
  color?: 'brand' | 'gray' | 'green' | 'red' | 'blue' | 'yellow' | 'purple';
  leading?: ReactNode; // optional leading element (icon/emoji)
  trailing?: ReactNode; // optional trailing element
  size?: 'sm' | 'md';
  interactive?: boolean; // if true apply hover/focus affordances
}

// Base size styles
const sizeStyles: Record<NonNullable<TagProps['size']>, string> = {
  sm: 'text-3xs px-2 py-1 gap-1 rounded-1.5 min-h-[1.375rem]',
  md: 'text-2xs px-2.5 py-1.5 gap-1.5 rounded-2 min-h-[1.75rem]',
};

// Color design tokens (light / dark aware). Each returns CSS classes used in variants.
const palette = {
  brand: {
    fg: 'text-brand-600 dark:text-brand-300',
    subtleBg: 'bg-brand-500/10 dark:bg-brand-400/10',
    solidBg: 'bg-brand-600 dark:bg-brand-500 text-white dark:text-black',
    ring: 'ring-brand-500/30',
    outline: 'border-brand-500/40 dark:border-brand-400/40',
  },
  gray: {
    fg: 'text-secondary-txt',
    subtleBg: 'bg-gray-400/10',
    solidBg: 'bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900',
    ring: 'ring-gray-400/30',
    outline: 'border-gray-400/30',
  },
  green: {
    fg: 'text-green-600 dark:text-green-300',
    subtleBg: 'bg-green-500/10 dark:bg-green-400/10',
    solidBg: 'bg-green-600 dark:bg-green-500 text-white dark:text-black',
    ring: 'ring-green-500/30',
    outline: 'border-green-500/40 dark:border-green-400/40',
  },
  red: {
    fg: 'text-red-600 dark:text-red-300',
    subtleBg: 'bg-red-500/10 dark:bg-red-400/10',
    solidBg: 'bg-red-600 dark:bg-red-500 text-white dark:text-black',
    ring: 'ring-red-500/30',
    outline: 'border-red-500/40 dark:border-red-400/40',
  },
  blue: {
    fg: 'text-blue-600 dark:text-blue-300',
    subtleBg: 'bg-blue-500/10 dark:bg-blue-400/10',
    solidBg: 'bg-blue-600 dark:bg-blue-500 text-white dark:text-black',
    ring: 'ring-blue-500/30',
    outline: 'border-blue-500/40 dark:border-blue-400/40',
  },
  yellow: {
    fg: 'text-yellow-600 dark:text-yellow-300',
    subtleBg: 'bg-yellow-500/15 dark:bg-yellow-400/15',
    solidBg:
      'bg-yellow-500 text-yellow-950 dark:bg-yellow-400 dark:text-yellow-950',
    ring: 'ring-yellow-500/30',
    outline: 'border-yellow-500/40 dark:border-yellow-400/40',
  },
  purple: {
    fg: 'text-purple-600 dark:text-purple-300',
    subtleBg: 'bg-purple-500/10 dark:bg-purple-400/10',
    solidBg: 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black',
    ring: 'ring-purple-500/30',
    outline: 'border-purple-500/40 dark:border-purple-400/40',
  },
};

type PaletteKey = keyof typeof palette;

const variantStyles = (
  variant: NonNullable<TagProps['variant']>,
  c: PaletteKey,
) => {
  const p = palette[c];
  switch (variant) {
    case 'solid':
      return cx(p.solidBg, 'font-semibold shadow-sm');
    case 'outline':
      return cx('bg-transparent', 'border', p.outline, p.fg);
    case 'glass':
      return cx(
        'backdrop-blur-[3px] border',
        p.outline,
        'bg-white/30 dark:bg-white/5',
        p.fg,
      );
    case 'subtle':
    default:
      return cx(p.subtleBg, p.fg);
  }
};

export const Tag = ({
  children,
  variant = 'subtle',
  color = 'brand',
  leading,
  trailing,
  size = 'sm',
  interactive = true,
}: TagProps) => {
  return (
    <span
      className={cx(
        'inline-flex items-center whitespace-nowrap select-none',
        'rounded-full',
        sizeStyles[size],
        variantStyles(variant, color),
        interactive &&
          'transition-colors duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-current/40',
        'ring-inset',
      )}
    >
      {leading && <span className={'flex items-center'}>{leading}</span>}
      <span className={'truncate'}>{children}</span>
      {trailing && <span className={'flex items-center'}>{trailing}</span>}
    </span>
  );
};

// Backward compatibility default export
export default Tag;
