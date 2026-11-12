import { TabsOption } from "@/components/reusable/Tabs/tabs.types";

export const NOTIFICATION_TABS: TabsOption<string> = {
    options: [
        { tab: 'All', },
        { tab: 'Unread', },
        { tab: 'Tasks', },
        { tab: 'Projects', },
        { tab: 'Team', },
        { tab: 'Mentions', },
    ]
}