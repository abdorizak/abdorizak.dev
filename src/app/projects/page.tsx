import { Main } from '@/components/atoms/main';
import { ProjectsList } from '@/components/ui/projects';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Projects – Abdorizak Abdalla',
  description:
    // eslint-disable-next-line max-len
    "Projects by Abdorizak Abdalla. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://abdorizak.dev/projects',
  keywords: [
    'tech',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
});

export default function ProjectsPage() {
  return (
    <Main>
      <ProjectsList title={'Projects'} />
    </Main>
  );
}
