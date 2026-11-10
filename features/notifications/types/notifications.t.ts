export type NotificationType = 'task_assigned' | 'project_milestone' | 'mention' | 'deadline' | 'team_invite' | 'task_completed' | 'project_member' | 'priority_updated';

export interface NotificationItem {
    id: string;
    type: NotificationType;
    title: string;
    subtitle: string;
    description: string;
    unread: boolean;
    timestamp: string;
    actionLabel?: string;
    actionUrl?: string;
}