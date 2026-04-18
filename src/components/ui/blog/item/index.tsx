import { type CSSProperties } from 'react';

import { Img } from '@/components/atoms/img';
import type { PartialBlog } from '@/utils/blog';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import { BlogPostLink } from './item.styles';

interface BlogPostItemProps {
  post: PartialBlog;
  fullDate?: boolean;
}

const MAX_WIDTH = 240;
const MAX_HEIGHT = 160;
const getHeroProps = (heroMeta: PartialBlog['heroMeta']) => {
  const { width = MAX_WIDTH, height = MAX_HEIGHT, ...rest } = heroMeta || {};
  return {
    width: Math.min(width, MAX_WIDTH),
    height: Math.min(height, MAX_HEIGHT),
    ...rest,
  };
};

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { post, fullDate } = props;

  const a11yDate = formatDate(post.date);
  const readableDate = fullDate
    ? a11yDate
    : formatDate(post.date, false, { year: undefined });

  const color = hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)';

  return (
    <BlogPostLink
      title={post.title}
      href={post.link || `/blog/${post.slug}`}
      style={{ '--tint': color } as CSSProperties}
      prefetch={false}
    >
      <div
        className={cx(
          'relative shrink-0 overflow-hidden',
          'size-14 mobile-lg:size-16',
          'rounded-1.5',
        )}
      >
        <Img
          src={post.hero || ''}
          alt={`Hero image for blog post "${post.title}"`}
          {...getHeroProps(post.heroMeta)}
          className={'h-full w-full object-cover'}
        />
      </div>

      <div className={'flex flex-col gap-0.5 flex-1 min-w-0'}>
        <p className={cx('text-2xs text-tertiary-txt tabular-nums')}>
          <span
            title={`Published on ${a11yDate}`}
            aria-label={`Published on ${a11yDate}`}
          >
            {readableDate}
          </span>
          {Boolean(post.readingTime) ? (
            <>
              {' · '}
              <span
                title={`It takes ${post.readingTime} minutes to read`}
                aria-label={`It takes ${post.readingTime} minutes to read`}
              >
                {Math.ceil(post.readingTime as number)} min read
              </span>
            </>
          ) : null}
          {post.link ? (
            <>
              {' · '}
              <span className={'underline'}>{getUrlDomain(post.link)}</span>
            </>
          ) : null}
        </p>

        <p
          className={cx(
            'font-medium text-pretty',
            'text-sm mobile-lg:text-[0.9375rem]',
            'text-primary-txt',
            'underline underline-offset-4 decoration-dashed decoration-divider',
            'transition-colors',
            'group-hocus/post:decoration-primary-txt',
          )}
        >
          {post.title}
        </p>

        {post.summary ? (
          <p
            className={cx(
              'text-2xs text-secondary-txt text-pretty',
              'line-clamp-2',
            )}
          >
            {post.summary}
          </p>
        ) : null}
      </div>
    </BlogPostLink>
  );
};
