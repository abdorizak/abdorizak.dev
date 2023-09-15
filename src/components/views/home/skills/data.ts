import {
  mdiGit,
  mdiLanguageJavascript,
  mdiLanguagePython,
  mdiNodejs,
  mdiAccountGroupOutline,
  mdiSwift,
  mdiDart,
  mdiLeaf,
  mdiXcode,
  mdiFlutter,
  mdiPuzzleOutline,
  mdiFastApi,
} from '@/components/icons';

export interface SkillProps {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: SkillProps[] = [
  { name: 'Xcode', iconPath: mdiXcode, color: '#3ddc84' },
  { name: 'Swift', iconPath: mdiSwift, color: '#ea2e2f' },
  { name: 'Flutter', iconPath: mdiFlutter, color: '#3ddc84' },
  { name: 'Dart', iconPath: mdiDart, color: '#888888' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'Python', iconPath: mdiLanguagePython, color: '#3a74a5' },
  { name: 'Fast API', iconPath: mdiFastApi, color: '#888888' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Node JS', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  {
    name: 'Community',
    iconPath: mdiAccountGroupOutline,
    color: '#888888',
    hide: true,
  },
];

const skillsKeys = [...skills.map((it) => it.name.toLowerCase())] as const;
export type SkillKey = (typeof skillsKeys)[number];
