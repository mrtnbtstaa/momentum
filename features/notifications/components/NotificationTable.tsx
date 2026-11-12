import ReusableTable from "@/components/reusable/Table/Table";
import { NotificationItem } from "../types/notifications.t";
import { Dispatch, SetStateAction } from "react";
import { NotificationColumns } from "./NotificationColumns";
import { useNotification } from "../hooks/useNotifications";

interface NotificationTableProps {
    activeTab: string
    notifications: NotificationItem[];
    setNotifications: Dispatch<SetStateAction<NotificationItem[]>>
}

const NotificationTable = ({ activeTab, notifications, setNotifications }: NotificationTableProps) => {
    const { handleMarkAsRead, handleDelete, handleActionClick, filteredNotifications } = useNotification({ activeTab, notifications, setNotifications });
    return (
        <ReusableTable
            columns={NotificationColumns({
                onActionClick: handleActionClick,
                onMarkAsRead: handleMarkAsRead,
                onDelete: handleDelete,
            })}
            data={filteredNotifications}
            footerTitle="notifications"
        />
    )
}

export default NotificationTable;