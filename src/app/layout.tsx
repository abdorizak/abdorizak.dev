import '@/styles/globals.scss';

import { type PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { Inter, Manrope } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title:
      'Abdirizak Abdalla – iOS Engineer | Flutter Dev | Odoo Technical & Functional',
    description:
      // eslint-disable-next-line max-len
      "I'm an iOS Engineer | Swift Engineer | Flutter Dev Odoo Technical & Functional. Passionate Open Source Projects from Somalia 🇸🇴. Visit my website to learn more about me and my projects",
    keywords: [
      'Abdirizak Abdalla',
      'abdorizak',
      '',
      'abdorizak',
      'open-source',
      'full-stack',
      'software engineer',
      'Somalia',
      'bio',
      'developer',
      'portfolio',
      'development',
      'android',
      'web',
    ],
    image: 'https://abdorizak.dev/media/abdorizak/abdorizak-hd.jpg',
  }),
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(Inter.variable, Manrope.variable)}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body>
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
