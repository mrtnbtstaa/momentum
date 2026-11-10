import { TaskGroup } from "../types/tasks.t";
export const tasksData: TaskGroup[] = [
  {
    status: "Overdue",
    tasks: [
      { id: "1", title: "Update API endpoint specifications", project: "Atlas Core", date: "Oct 18", priority: "High", completed: false },
      { id: "2", title: "Security compliance checklist review", project: "Cloud Infra", date: "Oct 20", priority: "High", completed: false },
    ],
  },
  {
    status: "Due this week",
    tasks: [
      { id: "3", title: "Refactor design tokens for dark mode", project: "Atlas Core", date: "Tomorrow", priority: "Medium", completed: false },
      { id: "4", title: "Conduct usability testing on mobile prototype", project: "Mobile Client", date: "Oct 24", priority: "Medium", completed: false },
      { id: "5", title: "Draft launch announcement blog post", project: "Brand Identity", date: "Oct 25", priority: "Low", completed: false },
      { id: "6", title: "Synchronize Figma component library", project: "Atlas Core", date: "Oct 26", priority: "Medium", completed: false },
    ],
  },
  {
    status: "In progress",
    tasks: [
      // Add tasks here
    ],
  },
  {
    status: "Completed",
    tasks: [
      // Add tasks here
    ],
  },
];