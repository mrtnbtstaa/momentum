import { GenericRadioGroupProps } from "@/components/reusable/RadioGroup/radio-group.types";
import { GenericTabsOption } from "@/components/reusable/Tabs/tabs.types";

export const PROJECT_RADIO_GROUP: GenericRadioGroupProps<string> = {
    options: [
        {
            label: "Sprint & Agile",
            description: "2-week sprints, story points, velocity burn-down",
            value: "sprint"
        },
        {
            label: "Kanban Board",
            description: "Continuous flow, WIP limits, status columns",
            value: "kanban"
        },
        {
            label: "Milestone Roadmap",
            description: "Gantt timeline, deliverables, target dates",
            value: "milestone"
        }
    ]
}

export const PROJECT_LEAD_SELECT: GenericSelectOption<string> = {
    options: [
        {
            value: "elena",
            label: "Elena Rostova"
        },
        {
            value: "john",
            label: "John Doe"
        },
        {
            value: "martin",
            label: "Martin Bautista"
        }
    ]
}

export const PROJECT_QUARTER_SELECT: GenericSelectOption<string> = {
    options: [
        {
            value: "q1",
            label: "Q1"
        },
        {
            value: "q2",
            label: "Q2"
        },
        {
            value: "q3",
            label: "Q3"
        },
        {
            value: "q4",
            label: "Q4"
        },
    ]
}

export const PROJECT_STATUS_TABS: GenericTabsOption<string> = {
    options: [
        { tab: "All" },
        { tab: "Active" },
        { tab: "On hold" },
        { tab: "Completed" },
        { tab: "Archived" },
    ]
}

export const PROJECT_STATUS: GenericSelectOption<string> = {
    options: [
        {
            label: "Active",
            value: "active"
        },
        {
            label: "In Review",
            value: "in review"
        },
        {
            label: "Planned",
            value: "planned"
        },
        {
            label: "Completed",
            value: "completed"
        }
    ]
}

export const PROJECT_URGENCY: GenericSelectOption<string> = {
    options: [
        {
            label: "High Priority",
            value: "high"
        },
        {
            label: "Medium Priority",
            value: "medium"
        },
        {
            label: "Low Priority",
            value: "low"
        },
    ]
}
