import type { CSSProperties } from 'react';

import { Heading } from '@/components/core/heading';
import { getReadableColor, hexToRgb } from '@/utils/color';

interface HeaderProps {
  title: string;
  color?: string;
}

const Header = (props: HeaderProps) => {
  const { title, color } = props;
  const shadowColor = color ? hexToRgb(color, 0.36) : null;
  const readableColor = getReadableColor(color, true);

  return (
    <Heading
      className={'dark:text-[var(--text-color)]'}
      style={
        {
          '--text-color': readableColor || 'var(--color-primary-txt)',
          '--text-shadow-color': shadowColor || 'var(--color-shadow-brand)',
        } as CSSProperties
      }
    >
      {title}
    </Heading>
  );
};

export default Header;
