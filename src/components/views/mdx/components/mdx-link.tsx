import type { ComponentProps } from 'react';
import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const shouldIgnoreNextLink = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

const StyledLink = tw.a`
  inline-block
  font-normal
  text-accent
  hocus:underline
  hocus:text-accent-dark
`;

export const MdxLink = (props: ComponentProps<typeof Link>) => {
  const ignoredNextLink = shouldIgnoreNextLink(props.className);
  if (ignoredNextLink || props.href.toString().startsWith('#'))
    return <StyledLink {...props} href={props.href.toString()} />;
  return <Link {...props} />;
};
