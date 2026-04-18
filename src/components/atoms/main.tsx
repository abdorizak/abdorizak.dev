import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const Main = tw.main.attrs({ style: { maxWidth: MAX_SITE_WIDTH } })`
  flex
  flex-col
  flex-1
  z-1
  pt-28
  px-4
  pb-8
  gap-14
  w-full
  mx-auto
  tablet-md:pt-32
  tablet-md:px-5
`;
