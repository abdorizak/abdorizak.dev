import { Img } from '@/components/atoms/img';
import type { Project } from '@/content';
import cx from '@/utils/cx';
import { getProjectImageSrc } from '@/utils/projects';

type Screenshot = NonNullable<Project['screenshots']>[number];

interface GalleryProps {
  name: string;
  screenshots?: Project['screenshots'];
}

const FALLBACK_GROUP = '';

// Preserve first-seen group order from the YAML
const groupScreenshots = (
  screenshots: Array<Screenshot>,
): Array<{ group: string; items: Array<Screenshot> }> => {
  const groups: Array<{ group: string; items: Array<Screenshot> }> = [];
  for (const shot of screenshots) {
    const group = shot.group || FALLBACK_GROUP;
    const existing = groups.find((g) => g.group === group);
    if (existing) existing.items.push(shot);
    else groups.push({ group, items: [shot] });
  }
  return groups;
};

export const Gallery = ({ name, screenshots }: GalleryProps) => {
  if (!screenshots || screenshots.length === 0) return null;
  const groups = groupScreenshots(screenshots);

  return (
    <div className={'flex flex-col gap-5'}>
      <h2 className={'text-xs font-semibold text-primary-txt'}>Screenshots</h2>
      {groups.map((group, gi) => (
        <div key={group.group || gi} className={'flex flex-col gap-2.5'}>
          {group.group ? (
            <h3
              className={cx(
                'text-2xs font-semibold uppercase tracking-wide',
                'text-tertiary-txt',
              )}
            >
              {group.group}
            </h3>
          ) : null}
          <div className={'grid grid-cols-1 mobile-lg:grid-cols-2 gap-3'}>
            {group.items.map((shot, i) => (
              <figure key={i} className={'flex flex-col gap-1.5 m-0'}>
                <Img
                  src={getProjectImageSrc(shot.src)}
                  alt={
                    shot.caption ||
                    `${group.group || 'Screenshot'} ${i + 1} of ${name}`
                  }
                  width={shot.meta?.width || 1280}
                  height={shot.meta?.height || 800}
                  blurDataURL={shot.meta?.blurDataURL}
                  placeholder={shot.meta?.placeholder}
                  className={cx(
                    'w-full h-auto rounded-2',
                    'border border-divider bg-toolbar',
                  )}
                />
                {shot.caption ? (
                  <figcaption className={'text-3xs text-tertiary-txt'}>
                    {shot.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
