import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const BlogPostLink = tw(Link)`
  group/post no-underline font-normal
  relative flex flex-row items-start gap-3 mobile-lg:gap-3.5
  p-2 mobile-lg:p-2.5
  -mx-2 w-[calc(100%_+_1rem)]
  rounded-2
  bg-transparent
  transition-colors duration-200
  hocus:bg-tint-bg
`;
