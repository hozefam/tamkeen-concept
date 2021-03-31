import { Project } from './../../../../libs/common/src/lib/project';

export interface Task {
  id: number;
  title: string;
  project: Project;
  date: Date;
  status: 'Ready' | 'Claimed';
  deadline: Date;
  isSubstituted: boolean;
}
