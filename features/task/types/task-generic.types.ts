import { TabsOption } from "@/components/reusable/Tabs/tabs.types";

export const TASK_STATUS_TAB: TabsOption<string> = {
    options: [
        { tab: "All" },
        { tab: "To Do" },
        { tab: "In Progress" },
        { tab: "Completed" },
        { tab: "Overdue" },
        { tab: "Upcoming deadlines" }
    ]
} as const

export const TASK_SORT = [
    {
        label: "due date",
        value: "due-date"
    },
    {
        label: "Priority",
        value: "priority"
    }
] as const satisfies SelectOption<string>[]