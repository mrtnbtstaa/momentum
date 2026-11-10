import { GenericTabsOption } from "@/components/reusable/Tabs/tabs.types";

export const TASK_STATUS_TAB: GenericTabsOption<string> = {
    options: [
        {tab: "All"},
        {tab: "To Do"},
        {tab: "In Progress"},
        {tab: "Completed"},
        {tab: "Overdue"},
        {tab: "Upcoming deadlines"},
    ]
}

export const TASK_SORT: GenericSelectOption<string> = {
    options: [
        {
            label: "due date",
            value: "due-date"
        },
        {
            label: "Priority",
            value: "priority"
        }
    ]
}