import { Suspense } from 'react';

import { Main } from '@/components/atoms/main';
import { Section } from '@/components/atoms/section';
import { RSSFeedButton } from '@/components/ui/blog/rss-feed-button';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import Loading from '../loading';

import { GroupedBlogPosts } from './grouped-blog-posts';

export default function BlogPage() {
  return (
    <Main>
      <Section id={'blog'} className={'gap-6'}>
        <div className={'flex flex-row gap-4 items-center justify-between'}>
          <h1 className={getColoredTextClasses('orange', 'yellow', 'orange')}>
            Blog
          </h1>
          <RSSFeedButton />
        </div>
        <Suspense fallback={<Loading />}>
          <GroupedBlogPosts />
        </Suspense>
      </Section>
    </Main>
  );
}

export const metadata = createMetadata({
  title: 'Blog – Abdorizak Abdalla',
  description:
    // eslint-disable-next-line max-len
    'Blog posts by Abdorizak Abdalla. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life',
  exactUrl: 'https://abdorizak.dev/blog',
  keywords: [
    'tech',
    'software',
    'development',
    'thoughts',
    'opinions',
    'blog',
    'content',
    'story',
    'storytelling',
    'news',
  ],
});
