import { Dispatch, SetStateAction, useMemo } from "react";
import { NotificationItem } from "../types/notifications.t";

interface NotificationTableProps {
    activeTab: string
    notifications: NotificationItem[];
    setNotifications: Dispatch<SetStateAction<NotificationItem[]>>
}

export const useNotification = ({ activeTab, notifications, setNotifications }: NotificationTableProps) => {

    const handleMarkAsRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: !n.unread } : n));
    };

    const handleDelete = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const handleActionClick = (item: NotificationItem) => {
        // Handle action routing or modal triggering
        console.log("Clicked action for:", item.title);
    };

    const filteredNotifications = useMemo(() => {
        return notifications.filter((item) => {
            if (activeTab === 'All') return true;
            if (activeTab === 'Unread') return item.unread;
            if (activeTab === 'Tasks') return item.type.includes('task') || item.type === 'deadline';
            if (activeTab === 'Projects') return item.type.includes('project');
            if (activeTab === 'Team') return item.type === 'team_invite';
            if (activeTab === 'Mentions') return item.type === 'mention';
            return true;
        });
    }, [notifications, activeTab]);


    return {
        handleMarkAsRead,
        handleDelete,
        handleActionClick,
        filteredNotifications
    }

}