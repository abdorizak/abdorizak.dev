/* eslint-disable max-len */
import type { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => (
  <span
    className={
      'inline-flex items-center px-3 py-0.5 rounded-2 text-3xs text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800'
    }
  >
    {children}
  </span>
);

export default Tag;

// import type { PropsWithChildren } from 'react';

// const Tag = ({ children }: PropsWithChildren) => {
//   return (
//     <span
//       className={
//         'inline-flex items-center px-2 py-0.5 rounded-2 text-xs text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800'
//       }
//     >
//       {children}
//     </span>
//   );
// };

// export default Tag;
