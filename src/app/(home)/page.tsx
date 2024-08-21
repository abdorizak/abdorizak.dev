import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

import { FeaturedBlogPosts } from './featured-posts';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://abdorizak.dev/media/abdorizak/abdorizak-hd.jpg',
  url: 'https://abdorizak.dev',
  sameAs: ['https://abdorizak.dev/about'],
  logo: 'https://abdorizak.dev/media/brand/logo-full.png',
  name: 'Abdirizak Abdalla',
  description:
    'Passionate and creative full-stack software engineer from Colombia 🇨🇴',
  email: 'hola@abdorizak.dev',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
