import '@/styles/globals.scss';

import Script from 'next/script';
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

const {
  UMAMI_WEBSITE_ID: umamiWebsiteId = '73ce0264-4dc0-4bee-b79d-27ecf6d8b6ea',
  IS_TEMPLATE = 'true',
} = process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(
        Inter.variable,
        Manrope.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://cloud.umami.is/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'abdorizak.dev'}
          strategy={'lazyOnload'}
        />
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
