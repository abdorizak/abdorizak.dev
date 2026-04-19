export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: 'text-brand',
      },
      {
        title: 'About',
        href: '/about',
        className: 'text-green',
      },
      {
        title: 'Blog',
        href: '/blog',
        className: 'text-orange',
      },
      {
        title: 'Projects',
        href: '/projects',
        className: 'text-blue',
      },
      {
        title: 'Uses',
        href: '/uses',
        className: 'text-blue',
      },
    ],
  },
  {
    title: 'Misc',
    a11yTitle: 'Miscellaneous links',
    links: [
      {
        title: 'Email',
        href: 'mailto:info@abdorizak.dev?subject=Hi%20abdorizak!',
        className: 'text-green',
        props: {
          ignoreNextLink: true,
          'data-umami-event': 'Footer email',
        },
      },
      {
        title: 'WhatsApp',
        a11yTitle: 'WhatsApp for business inquiries',
        href: 'https://wa.me/252618125834?text=Hi%20Abdirizak%2C%20I%27d%20like%20to%20discuss%20a%20project',
        className: 'text-green',
        props: {
          ignoreNextLink: true,
          'data-umami-event': 'Footer WhatsApp',
        },
      },
      {
        title: 'RSS Feed',
        href: '/feed.xml',
        className: 'text-orange',
        props: {
          'data-umami-event': 'RSS feed',
        },
      },
      {
        title: 'Colophon',
        href: '/colophon',
        className: 'text-blue',
      },
      {
        title: 'Back to Top',
        a11yTitle: 'Scroll back to top',
        href: '#page',
        className: 'text-brand',
      },
    ],
  },
];
