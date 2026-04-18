import { createMetadata } from '@/utils/metadata';

import './resume.scss';

export const metadata = createMetadata({
  title: 'Resume – Abdirizak Abdalla',
  description:
    'Resume of Abdirizak Abdalla — iOS & Flutter Engineer, Odoo Functional & Technical Consultant.',
  exactUrl: 'https://abdorizak.dev/resume',
  keywords: [
    'resume',
    'cv',
    'Abdirizak Abdalla',
    'iOS engineer',
    'Flutter developer',
    'Odoo',
  ],
});

export default function ResumePage() {
  return (
    <article className={'resume'}>
      <header className={'resume__header'}>
        <h1>Abdirizak Abdalla</h1>
        <p className={'resume__title'}>
          iOS &amp; Flutter Engineer · Odoo Functional &amp; Technical
          Consultant
        </p>
        <ul className={'resume__contact'}>
          <li>Mogadishu, Banaadir, Somalia</li>
          <li>
            <a href={'mailto:info@abdorizak.dev'}>info@abdorizak.dev</a>
          </li>
          <li>
            <a
              href={'https://abdorizak.dev'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              abdorizak.dev
            </a>
          </li>
          <li>
            <a
              href={'https://linkedin.com/in/abdorizak'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              linkedin.com/in/abdorizak
            </a>
          </li>
          <li>
            <a
              href={'https://github.com/abdorizak'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              github.com/abdorizak
            </a>
          </li>
        </ul>
      </header>

      <section className={'resume__section'}>
        <h2>Summary</h2>
        <p>
          Software engineer with 2+ years of professional experience building
          production mobile applications in Swift (iOS, UIKit) and Flutter
          (Dart). Delivered full-stack Odoo ERP implementations as a functional
          and technical consultant, training teams on accounting, inventory,
          sales, purchase, and project management modules. Focused on clean
          architecture, accessibility, and maintainable code.
        </p>
      </section>

      <section className={'resume__section'}>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> Swift, Dart, JavaScript, TypeScript,
          Python
        </p>
        <p>
          <strong>iOS:</strong> UIKit, SwiftUI, Combine, MVVM, XCTest, Core
          Data, URLSession, Xcode Instruments
        </p>
        <p>
          <strong>Cross-Platform:</strong> Flutter, Dart, Provider, Bloc, REST
          API integration, Firebase
        </p>
        <p>
          <strong>ERP / Odoo:</strong> Odoo functional consulting, module
          configuration (Accounting, Inventory, Sales, Purchase, Project),
          technical customization, training delivery
        </p>
        <p>
          <strong>Tools &amp; Practices:</strong> Git, Bitbucket, GitHub, REST
          APIs, Agile, code review, CI/CD, technical documentation
        </p>
        <p>
          <strong>Languages Spoken:</strong> English (fluent), Somali (native),
          Arabic (working)
        </p>
      </section>

      <section className={'resume__section'}>
        <h2>Work Experience</h2>

        <div className={'resume__job'}>
          <div className={'resume__job-head'}>
            <h3>iOS Developer — SafariOne</h3>
            <span className={'resume__dates'}>Apr 2024 – Present</span>
          </div>
          <p className={'resume__meta'}>
            Full-time · Mogadishu, Somalia · On-site
          </p>
          <ul>
            <li>
              Developing and shipping iOS applications in Swift using UIKit and
              MVVM architecture.
            </li>
            <li>
              Implementing reactive data flows with Combine and building
              reusable UI components to accelerate feature delivery.
            </li>
            <li>
              Collaborating with product and backend teams to integrate REST
              APIs, handle authentication, and optimize app performance.
            </li>
          </ul>
        </div>

        <div className={'resume__job'}>
          <div className={'resume__job-head'}>
            <h3>
              Mobile Application Developer — Softprime Consulting Pvt. Ltd.
            </h3>
            <span className={'resume__dates'}>Nov 2022 – Apr 2024</span>
          </div>
          <p className={'resume__meta'}>
            Full-time · Mogadishu, Somalia · On-site
          </p>
          <ul>
            <li>
              Developed and maintained cross-platform mobile applications for
              iOS and Android using Flutter and Dart.
            </li>
            <li>
              Designed and implemented intuitive user interfaces and interactive
              features, ensuring optimal user experience across devices.
            </li>
            <li>
              Integrated REST APIs to enable seamless data exchange between
              mobile applications and backend systems.
            </li>
            <li>
              Used version control tools such as Bitbucket to manage code
              changes and maintain code integrity across the team.
            </li>
          </ul>
        </div>

        <div className={'resume__job'}>
          <div className={'resume__job-head'}>
            <h3>
              Odoo ERP Specialist: Functional &amp; Technical Support —
              Softprime Consulting Pvt. Ltd.
            </h3>
            <span className={'resume__dates'}>Jan 2022 – Apr 2024</span>
          </div>
          <p className={'resume__meta'}>
            Full-time · Mogadishu, Somalia · On-site
          </p>
          <ul>
            <li>
              Delivered in-depth training and consulting on Odoo ERP
              implementation and customization, improving client operational
              efficiency.
            </li>
            <li>
              Configured Odoo modules — Accounting, Inventory, Sales, Purchase,
              and Project Management — to align with client business processes.
            </li>
            <li>
              Collaborated with clients to tailor Odoo solutions to specific
              business needs and conducted on-site and remote training sessions.
            </li>
            <li>
              Provided ongoing support and troubleshooting, promptly resolving
              operational issues and ensuring sustained client success.
            </li>
            <li>
              Coordinated with the development team to ensure client solutions
              met all requirements and adhered to best practices.
            </li>
          </ul>
        </div>

        <div className={'resume__job'}>
          <div className={'resume__job-head'}>
            <h3>
              Consultant &amp; Mobile Developer (Flutter) — Qaamuus Academy
            </h3>
            <span className={'resume__dates'}>Oct 2022 – Nov 2023</span>
          </div>
          <p className={'resume__meta'}>
            Part-time · Mogadishu, Somalia · Remote
          </p>
          <ul>
            <li>
              Built and maintained Flutter mobile applications, improving user
              experience and feature parity across iOS and Android.
            </li>
            <li>
              Oversaw the publication process for mobile applications, including
              store submission, review response, and release management.
            </li>
            <li>
              Worked remotely across time zones, coordinating with team members
              to meet development timelines and company goals.
            </li>
            <li>
              Provided technical consultancy on mobile architecture and
              strategic technology decisions.
            </li>
          </ul>
        </div>
      </section>

      <section className={'resume__section'}>
        <h2>Projects</h2>
        <div className={'resume__job'}>
          <div className={'resume__job-head'}>
            <h3>Wacyi — Founder / Creator</h3>
            <span className={'resume__dates'}>
              <a
                href={'https://wacyi.net/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                wacyi.net
              </a>
            </span>
          </div>
          <ul>
            <li>
              Founded and built Wacyi, delivering production mobile and web
              experiences to users.
            </li>
          </ul>
        </div>
        <p>
          Additional open-source work and experiments at{' '}
          <a
            href={'https://github.com/abdorizak'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            github.com/abdorizak
          </a>
          .
        </p>
      </section>

      <section className={'resume__section'}>
        <h2>Education</h2>
        <p className={'resume__placeholder'}>
          {/* TODO: Fill in degree / institution / graduation year. */}
          Degree, Institution — Year
        </p>
      </section>

      <section className={'resume__section resume__section--references'}>
        <h2>References</h2>
        <p>
          Experience Letter from Softprime Consulting (2024) available at{' '}
          <a
            href={'/share/softprime-experience-letter.pdf'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            abdorizak.dev/share/softprime-experience-letter.pdf
          </a>
          . Additional references available on request.
        </p>
      </section>
    </article>
  );
}
