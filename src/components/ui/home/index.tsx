/* eslint-disable max-len */
import photo from '@/assets/images/photo.jpg';
import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import cx from '@/utils/cx';

import { Name, SubHeader, WavingSpan } from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-6'}>
      <div
        className={'flex flex-col gap-5 tablet-sm:block tablet-sm:space-y-4'}
      >
        <Img
          src={photo}
          alt={'Photo of Abdorizak Abdalla'}
          sizes={'160'}
          quality={100}
          priority
          className={cx(
            'rounded-full aspect-square tablet-sm:float-right',
            'max-w-24 mobile-lg:max-w-28 tablet-sm:max-w-36 tablet-md:max-w-40',
            'bg-brand-700 overflow-hidden saturate-125',
            'hover:bg-blue-500 transition duration-200',
            'hover:mix-blend-hard-light hover:opacity-75 hover:rounded-half',
            'focus:filter-none focus:mix-blend-normal focus:opacity-100',
          )}
        />
        <h1 className={'flex flex-col gap-1 tablet-sm:!-mt-2'}>
          <p
            className={
              'flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8'
            }
          >
            <WavingSpan role={'img'} aria-label={'waving hand'}>
              👋
            </WavingSpan>
            <WavingHello />
          </p>
          <SubHeader>
            <span>
              I am <Name>Abdorizak Abdalla</Name>
            </span>
          </SubHeader>
        </h1>

        <p className={'text-pretty flex flex-col gap-2 text-sm'}>
          <span className={'max-w-[42ch]'}>
            Passionate and creative full-stack software engineer from{' '}
            <Link
              title={'Somalia'}
              href={'https://www.google.com/maps/place/Somalia/@4,-72z/'}
              data-umami-event={'Link to Somalia map'}
            >
              Somalia{' '}
              <span role={'img'} aria-label={'Somalia flag'}>
                🇸🇴
              </span>
            </Link>
          </span>
          <span className={'max-w-[48ch]'}>
            Detail-driven, I strive to build great-looking, user-friendly
            software while enhancing my skills along the way
          </span>
        </p>
      </div>

      <div
        className={cx(
          'flex flex-col gap-3 items-center',
          'mobile-lg:flex-row mobile-lg:flex-wrap',
        )}
      >
        <LinkButton
          title={'More about me'}
          href={'/about'}
          className={cx(
            'pr-3.5',
            'justify-center max-mobile-lg:w-full',
            'mobile-lg:self-start mobile-lg:justify-start',
          )}
          data-umami-event={'More about me'}
        >
          <Icon
            className={'size-5'}
            path={
              'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
            }
          />
          <span>More about me</span>
        </LinkButton>
        <SocialLinks />
      </div>
    </Section>
  );
};
