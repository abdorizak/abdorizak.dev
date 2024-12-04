import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
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
          with over two (2) years of professional experience.
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          I&apos;m a skilled software developer and an experienced trainer,
          specializing in iOS app development, Swift programming language,
          Flutter development, and Odoo training. With a deep understanding of
          these technologies, I create innovative and user-friendly
          applications, while also providing expert training to individuals and
          organizations looking to enhance their skills and capabilities. My
          passion for technology, combined with my excellent communication
          skills and ability to simplify complex concepts, make me a highly
          effective trainer and a sought-after developer in the software
          industry. Whether you are looking to build an iOS app, learn Swift or
          Flutter, or receive Odoo training, I have the knowledge, experience,
          and expertise to help you achieve your goals.
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
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'mb-1'} style={{ fontSize: '1rem' }}>
          Let&apos;s connect!
        </h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link
            title={'Email'}
            href={'mailto:info@abdorizak.dev?subject=Hi%20abdorizak!'}
          >
            info@abdorizak.dev
          </Link>
          , or find me on social media:
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
