import { GenericTabsOption } from "@/components/reusable/Tabs/tabs.types";

export const NOTIFICATION_TABS: GenericTabsOption<string> = {
    options: [
        { tab: 'All', },
        { tab: 'Unread', },
        { tab: 'Tasks', },
        { tab: 'Projects', },
        { tab: 'Team', },
        { tab: 'Mentions', },
    ]
}