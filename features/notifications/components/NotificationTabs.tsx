import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { NOTIFICATION_TABS } from "../types/notification-generic.t";

interface NotificationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NotificationTabs = ({
  activeTab,
  onTabChange,
}: NotificationTabsProps) => {
 

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
      <div className="flex flex-wrap items-center gap-1.5">
        <ReusableTabs defaultValue="All" options={NOTIFICATION_TABS.options} value={activeTab} onValueChange={onTabChange} />
      </div>
    </div>
  );
};

export default NotificationTabs;