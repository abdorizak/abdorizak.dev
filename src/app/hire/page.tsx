/* eslint-disable max-len */
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

// import { IntakeForm } from './intake-form';

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
  {
    title: 'Payment & deposits',
    body: 'A non-refundable deposit is required before any work begins; the balance is due on delivery, or per milestone on larger projects. Work pauses on any overdue payment, and every amount paid is non-refundable once the corresponding work has been performed.',
  },
  {
    title: 'Your content & your rights',
    body: 'You confirm you own, or are fully licensed to use, everything you provide or ask me to publish — code, designs, media, branding, text and data. You are solely responsible for it, and you agree to defend, indemnify and hold me harmless against any claim, loss, fine or cost arising from your app or its content, including intellectual-property, privacy, defamation or regulatory claims.',
  },
  {
    title: 'App Store & Play Store outcomes',
    body: 'Apple and Google solely control all review, approval, ranking, suspension and removal decisions, and these are outside my control. Rejections, delays, takedowns or account actions are not my responsibility and are not grounds for a refund. You are responsible for ensuring your app complies with each store’s guidelines and all applicable laws.',
  },
  {
    title: 'Apps published under my account',
    body: 'Where I publish under my developer account on your behalf, I may, at my sole discretion and without liability, update, unpublish or permanently remove the app if it puts my account at risk or appears to breach any law, store policy or these terms. You agree to transfer the app to your own developer account promptly on request, and I am not liable for any loss arising from such removal or transfer.',
  },
  {
    title: 'Legal & data responsibility',
    body: 'You remain solely responsible for the legality of your app and for how it collects, stores and uses any user or personal data, including compliance with applicable privacy and consumer-protection laws. I provide engineering services only and give no legal, tax, accounting or compliance advice.',
  },
  {
    title: 'Scope, revisions & no guarantees',
    body: 'Scope, timeline and the number of revisions are agreed in writing before work starts; anything beyond that is quoted and billed separately. I do not guarantee any specific result, ranking, revenue, performance, uptime or store approval.',
  },
  {
    title: 'Warranty & limitation of liability',
    body: 'Beyond the agreed scope and any short fix period stated in writing, work is provided “as is”. To the maximum extent permitted by law, I am not liable for any indirect, incidental or consequential loss (including lost profits or data), and my total liability for any and all claims is limited to the fees you actually paid me for the work in question.',
  },
  {
    title: 'Ownership & confidentiality',
    body: 'Ownership of the final deliverables transfers to you only once full payment is received; until then all rights remain with me, and any of my pre-existing tools, libraries and know-how stay mine. We each agree to keep the other’s non-public information confidential.',
  },
  {
    title: 'Termination',
    body: 'Either of us may end an engagement in writing at any time. Fees for work already performed are due and non-refundable, and licences to anything not yet paid for in full do not pass to you.',
  },
  {
    title: 'Binding agreement',
    body: 'Engaging me for any work means you accept these terms. They are confirmed and, where needed, expanded in a signed agreement for each project — which is the binding version and prevails over this summary if they ever conflict. That agreement also sets the governing law and venue for any dispute.',
  },
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
        <div className={'flex flex-col gap-1'}>
          <h2 className={'text-base font-semibold text-primary-txt'}>
            Terms of engagement
          </h2>
          <p className={'text-xs text-tertiary-txt max-w-nice text-pretty'}>
            A plain-language summary of how I work and what protects both of us.
            The signed agreement for your project is the binding version.
          </p>
        </div>
        <ul className={'flex flex-col gap-3.5 max-w-nice'}>
          {terms.map((term, i) => (
            <li key={i} className={'flex flex-row gap-2.5'}>
              <span aria-hidden className={'shrink-0 text-accent font-bold'}>
                {i + 1}.
              </span>
              <span className={'flex flex-col gap-0.5'}>
                <span className={'text-sm font-semibold text-primary-txt'}>
                  {term.title}
                </span>
                <span className={'text-xs text-secondary-txt text-pretty'}>
                  {term.body}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Start a project */}
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
        {/* Intake form temporarily disabled — re-enable the import above and this line */}
        {/* <IntakeForm /> */}
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
