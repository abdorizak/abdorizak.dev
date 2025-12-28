/* eslint-disable max-len */
import safariOne from '@/assets/images/experience/safariOne.jpeg';
import photo from '@/assets/images/photo.jpg';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import cx from '@/utils/cx';

import { Name, SubHeader, WavingSpan } from './intro.styles';
import { Verified } from './verified';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-4'}>
      {/* Row: Image LEFT + Greeting/Name Column RIGHT */}
      <div className={'flex flex-row items-start gap-4'}>
        <Img
          src={photo}
          alt={'Photo of Abdorizak Abdalla'}
          sizes={'128'}
          quality={100}
          priority
          className={cx(
            'rounded-full aspect-square shrink-0',
            'size-28 tablet-sm:size-28',
            'bg-brand-700 overflow-hidden saturate-125',
            'border-1 border-white/12 dark:border-white/5',
          )}
        />
        <div className={'flex flex-col gap-1'}>
          <p
            className={
              'flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none'
            }
          >
            <WavingSpan role={'img'} aria-label={'waving hand'}>
              👋
            </WavingSpan>
            <WavingHello />
          </p>
          <h1>
            <SubHeader
              className={'text-2xl tablet-sm:text-3xl font-bold font-manrope'}
            >
              <span className={'flex flex-row items-center gap-2 flex-wrap'}>
                <span>I&apos;m</span>
                <span className={'flex items-center gap-2 text-accent'}>
                  <Name>Abdorizak Abdalla</Name>
                  <Verified />
                </span>
              </span>
            </SubHeader>
          </h1>
        </div>
      </div>

      {/* Bio Paragraph */}
      <p
        className={
          'text-pretty flex flex-col gap-4 text-base text-secondary-txt'
        }
      >
        <span className={'max-w-[65ch]'}>
          Software engineer focused on Flutter, Dart, and backend systems.
          Building scalable, production-ready packages with clean architecture
          and real-world reliability. Passionate Open Source Projects. Creator
          of{' '}
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
            className={'inline-flex items-center gap-1'}
          >
            <Img
              src={safariOne}
              alt={'SafariOne logo'}
              sizes={'20'}
              className={'inline-block size-4 rounded-full align-middle'}
            />
            <span className={'underline'}>SafariOne</span>
          </Link>
        </span>
      </p>

      {/* More about me - RIGHT aligned */}
      <div className={'flex flex-row justify-end pt-2'}>
        <Link
          title={'More about me'}
          href={'/about'}
          className={cx(
            'flex flex-row items-center gap-2 font-medium',
            'transition-colors hocus:text-accent',
          )}
          data-umami-event={'More about me'}
        >
          <span className={'underline underline-offset-4'}>More about me</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Connect Section */}
      <div className={'flex flex-col gap-3 pt-4'}>
        <p className={'text-pretty'}>Connect with me</p>
        <SocialLinks />
      </div>
    </Section>
  );
};
