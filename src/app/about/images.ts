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

const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getAboutImage = cache(
  async () => {
    const index = randomBetween(0, imagesAlts.length - 1);
    const src = await import(`../../assets/images/about/${index + 1}.jpg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
