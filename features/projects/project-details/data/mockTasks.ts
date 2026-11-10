import { ActivityItem, Task } from "../../projects/types/projects.t";

export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    code: 'CORE-104',
    title: 'Cryptographic key rotation & zero-trust certs',
    category: 'Security Core',
    status: 'Overdue',
    priority: 'Urgent',
    dueDate: 'Oct 24 (Overdue)',
    isOverdue: true,
    assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    completed: false,
  },
  {
    id: '2',
    code: 'CORE-102',
    title: 'Audit color contrast ratios across WCAG AAA primitives',
    category: 'Accessibility',
    status: 'Overdue',
    priority: 'High',
    dueDate: 'Oct 26 (Overdue)',
    isOverdue: true,
    assigneeAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    completed: false,
  },
  {
    id: '3',
    code: 'CORE-088',
    title: 'Refactor design tokens for dark mode system states',
    category: 'Design Systems',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: 'Nov 04',
    assigneeAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    completed: false,
  },
  {
    id: '4',
    code: 'CORE-094',
    title: 'Update API endpoint specifications for headless sync',
    category: 'API Platform',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: 'Nov 08',
    assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    completed: false,
  },
  {
    id: '5',
    code: 'CORE-071',
    title: 'Initialize Tailwind CSS variable mapping schema',
    category: 'Foundation',
    status: 'Completed',
    priority: 'Low',
    dueDate: 'Completed',
    assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    completed: true,
  },
];

export const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'a1',
    timestamp: '12m ago',
    description: 'Sarah Chen moved CORE-088 to In Progress.',
  },
  {
    id: 'a2',
    timestamp: '2h ago',
    description: 'Elena Rostova pushed commit #901d8f: Updated headless radio primitives.',
  },
  {
    id: 'a3',
    timestamp: 'Yesterday',
    description: 'Automated CI flagged CORE-104 as overdue.',
  },
  {
    id: 'a4',
    timestamp: '3d ago',
    description: 'Marcus Vance completed architectural review for Sprint 31.',
  },
];