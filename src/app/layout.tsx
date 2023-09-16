import '@/styles/globals.scss';

import { Inter, Manrope } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top';
import { Footer } from '@/components/molecules/footer';
import { Main } from '@/components/molecules/main';
import { Toolbar } from '@/components/molecules/toolbar';
import { Providers } from '@/providers';
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
  display: 'fallback',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'fallback',
});

export const metadata = {
  ...getStaticMetadata({
    title: 'Abdorizak Abdalla – Software Engineer',
    description:
      // eslint-disable-next-line max-len
      "I'm a passionate and creative a software engineer from Somalia 🇸🇴. Visit my website to learn more about me and my projects",
    keywords: [
      'Abdorizak Abdalla',
      'Abdorizak',
      'Abdalla',
      'xman',
      'iOS',
      'Flutter',
      'open-source',
      'odoo Technical Consultant',
      'full-stack',
      'software engineer',
      'Somalia',
      'bio',
      'developer',
      'portfolio',
      'development',
    ],
  }),
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body className={'tablet-sm:overflow-y-auto'}>
        <Providers>
          <Toolbar />
          <Main>{props.children}</Main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
