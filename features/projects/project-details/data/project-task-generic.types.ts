import { TabsOption } from "@/components/reusable/Tabs/tabs.types"

export const PROJECT_TASK_WORKFLOW_STATUS = [
    { label: "In Progress", value: "in progress" },
    { label: "To Do", value: "to do" },
    { label: "In Review", value: "in review" },
    { label: "Completed", value: "completed" },
    { label: "Overdue", value: "overdue" }
] as const satisfies SelectOption<string>[]

export const TASK_STATUES: TabsOption<string> = {
    options: [
        { tab: "All" },
        { tab: "To Do" },
        { tab: "In Progress" },
        { tab: "In Review" },
        { tab: "Done" },
    ]
} as const

export const PROJECT_TASK_URGENT_STATUS = [
    { label: "Urgent", value: "urgent" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" }
] as const satisfies SelectOption<string>[]

export const PROJECT_TASK_CATEGORY = [
    { label: "Security Core (Zero-Trust & PKI)", value: "security_core" },
    { label: "Frontend Architecture & Design Tokens", value: "frontend" },
    { label: "Cloud Infra & Security Compliance", value: "infra" },
] as const satisfies SelectOption<string>[]

export const PROJECT_TASK_ASSIGNEE = [
    { label: "Elena Rostova • Security Lead", value: "elena_rostova" },
    { label: "Sarah Chen • Tech Lead", value: "sarah_chen" },
    { label: "Marcus Vance • Systems Engineer", value: "marcus_vance" },
] as const satisfies SelectOption<string>[]

