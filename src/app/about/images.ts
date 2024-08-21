import { unstable_cache as cache } from 'next/cache';

const imagesAlts: Array<string> = [
  '📸',
  '📸',
  '📸',
  '📸',
  '📸',
  '📸',
  '📸',
  '📸',
];

export const getAboutImage = cache(
  async () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = await import(`../../assets/images/about/${index}.jpg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
