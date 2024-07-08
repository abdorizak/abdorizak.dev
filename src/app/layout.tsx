import '@/styles/globals.scss';

import Script from 'next/script';
import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { InterVariable, ManropeVariable } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Abdorizak Abdalla – Full-stack Software Engineer',
    description:
      // eslint-disable-next-line max-len
      "I'm a passionate and creative full-stack software engineer from Somalia 🇸🇴. Visit my website to learn more about me and my projects",
    keywords: [
      'Abdorizak Abdalla',
      'abdorizak',
      'DR ABDORIZAK X',
      'XMan',
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
  }),
};

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '' } = process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={cx(`${InterVariable.variable} ${ManropeVariable.variable}`)}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          async
          defer
          src={'https://umami.abdorizak.dev/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'abdorizak.dev'}
        />
      </head>
      <body>
        <Providers>
          <Header />
          {props.children}
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
