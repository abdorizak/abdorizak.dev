/* eslint-disable max-len */
import type { ComponentProps } from 'react';

export const Logo = (props: ComponentProps<'svg'> & { fill?: string }) => {
  return (
    <svg
      viewBox={'0 0 32 32'}
      xmlns={'http://www.w3.org/2000/svg'}
      width={24}
      height={24}
      {...props}
    >
      <path
        d={
          'M11.4,7.2c-1.3,1-2.7,3.2-2.7,3.2L1.9,22.9c-1.4,2.6,0.5,5.7,3.7,5.9c2.2,0.1,4.2-1.1,5.2-2.9l7.8-14.2C18.5,11.7,12.6,6.2,11.4,7.2zM8.7,10.3c0.9-1.7,2.8-1.3,3.4-0.2l3.6,6.5L17,19l2,3.7c1.2,2.1,0.3,4.7-2,5.8c-0.7,0.3-1.5,0.5-2.2,0.5h10.7c0.7,0,1.5-0.1,2.2-0.5c2.3-1.1,3.1-3.7,2-5.8L19.9,4.9c-1.7-3.1-6.4-3.1-8.2,0L8.7,10.3z'
        }
        fill={props.style?.fill || props.fill || 'inherit'}
      />
    </svg>
  );
};
