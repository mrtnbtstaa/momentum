export type TaskStatus = "Overdue" | "Due this week" | "In progress" | "Completed";
export type TaskPriority = "High" | "Medium" | "Low";

export interface Task {
  id: string;
  title: string;
  project: string;
  date: string;
  priority: TaskPriority;
  completed: boolean;
}

export interface TaskGroup {
  status: TaskStatus;
  tasks: Task[];
}