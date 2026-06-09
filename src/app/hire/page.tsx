/* eslint-disable max-len */
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { IntakeForm } from './intake-form';

const services = [
  {
    emoji: '🚀',
    title: 'App Store & Play Store publishing',
    desc: "No developer account? I'll publish, configure and manage your app's release under my account — listing, screenshots, review fixes and updates.",
  },
  {
    emoji: '📱',
    title: 'Mobile app development',
    desc: 'iOS and cross-platform apps with Flutter & native Swift (UIKit, Combine) — from idea to a polished, store-ready product.',
  },
  {
    emoji: '⚙️',
    title: 'Backend & web',
    desc: 'Go APIs and Next.js web apps — auth, media, real-time features and the infrastructure to back your product.',
  },
  {
    emoji: '🔍',
    title: 'Consulting & code review',
    desc: 'Architecture guidance, code review, debugging and mentoring — short, focused engagements.',
  },
];

const terms = [
  'Payment is agreed upfront — a deposit before work begins, with the balance on delivery (or per milestone on larger projects).',
  'You own your app and everything in it, and confirm you have the rights to all code, media, branding and data. I act on your behalf to ship it.',
  'Store review decisions (Apple / Google) are outside my control. If your app is rejected I’ll handle fixes and resubmit within a fair number of rounds — a store rejection is not grounds for a refund.',
  'While an app is published under my developer account, I manage it on your behalf; we agree in advance on updates, removal, and transferring it to your own account.',
  'You remain responsible for the legality, content and data practices of your app — that stays with you, the owner.',
  'Scope, timeline and revisions are agreed in writing before I start, so we both know what “done” looks like.',
];

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Abdirizak Abdalla — Software Engineering',
  url: 'https://abdorizak.dev/hire',
  email: 'info@abdorizak.dev',
  description:
    'Mobile and full-stack software engineering — app development, ' +
    'App Store & Play Store publishing, Go backends and Next.js web apps.',
  provider: {
    '@type': 'Person',
    name: 'Abdirizak Abdalla',
    url: 'https://abdorizak.dev/about',
  },
});

export default function HirePage() {
  return (
    <Section id={'hire'} className={'gap-8'}>
      <script
        type={'application/ld+json'}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* Intro */}
      <div className={'flex flex-col gap-3'}>
        <span
          className={cx(
            'self-start flex flex-row items-center gap-1.5',
            'rounded-full border border-divider bg-toolbar',
            'px-2.5 py-1 text-2xs font-medium text-secondary-txt',
          )}
        >
          <span
            aria-hidden
            className={cx(
              'inline-block size-1.5 rounded-full bg-green-500',
              'motion-safe:animate-pulse',
            )}
          />
          Available for new work
        </span>
        <h1 className={getColoredTextClasses('green', 'self-start')}>
          Work with me
        </h1>
        <p className={'max-w-nice text-secondary-txt text-pretty'}>
          I help people and teams ship software — from publishing an app you
          already built, to designing and building a product end to end. Tell me
          what you need below and I&apos;ll get back to you with a clear plan,
          timeline and price.
        </p>
      </div>

      {/* Services */}
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-base font-semibold text-primary-txt'}>
          What I can help with
        </h2>
        <div className={'grid grid-cols-1 mobile-lg:grid-cols-2 gap-3'}>
          {services.map((service) => (
            <div
              key={service.title}
              className={cx(
                'flex flex-col gap-1.5 p-4',
                'rounded-3 border border-divider bg-toolbar',
              )}
            >
              <span className={'text-xl'} role={'img'} aria-hidden>
                {service.emoji}
              </span>
              <h3 className={'text-sm font-semibold text-primary-txt'}>
                {service.title}
              </h3>
              <p className={'text-xs text-tertiary-txt text-pretty'}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-base font-semibold text-primary-txt'}>
          How I work
        </h2>
        <ul className={'flex flex-col gap-2.5 max-w-nice'}>
          {terms.map((term, i) => (
            <li key={i} className={'flex flex-row gap-2.5'}>
              <span
                aria-hidden
                className={'shrink-0 text-accent font-bold leading-relaxed'}
              >
                ✓
              </span>
              <span className={'text-sm text-secondary-txt text-pretty'}>
                {term}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Intake */}
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-col gap-1'}>
          <h2 className={'text-base font-semibold text-primary-txt'}>
            Start a project
          </h2>
          <p className={'text-xs text-tertiary-txt'}>
            Prefer to talk first? Message me on{' '}
            <Link
              title={'WhatsApp'}
              href={
                'https://wa.me/252618125834?text=Hi%20Abdirizak%2C%20I%27d%20like%20to%20discuss%20a%20project'
              }
              data-umami-event={'Hire WhatsApp'}
              ignoreNextLink
            >
              WhatsApp
            </Link>{' '}
            or email{' '}
            <Link
              title={'Email'}
              href={'mailto:info@abdorizak.dev?subject=Project%20inquiry'}
              data-umami-event={'Hire email'}
              ignoreNextLink
            >
              info@abdorizak.dev
            </Link>
            .
          </p>
        </div>
        <IntakeForm />
      </div>
    </Section>
  );
}

export const metadata = createMetadata({
  title: 'Work with me – Abdirizak Abdalla',
  description:
    'Hire me for mobile app development, App Store & Play Store publishing, ' +
    'Go backends and Next.js web apps. See my services, terms and start a project.',
  exactUrl: 'https://abdorizak.dev/hire',
  keywords: [
    'hire',
    'freelance',
    'app developer',
    'flutter developer',
    'ios developer',
    'app store publishing',
    'play store publishing',
    'backend',
    'next.js',
    'consulting',
  ],
});
