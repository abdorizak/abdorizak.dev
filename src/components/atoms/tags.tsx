/* eslint-disable max-len */
import type { PropsWithChildren } from 'react';

import cx from '@/utils/cx';

const Tag = ({ children }: PropsWithChildren) => (
  <span
    className={cx(
      'flex items-center gap-1.5',
      'rounded-2 pl-3 pr-3.5 py-1.5 min-h-9',
      'border border-divider',
      'text-3xs font-medium cursor-default',
      'transition-colors',
      'bg-brand-200/10 dark:bg-brand-700/10',
      'hocus:!bg-tint-bg',
      'hocus:border-tint-border',
    )}
  >
    {children}
  </span>
);

export default Tag;
