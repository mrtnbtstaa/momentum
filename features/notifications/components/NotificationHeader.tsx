import { CheckCheck } from 'lucide-react';
import HeaderSection from '@/components/reusable/HeaderSection/HeaderSection';

interface NotificationHeaderProps {
  unreadCount: number;
  totalCount: number;
  onMarkAllAsRead?: () => void;
}

const NotificationHeader = ({
  unreadCount,
  totalCount,
  onMarkAllAsRead,
}: NotificationHeaderProps) => {
  return (
    <HeaderSection 
      title="Notifications"
      subTitle={`${unreadCount} unread · ${totalCount} total`}
      buttonContent="Mark all as read"
      onButtonClicked={onMarkAllAsRead}
      withIcon={<CheckCheck className="w-4 h-4 text-[#888888]" />}
    />
  );
};

export default NotificationHeader;