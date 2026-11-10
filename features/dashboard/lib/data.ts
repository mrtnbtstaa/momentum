import { 
  CheckCircle2, 
  AlertCircle, 
  PlayCircle, 
  LucideIcon 
} from "lucide-react";

export type TaskPriority = "High" | "Medium" | "Low";
export type TaskStatus = "Done" | "In Review" | "In Progress";
export type ProjectIconName = "box" | "mobile" | "shield";

export interface Stat {
  label: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
  color: string;
}

export interface Deadline {
  title: string;
  project: string;
  date: string;
  priority: TaskPriority;
}

export interface RecentTask {
  title: string;
  status: TaskStatus;
  completed: boolean;
}

export interface TeamActivityItem {
  user: string;
  name: string;
  action: string;
  time: string;
}

export interface ActiveProject {
  title: string;
  owner: string;
  progress: number;
  tasks: string;
  icon: ProjectIconName;
}

// --- Data ---

export const statsData: Stat[] = [
  { label: "Assigned Tasks", value: "24", subtext: "All time", icon: CheckCircle2, color: "text-gray-400" },
  { label: "In Progress", value: "7", subtext: "Active", icon: PlayCircle, color: "text-blue-500" },
  { label: "Completed", value: "12", subtext: "This week", icon: CheckCircle2, color: "text-green-500" },
  { label: "Overdue", value: "3", subtext: "Needs attention", icon: AlertCircle, color: "text-red-500" },
];

export const upcomingDeadlines: Deadline[] = [
  { title: "Design System Audit v2", project: "Atlas Core", date: "Tomorrow, 5:00 PM", priority: "High" },
  { title: "User Feedback Synthesis", project: "Customer Ops", date: "Oct 24", priority: "Medium" },
  { title: "Mobile Navigation Prototype", project: "Mobile App", date: "Oct 26", priority: "Medium" },
  { title: "Q4 Product Roadmap Sync", project: "Exec Briefing", date: "Oct 28", priority: "Low" },
  { title: "Security Review Sign-off", project: "Compliance", date: "Nov 02", priority: "High" },
];

export const recentTasks: RecentTask[] = [
  { title: "Telemetry Schema Definition", status: "Done", completed: true },
  { title: "Authentication Flow Review", status: "In Review", completed: false },
  { title: "Framer Motion Handoff", status: "In Progress", completed: false },
  { title: "Component Tokens Migration", status: "Done", completed: true },
  { title: "Export Pipeline Stress Benchmark", status: "In Review", completed: false },
];

export const teamActivity: TeamActivityItem[] = [
  { user: "AL", name: "Alex", action: "updated status on Navigation ...", time: "12m ago" },
  { user: "MV", name: "Marcus", action: "commented in Mobile Exp...", time: "34m ago" },
  { user: "ER", name: "Elena", action: "closed task in Compliance", time: "1h ago" },
  { user: "TK", name: "Tariq", action: "uploaded specs for Atlas Core", time: "2h ago" },
  { user: "SC", name: "Sarah", action: "reviewed Security Audit", time: "3h ago" },
];

export const activeProjects: ActiveProject[] = [
  { title: "Atlas Platform", owner: "Sarah Chen", progress: 72, tasks: "18 / 25 tasks", icon: "box" },
  { title: "Mobile Experience", owner: "Marcus Vance", progress: 45, tasks: "9 / 20 tasks", icon: "mobile" },
  { title: "Security & Compliance", owner: "Elena Rostova", progress: 90, tasks: "27 / 30 tasks", icon: "shield" },
];