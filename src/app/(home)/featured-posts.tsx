import { unstable_cache as cache } from 'next/cache';
import { Suspense } from 'react';

import { Section } from '@/components/atoms/section';
import { BlogPostItem } from '@/components/ui/blog/item';
import { BlogPostItemSkeleton } from '@/components/ui/blog/item/skeleton';
import {
  allReadableBlogs,
  sortBlogPostsByDate,
  type PartialBlog,
} from '@/utils/blog';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

const getFeaturedPosts = cache(
  async (): Promise<Array<PartialBlog>> => {
    try {
      const sortedPosts = [...allReadableBlogs].sort(sortBlogPostsByDate);
      const latestPost = sortedPosts[0];

      // Build result while avoiding duplicates
      const result: PartialBlog[] = [];
      const seen = new Set<string>();
      const add = (p?: PartialBlog) => {
        if (p && !seen.has(p.slug)) {
          result.push(p);
          seen.add(p.slug);
        }
      };

      add(latestPost);

      // Random from remaining
      const remaining = sortedPosts.filter((p) => !seen.has(p.slug));
      add(remaining[Math.floor(Math.random() * Math.max(1, remaining.length))]);

      // Fill until we have exactly 3
      for (const p of sortedPosts) {
        if (result.length >= 3) break;
        add(p);
      }

      return result.slice(0, 3);
    } catch {
      // Safe fallback: latest 3 posts
      return [...allReadableBlogs].sort(sortBlogPostsByDate).slice(0, 3);
    }
  },
  ['featured-posts'],
  { revalidate: 86400 },
);

const BlogPostsListFallback = () => {
  return (
    <>
      <li>
        <BlogPostItemSkeleton />
      </li>
      <li>
        <BlogPostItemSkeleton />
      </li>
      <li>
        <BlogPostItemSkeleton />
      </li>
    </>
  );
};

const FeaturedBlogPostsList = async () => {
  const featuredPosts = await getFeaturedPosts();
  return (
    <>
      {featuredPosts.map((post) => (
        <li className={'block'} key={post.slug}>
          <BlogPostItem post={post} fullDate />
        </li>
      ))}
    </>
  );
};

// eslint-disable-next-line max-len
const RSS_PATH = 'M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z';

export const FeaturedBlogPosts = () => (
  <Section id={'blog'} className={'gap-5'}>
    <div className={'flex flex-row items-start justify-between gap-4'}>
      <div className={'flex flex-col gap-0.5'}>
        <span
          className={cx(
            'inline-flex items-center gap-1.5',
            'text-[0.625rem] font-semibold uppercase tracking-[0.12em]',
            'text-tertiary-txt',
          )}
        >
          <span
            aria-hidden
            className={'size-1.5 rounded-full bg-orange-400 animate-pulse'}
          />
          Latest
        </span>
        <h2 className={getColoredTextClasses('orange')}>Blog Posts</h2>
      </div>
      <a
        title={'Subscribe via RSS'}
        href={'/feed.xml'}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={cx(
          'inline-flex items-center justify-center shrink-0 self-center',
          'size-11 rounded-full',
          'text-orange-400',
          'ring-1 ring-inset ring-orange-400/25',
          'transition-colors hocus:bg-orange-400/10 hocus:ring-orange-400/50',
        )}
        data-umami-event={'RSS feed subscribe'}
        aria-label={'Subscribe via RSS'}
      >
        <svg
          viewBox={'0 0 24 24'}
          aria-hidden={'true'}
          className={'size-6 fill-current'}
        >
          <path d={RSS_PATH} />
        </svg>
      </a>
    </div>

    <ol className={'flex flex-col gap-3'}>
      <Suspense fallback={<BlogPostsListFallback />}>
        <FeaturedBlogPostsList />
      </Suspense>
    </ol>

    <div className={'flex flex-row items-center justify-end mt-1'}>
      <a
        title={'View all blog posts'}
        href={'/blog'}
        className={cx(
          'group/view inline-flex items-center gap-1.5',
          'text-2xs font-semibold text-secondary-txt',
          'transition-colors hocus:text-primary-txt',
        )}
        data-umami-event={'View all blog posts'}
      >
        <span className={'underline underline-offset-4 decoration-divider'}>
          View all
        </span>
        <span
          aria-hidden
          className={cx(
            'transition-transform',
            'group-hocus/view:translate-x-0.5',
          )}
        >
          →
        </span>
      </a>
    </div>
  </Section>
);
