import polaroid0 from '@/assets/images/about/0.jpg';
import polaroid1 from '@/assets/images/about/3.jpg';
import polaroid2 from '@/assets/images/about/6.jpg';
import { Img } from '@/components/atoms/img';
import cx from '@/utils/cx';

const images = [polaroid0, polaroid1, polaroid2];

const polaroidTilts = ['-rotate-6', 'rotate-1', 'rotate-6'];
const polaroidOffsets = ['-mr-4 tablet-sm:-mr-6', '', '-ml-4 tablet-sm:-ml-6'];

export default function Photo() {
  return (
    <figure
      className={cx(
        'mt-4 mb-2',
        'flex flex-row items-center justify-center',
        'gap-0',
      )}
    >
      {images.map((img, i) => (
        <div
          key={`polaroid-${i}`}
          className={cx(
            'relative shrink-0',
            'bg-accent',
            'p-1.5 pb-4 tablet-sm:p-2 tablet-sm:pb-6',
            'rounded-[2px]',
            'shadow-[0_10px_28px_rgba(0,0,0,0.45)]',
            'transition-transform duration-300',
            'hover:rotate-0 hover:z-10 hover:scale-105',
            polaroidTilts[i],
            polaroidOffsets[i],
            i === 1 ? 'z-1' : '',
          )}
        >
          <div className={'overflow-hidden'} style={{ aspectRatio: '3/4' }}>
            <Img
              src={img}
              alt={`Polaroid ${i + 1}`}
              placeholder={'blur'}
              className={'h-full w-[9rem] tablet-sm:w-[11rem] object-cover'}
              priority={i === 1}
            />
          </div>
        </div>
      ))}
    </figure>
  );
}
