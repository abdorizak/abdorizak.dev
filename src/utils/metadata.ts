import type { Metadata } from 'next';

import { config } from './og';

const SITE_URL = 'https://abdorizak.dev';
const SITE_NAME = 'Abdirizak Abdalla';
const DEFAULT_OG_IMAGE = `${SITE_URL}/media/abdorizak/abdorizak-hd.jpg`;
const TWITTER_HANDLE = '@abdorizak3';

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const { title, description, keywords, exactUrl, image } = data;
  const url = exactUrl || SITE_URL;
  const imageUrl = image || DEFAULT_OG_IMAGE;

  const ogImage = {
    url: imageUrl,
    secureUrl: imageUrl,
    type: config.contentType,
    width: config.size.width,
    height: config.size.height,
    alt: title,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    verification: {
      google: 'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE',
    },
  };
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
