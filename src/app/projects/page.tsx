import { Projects } from '@/components/views/projects/projects';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export const metadata = getStaticMetadata({
  title: 'Projects – Abdorizak Abdalla',
  description:
    // eslint-disable-next-line max-len
    "Projects by Abdorizak Abdalla. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://abdorizak.dev/projects',
  keywords: [
    'tech',
    'iOS',
    'Flutter',
    'Odoo',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
  image: buildOgImageUrl('projects'),
});

export default function ProjectsPage() {
  return <Projects full />;
}
