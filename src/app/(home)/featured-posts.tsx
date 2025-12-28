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

export const FeaturedBlogPosts = () => (
  <Section id={'blog'} className={'gap-6'}>
    {/* Header: Latest + Blog Posts with View all link */}
    <div className={'flex flex-row items-start justify-between w-full'}>
      <div className={'flex flex-col gap-1'}>
        <span className={'text-2xs text-secondary-txt font-medium'}>
          Latest
        </span>
        <h2
          className={cx(getColoredTextClasses('orange'), 'text-xl font-bold')}
        >
          Blog Posts
        </h2>
      </div>
      {/* View all link - right aligned */}
      <a
        title={'View all blog posts'}
        href={'/blog'}
        className={cx(
          'flex flex-row items-center gap-2 self-center',
          'text-secondary-txt font-medium',
          'transition-colors hocus:text-primary-txt',
        )}
        data-umami-event={'View all blog posts'}
      >
        <span className={'underline underline-offset-4'}>View all</span>
        <span aria-hidden>→</span>
      </a>
    </div>

    {/* Blog Posts List */}
    <ol className={'flex flex-col gap-4'}>
      <Suspense fallback={<BlogPostsListFallback />}>
        <FeaturedBlogPostsList />
      </Suspense>
    </ol>
  </Section>
);
