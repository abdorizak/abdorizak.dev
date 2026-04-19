import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Abdirizak Abdalla',
    alternateName: ['abdorizak', 'abdorizakdotdev'],
    description:
      'Passionate and creative full-stack software engineer from Somalia 🇸🇴',
    image: 'https://abdorizak.dev/media/abdorizak/abdorizak-hd.jpg',
    sameAs: [
      'https://github.com/abdorizak',
      'https://linkedin.com/in/abdorizak',
      'https://x.com/abdorizak3',
      'https://instagram.com/abdorizak3',
    ],
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1 className={getColoredTextClasses('green')}>About</h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m Abdorizak Abdalla, a software engineer from{' '}
          <Link
            title={'Somalia'}
            href={'https://www.google.com/maps/place/Somalia/@4,-72z/'}
            data-umami-event={'Link to Somalia map'}
          >
            Somalia{' '}
            <span role={'img'} aria-label={'Somalia flag'}>
              🇸🇴
            </span>
          </Link>{' '}
          with over four (4) years of professional experience.
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          I build mobile apps for a living. Right now I&apos;m an iOS Developer
          at{' '}
          <Link
            title={'SafariOne'}
            href={'https://safarione.ca/'}
            data-umami-event={'Link to SafariOne'}
          >
            SafariOne
          </Link>
          , shipping features in Swift with UIKit, Combine, and MVVM — and I
          architected a full call-center platform that integrates with Asterisk
          PBX over WebSocket. That project pulled me into full-stack territory:
          Go services for call routing, recording storage, and CDR/reporting,
          plus a Next.js web client using SIP.js for browser-based SIP calling.
        </p>
        <p className={'max-w-nice'}>
          Before SafariOne, I spent over two years at Softprime Consulting
          shipping Flutter apps for iOS and Android, and training clients on
          Odoo ERP across accounting, inventory, sales, purchase, and project
          modules — both on-site and remote. I&apos;ve also consulted on Flutter
          work for{' '}
          <Link
            title={'Qaamuus Academy'}
            href={'https://qaamuus.academy/members'}
            data-umami-event={'Link to Qaamuus Academy'}
          >
            Qaamuus Academy
          </Link>
          , taking apps from build through app-store publication.
        </p>
        <p className={'max-w-nice'}>
          My sweet spot is the mobile surface, but I&apos;m comfortable anywhere
          the feature needs me — backend, web, or infrastructure. I care about
          details, performance, and code that the next person on the team can
          actually read.
        </p>
        <p className={'max-w-nice'}>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{' '}
          <Link title={'Uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
      </Section>
      <Section id={'contact'} className={'gap-3'}>
        <h2 className={getColoredTextClasses('blue')}>Let&apos;s connect</h2>
        <p
          className={
            // eslint-disable-next-line max-len
            'inline-flex items-center gap-2 text-2xs text-secondary-txt'
          }
        >
          <span
            aria-hidden
            className={cx(
              'inline-block size-2 rounded-full',
              'bg-green-400 animate-pulse',
            )}
          />
          <span>
            Open to iOS &amp; Flutter work — usually reply within 24 hours.
          </span>
        </p>
        <p
          className={cx(
            'inline-flex flex-wrap items-center gap-x-2 gap-y-1',
            'text-xs text-secondary-txt',
          )}
        >
          <Link
            title={'Email'}
            href={'mailto:info@abdorizak.dev?subject=Hi%20abdorizak!'}
          >
            info@abdorizak.dev
          </Link>
          <span aria-hidden className={'opacity-60'}>
            ·
          </span>
          <Link
            title={'WhatsApp'}
            href={
              // eslint-disable-next-line max-len
              'https://wa.me/252618125834?text=Hi%20Abdirizak%2C%20I%27d%20like%20to%20discuss%20a%20project'
            }
          >
            +252 618 125 834
          </Link>
        </p>
        <SocialLinks />
      </Section>
      <Skills />
      <Experience />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Abdirizak Abdalla',
  description: 'Learn more about me (Abdirizak Abdalla), my career and more',
  exactUrl: 'https://abdorizak.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
