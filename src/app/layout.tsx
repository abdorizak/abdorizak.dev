import '@/styles/globals.scss';

import { type PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { DotPattern } from '@/components/magicui/dot-pattern';
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
      className={cx('dark', Inter.variable, Manrope.variable)}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body
        className={cx(
          'flex min-h-screen flex-col bg-background text-foreground',
        )}
      >
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          <Footer />
          <DotPattern
            width={40}
            height={40}
            cx={1}
            cy={1}
            cr={1}
            className={cx(
              // eslint-disable-next-line max-len
              '[mask-image:linear-gradient(to_bottom,black,transparent_30%,transparent_70%,black),linear-gradient(to_right,black,transparent_30%,transparent_70%,black)]',
              'fixed inset-x-0 inset-y-[-30%] h-[200%] w-full skew-y-12 fill-white/10',
              'stroke-white/10',
              '-z-10',
            )}
          />
        </Providers>
      </body>
    </html>
  );
}
