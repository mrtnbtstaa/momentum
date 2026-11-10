export const PROJECT_TASK_WORKFLOW_STATUS: GenericSelectOption<string> = {
    options: [
        {
            label: "In Progress",
            value: "in progress"
        },
        {
            label: "To Do",
            value: "to do"
        },
        {
            label: "In Review",
            value: "in review"
        },
        {
            label: "Completed",
            value: "completed"
        },
        {
            label: "Overdue",
            value: "overdue"
        }
    ]
}

export const PROJECT_TASK_URGENT_STATUS: GenericSelectOption<string> = {
    options: [
        {
            label: "Urgent",
            value: "urgent"
        },
        {
            label: "High",
            value: "high"
        },
        {
            label: "Medium",
            value: "medium"
        },
        {
            label: "Low",
            value: "low"
        }
    ]
}

export const PROJECT_TASK_CATEGORY: GenericSelectOption<string> = {
    options: [
        { label: "Security Core (Zero-Trust & PKI)", value: "security_core" },
        { label: "Frontend Architecture & Design Tokens", value: "frontend" },
        { label: "Cloud Infra & Security Compliance", value: "infra" },
    ]
}

export const PROJECT_TASK_ASSIGNEE: GenericSelectOption<string> = {
    options: [
        { label: "Elena Rostova • Security Lead", value: "elena_rostova" },
        { label: "Sarah Chen • Tech Lead", value: "sarah_chen" },
        { label: "Marcus Vance • Systems Engineer", value: "marcus_vance" },
    ]
}

