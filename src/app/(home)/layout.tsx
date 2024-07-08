import type { PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { Skills } from '@/components/ui/about/skills';
import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://abdorizak.dev/media/abdorizak/abdorizak-hd.jpg',
  url: 'https://abdorizak.dev',
  sameAs: ['https://abdorizak.dev/about'],
  logo: 'https://abdorizak.dev/media/brand/logo-full.png',
  name: 'Abdorizak Abdalla',
  description:
    'Passionate and creative full-stack software engineer from Somalia 🇸🇴',
  email: 'hola@abdorizak.dev',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomeLayout(props: PropsWithChildren) {
  return (
    <Main>
      <Intro />
      {props.children}
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
      <Skills />
    </Main>
  );
}
