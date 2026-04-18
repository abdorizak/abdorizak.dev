import cx from '@/utils/cx';

import { BlogPostLink } from './item.styles';

const pulseBg = 'bg-brand-100/20 dark:bg-brand-800/40';

export const BlogPostItemSkeleton = () => (
  <BlogPostLink
    title={''}
    href={'#'}
    className={'motion-safe:animate-pulse pointer-events-none'}
    aria-disabled
  >
    <div
      className={cx(
        pulseBg,
        'shrink-0 rounded-1.5',
        'size-14 mobile-lg:size-16',
      )}
    />
    <div className={'flex flex-col gap-1.5 flex-1 min-w-0 py-1'}>
      <div className={cx(pulseBg, 'h-2 w-28 rounded-full')} />
      <div className={cx(pulseBg, 'h-3 w-5/6 rounded-full')} />
      <div className={cx(pulseBg, 'h-2 w-2/3 rounded-full')} />
    </div>
  </BlogPostLink>
);
