export interface Task {
  title: string;
  date: Date;
  status: 'Ready' | 'Claimed';
  deadline: Date;
  isSubstituted: boolean;
}
