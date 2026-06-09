'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import polaroid0 from '@/assets/images/about/0.jpg';
import polaroid1 from '@/assets/images/about/1.jpg';
import polaroid2 from '@/assets/images/about/2.jpg';
import polaroid3 from '@/assets/images/about/3.jpg';
import polaroid4 from '@/assets/images/about/4.jpg';
import polaroid5 from '@/assets/images/about/5.jpg';
import polaroid6 from '@/assets/images/about/6.jpg';
import polaroid7 from '@/assets/images/about/7.jpg';
import { Img } from '@/components/atoms/img';
import cx from '@/utils/cx';

const images = [
  polaroid0,
  polaroid1,
  polaroid2,
  polaroid3,
  polaroid4,
  polaroid5,
  polaroid6,
  polaroid7,
];

// How long each photo stays before crossfading to the next.
const AUTO_ADVANCE_MS = 3500;

export default function Photo() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance on a timer; pauses on hover/focus. Cleaned up on every change.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % images.length),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <figure
      className={'mt-5 mb-4 flex flex-col items-center gap-3'}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className={cx(
          'relative overflow-hidden',
          'w-full',
          'rounded-3 border border-divider bg-toolbar',
          'shadow-[0_18px_44px_rgba(0,0,0,0.4)]',
        )}
        style={{ aspectRatio: '16/9' }}
      >
        <AnimatePresence initial={false} mode={'popLayout'}>
          <motion.div
            key={active}
            className={'absolute inset-0'}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <Img
              src={images[active]}
              alt={`Photo ${active + 1} of ${images.length}`}
              placeholder={'blur'}
              draggable={false}
              priority={active === 0}
              className={'h-full w-full object-cover'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </figure>
  );
}
