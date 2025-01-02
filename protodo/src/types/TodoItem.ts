export interface TodoItem {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  state: number;
  isDeleted: boolean;
}