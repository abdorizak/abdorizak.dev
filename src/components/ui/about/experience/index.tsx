import qamuusAcademy from '@/assets/images/experience/qaamus.jpg';
import safariOne from '@/assets/images/experience/safariOne.jpeg';
import spc from '@/assets/images/experience/spc.jpeg';
import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';

import {
  ExpItem,
  type ExperienceItemProps as ExperienceRecord,
} from './exp-item';

/* eslint-disable max-len */
const experience: Array<ExperienceRecord> = [
  {
    company: 'SafariOne',
    link: 'https://safarione.ca/',
    image: safariOne,
    color: '#8FD554',
    employmentType: 'Full-time',
    location: 'Mogadishu, Banaadir, Somalia',
    locationType: 'On-site',
    roles: [
      {
        position: 'iOS Developer',
        from: 'Apr 2024',
        until: 'Present',
        duration: '2 yrs 1 mo',
        description: [
          'Develop new features for the iOS app in Swift, using UIKit, Combine, and MVVM architecture.',
          'Collaborate in product design and brainstorming sessions with cross-functional teams.',
          'Work with backend and QA teams to integrate REST APIs and ship reliable mobile features.',
          'Participate in code reviews and pair programming sessions to maintain code quality.',
          'Profile app performance for UX responsiveness, memory management, and battery efficiency.',
          'Apply software engineering patterns and best practices throughout day-to-day development.',
          'Architected and built a full call-center platform integrating Asterisk PBX over WebSocket.',
          'Developed Go backend services for call routing, recording storage, CDR/reporting APIs, and live Asterisk event ingestion via AMI/ARI.',
          'Built the Next.js web client with SIP.js for browser-based SIP calling, agent dashboards, and real-time call status.',
          'Bridged the iOS app with the call-center platform so mobile agents can handle calls and access recordings from the field.',
        ],
        tags: [
          'Swift',
          'UIKit',
          'MVVM',
          'iOS',
          'Combine',
          'Go',
          'Next.js',
          'SIP.js',
          'Asterisk',
          'WebSocket',
          'Full-Stack',
        ],
      },
    ],
    last: false,
  },
  {
    company: 'Softprime Consulting Pvt. Ltd.',
    link: 'https://softprimeconsulting.com/',
    image: spc,
    color: '#2E4C94',
    employmentType: 'Full-time',
    totalDuration: '2 yrs 4 mos',
    location: 'Mogadishu, Banaadir, Somalia',
    attachments: [
      {
        title: 'Experience Letter',
        description:
          'Official Experience Letter issued on departure, covering my full tenure across both roles at Softprime Consulting.',
        href: '/share/softprime-experience-letter.pdf',
        type: 'pdf',
      },
    ],
    roles: [
      {
        position: 'Mobile Application Developer',
        from: 'Nov 2022',
        until: 'Apr 2024',
        duration: '1 yr 6 mos',
        description: [
          'Developed and maintained mobile applications for iOS and Android using Flutter and Dart.',
          'Designed and implemented intuitive user interfaces and interactive features, ensuring optimal user experience.',
          'Integrated REST APIs to enable seamless data exchange between mobile apps and backend systems.',
          'Used version control tools such as Bitbucket to manage code changes and ensure code integrity.',
        ],
        tags: ['Flutter', 'Dart', 'Mobile App Development', 'REST APIs'],
      },
      {
        position: 'Odoo ERP Specialist: Functional & Technical Support',
        from: 'Jan 2022',
        until: 'Apr 2024',
        duration: '2 yrs 4 mos',
        description: [
          'Offered in-depth training and consulting on Odoo ERP implementation and customization to improve operational efficiency.',
          'Configured Odoo modules — accounting, inventory, sales, purchase, and project management — to align with client processes.',
          'Collaborated with clients to tailor Odoo solutions to their specific business needs.',
          'Conducted on-site and remote training sessions so clients could fully utilize the system.',
          'Provided ongoing support and troubleshooting, promptly resolving operational issues.',
          'Coordinated with the development team to ensure client solutions met all requirements and best practices.',
        ],
        tags: [
          'Odoo',
          'Consulting',
          'Training',
          'Teamwork',
          'Software Development',
          'Module Configuration',
        ],
      },
    ],
    last: false,
  },
  {
    company: 'Qaamuus Academy',
    link: 'https://qaamuus.academy/members',
    image: qamuusAcademy,
    color: '#8FD554',
    employmentType: 'Part-time',
    location: 'Mogadishu, Banaadir, Somalia',
    locationType: 'Remote',
    roles: [
      {
        position: 'Consultant & Mobile Developer (Flutter)',
        from: 'Oct 2022',
        until: 'Nov 2023',
        duration: '1 yr 2 mos',
        description: [
          'Specialized in creating and maintaining mobile applications using Flutter, enhancing UX across platforms.',
          'Oversaw publication of mobile apps, ensuring they met technical standards and were approved on app stores.',
          'Worked remotely, managing projects and coordinating with team members to meet development timelines.',
          'Provided technical consultancy to optimize project outcomes and support strategic technology decisions.',
        ],
        tags: ['Flutter', 'Dart', 'Mobile Consultancy', 'App Publishing'],
      },
    ],
    last: true,
  },
];
/* eslint-enable max-len */

export const Experience = () => {
  return (
    <Section id={'experience'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h2 className={getColoredTextClasses('brand')}>Experience</h2>
        <LinkButton
          title={'Resume'}
          href={'/resume'}
          openInNewTab
          className={'self-start pr-3.5'}
          data-umami-event={'Resume'}
        >
          <Icon
            className={'size-5'}
            path={
              // eslint-disable-next-line max-len
              'm20.7 6.8-5.5-5.5c-.2-.2-.4-.3-.7-.3H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V7.5c0-.3-.1-.5-.3-.7zm-2.6.2H15V3.9L18.1 7zM18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-1-8c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zm0 4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zM7 9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1z'
            }
          />
          <span>Resume</span>
        </LinkButton>
      </div>
      <ol className={'flex flex-col gap-3'}>
        {experience.map((exp) => {
          return (
            <li key={exp.company}>
              <ExpItem {...exp} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
