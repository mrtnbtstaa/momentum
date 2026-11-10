export type ProjectStatus = "Active" | "On hold" | "Completed";

export interface ProjectMember {
  id: string;
  initials: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  ownerName: string;
  ownerInitials: string;
  dateRange: string;
  category: string;
  members: ProjectMember[];
}

export type TaskPriority = 'Urgent' | 'High' | 'Medium' | 'Low';
export type TaskStatus = 'Completed' | 'In Progress' | 'Todo' | 'Overdue';

export interface Task {
  id: string;
  code: string;
  title: string;
  category: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  isOverdue?: boolean;
  assigneeAvatar?: string;
  completed: boolean;
}

export interface ActivityItem {
  id: string;
  timestamp: string;
  description: string;
}