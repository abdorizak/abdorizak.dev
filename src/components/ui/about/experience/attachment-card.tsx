import { Icon } from '@/components/atoms/icon';
import cx from '@/utils/cx';

import type { RoleAttachment } from './exp-item';

/* eslint-disable max-len */
const attachmentIconPath: Record<RoleAttachment['type'], string> = {
  pdf: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm2 18H6V4h7v5h5v11Z',
  link: 'M10.59 13.41a1 1 0 0 0 1.41 0l4-4a3 3 0 1 0-4.24-4.24l-1.41 1.41a1 1 0 0 0 1.41 1.41l1.41-1.41a1 1 0 1 1 1.41 1.41l-4 4a1 1 0 0 0 0 1.42ZM13.41 10.59a1 1 0 0 0-1.41 0l-4 4a3 3 0 1 0 4.24 4.24l1.41-1.41a1 1 0 0 0-1.41-1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l4-4a1 1 0 0 0 0-1.42Z',
  image:
    'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H5l4-4 2 2 5-5 3 3v4Z',
};
/* eslint-enable max-len */

const LINE = 'block h-0.5 bg-neutral-300 dark:bg-neutral-400';

const PaperThumbnail = ({ type }: { type: RoleAttachment['type'] }) => (
  <div
    aria-hidden
    className={cx(
      'relative shrink-0 overflow-hidden',
      'w-14 h-[4.5rem] rounded-[3px]',
      'bg-neutral-100 dark:bg-neutral-200',
      'border border-neutral-300 dark:border-neutral-400',
      'shadow-[0_4px_10px_rgba(0,0,0,0.35)]',
    )}
  >
    <span
      className={cx(
        'absolute top-0 right-0 w-3 h-3',
        'bg-neutral-300 dark:bg-neutral-400',
        '[clip-path:polygon(0_0,100%_100%,100%_0)]',
      )}
    />
    <span className={'absolute left-1.5 right-3 top-3 flex flex-col gap-1'}>
      <span className={cx(LINE, 'w-full')} />
      <span className={cx(LINE, 'w-3/4')} />
      <span className={cx(LINE, 'w-full')} />
      <span className={cx(LINE, 'w-2/3')} />
      <span className={cx(LINE, 'w-5/6')} />
    </span>
    <span
      className={cx(
        'absolute bottom-1 left-1 right-1',
        'rounded-sm text-[0.5rem] font-bold uppercase tracking-wide',
        'text-center py-0.5',
        type === 'pdf'
          ? 'bg-red-600 text-white'
          : type === 'image'
            ? 'bg-green-600 text-white'
            : 'bg-blue-600 text-white',
      )}
    >
      {type}
    </span>
  </div>
);

export const AttachmentCard = ({
  attachment,
}: {
  attachment: RoleAttachment;
}) => (
  <a
    href={attachment.href}
    target={'_blank'}
    rel={'noopener noreferrer'}
    className={cx(
      'group/att flex flex-row items-start gap-3 no-underline',
      'rounded-2 border border-divider bg-toolbar/40',
      'p-3',
      'transition-colors hocus:bg-toolbar-highlight',
    )}
    data-umami-event={'Experience attachment'}
    data-umami-event-attachment={attachment.title}
  >
    <PaperThumbnail type={attachment.type} />
    <div className={'flex flex-col gap-0.5 min-w-0 flex-1'}>
      <p className={'text-2xs font-semibold text-primary-txt line-clamp-1'}>
        {attachment.title}
      </p>
      {attachment.description ? (
        <p className={'text-3xs text-tertiary-txt line-clamp-3'}>
          {attachment.description}
        </p>
      ) : null}
      <span
        className={cx(
          'mt-1 text-[0.6875rem] font-medium text-accent',
          'inline-flex items-center gap-1',
        )}
      >
        Open
        <Icon className={'size-3'} path={attachmentIconPath[attachment.type]} />
      </span>
    </div>
  </a>
);
