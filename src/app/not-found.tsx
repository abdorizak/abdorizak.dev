/* eslint-disable @next/next/no-img-element */
import { LinkButton } from '@/components/atoms/link-button';
import { Main } from '@/components/atoms/main';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

export default function NotFound() {
  return (
    <Main>
      <Section
        id={'error'}
        className={'flex-1 w-full h-full -mb-7 tablet-sm:-mb-8'}
      >
        <h1
          className={getColoredTextClasses(
            'red',
            'orange',
            'red',
            'mb-4 self-start',
          )}
        >
          Woops! ~ Page not found
        </h1>
        <p>
          Unfortunately, the page you&apos;re looking for doesn&apos;t exist or
          has been moved.
        </p>
        <p className={'-mt-3'}>
          Please double check the URL for typos. Otherwise,
        </p>
        <LinkButton href={'/'} title={'Home page'} className={'mt-1.5 mb-5'}>
          Go back home
        </LinkButton>
        <img
          src={'/media/site/404.gif'}
          alt={'John Travolta gif'}
          loading={'lazy'}
          decoding={'async'}
          className={cx(
            'drop-shadow-[0_0_2px_#fff] mt-auto mx-auto w-full max-w-[425px]',
          )}
        />
      </Section>
    </Main>
  );
}

export const metadata = createMetadata({
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  keywords: ['404', 'not found', 'page not found'],
  image: 'https://abdorizak.dev/404-og.png',
});
