/* eslint-disable max-len */
import safariOne from '@/assets/images/experience/safariOne.jpeg';
import photo from '@/assets/images/photo.jpg';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { Name, WavingSpan } from './intro.styles';
import { Verified } from './verified';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-3'}>
      <div
        className={cx(
          'flex flex-row items-center mb-3',
          'gap-4 tablet-sm:gap-6',
        )}
      >
        <Img
          src={photo}
          alt={'Photo of Abdorizak Abdalla'}
          sizes={'112'}
          quality={100}
          priority
          className={cx(
            'aspect-square object-center object-cover rounded-full',
            'size-20 max-w-20 shrink-0',
            'tablet-sm:size-28 tablet-sm:max-w-28',
            'bg-brand-700 overflow-hidden saturate-125',
            'border-1 border-white/12 dark:border-white/5',
            'transition hocus:scale-105',
          )}
        />
        <h1
          className={cx(
            'font-manrope font-bold min-w-0 flex-1',
            'flex flex-col items-start gap-1 tablet-sm:gap-1.5 text-primary-txt',
          )}
        >
          <span
            className={cx(
              'opacity-85 text-base tablet-sm:text-2xl',
              'flex flex-row items-center gap-2',
              'text-shadow shadow-yellow-300 dark:shadow-transparent',
            )}
          >
            <WavingSpan role={'img'} aria-label={'waving hand'}>
              👋
            </WavingSpan>
            <WavingHello />
          </span>
          <span
            className={cx(
              'flex flex-row items-center gap-2 flex-wrap',
              'text-lg tablet-sm:text-3xl',
              'text-shadow shadow-brand-300 dark:shadow-transparent',
            )}
          >
            <span>I&apos;m</span>
            <span className={'flex items-center gap-2 text-accent'}>
              <Name>Abdorizak Abdalla</Name>
              <Verified />
            </span>
          </span>
        </h1>
      </div>

      <p className={'text-pretty text-lg text-secondary-txt max-w-[65ch]'}>
        Software engineer focused on Flutter, Dart, and backend systems.
        Building scalable, production-ready packages with clean architecture and
        real-world reliability. Passionate Open Source Projects. Creator of{' '}
        <Link
          title={'Wacyi'}
          href={'https://wacyi.net/'}
          data-umami-event={'Link to Wacyi'}
        >
          <span className={'underline'}>Wacyi</span>
        </Link>
        . Working as iOS Developer at{' '}
        <Link
          title={'SafariOne'}
          href={'https://safarione.ca/'}
          data-umami-event={'Link to SafariOne'}
          className={'inline-flex items-center gap-1 align-baseline'}
        >
          <Img
            src={safariOne}
            alt={'SafariOne logo'}
            sizes={'20'}
            className={'inline-block size-4 rounded-full align-middle'}
          />
          <span className={'underline'}>SafariOne</span>
        </Link>
      </p>

      <Link
        title={'More about me'}
        href={'/about'}
        className={cx(
          'group/arrow-link self-end',
          'flex flex-row items-center gap-1 text-sm',
          'opacity-85 hocus:opacity-100',
        )}
        data-umami-event={'More about me'}
      >
        <span>More about me</span>
        <span
          aria-hidden
          className={
            'transition-transform group-hocus/arrow-link:translate-x-0.5'
          }
        >
          →
        </span>
      </Link>

      <section className={'flex flex-col gap-3 mt-2'} id={'connect'}>
        <h2 className={getColoredTextClasses('brand')}>Connect</h2>
        <SocialLinks />
      </section>
    </Section>
  );
};
