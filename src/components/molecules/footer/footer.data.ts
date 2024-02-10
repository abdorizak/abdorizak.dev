import { buildColoredLinkClasses } from '@/utils/colored-text';

export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: buildColoredLinkClasses('brand', 'blue', true),
      },
      {
        title: 'About',
        href: '/about',
        className: buildColoredLinkClasses('blue', 'green', true),
      },

      {
        title: 'Projects',
        href: '/projects',
        className: buildColoredLinkClasses('red', 'purple', true),
      },
    ],
  },
  {
    title: '🚀',
    a11yTitle: 'Miscellaneous links',
    links: [
      {
        title: 'Blog',
        href: '/blog',
        className: buildColoredLinkClasses('yellow', 'orange', true),
      },
      {
        title: 'Contact',
        href: '/contact',
        className: buildColoredLinkClasses('blue', 'green', true),
        props: {
          ignoreNextLink: true,
        },
      },
      {
        title: 'Uses',
        href: '/uses',
        className: buildColoredLinkClasses('brand', 'blue', true),
      },
      {
        title: '🔝',
        a11yTitle: 'Scroll back to top',
        href: '#',
        className: buildColoredLinkClasses('brand', 'blue', true),
        prefetch: false,
      },
    ],
  },
];
