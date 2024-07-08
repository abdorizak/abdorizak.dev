// import { Link } from '@/components/atoms/link';
import { Main } from '@/components/atoms/main';
import { Section } from '@/components/atoms/section';
import { Zoom } from '@/components/molecules/zoom';
import { Coding } from '@/components/ui/uses/coding';
import { EverydayHardware } from '@/components/ui/uses/hardware';
import { Software } from '@/components/ui/uses/software';
import { Tabs } from '@/components/ui/uses/tabs';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

export default function UsesPage() {
  return (
    <Main>
      <Section id={'uses'} className={'flex-1 gap-6'}>
        <h1
          className={getColoredTextClasses(
            'brand',
            'brand',
            'blue',
            'self-start',
          )}
        >
          What do I use?
        </h1>
        <Tabs>
          <EverydayHardware />
          <Software />
          <Coding />
        </Tabs>
        <Zoom />
      </Section>
    </Main>
  );
}

export const metadata = createMetadata({
  title: 'Uses – Abdorizak Abdalla',
  description:
    'Get to know the hardware, software and tools I use on a daily basis',
  exactUrl: 'https://abdorizak.dev/uses',
  keywords: [
    'hardware',
    'software',
    'apps',
    'tools',
    'extensions',
    'stack',
    'website',
    'tech',
    'uses',
  ],
});
