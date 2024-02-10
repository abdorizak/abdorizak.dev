import { Link } from '@/components/atoms/link';
import { Main } from '@/components/atoms/main';
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
    name: 'Abdorizak Abdalla',
    alternateName: ['abdorizak', 'abdorizakdev', 'XMan', 'DR ABDORIZAK X', 'X'],
    description:
      'Passionate and creative full-stack software engineer from Somalia 🇸🇴',
    image: 'https://abdorizak.dev/media/abdorizak/abdorizak-hd.jpg',
    sameAs: [
      'https://github.com/abdorizak',
      'https://linkedin.com/in/abdorizak',
      'https://twitter.com/abdorizak',
      'https://instagram.com/abdorizak',
    ],
  },
});

export default function AboutPage() {
  return (
    <Main>
      <Section id={'about'}>
        <h1
          className={getColoredTextClasses(
            'blue',
            'blue',
            'green',
            'self-start',
          )}
        >
          About
        </h1>
        <Photo />
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m Abdorizak Abdalla, a software engineer from{' '}
          <Link
            title={'Somalia'}
            href={'https://www.google.com/maps/place/Somalia'}
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
          I first discovered my passion for software development while doing
          some programming for a couple of robotics projects during pre-college.
          I started by exploring iOS development, gaining a deeper understanding
          of programming principles. Later, I became interested in building
          Mobile applications, honing my skills in Mobile development.
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
      <Section id={'contact'} className={'-mt-6 gap-2.5'}>
        <h2 className={'text-sm mb-2'}>Let&apos;s connect!</h2>
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
    </Main>
  );
}

export const metadata = createMetadata({
  title: 'About – Abdorizak Abdalla',
  description: 'Learn more about me (Abdorizak Abdalla), my career and more',
  exactUrl: 'https://abdorizak.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
